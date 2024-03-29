---

title: "代理模式"
date: 2021-04-16
tags:
- 学习
categories:
- 总结
isShowComments: false
---

<Boxx/>


>![设计模式-代理模式](http://qiniu.sunzhaoye.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F.png)

本文举一个使用代理对象加载图片的例子来理解代理模式,当网络不好的时候，图片的加载需要一段时间，这就会产生空白，影响用户体验，这时候我们可在图片真正加载完之前，使用一张loading占位图片，等图片真正加载完再给图片设置src属性。

```js
class MyImage {
    constructor() {
        this.img = new Image()
        document.body.appendChild(this.img)
    }
    setSrc(src) {
        this.img.src = src
    }
}

class ProxyImage {
    constructor() {
        this.proxyImage = new Image()
    }

    setSrc(src) {
        let myImageObj = new MyImage()
        myImageObj.img.src = 'file://xxx.png'  //为本地图片url
        this.proxyImage.src = src
        this.proxyImage.onload = function() {
            myImageObj.img.src = src
        }
    }
}

var proxyImage = new ProxyImage()
proxyImage.setSrc('http://xxx.png') //服务器资源url

```

本例中，本体类中有自己的setSrc方法，如果有一天网络速度已经不需要预加载了，我们可以直接使用本体对象的setSrc方法,，并且不需要改动本体类的代码，而且可以删除代理类。

```js
// 依旧可以满足需求
var myImage = new MyImage()
myImage.setSrc('http://qiniu.sunzhaoye.com/CORS.png')
```

**小结:**
1. 代理模式符合开放封闭原则
2. 本体对象和代理对象拥有相同的方法，在用户看来并不知道请求的本体对象还是代理对象。
