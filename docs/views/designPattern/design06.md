---

title: "观察者模式(订阅-发布模式)"
date: 2021-04-16
tags:
- 学习
categories:
- 总结
isShowComments: false
---

<Boxx/>

>![设计模式-观察者模式](http://qiniu.sunzhaoye.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F.png)

先实现一个简单的发布-订阅模式，代码如下:

```js
class Event {
    constructor() {
        this.eventTypeObj = {}
    }
    on(eventType, fn) {
        if (!this.eventTypeObj[eventType]) {
            // 按照不同的订阅事件类型，存储不同的订阅回调
            this.eventTypeObj[eventType] = []
        }
        this.eventTypeObj[eventType].push(fn)
    }
    emit() {
        // 可以理解为arguments借用shift方法
        var eventType = Array.prototype.shift.call(arguments)
        var eventList = this.eventTypeObj[eventType]
        for (var i = 0; i < eventList.length; i++) {
            eventList[i].apply(eventList[i], arguments)
        }
    }
    remove(eventType, fn) {
        // 如果使用remove方法，fn为函数名称，不能是匿名函数
        var eventTypeList = this.eventTypeObj[eventType]
        if (!eventTypeList) {
            // 如果没有被人订阅改事件，直接返回
            return false
        }
        if (!fn) {
            // 如果没有传入取消订阅的回调函数，则改订阅类型的事件全部取消
            eventTypeList && (eventTypeList.length = 0)
        } else {
            for (var i = 0; i < eventTypeList.length; i++) {
                if (eventTypeList[i] === fn) {
                    eventTypeList.splice(i, 1)
                    // 删除之后，i--保证下轮循环不会漏掉没有被遍历到的函数名
                    i--;
                }
            }
        }
    }
}
var handleFn = function(data) {
    console.log(data)
}
var event = new Event()
event.on('click', handleFn)
event.emit('click', '1')   // 1
event.remove('click', handleFn)
event.emit('click', '2')  // 不打印
```


以上代码可以满足先订阅后发布，但是如果先发布消息，后订阅就不满足了。这时候我们可以稍微修改一下即可满足先发布后订阅，在发布消息时，把事件缓存起来，等有订阅者时再执行。代码如下：

```js
class Event {
    constructor() {
        this.eventTypeObj = {}
        this.cacheObj = {}
    }
    on(eventType, fn) {
        if (!this.eventTypeObj[eventType]) {
            // 按照不同的订阅事件类型，存储不同的订阅回调
            this.eventTypeObj[eventType] = []
        }
        this.eventTypeObj[eventType].push(fn)

        // 如果是先发布，则在订阅者订阅后，则根据发布后缓存的事件类型和参数，执行订阅者的回调
        if (this.cacheObj[eventType]) {
            var cacheList = this.cacheObj[eventType]
            for (var i = 0; i < cacheList.length; i++) {
                cacheList[i]()
            }
        }
    }
    emit() {
        // 可以理解为arguments借用shift方法
        var eventType = Array.prototype.shift.call(arguments)
        var args = arguments
        var that = this

        function cache() {
            if (that.eventTypeObj[eventType]) {
                var eventList = that.eventTypeObj[eventType]
                for (var i = 0; i < eventList.length; i++) {
                    eventList[i].apply(eventList[i], args)
                }
            }
        }
        if (!this.cacheObj[eventType]) {
            this.cacheObj[eventType] = []
        }

        // 如果先订阅，则直接订阅后发布
        cache(args)

        // 如果先发布后订阅，则把发布的事件类型与参数保存起来，等到有订阅后执行订阅
        this.cacheObj[eventType].push(cache)
    }
}
```

**小结:**

1. 发布订阅模式可以使代码解耦，满足开放封闭原则
2. 当过多的使用发布订阅模式，如果订阅消息始终都没有触发，则订阅者一直保存在内存中。