---
title: 关于前端开发的样式问题
des: less
date: 2021-06-02
author: Kora
tags:
    - less
    - 样式
group: stylus
---

<img src="https://less.bootcss.com/public/img/less_logo.png" style='display: block; margin: 0 auto; width: 300px'/>

[传送门 | Less.js 中文文档](https://less.bootcss.com/#)

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

> 封装变量使用

```js
//基础颜色
@baseColor: #57be6a;
//线性渐变
@lineColor: linear-gradient(90deg,rgba(255,155,21,1) 0%,rgba(255,128,15,1) 100%);

.lineColor(@deg:180deg,@val:20%){
  background: linear-gradient(@deg,#FE4F4F @val,#FFD18C 100%);
}
//定位
.site(@sitePosition: fixed, @siteLeft: 0, @siteTop: 0, @transformX: 0, @transformY: 0) {
  position: @sitePosition;
  left: @siteLeft;
  top: @siteTop;
  transform: translate(@transformX, @transformY);
}
// 弹性盒
.flex(@level: center, @vertical: center) {
  display: flex;
  justify-content: @level;
  align-items: @vertical;
}
// 1px 边框
.border(@font: bottom, @color: #f2f2f2) {
  border-@{font}: 1px solid @color;
  box-sizing: border-box;
}
.borderAround(@color: #666) {
  border: 1px solid @color;
  box-sizing: border-box;
}
// 多行省略号
.ellipsis(@line: 1) {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: @line;
  line-clamp: @line;
  -webkit-box-orient: vertical;
}
//公用button
.nav_button(@bgColor: @baseColor) {line-height: 88px; background: @bgColor; font-size: 24px; color: #fff; border-radius: 10px; text-align: center}
//用户页面icon循环
.nav_r(@navicon) when (@navicon < 6 ) {
  .nav_icon_loop:nth-of-type(@{navicon}) .icon_loop::before{
    background-position: -.58rem + (-.396rem * @navicon) 0;
  }
  .nav_r(( @navicon + 1 ));// 递归调用自身
}
.nav_r(1);
//圆
.circle(@circleR, @circleC: #A9AEBD) {display: block; width: @circleR; height: @circleR; border-radius: 50%; background: @circleC}

```

[_ less.js _less.bootcss.com_pic_f43079da.png_https_www.liangtengyu.com_9998_images_pic_f43079da.png]: https://link.zhihu.com/?target=https%3A//less.bootcss.com/%23
