# Bluneo.ai Hero Section

这是一个可以直接上传到 GitHub 的完整 Next.js 项目。页面包含一个黑色 AI / SaaS 风格 hero section，右侧主视觉由 8 个 CSS 玻璃蓝色椭圆花瓣组成，并使用 Framer Motion 做慢速旋转、漂浮、呼吸和 hover 动效。

## 本地运行

```bash
npm install
npm run dev
```

打开：

```text
http://localhost:3000
```

## 上传到 GitHub

把本目录里的所有文件上传到一个 GitHub 仓库。

推荐仓库名：

```text
ivf-notes
```

## 用 GitHub Pages 发布

这个项目已经带了 GitHub Actions workflow：

```text
.github/workflows/deploy.yml
```

上传后去仓库：

```text
Settings -> Pages
```

把 Source 设为：

```text
GitHub Actions
```

之后每次 push 到 `main`，GitHub 会自动构建并发布。

如果仓库名是 `ivf-notes`，发布地址通常是：

```text
https://你的用户名.github.io/ivf-notes/
```

## 主要文件

- `app/page.tsx`: 页面入口
- `components/BluneoHeroSection.tsx`: 核心组件
- `app/globals.css`: 全局样式和 Tailwind 引入
- `tailwind.config.ts`: Tailwind 配置
- `next.config.mjs`: 静态导出和 GitHub Pages 路径配置

## 依赖

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
