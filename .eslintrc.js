module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  extends: [
    "prettier", // Prettierとの競合を防ぐため
  ],
  plugins: ["react", "import", "react-hooks"],
  ignorePatterns: ["node_modules/"],
  // add your custom rules here
  rules: {
    "no-console": 1,
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
};
