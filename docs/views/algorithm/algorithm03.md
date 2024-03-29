---

title: "集合"
date: 2021-04-16
tags:
- 学习
categories:
- 总结
isShowComments: false
---

<Boxx/>


> ![数据结构-集合](http://qiniu.sunzhaoye.com/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84-%E9%9B%86%E5%90%88.png)

```js
class Set {
    constructor() {
        this.items = {}
    }

    has(val) {
        return val in this.items
    }

    // 向集合中添加一个新的项
    add(val) {
        this.items[val] = val
    }

    // 从集合中移除指定项
    remove(val) {
        if (val in this.items) {
            delete this.items[val]
            return true
        }
        return false
    }

    // 清空集合
    clear() {
        this.items = {}
    }

    // 返回集合中有多少项
    size() {
        return Object.keys(this.items).length
    }

    // 提取items对象的所有属性，以数组的形式返回
    values() {
        return Object.keys(this.items)
    }

    // 取当前集合与其他元素的并集
    union(otherSet) {
        let unionSet = new Set()
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        let valuesOther = otherSet.values()
        for (let i = 0; i < valuesOther.length; i++) {
            unionSet.add(valuesOther[i])
        }
        return unionSet
    }

    // 取当前集合与其他元素的交集
    intersection(otherSet) {
        let intersectionSet = new Set()
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }

    // 取当前集合与其他元素的差集
    diff(otherSet) {
        let intersectionSet = new Set()
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }

    // 判断当前集合是否是其他集合的子集
    isSubSet(otherSet) {
        // 如果当前集合项的个数大于被比较的otherSet的项的个数，则可判断当前集合不是被比较的otherSet的子集
        if (this.size() > otherSet.size()) {
            return false
        } else {
            let values = this.values()
            for (let i = 0; i < values.length; i++) {
                // 只要当前集合有一项不在otherSet中，则返回false
                if (!otherSet.has(values[i])) {
                    return false
                }
            }
            // 循环判断之后，当前集合每一项都在otherSet中，则返回true
            return true
        }
    }
}
```
```js
// 测试
let setA = new Set()
setA.add('a')
setA.add('b')
setA.add('c')
setA.remove('b')
console.log(setA.values()) // ['a', 'c']
console.log(setA.size()) // 2

let setB = new Set()
setB.add('c')
setB.add('d')
setB.add('e')

let unionAB = setA.union(setB)
console.log(unionAB.values()) // ['a', 'c', 'd', 'e']
let intersectionAB = setA.intersection(setB)
console.log(intersectionAB.values()) // ['c']

let diffAB = setA.diff(setB)
console.log(diffAB.values()) // ['a']

let setC = new Set()
setC.add('d')
setC.add('e')

let isSubSetCB = setC.isSubSet(setB)
console.log(isSubSetCB) // true

let isSubSetAB = setA.isSubSet(setB)
console.log(isSubSetAB) // false
```