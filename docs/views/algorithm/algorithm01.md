---

title: "插入排序"
date: 2021-04-16
tags:
- 学习
categories:
- 总结
isShowComments: false
---

<Boxx/>


>![算法-插入排序概念](http://qiniu.sunzhaoye.com/%E7%AE%97%E6%B3%95-%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F%E6%A6%82%E5%BF%B5.png)

**插入排序的执行过程**

![算法-插入排序执行过程](http://qiniu.sunzhaoye.com/%E7%AE%97%E6%B3%95-%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F%E6%89%A7%E8%A1%8C%E8%BF%87%E7%A8%8B.png)

**代码如下：**


```js
let arr = [5, 4, 3, 2, 1]

function swap(arr, index1, index2) {
    var temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i
        let temp = arr[i]
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1]
            j--
        }
        arr[j] = temp
    }
}

insertSort(arr)
console.log(arr)  // [1, 2, 3, 4, 5]
```