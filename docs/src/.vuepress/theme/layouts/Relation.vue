<template>
    <!-- <Common class="timeline-wrapper" :sidebar="false"> -->
    <section>
        <!-- 核心 - 微信相关信息 -->
        <main class="main">
            <aside>
                <img class="focus_img" src="../images/admin/wx.png" alt="" />
                <p v-for="(item, index) of relationList" :key="item.id" @click="handleClickMore(index)" :class="[{ focus_p: index == moreI }]">{{ item.key }}</p>
                <div>查看更多</div>
            </aside>
            <aside :class="[{ hover_aside: RelationMoreShow }]">
                <section>
                    <h2>{{ relationList[moreI && 0].val }}</h2>
                    <main>
                        <img :src="require('../images/admin/relation' + (moreI >= 0 ? moreI : 0) + '.jpg')" alt="" />
                        <img class="small" v-if="moreI == 1" src="../images/admin/YAF.jpg" alt="" />
                    </main>
                </section>
            </aside>
        </main>
    </section>
    <!-- </Common> -->
</template>

<script>
import { defineComponent, getCurrentInstance, reactive, onMounted } from 'vue-demi';
import Common from '@theme/components/Common';
import { ModuleTransition } from '@vuepress-reco/core/lib/components';
import moduleTransitonMixin from '@theme/mixins/moduleTransiton';
// import '@theme/helpers/canvasPopular2.js';
// import '@theme/helpers/canvasPopular.js';

export default defineComponent({
    name: 'TimeLine',
    mixins: [moduleTransitonMixin],
    components: { Common, ModuleTransition },
    setup(props, ctx) {
        const state = reactive({});
        const moreI = -1;
        const RelationMoreShow = false;
        const relationList = [
            { key: '视频号', val: '青岛日记' },
            { key: '小程序', val: '青岛天气' },
            { key: '公众号', val: '程序猿KR' },
            { key: '商店', val: '赶海园' },
            { key: '微信', val: 'LUCKKORA' },
        ];

        const instance = getCurrentInstance().proxy;

        const go = (url) => {
            instance.$router.push({ path: url });
        };

        const dateFormat = (date, type) => {
            function renderTime(date) {
                const dateee = new Date(date).toJSON();
                return new Date(+new Date(dateee) + 8 * 3600 * 1000)
                    .toISOString()
                    .replace(/T/g, ' ')
                    .replace(/\.[\d]{3}Z/, '')
                    .replace(/-/g, '/');
            }
            date = renderTime(date);
            const dateObj = new Date(date);
            const mon = dateObj.getMonth() + 1;
            const day = dateObj.getDate();
            return `${mon}-${day}`;
        };
        onMounted(() => {
            import('@theme/helpers/canvasPopular2.js').then((res) => {
                import('@theme/helpers/canvasPopular.js');
            });
        });

        return { go, moreI, dateFormat, relationList, RelationMoreShow };
    },
    methods: {
        handleClickMore(i) {
            if (i == '4') {
                this.RelationMoreShow = false;
                this.moreI = -1;
                return;
            }
            this.moreI = i;
            this.RelationMoreShow = true;
        },
    },
});
</script>

<style src="../styles/theme.styl" lang="stylus"></style>
<style lang="stylus" scoped>
@require '../styles/wrapper.styl'
X = -60px
Y = 30
.main{position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); height: 50vh; display: flex; justify-content: center; align-items: flex-start;
	&:hover{
		.focus_img{transform: scale(1.02)}
		p{right: X !important}
	}
	aside{position: relative; height: inherit; position: relative;cursor: pointer; transition: all .6s;

		&:nth-of-type(1){padding: 10px 10px 30px; background: #eee; width: 280px;
			>img{width inherit; height: inherit; transition: all .3s linear; border-radius: 5px;}
			p{position: absolute; right: 0; top: 0; z-index: -1; transition: all .6s; text-align: left; width: 50px; transition: all .3s; line-height: 2; box-sizing: border-box;
				&:after{content: ''; display: block; position: absolute; width: 0; height: 2px; background: #647EA0; transition: all .3s}
				&:hover{color: #647EA0;
					&:after{width: 50px}
				}
				&:nth-of-type(1){top: Y*0px}
				&:nth-of-type(2){top: Y*1px}
				&:nth-of-type(3){top: Y*2px}
				&:nth-of-type(4){top: Y*3px}
				&:nth-of-type(5){top: Y*4px}
			}
		}
		&:nth-of-type(2){ margin-left: -300px; z-index: -1; width: 300px; height: calc(50vh + 40px); box-shadow: 0 1px 8px  rgba(0, 0, 0, .3); border-radius: 8px; overflow: hidden;
			section{
				h2{margin: 0!important; padding: 10px ; font-size: 14px; text-align: center; border-bottom: 2px solid #eee}
				main{height: calc(50vh + 3px); overflow-y: scroll; overflow-x: hidden;
					img{display: block; margin: 0 auto; width: 300px; height auto}
				}
			}
			&.hover_aside{margin-left: 150px}
		}
		div{line-height: 20px; text-align: center; letter-spacing: 2px; font-size: 12px; color: #647EA0}
	}
	.focus_p{color: #333; border-bottom: 2px solid #333}
	.small{margin: 10px auto!important; width: 100px!important}
}
</style>
