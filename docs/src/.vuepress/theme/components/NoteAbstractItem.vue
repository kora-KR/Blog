<template>
    <div class="abstract-item" @click="$router.push(item.path)">
        <svg>
            <rect id="shape" height="232" width="811"></rect>
        </svg>
        <reco-icon v-if="currentPage == 1 && index < 3" icon="iconfont reco-sticky" style="font-size: 33px" />
        <article v-if="index % 2 == 0" class="abstract-item_left">
            <main>
                <section :style="[{ background: '#eee url(' + require('../images/banner/' + Math.floor(Math.random() * 5) + '.jpg') + ') center center / cover no-repeat' }]"></section>
            </main>
        </article>
        <article class="abstract-item_right">
            <reco-icon v-if="item.frontmatter.sticky" icon="reco-sticky" />
            <div class="title">
                <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
                <router-link :to="item.path">{{ item.title }}</router-link>
            </div>
            <div class="abstract" v-html="item.excerpt"></div>
            <PageInfo :pageInfo="item" :currentTag="currentTag"> </PageInfo>
        </article>
        <article v-if="index % 2 > 0" class="abstract-item_left">
            <main>
                <section :style="[{ background: '#eee url(' + require('../images/banner/' + Math.floor(Math.random() * 4) + '.jpg') + ') center center / cover no-repeat' }]"></section>
            </main>
        </article>
    </div>
</template>

<script>
import { defineComponent, reactive } from 'vue-demi';
import { RecoIcon } from '@vuepress-reco/core/lib/components';
import PageInfo from './PageInfo';
export default defineComponent({
    components: { PageInfo, RecoIcon },
    props: ['item', 'index', 'currentPage', 'currentTag'],
    setup(props, ctx) {
        const state = reactive({});
    },
});
</script>

<style lang="stylus" scoped>
.abstract-item
  position relative
  margin: 0 auto 20px;
  padding: 16px 20px;
  width 100%
  overflow: hidden;
  border-radius: $borderRadius
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition all .3s
  background-color var(--background-color)
  cursor: pointer;
  display flex
  justify-content space-between
  align-items center
  > * {
    pointer-events: auto;
  }
  &:hover{
	main{
		>section{
			transform: scale(1)
		}
	}
  }
  &{
	  article{
		  &:nth-of-type(2){margin-left:10px}
	  }
  }
  &_left {
	  >main{
	  	width: 25vw
		height: 200px
		overflow: hidden
		border-radius: 3px
		>section{
			width: 100%
			height: 100%
			transition: all .6s
			transform: scale(1.1)
		}
	  }
  }
  .reco-sticky
    position absolute
    top 0
    left 0
    display inline-block
    color $accentColor
    font-size 2.4rem
  &:hover
    box-shadow: var(--box-shadow-hover)
  .title
    position: relative;
    font-size: 1.28rem;
    line-height: 46px;
    display: inline-block;
    a
      color: var(--text-color);
    .reco-lock
      font-size 1.28rem
      color $accentColor
    &:after
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $accentColor;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: .3s ease-in-out;
    &:hover a
      color $accentColor
    &:hover:after
      visibility visible
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
  .tags
    .tag-item
      &.active
        color $accentColor
      &:hover
        color $accentColor
@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left: 0!important;



svg{ position: absolute; top: 0; left: 0;width 100%; height: 100%}
rect#shape {
	width: inherit
	fill:transparent;
	stroke:white;
	stroke-width:3px;
	stroke-dasharray:0 500;
	stroke-dashoffset:0;
	transition:0.5s ease;
	animation:dong 2s ease-in-out infinite alternate;
}
.abstract-item:hover #shape {
	stroke-dasharray:500 0;
	stroke-width:3px;
	stroke:#647EA0;
}
</style>
