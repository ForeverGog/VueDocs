# VuePressBlog

## 安装和启动

```bash
# clone the project
git clone https://github.com/AsheOne18/VueDocs.git

# enter the project directory
cd VueDocs

# install dependency
npm install # or yarn install

# develop
npm run dev # or yarn dev
```

### 注意

- 如果你的现有项目依赖了 webpack 3.x，我们推荐使用 [Yarn (opens new window)](https://classic.yarnpkg.com/zh-Hans/)而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。

## 目录结构

```text
.
├── .github   (可选，GitHub Actions所需文件)
│   ├── workflows
│   │   ├── baiduPush.yml (可选，百度定时自动推送)
│   │   └── ci.yml (可选，自动部署)
├── docs (必须，不要修改文件夹名称)
│   ├── .vuepress （同官方，查看：https://vuepress.vuejs.org/zh/guide/directory-structure.html#目录结构）
│   ├── @pages (可选，自动生成的文件夹，存放分类页、标签页、归档页)
│   ├── _posts (可选，专门存放碎片化博客文章的文件夹)
│   ├── <结构化目录>
│   └── index.md (首页)
├── theme-vdoing (可选，本地的vdoing主题)
├── utils  (可选，vdoing主题使用的node工具)
│   ├── modules
│   ├── config.yml (可选，批量操作front matter配置)
│   ├── editFrontmatter.js (可选，批量操作front matter工具)
├── baiduPush.sh (可选，百度推送命令脚本)
├── deploy.sh (可选，部署命令脚本)
│
└── package.json
```