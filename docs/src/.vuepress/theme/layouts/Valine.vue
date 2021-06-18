<template>
    <div>
        <Common class="timeline-wrapper" :sidebar="false" :hide="false">
            <div id="vcomments"></div>
        </Common>
    </div>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted, reactive } from 'vue-demi';
import Common from '@theme/components/Common';
import { ModuleTransition } from '@vuepress-reco/core/lib/components';
import moduleTransitonMixin from '@theme/mixins/moduleTransiton';
// import Valine from 'valine';

export default defineComponent({
    name: 'Valine',
    mixins: [moduleTransitonMixin],
    components: { Common, ModuleTransition },
    setup(props, ctx) {
        const state = reactive({
            Valine: '',
        });

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
            setTimeout(() => {
                import('valine').then((res) => {
                    state.Valine = res.default;
                    new state.Valine({
                        el: '#vcomments',
                        appId: '6RykrHgEGbXafFXpBiD1XzDG-gzGzoHsz',
                        appKey: 'uyx1Too5wqE4T0DVRn0idiMe',
                        placeholder: '人潮汹涌，你我本不平凡',
                        avatar: 'retro',
                        pageSize: 10,
                        visitor: true,
                        enableQQ: true,
                        tagMeta: ['博主', '小伙伴', '访客'],
                        emojiCDN: 'https://valinecdn.bili33.top/',
                        emojiMaps: {
                            bilibilitv2: 'bilibilitv/[tv_doge].png',
                            bilibilitv3: 'bilibilitv/[tv_亲亲].png',
                            bilibilitv4: 'bilibilitv/[tv_偷笑].png',
                            bilibilitv5: 'bilibilitv/[tv_再见].png',
                            bilibilitv6: 'bilibilitv/[tv_冷漠].png',
                            bilibilitv7: 'bilibilitv/[tv_发怒].png',
                            bilibilitv8: 'bilibilitv/[tv_发财].png',
                            bilibilitv9: 'bilibilitv/[tv_可爱].png',
                            bilibilitv10: 'bilibilitv/[tv_吐血].png',
                            bilibilitv11: 'bilibilitv/[tv_呆].png',
                            bilibilitv12: 'bilibilitv/[tv_呕吐].png',
                            bilibilitv13: 'bilibilitv/[tv_困].png',
                            bilibilitv14: 'bilibilitv/[tv_坏笑].png',
                            bilibilitv15: 'bilibilitv/[tv_大佬].png',
                            bilibilitv16: 'bilibilitv/[tv_大哭].png',
                            bilibilitv17: 'bilibilitv/[tv_委屈].png',
                            bilibilitv18: 'bilibilitv/[tv_害羞].png',
                            bilibilitv19: 'bilibilitv/[tv_尴尬].png',
                            bilibilitv20: 'bilibilitv/[tv_微笑].png',
                            bilibilitv21: 'bilibilitv/[tv_思考].png',
                            bilibilitv22: 'bilibilitv/[tv_惊吓].png',
                            bilibilitv23: 'bilibilitv/[tv_打脸].png',
                            bilibilitv24: 'bilibilitv/[tv_抓狂].png',
                            bilibilitv25: 'bilibilitv/[tv_抠鼻].png',
                            bilibilitv26: 'bilibilitv/[tv_斜眼笑].png',
                            bilibilitv27: 'bilibilitv/[tv_无奈].png',
                            bilibilitv28: 'bilibilitv/[tv_晕].png',
                            bilibilitv29: 'bilibilitv/[tv_流汗].png',
                            bilibilitv30: 'bilibilitv/[tv_流泪].png',
                            bilibilitv31: 'bilibilitv/[tv_流鼻血].png',
                            bilibilitv32: 'bilibilitv/[tv_点赞].png',
                            bilibilitv33: 'bilibilitv/[tv_生气].png',
                            bilibilitv34: 'bilibilitv/[tv_生病].png',
                            bilibilitv35: 'bilibilitv/[tv_疑问].png',
                            bilibilitv36: 'bilibilitv/[tv_白眼].png',
                            bilibilitv37: 'bilibilitv/[tv_皱眉].png',
                            bilibilitv38: 'bilibilitv/[tv_目瞪口呆].png',
                            bilibilitv39: 'bilibilitv/[tv_睡着].png',
                            bilibilitv40: 'bilibilitv/[tv_笑哭].png',
                            bilibilitv41: 'bilibilitv/[tv_腼腆].png',
                            bilibilitv42: 'bilibilitv/[tv_色].png',
                            bilibilitv43: 'bilibilitv/[tv_调侃].png',
                            bilibilitv44: 'bilibilitv/[tv_调皮].png',
                            bilibilitv45: 'bilibilitv/[tv_鄙视].png',
                            bilibilitv46: 'bilibilitv/[tv_闭嘴].png',
                            bilibilitv47: 'bilibilitv/[tv_难过].png',
                            bilibilitv48: 'bilibilitv/[tv_馋].png',
                            bilibilitv49: 'bilibilitv/[tv_鬼脸].png',
                            bilibilitv50: 'bilibilitv/[tv_黑人问号].png',
                            bilibilitv51: 'bilibilitv/[tv_鼓掌].png',
                        },
                    });
                });
            }, 1000);

            // 聚焦变更
        });
        return { go, dateFormat };
    },
    methods: {},
});
</script>
<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>
@require '../styles/wrapper.styl'
/deep/ .v p{color: #fff!important}

.timeline-wrapper
  max-width: $contentWidth;
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0;
  .timeline-content
    box-sizing border-box
    position relative
    list-style none
    &::after {
      content: " ";
      position: absolute;
      top: 14px;
      left: 0;
      z-index: -1;
      margin-left: -2px;
      width: 4px;
      height: 100%;
      background: var(--border-color);
    }
    .desc, .year {
      position: relative;
      color var(--text-color);
      font-size 16px
      &:before {
        content: " ";
        position: absolute;
        z-index 2;
        left: -20px;
        top: 50%;
        margin-left: -4px;
        margin-top: -4px;
        width: 8px;
        height: 8px;
        background: var(--background-color);
        border: 1px solid var(--border-color);
        border-radius: 50%;
      }
    }
    .year {
      margin: 80px 0 0px;
      color var(--text-color);
      font-weight: 700;
      font-size 26px
    }
    .year-wrapper {
      padding-left 0!important
      li {
        display flex
        padding 30px 0 10px
        list-style none
        border-bottom: 1px dashed var(--border-color);
        position relative
        &:hover {
          .date {
            color $accentColor
            &::before {
              background $accentColor
            }
          }
          .title {
            color $accentColor
          }
        }
        .date {
          width 40px
          line-height 30px
          color var(--text-color-sub)
          font-size 12px
          &::before {
            content: " ";
            position: absolute;
            left: -18px;
            top: 41px;
            width: 6px;
            height: 6px;
            margin-left: -4px;
            background: var(--background-color);
            border-radius: 50%;
            border: 1px solid var(--border-color);
            z-index 2
          }
        }
        .title {
          line-height 30px
          color var(--text-color-sub)
          font-size 16px
          cursor pointer
        }
      }
    }
@media (max-width: $MQMobile)
  .timeline-wrapper
    margin: 0 1.2rem;


/deep/ #veditor
	background-image: url(https://image.bestzuo.cn/images/20200708160947.gif!getwebp)!important;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: right;
	background-color: rgba(255, 255, 255, 0);
	resize: vertical;

/deep/ #veditor:focus
	background-position-y: 200px;
	transition: all 0.2s ease-in-out 0s;
</style>
