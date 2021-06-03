import Vue from 'vue';
import BotUI from '../node_modules/botui/build/botui.js';

import '../node_modules/botui/build/botui.min.css';
import '../node_modules/botui/build/botui-theme-default.css';

export default function initBotApp() {
	let botui = BotUI('kora-botui', { vue: Vue })
	botui.message.add({ delay: 800, content: "Hi, there👋" })
		.then(function () {
			botui.message.add({ delay: 1100, content: "很高兴认识你" })
				.then(function () {
					// 🙄😂😊🤣🤔🤩
					botui.message.add({ delay: 1100, content: "人潮汹涌，感恩相遇😆" })
						.then(() => {
							botui.message.add({ delay: 1100, content: "我是位丢失了些许少年感的青年👦" })
						})
						.then(function () {
							botui.action.button({ delay: 1600, action: [{ text: "然后呢？ 😃", value: "sure" }, { text: "少废话，让我看看你！ 🙄", value: "skip" }] })
								.then(function (a) { "sure" == a.value && sure(); "skip" == a.value && end() })
						})
				})
		});
	var sure = function () {
		botui.message.add({ delay: 600, content: "😘" })
			.then(function () { secondpart() })
	},
		end = function () {
			botui.message.add({ delay: 600, content: "![...](https://pic3.zhimg.com/v2-9c4646674dec74d22c477ed8aa671a80_xl.jpg)" }).then(() => {
				botui.action.button({ delay: 1600, action: [{ text: "...其他呢？", value: "sure" }] })
					.then(function (a) { "sure" == a.value && secondpart() })
			})
		},
		secondpart = function () {
			botui.message.add({ delay: 1500, content: "毕业于烟台南山学院，软件工程大军中的程序猿" })
				.then(function () {
					botui.message.add({ delay: 1200, content: "将敲代码视为乐趣" })
						.then(() => {
							botui.action.button({ delay: 1600, action: [{ text: "你对未来有什么计划？", value: "feature" }, { text: "你有什么能力？", value: "ability" }] })
								.then(function (a) { "feature" == a.value && feature(); "ability" == a.value && ability() })
						})
				})
		},
		feature = function () {
			botui.message.add({ delay: 1600, content: "成为全栈工程师，进军华为，有机会在这世界留下些痕迹" })
				.then(() => {
					next()
				})
		},
		ability = function () {
			botui.message.add({ delay: 1600, content: "个人主攻VUE与混合开发，主要从事与金融互联网，实现私服、脚手架、平台、拖拽代码生成等封装" })
				.then(() => {
					next()
				})
		},
		next = function () {
			botui.action.button({ delay: 1600, action: [{ text: "你有什么爱好？ 🙄", value: "sure" }] })
				.then(function (a) { "sure" == a.value && movement() })
		},
		movement = function () {
			botui.message.add({ delay: 1600, content: "🎸 - 🐱‍👓🐟🐠🐬🐳 - 🪁🏓🏸🏀" })
				.then(() => {
					endPart()
				})
		},
		endPart = function () {
			botui.message.add({ delay: 1600, content: "人潮汹涌，希望在茫茫中与你相遇👫" })
		}
}


