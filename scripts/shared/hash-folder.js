const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");

const fileToDigestString = (file) => {
    console.log(`Hashing file:${file}`);
    const fileBuffer = fs.readFileSync(file);
    return crypto.createHash("sha256").update(fileBuffer).digest("hex");
};

const pathToDigest = (libPath) => {
    const isDirectory = fs.statSync(libPath).isDirectory();

    if (!isDirectory) {
        return fileToDigestString(libPath);
    }

    return fs
        .readdirSync(libPath)
        .map((item) => {
            return pathToDigest(path.join(libPath, item));
        })
        .flat();
};

const hashFolder = (libPath) => {
    execSync(`ls ${libPath}`, { stdio: "inherit" });

    console.log(`Hashing ${libPath}`);

    const hashes = pathToDigest(libPath);

    const hash = crypto
        .createHash("sha256")
        .update(hashes.join(""))
        .digest("hex");

    console.log(`Hashed ${libPath} to ${hash}`);

    return hash;
};

module.exports = { hashFolder };
