# kora-blog

> 个人博客 生活随笔，开发心得，技术整理，个人展示等

## 项目启动

1. `外部包引入`：npm i（npm install）
2. `运行`：npm run dev || npm run src:dev（热启动）
3. `打包`：npm run build
4. `更新线上版本`：

    ① 手动提交：npm run build -> git 提交(地址：git@github.com:kora-KR/kora-kr.github.io.git)

    ② 脚本提交: sh deploy.sh <commit message>

## 维护管理

1. 维护新路由

-   创建自定义文件目录：建议 docs\src\.vuepress\theme\layouts
-   维护自定义页面索引：docs\src\.vuepress\theme\index.js

2. 维护文章集合

-   文本内需设置 Grop 标识，遵循唯一性、语义化

## 外部插件

1. `网易音乐播放`:

    - '@vuepress/plugin-back-to-top'
    - '@vuepress/plugin-medium-zoom'

2. `看板娘`：

    - '@vuepress-reco/vuepress-plugin-kan-ban-niang'

3. `动态标题`：

    - 'dynamic-title'

4. `分页器`：

    - '@vuepress-reco/vuepress-plugin-pagation'

5. `在线评论`：
    - 'vuepress-plugin-comment'

## 样式使用

1. `stylus`：[stylus](https://stylus.bootcss.com/)

## 主题库

1. `vuepressReco`：[vuepressReco](https://vuepress-theme-reco.recoluan.com/)

## 路由解析

    - docs/frame:  框架整理
    	- vue: vue集合
    	- uni: uni集合
    	- ionic: ionic集合
    	- weChart: 原生小程序集合
    	- harmonyOS: 鸿蒙系统
    	...

    - docs/stylus: 关于样式整理

    - docs/platform: 关于平台整理
    	> 前端平台共分为三大模块
    		1. 平台：可视化、可操作演示模板，其中包含私服插件 md 说明与演示，可细分为三大模块(组件、方法、小工具)
    		2. 脚手架：node 环境配置全局 HHXCli，实现命令行式快速项目搭建，目前支持 vue、uniapp、ionic 三方主流框架
    		3. NPM 私服：公司内部服务搭建私有组件库，提升安装、开发效率，保护非开源组件私有化

    	> 其中脚手架 HHXCli 已集成基础方法（如时间管理器、接口 API、crypto 加解密、缓存等），对于项目新手可实现搭建即可快速开发

    	> 三大主模块结合代码规范文档与 eslint 代码检测工具对于开发成本、交接成本与维护成本起到本质性减耗作用，其中脚手架与私服的更新迭代均会在平台进行同步展示，实现三方规范化整合。

    - docs/it:     关于零散技术整理

    - docs/guide:  关于代码规范整理

    - docs/essay:  关于生活随笔整理

    - docs/experience: 关于开发心得整理

## 目录结构解析

┌─.temp 热启动备份文件
│ └─...
├─src 静态文件
│ ├─.vuepress 核心文件
│ │ ├─components 自定义组件
│ │ ├─dist 打包静态文件
│ │ ├─public 静态资源(如图片、公用 js 等)
│ │ ├─styles 样式集合
│ │ ├─them 自定义主题(默认主题库 vuepress-theme-reco，此引用实现本地自定义)
| │ │ ├─components 自定义组件
| │ │ ├─helpers 静态 js 文件
| │ │ ├─images 静态图片资源
| │ │ ├─layouts 页面路由文件(此处文件会替代`默认自定义路由`)
| │ │ ├─locales 国际化
| │ │ ├─mixins mixin 合并
| │ │ ├─styles 样式集合
| │ │ └─enhanceApp.js 同下
| | | └─index.md 默认首页路由
│ │ ├─config.js 项目基础配置(基础配置、友链、插件等)
│ │ └─enhanceApp.js 增强文件解读(目前涉及问题：1、服务器渲染，故无法识别 window | document 对象，此处引入混合解决此问题)
| ├─about/config/guide... 默认自定义路由(.vuepress 本地化主体会覆盖对应路由)
| └─index.md 默认首页路由
├─.gitignore git 忽略文件
├─deploy.sh 命令部署脚本文件
├─package-lock.json 包文件备份
└─package.json 包文件管理

## 待开发功能

1. 访客记录 √
2. 广告接入
3. NavList 下拉菜单
