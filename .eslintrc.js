module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "ignorePatterns": ["node_modules", "dist", "tsconfig.json"],
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript"
  ],
  "rules": {
    "no-console": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-unused-vars": "off"
  },
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "ecmaFeatures": {
      "legacyDecorators": true
    }
  },
  "overrides": [
    {
      "files": [
        "tests/**/*.{j,t}s?(x)"
      ],
      "env": {
        "jest": true
      }
    }
  ]
}
