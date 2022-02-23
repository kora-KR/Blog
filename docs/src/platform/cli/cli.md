---
title: 平台 - 一体化开发（HOT）
des: 平台三原色
date: 2021-06-01
author: Kora
tags:
    - 平台
    - 脚手架
group: platform
---

# HHX CLI(CLI1.0.1)

> 适用人群：了解基础 NODE 规则，了解基础 NRM 规则

## 1.1 脚手架演示

<section>
	<video width="420" height="240" controls>
		<source src="./demo.mp4" type="video/mp4">
		<source src="./demo.mp4" type="video/ogg">
	</video>
	<video width="420" height="240" controls>
		<source src="./downDemo.mp4" type="video/mp4">
		<source src="./downDemo.mp4" type="video/ogg">
	</video>
</section>

---

## 1.2 工具目的

> 提升代码开发效率，代码开发标准化，降低代码维护成本

## 1.3 工具引用

### 1.2.1 Nrm 安装

> npm install -g nrm

### 1.2.2 Nrm 配置

> 私服本地地址(如上 npm-hosted)：

```js
	nrm add hhx http://*****/nexus/repository/npm-hosted/ <私服地址>
```

> 私服 本地、代理 混合地址(如上 npm-all)：

```js
	nrm add hhxAll http://****/nexus/repository/npm-all/ <私服地址>
```

### 1.2.3 Nrm 切换

```js
 	nrm use hhx/hhxAll
```

### 1.2.4 HHX 脚手架全局安装

```js
	/**
	 * @params @version: 非必填 cli版本，默认最高版本(如@1.0.4)
	 * @config -g: 必输入，全局安装
	 * **/
	npm install -g hhx-shell[@version]
```

## 1.4 工具基本使用

### 1.3.1 脚手架安装测试

> shell 工具输入 hhx，及时反馈 hhx 高亮标识

### 1.3.2 脚手架常用命令

```js
	-   查看帮助：hhx -h
	-   查看版本：hhx -v
	-   查看作者：hhx -a
	-   查看日志：hhx -l
	-   交互测试：hhx -s
	-   项目初始化：hhx init hhxTest [page type]
```

### 1.3.3 脚手架项目搭建

```js
	/** 在对应目录下生成<name>的基础项目包
	 * @params <name> 必填项，项目名称
	 * @params [page type] 非必填项，默认vue(vue | uniapp | ionic)
	 * **/
	hhx init <name> [page type]
```
