---

title: "冒泡排序"
date: 2021-04-16
tags:
- 学习
categories:
- 总结
isShowComments: false
---


>![算法-冒泡排序概念](http://qiniu.sunzhaoye.com/%E7%AE%97%E6%B3%95-%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F%E6%A6%82%E5%BF%B5.png)

**冒泡排序的执行过程**

![算法-冒泡排序执行过程](http://qiniu.sunzhaoye.com/%E7%AE%97%E6%B3%95-%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F%E6%89%A7%E8%A1%8C%E8%BF%87%E7%A8%8B.png)


**代码如下：**

```js
let arr = [5, 4, 3, 2, 1]

// 交换元素的位置
function swap(arr, index1, index2) {
    var temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
}

bubbleSort(arr)
console.log(arr)  // [1, 2, 3, 4, 5]
```