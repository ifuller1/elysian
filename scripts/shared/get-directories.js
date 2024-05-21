const path = require("path");
const fs = require("fs");

const currentPath = process.cwd();
const functionsPath = currentPath.endsWith("/functions") ? "." : "./functions";
const buildPath = path.join(functionsPath, "build");

const excludedFolders = [
    "build",
    "shared",
    "cleanBuildLog",
    ".vscode",
    ".git",
    "node_modules",
    "scripts",
    "types",
];

const allFiles = fs.readdirSync(functionsPath, { withFileTypes: true });
const directories = allFiles.filter((dirent) => dirent.isDirectory());
const directoryNames = directories.map((dirent) => dirent.name);

module.exports = { directoryNames, functionsPath, buildPath, excludedFolders };
