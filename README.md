## 简介

- 这是一个和小伙伴一起用的`VuepressBlog`，用来记录一些学习，Bug
- 鲁迅曾经说过，如果一个`Bug没法在20秒内解决它`，在解决之后，一定要记录
- 网上冲浪固然有意思，但是充斥着各种`没用的解决方案`并被无限的`复制黏贴`
- 因此，有一个属于小伙伴们一起维护的`VuepressBlog`就固为重要
- 经常会感慨原来连`HelloWorld`不会写的自己，记录何尝不是一件好事

## 环境和启动

### 1. 环境

1.在您的桌面，轻轻的右键，找到**Git Bash Here**

1.1 在此之前，您需要安装[Git](https://git-scm.com/downloads)，还有[VS code](https://code.visualstudio.com/) 或 [WebStorm](https://www.jetbrains.com/webstorm/)

1.2 顺便再安装一下，[Node.js](https://nodejs.org/zh-cn/)，选择左边的长期维护版

1.3 装完Node.js记得把[Yarn](https://yarn.bootcss.com/docs/install/#windows-stable)也装了

为什么不用npm？别问，要用也不是不行，没说不能用

Yarn官网经常抽风，如果下载页面出现404，直接`win+R`输入`cmd`

```bash
# Windows 安装
npm install -g yarn --registry=https://registry.npm.taobao.org
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
# 装完顺便通过检查版本确认安装是否成功，失败就去问Google吧
yarn --version
```

### 2. 启动

```bash
# 克隆Project
git clone https://github.com/AsheOne18/VueDocs.git

# 进入VueDocs目录
cd VueDocs

# 安装依赖
yarn install # 或npm install 

# 启动
yarn docs:dev # 或 # npm run dev

# 万能的8080
http://localhost:8080/
```

### 注意

- 如果你的现有项目依赖了 webpack 3.x，我们推荐使用 [Yarn](https://classic.yarnpkg.com/zh-Hans/)而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。

