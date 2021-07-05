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

            <section class="outer_chain">
                <a :href="item.link" v-for="item of outerChain" :key="item.id" target="_blank">
                    <img :src="item.src" alt="" />
                    <span>{{ item.key }}</span>
                </a>
            </section>
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
        var x = 1;
        const outerChain = [
            { key: '', link: 'https://www.huaweicloud.com/', src: 'https://res.hc-cdn.com/cnpm-header-and-footer/2.0.6/base/header-china/components/images/logo.svg' },
            { key: '', link: 'https://tongji.baidu.com/web/10000369569/overview/index', src: 'https://tongji.baidu.com/web/image/logo.svg?__v=1624350252934' },
            {
                key: '',
                link: 'https://www.juhe.cn/',
                src:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAcCAYAAABFwxCgAAAM9UlEQVRoQ+1aeXhU1RX/nfcmk1FAKCgu4AoaBRuSe2dEVFokRqlQFPe6VKutS92t+/fVzyq1LhVssdZqa63WpS51r0uCRlsbA+++ISxt6YeIuyKJlkZNxjfv9DvDe+ObYZJMmqD9KOef5Jt37rnL79yzXsKGohd4d2RxISzMw1Rq3VDTbJLb+wlQ7yx95LiSLeyH2QAuy40k3IQ6Or+PUjaxD+AJDCzIAvBkPA3GgZE1tqEOI0HkD+C6N4nqwwkUgtzI08DYOzK+GfX0bNnyGvlWAKetx084GHX0dCk5SqmxRDSztzmYuZGIagGMKMXLzG+7rvuHbuRYSqkqIor1Nk/0e1dX1+qlS5e+392YSZMmDe/q6hrued67lZWVO/m+f5ys03XdJqXULtls9tPW1ta3ZbxSarJlWaMzmczjixcv/ricdWit9wcwA8A9xhhXxmitv0tECd/3M73JsCyr03GcuwpBbuC5IJwXGTwHB9APehOW+z6fvwbGiyV4l8DGOdifmroBeRYR/bGMOb4P4CwA47rj9X1/n3Q63Vz8XWv9EwCXljFHMUsngCpjzBulxmqtrwLwQ2aeaVlWnJkfAnBFJpO5OR6PtwNoMsYIUALOIwAOtW17lwULFrxWzlqUUhcR0fXMfLzruvcEcj4FIMpajsK2G2NGDBzIDfwsqMBMy5ruRzuOx1GU7W5T1dXVo+Px+ORuvm/BnLMOhpmPsSxrNwBDi3mZ+SQAB2az2b0WLVq0sOg7aa3fZGYZ90A5hxvw7EhEdUR0ieM41w8UyABWAPisSN5Dxpgrwt+01hXB/xcAuJaITmTm+4wxntb6E2b2iOjyXvYiCugPHMiNvDWA94omXYJ21PYEcG8HXl1dPbKiouJ9Zn7cdd1DtNYXAtjGGCN/86S1/guAvTOZzFZLliz5MPotmUzuy8zy/V5jzHG9zRl+T6VS2/i+/xaARcaYZDcg70dE+zDzw0RUE97ktra2G7bccstzALzhOM79wQ18BsBBcvARWblLRkS3O46Tc3M1NTXDbNsu2EPIb1nWXr7vvwTgY2PMlj3tRRQbwOYDB/J8Ph2MXxZMauFETKW7yjlUpZQcvtyaAsvCzAkiOiYCspj1WZZljVm4cOFKkZ1KpbbPZrOr5La7rrtX8Xxa65sAnCvjjDGPlrOeyI16HsAUALsaY14tUqxbAOQPmplHCeAAlgL4e4R3sTFmttbaAJCYotIYk7vJgQnf2xizbchfVVU1ZPDgwTm3x8wjiWgUANnfh57nnRCLxRwAGSI6oae9MPNvAFgDCfK1YFxSMCljGOrpX+UcqlJqHhGJvy1JIchKqTOJ6Gbxr8aY64Q5HMvMZ7mu+4siAWKqxZ8ObWtrG7lq1SrxsWWT1vp0IKe8lxtjxK/nKZC7fRnCGjo7O2ckEomPALxrjBkTUSLx0wUgR+X9b/nkRpbDlcDoczoAFkBcxiFEgTrGtm25CTnyPG+EZVkvhiAHpkxMaIdlWTW+74+VkA/A6iBA+iQ6X01NzT62bb8MQPzZseWsJcpTW1u7lWVZ78jtNMbILcyTZAUAQt8pJrcewM8AzGPmvFWzbbvD87ydZR8A7jLGnDgAIGeZWSxUb/Sp67o/HpjAq4FvAeGMQpALTW9Pqwlvo+/7qXQ6LeYoR8U+WX7TWkuR5RpmlgBrx8BkHuK67pPFcyil5hLRecx8mO/7S23bLj8dBBxjzFFKqQYiOsDzvKrW1tZ/RufQWl8D4Hzf92fYtj0s9MmWZd3u+/5rzPycxBKBQpwpChldZylzXaRI3UXX6/nkYC2HEtEsx3GWR+X0DeRGbggOdp0MwtWoo7tREuTybnJtbW2dZVkS9Q4HIKlF1KTaACSi/rfv+6dWVFQ0ZLPZagAPRvLlxUR0LhG9OmjQoHebmpq8YINiql8HMExM9YgRI3YCIAFYudRijJmulPoeEd0mqZL41ujgZDIp6Y0AIcUfyQRyKRSAXwN4h4iecRznGzImmUx+C8CrjuMsCGUopf5EROOMMbK29agHc/1xZ2fndvF4PJ9p2LYtFuRoIto/m80uE2GJRCLb3Nzc3leQRZN3za+GcA7qaF5/QFZKfZOI7uvm5GV9m4vlBnAGMwtvWDgRsy3fRDlyxMx1rutKsJSjZDK5p+/741zX7UvqVLCUoOAxk4geMcYUxBh9AVlrLXu4wxhzajiB1voVMfnGGN0TyKJkvu//3nXdP2utJU/+mJlF+XqrL7xjjBn1pYPc07UKzPUbzPyk67pHaK0luBspKdEWW2zxRHt7e2UsFpsRRLU7MPNs13Uliv1CSCk1O3AHUgz5SpG5lny4wRgzSxajtRYFecEYc2gEZLE0/zDGSGrV0032iUgqbxIHtAnIUlgBILlwSLsD2FbcGBF1BD+uEZfzpYOstZb0YeJAoOL7/svpdPqDUFYqlfq67/vlBCg9Ts/Ma1zXlcCqgFKplAR/u/q+3+R5npdIJMZ6nvd2JpNZk0gk6onog9A8a63TQfqUq9hNnDhxa8/z3iOiGxzHubhY9vjx4+OVlZUPBpZLFOQ4Y8xT4U0uzpO11ncCONH3/Zp0Ol3Q9esbyPNZcrNh+QV9hpcwjVr7aa7LLWv2qgeWZdUvXLiwMWRMJpMzmfkxZpab8N82SCQueD+ay4p8pdRBlmWdKS5E/DAz57MCSdmI6LdSSGHmq1zXfVxrfaPk68w8wXXdxbW1tYdblvWQBIWu60oqlacgqn8YQFgJPMMYI5U/sQg5c73hQO7umPsReE2YMGG3ioqKI0U0Mw8C8B2pagXASP78ATOLH9tBWIhIIlrZ6Hrked49ixYtksJBjkKQS+W5vWpMwKC1FnlSwMgXLILDlvy7nDxZ2AcRURUziyuRdO44pZQEaTO6urq2W7ZsmdS5cxQ0bERRJXOQGzy0RO1afPKpQUAYDpWziwNYCyAsI682xowrvslzQIj2fstrUPQDZPG7sVhsOhFJtUoiUNnUasuyTnIc5+lJkyZtlslkxPyEAV8+yg1qvFf7vn9j1Ex/QSBL40aUcyIz301EeeUSUAFI3VmqctJYuFqqXEqp+4IK3slEJDfzUWPM0VGF01pLMPmyxB1EJDm6pIvRBkWXAElE5zDzvZJ5BD66QG+DatkHxphtiluNUgo7Oc9NuBZ1tK753xP1A2SlVNRcr2bm27u6uuaIdldXV+8cj8cfYOZ87ZiZZZNTPM9bEo/HxdxNY+Y7XNc9pXiJG/ImB7f5R2Kqfd8/JJ1OPx7On0qlxkteHrQIjw9/11pLGVR+l4ygojgbCPmqq6sHSTuyOIU68sgj7ZUrV0qU/joRXRaAnK/+FSnLu5LklgK50AQRLkId/bQ3jPvjk2tra8cR0XQAi9euXdu0YsWKLgk6EonE2cx8JRENDky3xcy3EZGAKWZMcmpJPZ6PxWKzWlpaxEwV0IYGOfSrAO40xoibyVHY2mTmC1zXnVt0+GcD+HkQVe/R09kqpS4mIinfStB174QJE0bFYjFJHQ0R3dh3kBtZnLx0OD4nxjjUU7TYXnpN/bjJRQcgaYCYQOnISGH+IyKSjtMpzDxJfJiYISk2EJEFYI0k/47jRIOevMgNDXLgLqS6JMWMuUE58ygiktRGOkljo7n1lClTYmvXrpV+t5ZeDBEd5DiOFJhKklLqViI6LdhjU/CIQOoAEnU/0jeQn+DNsRkkMf9qZLY3UYcdQWXUn/sBctAKnANgl0hXR3qmv6qoqLiupaXl/WQy+dcQZEkjgtTod2H1jZn/RkRSqLnCGLMk3MOGBjm4tXJmcvDR1l+nlDrT6bTU1fOktc6Zd2a+IegidXV2du65bNmyMK/N8yql9iCiV5g5W1lZOaq5ufnTsKQr7+eI6PXyQW7kFAAJAlTRLb4M9XRtr6ZaGPoBcuCTJV0QH9IC4DF5IhPtCxeDHBzu5kQk8cOxgc+uIKKDJVgrAbLcqrI6YiX2O1osRonoWpRMWovSpJBIWLIDSdXEwgiJ+5DGycvGmJOSyeRezCzNEnfIkCH7dnR0TGdmaX3eYoyRunZUGWRPdxBRZbS7prUWSztZXsDYtr1TALIUSdaUWHeVFE7W+eTSLzrewrYYg/HU6zuinPAGvgjA4QUT1VP0rVi3uhK+ggh7rKUYg0K+lhcg0bJlyDt27NjKoUOHju7o6Fi9fPlyiTZzpJSaRkR3l6WoPTNJnrxnERBPAZga/NYqloeI5I2ZXJZvAzgsiLLnG2PkwYPwj7Fte/qCBQtyjQ6ttXSrDmTmWZI7h/K11tLsuYSZr3FdV+rm0jeXRwxipQS4PZLJpPTZc0+CeqBcfi8gnw3KBQIheZBHtVNJbtUm2ghOgPAMD0csVw+VrpLcgiNQR89tBHvbtIXgBNblyY0sgUM7bFyK/UkK65toIzqBdSA7XIEkFb8g3Ii2+f+9lf8A+B8VhmV2MwMAAAAASUVORK5CYII=',
            },
            { key: '', link: 'https://www.google.com.hk/', src: 'https://cdn.jsdelivr.net/gh/moezx/cdn@3.0.8/img/logo/Google.svg' },
        ];
        const showAccessNumber = computed(() => {
            const {
                $themeConfig: { valineConfig },
                $themeLocaleConfig: { Config: valineLocalConfig },
            } = instance;

            const vc = valineLocalConfig || valineConfig;

            return vc && vc.visitor != false;
        });
        onMounted(() => {
            import('@theme/helpers/jq.min.js').then((res) => {
                import('@theme/helpers/canvasFish.js');
            });
        });
        return { version, showAccessNumber, outerChain };
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

footer{display: flex; justify-content: center; align-items: center;cursor: pointer; position: relative; top: 0px;
	>img{position: relative; top: -4px; width: 20px; height: auto; animation: iconAnimate 1.33s ease-in-out infinite;}
	.outer_chain{position: absolute; bottom: -30px; left: 50%; transform: translateX(-50%); display: flex; justify-content: center; align-items: center;
		a{margin: 0 15px;  display: flex; justify-content: center; align-items: center;
			img{height: 1.3em}
		}
	}
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
