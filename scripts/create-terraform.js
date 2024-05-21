const fs = require("fs");
const path = require("path");

const {
    directoryNames,
    functionsPath,
    buildPath,
    excludedFolders,
} = require("./shared/get-directories");
const { hashFolder } = require("./shared/hash-folder");

const outputName = "all_functions_generated.tf";

console.log(`Writing to ${outputName}`);
fs.writeFileSync(`${functionsPath}/${outputName}`, "");

const getServiceConfig = (functionPath, functionName) => {
    const serviceConfigPath = path.join(
        functionPath,
        "tf/service_config_attribute.tf"
    );

    if (!fs.existsSync(serviceConfigPath)) {
        console.log(
            `No service config found for function ${functionName}, returning default`
        );

        return `
        service_config {
            max_instance_count                  = 10
            min_instance_count                  = 0
            available_memory                    = "512M"
            timeout_seconds                     = 3600
            available_cpu                       = "1"
            max_instance_request_concurrency    = 10
        
            environment_variables = {
                GCP_PROJECT = var.project_id
            }
          }
`;
    }

    console.log(`Reading service config from ${serviceConfigPath}`);
    const serviceConfig = fs.readFileSync(serviceConfigPath, "utf8");

    return serviceConfig;
};

try {
    let terraformConfig = "";

    for (const functionName of directoryNames) {
        const functionPath = path.join(functionsPath, functionName);
        const libPath = path.join(functionPath, "lib");

        if (excludedFolders.includes(functionName)) {
            continue;
        }

        console.log(`Processing function: ${functionName}`);

        console.log(`Omitting terraform config for function ${functionName}`);

        if (!fs.existsSync(libPath)) {
            console.log(
                `No lib folder found for function ${functionName}, skipping`
            );
            continue;
        }

        const hash = hashFolder(libPath);
        console.log(`Generated hash: ${hash}`);

        const zipFilename = `${functionName}_${hash}.zip`;
        const zipPath = path.join(buildPath, zipFilename);

        const serviceConfig = getServiceConfig(functionPath, functionName);

        terraformConfig += `
resource "google_storage_bucket_object" "${functionName}_code" {
  name   = "${zipFilename}"
  bucket = var.functions_bucket_name
  source = "${zipPath}"
}

resource "google_cloudfunctions2_function" "${functionName}" {
  depends_on = [google_storage_bucket_object.${functionName}_code]
  
  name        = "${functionName}"
  location    = var.region


  build_config {
    runtime = "nodejs18"
    entry_point = "handler"  # Set the entry point 

    source {
      storage_source {
        bucket = var.functions_bucket_name
        object = "${zipFilename}"
      }
    }
  }

  ${serviceConfig}`;

        const functionAttributesPath = path.join(
            functionPath,
            "tf/additional_function_attributes.tf"
        );

        if (fs.existsSync(functionAttributesPath)) {
            console.log(
                `Reading function attributes from ${functionAttributesPath}`
            );
            const functionAttributes = fs.readFileSync(
                functionAttributesPath,
                "utf8"
            );
            terraformConfig +=
                "\n\n" +
                functionAttributes
                    .replace(/{{function_name}}/g, functionName)
                    .split("\n")
                    .map((line) => "  " + line)
                    .join("\n");
        }

        terraformConfig += `
}\n`;

        const relatedInfrastructurePath = path.join(
            functionPath,
            "tf/related_infrastructure.tf"
        );

        if (fs.existsSync(relatedInfrastructurePath)) {
            console.log(
                `Reading related infrastructure config from ${relatedInfrastructurePath}`
            );
            const functionConfig = fs.readFileSync(
                relatedInfrastructurePath,
                "utf8"
            );
            terraformConfig += functionConfig.replace(
                /{{function_name}}/g,
                functionName
            );
        }

        console.log(
            `Appending terraform config for function ${functionName} to all_functions_generated.tf`
        );
    }

    fs.writeFileSync(`${functionsPath}/${outputName}`, terraformConfig);
} catch (err) {
    console.error("TF generation failed", err);
    throw err;
}
