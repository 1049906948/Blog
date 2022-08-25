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
    "revision": "91147c7185c45b4c86fc703e5159bd4f"
  },
  {
    "url": "about/index.html",
    "revision": "c5f4189512d0634a83d90da7657392f5"
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
    "url": "assets/js/1.24e45d3c.js",
    "revision": "95f8b5e7bb7d6de8e6ddbb567ade726c"
  },
  {
    "url": "assets/js/10.3849ab82.js",
    "revision": "1e8647d5ba05347b8dc1a2540b047911"
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
    "url": "assets/js/16.ad48f5c4.js",
    "revision": "ed04efae1c35019641efe793c3345889"
  },
  {
    "url": "assets/js/17.5e75cfbf.js",
    "revision": "0852bf254db720c2f473cb8749fe3bfa"
  },
  {
    "url": "assets/js/18.880a5e0f.js",
    "revision": "35879edcaa0531dd5f0fb62c3c13a34c"
  },
  {
    "url": "assets/js/19.36fd3160.js",
    "revision": "efee3d629f249cae4f9cc51404dcef70"
  },
  {
    "url": "assets/js/2.350e2e38.js",
    "revision": "cf8b335848b522d127cca7387f5745c1"
  },
  {
    "url": "assets/js/20.3ffa9d3b.js",
    "revision": "e2fd6063438157e18c64bef8b1a4c012"
  },
  {
    "url": "assets/js/21.bc67d9d2.js",
    "revision": "61e12a7cf3081834392901228731461b"
  },
  {
    "url": "assets/js/22.ec5d0e03.js",
    "revision": "9395564b768e924ce14ff1e4269a13b1"
  },
  {
    "url": "assets/js/23.b17a3344.js",
    "revision": "a79e63a99b8b55393550510d2f4646e3"
  },
  {
    "url": "assets/js/24.48e0c6eb.js",
    "revision": "c0bef174cca35735bcde5cdfd8926150"
  },
  {
    "url": "assets/js/25.49619551.js",
    "revision": "feb0ed452a7b0dc7802973742c01b0d9"
  },
  {
    "url": "assets/js/26.856ed71c.js",
    "revision": "95a36699e5e700dc5b3b648b19172a5d"
  },
  {
    "url": "assets/js/27.ae4c281f.js",
    "revision": "7f294f55b536f674d9505177750f9041"
  },
  {
    "url": "assets/js/28.7b52bf93.js",
    "revision": "cabbf53fe9d634acdd3fc1107f586b8a"
  },
  {
    "url": "assets/js/29.71bbd16d.js",
    "revision": "7ca4ba0f9a2d2da3cd6fed1cb8eec208"
  },
  {
    "url": "assets/js/30.18c84912.js",
    "revision": "f29f3527ff6951e75215450e3167929d"
  },
  {
    "url": "assets/js/31.aa075a45.js",
    "revision": "211eeb4b86e4406bae9b0b5a4b84ce6f"
  },
  {
    "url": "assets/js/32.a7355aca.js",
    "revision": "ea9556ae0d24d6d816c720c35a4d781c"
  },
  {
    "url": "assets/js/33.a35f27fb.js",
    "revision": "6b172f377aaaa667b01ff66a53835ff4"
  },
  {
    "url": "assets/js/34.00eac7e9.js",
    "revision": "495eaee06402b4231a90f1f2bf8e807f"
  },
  {
    "url": "assets/js/35.57c73d23.js",
    "revision": "c9d5e0ee4e96570efef3c8b8616b7908"
  },
  {
    "url": "assets/js/36.5aeafd48.js",
    "revision": "233c9ef5c31331c185aeb173a518626e"
  },
  {
    "url": "assets/js/37.be13c40e.js",
    "revision": "d36e77ede88afa226d59a55e81d4fa6c"
  },
  {
    "url": "assets/js/38.4b0b9e59.js",
    "revision": "b6e04fd876b12f61bbeb456366608da9"
  },
  {
    "url": "assets/js/39.90deb689.js",
    "revision": "33206ebfab69a9ce2a0a1e465cdc218c"
  },
  {
    "url": "assets/js/40.62fe9a78.js",
    "revision": "0e726298bc089a923e7e6b4313665b94"
  },
  {
    "url": "assets/js/41.06e63088.js",
    "revision": "7aa01ac45ce5d81d4929e1b479460803"
  },
  {
    "url": "assets/js/42.da6e7f6f.js",
    "revision": "f8b654a7c704c2ec6d4ca0e4c1a8549b"
  },
  {
    "url": "assets/js/43.a6a004ff.js",
    "revision": "327d650212fbb872c33191f39341bf92"
  },
  {
    "url": "assets/js/44.bae7a87a.js",
    "revision": "7c8e7059d56dd9cf4a62ec1e2320967e"
  },
  {
    "url": "assets/js/45.fc768e82.js",
    "revision": "b76168486ef9258d29df143fa1d71f5c"
  },
  {
    "url": "assets/js/46.d91f281a.js",
    "revision": "22beb7a3e207c4106de27aaa6702863a"
  },
  {
    "url": "assets/js/47.2962aa6a.js",
    "revision": "8d31d01d3e88e2be3b98cd2650482bc1"
  },
  {
    "url": "assets/js/48.4a7d9663.js",
    "revision": "e972568003a484778f29ebf687add269"
  },
  {
    "url": "assets/js/49.e93447ab.js",
    "revision": "90817669c52a8775e023f396a7ded7d7"
  },
  {
    "url": "assets/js/5.f9e1b487.js",
    "revision": "c8191e009b6a6bab6b7a6911c6c947bd"
  },
  {
    "url": "assets/js/50.0ab17869.js",
    "revision": "bbd6668ef4d9459477c0caee53f97ab1"
  },
  {
    "url": "assets/js/51.e88f2564.js",
    "revision": "769283933e8f8c76d9f7a238964faef6"
  },
  {
    "url": "assets/js/52.68a92d6a.js",
    "revision": "74da9866843224745b4498746d5fd25b"
  },
  {
    "url": "assets/js/53.e66a33f8.js",
    "revision": "d8960110081206d930c481a4409b1956"
  },
  {
    "url": "assets/js/54.5ec7d099.js",
    "revision": "1779f4ba8b968591997e42d5265faf75"
  },
  {
    "url": "assets/js/55.30e31f0d.js",
    "revision": "d6f5f5e4a81a33c05745954096a5ffc4"
  },
  {
    "url": "assets/js/56.657d6ba2.js",
    "revision": "4da1fe93a9ba7d09abf8a262a1b16316"
  },
  {
    "url": "assets/js/57.8af96c1e.js",
    "revision": "1b68d3295e38784c4279665237593f7e"
  },
  {
    "url": "assets/js/6.40a6b395.js",
    "revision": "a1e472b8d0dbb87f6a0d107e7b2e907f"
  },
  {
    "url": "assets/js/7.34dd6c8b.js",
    "revision": "2028ae67a42cf06a8c102cc67d3e4714"
  },
  {
    "url": "assets/js/8.809695ae.js",
    "revision": "b6c688c15b2e71c649819d73129ed7dd"
  },
  {
    "url": "assets/js/9.be6ed9d0.js",
    "revision": "91e61c8d0c3c5be92435734e0eb83c5c"
  },
  {
    "url": "assets/js/app.0235ae0a.js",
    "revision": "3bd46a80ce01fd94e7f1b516ebc2f9ce"
  },
  {
    "url": "assets/js/vendors~flowchart.3a042a11.js",
    "revision": "b67a0a583cc15e0d64062ce8e1ecc719"
  },
  {
    "url": "categories/index.html",
    "revision": "c31befc0bce3241e2b949b4ceb0a4478"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "bd5ec38d1662bd7c3cb60bc5304a49db"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "5fdc6ab6577e82c6a38ce1352fe8d762"
  },
  {
    "url": "categories/总结/index.html",
    "revision": "de067bd9e34650c8aff366c4211690e5"
  },
  {
    "url": "categories/总结/page/2/index.html",
    "revision": "d3b7777ee50c950a0f847e7a8f50a626"
  },
  {
    "url": "categories/总结/page/3/index.html",
    "revision": "e9ae496a5a2e5ee5ad44872436153289"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "8fe85f77c3402acd6891457e6d938d6a"
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
    "revision": "fb095d3516c0bc3553b21d69c80097f5"
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
    "revision": "5dc230923cf71fc1e08789c200d46aab"
  },
  {
    "url": "tag/index.html",
    "revision": "157e1b79fe23745db115bd3f74e00d99"
  },
  {
    "url": "tags/git/index.html",
    "revision": "62190601f7f67b15baa265a4e590bf31"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "8c926d1e5c1e5c1232a8eacf9d76a57b"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "2a96e12cf050b8f075dec9772d18b00b"
  },
  {
    "url": "tags/json/index.html",
    "revision": "acf951a9613fb7ea354109830509a2eb"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "860585a00e0f27f390ceeb906ffc2341"
  },
  {
    "url": "tags/Swagger2/index.html",
    "revision": "03dfcf71552a723583c87c6a590323dc"
  },
  {
    "url": "tags/web大前端/index.html",
    "revision": "884d2d1293fa8eaaaa1b5bf2120eb0ca"
  },
  {
    "url": "tags/复习/index.html",
    "revision": "d853daa68face3e19fe76f7a61007ee1"
  },
  {
    "url": "tags/学习/index.html",
    "revision": "b21ab3f97125bac715de86f4016a11bf"
  },
  {
    "url": "tags/学习/page/2/index.html",
    "revision": "6bae06ecb21b5c3ae652be651a3fc7db"
  },
  {
    "url": "tags/学习/page/3/index.html",
    "revision": "bc162cd08cc6a03d1bd22ee47fa63aa1"
  },
  {
    "url": "tags/开发规范/index.html",
    "revision": "f280eaa04dba37a39e85caa1f411ae84"
  },
  {
    "url": "tags/网络协议/index.html",
    "revision": "a3f25129ae5127f74b1fa2e0ebb149f7"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "56a66e7b93f45900c126d292c7b1a98d"
  },
  {
    "url": "timeline/index.html",
    "revision": "e406937126e441d60e12732341235eef"
  },
  {
    "url": "views/algorithm/algorithm01.html",
    "revision": "d8c39082198e7c7f6f6b4d9e7095ae1d"
  },
  {
    "url": "views/algorithm/algorithm02.html",
    "revision": "dc27900f16e2730ab26ed3a10717b2cd"
  },
  {
    "url": "views/algorithm/algorithm03.html",
    "revision": "b9e5e24ceb2ac732817212f643b8f11e"
  },
  {
    "url": "views/algorithm/algorithm04.html",
    "revision": "5f5a36607d36b9b1ce554193f73b1b61"
  },
  {
    "url": "views/algorithm/algorithm05.html",
    "revision": "819b65b0e3459dcc6bab9ca1488c382f"
  },
  {
    "url": "views/algorithm/algorithm06.html",
    "revision": "c2a827a4ac51f2e288cd932b49dc428c"
  },
  {
    "url": "views/algorithm/algorithm07.html",
    "revision": "23eff59964300222fc5bdda7b0812caf"
  },
  {
    "url": "views/algorithm/algorithm08.html",
    "revision": "a10e6ce0170eeaefac6223fe32bdca71"
  },
  {
    "url": "views/designPattern/design01.html",
    "revision": "9e9f1433000d99a8e7eee498336d5239"
  },
  {
    "url": "views/designPattern/design02.html",
    "revision": "908289aa820b693b53d2df6aec1ae71c"
  },
  {
    "url": "views/designPattern/design03.html",
    "revision": "05bdf055d8f1142df2e8a53f17058510"
  },
  {
    "url": "views/designPattern/design04.html",
    "revision": "242558aad34aee8f187f4ae836918fc9"
  },
  {
    "url": "views/designPattern/design05.html",
    "revision": "b00e98ae995248899a3c333bd2bac1f3"
  },
  {
    "url": "views/designPattern/design06.html",
    "revision": "00359bc769bef0e79d8db3bde56e9d84"
  },
  {
    "url": "views/designPattern/design07.html",
    "revision": "241d26756364543eec9dbc5103856235"
  },
  {
    "url": "views/designPattern/design08.html",
    "revision": "c0353fd25aea7fe86afbc8cc9a4b36e0"
  },
  {
    "url": "views/designPattern/design09.html",
    "revision": "de1d5658ace8912f8fec6d2ff14018d6"
  },
  {
    "url": "views/designPattern/design10.html",
    "revision": "58bc9e20d4f95d351687989261b71f15"
  },
  {
    "url": "views/essay/20190928.html",
    "revision": "c978d9bd93085562e2f6fbb009ee0c9e"
  },
  {
    "url": "views/index.html",
    "revision": "7947ad37f8977d60a9c0528d02dcf3ce"
  },
  {
    "url": "views/java/ck_spring_001.html",
    "revision": "aff674d52e9f8265f8f82e9f00707150"
  },
  {
    "url": "views/java/ck_spring_002.html",
    "revision": "16ae6d1ca4608f8f7f70509fa7bd1513"
  },
  {
    "url": "views/java/ck_spring_003.html",
    "revision": "85c4f22564a28fd28d0500878ac0434b"
  },
  {
    "url": "views/java/SSH.html",
    "revision": "aeb36251918c46f39afef89ab8872395"
  },
  {
    "url": "views/java/sum_java_001.html",
    "revision": "ef0854d333a71087c5bdd33b5e6f3e1f"
  },
  {
    "url": "views/java/swagger2.html",
    "revision": "7d04166bbe6216f5e1c37a54fec553ca"
  },
  {
    "url": "views/specification/git.html",
    "revision": "38e3dbe47ee5a18db61057bac75c7c3c"
  },
  {
    "url": "views/specification/linux01.html",
    "revision": "8cf54dd31bb0b6386f29ed89bb5fd7cd"
  },
  {
    "url": "views/summary/sum_db_001.html",
    "revision": "c57734d60104d6407d18b3c1890ab169"
  },
  {
    "url": "views/web/array_api.html",
    "revision": "ba3b9ce282a3ea7906a81ec1266685ed"
  },
  {
    "url": "views/web/http.html",
    "revision": "d90a2240f6a402162a2ae414b05ae0af"
  },
  {
    "url": "views/web/js-json.html",
    "revision": "ab4fd072513c36a3037df3a026219441"
  },
  {
    "url": "views/web/module.html",
    "revision": "088b79d053e485476bfe37fd2a95e04e"
  },
  {
    "url": "views/web/utils.html",
    "revision": "faef2731574b891de4d838a64f24ef30"
  },
  {
    "url": "views/web/vue-communication.html",
    "revision": "b51803a7a673f2276b2f97e6be186949"
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
