---

title: "单例模式"
date: 2021-04-16
tags:
- 学习
categories:
- 总结
isShowComments: false
---

<Boxx/>

>![设计模式-单例模式](http://qiniu.sunzhaoye.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.png)

举一个书中登录框的例子，代码如下:

```js
<!DOCTYPE html>
<html lang="en">

<body>
    <button id="btn">登录</button>
</body>
<script>
    class Login {
        createLayout() {
            var oDiv = document.createElement('div')
            oDiv.innerHTML = '我是登录框'
            document.body.appendChild(oDiv)
            oDiv.style.display = 'none'
            return oDiv
        }
    }

    class Single {
        getSingle(fn) {
            var result;
            return function() {
                return result || (result = fn.apply(this, arguments))
            }
        }
    }

    var oBtn = document.getElementById('btn')
    var single = new Single()
    var login = new Login()

    // 由于闭包，createLoginLayer对result的引用，所以当single.getSingle函数执行完之后，内存中并不会销毁result。

    // 当第二次以后点击按钮，根据createLoginLayer函数的作用域链中已经包含了result，所以直接返回result

    // 讲获取单例和创建登录框的方法解耦，符合开放封闭原则
    var createLoginLayer = single.getSingle(login.createLayout)
    oBtn.onclick = function() {
        var layout = createLoginLayer()
        layout.style.display = 'block'
    }
</script>

</html>

```

**小结:**

1. 单例模式的主要思想就是，实例如果已经创建，则直接返回
```js
function creatSingleton() {
    var obj = null
    // 实例如已经创建过，直接返回
    if (!obj) {
        obj = xxx
    }
    return obj
}
```

2. 符合开放封闭原则