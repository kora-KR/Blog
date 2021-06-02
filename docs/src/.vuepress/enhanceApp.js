/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
// import bubblesEffect from "./public/js/CanvasBubble";

export default ({
	Vue, // the version of Vue being used in the VuePress app
	options, // the options for the root Vue instance
	router, // the router instance for the app
	siteData // site metadata
}) => {
	// kora - 外部插件引用打包报错问题
	Vue.mixin({
		mounted() {
			import('@hellowuxin/mindmap').then((res) => {
				Vue.component('mindmap', res.default);
			})
		}
	})
	// ...apply enhancements for the site.
}
