module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "settings":{
        "react": {
            "version": "detect"
        }
    },
    "overrides": [
        {
          "files": [
            "src/Component/**/*.test.js"
          ],
          "env": {
            "jest": true
          }
        }
      ]
};