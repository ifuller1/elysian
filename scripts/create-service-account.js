const { execSync } = require("child_process");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to execute shell commands
function execCommand(command) {
    try {
        console.log(`Running command: ${command}`);
        const output = execSync(command, { encoding: "utf-8" });
        console.log(output);
    } catch (err) {
        console.error(`Error executing command: ${command}\n${err}`);
    }
}

const projectName = "elysian-client-services";
const accountName = "gh-service-account";

readline.question(
    "Are you sure you want to proceed with the setup? ",
    (response) => {
        if (response.toLowerCase() !== "y") {
            console.log("Setup cancelled.");
            process.exit(1);
        }

        readline.close();

        execCommand("gcloud auth login");

        execCommand(`gcloud config set project ${projectName}`);

        try {
            execCommand(
                `gcloud iam service-accounts create ${accountName} --display-name=${accountName}`
            );
        } catch (error) {
            console.error(
                `Failed to create service account, but proceeding anyway: ${error}`
            );
        }

        [
            "roles/owner",
            "roles/storage.admin",
            "roles/iam.serviceAccountUser",
            "roles/cloudbuild.builds.builder",
            "roles/cloudfunctions.developer",
            "roles/firebase.admin",
            "roles/editor",
            "roles/owner",
            "roles/iam.serviceAccountUser",
            "roles/storage.objectViewer",
            "roles/serviceusage.apiKeysAdmin",
            "roles/serviceusage.serviceUsageAdmin",
            "roles/servicemanagement.quotaAdmin",
        ].forEach((role) => {
            // Grant the service account the necessary permissions
            execCommand(
                `gcloud projects add-iam-policy-binding ${projectName} --member=serviceAccount:${accountName}@${projectName}.iam.gserviceaccount.com --role=${role}`
            );
        });

        // Generate a key for the service account
        execCommand(
            `gcloud iam service-accounts keys create ${accountName}.json --iam-account=${accountName}@${projectName}.iam.gserviceaccount.com`
        );
    }
);
