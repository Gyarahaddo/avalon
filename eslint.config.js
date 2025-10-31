// import js from "@eslint/js";
// import globals from "globals";
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";
// import tseslint from "typescript-eslint";
// import { globalIgnores } from "eslint/config";
// import eslintConfigPrettier from "eslint-config-prettier";

// export default tseslint.config([
//   globalIgnores(["dist", "node_modules", ".yarn", "coverage"]),

//   {
//     files: ["**/*.{ts,tsx}"],
//     extends: [
//       js.configs.recommended,
//       tseslint.configs.recommended,
//       reactHooks.configs["recommended-latest"],
//       reactRefresh.configs.vite,
//     ],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//   },

//   {
//     files: ["**/*.{js,cjs,mjs,ts,cts,mts}"],
//     excludedFiles: ["src/**/*"],
//     extends: [
//       js.configs.recommended,
//       ...tseslint.configs.recommended,
//       eslintConfigPrettier,
//     ],
//     languageOptions: { globals: { ...globals.node } },
//   },
// ]);

// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config([
  // Global ignores
  globalIgnores(["dist", "node_modules", ".yarn", "coverage"]),

  // App source (TS/TSX)
  {
    files: ["src/**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended, // use ...recommendedTypeChecked + parserOptions.project if you want stricter type-aware rules
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2023,
      globals: { ...globals.browser },
    },
    rules: {
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },

  // Node-side configs/scripts (no DOM)
  {
    files: ["**/*.{js,cjs,mjs,ts,cts,mts}"],
    ignores: ["src/**/*"], // <-- flat config uses "ignores" (not excludedFiles)
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: { globals: { ...globals.node } },
  },

  // Keep Prettier last to disable conflicting stylistic rules
  eslintConfigPrettier,
]);
