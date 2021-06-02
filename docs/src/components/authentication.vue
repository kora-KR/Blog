<template>
    <div class="authentication">
        <nav @click="authenticationType = true" v-if="!authenticationType">点击查看</nav>
        <div class="navList" v-if="authenticationType">
            <nav v-for="(item, i) of authenticationTypeList" :key="item.id" @click="handleClickAuthentication(i)">
                <span v-if="i">|</span>
                {{ item }}
            </nav>
        </div>
        <main v-if="authenticationLoad && !encInfoShow">
            <label for="账户">账户</label>
            <input type="text" v-model="admin" />
            <label for="密码">密码</label>
            <input type="password" v-model="psw" />
            <span class="btn" @click="handleClickBtn">校验</span>
            <span class="error">{{ errorTip }}</span>
        </main>
        <slot v-if="encInfoShow" class="slot"></slot>
    </div>
</template>

<script>
export default {
    name: 'authentication',
    data() {
        return {
            psw: '',
            admin: '',
            errorTip: '',
            encInfoShow: false,
            authenticationLoad: false,
            authenticationType: false,
            authenticationTypeList: ['账户校验', '联系开发人员'],
        };
    },
    methods: {
        handleClickAuthentication(i) {
            if (!i) {
                this.authenticationLoad = true;
            } else {
                window.open('/relation');
            }
        },
        handleClickBtn() {
            if (this.psw == 'koraloveniko' && this.admin == 'korains') {
                this.encInfoShow = true;
                return;
            }
            this.errorTip = '(账户不匹配，请联系开发人员)';
        },
    },
};
</script>
<style scoped lang="stylus">
.authentication{
	.navList{margin-bottom: 15px; display: inline-block;
		nav{display: inline-block; cursor: pointer;
			span{margin: 0 10px; color: #333; font-weight: bold}
			&:hover{color: #7C94A6}
		}
	}
	>nav{cursor: pointer; position: relative; line-height: 1; display: inline-block; margin-right: 30px;
		&::after{content: ''; position: absolute; top: 20px; left: 0; width: 0; height: 2px; background: #7C94A6; transition: all .3s;}
		&:hover{color: #7C94A6;
			&::after{width: 60px;}
		}
	}
	.btn{display: inline-block; padding: 6px 20px; background: #7C94A6; color: #fff; border-radius: 4px; font-size: 12px; letter-space: 2px; cursor: pointer}
	.error{font-size: 12px}
}
</style>
