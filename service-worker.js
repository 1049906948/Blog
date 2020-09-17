/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "83020fe494ab39e5e5aab72589353140"
  },
  {
    "url": "about/index.html",
    "revision": "f2381af4df9dc90c018193e49e1a3041"
  },
  {
    "url": "assets/css/0.styles.f07642c1.css",
    "revision": "30f2661f0af814c3348e574b61f593f0"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.64e93583.svg",
    "revision": "64e93583d169a901a7d3a20a21707202"
  },
  {
    "url": "assets/img/loading.9111579b.svg",
    "revision": "9111579b51f5dedc91eec1a9b4228a9f"
  },
  {
    "url": "assets/img/pan.07613e22.png",
    "revision": "07613e229a93d4e819835f6c46a5bbc9"
  },
  {
    "url": "assets/js/1.06bae866.js",
    "revision": "430fde15f29702237c88e6540b9e13a8"
  },
  {
    "url": "assets/js/10.ea6b478c.js",
    "revision": "4ebe4cee525886d941fcb9cf5dbf337d"
  },
  {
    "url": "assets/js/11.bea86531.js",
    "revision": "a93e6e84def3b3fc200394aff4fca663"
  },
  {
    "url": "assets/js/12.88a050dd.js",
    "revision": "7339e0c11b6db37ee496fd9d070e128b"
  },
  {
    "url": "assets/js/13.42d1abd1.js",
    "revision": "732b49fc00bf1f6f3697b9e55e36c741"
  },
  {
    "url": "assets/js/14.def25283.js",
    "revision": "18600663c8f3729f1a3da6bb5a7017ee"
  },
  {
    "url": "assets/js/15.b69fb0fe.js",
    "revision": "f385c1925c1c7816c21e1fc77480c6ad"
  },
  {
    "url": "assets/js/16.957c619f.js",
    "revision": "64067c0bd3b9e684628c713e6904ced1"
  },
  {
    "url": "assets/js/17.4ea00b48.js",
    "revision": "d86238b54ec9ebe45a642da1d5d35c90"
  },
  {
    "url": "assets/js/18.7f5212ce.js",
    "revision": "ee21e6d4dc1c828d6a1cd01b70314fbc"
  },
  {
    "url": "assets/js/19.36fd3160.js",
    "revision": "efee3d629f249cae4f9cc51404dcef70"
  },
  {
    "url": "assets/js/2.a2a55803.js",
    "revision": "6dd6e54a617cc55582bfcf1339d45b38"
  },
  {
    "url": "assets/js/20.6183206a.js",
    "revision": "82519dd3843b3512a6d587981a2e40bd"
  },
  {
    "url": "assets/js/21.6d4fe001.js",
    "revision": "e29a2ae61696914e12600a46b79d7d95"
  },
  {
    "url": "assets/js/22.2fba67fc.js",
    "revision": "68f48ba859ac14ae8401c584515c46ed"
  },
  {
    "url": "assets/js/23.32a8c663.js",
    "revision": "dfcb11f6017a4773d7288eda6512c475"
  },
  {
    "url": "assets/js/24.85eb1166.js",
    "revision": "1b1cdc0376cc00729d31c07c4945e159"
  },
  {
    "url": "assets/js/25.f3dec7f7.js",
    "revision": "186202ba8104f0b181738c02dcb108b7"
  },
  {
    "url": "assets/js/26.fa688c80.js",
    "revision": "599565bd9c0975d703fb1c3d9ff3971e"
  },
  {
    "url": "assets/js/27.9647d224.js",
    "revision": "453928f30f4f7d5a7cf97a2038243aa5"
  },
  {
    "url": "assets/js/28.2b75e690.js",
    "revision": "79983e76acaeb691195bf5b22bc6d745"
  },
  {
    "url": "assets/js/29.a8dccda6.js",
    "revision": "279fa7d50594513aff73fcb9c1e687eb"
  },
  {
    "url": "assets/js/30.3a3ed002.js",
    "revision": "609edff889b28fd93575e8b4c048f164"
  },
  {
    "url": "assets/js/31.6ed68d26.js",
    "revision": "cf9920539efca3a4f0c54896298051c1"
  },
  {
    "url": "assets/js/32.0a647bb5.js",
    "revision": "0312f572ff4d01558d0bdafb09687ffb"
  },
  {
    "url": "assets/js/33.cc555bcf.js",
    "revision": "547e6bada2f42e231be524a27719d848"
  },
  {
    "url": "assets/js/34.99bbc19f.js",
    "revision": "df540d0faa90e2f98771bfeeff966f09"
  },
  {
    "url": "assets/js/35.5907033c.js",
    "revision": "d8889b82781e5b321dd90c82c9c8377a"
  },
  {
    "url": "assets/js/5.7a549498.js",
    "revision": "3ca6474256505715dfb06fb7d6542f67"
  },
  {
    "url": "assets/js/6.d8cf2435.js",
    "revision": "1900bffaf1389beed8cd22b789d239dd"
  },
  {
    "url": "assets/js/7.8976f957.js",
    "revision": "666d4d01e269d595158cd2796b96a76d"
  },
  {
    "url": "assets/js/8.b1f93b03.js",
    "revision": "4eda39acc67d847570660977c240b3f4"
  },
  {
    "url": "assets/js/9.6d0b8aa1.js",
    "revision": "ba1d7dbffd4a4e40dd8dfa7d2aa5e777"
  },
  {
    "url": "assets/js/app.4ae66132.js",
    "revision": "b477f5fae2d930eb44884c937a73fa54"
  },
  {
    "url": "assets/js/vendors~flowchart.3a042a11.js",
    "revision": "b67a0a583cc15e0d64062ce8e1ecc719"
  },
  {
    "url": "categories/index.html",
    "revision": "ecdd946468d37e3bc09697b122de5b92"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "59b5075da60a36191824f4f648998d68"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "19b93f4eb22853aa9c0f781101691701"
  },
  {
    "url": "categories/总结/index.html",
    "revision": "f91809ec1292c6c60f60b652e97b531e"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "c524c282dbf2f8ecf073527ce38e4f64"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "e4f97a8e278e3c3bd356937e5018890c"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "64e93583d169a901a7d3a20a21707202"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "img/ali/app_layout.png",
    "revision": "014d0cfed63df7dee08863aad495507d"
  },
  {
    "url": "img/backEnd/jwt.png",
    "revision": "08f10cff7fa522a07bdb68b8615c23d2"
  },
  {
    "url": "img/docker/搜狗截图20180303145450.png",
    "revision": "b72094f2dc137f642b258d659ba7c5de"
  },
  {
    "url": "img/docker/搜狗截图20180303145531.png",
    "revision": "0192e016514ae6de37acb335483c6365"
  },
  {
    "url": "img/docker/搜狗截图20180303165113.png",
    "revision": "57658a824fedd4daf6c46fb28ddf9a2e"
  },
  {
    "url": "img/EChartsStudy/接入百度地图.png",
    "revision": "6536c736188c9ea30914de1c6f09e68c"
  },
  {
    "url": "img/EChartsStudy/柱+折线图.png",
    "revision": "012d1f48b8e15cf20e763ed5310210b0"
  },
  {
    "url": "img/EChartsStudy/迁徙图.png",
    "revision": "f9079e675926a79a70417595adf6ce6e"
  },
  {
    "url": "img/EChartsStudy/饼图.png",
    "revision": "5394c36784b787fd477693968c133693"
  },
  {
    "url": "img/essay/lmNRgg.png",
    "revision": "fd3cc2df1c32d13e911fc6349b4dc164"
  },
  {
    "url": "img/essay/lmUIQe.png",
    "revision": "b4204c68b6174c07220733dcaf165c3b"
  },
  {
    "url": "img/essay/lmUjW8.png",
    "revision": "1b4e086bec1e1c053c726cd7ba14b480"
  },
  {
    "url": "img/essay/lmUkxe.png",
    "revision": "ee27e01c1867214c85ea23a998707e7c"
  },
  {
    "url": "img/essay/lmUQG8.png",
    "revision": "4551e4806b560715c4910501cd4c756e"
  },
  {
    "url": "img/essay/NiceBlogExamples.png",
    "revision": "4ae74d1a112937624ddcb289604d9d2b"
  },
  {
    "url": "img/essay/ToDo.png",
    "revision": "6aa4b2d90ea09c3cbb13dbc24b5d3947"
  },
  {
    "url": "img/HashMap/20180423002750407.png",
    "revision": "f35b7d5feca86f51427b731dd5310e6e"
  },
  {
    "url": "img/itext/pdf2.png",
    "revision": "f557069c584ea0c2bf4031d2306beb5f"
  },
  {
    "url": "img/itext/pdf3.png",
    "revision": "18753afbd11acf6c3864eab6b2e2dd16"
  },
  {
    "url": "img/jvm/gc001.png",
    "revision": "9096a5c1aa708e99e4a0eb011c39f110"
  },
  {
    "url": "img/jvm/gc002.png",
    "revision": "04f03419851adab68f221464d5f236fe"
  },
  {
    "url": "img/jvm/gc003.png",
    "revision": "7c61067e76f98493875fb0318535706f"
  },
  {
    "url": "img/jvm/gc004.png",
    "revision": "fb57425f659c93e108b52848734291a5"
  },
  {
    "url": "img/jvm/gc005.png",
    "revision": "39041532371209775ba5bcf397604011"
  },
  {
    "url": "img/jvm/jvm001.png",
    "revision": "645747e72e6790bb9a70ae6166a61a33"
  },
  {
    "url": "img/jvm/jvm002.png",
    "revision": "f46c1bb2f52ba3826599cf6a5959313e"
  },
  {
    "url": "img/jvm/jvm003.png",
    "revision": "8cfa470daab1e9cde72e91a564182b95"
  },
  {
    "url": "img/jvm/jvm004.png",
    "revision": "53c75a6570d0adf443287266c0fe7efe"
  },
  {
    "url": "img/other/git_001.png",
    "revision": "dad7a6694ad6026308d580ada34703f5"
  },
  {
    "url": "img/other/http001.jpg",
    "revision": "856031f897fce74ca2103cd443e81fae"
  },
  {
    "url": "img/rabbitmq/mq001.png",
    "revision": "06c224d930a517e0c68f6db2032e4a07"
  },
  {
    "url": "img/rabbitmq/mq002.png",
    "revision": "4dee5cf620627c17c267d1a033d7ca86"
  },
  {
    "url": "img/rabbitmq/mq003.png",
    "revision": "ffb23d11d23ddbd85c04820b3d016cc6"
  },
  {
    "url": "img/rabbitmq/rabbitmq.png",
    "revision": "f8ed6faa42fcdba67c8ed7b2c59ac495"
  },
  {
    "url": "img/rabbitmq/topic.png",
    "revision": "76d56b40d2a16592fef156f73f228d20"
  },
  {
    "url": "img/rabbitmq/队列模型.png",
    "revision": "805d0059bd3df57f88b1fb5e0631a654"
  },
  {
    "url": "img/redis/redis02.png",
    "revision": "c48e246e53e5d501cd0fcbdf87258d33"
  },
  {
    "url": "img/redis/缓存更新.png",
    "revision": "29bb26641ac9ff576cffab4de9b0a4f7"
  },
  {
    "url": "img/redis/缓存查询.png",
    "revision": "2fc82232bd83608e50aa29ecba90b733"
  },
  {
    "url": "img/swagger2/swagger2.png",
    "revision": "0ac3840245a81620a4365409ce608e81"
  },
  {
    "url": "img/viaStart/thumb.png",
    "revision": "0d4c9d70e021216c051bf1ce37a37da3"
  },
  {
    "url": "img/vuedemo/1.png",
    "revision": "ebc5b5e16665f1d3494b9ca7afce270f"
  },
  {
    "url": "img/vuedemo/2.png",
    "revision": "8c7a40b960334a58a097b1c2292a8fa4"
  },
  {
    "url": "img/vuedemo/3.png",
    "revision": "acb3adcb4752f27bc621c244252a63ae"
  },
  {
    "url": "img/vuedemo/4.png",
    "revision": "e0600647cb12f4f3a100383f91baa7c2"
  },
  {
    "url": "img/vuedemo/5.png",
    "revision": "c0b6c66dd9e8df10c0dda568268ff314"
  },
  {
    "url": "img/vuedemo/6.png",
    "revision": "2ccae59d8c1134edc7fdaf0a6e41e78d"
  },
  {
    "url": "index.html",
    "revision": "3c8a7f9cb87c9b3d805965da32b08da1"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "c8209619f9a8260aee66ce7691c9f2ad"
  },
  {
    "url": "love/love.html",
    "revision": "8d53a8c3042c710f16ac57d20611988d"
  },
  {
    "url": "love/比心.png",
    "revision": "9344734f90afd01afb5566ac14c22dec"
  },
  {
    "url": "other/project.html",
    "revision": "7de5cdd4e298cecd05797bb64bae7895"
  },
  {
    "url": "tag/index.html",
    "revision": "4bd00169f07d88492963f2463caacc2c"
  },
  {
    "url": "tags/git/index.html",
    "revision": "a3e763243c24d3342b8f126b1ba12fd7"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "e4389a23a59a825d0d8bdbb72c4c5f8c"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "077cf7355a1d05b68eec4638f29bc3d7"
  },
  {
    "url": "tags/json/index.html",
    "revision": "391c7c218904f1ea4f8daeb1b3d49624"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "1d30d051e23ee17d935b8d7c5ed656b8"
  },
  {
    "url": "tags/Swagger2/index.html",
    "revision": "8ca9642b8c509fdf24a5791ff0aed3b3"
  },
  {
    "url": "tags/web大前端/index.html",
    "revision": "dc06093f781e638a29ea81c03dc417d1"
  },
  {
    "url": "tags/复习/index.html",
    "revision": "123af2e2b7e6684d419b1657459d7c0f"
  },
  {
    "url": "tags/学习/index.html",
    "revision": "651e30c44f597b34425ff0ed04b8a5ac"
  },
  {
    "url": "tags/开发规范/index.html",
    "revision": "d5ddf9f677a367463b6e708e4c3daaf8"
  },
  {
    "url": "tags/网络协议/index.html",
    "revision": "7e91c134929eaa7403dc8eb0f47a86b0"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "4469f7164550b04bafe27f77e76e7827"
  },
  {
    "url": "timeline/index.html",
    "revision": "3bfd57168462c58002994de280d209d5"
  },
  {
    "url": "views/essay/20190928.html",
    "revision": "393747b6682fd0ba4b7c0d9948e583f3"
  },
  {
    "url": "views/index.html",
    "revision": "548350faa8c4afcc2f3808c3cf7063a3"
  },
  {
    "url": "views/java/ck_spring_001.html",
    "revision": "3e92305a22d482de55b739a4c28ab483"
  },
  {
    "url": "views/java/ck_spring_002.html",
    "revision": "c6c5704d66396b9eb0d5f48893f436f7"
  },
  {
    "url": "views/java/ck_spring_003.html",
    "revision": "7d8f3500efc20fb3189c0505e2c6b819"
  },
  {
    "url": "views/java/SSH.html",
    "revision": "b0337b6c4c060bc0ad6835f9d8257049"
  },
  {
    "url": "views/java/swagger2.html",
    "revision": "4ae6fc78635cb43675f24b4d869923f1"
  },
  {
    "url": "views/specification/git.html",
    "revision": "7ad927e4e1fbda69da92dfe9cb6481f7"
  },
  {
    "url": "views/specification/linux01.html",
    "revision": "c14852794c111b0ef304323cda8322f7"
  },
  {
    "url": "views/summary/sum_db_001.html",
    "revision": "3f20bdc69cf4626ee218e6fcbcdb5226"
  },
  {
    "url": "views/web/http.html",
    "revision": "223f992efedfcda3565ce652da1e6f77"
  },
  {
    "url": "views/web/js-json.html",
    "revision": "bc90035972c9a95e089f4f2709ece471"
  },
  {
    "url": "views/web/module.html",
    "revision": "b2028dae2b48a47a73174dd27be41280"
  },
  {
    "url": "vuepress/head-fish.jpg",
    "revision": "3cb672033db83620e4e024c9c747e13f"
  },
  {
    "url": "vuepress/head.png",
    "revision": "8919827e695ae6a739b646f05bb5d991"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "vuepress/home.jpg",
    "revision": "0438aed517a63a24d284016cc5abeae7"
  },
  {
    "url": "vuepress/topic.png",
    "revision": "bf80a6f75ed6aff874261bb1d13ff529"
  },
  {
    "url": "vuepress/znote.png",
    "revision": "0098af9084c619fae94c3d593c609bbd"
  },
  {
    "url": "vuepress/zpj80231-logo.png",
    "revision": "dbe08c0ce47cb056ae6a229aa421e2ee"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
