"use strict";

module.exports = {
  env: {
    es6: true,
  },
  rules: {
    strict: ["error", "global"],
    "func-style": ["error", "expression"],
    "no-new-func": "error",
    "no-param-reassign": "error",
    "prefer-arrow-callback": "error",
    "arrow-parens": ["error", "always"],
    "arrow-body-style": ["error", "as-needed"],
    "new-cap": "error",
    "no-invalid-this": "error",
  },
};
