---
pageClass: component-page
---

# 引入 vue-highlight.js

::: tip
1. 安装：npm install vue-highlight.js
2. 引入：
```js
// .vuepress/enhanceApp.js
 import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';

// 注册对应语言，否则可能会报识别不了对应语言
Vue.use(VueHighlightJS, {
  languages: {
      css,
      javascript,
      vue
  }
});

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
  Vue.use(VueHighlightJS)
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

---
<Common-Democode title="基本用法" description="基本按钮用法" name="基本用法">
  <highlight-code slot="codeText" lang="vue">
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
  </highlight-code>
</Common-Democode>

::: warning
1. 使用代码高亮，会报一下错误<br>
 `<Common-Democode>` - did you register the component correctly
2. vue-highlight.js 非必须引入
:::