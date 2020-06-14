module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["tsc", "jest"],
  root: true,
  extends: "@react-native-community",
  rules: {
    quotes: ["warn", "double", { allowTemplateLiterals: true }],
    "tsc/config": [
      1,
      {
        configFile: "tsconfig.json",
      },
    ],
    "react/prop-types": 1,
    "prettier/prettier": 1,
    "@typescript-eslint/no-unused-vars": 1,
    semi: 0,
  },
  env: {
    "jest/globals": true,
  },
}
