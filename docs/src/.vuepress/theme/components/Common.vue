<template>
    <div class="theme-container" :class="pageClasses">
        <!-- kora - 增加全局背景图 -->
        <section class="banner" :style="[{ background: '#eee url(' + require('../images/banner/4.jpg') + ') center center / cover no-repeat', height: fullScreen ? '100vh' : '352px', opacity: hide ? 0 : 1 }]"></section>

        <div v-if="!absoluteEncryption">
            <transition name="fade">
                <!-- <LoadingPage v-show="firstLoad" class="loading-wrapper" /> -->
                <section v-show="firstLoad" style="z-index: 999999; position: absolute; left: 0; top: 0;width: 100%; height: 100%; background: #d5eaed; overflow: hidden">
                    <div class="loader"></div>

                    <nav class="reload_btn" @click="handleClickReload">- 重新加载 -</nav>
                </section>
            </transition>

            <transition name="fade">
                <Password v-show="!firstLoad && !isHasKey" class="password-wrapper-out" key="out" />
            </transition>

            <div :class="{ hide: firstLoad || !isHasKey }">
                <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" />

                <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

                <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
                    <PersonalInfo slot="top" />
                    <slot name="sidebar-bottom" slot="bottom" />
                </Sidebar>

                <Password v-show="!isHasPageKey" :isPage="true" class="password-wrapper-in" key="in"></Password>
                <div :class="{ hide: !isHasPageKey }">
                    <slot></slot>
                </div>
            </div>
        </div>
        <div v-else>
            <transition name="fade">
                <LoadingPage v-if="firstLoad" />
                <Password v-else-if="!isHasKey" />
                <div v-else>
                    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" />

                    <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

                    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
                        <PersonalInfo slot="top" />
                        <slot name="sidebar-bottom" slot="bottom" />
                    </Sidebar>

                    <Password v-if="!isHasPageKey" :isPage="true"></Password>
                    <slot v-else></slot>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { defineComponent, computed, ref, onMounted, toRefs, getCurrentInstance } from 'vue-demi';
import Navbar from '@theme/components/Navbar';
import Sidebar from '@theme/components/Sidebar';
import PersonalInfo from '@theme/components/PersonalInfo';
import Password from '@theme/components/Password';
import { setTimeout } from 'timers';

export default defineComponent({
    components: { Sidebar, Navbar, Password, PersonalInfo },

    props: {
        from: {
            type: String,
            default: '',
        },
        sidebar: {
            type: Boolean,
            default: true,
        },
        fullScreen: {
            type: Boolean,
            default: () => true,
        },
        hide: {
            type: Boolean,
            default: () => true,
        },
        sidebarItems: {
            type: Array,
            default: () => [],
        },
        showModule: {
            type: Boolean,
            default: false,
        },
    },

    setup(props, ctx) {
        const instance = getCurrentInstance().proxy;

        const isSidebarOpen = ref(false);
        const isHasKey = ref(true);
        const isHasPageKey = ref(true);
        const firstLoad = ref(true);

        const shouldShowSidebar = computed(() => props.sidebarItems.length > 0);
        const absoluteEncryption = computed(() => {
            return instance.$themeConfig.keyPage && instance.$themeConfig.keyPage.absoluteEncryption === true;
        });
        const shouldShowNavbar = computed(() => {
            const { themeConfig } = instance.$site;
            const { frontmatter } = instance.$page;

            if (frontmatter.navbar === false || themeConfig.navbar === false) return false;

            return instance.$title || themeConfig.logo || themeConfig.repo || themeConfig.nav || instance.$themeLocaleConfig.nav;
        });

        const pageClasses = computed(() => {
            const classValue = {
                'no-navbar': !shouldShowNavbar.value,
                'sidebar-open': isSidebarOpen.value,
                'no-sidebar': !shouldShowSidebar.value,
            };

            const { pageClass: userPageClass } = instance.$frontmatter || {};
            if (userPageClass) classValue[userPageClass] = true;

            return classValue;
        });

        const hasKey = () => {
            const { keyPage } = instance.$themeConfig;
            if (!keyPage || !keyPage.keys || keyPage.keys.length === 0) {
                isHasKey.value = true;
                return;
            }

            let { keys } = keyPage;
            keys = keys.map((item) => item.toLowerCase());
            isHasKey.value = keys && keys.indexOf(sessionStorage.getItem('key')) > -1;
        };
        const initRouterHandler = () => {
            instance.$router.afterEach(() => {
                isSidebarOpen.value = false;
            });
        };
        const hasPageKey = () => {
            let pageKeys = instance.$frontmatter.keys;
            if (!pageKeys || pageKeys.length === 0) {
                isHasPageKey.value = true;
                return;
            }

            pageKeys = pageKeys.map((item) => item.toLowerCase());

            isHasPageKey.value = pageKeys.indexOf(sessionStorage.getItem(`pageKey${window.location.pathname}`)) > -1;
        };
        const toggleSidebar = (to) => {
            isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value;
        };
        const handleLoading = () => {
            const time = instance.$frontmatter.home && sessionStorage.getItem('firstLoad') == undefined ? 1000 : 0;
            setTimeout(() => {
                firstLoad.value = false;
                if (sessionStorage.getItem('firstLoad') == undefined) sessionStorage.setItem('firstLoad', false);
            }, +time + +2000);
        };

        const handleClickReload = () => {
            location.reload();
        };

        // 首次渲染时，recoShowModule 直接为 true，否则锚点失效
        const { showModule } = toRefs(props);
        const recoShowModule = computed(() => {
            if (firstLoad.value) {
                return true;
            } else {
                return showModule.value;
            }
        });

        onMounted(() => {
            initRouterHandler();
            hasKey();
            hasPageKey();
            handleLoading();
        });

        return { isSidebarOpen, absoluteEncryption, shouldShowNavbar, shouldShowSidebar, pageClasses, hasKey, hasPageKey, isHasKey, isHasPageKey, toggleSidebar, firstLoad, recoShowModule, handleClickReload };
    },

    watch: {
        $frontmatter(newVal, oldVal) {
            this.hasKey();
            this.hasPageKey();
        },
    },
});
</script>

<style>
.reload_btn {
    position: absolute;
    /* top: calc(50%); */
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    padding: 10px 20px;
    border-radius: 3px;
    font-size: 12px;
    letter-spacing: 1px;
    cursor: pointer;
    animation: show 1.5s ease 4s both;
}
.reload_btn:hover {
    background: rgba(172, 171, 171, 0.3);
    color: #fff;
}
.loader {
    position: relative;
    width: 2.5em;
    height: 2.5em;
    transform: rotate(165deg);
}
.loader:before,
.loader:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 0.25em;
    transform: translate(-50%, -50%);
}
.loader:before {
    animation: before 2s infinite;
}
.loader:after {
    animation: after 2s infinite;
}

@keyframes show {
    from {
        opacity: 0;
        top: 110%;
    }
    to {
        opacity: 1;
        top: calc(50%);
    }
}
@keyframes before {
    0% {
        width: 0.5em;
        box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    }
    35% {
        width: 2.5em;
        box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
    }
    70% {
        width: 0.5em;
        box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
    }
    100% {
        box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    }
}
@keyframes after {
    0% {
        height: 0.5em;
        box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    }
    35% {
        height: 2.5em;
        box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
    }
    70% {
        height: 0.5em;
        box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
    }
    100% {
        box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    }
}
/**
 * Attempt to center the whole thing!
 */
html,
body {
    height: 100%;
}

.loader {
    position: absolute;
    top: calc(40% - 1.25em);
    left: calc(50% - 1.25em);
}
</style>

<style lang="stylus" scoped>
.banner
	display block
	position fixed
	z-index -1
	top 0
	left 0
	width 100%
	background #eee
	box-shadow 2px 2px 10px #333
	&::after
		display block
		content ''
		position relative
		width 100%
		height 100%
.theme-container
  .loading-wrapper
    position absolute
    z-index 22
    top 0
    bottom 0
    left 0
    right 0
    margin auto
  .password-wrapper-out
    position absolute
    z-index 21
    top 0
    bottom 0
    left 0
    right 0
    margin auto
  .password-wrapper-in
    position absolute
    z-index 8
    top 0
    bottom 0
    left 0
    right 0
  .hide
    height 100vh
    overflow hidden
    opacity 0

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-in-out .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
