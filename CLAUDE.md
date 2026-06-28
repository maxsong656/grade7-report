# CLAUDE.md · 七年级组年度总结

## 项目类型
已完成的演示文稿项目，HTML + PPT 双版本交付，Cloudflare Pages 部署。

## 技术栈
- 纯 HTML/CSS/JS，单文件
- WebGL Canvas 网格背景
- Motion One 动效（CDN）
- Google Fonts（Inter、Noto Sans SC、Noto Serif SC、JetBrains Mono）

## 修改指南

### 改文案
编辑 `html-source/赵宗莉-七年级组年度总结-杀青报告-2025.html`，搜关键词定位。

### 重新生成独立版
```bash
cd html-source
node embed-v2.js
```

### 更新线上版
```bash
cp html-source/赵宗莉-七年级组年度总结-杀青报告-2025.html deploy/index.html
sed -i '' 's|media/year-review.mp4|media/year-review-web.mp4|g' deploy/index.html
wrangler pages deploy deploy --project-name=grade7-report
```

### 重新生成 PPT
```bash
cd ppt-backup
NODE_PATH=$(npm root -g) node build-v2.js
```

## 设计约束
- 配色：米白 #FAFAF8 + 柠檬黄 #FFD500，不换色
- 字体：标题宋体衬线，正文 PingFang 无衬线，标签 SF Mono 等宽
- 页数：26 页固定，不增删
- 视频：原版 45MB，线上版压缩 17MB

## 已知问题
- 独立版 HTML 105MB，邮件无法发送，用云盘分享
- 视频需压缩后才能在 Cloudflare Pages 部署（25MB 限制）
- PPT 版无动画和 WebGL 背景，作为备用
