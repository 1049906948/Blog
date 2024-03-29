---

title: "链表"
date: 2021-04-16
tags:
- 学习
categories:
- 总结
isShowComments: false
---

<Boxx/>


> ![数据结构-链表](http://qiniu.sunzhaoye.com/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84-%E9%93%BE%E8%A1%A8.png)

直接上代码:

```js
class LinkedList {
    constructor() {
        this.head = null // 链表的第一个元素
        this.length = 0
    }
    // 向链表尾部添加一个新元素
    append(element) {
        let Node = function(element) {
            this.element = element
            this.next = null
        }
        let node = new Node(element)
        let currentNode;
        if (this.head == null) {
            // 如果链表head为null，表示链表无元素，直接把node赋值给head即可
            this.head = node
        } else {
            currentNode = this.head
            while (currentNode.next) {
                // 每次循环会进行到链表的倒数第一个元素，把currentNode设置为倒数第一个元素
                currentNode = currentNode.next
            }
            // 把新增的node赋值给currentNode的next属性，最后一个元素的next永远为null
            currentNode.next = node
        }
        // 链表的元素个数每次append后 +1
        this.length++
    }
    // 从链表中按位置删除元素
    removeAt(position) {
        // position表示要移除元素的位置
        let index = 0
        let previous = null
        let currentNode = this.head
        if (position >= 0 && position < this.length) {
            while (index < position) {
                // 主要是找出position位置的元素，设置为currentNode
                previous = currentNode
                currentNode = currentNode.next
                index++
            }
            // 把currentNode的上一个元素的next指向currentNode的下一个元素，就对应删除了currentNode
            previous.next = currentNode.next
        } else {
            // 表示链表中不存在这个元素，直接return null
            return null
        }
        // 删除后链表的元素个数每次删除减1
        this.length--;
        // 返回删除的元素
        return currentNode
    }
    // 按元素值删除元素
    remove(element) {
        let index = this.indexOf(element)
        return this.removeAt(index)
    }
    // 向链表中插入新元素
    insert(element, position) {
        // element表示被插入元素的具体值
        // position表示被插入元素的位置
        if (position >= 0 && position < this.length) {
            let index = 0
            let previous = null
            let currentNode = this.head
            let Node = function(element) {
                this.element = element
                this.next = null
            }
            let node = new Node(element)
            while (index < position) {
                previous = currentNode
                currentNode = currentNode.next
                index++
            }
            // 把当前元素的上一个元素的next设置为被插入的元素
            previous.next = node
            // 把被插入元素的next设置为当前元素
            node.next = currentNode
            // 链表元素个数加1
            this.length++;
            // 如果插入元素成功，返回true
            return true
        } else {
            // 如果找不到插入元素位置，返回false
            return false
        }
    }
    // 查找元素在链表中的位置
    indexOf(element) {
        let currentNode = this.head
        let index = 0
        // 如果currentNode也就是head为空，则链表为空不会进入while循环，直接返回 -1
        while (currentNode) {
            if (element === currentNode.element) {
                // 如果被找到，返回当前index
                return index
            }
            // 每一轮循环如果被查找元素还没有被找到，index后移一位，currentNode指向后一位元素，继续循环
            index++
            currentNode = currentNode.next
        }
        // 如果一直while循环结束都没找到返回 -1
        return -1
    }
    // 链表是否为空
    isEmpty() {
        return this.length === 0
    }
    // 链表元素个数
    size() {
        return this.length
    }
}

let linkedList = new LinkedList()

linkedList.append('a')
linkedList.append('b')
linkedList.append('c')
linkedList.append('d')
linkedList.removeAt(2)
linkedList.insert('e', 2)
console.log('bIndex', linkedList.indexOf('b'))
console.log('fIndex', linkedList.indexOf('f'))
linkedList.remove('d')
console.log(linkedList)

```

上述代码测试结果如下图所示:

![数据结构-链表测试](http://qiniu.sunzhaoye.com/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84-%E9%93%BE%E8%A1%A8%E6%B5%8B%E8%AF%95.png)