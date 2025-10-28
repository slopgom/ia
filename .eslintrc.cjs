module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["jsdoc"],
  extends: ["eslint:recommended", "plugin:jsdoc/recommended"],
  rules: {
    // Requerir JSDoc en funciones, métodos y clases públicas
    "jsdoc/require-jsdoc": ["warn", {
      publicOnly: true,
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
        ArrowFunctionExpression: true,
        FunctionExpression: true
      }
    }],
    // Avisar (no fallar) si faltan @param o @returns
    "jsdoc/require-param": "warn",
    "jsdoc/require-returns": "warn"
  },
  settings: {
    jsdoc: {
      tagNamePreference: {
        "jest-environment": false
      }
    }
  }
};

