---
title: 原型链 - 三张图带你搞懂其本质！👍
des: 原型链基础概念(优质)
date: 2021-06-01
author: Kora
tags:
    - 原型链 
    - 技术点
group: itChain
---

> 三张图

![pic_a4bfe81c.png](https://www.liangtengyu.com:9998/images/pic_a4bfe81c.png) ![pic_194a7f46.png](https://www.liangtengyu.com:9998/images/pic_194a7f46.png) ![pic_c39e703d.png](https://www.liangtengyu.com:9998/images/pic_c39e703d.png) 终为 null， null 也有\_proto\_

> instanceof - 远比你想象的强大！

如下：

```java
Function instanceof Object;    //true
Object instanceof Function;    //true
```

nstanceof 检测左侧的\_\_proto\_\_原型链上，是否存在右侧的 prototype 原型，故上式成立！

> function 和 object 的关系

![pic_0d383a65.png](https://www.liangtengyu.com:9998/images/pic_0d383a65.png)

文章摘要于（请支持原作者）：

[https://www.cnblogs.com/libin-1/p/5820550.htmlwww.cnblogs.com][https_www.cnblogs.com_libin-1_p_5820550.htmlwww.cnblogs.com]

[https_www.cnblogs.com_libin-1_p_5820550.htmlwww.cnblogs.com]: https://link.zhihu.com/?target=https%3A//www.cnblogs.com/libin-1/p/5820550.html
