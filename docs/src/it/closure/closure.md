---
title: 闭包 - 一个故事简单理解👍
des: 闭包基础概念(优质)
date: 2021-06-01
author: Kora
tags:
    - 闭包
    - 技术点
group: itClosure
---

<img src="https://pic4.zhimg.com/v2-2e8f0ec165783e7dc39f2890f026c0f8_r.jpg" style='display: block; margin: 0 auto 22px; width: 500px'/>

> 一句话理解闭包(更改执行作用域)

JavaScript 中的函数运行在它们被定义的作用域里，而不是它们被执行的作用域里。

> 一个故事理解闭包

我的年龄是秘密，你想知道。

但是每次我都含糊其辞的对你说 undefined；

为了防止我自己也忘记或搞错自己的年龄，我办了一张身份证，上面记录我的年龄信息，藏在我家里。

你知道了这件事，为了得到我的年龄，决定对我投其所好，

于是你送我一只逗比间谍猫。

作为感谢我给了你一把我家的钥匙，方便你有空来看猫。

这只猫实在太神奇了，每次都能找到我的身份证，并把信息传递给你。

于是你每次想知道我的年龄的时候就来看猫，

然后间谍猫每次都能把我的最新的年龄信息反馈给你。

> 代码如下：

```java
var day=0;
var timer=setInterval("dayChanges()",(24*60*60*1000)); //定时器，
function dayChanges(){
    day++;
} //每过24小时 次函数运行一次，我的年龄又多了一天

function isMyHome(){                                           //我家
    var myAge=0;                                               //我的身份证信息
    if(day%365==0){                                            //我的年龄变化
        myAge+=1
    }
    function myHomeKey(){                                       // 我家钥匙
        return myAge;                                           //return 就是间谍猫
    }
    return myHomeKey;                                           //给你我家的钥匙
}

var key=isMyHome();                                             //你拿到我家钥匙

var you=key();                                                  //得到年龄
```

> 或者 更简单的写法理解

```java
var card =  (function home() {
    var card = 8;
    function cat() {
        return card
    }

    return cat()
})()
console.log(card)  // 8
```
