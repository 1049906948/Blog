---

title: "栈"
date: 2021-04-16
tags:
- 学习
categories:
- 总结
isShowComments: false
---

>栈是一种遵从后进先出LIFO（Last In First Out，后进先出）原则的有序集合。新添加的或待删除的元素都保存在栈的末尾，称作栈顶，另一端就叫栈底。

定义一个栈的类，并为该栈声明一些方法，存储数据的底层数据结构使用数组

```js
class Stack {
    constructor() {
        this.dataStore = []
    }

    // 向栈中添加一个或多个元素到栈顶
    push() {
        for (let i = 0; i < arguments.length; i++) {
            this.dataStore.push(arguments[i])
        }
    }

    // 移出栈顶元素，并返回被移出的元素
    pop() {
        return this.dataStore.pop()
    }

    // 返回栈顶元素，不对栈做修改
    peek() {
        return this.dataStore[this.dataStore.length - 1]
    }

    // 判断栈是否为空，如果为空返回true，否则返回false
    isEmpty() {
        return this.dataStore.length === 0
    }

    // 清空栈
    clear() {
        this.dataStore = []
    }

    // 返回栈中元素的个数

    size() {
        return this.dataStore.length
    }
}

// 栈的操作

let stack = new Stack()

stack.push(1, 2, 3)
console.log(stack.dataStore) // [1, 2, 3]
console.log(stack.pop())     // 3
console.log(stack.dataStore) // [1, 2]
console.log(stack.peek())    // 2
console.log(stack.dataStore) // [1, 2]
console.log(stack.size())    // 2
console.log(stack.isEmpty()) // false
stack.clear()
console.log(stack.dataStore)  // []
console.log(stack.isEmpty())  // true
console.log(stack.size())     // 0

```

**栈的应用**

本文举书中一个进制转换的例子并稍作修改,栈的类还是使用上面定义的Stack

```js
function transformBase(target, base) {
    let quotient;                    // 商
    let remainder;                   // 余数
    let binaryStr = '';              // 转换后的值
    let digits = '0123456789ABCDEF'  // 对转换为16进制数做处理
    let stack = new Stack()
    while(target > 0) {
        remainder = target % base
        stack.dataStore.push(remainder)
        target = Math.floor(target / base)
    }

    while(!stack.isEmpty()) {
        binaryStr += digits[stack.dataStore.pop()].toString()
    }

    return binaryStr
}

console.log(transformBase(10, 2))   // 1010
console.log(transformBase(10, 8))   // 12
console.log(transformBase(10, 16))  // A
```