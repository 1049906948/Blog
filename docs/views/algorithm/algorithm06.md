---

title: "树"
date: 2021-04-16
tags:
- 学习
categories:
- 总结
isShowComments: false
---

> 一个树结构包含一系列存在父子关系的节点。每个节点都有一个父节点（除了顶部的第一个节点）以及零个或多个子节点
![数据结构-树的相关术语](http://qiniu.sunzhaoye.com/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84-%E6%A0%91%E7%9A%84%E7%9B%B8%E5%85%B3%E6%9C%AF%E8%AF%AD.png)


### 二叉树

> ![数据结构-二叉树概念](http://qiniu.sunzhaoye.com/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84-%E4%BA%8C%E5%8F%89%E6%A0%91%E6%A6%82%E5%BF%B5.png)

```js

// 创建一个键
function createNode(key) {
    this.key = key
    this.left = null
    this.right = null
}

// 向树中插入键
function insertNode(node, newNode) {
    if (newNode.key < node.key) {
        if (node.left === null) {
            node.left = newNode
        } else {
            insertNode(node.left, newNode)
        }
    } else {
        if (node.right === null) {
            node.right = newNode
        } else {
            insertNode(node.right, newNode)
        }
    }
}

// 遍历回调
function printNode(value) {
    console.log(value)
}

// 中序遍历
function inOrderTraverseNode(node, callback) {
    if (node !== null) {
        inOrderTraverseNode(node.left, callback)
        callback(node.key)
        // debugger 可以加入debugger，用浏览器控制观察Call Stack(执行环境栈)来分析程序执行过程
        inOrderTraverseNode(node.right, callback)
    }
}

// 先序遍历
function prevOrderTraverseNode(node, callback) {
    if (node !== null) {
        // 先访问节点本身
        callback(node.key)
        // 再访问左侧节点
        prevOrderTraverseNode(node.left, callback)
        // 然后再访问右侧节点
        prevOrderTraverseNode(node.right, callback)
    }
}

// 后序遍历
function postOrderTraverseNode(node, callback) {
    if (node !== null) {
        // 先访问左侧节点
        postOrderTraverseNode(node.left, callback)
        // 再访问右侧节点
        postOrderTraverseNode(node.right, callback)
        // 然后再访问节点本身
        callback(node.key)
    }
}

class BinarySearchTree {
    constructor() {
        this.key = null
    }
    insert(key) {
        let newNode = new createNode(key)
        if (this.key === null) {
            this.key = newNode
        } else {
            insertNode(this.key, newNode)
        }
    }
    // 中序遍历访问节点(结果为按值由小到大访问)
    inOrderTraverse(callback) {
        inOrderTraverseNode(this.key, callback)
    }
    // 先序遍历访问节点(结果为先访问节点本身，再左侧节点，然后再访问右侧节点)
    prevOrderTraverse(callback) {
        prevOrderTraverseNode(this.key, callback)
    }
    // 后序遍历访问节点(结果为先访问左侧节点，再访问右侧节点，然后再访问节点本身)
    postOrderTraverse(callback) {
        postOrderTraverseNode(this.key, callback)
    }
    // 查找树中的最小值
    findMin(node) {
        if (node) {
            while(node && node.left !== null) {
                node = node.left
            }
            return node.key
        }
        return null
    }
    // 查找树中的最小值对应的节点
    findMinNode(node) {
        if (node) {
            while(node && node.left !== null) {
                node = node.left
            }
            return node
        }
        return null
    }

    // 查找树中的最大值
    findMax(node) {
        if (node) {
            while(node && node.right !== null) {
                node = node.right
            }
            return node.key
        }
        return null
    }

    // 查找树中的特定值，如果存在返回true，否则返回false
    search(node, key) {
        if (node === null) {
            return false
        }

        if (key < node.key) {
            // 如果被查找的key小于节点值，从节点的左侧节点继续递归查找
            return this.search(node.left, key)
        } else if (key > node.key) {
            // 如果被查找的key大于节点值，从节点的左侧节点继续递归查找
            return this.search(node.right, key)
        } else {
            // 被查找的key等于node.key
            return true
        }
    }

    // 移除树中的特定节点
    removeNode(node, key) {
        if (node === null) {
            return null
        }

        if (key < node.key) {
            node.left = this.removeNode(node.left, key)
        } else if (key > node.key) {
            node.right = this.removeNode(node.right, key)
        } else {
            // console.log(node)
            // 移除叶子节点(无左右节点的节点)
            if (node.left === null && node.right === null) {
                node = null
                return node
            }

            // 移除只有一个节点的节点(只有左节点或只有右节点)
            if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            }

            // 移除有两个节点(既有左节点又有右节点)
            if (node.left && node.right) {
                // 1. 找到被移除节点的右节点下的最小节点，替换被移除的节点
                let minRightNode = this.findMinNode(node.right)
                // 2. 把被移除节点的key设置为 被移除节点的右节点下的最小节点的key
                node.key = minRightNode.key
                // 3. 移除找到的那个最小节点
                this.removeNode(node.right, node.key)
                // 4. 向被移除节点的父节点返回更新后节点的引用
                return node
            }
        }
    }
}

```

**测试如下:**
```js

let tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(6)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(20)
tree.insert(12)
tree.insert(14)
tree.insert(18)
tree.insert(25)

tree.inOrderTraverse(printNode)   // 3  5 6 7 8  9 10 11 12 13 14 15 18 20 25
tree.prevOrderTraverse(printNode) // 11 7 5 3 6  9 8  10 15 13 12 14 20 18 25
tree.postOrderTraverse(printNode) // 3  6 5 8 10 9 7  12 14 13 18 25 20 15 11

// tree.key为根节点，为了保持树不同层的结构一致，没有使用root为属性，使用了key
let minNodeVal = tree.findMin(tree.key)
console.log('minNodeVal', minNodeVal)

let maxNodeVal = tree.findMax(tree.key)
console.log('maxNodeVal', maxNodeVal)

let isHasNodeVal = tree.search(tree.key, 7)
console.log(isHasNodeVal)   // true

tree.removeNode(tree.key, 15)
console.log(tree) // 可以查看树的结构，15的这个节点的key已经被替换为18，并且key为18的节点已经被删除
```

#### 树的遍历

**1. 中序遍历**

![数据结构-二叉树中序遍历图](http://qiniu.sunzhaoye.com/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84-%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86%E5%9B%BE.png)

**2. 先序遍历**

![数据结构-二叉树先序遍历图](http://qiniu.sunzhaoye.com/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84-%E4%BA%8C%E5%8F%89%E6%A0%91%E5%85%88%E5%BA%8F%E9%81%8D%E5%8E%86%E5%9B%BE.png)

**3. 后序遍历**

![数据结构-二叉树后序遍历图](http://qiniu.sunzhaoye.com/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84-%E4%BA%8C%E5%8F%89%E6%A0%91%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86%E5%9B%BE.png)


#### 移除节点的过程

**1. 移除以一个叶节点**
![数据结构-二叉树移除节点(叶子节点)](http://qiniu.sunzhaoye.com/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84-%E4%BA%8C%E5%8F%89%E6%A0%91%E7%A7%BB%E9%99%A4%E8%8A%82%E7%82%B9%28%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9%29.png)

**2. 移除只有一个左侧子节点或右侧子节点的节点**
![数据结构-二叉树移除节点(只有一个左侧子节点或右侧子节点)](http://qiniu.sunzhaoye.com/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84-%E4%BA%8C%E5%8F%89%E6%A0%91%E7%A7%BB%E9%99%A4%E8%8A%82%E7%82%B9%28%E5%8F%AA%E6%9C%89%E4%B8%80%E4%B8%AA%E5%B7%A6%E4%BE%A7%E5%AD%90%E8%8A%82%E7%82%B9%E6%88%96%E5%8F%B3%E4%BE%A7%E5%AD%90%E8%8A%82%E7%82%B9%29.png)

**3. 移除有两个子节点的节点**
![http://qiniu.sunzhaoye.com/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84-%E4%BA%8C%E5%8F%89%E6%A0%91%E7%A7%BB%E9%99%A4%E8%8A%82%E7%82%B9%28%E6%9C%89%E4%B8%A4%E4%B8%AA%E5%AD%90%E8%8A%82%E7%82%B9%E7%9A%84%E8%8A%82%E7%82%B9%29.png](http://qiniu.sunzhaoye.com/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84-%E4%BA%8C%E5%8F%89%E6%A0%91%E7%A7%BB%E9%99%A4%E8%8A%82%E7%82%B9%28%E6%9C%89%E4%B8%A4%E4%B8%AA%E5%AD%90%E8%8A%82%E7%82%B9%E7%9A%84%E8%8A%82%E7%82%B9%29.png)
