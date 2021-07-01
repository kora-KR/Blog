---
title: Git - 代码管理快速通关
des: git常用命令
date: 2021-07-01
author: Kora
tags:
    - git
    - 技术点
group: itGit
---

## Git 基础开发命令

### 项目搭建

<!-- - 拉取、分支管理、上传分支 -->

```js
// 1. 拉取
$ git clone <http/ssh(线上仓库)>
$ git pull origin dev // 一般clone会携带所有分支信息，不需要单独拉取（所需拉取仓库分支）

// 2. 分支管理
$ git branch -a // 查看分支
$ git branch <newBranch> // 新增分支(勿重名)
$ git checkout <newBranch> // 切换分支(如 git checkout develop)

// 3. 上传流程
$ git add .
$ git commit -m<提交日志> // (如 git commit -m'初始版本')
$ git push // 默认提交 clone 线上仓库，可以 git push origin \*\*不同仓库(不建议使用)

// 新建分支与新建分支提交差异(上传流程最后一步)
$ git push --set-upstream origin <newBranch> // 上传线上新分支(如 git push --set-upstream origin develop)
```

### 项目开发中

 <!-- 拉取、上传 -->

```js
/**
 * 注意：如果团队合作且同分支开发，每次提交代码必须遵循如下流程
 * 		拉取 -> 无冲突 -> 上传
 * 		(或)
 * 		拉取 -> 冲突 -> 回滚 -> 拉取 -> 回滚提取，合并 -> 上传
 * **/
// 1. 拉取
$ git pull
    // 冲突处理
	$ git stash // 本地回滚
	$ git pull
	$ git stash pop // 回滚提取(需到项目内手动解决冲突，可全局搜索`<<<<<<<<<<`)

// 2. 上传
$ 同上(项目搭建上传流程)
```

## Git 拓展

### 多私钥配置

[传送门](https://www.cnblogs.com/popfisher/p/5731232.html)

### 分支合并

```js
/**
 * 注意：
 *     1. 合并时，合并分支与被合并分支均需提交线上
 *     2. 若合并存在冲突，需手动解决冲突后提交代码(可全局搜索`<<<<<<<<<<`)
 * **/
$ git merge dev // dev分支合并至当前所在分支
```

### 删除分支

```js
// 1. 删除本地
$ git branch -D <分支名称> // 如 git branch -D develop
// 2. 删除线上
$ git push origin --delete <分支名称> // 如 git push origin --delete develop
```

### 分支重命名

```js
$ git branch -m <oldName newName> // 本地更名(如 git branch -m develop develop2)
$ git push --delete origin <oldName> // 删除远程老分支
$ git push origin <newName> // 上传新分支
$ git branch --set-upstream-to origin/<newName> // 本地与远程建立连接
```

### 删除无用 commit

```js
$ git log // 查看commitLog
$ git reset --hard <commit_id> // 本地回滚至指定commit_id
$ git push origin HEAD:master --force // 强制推送线上
```

### 切换至指定 commit

```js
$ git log // 查看commitLog
$ git checkout <commit_id> // 切换指定commit_id
$ git checkout -b <newBranch commit_id> // 本地新建newBranch分支记录commit_id
$ git push --set-upstream origin <newBranch> // 强制推送线上
```

### Tag 的问题

```js
/**
 * 注意：
 *     1. tag就是一个只读的branch，是静态的；
 *     2. branch是一个分支；tag是分支上的一个里程碑；
 *   **/
// 1. tag标记、提交
$ git add .
$ git commit -m “fixed some bugs”
$ git tag -a <tag名> -m <tag备注> // 标记tag(如 git tag -a 1.0.1 -m "Release version 1.0.1")
$ git push origin --tags

// 2. tag删除
$ git tag -d <tag名> // 删除本地(如 git tag -d 1.0.1)
$ git push origin :refs/tags/<tag名> // 删除线上(如 git push origin :refs/tags/1.0.1)
```

## 异常问题

### 推送报错

> GitLab: You are not allowed to force push code to a protected branch on this project

    解决：
    1. Settings -> Repository -> Protected Branches -> Unprotect // 不建议使用，处理完后建议重新打开
    2. Settings -> Repository -> Protected Branches -> Allowed to push配置可修改角色
