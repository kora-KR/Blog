---
title: 开发规范
des: 后端规范1.0.1
date: 2021-05-27
author: wang Q
tags:
    - 后端
    - 规范
group: specification
---

# 后端开发规范(VUE1.1.1)

> 适用人群：了解基础 W3C 规则，了解基础 VUE 规则

## 1.1 规范目的

> 以此规范提升团队协作效率，便于功能维护及版本迭代，输出高质量的项目源码

## 1.2 命名规范

> 统一命名规则，语义化管理提升代码可读性，规范性声明便于代码实质理解

### 1.2.1 变量命名规范

    ① 命名方法 ：驼峰命名法
    ② 命名规范 ：
    	Ⅰ. 命名必须贴合实际场景，如申明一个变量`银行卡`那么可以这样定义 var bankCard = "银行卡";
    	Ⅱ. 命名复数需加 Arr，如申明一个数组`银行卡列表`，那么可以这样定义 var bankCardListArr = Array.fill({key: '银行卡1'}, {...});

### 1.2.2 常量命名规范

    ① 命名方法 : 全部大写
    ② 命名规范 :
    	Ⅰ.使用大写字母和下划线组合命名（下划线用以分割单词）
    	 const MAX_COUNT = 10
    	 const ENV = 'product'
    	 const URL = 'https://www.baidu.com/'

### 1.2.3 组件命名规范

    ① 命名方法：指定标准
    ② 命名规范：
    	Ⅰ. 路由组件声明：首字母大写命名，如Home（首页）、Login（登录页）
    	Ⅱ. 子组件声明：驼峰命名，如cardListItem（卡列表子组件）、payControl（支付子组件）
    	Ⅲ. 子组件引用：分隔符命名，如v-pay-control（自定义支付子组件）、van-loading（vantUI引用子组件，引用第三方UI库）
    	Ⅳ. 通用声明(需国际通用且无歧义)：简写命名，如BOCShop（中国银行商户）

### 1.2.4 methods 方法命名命名规范

    ① 命名方法：驼峰式 | 语义化
    ② 命名规范：
    	Ⅰ. 事件声明：
    		handleClickBack（手动点击回退）
    		handleInputTel（手动输入电话）
    		handleChangeDate（手动变更日期）
    		handleChoiceSex（手动选择性别）...
    	Ⅱ. 接口声明：
    		portGetBankCardList（获取银行卡列表）
    		portSubmitBuyAppeal（提交购买申请）
    		portSetUserInfo（设置用户信息）...
    	Ⅲ. 父子组件传值声明：
    		emitChangeAge（父子传值变更年龄字段）
    		emitChangeFormState（父子传值变更表单状态）...

### 1.2.5 表单封装方法命名规范

    1. 数据处理：Deal结尾
    2. 数据正则判断：Judge结尾
    3. 数据表单输入强制限制：Limit结尾
    示例如下：

```js
// 1. 数据截取
function cutDeal(key, flag) {
    return key.substring(key.length, key.length - 4);
}
// 2. 手机格式判断
function telJudge(key) {
    var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    return reg.test(key);
}
// 3. 纯数字输入限制
function numberLimit(key) {
    return key.replace(/[^0-9]/g, '');
}
```

## 1.3 代码书写规范

> 规范代码结构提升代码功能查找速度，提升代码阅读质量

### 1.3.1 页面组件（父、子）规范

#### 1.3.1.1 路由页面基础结构

```HTML
    	// h5
    	<template>
    		<div></div>
    	</template>
    	// js
    	<script>
    	export default {
    		components : {},
    		data () {
    			return { }
    		},
    		props: {},
    		beforeRouteEnter(to, from, next) {
    			next()
    		},
    		mounted() {},
    		methods: {},
			beforeRouteLeave(to, from) { },
    	}
    	</script>
    	// css
    	<style lang="scss" scoped></style>
```

#### 1.3.1.2 页面书写顺序（必须按如上顺序，从左往右、从上到下）

#### 1.3.1.3 事件书写顺序

主动触发事件方法 -> 父子传值事件方法 -> 接口调用方法
如下

```js
	methods: {
		handleClickBack() {},
		emitChangeAge() {},
		portGetBankCardList() {}
	}
```

#### 1.3.1.4 props 定义规范

```js
    props: {
    	status: {
    		type: String,
    		required: true,
    			default: function () {
    			return { message: 'hello' }
    		}
    		validator: function (value) {
    			return [
    				'syncing',
    				'synced',
    				'version-conflict',
    				'error'
    			].indexOf(value) !== -1
    		}
    	}
    }
```

#### 1.3.1.5 方法耦合分离：尽量避免方法内部回调造成回调深渊

#### 1.3.1.6 样式书写规则

    Ⅰ. [scss](https://www.sass.hk/)/[less](http://lesscss.cn/)规范
    Ⅱ. 必须使用基础样式嵌套规则
    Ⅲ. 公用具备样式封装思路（如弹性盒、1px边框等，可参照/src/assets/styles）
    Ⅳ. 必须使用scoped强制限制作用域
    Ⅴ. 最新版VUE基础项目封装集成px转rem，可直接使用px进行页面搭建

### 1.3.2 封装接口规范

    1. 必须使用Promise对象，使用resolve、reject进行抛出

## 1.4 项目全局规范

> 全局规范提升项目可维护性，降低迭代成本，降低项目运行冲突风险

### 1.4.1 缓存问题

    1. 小项目，可直接使用缓存
    2. 大型项目，必须结合vuex和storage进行前台数据存储
    3. 离开项目或再次进入项目，必须清除前台所有缓存（需结合项目场景）
    4. 缓存命名，必须使用本项目标识（如统一用户需存储，sso_userName：统一用户_用户姓名）

### 1.4.2 路由问题

    1. 可复用页面必须使用嵌套路由，实现路由解耦（复用页面需拆解成公用组件）
     如下：

```js
	// router.js - 路由
	{ path: '/', name: 'home', component: home,
		children: [
		{path: '/bindCard', name: 'bindCard', component: bindCard, meta: {name: '绑卡页', keepAlive: true}},
		{path: '/appealBindCard', name: 'appealBindCard', component: appealBindCard, meta: { name: '申诉绑卡页'}},
	]

	// 父组件
	<template>
		<div class="nav">
			<keep-alive>
				<router-view v-if="$route.meta.keepAlive" :key="activeDate"></router-view>
			</keep-alive>
			<router-view v-if="!$route.meta.keepAlive" :key="activeDate"></router-view>
		</div>
	</template>
```

### 1.4.3 组件问题

    1. 必须进行组件拆分，可根据项目复杂度和页面复杂度进行合理拆解

## 1.5 注释规范

> 规范注释可避免打包失败与提升代码可读性

### 1.5.1 单行注释

    1. 如下

```js
// 用户姓名
var userName = 'kora';
```

### 1.5.2 多行注释（常用于方法封装）

    1. 如下

```js
/**
	_ 组件名称
	_ @module 组件存放位置
	_ @desc 组件描述
	_ @author 组件作者
	_ @date 2017 年 12 月 05 日 17:22:43
	_ @param {Object} [title] - 参数说明
	_ @param {String} [columns] - 参数说明
	_ @example 调用示例 \* <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
**/
```

### 1.5.3 script 注释

    1.尽可能多用单行注释，注释需要与被注释的地方对齐
    2.生命周期created()、mounted()下的所有方法调用需要单独注释，methods里面涉及接口调用的方法一定要注释，filters里面的过滤器需要注释说明功能

## 1.6 js 代码编写规范

    1.函数/方法，要添加功能注释
    2.函数/方法要保持功能单一，一个方法只做一件事情，复杂的功能要进行拆分
    3.来自于接口返回的数据，和来自于本地存储的数据使用之前要做容错处理，保证程序健壮性
    4.Switch…case使用在至少有三个判断值,case不可省,每次case必须用break跳出
    5.在一票否决的情况下，可以采用写法如if(x)return 减少代码块嵌套深度
    6.除了三目运算，if,else 等禁止简写

## 1.7 指令规范

### 1.7.1 指令有缩写一律采用缩写形式

```js
// 错误示例

v-bind:class="{'show-left'：true}"
v-on:click="getListData"

//  good

:class="{'show-left'：true}"
@click="getListData"
```

### v-for 循环必须加上 key 属性，在整个 for 循环中 key 需要唯一

```html
<!--  错误示例  -->

<ul>
    <li v-for="todo in todos">
        {{ todo.text }}
    </li>
</ul>

<!--  good  -->

<ul>
    <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
    </li>
</ul>
```

### 避免 v-if 和 v-for 同时用在一个元素上（性能问题）

以下为两种解决方案：

将数据替换为一个计算属性，让其返回过滤后的列表

```html
<!--  错误示例  -->

<ul>
    <li v-for="user in users" v-if="user.isActive" :key="user.id">
        {{ user.name }}
    </li>
</ul>

<!--   good -->

<ul>
    <li v-for="user in activeUsers" :key="user.id">
        {{ user.name }}
    </li>
</ul>

<script>

    computed: {
      activeUsers: function () {
        return this.users.filter(function (user) {
          return user.isActive
        })
      }
    }
</script>
```

### 将 v-if 移动至容器元素上 (比如 ul, ol)

<!--  错误示例  -->

<ul>
<li v-for="user in users" v-if="shouldShowUsers" :key="user.id">
	{{ user.name }}
</li>
</ul>

<!-- good -->
<ul v-if="shouldShowUsers">
    <li v-for="user in users" :key="user.id">
        {{ user.name }}
    </li>
</ul>

## 1.8 项目目录解析

┌─public 静态目录（其资源会复制到打包输出文件根目录中[dist]）
│ └─security ns-国密封装控件
│ └─svg ns-国密控件 svg 资源
│ └─index.html public 静态资源引入（ejs 模板引入，[官网](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#%E6%8F%92%E5%80%BC)）
├─src  
│ └─assets 静态资源，如图片、 样式、字体等
│ └─components 组件拆分子组件
| │ └─common 公用组件
| │ └─head.vue 公用子组件（公用头部）  
│ ├─router 路由
│ │ └─index.js 路由配置
│ │ └─router.config.js 路由守卫
│ ├─store 全局数据
│ │ └─modules 全局数据模块
│ │ │ └─userInfo.js vuex 用户数据(区域地图)
│ │ └─index.js vuex 数据整合(世界地图)
│ ├─views 父组件（路由页面）
│ ├─App.vue 页面入口文件
│ ├─main.js 主入口文件
├─env.dev 本地环境配置  
├─env.prod 线上生产环境配置  
├─env.test 线上测试环境配置  
├─.gitgnore 禁止提交至 git 配置
├─babel.config.js https://cli.vuejs.org/zh/config/#pluginoptions
├─package/package.lock.json npm 包环境配置文件  
└─vue.config.js webpack 辅助配置文件
