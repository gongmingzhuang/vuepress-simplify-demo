
### 本项目为了方便编写二次开发element-ui 组件库说明文档而开发

- 安装为本地依赖项
npm install -D vuepress
 
- 创建一个 docs 目录
mkdir docs
 
- 创建一个 markdown 文件
echo '# Hello VuePress' > docs/README.md
 
- 给package.json 添加一些 scripts 脚本：
```js
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
- 运行项目
yarn run docs:dev 