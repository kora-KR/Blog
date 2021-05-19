<template>
    <main class="canvas_bubble">
        <!-- <bubbles-effect :options="options"></bubbles-effect> -->
    </main>
</template>

<script>
// import bubblesEffect from '../../public/js/CanvasBubble.js';
export default {
    name: 'CanvasBubble',
    data() {
        return {
            options: {
                color: 'rgba(225,225,225,0.5)', //Bubble color
                radius: 15, //Bubble radius
                densety: 0.3, // The larger the bubble density, the greater the density (suggest no more than 1).
                clearOffset: 0.2, // The larger the bubble disappears [0-1], the longer it disappears.
            },
        };
    },
    components: {
        // bubblesEffect,
    },
};
</script>
<style scss scoped>
.canvas_bubble {
}
</style>
