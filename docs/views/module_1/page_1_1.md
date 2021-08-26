---
pageClass: component-page
---

# 引入 element-ui

::: tip
1. 安装：npm install element-ui
2. 引入：
```js
// .vuepress/enhanceApp.js

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
  Vue.use(Element)
}
```
:::


### 应用

&nbsp;

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

&nbsp;
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
```