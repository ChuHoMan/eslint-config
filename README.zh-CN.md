# @chuhoman/eslint-config

[![npm](https://img.shields.io/npm/v/@chuhoman/eslint-config?color=91B2D4&label=)](https://npmjs.com/package/@chuhoman/eslint-config)

<p align='center'>
<a href="https://github.com/ChuHoMan/eslint-config/blob/main/README.md">English</a> | <b>简体中文</b>
</p>


## 使用

### 安装

```bash
# pnpm
pnpm install -D eslint @chuhoman/eslint-config
```
### 配置 `.eslintrc`

```json
{
  "extends": "@chuhoman"
}
```

### 在 package.json 中添加 scripts

示例:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### 配置 VS Code 自动修复代码

安装 [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 然后创建 `.vscode/settings.json`

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
