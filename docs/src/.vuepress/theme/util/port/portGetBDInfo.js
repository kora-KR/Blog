/**
 * @name: portGetBDInfo
 * @author: kora
 * @Date: 2021-06-21 15:25:01
 * @params 定制化请求参数 [参考地址](https://tongji.baidu.com/open/api/more?p=tongjiapi_getSiteList.tpl )
 * 		   1. access_token：唯一性 [参考地址](https://blog.csdn.net/SwordKer2016/article/details/108648191)
 *         2. site_id：登录百度统计平台链接携带参数
 **/

export function getBDInfoEntry(params = {}) {
	return new Promise((resolve, reject) => {
		getBDInfo(params).then((res) => {
			resolve(res);
		});
	});
}

async function getBDInfo(params) {
	var info = {};
	await $.ajax({
		type: 'get',
		dataType: 'jsonp',
		url: 'https://openapi.baidu.com/rest/2.0/tongji/report/getData',
		data: {
			access_token: '121.35dc2c50d908afc3d42433ee1f8cda3f.YDtmZ0EysEB_zeCY-gbpEQnkPmSW-5uZjyKwfjp.GhUEUQ', //身份验证
			site_id: '16885988', //网站id
			method: 'source/all/a', //需要的报告范围
			start_date: '20181222', //开始时间
			end_date: '20221231', //结束时间
			metrics: '', //报告所包含的数据类，pv_count=浏览量
			...params
		},
		success: (res) => {
			info = res.result
		},
		error: (err) => {
			console.log('error======', err);
		},
	});
	return info
}