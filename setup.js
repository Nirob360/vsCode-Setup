// React project Eslint setup for my self

const lintSetup = {
    scripts: {
        "lint": "yarn add -D prettier && yarn add -D babel-eslint && npx install-peerdeps --dev eslint-config-airbnb && yarn add -D eslint-config-prettier eslint-plugin-prettier"
    },
    uninstall_eslint: {
        "error fix ":  "yarn remove eslint"
    },
    FixAll_eslint_problem : {
        "update Eslint": "yarn upgrade -R eslint"
    }


    
}

// ================= .eslintrc.json =========================

const Eslintconfigartion = {
    ".eslintrc.json": {
        "extends": [
          "airbnb",
          "airbnb/hooks",
          "eslint:recommended",
          "prettier",
          "plugin:jsx-a11y/recommended"
        ],
        "parser": "babel-eslint",
        "parserOptions": {
          "ecmaVersion": 8
        },
        "env": {
          "browser": true,
          "node": true,
          "es6": true,
          "jest": true
        },
        "rules": {
          "react/react-in-jsx-scope": 0,
          "react-hooks/rules-of-hooks": "error",
          "no-console": 0,
          "react/state-in-constructor": 0,
          "indent": 0,
          "linebreak-style": 0,
          "react/prop-types": 0,
          "jsx-a11y/click-events-have-key-events": 0,
          "react/jsx-filename-extension": [
            1,
            {
              "extensions": [".js", ".jsx"]
            }
          ],
          "prettier/prettier": [
            "error",
            {
              "trailingComma": "es5",
              "singleQuote": true,
              "printWidth": 100,
              "tabWidth": 4,
              "semi": true,
              "endOfLine": "auto"
            }
          ]
        },
        "plugins": ["prettier", "react", "react-hooks"]
      }
}




// =================  vs code json code   ================

 const vsecode = {
   
  
    // config related to code formatting
    
    "editor.formatOnSave": true,
    "[javascript]": {
      "editor.formatOnSave": false,
      "editor.defaultFormatter": null
    },
    "[javascriptreact]": {
      "editor.formatOnSave": false,
      "editor.defaultFormatter": null
    },
    "javascript.validate.enable": false, //disable all built-in syntax checking
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.tslint": true,
      "source.organizeImports": true
    },
    "eslint.alwaysShowStatus": true,
    // emmet
    "emmet.triggerExpansionOnTab": true,
    "emmet.includeLanguages": {
      "javascript": "javascriptreact"
    }
  }



//   ============================ .env =================================

const env = {
    SKIP_PREFLIGHT_CHECK=true
}
