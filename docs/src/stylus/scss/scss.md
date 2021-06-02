---
title: 关于前端开发的样式问题
des: scss
date: 2021-06-02
author: Kora
tags:
    - scss
    - 样式
group: stylus
---

<img src="https://pic4.zhimg.com/v2-14b7d54d9c92f52c211549ef418441de_r.jpg" style='display: block; margin: 0 auto; width: 300px;  border-radius: 4px'/>

[传送门 | Sass.js 中文文档](https://www.sass.hk/)

> 变量声明

```java
$nav-color: #F90;
nav {
  $width: 100px;
  width: $width;                    // 由此可见，内外部均可
  color: $nav-color;
}

// 编译后

nav {
  width: 100px;
  color: #F90;
}
```

> 嵌套

```java
#content {
  article {
    h1 { color: #333 }
    p { margin-bottom: 1.4em }
  }
  #content aside { background-color: #EEE }
}
```

> 父级选择器

```java
article a {
  color: blue;
  &:hover { color: red }           //  这个还是挺厉害的
}

// 编译后

article a { color: blue }
article a:hover { color: red
```

> \+ ~

```java
header + a                         // 紧跟header后的a
header ~ a                         // header同级别的a
```

> 混合器

```java
// 声明
@mixin rounded-corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  ul{border: 1px solid #900}
}
// 应用
notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}

// 编译后

notice {
  background-color: green;
  border: 2px solid #00aa00;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  ul{border: 1px solid #900}
}

------------------------------------------

这玩意还能传参，你说神不神器~，还能设置默认值
@mixin setColor($font: #900, $border, $background) {
  color: $font;
  border: 1px solid $border;
  background: $background;
}

-------------------------------------------
展开参数
@mixin box-shadow($shadows...) {
  -moz-box-shadow: $shadows;
  -webkit-box-shadow: $shadows;
  box-shadow: $shadows;
}
.shadows {
  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}

逆向展开
@mixin colors($text, $background, $border) {
  color: $text;
  background-color: $background;
  border-color: $border;
}
$values: #ff0000, #00ff00, #0000ff;
.primary {
  @include colors($values...);
}
```

> 继承（谨慎使用）,在@media 中使用@extend 只能使用其内部，使用外部报错

```java
.error {
  border: 1px solid red;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}

// 编译后

.seriousError {
  border: 1px solid red;
  background-color: #fdd;
  border-width: 3px;
}

============-------===========

.error {
  border: 1px #f00;
  background-color: #fdd;
}
.error.intrusion {
  background-image: url("/image/hacked.png");
}
.seriousError {
  @extend .error;
  border-width: 3px;
}

// 编译后

.error, .seriousError {
  border: 1px #f00;
  background-color: #fdd; }

.error.intrusion, .seriousError.intrusion {
  background-image: url("/image/hacked.png"); }

.seriousError {
  border-width: 3px; }

============-------===========

.hoverlink {
  @extend a:hover;
}
.comment a.user:hover {
  font-weight: bold;
}

// 编译后

.comment a.user:hover, .comment .user.hoverlink {
  font-weight: bold; }



------------

#context a%extreme {
  color: blue;
  font-weight: bold;
  font-size: 2em;
}
.notice {
  @extend %extreme;
}

// 编译后

#context a .notice{
  color: blue;
  font-weight: bold;
  font-size: 2em;
}

--------------
// optional - 防止未有父类继承报错
a.important {
  @extend .notice !optional;
}
```

> 运算符号

```java
+, -, *, /, %...均支持

字符串中进行运算：
$content: 2;

content: '#{$content+2+2+$content}'   // 最终页面显示8
```

> 插值语句 （\#\{\}，这个很强）

易混点： 与\$key: boder; 区别， 这个只能应用于样式值哦（目前发现）

```java
在类名、id名、样式名 或是 字符串（`../img/#{$x}.png`）都可以使用
如下：
$key: border;

header>.#{$key}{#{$key}: 1px solid #900}

编译后：
header>.border{border: 1px solid #900}
```

> 控制指令

-   @if

```java
$type: monster;
p {
  @if $type == ocean {
    color: blue;
  } @else if $type == matador {
    color: red;
  } @else if $type == monster {
    color: green;
  } @else {
    color: black;
  }
}
```

-   @for (这个比 if 好用多了)

```java
@for $i from 1 through 3 {
   .for_#{$i - 1}{ width: 6px; height: ( 4 * $i )upx }
}

// 编译后 (根据实际情况考虑一下$i的获取值)
.for_0{ width: 6px; height: 4upx }
.for_1{ width: 6px; height: 8upx }
.for_2{ width: 6px; height: 12upx }
```

-   @each

```java
@each $x in class1, class2, class3 {
   #{$x}-i{ background: url(`../img/#{$x}.png`)}
}

// 编译后

class1-i{background: url(../img/class1.png)}
class2-i{background: url(../img/class2.png)}
class3-i{background: url(../img/class3.png)}

-------------------（穿两个值也是nb）
@each $ket, $v in (h1: 1, h2: 2, h3: 3) {
  $key_i {
    font-size: ($v)px
  }
}

// 编译后

h1_i{font-size: 1px}
h2_i{font-size: 2px}
h3_i{font-size: 3px}
```

-   while

```java
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}

// 编译后

.item-6 {
  width: 12em; }

.item-4 {
  width: 8em; }

.item-2 {
  width: 4em; }
```

> 自定义函数

```java
$max = 990
@function custom($x) {
  @return $x + $max
}

header{ font-size: custom(6)upx }

// 编译后

header{fopnt-size: 996upx}
```
