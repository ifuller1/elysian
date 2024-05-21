const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const archiver = require("archiver");
const { hashFolder } = require("./shared/hash-folder");

const {
    directoryNames,
    functionsPath,
    buildPath,
    excludedFolders,
} = require("./shared/get-directories");

// Remove all zip files in ./functions/build
execSync(`rm -rf ${functionsPath}/build`, { stdio: "inherit" });
execSync(`mkdir ${functionsPath}/build`, { stdio: "inherit" });

console.log(`Paths found: ${directoryNames}`);

try {
    for (const functionName of directoryNames) {
        const functionPath = path.join(functionsPath, functionName);
        const libPath = path.join(functionPath, "lib");

        if (excludedFolders.includes(functionName)) {
            continue;
        }

        // // Run npm commands
        const currentPath = process.cwd();
        console.log(`
    
        ======================================

        
        `);

        const specificFunction = process.argv.find((name) => {
            console.log(name);
            return name.includes("--target");
        });

        console.log(`Specific function ${specificFunction}`);

        if (specificFunction && !specificFunction.includes(functionName)) {
            console.log(`Skipping ${functionName}`);
            continue;
        }

        console.log(`Building function ${functionName}`);
        process.chdir(functionPath);
        console.log(`Building function in: ${process.cwd()}`);
        execSync("rm -rf ./lib/", { stdio: "inherit" });
        if (fs.existsSync("./assets")) {
            execSync("mkdir -p ./lib/assets", { stdio: "inherit" });
            execSync("cp -r ./assets/* ./lib/assets/", { stdio: "inherit" });
        }
        execSync("rm -rf .parcel-cache/", { stdio: "inherit" });
        execSync("npm ci", { stdio: "inherit" });
        execSync("npm test", { stdio: "inherit" });
        execSync("npm run build", { stdio: "inherit" });
        if (!process.argv.includes("--keep")) {
            execSync("rm -rf ./node_modules", { stdio: "inherit" });
        }
        process.chdir(currentPath);

        // Read the existing package.json file
        const packageFile = path.join(functionPath, "package.json");
        let data = fs.readFileSync(packageFile, "utf8");

        // Parse the file content to a JSON object
        let packageJson = JSON.parse(data);

        // Filter the dependencies
        const includeNodeModules =
            packageJson.targets?.main?.includeNodeModules;
        const externals = includeNodeModules || {};
        const externalsArray = Object.keys(externals);
        packageJson.dependencies = Object.keys(packageJson.dependencies)
            .filter((key) => externalsArray.includes(key))
            .reduce((obj, key) => {
                obj[key] = packageJson.dependencies[key];
                return obj;
            }, {});

        const newPackageJson = {
            name: packageJson.name,
            version: packageJson.version,
            description: packageJson.description,
            main: "index.js",
            dependencies: packageJson.dependencies,
        };

        // Write the new package.json to ./lib directory
        fs.writeFileSync(
            path.join(libPath, "package.json"),
            JSON.stringify(newPackageJson, null, 2)
        );

        // Calculate hash
        const hash = hashFolder(libPath);

        // Create zip
        const output = fs.createWriteStream(
            path.join(buildPath, `${functionName}_${hash}.zip`)
        );

        const archive = archiver("zip", {
            zlib: { level: 9 }, // Sets the compression level.
        });

        output.on("close", function () {
            console.log(archive.pointer() + " total bytes");
            console.log(
                "archiver has been finalized and the output file descriptor has closed."
            );
        });

        output.on("end", function () {
            console.log("Data has been drained");
        });

        output.on("finish", function () {
            console.log("Finish");
        });

        archive.on("warning", function (err) {
            if (err.code === "ENOENT") {
                // log warning
                console.log(err);
            } else {
                // throw error
                throw err;
            }
        });

        archive.on("error", function (err) {
            throw err;
        });

        archive.pipe(output);
        archive.directory(libPath, false, {
            date: new Date("2021-01-01 00:00"), // fix the date
        });
        archive.finalize();
    }
} catch (error) {
    console.log("Something went wrong building", error);
    throw error;
}
