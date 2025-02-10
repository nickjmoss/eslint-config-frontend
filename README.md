# @nickjmoss/eslint-config-frontend

## Getting Started

Install the following packages for this config to work

```bash
bun install -D @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/eslint-config-typescript eslint eslint-plugin-prettier eslint-plugin-vue prettier vue-eslint-parser
```

## Usage

This package uses the new ESLint flat config format so import the config into your `eslint.config.js` file like so:

```js
import { eslintConfigFrontend } from '@nickjmoss/eslint-config-frontend';

export default [
    ...eslintConfigFrontend,
    // additional rules
];
```
