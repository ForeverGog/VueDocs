const nav = require('./nav.js');
const htmlModules = require('./htmlModules.js');
// const sidebar = require('./sidebar.js');

// 主题配置
module.exports = {
  nav,
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/EB-logo.png', // 导航栏logo
  repo: 'asheone18/VueDocs', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  docsDir: 'docs', // 编辑的文件夹
  editLinks: true, // 启用编辑
  editLinkText: '编辑',

  sidebar: 'structuring', 

  author: {
    
    name: 'Ashe', // 必需
    link: 'https://github.com/asheone18', // 可选的
  },
  blogger: {
    // 博主信息，显示在首页侧边栏
    avatar: '/img/xuangou.png',
    name: 'ID:炫神',
    slogan: '签名:含金量国服没有含金量',
  },
  social: {
    icons: [
      {
        iconClass: 'icon-youjian',
        title: '发邮件',
        link: 'mailto:foreverxin1005@gmail.com',
      },
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/asheone18',
      },
      {
        iconClass: 'icon-erji',
        title: '听音乐',
        link: 'https://www.bilibili.com/video/BV1uT4y1P7CX?from=search',
      },
    ],
  },
  footer: {
    createYear: 2021, 
    copyrightInfo:
      'Ashe | <a href="www.baidu.com" target="_blank">MIT License</a>', 
  },
  htmlModules 
}
