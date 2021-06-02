---
title: 开发规范
des: git规范（项目）
date: 2021-05-27
author: Kora
tags:
    - git
    - 规范
group: specification
---

# 项目规范

<template>
  <div id="app">
   	<div id='container' style='background: #EEEEF3'></div>
  </div>
</template>

<script> 

export default {
	name: 'App',
	mounted() {
		import('@antv/g6').then((G6) => {
			const fittingString = (str, maxWidth, fontSize) => {
				let currentWidth = 0;
				let res = str;
				const pattern = new RegExp('[\u4E00-\u9FA5]+');
				str.split('').forEach((letter, i) => {
					if (currentWidth > maxWidth) return;
					if (pattern.test(letter)) {
						currentWidth += fontSize;
					} else {
						currentWidth += G6.Util.getLetterWidth(letter, fontSize);
					}
					if (currentWidth > maxWidth) {
						res = `${str.substr(0, i)}\n${str.substr(i)}`;
					}
			});
			return res;
		};

		const globalFontSize = 12;

		G6.registerEdge('circle-running', {
			afterDraw(cfg, group) {
			const shape = group.get('children')[0];
			const startPoint = shape.getPoint(0);
			const circle = group.addShape('circle', {
				attrs: {
					x: startPoint.x,
					y: startPoint.y,
					fill: '#1890ff',
					r: 5,
				},
				name: 'circle-shape',
			});

			circle.animate((ratio) => {
				const tmpPoint = shape.getPoint(ratio);
				return {
					x: tmpPoint.x,
					y: tmpPoint.y,
				};
				},
			{
			repeat: true, // Whether executes the animation repeatly
			duration: 3000, // the duration for executing once
		});
	},
},
		'line', // extend the built-in edge 'cubic' line | cubic | polyline | quadratic | loop
		);

		const data = {
		nodes: [
			{
				type: 'round',
				x: -100,
				y: 190,
				size: 70,
				label: fittingString('Tag1.0.1\n Tag1.0.2 \n Tag...', 200, globalFontSize),
				id: 'nodeTagList',
				labelCfg: {
					position: '',
				},
				anchorPoints: [
					[0, 0.5],
					[0.5, 0],
				],
			},
			{
				x: -100,
				y: 100,
				label: fittingString('Tag', 80, globalFontSize),
				id: 'nodeTagAll',
				labelCfg: {
					position: '',
				},
				anchorPoints: [
					[0.5, 0.5],
					[1, 0.5],
				],
			},
			{
				x: 100,
				y: 100,
				label: fittingString('Master', 80, globalFontSize),
				id: 'nodeMaster',
				labelCfg: {
					position: '',
				},
				anchorPoints: [
					[0.5, 0.5],
					[0.5, 0]
				],
			},
			{
				x: 100,
				y: 200,
				label: fittingString('HotFix', 80, globalFontSize),
				id: 'nodeHotFix',
				labelCfg: {
					position: '',
				},
				anchorPoints: [
					[0.5, 0],
					[1, 0.5],
				],
			},
			{
				x: 300,
				y: 100,
				label: 'Develop（n）',
				id: 'nodeDev1',
				labelCfg: {
					position: '',
				},
				anchorPoints: [
					[0, 0.5],
					[0.5, 0.5],
					[1, 0.5],
				],
			},
			{
				x: 500,
				y: 100,
				label: 'Feature（n）',
				id: 'nodeFeature',
				labelCfg: {
					position: '',
				},
				anchorPoints: [
					[0.5, 0.5],
					[0, 0.5],
				],
			},
			{
				x: 500,
				y: 190,
				type: 'round',
				label: 'Feature1\nFeature2\nFeature...',
				size: 70,
				id: 'nodeFeatureList',
				labelCfg: {
					position: '',
				},
				anchorPoints: [
					[0.5, 0],
					[0, 0.5],
				],
			},
			{
				x: 300,
				y: -100,
				label: 'Release',
				id: 'nodeRelease',
				labelCfg: {
					position: '',
				},
				anchorPoints: [
					[.5, 1],
					// [1, 0],
				],
			},
		],
		edges: [
			{
				source: 'nodeMaster',
				target: 'nodeDev1',
				label: fittingString('创建分支(开发版本)', 110, globalFontSize),
				labelCfg: {
					refY: 20,
					refX: 24,
				},
				style: {
					endArrow: true,
				},
			},
			{
				source: 'nodeMaster',
				target: 'nodeTagAll',
				label: fittingString('标记Tag', 110, globalFontSize),
				labelCfg: {
					refY: 20,
					refX: 20
				},
				style: {
					endArrow: true,
				},
			},
			{
				source: 'nodeMaster',
				target: 'nodeHotFix',
				label: fittingString('创建分支(生产修复)', 110, globalFontSize),
				labelCfg: {
					refY: 0
				},
				style: {
					endArrow: true,
				},
			},
			{
				source: 'nodeDev1',
				target: 'nodeRelease',
				label: fittingString('待部署生产版本/测试版本', 110, globalFontSize),
				labelCfg: {
					refY: 0
				},
				style: {
					endArrow: true,
				},
			},
			{
				source: 'nodeRelease',
				target: 'nodeMaster',
				label: fittingString('Merge稳定版本', 110, globalFontSize),
				labelCfg: {
					refY: 0
				},
				style: {
					endArrow: true,
				},
			},
			{
				source: 'nodeDev1',
				target: 'nodeFeature',
				label: fittingString('创建分支(功能开发)', 110, globalFontSize),
				labelCfg: {
					refY: 20
				},
				style: {
					endArrow: true,
				},
			},
			{
				source: 'nodeTagAll',
				target: 'nodeTagList',
				label: '',
				labelCfg: {
					refY: 20
				},
				style: {
					endArrow: true,
					stroke: '#999',
					width: '20'
				},
			},
			{
				source: 'nodeFeature',
				target: 'nodeFeatureList',
				label: '',
				labelCfg: {
					refY: 20
				},
				style: {
					endArrow: true,
					stroke: '#999',
					width: '20'
				},
			},
			
			],
		};

		const width = document.getElementById('container').scrollWidth || 1000;
		const height = document.getElementById('container').scrollHeight || 480;
		const graph = new G6.Graph({
			container: 'container',
			width,
			height,
			// translate the graph to align the canvas's center, support by v3.5.1
			modes: {
				/* behavior */
				default: ['drag-node'],
			},
			fitCenter: true,
			defaultNode: {
				type: 'rect',
				style: {
					fill: '#DEE9FF',
					stroke: '#5B8FF9',
				},
			},
			defaultEdge: {
				type: 'circle-running',
				// lineWidth: 100,
				color: '#F6BD16',
			},
		});
		graph.data(data);
		graph.render();
		
		graph.on('edge:mouseenter', (evt) => {
			const { item } = evt;
			graph.setItemState(item, 'active', true);
		});

		graph.on('edge:mouseleave', (evt) => {
			const { item } = evt;
			graph.setItemState(item, 'active', false);
		});

		graph.on('edge:click', (evt) => {
			const { item } = evt;
			graph.setItemState(item, 'selected', true);
		});
		graph.on('canvas:click', (evt) => {
		graph.getEdges().forEach((edge) => {
			graph.clearItemStates(edge);
		});
		});
			})
		
		}
}

</script>

> 分支说明

    hotFix: 生产紧急修复分支(<一般唯一> 修复合并master，无问题删除)
    develop: 开发分支(<多个> 同项目多需求并行开发 | 复用代码作用于不同项目)
    master: 开发稳定分支(<唯一> 不得作用于开发 | 项目周期结束标记Tag备份节点)
    feature: 功能分支/团队开发分支(<多个> 与develop对应 | 合并develop无问题删除)
    release: 待部署生产/测试分支(<多个> 与develop对应 | 版本发布后合并master，无问题删除)

> 项目 Git 使用规范

    新项目规范：需创建Group，整合前后端project
    代码更新：团队开发不得 > 1天，个人开发不得 > 2天
