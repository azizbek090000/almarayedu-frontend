import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintImport from "eslint-plugin-import";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import ts from "@typescript-eslint/eslint-plugin";

export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      globals: globals.browser,
      sourceType: "module",
      parser: tsParser,
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "@typescript-eslint": ts,
      prettier,
      "react-refresh": reactRefresh,
      import: eslintImport,
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"],
            ["internal"],
            ["parent", "sibling", "index"],
          ],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
          ],
          "newlines-between": "always",
        },
      ],
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "prettier/prettier": "warn",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "no-duplicate-imports": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
];
