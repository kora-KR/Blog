/* eslint-disable no-proto */
import postMixin from '@theme/mixins/posts'
import localMixin from '@theme/mixins/locales'
import { addLinkToHead, addScriptToHead } from '@theme/helpers/utils'
import { registerCodeThemeCss, interceptRouterError, fixRouterError404 } from '@theme/helpers/other'
import { install } from 'vue-demi'
// import bubblesEffect from '@theme/helpers/canvasBubble'

export default ({
	Vue,
	siteData,
	isServer,
	router
}) => {
	install(Vue)
	Vue.mixin(postMixin)
	Vue.mixin(localMixin)
	// kora - 打包报错 node无法解析Dom（window | document）
	Vue.mixin({
		mounted() {
			import('@theme/helpers/canvasBubble').then((res) => {
				Vue.component(res.default.name, res.default);
			})
		}
	})
	if (!isServer) {
		addLinkToHead('//at.alicdn.com/t/font_1030519_2ciwdtb4x65.css')
		addScriptToHead('//kit.fontawesome.com/51b01de608.js')
		registerCodeThemeCss(siteData.themeConfig.codeTheme)
	}

	interceptRouterError(router)
	fixRouterError404(router)
}
