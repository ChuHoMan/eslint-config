# @chuhoman/eslint-config

[![npm](https://img.shields.io/npm/v/@chuhoman/eslint-config?color=91B2D4&label=)](https://npmjs.com/package/@chuhoman/eslint-config)

<p align='center'>
<a href="https://github.com/ChuHoMan/eslint-config/blob/main/README.md">English</a> | <b>简体中文</b>
</p>

> [!IMPORTANT]
> 从 v1.0.0 开始, 配置通过 [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new) 重写.

## 使用

### 安装

```bash
# pnpm
pnpm install -D eslint @chuhoman/eslint-config
```
### 创建配置文件

推荐在 `package.json` 使用  [`"type": "module"`](https://nodejs.org/api/packages.html#type)：

```js
// eslint.config.js
import chuhoman from '@chuhoman/eslint-config';

export default chuhoman();
```

CJS:

```js
// eslint.config.js
const chuhoman = require('@chuhoman/eslint-config').default;

module.exports = chuhoman();
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

### 配置 VS Code

安装 [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 然后创建 `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  // Enable the ESlint flat config support
  "eslint.experimental.useFlatConfig": true,

  // Disable the default formatter, use eslint instead
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off" },
    { "rule": "*-indent", "severity": "off" },
    { "rule": "*-spacing", "severity": "off" },
    { "rule": "*-spaces", "severity": "off" },
    { "rule": "*-order", "severity": "off" },
    { "rule": "*-dangle", "severity": "off" },
    { "rule": "*-newline", "severity": "off" },
    { "rule": "*quotes", "severity": "off" },
    { "rule": "*semi", "severity": "off" }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ]
}
```

### Customization

您可以单独配置每个集成，例如：

```js
// eslint.config.js
import chuhoman from '@chuhoman/eslint-config';

export default chuhoman(
  {
  // 开启 stylistic 格式化规则
  // stylistic: true,

    // 或自定义 stylistic 规则
    stylistic: {
      indent: 2, // 4, 或 'tab'
      quotes: 'single', // 或 'double'
    },

    // TypeScript 、Vue、React 是自动检测的，你也可以显式启用它们:
    typescript: true,
    vue: true,
    react: true,

    // 禁用 jsonc and yaml 检测
    jsonc: false,
    yaml: false,

    // `.eslintignore` 在 Flat config 不再支持, 请改用 `ignores`
    ignores: [
      './fixtures',
    // ...globs
    ]
  },
  // 第二个参数是 ESLint Flat Configs
  // 您可以有多个配置
  {
    files: ['**/*.ts'],
    rules: {},
  },
  {
    rules: {},
  },
);
```

## 致谢

灵感来自

- [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## License

Made with 💙

Published under [MIT License](./LICENSE).
