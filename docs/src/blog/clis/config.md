---
title: 博客开发相关
des: blogIt-config
date: 2022-02-23
author: Kora
tags:
    - 路由配置
group: blog
---

```js
const { description } = require('../../package')

module.exports = {
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#title
	 */
	title: 'Kora',
	logo: 'https://kora-kr.github.io/images/KR.png',
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#description
	 */
	description: description,

	/**
	 * Extra tags to be injected to the page HTML `<head>`
	 *
	 * ref：https://v1.vuepress.vuejs.org/config/#head
	 */
	head: [
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		// ['link', { rel: 'icon', href: '/vuepress/favicon.ico' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
		// 引入jquery
		["script", {
			"language": "javascript",
			"type": "text/javascript",
			"src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
		}],
		// 引入鼠标点击脚本
		// ["script", {
		// 	"language": "javascript",
		// 	"type": "text/javascript",
		// 	"src": "/js/MouseClickEffect.js"
		// }],
		// canvas - 冒泡
		["script", {
			"language": "javascript",
			"type": "text/javascript",
			"src": "/js/CanvasBubble.js"
		}],
		[
			"script",
			{},
			`var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "https://hm.baidu.com/hm.js?72c14dfe42bcde18b69411639c9306e3";
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();`
		]
	],

	/**
	 * Theme configuration, here is the default theme configuration for VuePress.
	 *
	 * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
	 */
	locales: {
		'/': {
			lang: 'zh-CN'
		},
		// '/en/': {
		// 	lang: 'en-US'
		// }
	},
	// theme: 'reco', // 主体本地化：https://vuepress-theme-reco.recoluan.com/views/other/reco-optimization.html
	themeConfig: {
		// huawei: true,
		// record: 'ICP 备案文案',
		// recordLink: 'ICP 备案指向链接',
		// cyberSecurityRecord: '公安部备案文案',
		// cyberSecurityLink: '公安部备案指向链接',
		// // 项目开始时间，只填写年份
		// startYear: '2017',
		type: 'blog',
		subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
		authorAvatar: 'https://pic3.zhimg.com/v2-9c4646674dec74d22c477ed8aa671a80_xl.jpg',
		logo: 'https://pic3.zhimg.com/v2-9c4646674dec74d22c477ed8aa671a80_xl.jpg',
		author: 'Kora',
		repo: '',
		editLinks: false,
		docsDir: '',
		editLinkText: '',
		lastUpdated: false,
		nav: [
			// {
			// 	text: 'Guide',
			// 	link: '/guide/',
			// },
			// {
			// 	text: 'Config',
			// 	link: '/config/'
			// },
			{ text: '时间轴', link: '/timeline/', icon: 'reco-date' },
			{ text: '留言板', link: '/valine/', icon: 'reco-suggestion' },
			// {
			// 	text: '开源API', icon: 'fa - briefcase', items: [
			// 		{ text: '聚合数据', link: 'https://www.juhe.cn/docs', icon: 'fa-spa' },
			// 	]
			// },
			{
				text: '百宝箱', icon: 'fa-briefcase', items: [
					{ text: '在线拖拽', link: 'http://test.hhxinfo.com/drag/#/', icon: 'fa-spa' },
					// { text: '开源Api', link: '/freeApi/', icon: 'reco-api' },
					{ text: '开源Api', link: 'https://www.juhe.cn/', icon: 'reco-api' },
					{ text: '文件转换', link: 'http://coolaf.com/tool/md', icon: 'reco-document' },
					{ text: '知乎转换', link: 'http://markdown.liangtengyu.com:9999/#/', icon: 'reco-zhihu' },
					{ text: '字体检测', link: 'http://fonts.safe.360.cn/', icon: 'reco-facebook' },
				]
			},
			{
				text: '关于我', icon: 'reco-account', items: [
					{ text: '简  介', link: '/about/', icon: 'fa-user-circle' },
					{ text: '联系我', link: '/relation?links=1', icon: 'reco-wechat' },
					{ text: '个人简历', link: 'http://koraresume.21cloudbox.com', icon: 'reco-blog' },
				]
			}
		],
		sidebar: {
			// 多分组维护
			'/guide/': [
				{
					title: '开发规范',
					collapsable: false,
					children: [
						{
							title: '前端规范', path: '', collapsable: false,
							children: [
								{ title: 'V1.0.1', path: 'font/font1.0.1' },
								{ title: 'V1.1.1', path: 'font/font1.1.1' },
							]
						},
						{
							title: '后台规范', path: '', collapsable: false,
							children: [
								{ title: 'V1.0.1', path: 'back/back1.0.1' },
							]
						},
						{
							title: 'Git规范', path: '', collapsable: false,
							children: [
								{ title: '项目规范', path: 'git/project' },
								{ title: '框架规范', path: 'git/frame' }
							]
						},
						{
							title: '版本号规范', path: '', collapsable: false,
							children: [
								{ title: '版本规范', path: 'version/version' },
							]
						},
					]
				}
			],
			'/stylus/': [
				{
					title: '样式扩展',
					collapsable: false,
					children: [
						{
							title: 'W3C标准', path: '', collapsable: false,
							children: [
								{ title: 'css', path: 'css/css' },
							]
						},
						{
							title: '拓展语言', path: '', collapsable: false,
							children: [
								{ title: 'less', path: 'less/less' },
								{ title: 'stylus', path: 'stylus/stylus' },
								{ title: 'scss/sass', path: 'scss/scss' },
								{ title: 'windi css', path: 'windi/windi' },
							]
						}
					]
				}
			],
			'/platform/': [
				{
					title: '平台化开发',
					collapsable: false,
					children: [
						{
							title: '脚手架', path: '', collapsable: false,
							children: [
								{ title: 'CLI', path: 'cli/cli' },
							]
						},
						{
							title: '私服', path: '', collapsable: false,
							children: [
								{ title: 'privateServe', path: 'privateServe/privateServe' },
							]
						},
						{
							title: '平台', path: '', collapsable: false,
							children: [
								{ title: 'platform', path: 'platform/platform' },
							]
						},
					]
				}
			],
			'/frame/': [{
				title: '框架',
				collapsable: false,
				children: [
					{
						title: '多端开发', path: '', collapsable: false,
						children: [
							{ title: 'uniApp', path: 'uniapp/uniapp' },
						]
					},
					{
						title: '原生语言', path: '', collapsable: false,
						children: [
							{ title: 'harmony', path: 'harmonyOS/harmonyOS' }
						]
					}
				]
			}
			],
			'/blog/': [
				{
					title: 'Blog It',
					collapsable: false,
					children: [
						{
							title: '敏捷配置', path: '', collapsable: false,
							children: [
								{ title: '部署脚本', path: 'clis/sh' },
								{ title: '路由配置', path: 'clis/config' },
							]
						},
						{
							title: '官方应用插件', path: '', collapsable: false,
							children: [
								{ title: '插件', path: 'plugs/plug' },
							]
						}
					]
				}
			],
		},
		// 博客配置
		blogConfig: {
			// category: {
			// 	location: 2,     // 在导航栏菜单中所占的位置，默认2
			// 	text: 'Category' // 默认文案 “分类”
			// },
			tag: {
				location: 2,     // 在导航栏菜单中所占的位置，默认3
				text: '标签'      // 默认文案 “标签”
			},
			socialLinks: [     // 信息栏展示社交信息
				{ icon: 'reco-github', color: '#000000', link: 'https://github.com/kora-KR' },
				{ icon: 'reco-npm', color: '#C61E0B', link: 'https://www.npmjs.com/~korains' },
				{ icon: 'reco-mayun', color: '#C81F0D', link: 'https://gitee.com/koras' },
				{ icon: 'reco-zhihu', color: '#1087EB', link: 'https://www.zhihu.com/people/keycode' },
				{ icon: 'reco-wechat', color: '#81C362', link: '/relation' },
				// { icon: 'reco-mayun', color: '#81C362', link: 'koraresume.21cloudbox.com' },
				{ icon: 'reco-huawei', color: '#d81e06', link: 'https://career.huawei.com/reccampportal/portal5/index.html' }
			]
		},
		friendLink: [
			{
				title: 'vuepress',
				desc: 'A simple and beautiful vuepress Blog & Doc theme.',
				logo: "https://v1.vuepress.vuejs.org/hero.png",
				link: 'https://v1.vuepress.vuejs.org/'
			},
			{
				title: 'vuepress-theme-reco',
				desc: 'A simple and beautiful vuepress Blog & Doc theme.',
				logo: "https://i.loli.net/2020/01/13/TPKA1wp6s4ufSm2.png",
				link: 'https://vuepress-theme-reco.recoluan.com'
			},
			{
				title: '午后南杂',
				desc: 'Enjoy when you can, and endure when you must.',
				email: 'recoluan@qq.com',
				link: 'https://www.recoluan.com'
			},
			{
				title: '小弋の生活馆',
				desc: 'Enjoy when you can, and endure when you must.',
				email: 'recoluan@qq.com',
				logo: "https://lovelijunyi.gitee.io/img/avatar.gif",
				link: 'https://lovelijunyi.gitee.io/'
			},
			// ...
		]
	},

	/**
	 * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
	 */
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