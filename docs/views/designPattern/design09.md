---

title: "原型模式"
date: 2021-04-16
tags:
- 学习
categories:
- 总结
isShowComments: false
---

<Boxx/>

>用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。--[百度百科](https://baike.baidu.com/item/%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F/4941014?fr=aladdin)

在JavaScript中，实现原型模式是在ECMAScript5中，提出的[Object.create](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)方法，使用现有的对象来提供新创建的对象的__proto__。

```js
var prototype = {
    name: 'Jack',
    getName: function() {
        return this.name
    }
}

var obj = Object.create(prototype, {
    job: {
        value: 'IT'
    }
})

console.log(obj.getName())  // Jack
console.log(obj.job)  // IT
console.log(obj.__proto__ === prototype)  //true
```

更多关于prototype的知识可以看我之前的[JavaScript中的面向对象、原型、原型链、继承](https://segmentfault.com/a/1190000011363171)，下面列一下关于prototype的一些使用方法

**1. 方法继承**

```js
var Parent = function() {}
Parent.prototype.show = function() {}
var Child = function() {}

// Child继承Parent的所有原型方法
Child.prototype = new Parent()
```

**2. 所有函数默认继承Object**

```js
var Foo = function() {}
console.log(Foo.prototype.__proto__ === Object.prototype) // true
```

**3. Object.create**

```js
var proto = {a: 1}
var propertiesObject = {
    b: {
        value: 2
    }
}
var obj = Object.create(proto, propertiesObject)
console.log(obj.__proto__ === proto)  // true
```

**4. isPrototypeOf**

prototypeObj是否在obj的原型链上

```js
prototypeObj.isPrototypeOf(obj)
```


**5. instanceof**

contructor.prototype是否出现在obj的原型链上

```js
obj instanceof contructor
```

**6. getPrototypeOf**

Object.getPrototypeOf(obj) 方法返回指定对象obj的原型（内部[[Prototype]]属性的值）

```js
Object.getPrototypeOf(obj)
```

**7. setPrototypeOf**

设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或 null

```js
var obj = {}
var prototypeObj = {}
Object.setPrototypeOf(obj, prototypeObj)
console.log(obj.__proto__ === prototypeObj)  // true
```
