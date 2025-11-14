import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        plugins: { js },

        extends: ['js/recommended'],

        languageOptions: { globals: globals.node },

        rules: {
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/explicit-function-return-type': ['off'],
            '@typescript-eslint/no-explicit-any': ['warn'],
        },
    },

    js.configs.recommended,
    tseslint.configs.recommended,
]);
