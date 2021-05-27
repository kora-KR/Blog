# kora-blog

> 个人博客 生活随笔，开发心得，技术整理，个人展示等

## 项目启动

1. `外部包引入`：npm i（npm install）
2. `运行`：npm run dev || npm run src:dev（热启动）
3. `打包`：npm run build
4. `更新线上版本`：

    ① npm run build -> git 提交(地址：git@github.com:kora-KR/kora-kr.github.io.git)

    ② 命令行执行.deploy.sh

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
