// eslint.config.js
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import prettier from 'eslint-plugin-prettier';
import recommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default [
    {
        files: ['**/*.js', '**/*.ts', '**/*.vue'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: tsparser,
                sourceType: 'module',
                ecmaVersion: 'latest',
                extraFileExtensions: ['.vue'],
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            prettier,
            vue,
        },
        rules: {
            // Base ESLint recommended rules
            ...js.configs.recommended.rules,

            // TypeScript recommended rules
            ...tseslint.configs.recommended.rules,

            // Vue recommended rules
            ...vue.configs['strongly-recommended'].rules,

            // Prettier recommended rules
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    tabWidth: 4,
                    htmlWhitespaceSensitivity: 'ignore',
                },
            ],

            // Custom rule adjustments
            '@typescript-eslint/no-explicit-any': 'warn',
            'vue/multi-word-component-names': 'off',
            'vue/no-multiple-template-root': 'off',
            'vue/html-indent': 'off',
            'vue/attribute-hyphenation': 'error',
            'vue/max-attributes-per-line': 'off',
            'vue/singleline-html-element-content-newline': 'off',
        },
    },
    recommended,
];
