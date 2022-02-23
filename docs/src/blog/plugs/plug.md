---
title: 博客开发相关
des: blogIt-plug
date: 2022-02-23
author: Kora
tags:
    - plug
group: blog
---

```js
plugins: [
		// ['@vuepress/back-to-top'],
		// 名人警句
		["vuepress-plugin-boxx"],
		// 流程图
		'flowchart',
		'@vuepress/plugin-back-to-top',
		'@vuepress/plugin-medium-zoom',
		// 音乐播放器
		[
			'meting', {
				meting: {
					// 网易
					server: "netease",
					// 读取歌单列表
					type: "playlist",
					mid: "6858661176",
				},
				// 不配置该项的话不会出现全局播放器
				aplayer: {
					// 吸底模式
					fixed: true,
					mini: true,
					// 自动播放
					autoplay: true,
					// 歌曲栏折叠
					listFolded: true,
					// 颜色
					theme: '#f9bcdd',
					// 播放顺序为随机
					order: 'random',
					// 初始音量
					volume: 0.1,
					// 关闭歌词显示
					lrcType: 0
				},
				mobile: {
					// 手机端去掉cover图
					cover: false,
				}
			}
		],
		// 看板娘
		[
			'@vuepress-reco/vuepress-plugin-kan-ban-niang',
			{
				theme: ['whiteCat', 'blackCat'],
				messages: {
					theme: '黑猫白猫能抓老鼠的就是好猫'
				},
				info: '[看板娘]传送门',
				clean: false,
				modelStyle: { right: '30px', bottom: '-50px', opacity: '1' }
			}
		],
		// 动态标题
		[
			"dynamic-title",
			{
				showIcon: "/images/KR.png",
				showText: "RUN",
				hideIcon: "/images/KR.png",
				hideText: "路遙知馬力，日久見人心",
				recoverTime: 2000
			}
		],
		// 分页器
		[
			'@vuepress-reco/vuepress-plugin-pagation',
			{
			}
		],
		// 评论 全局引入 - 禁止所有页面展示，Valine.vue单独引用
		[
			'vuepress-plugin-comment',
			{
				choosen: 'valine',
				// options选项中的所有参数，会传给Valine的配置
				options: {
					el: '#valine-vuepress-comment',
					appId: '6RykrHgEGbXafFXpBiD1XzDG-gzGzoHsz',
					appKey: 'uyx1Too5wqE4T0DVRn0idiMe'
				}
			}
		]
	]
}
```