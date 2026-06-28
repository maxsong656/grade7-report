# CLAUDE.md · 七年级组年度总结

## 项目状态
已上线，Cloudflare Pages + GitHub。

## 修改入口
编辑 `html-source/赵宗莉-七年级组年度总结-杀青报告-2025.html`

## 修改后发布
```bash
cd html-source
node embed-v2.js
cp 赵宗莉-…-2025.html ../deploy/index.html
sed -i '' 's|media/year-review.mp4|media/year-review-web.mp4|g' ../deploy/index.html
cd .. && wrangler pages deploy deploy --project-name=grade7-report
```

## 设计约束
- 灰底 #F0F0EE 全局统一，柠檬黄 #FFD500 仅作点缀（边框、标签、章节顶条）
- 标题：Songti SC 宋体衬线
- 正文：PingFang SC 无衬线，3vw
- 标签：SF Mono 等宽
- 教师页 38/62 分栏，contain 不裁切，文字居中
- 26 页不增删
- 导航栏已隐藏

## 已知问题
- 独立版 105MB，邮件无法发送
- PPT 需手动构建：`cd ppt-backup && node build-v2.js`
- 线上视频为压缩版（17MB），原版 45MB
