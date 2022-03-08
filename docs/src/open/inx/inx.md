---
title: 开源 - 敏捷开发（HOT）
des: 你一个苹果，我一个苹果，交换还是你一个我一个。你一份知识，我一份只是，交换便是双份知识！
date: 2022-03-08
author: Kora
tags:
    - inx
    - 脚手架
group: open
---

# inx CLI(CLI1.0.5)

> 适用人群：了解基础 NODE 规则，了解基础 NRM 规则

## 1.1 脚手架演示

[inx-shell 传送门](https://www.npmjs.com/package/inx-shell)

<section>
	<video width="620" height="240" controls>
		<source src="./demo.mp4" type="video/mp4">
		<source src="./demo.mp4" type="video/ogg">
	</video>
</section>


## 1.2 工具目的

> 提升代码开发效率，代码开发标准化，降低代码维护成本

## 1.3 工具引用

### 1.3.1 INX 脚手架全局安装

```js
	/**
	 * @params @version: 非必填 cli版本，默认最高版本(如@1.0.5)
	 * @config -g: 必输入，全局安装
	 * **/
	npm install -g inx-shell[@version]
```

## 1.4 工具基本使用

### 1.4.1 脚手架安装测试

> shell 工具输入 inx，及时反馈 inx 高亮标识

### 1.4.2 脚手架常用命令

```js
-   查看帮助：inx -h
-   查看版本：inx -v
-   查看作者：inx -a
-   查看日志：inx -l
-   交互测试：inx -s
-   项目初始化：inx init <name> [type]
```

### 1.4.3 脚手架项目搭建

```js
	/** 在对应目录下生成<name>的基础项目包
	 * @params <name> 必填项，项目名称
	 * @params [page type] 非必填项，默认vue(vue|react|uniapp|ionic四种类型)
	 * **/
	inx init <name> [page type]
```
