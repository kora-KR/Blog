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
					botui.message.add({ delay: 1100, content: "我一个无聊的男孩子~" })
						.then(() => {
							botui.message.add({ delay: 1100, content: "🙄...好像丢失了些少年感" })
						})
						.then(function () {
							botui.action.button({ delay: 1600, action: [{ text: "然后呢？ 😃", value: "sure" }, { text: "少废话！ 🙄", value: "skip" }] })
								.then(function (a) { "sure" == a.value && sure(); "skip" == a.value && end() })
						})
				})
		});
	var sure = function () {
		botui.message.add({ delay: 600, content: "😘" })
			.then(function () { secondpart() })
	},
		end = function () { botui.message.add({ delay: 600, content: "![...](https://view.moezx.cc/images/2018/05/06/a1c4cd0452528b572af37952489372b6.md.jpg)" }) },
		secondpart = function () {
			botui.message.add({ delay: 1500, content: "就读于烟台南山学院，所属软件工程的程序猿" })
				.then(function () {
					botui.message.add({ delay: 1200, content: "将敲代码看成一种快乐" })
						.then(function () {
							botui.message.add({ delay: 1500, content: "个人方向，全栈小白，进军华为" })
								.then(function () {
									botui.message.add({ delay: 1800, content: "个人实现私服、脚手架、拖拽工具等封装" })
										.then(function () {
											botui.message.add({ delay: 1800, content: "主攻VUE、uni、linux" })
												.then(function () {
													botui.action.button({ delay: 1100, action: [{ text: "还有什么想了解的吗？", value: "why-mashiro" }] })
														// 可以增加爱好、城市、运动等选择项
														.then(() => {
															botui.action.button({ delay: 1600, action: [{ text: "我感觉已经很了解你了 🙄", value: "sure" }, { text: "交个朋友  😃", value: "skip" }] })
																.then(function (a) { "sure" == a.value && endPart(); "skip" == a.value && endPart() })
														})
												})
										})
								})
						})
				})
		},
		endPart = function () {
			botui.message.add({ delay: 1600, content: "人潮汹涌，希望在茫茫中与你相遇" })
		}
}


