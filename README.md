# 七年级组年度总结 · 杀青报告

> Action！七年级组的「杀青」报告 — 2025 学年期末教师汇报

## 项目说明

赵宗莉老师用于全体教师大会的年度总结演示文稿。以"电影杀青"为概念，采用瑞士国际主义风格 + 柠檬黄夏天配色，26 页横向翻页。

## 线上地址

**🔗 https://grade7-report.pages.dev**

浏览器打开，`F` 全屏，翻页笔翻页。视频在第 25 页可直接播放。

## 目录结构

```
grade7-report/
├── html-source/     # HTML 源文件 + 独立版
│   ├── 赵宗莉-…-2025.html           # 源文件（引用本地图片）
│   └── 赵宗莉-…-2025-独立版.html     # 全内嵌 105MB，单文件可分享
├── ppt-backup/      # PPT 备用版
│   └── 赵宗莉-…-2025-备用.pptx      # 79MB，含视频
└── deploy/          # Cloudflare Pages 部署目录
    └── index.html                    # 线上版入口
```

## 设计规范

| 项目 | 值 |
|------|-----|
| 配色 | 米白 #FAFAF8 + 柠檬黄 #FFD500 |
| 标题字体 | Songti SC（宋体衬线） |
| 正文字体 | PingFang SC（无衬线） |
| 标签字体 | SF Mono（等宽） |
| 页数 | 26 页 |
| 照片 | 19 张（原稿提取） |
| 视频 | 年度影像回顾（115 秒） |

## 操作说明

| 按键 | 功能 |
|------|------|
| `←` `→` | 翻页 |
| `Space` `Enter` | 下一页 |
| `F` | 全屏 |
| `B` | 低功耗模式（关 WebGL） |

## 更新部署

```bash
# 修改 deploy/index.html 后
cd ~/Projects/02-tools/grade7-report
wrangler pages deploy deploy --project-name=grade7-report
```

## 技术栈

- 纯 HTML/CSS/JS，无框架
- WebGL 网格背景
- Cloudflare Pages 托管
- Motion One 动效库
