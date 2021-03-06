import Vue from 'vue';
import BotUI from '../node_modules/botui/build/botui.js';

import '../node_modules/botui/build/botui.min.css';
import '../node_modules/botui/build/botui-theme-default.css';

export default function initBotApp() {
	let botui = BotUI('kora-botui', { vue: Vue })
	botui.message.add({ delay: 800, content: "Hi, thereð" })
		.then(function () {
			botui.message.add({ delay: 1100, content: "å¾é«å´è®¤è¯ä½ " })
				.then(function () {
					// ðððð¤£ð¤ð¤©
					botui.message.add({ delay: 1100, content: "äººæ½®æ±¹æ¶ï¼ææ©ç¸éð" })
						.then(() => {
							botui.message.add({ delay: 1100, content: "ææ¯ä½ä¸¢å¤±äºäºè®¸å°å¹´æçéå¹´ð¦" })
						})
						.then(function () {
							botui.action.button({ delay: 1600, action: [{ text: "ç¶åå¢ï¼ ð", value: "sure" }, { text: "å°åºè¯ï¼è®©æççä½ ï¼ ð", value: "skip" }] })
								.then(function (a) { "sure" == a.value && sure(); "skip" == a.value && end() })
						})
				})
		});
	var sure = function () {
		botui.message.add({ delay: 600, content: "ð" })
			.then(function () { secondpart() })
	},
		end = function () {
			botui.message.add({ delay: 600, content: "![...](https://pic3.zhimg.com/v2-9c4646674dec74d22c477ed8aa671a80_xl.jpg)" }).then(() => {
				botui.action.button({ delay: 1600, action: [{ text: "...å¶ä»å¢ï¼", value: "sure" }] })
					.then(function (a) { "sure" == a.value && secondpart() })
			})
		},
		secondpart = function () {
			botui.message.add({ delay: 1500, content: "æ¯ä¸äºçå°åå±±å­¦é¢ï¼è½¯ä»¶å·¥ç¨å¤§åä¸­çç¨åºç¿" })
				.then(function () {
					botui.message.add({ delay: 1200, content: "å°æ²ä»£ç è§ä¸ºä¹è¶£" })
						.then(() => {
							botui.action.button({ delay: 1600, action: [{ text: "ä½ å¯¹æªæ¥æä»ä¹è®¡åï¼", value: "feature" }, { text: "ä½ æä»ä¹è½åï¼", value: "ability" }] })
								.then(function (a) { "feature" == a.value && feature(); "ability" == a.value && ability() })
						})
				})
		},
		feature = function () {
			botui.message.add({ delay: 1600, content: "æä¸ºå¨æ å·¥ç¨å¸ï¼è¿ååä¸ºï¼ææºä¼å¨è¿ä¸ççä¸äºçè¿¹" })
				.then(() => {
					next()
				})
		},
		ability = function () {
			botui.message.add({ delay: 1600, content: "ä¸ªäººä¸»æ»VUEä¸æ··åå¼åï¼ä¸»è¦ä»äºä¸éèäºèç½ï¼å®ç°ç§æãèææ¶ãå¹³å°ãææ½ä»£ç çæç­å°è£" })
				.then(() => {
					next()
				})
		},
		next = function () {
			botui.action.button({ delay: 1600, action: [{ text: "ä½ æä»ä¹ç±å¥½ï¼ ð", value: "sure" }] })
				.then(function (a) { "sure" == a.value && movement() })
		},
		movement = function () {
			botui.message.add({ delay: 1600, content: "ð¸ - ð±âððð ð¬ð³ - ðªðð¸ð" })
				.then(() => {
					endPart()
				})
		},
		endPart = function () {
			botui.message.add({ delay: 1600, content: "äººæ½®æ±¹æ¶ï¼å¸æå¨è«è«ä¸­ä¸ä½ ç¸éð«" })
		}
}


