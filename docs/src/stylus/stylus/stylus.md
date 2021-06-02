---
title: 关于前端开发的样式问题
des: stylus
date: 2021-06-02
author: Kora
tags:
    - stylus
    - 样式
group: stylus
---

<img src="https://www.stylus-lang.cn/img/stylus-logo.png" style='display: block; margin: 0 auto; width: 300px'/>

[传送门 | Stylus.js 中文文档](https://www.stylus-lang.cn/)

> 特别注意

```java
#colors() { primary: blue;   secondary: green; }

.button { color: #colors[primary];   border: 1px solid #colors[secondary]; }

编译后

.button { color: blue;  border: 1px solid green;}



@min768:~"(min-width: 768px)"; .element {   @media@min768 {     font-size: 1.2rem;   } }

编译后

@media (min-width: 768px) {
  .element {
    font-size: 1.2rem;
  }
}
```

[_ less.js _less.bootcss.com_pic_f43079da.png_https_www.liangtengyu.com_9998_images_pic_f43079da.png]: https://link.zhihu.com/?target=https%3A//less.bootcss.com/%23
