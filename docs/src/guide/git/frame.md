---
title: 开发规范
des: git 规范（框架）
date: 2021-05-26
author: Kora
tags:
    - git
    - 规范
group: specification
---

# 框架规范

> `project 为框架大版本，可能无法相互兼容`

<template>
  <div id="app">
    <mindmap v-model="datas" :draggable='false' height='300'></mindmap>
  </div>
</template>

<script>
import mindmap from '@hellowuxin/mindmap';

export default {
  name: 'App',
  components: {
    mindmap
  },
  data: () => ({
		datas: [{
			"name":"Git",
			"children":
			[
				{
				"name":"project1",
				"children":
					[
						{"name":"分支 1.0", "children": [
							{"name":"Tag 1.0.1", "children": []},
							{"name":"Tag 1.0.2", "children": []}
						]},
						{"name":"分支 1.1", "children": [
							{"name":"Tag 1.1.1", "children": []},
							{"name":"Tag 1.1.2", "children": []}
						]}
					]
				},
				{name: '...'},
				{
				"name":"project(n)",
				"children":
					[
						{"name":"分支 n.0", "children": [
							{"name":"Tag n.0.1", "children": []},
							{"name":"Tag n.0.2", "children": []}
						]},
						{"name":"分支 n.1", "children": [
							{"name":"Tag n.1.1", "children": []},
							{"name":"Tag n.1.2", "children": []}
						]}
					]
				},
			]
		}]
	})
}
</script>
<style lang='css'>
/* #content{transform: translate(50%, 50%)} */
.depth_0{transform: translate(-15%, 0%)}
</style>
