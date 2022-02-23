---
title: 平台 - 一体化开发(HOT)
des: 平台三原色
date: 2021-06-01
author: Kora
tags:
    - 平台
group: platform
---

# HHX 前端平台

## 平台内容

    平台共包含两部分，私服插件（三模块：组件、方法、小工具）与辅助文档（代码规范、git 规范、NPM 私服使用、脚手架使用等）

## 平台目的

    开发人员可借助平台的私服插件可视化、可操作性来实现自定义插件快速理解与引用，整合文档模块约束代码规范化

## 平台演示

<template>
  <div id="app">
		<authentication>
			<section>
				<video width="420" height="240" controls>
					<source src="./demo.mp4" type="video/mp4">
					<source src="./demo.mp4" type="video/ogg">
				</video>
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
