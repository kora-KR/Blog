---
title: 平台 - 一体化开发(HOT)
des: 平台三原色
date: 2021-06-01
author: Kora
tags:
    - 平台
    - 私服
group: platform
---

# HHX 前端私服

## NPM 私服简介及优点

NPM 是 NodeJS 集成的包管理工具，其包结构能够轻松跟踪依赖项和版本，且结合线上管理可解决传统<script/>标签 CDN 引用形式弊端（如网络资源卡顿）与态资源包粘贴导致项目冗余等问题。

> NPM 私有仓库属于 NPM 子集，其愈发成为趋势主要为以下两个优点：

-   数字列表项目安全性：避免私有封装暴露全球仓库
-   数字列表项目敏捷性：本地数据库封装上传、下载更为快速

## NPM 私服使用

<template>
  <div id="app">
		<authentication>
			<section style='color: #7C94A6'>
				十分抱歉，由于私服安全性，无法直接对外开放文档；
				可联系开发人员获取详细资料！
			</section>
		</authentication>
  </div>
</template>

<script>
import authentication from '../../components/authentication.vue';
export default {
  name: 'App',
  components: {authentication},
  data: () => ({})
}
</script>
<style lang='css'>
</style>

---

## NPM 私服搭建参考文档

> [参考地址](https://www.cnblogs.com/tuituji27/p/11171780.html)
