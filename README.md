<div align="center">
  <img src="source/images/logo.svg" alt="Warmpaper Logo" width="120">
  <h1>hexo-theme-warmpaper</h1>
  <p><em>「八千年前的陶工与今天的 AI，不约而同画出了同一个图形——有些直觉，比文明更古老。」</em></p>
  <p>一个温暖的 Hexo 博客主题，灵感来自 Claude 的配色方案。<br>米色背景搭配淡橙色方格草稿纸纹理，营造沉浸式阅读体验。</p>

  [![GitHub License](https://img.shields.io/github/license/finch-xu/hexo-theme-warmpaper?color=DA7756)](LICENSE)
  [![Hexo Version](https://img.shields.io/badge/hexo-%3E%3D5.0.0-DA7756)](https://hexo.io)
  [![Node Version](https://img.shields.io/badge/node-%3E%3D20-DA7756)](https://nodejs.org)
  [![GitHub Stars](https://img.shields.io/github/stars/finch-xu/hexo-theme-warmpaper?style=flat&color=DA7756)](https://github.com/finch-xu/hexo-theme-warmpaper)

  **在线预览**: [pidan.dev](https://pidan.dev) | [English](README_EN.md)
</div>

<table>
  <tr>
    <td><img src="screenshots/home.png" alt="首页"></td>
    <td><img src="screenshots/post.png" alt="文章页"></td>
  </tr>
</table>

---

## 特性

- Claude 风格配色（温暖米色 + 橙色强调）
- 淡橙色方格草稿纸背景
- 文章页单栏布局 + 右侧 TOC 目录（sticky 定位，滚动高亮）
- 首页卡片式文章列表
- 响应式设计（移动端自动隐藏 TOC）
- 霞鹜文楷 GB 字体（CDN 分片加载）

## 安装

将主题克隆到 Hexo 博客的 `themes` 目录：

```bash
cd your-hexo-blog
git clone https://github.com/finch-xu/hexo-theme-warmpaper.git themes/warmpaper
```

安装 EJS 渲染器（如果尚未安装）：

```bash
npm install hexo-renderer-ejs --save
```

在博客根目录的 `_config.yml` 中启用主题：

```yaml
theme: warmpaper
```

## 开发调试

### 前置条件

- Node.js >= 14
- Hexo CLI (`npm install -g hexo-cli`)

### 搭建开发环境

1. 创建一个测试用的 Hexo 博客：

```bash
hexo init hexo-test-blog
cd hexo-test-blog
npm install
npm install hexo-renderer-ejs --save
```

2. 将主题链接到博客的 themes 目录：

```bash
# 方式一：符号链接（推荐，修改即时生效）
ln -s /path/to/hexo-theme-warmpaper themes/warmpaper

# 方式二：直接克隆
git clone https://github.com/finch-xu/hexo-theme-warmpaper.git themes/warmpaper
```

3. 修改博客 `_config.yml`：

```yaml
theme: warmpaper
```

4. 创建一些测试文章（确保包含多级标题以测试 TOC）：

```bash
hexo new post "测试文章"
```

### 启动开发服务器

```bash
hexo clean && hexo server
```

访问 `http://localhost:4000` 预览。修改主题文件后刷新页面即可看到效果。

### 常用开发命令

```bash
# 清除缓存（修改模板后建议执行）
hexo clean

# 启动本地预览服务器
hexo server

# 启动服务器并监听文件变化
hexo server --draft

# 生成静态文件
hexo generate

# 清除 + 生成 + 预览（一步到位）
hexo clean && hexo generate && hexo server
```

### 静态预览

项目中包含 `preview.html`，可直接在浏览器中打开预览主题的视觉效果，无需搭建 Hexo 环境。

## Build（构建部署）

生成静态文件：

```bash
hexo clean && hexo generate
```

生成的文件位于 `public/` 目录，可部署到任何静态托管服务（GitHub Pages、Vercel、Netlify 等）。

### 部署到 GitHub Pages

```bash
npm install hexo-deployer-git --save
```

在博客 `_config.yml` 中配置：

```yaml
deploy:
  type: git
  repo: https://github.com/your-username/your-username.github.io.git
  branch: main
```

执行部署：

```bash
hexo clean && hexo deploy
```

## 主题配置

编辑主题目录下的 `_config.yml`：

```yaml
# 导航菜单
menu:
  Home: /
  Archives: /archives

# 个人资料卡片（首页文章列表上方）
profile:
  avatar: /images/avatar.png     # 头像图片路径
  description: "一句话简介"       # 个人简介
  links:                         # 社交链接（可配置任意数量）
    - name: GitHub
      url: https://github.com/yourname
      icon: github               # 支持: github, email, website, twitter, rss, bilibili, zhihu
    - name: Email
      url: mailto:your@email.com
      icon: email
    - name: Website
      url: https://yoursite.com
      icon: website

# 文章目录（右侧边栏）
toc:
  enable: true
  max_depth: 3
  min_depth: 2
  list_number: false

# 文章摘要链接文字
excerpt_link: Read More

# 页脚版权信息（留空则使用默认）
copyright: ""
```

## 目录结构

```
hexo-theme-warmpaper/
├── _config.yml              # 主题配置
├── package.json
├── layout/
│   ├── layout.ejs           # 基础 HTML 骨架
│   ├── index.ejs            # 首页
│   ├── post.ejs             # 文章详情页
│   ├── page.ejs             # 独立页面
│   ├── archive.ejs          # 归档页
│   ├── category.ejs         # 分类页
│   ├── tag.ejs              # 标签页
│   └── partial/
│       ├── head.ejs         # HTML head
│       ├── header.ejs       # 导航栏
│       ├── footer.ejs       # 页脚
│       ├── profile.ejs      # 个人资料卡片
│       ├── post-card.ejs    # 文章卡片
│       ├── pagination.ejs   # 分页
│       └── toc.ejs          # 目录侧边栏
└── source/
    ├── css/
    │   └── style.css        # 主样式表
    ├── images/
    │   └── logo.svg         # 主题默认 Logo
    └── js/
        └── main.js          # TOC 滚动追踪
```

## 字体引用

本主题使用以下外部字体资源：

### 霞鹜文楷 GB (LXGW WenKai GB)

用于全站排版的开源楷体字体（正文、导航栏、TOC 等均统一使用），基于 FONTWORKS Klee One 衍生，符合大陆 G 源字形标准。

- **字体原仓库**: https://github.com/lxgw/LxgwWenkaiGB
- **Webfont 分片包**: https://github.com/CMBill/lxgw-wenkai-gb-web
- **CDN (Regular)**: https://cdn.jsdelivr.net/npm/lxgw-wenkai-gb-web@latest/lxgwwenkaigb-regular/result.css
- **CDN (Medium)**: https://cdn.jsdelivr.net/npm/lxgw-wenkai-gb-web@latest/lxgwwenkaigb-medium/result.css
- **字体许可证**: [SIL Open Font License 1.1](https://openfontlicense.org/)

## 许可证

主题代码基于 [MIT License](LICENSE) 发布。

引用的字体资源遵循 [SIL Open Font License 1.1](https://openfontlicense.org/) 许可证。
