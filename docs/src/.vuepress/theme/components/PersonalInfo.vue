<template>
    <div :class="['personal-info-wrapper', { 'personal-info-wrapper-add': 0 }]">
        <!-- 原代码展示 -->
        <!-- <img class="personal-img" v-if="$themeConfig.authorAvatar" :src="$withBase($themeConfig.authorAvatar)" alt="author-avatar" /> -->
        <div class="personal-img" v-if="$themeConfig.authorAvatar">
            <img v-if="$themeConfig.authorAvatar" :src="$withBase($themeConfig.authorAvatar)" alt="author-avatar" />
        </div>
        <h3 class="name" v-if="$themeConfig.author" :style="[{ color: from == 'about' ? '#fff' : '' }]">
            {{ $themeConfig.author }}
        </h3>
        <div class="num">
            <div>
                <router-link :to="'/'" class="home-link">
                    <h3 :style="[{ color: from == 'about' ? '#fff' : '' }]">{{ $recoPosts.length }}</h3>
                    <h6 :style="[{ color: from == 'about' ? '#fff' : '' }]">{{ $recoLocales.article }}</h6>
                </router-link>
            </div>
            <div>
                <router-link :to="'/tag'" class="home-link">
                    <h3 :style="[{ color: from == 'about' ? '#fff' : '' }]">{{ $tags.list.length }}</h3>
                    <h6 :style="[{ color: from == 'about' ? '#fff' : '' }]">{{ $recoLocales.tag }}</h6>
                </router-link>
            </div>
        </div>
        <ul class="social-links">
            <li class="social-item" v-for="(item, index) in socialLinks" :key="index">
                <reco-icon :icon="item.icon" :link="item.link" :style="{ color: item.color }" />
            </li>
        </ul>
        <!-- <hr /> -->
    </div>
</template>

<script>
import { defineComponent, computed, getCurrentInstance } from 'vue-demi';
import { RecoIcon } from '@vuepress-reco/core/lib/components';
import { getOneColor } from '@theme/helpers/other';

export default defineComponent({
    components: { RecoIcon },
    props: {
        from: {
            type: String,
            default: '',
        },
    },
    setup(props, ctx) {
        const instance = getCurrentInstance().proxy;
        const socialLinks = computed(() =>
            ((instance.$themeConfig.blogConfig && instance.$themeConfig.blogConfig.socialLinks) || []).map((item) => {
                if (!item.color) item.color = getOneColor();
                return item;
            })
        );

        return { socialLinks };
    },
});
</script>

<style lang="stylus" scoped>
.personal-info-wrapper {
  .personal-img {
    display block
    margin 2rem auto 1.5rem
    width 50px
    height 50px
	position relative;
	&::before{
        content: '';
        height: 8px; width: 50px; background: #000; opacity: .2; border-radius: 50%;
        position: absolute;
        top: 67px;
        left: 0;
        animation: shadow .5s linear infinite;
    }
	& >img{
		border-radius: 5px;
		animation: rotate .8s linear infinite;
		content: '';
		position: absolute;
		left: 0;
		top: 0;
    	box-shadow var(--box-shadow)
		width: 55px;
		height: auto;
	}
  }
  &-add{background: #900}
  .name {
    font-size 1rem
    text-align center
    color var(--text-color)
  }
  .num {
    display flex
    margin 0 auto 1rem
    width 80%
	cursor pointer;
    > div {position: relative;
		&:hover{
			h3, h6{color: #999!important; font-weight bold}
		}
      text-align center
      flex 0 0 50%
      &:first-child {
		  &:after{content: ''; position: absolute; top: 50%; right: 0; transform: translateY(-50%) scale(.5); width: 4px; height: 100%; background: #999; border-radius: 10px}
      }
      h3 {
        line-height auto
        margin 0 0 .6rem
        color var(--text-color)
      }
      h6 {
        line-height auto
        color var(--text-color)
        margin 0
      }
    }
  }
  .social-links{
	  justify-content: center
  }
  .social-links {
    box-sizing border-box
    display flex
    flex-wrap wrap
    padding 10px
    .social-item {
	  position relative;
      width 39px
      height 36px
      line-height 36px
      text-align center
      list-style none
      transition transform .3s
      &:hover {
        transform scale(1.2) translateY(-4px)
      }
      i {
        cursor pointer
        font-size 22px
      }
    }
  }
}

@keyframes shadow {
    0%, 100% {transform: scaleX(1);}
    50% {transform: scaleX(1.2);}
}

@keyframes rotate {
    0% {
    transform: translateY(0) ;
  }
    25% {
        transform: translateY(10px);
    }
    50% {
        transform: translateY(20px) scale(1.1, 0.9);

    }
    75% {
        ransform: translateY(10px) ;
    }
    100% {
        transform: translateY(0) ;
    }
}
</style>
