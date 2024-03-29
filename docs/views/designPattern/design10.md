---

title: "状态模式"
date: 2021-04-16
tags:
- 学习
categories:
- 总结
isShowComments: false
---

<Boxx/>

![设计模式-状态模式](http://qiniu.sunzhaoye.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F.png)

举一个关于开关控制电灯的例子，电灯只有一个开关，第一次按下打开弱光，第二次按下打开强光，第三次按下关闭。

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>state-demo</title>
</head>

<body>
    <button id="btn">开关</button>
    <script>
        // 定义一个关闭状态的类
        class OffLightState {
            constructor(light) {
                this.light = light
            }
            // 每个类都需要这个方法，在不同状态下按都需要触发这个方法
            pressBtn() {
                this.light.setState(this.light.weekLightState)
                console.log('开启弱光')
            }
        }

        // 定义一个弱光状态的类
        class WeekLightState {
            constructor(light) {
                this.light = light
            }
            pressBtn() {
                this.light.setState(this.light.strongLightState)
                console.log('开启强光')
            }
        }

        // 定义一个强光状态的类
        class StrongLightState {
            constructor(light) {
                this.light = light
            }
            pressBtn() {
                this.light.setState(this.light.offLightState)
                console.log('关闭电灯')
            }
        }

        class Light {
            constructor() {
                this.offLightState = new OffLightState(this)
                this.weekLightState = new WeekLightState(this)
                this.strongLightState = new StrongLightState(this)
                this.currentState = null
            }
            setState(newState) {
                this.currentState = newState
            }
            init() {
                this.currentState = this.offLightState
            }
        }

        let light = new Light()
        light.init()
        var btn = document.getElementById('btn')
        btn.onclick = function() {
            light.currentState.pressBtn()
        }
    </script>
</body>

</html>
```
如果这时候需要增加一个超强光，则只需增加一个超强光的类，并添加pressBtn方法，改变强光状态下，点击开关需要把状态更改为超强光，超强光状态下，点击开关把状态改为关闭即可，其他代码都不需要改动。

```js
class StrongLightState {
    constructor(light) {
        this.light = light
    }
    pressBtn() {
        this.light.setState(this.light.superLightState)
        console.log('开启超强光')
    }
}

class SuperLightState {
    constructor(light) {
        this.light = light
    }
    pressBtn() {
        this.light.setState(this.light.offLightState)
        console.log('关闭电灯')
    }
}

class Light {
    constructor() {
        this.offLightState = new OffLightState(this)
        this.weekLightState = new WeekLightState(this)
        this.strongLightState = new StrongLightState(this)
        this.superLightState = new SuperLightState(this)
        this.currentState = null
    }
    setState(newState) {
        this.currentState = newState
    }
    init() {
        this.currentState = this.offLightState
    }
}
```
**小结：**
1. 通过定义不同的状态类，根据状态的改变而改变对象的行为，二不必把大量的逻辑都写在被操作对象的类中，而且容易增加新的状态
2. 符合开放封闭原则