# 辅助生殖阅读站点（单层上传版）

这个目录是给 GitHub 网页上传准备的“单层根目录版”。

## 适用场景

- 你在 GitHub 网页里只能逐个上传文件
- 不能保留 `docs/`、`assets/`、`books/`、`notes/` 这样的文件夹结构
- 需要把所有文件摊平到仓库根目录

## 你应该上传哪些文件

把这个目录里的**所有文件**上传到 GitHub 仓库根目录：

- `index.html`
- `assist-tech.html`
- `zh-upper.html`
- `zh-middle.html`
- `zh-lower.html`
- `ivf-workflow.html`
- `styles.css`
- `app.js`
- `paper-texture.svg`
- `ivf-journey.svg`
- `试管婴儿相关章节提炼.md`
- `试管流程笔记.md`
- `README.md`
- `.nojekyll`

## 上传后 GitHub 仓库根目录应该长这样

```text
README.md
.nojekyll
index.html
assist-tech.html
zh-upper.html
zh-middle.html
zh-lower.html
ivf-workflow.html
styles.css
app.js
paper-texture.svg
ivf-journey.svg
试管婴儿相关章节提炼.md
试管流程笔记.md
```

## GitHub Pages 设置

去仓库：

`Settings` → `Pages`

设置为：

- `Source`: `Deploy from a branch`
- `Branch`: `main`
- `Folder`: `/ (root)`

## 访问地址

如果你的仓库名是 `ivf-notes`，而 GitHub 用户名是 `你的用户名`，地址通常会是：

`https://你的用户名.github.io/ivf-notes/`

## 当前版本说明

- 已经改成根目录平铺结构
- 所有页面链接和资源路径已经改成同层引用
- 适合直接在 GitHub 网页逐个上传文件
