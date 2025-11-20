import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    tseslint.configs.recommended,
    js.configs.recommended,

    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        languageOptions: { globals: globals.node },

        rules: {
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-explicit-any': ['warn'],
            '@typescript-eslint/explicit-function-return-type': 'off',
            'no-unused-vars': 'warn',
        },
    },
]);
