module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint"],
  extends: ["plugin:react/recommended", "airbnb", "next", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".tsx"],
      },
    ],
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "no-return-assign": "off",
    "import/no-absolute-path": "off",
    "no-nested-ternary": "off",
    "no-fallthrough": "off",
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsForRegex: ["^draft$", "Draft$"],
      },
    ],
  },
  ignorePatterns: [".eslintrc.cjs", "next.config.js"],
  globals: {
    JSX: true,
    NodeJS: true,
  },
};
