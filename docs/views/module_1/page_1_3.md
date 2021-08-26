---
pageClass: component-page
---

# 一次代码渲染 + 折叠代码

::: tip
1. 安装：npm install vuepress-plugin-demo-container
2. 引入：
```js
// .vuepress/config.js

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

module.exports = {
  plugins: ["demo-container"]
}
```
3. 使用：
```js
  // 通过vuepress 自定义容器使用
  /*
    ::: demo
      // some codes
    :::
  */
```
:::


### 应用

::: demo

```vue
<template>
  <div class="demo-button">
    <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>
  </div>
</template>
<script></script>
```
:::