<template>
    <div class="abstract-wrapper">
        <NoteAbstractItem v-for="(item, index) in currentPageData" :key="item.path" :item="item" :index="index" :currentPage="currentPage" :currentTag="currentTag" />
        <!-- 原代码逻辑 -->
        <!-- <pagation class="pagation" :total="data.length" :currentPage="currentPage" @getCurrentPage="getCurrentPage" /> -->
        <!-- 同分组去重 -->
        <pagation class="pagation" :total="getPageLength" :currentPage="currentPage" @getCurrentPage="getCurrentPage" />
    </div>
</template>

<script>
import { reactive, defineComponent, ref, toRefs, computed, getCurrentInstance, onMounted } from 'vue-demi';
import pagination from '@theme/mixins/pagination';
import NoteAbstractItem from './NoteAbstractItem';

export default defineComponent({
    mixins: [pagination],
    components: { NoteAbstractItem },
    props: ['data', 'currentTag'],

    setup(props, ctx) {
        const instance = getCurrentInstance().proxy;

        const { data } = toRefs(props);
        const dealData = [];

        const currentPage = ref(1);

        const removalMethod = () => {
            console.log(data, '文章数据');
            // --------------------------------------------------------------------------------------------
            let obj = {};
            let peon = data.value.reduce((cur, next) => {
                obj[next.frontmatter.group] ? '' : (obj[next.frontmatter.group] = true && cur.push(next));
                return cur;
            }, []); // 同分组去重 Group，详情查看README.md
            // --------------------------------------------------------------------------------------------
            return peon;
            // return data.value.slice(start, end); // 原代码逻辑
        };
        // 去重文章单页展示
        const currentPageData = computed(() => {
            const start = (currentPage.value - 1) * instance.$perPage;
            const end = currentPage.value * instance.$perPage;
            return removalMethod().slice(start, end);
        });
        // 去重文章长度
        const getPageLength = removalMethod().length;

        const getCurrentPage = (page) => {
            currentPage.value = page;
            instance._setStoragePage(page);
            ctx.emit('paginationChange', page);
        };

        onMounted(() => {
            currentPage.value = instance._getStoragePage() || 1;
        });

        return { dealData, currentPage, getPageLength, currentPageData, getCurrentPage };
    },
    watch: {
        $route() {
            this.currentPage = this._getStoragePage() || 1;
        },
    },
});
</script>

<style lang="stylus" scoped>
.abstract-wrapper
  width 100%
</style>
