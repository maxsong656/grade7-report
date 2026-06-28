# 七年级组年度总结 · 杀青报告

> Action！七年级组的「杀青」报告 — 2025 学年期末教师汇报

## 线上地址

**🔗 https://grade7-report.pages.dev**

浏览器打开，`F` 全屏，翻页笔翻页。视频在第 25 页可直接播放。

## 目录结构

```
grade7-report/
├── html-source/     # HTML 源文件 + 独立版
│   ├── 赵宗莉-…-2025.html           # 源文件（引用本地图片）
│   └── 赵宗莉-…-2025-独立版.html     # 全内嵌 105MB
├── ppt-backup/      # PPT 构建脚本
│   └── build-v2.js                  # html2pptx 构建脚本
└── deploy/          # Cloudflare Pages 部署
    ├── index.html
    ├── images/      # 19 张照片
    └── media/       # 压缩视频 (17MB)
```

## 设计规范

| 项目 | 值 |
|------|-----|
| 配色 | 灰底 #F0F0EE + 柠檬黄 #FFD500 点缀 |
| 标题字体 | Songti SC（宋体衬线） |
| 正文字体 | PingFang SC（无衬线） |
| 标签字体 | SF Mono（等宽） |
| 页数 | 26 页 |
| 照片 | 19 张（原稿提取） |
| 视频 | 年度影像回顾 |

## 最近更新

- 全灰底色统一，去导航栏余白
- 封面左图右文单行标题
- 教师页照片 `contain` 不裁切，文字居中
- 活动页四分类（运动/艺术/实践/学科）
- 结语页左图右文铺满
- 视频页居中放大

## 操作

| 按键 | 功能 |
|------|------|
| `←` `→` | 翻页 |
| `Space` `Enter` | 下一页 |
| `F` | 全屏 |

## 更新部署

```bash
cd ~/Projects/02-tools/grade7-report
# 修改 html-source/ 下的源文件后
cd html-source && node embed-v2.js
cp 赵宗莉-七年级组年度总结-杀青报告-2025.html ../deploy/index.html
sed -i '' 's|media/year-review.mp4|media/year-review-web.mp4|g' ../deploy/index.html
cd .. && wrangler pages deploy deploy --project-name=grade7-report
```

## 技术栈

- 纯 HTML/CSS/JS
- WebGL 网格背景
- Cloudflare Pages
- GitHub: [maxsong656/grade7-report](https://github.com/maxsong656/grade7-report)
