// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      // {
      //   text: '前端文章',
      //   items: [
      //     { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
      //     // { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
      //   ],
      // },
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
      { text: 'Java', link: '/pages/35e5b3/' },
      { text: 'C++', link: '/pages/b3da01/' },
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: 'SSM', link: '/pages/00bef2/' },
      { text: 'SpringBoot', link: '/pages/0d4b9f/' },
      { text: 'SpringCloud', link: '/pages/96e573/' },
      { text: 'Maven', link: '/pages/5b9927/' },
    ],
  },

  {
    text: '小记',
    link: '/more/',
    items: [
      { text: 'FBI读心术', link: '/pages/f2a556/' },
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
