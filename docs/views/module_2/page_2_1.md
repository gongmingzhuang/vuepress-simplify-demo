---
pageClass: component-page
---

# 自定义全局组件

::: tip
1. 全局组件库定义位置：.vuepress/components/
2. 可通过文件名使用
:::


::: demo

```vue
<template>
  <div class="container">
    <new-button>默认按钮</new-button>
    <new-button type="primary">主要按钮</new-button>
    <new-button type="success">成功按钮</new-button>
    <new-button type="info">信息按钮</new-button>
    <new-button type="warning">警告按钮</new-button>
    <new-button type="danger">危险按钮</new-button>
  </div>
</template>
```
:::