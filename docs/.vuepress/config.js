const path = require('path')
const nav = require('./config/nav/')
const sidebar = require('./config/sidebar/')

module.exports = {
    // dest: 'gb-pages',//打包目录
    // base: '/Blog/', //github
    base: '/', //服务器地址
    title: "ck-Block",
    description: '叩首问路，码梦为生',
    head: [
      ['link', { rel: 'icon', href: 'https://infinitypro-img.infinitynewtab.com/custom-icon/8001de1jd3n68lbfnxxt564xvb0vl5.png?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim' }],
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
      [
        "script", {
            "language": "javascript",
            "type": "text/javascript",
            "src": "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js"
        }
      ],
      [
          "script", {
              "language": "javascript",
              "type": "text/javascript",
              "src": "/js/MouseClickEffect.js"
          }
      ]
    ],
    //主题配置
    theme: 'reco',
    themeConfig: {
        nav: nav,
        // logo: '/vuepress/head-fish.jpg', //导航栏头像
        authorAvatar: '/vuepress/head-fish.jpg', //首页右侧头像
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // sidebar: 'auto',// 自动形成侧边导航
        sidebar: sidebar,
        sidebarDepth: 2,
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类'     // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'     // 默认文案 “标签”
            }
        },
        // 最后更新时间
        lastUpdated: true,
        lastUpdated: '最后更新时间', // string | boolean
        // 作者
        author: 'lucky',
        // 备案号
        record: '京ICP备17067634号-1',
        // 项目开始时间
        startYear: '2019',
        //git地址
        repo: 'https://gitee.com/lucky_ck',
        // 如果你的文档不在仓库的根部
        docsDir: 'docs',
        // 可选，默认为 master
        //docsBranch: 'vuepress',
        editLinks:false,
        editLinkText: '在 GitHub 上编辑此页！',
        //评论
      	valineConfig: {
       		appId: 'RkCDPritdzuoplHvVlwJAdBD-gzGzoHsz',
       		appKey: '1QKIMwngum1Pomx8VysTqLGJ',
       		placeholder: '1049906948@qq.com',
    		  notify: true, // 邮件提醒
          verify: true, // 验证码
    		  recordIP: true
       	},
    },

  markdown: {
    lineNumbers: true
  },

  //插件配置
  plugins: [
   [
      'vuepress-plugin-container',
      {
        type: 'details',
        before: info => `<details class="custom-block details"><summary>${info}</summary>`,
        after: '</details>',
        defaultTitle: '详细信息'
      },
    ],
    [
      '@vuepress/pwa', 
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-149716079-1'
      }
    ],
    '@vuepress-reco/extract-code',
    'flowchart',
    "vuepress-plugin-boxx",
    ['vuepress-plugin-code-copy', true],
    ['vuepress-plugin-smooth-scroll'],
    require('./plugins/detailsOpenFlag/index'),
    require('./plugins/musicPlayer/index')
  ]
}  