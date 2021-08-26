module.exports = {
  title: 'Vuepress Demo',
  description: 'Vuepress Demo',
  dest: './dist',
  port: 8080,
  plugins: ["demo-container"],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '项目基础', link: '/views/module_1/page_1_1' },
      { text: '项目扩展', link: '/views/module_2/page_2_1' },
      { text: '参考链接',
        items: [
          { text: 'vuepress 官网', link: 'https://www.vuepress.cn/' },
          { text: 'vuepress 指南', link: 'https://www.vuepress.cn/guide/' },
          { text: 'vuepress 导航', link: 'https://www.vuepress.cn/theme/default-theme-config.html' },
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/views/': [
        {
          title: '项目基础',
          collapsable: true,
          children: [
            'module_1/page_1_1',
            'module_1/page_1_2',
            'module_1/page_1_3',
          ]
        },
        {
          title: '项目扩展',
          collapsable: true,
          children: [
            'module_2/page_2_1',
            'module_2/page_2_2',
            'module_2/page_2_3',
          ]
        },
      ],
    }
  }
}