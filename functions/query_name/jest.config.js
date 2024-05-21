// jest.config.js in an individual function directory
const base = require("../jest.config.js");

module.exports = {
    ...base,
    moduleNameMapper: {
        "@/shared/(.*)": "<rootDir>/../shared/$1",
    },
    // Add any function-specific configuration here
};
