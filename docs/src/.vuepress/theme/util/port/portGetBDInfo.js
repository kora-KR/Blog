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

// new refresh_token: 122.4eb926fcdaefab7c5bcf91eb382bbaa3.YQoKB4U4_lNZETYwpyYR9xUTyDGWZL4-76b5hUp.6IY37w
async function getBDToken(refresh_token = '122.f98e04d2393a94f7b13d77a8eaf1a791.Y5S5yZqZZHxki-vBgqRQsM0GByxMRbtMAL7JIbS.botmSA') {
	var infoToken = {}
	await $.ajax({
		type: 'get',
		dataType: 'jsonp',
		url: 'http://openapi.baidu.com/oauth/2.0/token',
		data: {
			grant_type: 'refresh_token',
			refresh_token,
			client_id: 'L5E8CVEGzoBcPoTComFzucxT',
			client_secret: 'gOFXND4AsdBrPgXgXdfNdEo1tYp8UC1X'
		},
		success: (res) => {
			console.log(res, 'new token')
			infoToken = res.result
		},
		error: (err) => {
			console.log('error======', err);
		},
	});
	return infoToken
}

async function getBDInfo(params) {
	var info = {};
	await $.ajax({
		type: 'get',
		dataType: 'jsonp',
		url: 'https://openapi.baidu.com/rest/2.0/tongji/report/getData',
		data: {
			// access_token: '121.a2224353bfbcba03a9de261b9b476fec.YmC9f_9vhgwGH0jByJ-e9wxDgDye6c96wxDyTt8.ql9AWQ', //身份验证
			access_token: '121.0c08a90206998a89dae2acc9164c21a9.YnUC41y6zmG4XWDtoy-fx-FICtfPMoVauLyLsDO.Gq2ZsQ',
			site_id: '16885988', //网站id
			method: 'source/all/a', //需要的报告范围
			start_date: '20181222', //开始时间
			end_date: '20221231', //结束时间
			metrics: '', //报告所包含的数据类，pv_count=浏览量
			...params
		},
		success: (res) => {
			if (res.error_code) {
				if (params && params.metrics == 'pv_count') {
					info = { "fields": ["simple_district_title", "pv_count", "ratio"], "items": [[["山东"], ["海南"], ["山西"], ["甘肃"], ["江苏"], ["广西"], ["宁夏"], ["云南"], ["河南"], ["四川"], ["浙江"], ["内蒙古"], ["青海"], ["吉林"], ["新疆"], ["湖北"], ["辽宁"], ["福建"], ["北京"], ["天津"], ["河北"], ["安徽"], ["上海"], ["湖南"], ["陕西"], ["重庆"], ["江西"], ["广东"], ["台湾"], ["黑龙江"], ["西藏"]], [[5200, 66.3], [179, 2.28], [178, 2.27], [170, 2.17], [162, 2.07], [157, 2], [154, 1.96], [146, 1.86], [120, 1.53], [118, 1.5], [92, 1.17], [92, 1.17], [90, 1.15], [81, 1.03], [81, 1.03], [80, 1.02], [78, 0.99], [77, 0.98], [76, 0.97], [72, 0.92], [71, 0.91], [65, 0.83], [63, 0.8], [57, 0.73], [50, 0.64], [44, 0.56], [37, 0.47], [36, 0.46], [8, 0.1], [7, 0.09], [2, 0.03]], [], []] }
				} else {
					info = { "timeSpan": ["2018/12/22 - 2022/02/22"], "fields": ["source_type_title", "pv_count", "visitor_count", "ip_count", "bounce_ratio", "avg_visit_time"], "total": 2, "sum": [[7865, 2949, 2521, 92.52, 162], []], "pageSum": [[7865, 2949, 2521, 92.52, 162], [], []], "items": [[[{ "name": "直接访问", "source": "through" }], [{ "name": "外部链接", "source": "link" }]], [[7844, 2943, 2516, 92.7, 162], [21, 6, 5, 0, 104]], [], []] }
				}
				return
			}
			info = res.result
		},
		error: (err) => {
			console.log('error======', err);
		},
	});
	return info
}