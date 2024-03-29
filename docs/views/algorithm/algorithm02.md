---

title: "队列"
date: 2021-04-16
tags:
- 学习
categories:
- 总结
isShowComments: false
---

<Boxx/>


>队列是遵循FIFO（First In First Out，先进先出，也称为先来先服务）原则的一组有序的项。队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。

其实队列和栈类似，只是原则不同，队列是先进先出，用代码来实现一个队列及操作队列的一些方法，以下用代码实现一个队列的类, 测试和栈类似，就不做具体测试了。

```js
class Queue {
    constructor() {
        this.dataStore = []
    }

    // 入队
    enqueue() {
        for (let i = 0; i < arguments.length; i++) {
            this.dataStore.push(arguments[i])
        }
    }

    // 出队
    dequeue() {
        return this.dataStore.shift()
    }

    // 返回队列第一个元素，不改变队列
    front() {
        return this.dataStore[0]
    }

    // 队列是否为空
    isEmpty() {
        return this.dataStore.length === 0
    }

    // 返回队列的的元素个数
    size() {
        return this.dataStore.length
    }
}
```

### 优先队列

队列中在生活中有着大量应用，如登机时，商务舱要优于经济舱，这时候可以给队列中的元素设置优先级，下面用代码来实现一个优先队列的类

```js
class PriorityQueue {

    constructor() {
        this.dataStore = []
    }

    isEmpty() {
        return this.dataStore.length === 0
    }

    enqueue(element, priority) {

        function QueueElement(element, priority) {
            this.element = element
            this.priority = priority
        }
        // 定义每次往队列里添加的元素
        let queueElement = new QueueElement(element, priority)

        if (this.isEmpty()) {
            // 如果每次队列为空直接添加到队列中
            this.dataStore.push(queueElement)
        } else {
            // 定一个是否被添加到队列的标志
            let isAdded = false
            for (let i = 0; i < this.dataStore.length; i++) {
                if (queueElement.priority < this.dataStore[i].priority) {
                    // 优先级数值越小，代表优先级越高
                    this.dataStore.splice(i, 0, queueElement)
                    isAdded = true
                    break;
                }
            }

            if (!isAdded) {
                // 如果被添加的新元素优先级最低，添加到队尾
                this.dataStore.push(queueElement)
            }
        }
    }
    //
}

let priorityQueue = new PriorityQueue()

priorityQueue.enqueue('a', 5)
priorityQueue.enqueue('b', 2)
priorityQueue.enqueue('c', 3)

console.log(priorityQueue.dataStore)
```
最后的队列如下图：

![数据结构-优先队列测试](http://qiniu.sunzhaoye.com/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84-%E4%BC%98%E5%85%88%E9%98%9F%E5%88%97%E6%B5%8B%E8%AF%95.png)
