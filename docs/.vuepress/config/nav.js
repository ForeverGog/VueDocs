// nav
module.exports = [
  { text: '首页', link: '/' },

  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '学习笔记',
        items: [
          { text: '《JavaScript》', link: '/note/javascript/' },
          { text: '《Vue》', link: '/note/vue/' },
        ],
      },
    ],
  },
  {
    text: '后端',
    link: '/ui/',
    items: [
      {
        text: '学习笔记',
        items: [
          { text: '《Java》', link: '/note/java/' },
          { text: '《C++》', link: '/note/cpp/' },
        ],
      },
    ],
  },
  // ------------------------------------------------
  {
    text: '技术',
    link: '/technology/',
    items: [
{
  text: '学习笔记',
  items: [
    {text: '《Maven》',link: '/note/maven/'},
    {text: '《Spring5》',link: '/note/spring5/'},
  ]
}
    ],
  },
  // -------------------------------------------------
  {
    text: '小记',
    link: '/more/',
    items: [
      { text: '一些实用小技巧', link: '/pages/0b37ee/' },
      { text: '996公司黑名单', link: '/pages/aea6571b7a8bae86/' },
      { text: '好玩的项目', link: '/pages/2d615df9a36a98ed/' },
      { text: '让她三天喜欢上你', link: '/pages/baaa02/' },
      { text: '朋友圈', link: '/friends/' },
    ],
  },

  { 
    text: '教程', 
    link: '/turorials/',
    items: [
      { text: '快速上手', link: '/pages/b45ea2/'},
      { text: '使用细节', link: '/pages/a6f543/'}
    ],
  },

  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    // items: [
    //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
    //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },

]
