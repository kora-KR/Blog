---
title: 框架 - harmonyOS基础整理
des: 鸿蒙开发者基础使用整理
date: 2021-06-08
author: Kora
tags:
    - harmony
group: frame
---

# harmonyOS

> HarmonyOS 回归本源设计，从浩瀚宇宙中抽象出动态语言，模拟真实世界中的物理动力学，将万有引力融入到动效设计中。引入轻拟物美学风格，以真实生活中的质感，为用户带来全新交互体验。跨设备的超级终端一拖即连，万能卡片轻轻一滑即可获取所需信息，带来全场景智慧生活新体验。

## 传送门

> [harmonyOS](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/publish_app-0000001053223745#ZH-CN_TOPIC_0000001058015911__section178461193713)

## 同安卓对比

-   微内核、分布式架构
-   底层均为 linux 基础
-   安卓底层代码为 Linux5 倍，代码冗余
-   打包生成 hap 文件，转 zip 会包含兼容性 apk 安卓可运行文件

## 目录结构

-   Entry.hap(Module) UI 模块，唯一
-   FeatureA(Module) 逻辑模块，可多个
-   轻量级穿戴 JS 工程，只存在一个 module，只存在一个 JS FA，不允许创建新的 JS Component(JS Component 就是一个 JS FA，其包含 htm、css、js)

## ability 结构拆分

-   创建后 config.json 默认配置，不配置无法正常访问

### ability 类型

-   pageAbility
-   dataAbility
-   featureAbility
-   serviceAbility
-   mainAbility:

    设置自定义启动 setInstanceName("自定义 JS FA 命名");

## 文件创建

### ability 创建

    src/main/java/... -> 右击创建 -> Ability

### FA 创建

    src/main/js/... -> 右击创建 -> JSComponent

### page 创建

    src/main/js/... -> 右击创建 -> JSPage

### module 创建(轻量级穿戴 JS 工程，只存在一个 module，只存在一个 JS FA，不允许创建新的 JS Component(JS Component 就是一个 JS FA，其包含 htm、css、js))

    根目录 -> 右击创建 -> Module

#### Module 类型

    1. library：日志打印，数据字典（build.gradle调用声明：implementation project(":mylibrary")，注意点：一定要点击同步Sync Now）

## 样式布局

### JAVA

1. 虚拟像素：vp
2. 文字像素：fp
3. 关系：默认 1vp == 1fp，但设置字体显示大小：1fp = 1vp \* scale

### JS

1.  优点：声明式编程、跨设备、高性能
2.  单位：
    智慧屏基准单位：720px （发现未能达到效果）
    穿戴设备基准单位：454px

    #### 媒体样式

        ```css
        @media screen and (device-type: tv) {}
        ```

### UI 开发工具

[UI 传送门](https://developer.harmonyos.com/cn/docs/design/des-guides/quick-start-0000001053175671)

## 生命周期

### JS

    项目：onCreate -> onDestroy
    路由：onInit -> onReady -> onShow(后台进入重新调用) -> onDestroy

### JAVA

    待整理

## 路由跳转

### JS

#### 跳转类型

    push | replace | back | clear | getLength | getState

#### 跳转示例

```js
import router from '@system.router';

router.push({
    uri: 'pages/pages2/pages2',
    params: {
        name: 'niko',
    },
});
```

#### 路由传参

    跳转路由可直接获取携带参数

### JAVA

#### 跳转类型

    intent

## 调试技巧（debug 模式）

1. 断点暂停（可增加断点执行逻辑语句，如 for 循环，指定索引为固定值时停止）

## attach（debug 模式）

> 不影响项目运行记录 debug 位置
