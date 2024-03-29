---

title: "迭代器模式"
date: 2021-04-16
tags:
- 学习
categories:
- 总结
isShowComments: false
---

<Boxx/>

>![设计模式-迭代器模式](http://qiniu.sunzhaoye.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E8%BF%AD%E4%BB%A3%E5%99%A8%E6%A8%A1%E5%BC%8F.png)

直接上代码, 实现一个简单的迭代器

```js
class Creater {
    constructor(list) {
        this.list = list
    }

    // 创建一个迭代器，也叫遍历器
    createIterator() {
        return new Iterator(this)
    }
}

class Iterator {
    constructor(creater) {
        this.list = creater.list
        this.index = 0
    }

    // 判断是否遍历完数据
    isDone() {
        if (this.index >= this.list.length) {
            return true
        }
        return false
    }

    next() {
        return this.list[this.index++]
    }

}

var arr = [1, 2, 3, 4]

var creater = new Creater(arr)
var iterator = creater.createIterator()
console.log(iterator.list)  // [1, 2, 3, 4]
while (!iterator.isDone()) {
    console.log(iterator.next())
    // 1
    // 2
    // 3
    // 4
}
```

**ES6中的迭代器:**

**JavaScript中的有序数据集合包括：**

* Array
* Map
* Set
* String
* typeArray
* arguments
* NodeList

**注意:** Object不是有序数据集合

以上有序数据集合都部署了Symbol.iterator属性，属性值为一个函数，执行这个函数，返回一个迭代器，迭代器部署了next方法，调用迭代器的next方法可以按顺序访问子元素

以数组为例测试一下，在浏览器控制台中打印测试如下：
![Symbol-iterator](http://qiniu.sunzhaoye.com/Symbol-iterator.png)

```js
var arr = [1, 2, 3, 4]

var iterator = arr[Symbol.iterator]()

console.log(iterator.next())  // {value: 1, done: false}
console.log(iterator.next())  // {value: 2, done: false}
console.log(iterator.next())  // {value: 3, done: false}
console.log(iterator.next())  // {value: 4, done: false}
console.log(iterator.next())  // {value: undefined, done: true}
```

**小结：**

1. JavaScript中的有序数据集合有Array，Map，Set，String，typeArray，arguments，NodeList，不包括Object

2. 任何部署了[Symbol.iterator]接口的数据都可以使用for...of循环遍历
3. 迭代器模式使目标对象和迭代器对象分离，符合开放封闭原则
