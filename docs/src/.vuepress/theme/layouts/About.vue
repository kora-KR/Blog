<template>
    <div class="about">
        <Common class="tags-wrapper" :sidebar="false" :fullScreen="false" :hide="false">
            <!-- <bubbles-effect :options="options"></bubbles-effect> -->
            <!-- 个人简介 -->
            <ModuleTransition delay="0.08">
                <PersonalInfo :from="'about'" />
            </ModuleTransition>
        </Common>
        <!-- <PersonalInfo /> -->
        <div class="botui-app-container" id="kora-botui">
            <bot-ui></bot-ui>
        </div>
    </div>
</template>

<script>
import { onMounted, defineComponent, getCurrentInstance } from 'vue-demi';
import Common from '@theme/components/Common';
import TagList from '@theme/components/TagList';
import NoteAbstract from '@theme/components/NoteAbstract';
import { ModuleTransition } from '@vuepress-reco/core/lib/components';
import moduleTransitonMixin from '@theme/mixins/moduleTransiton';
import PersonalInfo from '@theme/components/PersonalInfo';
import initBotApp from '../helpers/botuiApp';
// import bubblesEffect from '../helpers/canvasBubble.js';

export default defineComponent({
    mixins: [moduleTransitonMixin],
    // bubblesEffect
    components: { Common, NoteAbstract, TagList, PersonalInfo, ModuleTransition },

    setup(props, ctx) {
        const instance = getCurrentInstance().proxy;

        const tagClick = (tagInfo) => {
            if (instance.$route.path !== tagInfo.path) {
                instance.$router.push({ path: tagInfo.path });
            }
        };

        const paginationChange = (page) => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100);
        };
        onMounted(() => {
            initBotApp();
        });

        return { tagClick, paginationChange };
    },
});
</script>

<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>

.botui-app-container
 margin 25px auto
 width 80%;
 height 340px;
 padding 6px;
 border-radius 2px
 background-color rgba(242, 242, 242, 0.5)
 box-shadow 2px 2px 10px rgba(0,0,0,.2)

.tags-wrapper
  max-width: $contentWidth
  margin: 0 auto;
  padding: 90px 2.5rem 0;

@media (max-width: $MQMobile)
  .tags-wrapper
    padding: 5rem 0.6rem 0;
</style>
