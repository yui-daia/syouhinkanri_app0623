module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: [
    "prettier", // Prettierとの競合を防ぐため
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    "no-console": 1,
  },
};
