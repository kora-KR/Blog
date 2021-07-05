/**
 * @name: portGetFreeApi
 * @author: kora
 * @Date: 2021-07-05 14:08:01
 * @params 定制化请求参数 [参考地址](https://tongji.baidu.com/open/api/more?p=tongjiapi_getSiteList.tpl )
 * 		   1. access_token：唯一性 [参考地址](https://blog.csdn.net/SwordKer2016/article/details/108648191)
 *         2. site_id：登录百度统计平台链接携带参数
 * 
 *  [传送门](https://www.juhe.cn/docs)
 **/

export function portGetFreeApiEntry(params = {}) {
	return new Promise((resolve, reject) => {
		portGetFreeApi(params).then((res) => {
			resolve(res);
		}).catch((e) => { });
	});
}

async function portGetFreeApi(params) {
	var info = {},
		data = {
			time: '1418816972',
			key: 'fd88f91809d4419ccdad8f2eefd53fa4',
			...params
		}
	await $.ajax({
		type: 'get',
		dataType: 'jsonp',
		url: 'http://v.juhe.cn/joke/content/list.php',
		data,
		success: (res) => {
			console.log(data, '开源Api请求数据')
			console.log(res, '开源Api')
		},
		error: (err) => {
			console.log(data, '开源Api请求数据')
			console.log('error======', err);
			err.then(res => {
				console.log(res, 123)
			})
		},
	}).catch((e) => { });
	return info
}