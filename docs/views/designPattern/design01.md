---

title: "策略模式"
date: 2021-04-16
tags:
- 学习
categories:
- 总结
isShowComments: false
---

<Boxx/>



>定义一系列的算法，把它们一个个封装起来，并使它们可以替换


```js
var fnA = function(val) {
    return val * 1
}

var fnB = function(val) {
    return val * 2
}

var fnC = function (val) {
    return val * 3
}


var calculate = function(fn, val) {
    return fn(val)
}

console.log(calculate(fnA, 100))// 100
console.log(calculate(fnB, 100))// 200
console.log(calculate(fnC, 100))// 300

```