const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  // theme: 'vdoing', // 使用npm包主题
  theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "Ashe & ZzGo & Qin Vue-Blog",
  description: 'C / C++ /  C# / GO / Java / Python / JavaScript / TypeScript / Html / Css',
  base: "/VueDocs/", // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
    tags: false,
  },

  head,
  plugins,
  themeConfig,



  plugins: [
      [
         'cursor-effects',
         {
            size: 2, // 粒子大小
            shape: 'star', // 粒子形状（可选 'star' 和 'circle'）
            zIndex: 999999999,
         },
      ],
   ],
}
