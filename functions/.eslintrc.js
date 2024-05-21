module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "eslint-config-google",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: ["tsconfig.json"],
        sourceType: "module",
    },
    ignorePatterns: [
        "/lib/**/*", // Ignore built files.
        ".eslintrc.js",
        "tailwind.config.js",
        "postcss.config.js",
        "next.config.js",
        "jest.config.js",
        "rollup.config.js",
    ],
    plugins: ["@typescript-eslint", "import", "no-only-tests"],
    rules: {
        "no-only-tests/no-only-tests": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "no-console": "off",
        quotes: ["error", "double"],
        "import/no-unresolved": 0,
        "require-jsdoc": "off",
        "quote-props": "off",
        "object-curly-spacing": "off",
        indent: "off",
        "max-len": [
            "error",
            {
                code: 80,
                tabWidth: 4,
                ignoreComments: true, //"comments": 80
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        "sort-imports": [
            "error",
            {
                ignoreCase: true,
                ignoreDeclarationSort: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["all", "single", "multiple", "none"],
                allowSeparatedGroups: false,
            },
        ],
    },
};
