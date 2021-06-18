#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo "当前执行脚本文件为：$0，以实现自动化打包提交Blog git";

# 生成静态文件
npm run build

# 进入生成的文件夹
cd src/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A

echo "git commit message is：$1";
git commit -m "'$1'"

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
git push -f git@github.com:kora-KR/kora-kr.github.io.git master
echo "git push success"

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -