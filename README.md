# 电商数据追踪看板（GitHub Pages 直部署版）

这是纯静态前端版本，可直接部署到 GitHub Pages。

## 1. 你现在怎么部署

把以下文件放在仓库根目录（root）：

- `index.html`
- `overview.html`
- `amazon.html`
- `influencer.html`
- `social.html`
- `media.html`
- `dashboard.html`
- `styles.css`
- `auth.js`
- `overview.js`
- `channel.js`
- `influencer.js`
- `excel/manifest.json`
- `excel/红人S25数据追踪.xlsx`（或你的其他文件）

然后在 GitHub 仓库开启 Pages：

1. `Settings` -> `Pages`
2. `Source` 选择 `Deploy from a branch`
3. 分支选 `main`，目录选 `/ (root)`
4. 保存后等待发布

## 2. 登录规则（静态版）

- 密码在 `auth.js` 里（默认 `123456`）
- 登录后当前浏览器记忆 8 小时
- 超过 8 小时自动要求重新输入
- 点击右上角“退出”会立即清除登录状态

说明：  
GitHub Pages 无后端，不能做“真实按 IP 鉴权”。  
当前实现是“按浏览器本地存储记忆 8 小时”。

## 3. 页面结构

- `index.html`：密码入口页
- `overview.html`：数据总览
- `amazon.html`：亚马逊流量浮动
- `influencer.html`：红人流量
- `social.html`：社媒流量
- `media.html`：媒体流量

每个页面都支持：

- 上传 Excel/CSV
- 字段映射
- 折线图看板
- 明细数据表
- 导航点击跳转

## 4. 红人页面（influencer.html）自动计算说明

- 自动识别并汇总以下列：
  - 点击量
  - 总 DPV
  - ATC 总计
  - 购买总额
  - 商品销量总计
  - 品牌引流奖励计划
- 自动生成：
  - 顶部六个汇总 KPI 看板
  - 柱状图对比（六项指标总量）
  - Top 发布商点击量柱状图
  - 明细数据表
- 图表标题自动使用 Excel 文件名

## 5. excel 文件夹自动显示（适用于 GitHub Pages）

由于 GitHub Pages 不能自动列目录，红人页读取 `excel/manifest.json` 来显示可加载文件。

示例：

```json
{
  "files": [
    {
      "name": "红人S25数据追踪.xlsx",
      "path": "./excel/红人S25数据追踪.xlsx"
    }
  ]
}
```

你后续新增 Excel 文件时，把文件放到 `excel/` 并更新 `manifest.json` 即可自动在页面下拉框显示。
