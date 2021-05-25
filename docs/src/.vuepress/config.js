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
			{ text: '留言板', link: '/valine/', icon: 'reco-date' },
			{ text: '关于我', link: '/about/', icon: 'reco-account' }
		],
		sidebar: {
			'/guide/': [
				{
					title: 'Guide',
					collapsable: false,
					children: [
						'',
						'using-vue',
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
				location: 3,     // 在导航栏菜单中所占的位置，默认3
				text: '标签'      // 默认文案 “标签”
			},
			socialLinks: [     // 信息栏展示社交信息
				{ icon: 'reco-github', color: '#000000', link: 'https://github.com/kora-KR' },
				{ icon: 'reco-npm', color: '#C61E0B', link: 'https://www.npmjs.com/~korains' },
				{ icon: 'reco-mayun', color: '#C81F0D', link: 'https://gitee.com/koras' },
				{ icon: 'reco-zhihu', color: '#1087EB', link: 'https://www.zhihu.com/people/keycode' },
				{ icon: 'reco-wechat', color: '#81C362', link: '/relation' },
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
				logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
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
					mid: "2463013834",
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
				clean: true
			}
		],
		// 动态标题
		[
			"dynamic-title",
			{
				showIcon: "/images/KR.png",
				showText: "Kora",
				hideIcon: "/images/KR.png",
				hideText: "(●—●)不要走啊，再看看！",
				recoverTime: 2000
			}
		],
		// 分页器
		[
			'@vuepress-reco/vuepress-plugin-pagation',
			{
			}
		],
		// 评论
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