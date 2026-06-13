import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },

  {
    rules:{
      "no-var": "error",
      "no-unused-vars": "off",
      "no-undef": "off",
      "arrow-body-style":["error" , "as-needed"],
      "no-self-assign": "error",
      "no-use-before-define": "error",
      "no-void":"error"
    },
  }
]);


