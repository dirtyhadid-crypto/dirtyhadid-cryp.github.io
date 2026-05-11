# IVF Notes

这是一个可以直接上传到 GitHub 的完整 Next.js 项目。网站标题是 `Work for JaJa Baby: From Age 0 to 100`，品牌名是 `IVF Notes`。

首页保留黑色 AI / SaaS 风格 hero section，右侧主视觉由 8 个 CSS 玻璃蓝色椭圆花瓣组成，并使用 Framer Motion 做慢速旋转、漂浮、呼吸和 hover 动效。

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

把 `bluneo-next-ready` 目录里面的所有文件和文件夹上传到 GitHub 仓库根目录。

需要保留这些文件夹结构，不要把 `app`、`components`、`lib`、`.github` 里面的文件摊平成一层：

```text
app/
components/
lib/
.github/workflows/
```

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
- `app/books/page.tsx`: Books 二级页面
- `app/books/[slug]/page.tsx`: 四本书三级内容页
- `app/ivf-workflow/page.tsx`: 试管流程笔记页面
- `components/BluneoHeroSection.tsx`: 首页动效核心组件
- `components/SiteHeader.tsx`: 子页面导航
- `components/BookCover.tsx`: 书籍小封面组件
- `lib/content.ts`: 书籍目录、章节笔记、IVF 专业整理内容
- `app/globals.css`: 全局样式和 Tailwind 引入
- `tailwind.config.ts`: Tailwind 配置
- `next.config.mjs`: 静态导出和 GitHub Pages 路径配置

## 页面路径

```text
/                  首页
/books             Books 二级页面
/books/assist-tech 实用人类辅助生殖技术
/books/zh-upper    中华妇产科学 上册
/books/zh-middle   中华妇产科学 中册
/books/zh-lower    中华妇产科学 下册
/ivf-workflow      试管流程笔记
```

## 依赖

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
