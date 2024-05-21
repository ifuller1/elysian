module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["./**/*.[jt]s?(x)"],
    roots: ["<rootDir>/tests"],
    globals: {
        "ts-jest": {
            tsconfig: "<rootDir>/tsconfig.json",
        },
    },
};
