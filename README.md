# @chuhoman/eslint-config

[![npm](https://img.shields.io/npm/v/@chuhoman/eslint-config?color=91B2D4&label=)](https://npmjs.com/package/@chuhoman/eslint-config)

<p align='center'>
<b>English</b> | <a href="https://github.com/ChuHoMan/eslint-config/blob/main/README.zh-CN.md">简体中文</a>
</p>


## Usage

### Install

```bash
# pnpm
pnpm install -D eslint @chuhoman/eslint-config
```
### Config `.eslintrc`

```json
{
  "extends": "@chuhoman"
}
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```



## License

Made with 💙

Published under [MIT License](./LICENSE).
