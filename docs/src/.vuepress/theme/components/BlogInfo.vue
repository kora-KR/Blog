<template>
    <div class="blog_info">
        <div v-for="(item, index) of blogInfoList" :key="item.id">
            <p>{{ item.key }}</p>
            <p>{{ index == 1 ? $recoPosts.length + '篇' : item.val }}</p>
        </div>
        <p class="tips">- 人潮汹涌，感恩相遇 -</p>

        <div class="echarts">
            <div :style="{ height: '300px', width: '100%' }" ref="myEchart"></div>
        </div>
    </div>
</template>

<script>
import { nextTick, defineComponent, getCurrentInstance, reactive, computed, ref, onMounted } from 'vue-demi';
import { getBDInfoEntry } from '../util/port/portGetBDInfo';
import md5 from 'md5';
import { getOneColor } from '@theme/helpers/other';

const useDetail = () => {
    const instance = getCurrentInstance().proxy;
    const isPC = ref(true);

    const popupWindowStyle = reactive({
        left: 0,
        top: 0,
    });
    const adjustPosition = (dom) => {
        const { offsetWidth } = document.body;
        const { x, width } = dom.getBoundingClientRect();
        const distanceToRight = offsetWidth - (x + width);

        if (distanceToRight < 0) {
            const { offsetLeft } = dom;
            popupWindowStyle.left = offsetLeft + distanceToRight + 'px';
        }
    };

    const showDetail = (e) => {
        const currentDom = e.target;
        const popupWindowWrapper = currentDom.querySelector('.popup-window-wrapper');
        popupWindowWrapper.style.display = 'block';
        const popupWindow = currentDom.querySelector('.popup-window');
        const infoWrapper = document.querySelector('.info-wrapper');
        const { clientWidth } = currentDom;
        const { clientWidth: windowWidth, clientHeight: windowHeight } = popupWindow;

        if (isPC) {
            popupWindowStyle.left = (clientWidth - windowWidth) / 2 + 'px';
            popupWindowStyle.top = -windowHeight + 'px';

            infoWrapper.style.overflow = 'visible';

            instance.$nextTick(() => {
                adjustPosition(popupWindow);
            });
        } else {
            const getPosition = function(element) {
                const dc = document;
                const rec = element.getBoundingClientRect();
                let _x = rec.left;
                let _y = rec.top;
                _x += dc.documentElement.scrollLeft || dc.body.scrollLeft;
                _y += dc.documentElement.scrollTop || dc.body.scrollTop;
                return { left: _x, top: _y };
            };

            infoWrapper.style.overflow = 'hidden';
            const left = getPosition(currentDom).left - getPosition(infoWrapper).left;

            popupWindowStyle.left = -left + (infoWrapper.clientWidth - popupWindow.clientWidth) / 2 + 'px';
            popupWindowStyle.top = -windowHeight + 'px';
        }
    };

    const hideDetail = (e) => {
        const currentDom = e.target.querySelector('.popup-window-wrapper');
        currentDom.style.display = 'none';
    };

    onMounted(() => {
        isPC.value = !/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
        getbaiduInfoMap();
    });

    const getbaiduInfoMap = async () => {
        var params = {
            metrics: 'pv_count',
            method: 'overview/getDistrictRpt',
        };
        var x = [];
        await getBDInfoEntry(params).then((res) => {
            // res.items[0] 访问地理 | res.items[1] 访问数据
            console.log(res.items[0], res.items[1], '百度统计Map');
            var cityBrowseLine = [];
            res.items[0].forEach((item, i, arr) => {
                cityBrowseLine.push({ name: item[0], value: res.items[1][i][0], perccent: res.items[1][i][1] });
            });
            console.log(cityBrowseLine, '线上数据');
            var cityBrowse = [
                {
                    name: '南海诸岛',
                    value: 0,
                    eventTotal: 100,
                    specialImportant: 10,
                    import: 10,
                    compare: 10,
                    common: 40,
                    specail: 20,
                },
                {
                    name: '北京',
                    value: 0,
                },
                {
                    name: '天津',
                    value: 0,
                },
                {
                    name: '上海',
                    value: 0,
                },
                {
                    name: '重庆',
                    value: 0,
                },
                {
                    name: '河北',
                    value: 0,
                },
                {
                    name: '河南',
                    value: 0,
                },
                {
                    name: '云南',
                    value: 0,
                },
                {
                    name: '辽宁',
                    value: 0,
                },
                {
                    name: '黑龙江',
                    value: 0,
                },
                {
                    name: '湖南',
                    value: 0,
                },
                {
                    name: '安徽',
                    value: 0,
                },
                {
                    name: '山东',
                    value: 0,
                },
                {
                    name: '新疆',
                    value: 0,
                },
                {
                    name: '江苏',
                    value: 0,
                },
                {
                    name: '浙江',
                    value: 0,
                },
                {
                    name: '江西',
                    value: 0,
                },
                {
                    name: '湖北',
                    value: 0,
                },
                {
                    name: '广西',
                    value: 0,
                },
                {
                    name: '甘肃',
                    value: 0,
                },
                {
                    name: '山西',
                    value: 0,
                },
                {
                    name: '内蒙古',
                    value: 0,
                },
                {
                    name: '陕西',
                    value: 0,
                },
                {
                    name: '吉林',
                    value: 0,
                },
                {
                    name: '福建',
                    value: 0,
                },
                {
                    name: '贵州',
                    value: 0,
                },
                {
                    name: '广东',
                    value: 0,
                },
                {
                    name: '青海',
                    value: 0,
                },
                {
                    name: '西藏',
                    value: 0,
                },
                {
                    name: '四川',
                    value: 0,
                },
                {
                    name: '宁夏',
                    value: 0,
                },
                {
                    name: '海南',
                    value: 0,
                },
                {
                    name: '台湾',
                    value: 0,
                },
                {
                    name: '香港',
                    value: 0,
                },
                {
                    name: '澳门',
                    value: 0,
                },
            ];
            // 数组合并
            cityBrowse = [...cityBrowseLine, ...cityBrowse];
            // 数组对象去重
            let obj = {};
            cityBrowse.reduce((cur, next) => {
                obj[next.name] ? '' : (obj[next.name] = true && cur.push(next));
                return cur;
            }, []);

            import('echarts').then((res) => {
                import('echarts/map/js/china.js').then(() => {
                    let myChart = res.init(instance.$refs.myEchart);
                    myChart.setOption({
                        tooltip: {
                            triggerOn: 'mousemove', //mousemove、click
                            padding: 0,
                            borderWidth: 1,
                            borderColor: '#409eff',
                            backgroundColor: 'rgba(255,255,255,0.7)',
                            textStyle: {
                                color: '#333',
                                fontSize: '2',
                            },
                            formatter: function(e, t, n) {
                                let data = e.data;
                                //模拟数据
                                data.num = (Math.random() * 1000) | 0;

                                let context = `
               <div style='padding: 0 10px'>
                   <p><b style="font-size:15px;">${data.name}</b></p>
                   <p class="tooltip_style"><span class="tooltip_left">浏览量：</span><span class="tooltip_right">${data.value}</span></p>
               </div>
            `;
                                return context;
                            },
                        },
                        visualMap: {
                            type: 'piecewise',
                            show: true,
                            left: 2,
                            bottom: 20,
                            color: '#900',
                            outOfRange: {
                                color: ['#eee', '#333'],
                            },
                            // borderWidth: 1,
                            // borderColor: '#900',
                            // calculable: false,
                            // itemWidth: 20,
                            itemStyle: {
                                borderColor: '#900',
                                borderWidth: 1,
                            },
                            splitNumber: 6,
                            showLabel: true,
                            orient: 'horizontal',
                            pieces: [
                                {
                                    gte: 50,
                                    label: '>50',
                                    color: '#3c57ce',
                                },
                                {
                                    gte: 10,
                                    lt: 50,
                                    label: '<50',
                                    color: '#6f83db',
                                },
                                {
                                    gte: 1,
                                    lt: 10,
                                    label: '<10',
                                    color: '#9face7',
                                },
                                {
                                    lt: 1,
                                    label: '<5',
                                    color: '#bcc5ee',
                                },
                            ],
                        },
                        geo: {
                            map: 'china',
                            scaleLimit: {
                                min: 1.26,
                                max: 2,
                            },
                            zoom: 1,
                            top: 30,
                            label: {
                                normal: {
                                    show: true,
                                    fontSize: '7',
                                    color: '#333',
                                },
                            },
                            itemStyle: {
                                normal: {
                                    //shadowBlur: 50,
                                    //shadowColor: 'rgba(0, 0, 0, 0.2)',
                                    borderColor: 'rgba(0, 0, 0, 0.2)',
                                },
                                emphasis: {
                                    areaColor: '#f2d5ad',
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 0,
                                    borderWidth: 0,
                                },
                            },
                        },
                        series: [
                            {
                                name: '突发事件',
                                type: 'map',
                                geoIndex: 0,
                                data: cityBrowse,
                            },
                        ],
                    });
                });
            });
        });
        return x;
    };

    const getbaiduInfo = async () => {
        var x = [];
        await getBDInfoEntry().then((res) => {
            console.log(res, '百度统计');
            var time = Date.parse(new Date('2018-12-22')),
                rangeDateNum = parseInt((new Date().getTime() - time) / (1000 * 3600 * 24)),
                blogInfoList = [
                    { key: '运行时间', val: `${rangeDateNum}天` },
                    { key: '文章数目', val: '' },
                    { key: '访客量(UV)', val: `${res.sum[0][1]}人` },
                    { key: '浏览量(PV)', val: `${res.sum[0][0]}次` },
                    { key: '文章字数', val: '99898' },
                ];
            x = blogInfoList;
        });
        return x;
    };

    return { popupWindowStyle, showDetail, hideDetail, getbaiduInfo };
};

export default defineComponent({
    setup(props, ctx) {
        const instance = getCurrentInstance().proxy;

        const blogInfoList = ref(true);

        const { popupWindowStyle, showDetail, hideDetail, getbaiduInfo } = useDetail();
        const dataAddColor = computed(() => {
            const { friendLink = [] } = instance && instance.$themeConfig;
            return friendLink.map((item) => {
                item.color = getOneColor();
                return item;
            });
        });

        const getImgUrl = (info) => {
            const { logo = '', email = '' } = info;
            if (logo && /^http/.test(logo)) return logo;
            if (logo && !/^http/.test(logo)) return instance.$withBase(logo);
            return `//1.gravatar.com/avatar/${md5(email || '')}?s=50&amp;d=mm&amp;r=x`;
        };
        getbaiduInfo().then((res) => {
            blogInfoList.value = res;
        });

        return { blogInfoList, dataAddColor, popupWindowStyle, showDetail, hideDetail, getImgUrl };
    },
});
</script>

<style lang="stylus" scoped>
.blog_info
	div
		line-height 1
		display flex
		justify-content space-between
		p
			line-height 1
			margin 14px 0
			&:nth-of-type(2)
				font-weight 600
				letter-spacing 1px

	.tips
		text-align center
		font-size 13px
		font-weight bold
</style>
