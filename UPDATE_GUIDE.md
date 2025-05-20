
# 🛠️ AI Scholar 个人网站内容修改指南

本项目基于 Next.js + TailwindCSS 构建，以下是如何修改内容的说明：

---

## 👤 修改个人信息（姓名、简介、社交链接）

文件位置：`pages/index.tsx`

修改内容：

```tsx
<h1 className="text-2xl font-bold">李彤</h1>               ← 姓名
<p>我是AI领域研究者...</p>                                 ← 简介

<a href="https://linkedin.com/in/yourprofile" ...>        ← LinkedIn
<a href="https://scholar.google.com/citations?user=..."   ← Google Scholar
<a href="mailto:your@email.com">Email</a>                 ← 邮箱
```

---

## 📰 修改近期动态

文件位置：`pages/index.tsx`

```tsx
<ul>
  <li>2025年5月：参加 CVPR 并发表论文。</li>
  <li>2025年4月：清华大学讲座。</li>
</ul>
```

---

## 🏆 修改奖项和论文

文件位置：`public/data/papers.json`

格式如下：

```json
{
  "awards": [
    "2024 国家自然基金优青",
    "2023 CVPR 最佳论文提名"
  ],
  "papers": [
    {
      "title": "My Paper Title",
      "authors": "Li, T. et al.",
      "conference": "NeurIPS 2024",
      "link": "https://example.com/paper.pdf"
    }
  ]
}
```

---

## 🖼️ 修改头像照片

文件位置：`public/profile.jpg`

→ 替换此图片为你的头像，保留文件名为 `profile.jpg`

---

## 🌍 地图中使用真实 IP 定位

文件位置：`components/LeafletMap.tsx`

1. 在代码中找到：

```ts
fetch("https://ipinfo.io/json?token=YOUR_TOKEN")
```

2. 替换为你从 [ipinfo.io](https://ipinfo.io/) 获取的真实 Token：

```ts
fetch("https://ipinfo.io/json?token=pk.xxx...")
```

---

## ✅ 本地运行项目

```bash
npm install
npm run dev
```

访问浏览器：`http://localhost:3000`

---

如需进一步部署、添加语言切换功能等，请联系开发者或继续使用说明。
