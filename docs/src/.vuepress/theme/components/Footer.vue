<template>
    <div class="footer-wrapper">
        <!-- <span>
            <reco-icon icon="reco-theme" />
            <a target="blank" href="https://vuepress-theme-reco.recoluan.com">{{ `vuepress-theme-reco@${version}` }}</a>
        </span>
        <span v-if="$themeConfig.record">
            <reco-icon icon="reco-beian" />
            <a :href="$themeConfig.recordLink || '#'">{{ $themeConfig.record }}</a>
        </span>
        <span>
            <reco-icon icon="reco-copyright" />
            <a href="javascript:void(0)">
                <span v-if="$themeConfig.author">{{ $themeConfig.author }}</span>
                &nbsp;&nbsp;
                <span v-if="$themeConfig.startYear && $themeConfig.startYear != new Date().getFullYear()">{{ $themeConfig.startYear }} - </span>
                {{ new Date().getFullYear() }}
            </a>
        </span>
        <span v-show="showAccessNumber">
            <reco-icon icon="reco-eye" />
            <AccessNumber idVal="/" />
        </span>
        <p class="cyber-security" v-if="$themeConfig.cyberSecurityRecord">
            <img src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" alt="" />
            <a :href="$themeConfig.cyberSecurityLink || '#'">{{ $themeConfig.cyberSecurityRecord }}</a>
        </p> -->
        <footer>
            <svg width="280px" height="20px" class="svg">
                <text v-for="(item, index) of 4" :key="item.id" text-anchor="middle" x="50%" y="50%" :class="['text', 'text-' + (index + 1)]">
                    MIT Licensed | Copyright © 2019-present Kora Run
                </text>
            </svg>

            <img src="../images/icon/heart.png" alt="" />
        </footer>
        <div id="jsi-flying-fish-container"></div>
        <Comments :isShowComments="false" />
    </div>
</template>

<script>
import { defineComponent, computed, getCurrentInstance, onMounted } from 'vue-demi';
import { RecoIcon } from '@vuepress-reco/core/lib/components';
import { version } from '../package.json';
export default defineComponent({
    components: { RecoIcon },
    setup(props, ctx) {
        const instance = getCurrentInstance().proxy;
        const showAccessNumber = computed(() => {
            const {
                $themeConfig: { valineConfig },
                $themeLocaleConfig: { valineConfig: valineLocalConfig },
            } = instance;

            const vc = valineLocalConfig || valineConfig;

            return vc && vc.visitor != false;
        });
        onMounted(() => {
            import('@theme/helpers/jq.min.js').then((res) => {
                import('@theme/helpers/canvasFish.js');
            });
        });
        return { version, showAccessNumber };
    },
});
</script>

<style lang="stylus" scoped>
  .footer-wrapper {
    // border-top: 1px solid var(--border-color);
    text-align: center;
    color: lighten($textColor, 25%);
    a {
      font-size 14px
    }
    > span {
      margin-left 1rem
      > i {
        margin-right .5rem
      }
    }
    .cyber-security {
      img {
        margin-right .5rem
        width 20px
        height 20px
        vertical-align middle
      }
      a {
        vertical-align middle
      }
    }
  }

@media (max-width: $MQMobile) {
  .footer {
    text-align: left!important;
    > span {
      display block
      margin-left 0
      line-height 2rem
    }
  }
}

footer{display: flex; justify-content: center; align-items: center;cursor: pointer; position: relative; top: 50px;
	img{position: relative; top: -4px; width: 20px; height: auto; animation: iconAnimate 1.33s ease-in-out infinite;}
}
@keyframes iconAnimate {
	0%, 100% {
    transform: scale(1);
	}
	10%, 30% {
		transform: scale(0.9);
	}
	20%, 40%, 60%, 80% {
		transform: scale(1.1);
	}
	50%, 70% {
		transform: scale(1.1);
	}
}

.text{
	width: 100%;
    font-size: .8em;
    fill: none;
    stroke-width: 1px;
    stroke-dashoffset: 0;
    stroke-dasharray: 310;
    animation: stroke 6s infinite linear;
}
.text-1{
	stroke: #000;
    animation-delay: -1.5s;
}
.text-2{
	stroke: #647EA0;
    animation-delay: -3s;
}
.text-3{
	stroke: #EA563B;
    animation-delay: -4.5s;
}
.text-4{
	stroke: #81C362;
    animation-delay: -6s;
}
@keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}
</style>
