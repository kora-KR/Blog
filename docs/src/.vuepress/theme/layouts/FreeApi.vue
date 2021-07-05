<template>
    <div>
        开源Api
    </div>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted, reactive } from 'vue-demi';
import { portGetFreeApiEntry } from '../util/port/portGetFreeApi';
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
        onMounted(() => {
            portGetFreeApiEntry().then((res) => {
                console.log(res);
            });
        });
        return { go };
    },
    methods: {},
});
</script>

<style lang="stylus" scoped></style>
