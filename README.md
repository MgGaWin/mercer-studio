<div align="center">

# 🏛️ Mercer Studio

**高端私人豪宅室内设计工作室 · 沉浸式作品集网站**

[![Version](https://img.shields.io/github/v/release/MgGaWin/mercer-studio?style=flat-square&label=Version&color=blue)](https://github.com/MgGaWin/mercer-studio/releases)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux-0078d4?style=flat-square&logo=visualstudiocode)]()
[![License](https://img.shields.io/github/license/MgGaWin/mercer-studio?style=flat-square&color=green)](LICENSE)
[![Stars](https://img.shields.io/github/stars/MgGaWin/mercer-studio?style=flat-square&color=yellow)]()

---

[功能特性](#-功能特性) · [快速开始](#-快速开始) · [组件系统](#-组件系统) · [设计系统](#-设计系统) · [技术栈](#-技术栈) · [许可证](#-许可证)

</div>

## ✨ 功能特性

| 功能 | 说明 |
|:---|:---|
| 🎬 **全屏视频 Hero** | 沉浸式全屏视频背景 + 居中标题动画 |
| 🖱️ **自定义光标** | 隐藏系统光标，细圆环跟随鼠标 + 磁性按钮效果 |
| 🎞️ **视差滚动卡片** | 项目卡片 15% 垂直视差 + clip-path 裁剪揭示动画 |
| 🌾 **纸纹质感** | SVG 噪声纹理覆盖全局（opacity 0.025），混合模式 overlay |
| ✨ **文字揭示动画** | 滚动触发的字符逐个淡入，`whileInView` 单次触发 |
| 🧊 **毛玻璃导航栏** | 滚动后 sticky 导航栏添加 backdrop-blur 效果 |
| 🎭 **Preloader 幕帘** | "ATELIER" 品牌文字淡入 → 幕帘上滑揭示页面 |
| 📐 **非对称布局** | Philosophy 左图右文、Services 右图左文交替排列 |
| 📧 **联系表单** | 后端 Resend 邮件发送 |

## 🚀 快速开始

```bash
git clone https://github.com/MgGaWin/mercer-studio.git
cd mercer-studio
npm install
npm run dev
```

打开 **http://localhost:3000** 预览。

### 常用命令

| 命令 | 用途 |
|------|------|
| `npm run dev` | 启动开发服务器（热更新） |
| `npm run build` | 构建生产版本 |
| `npm run start` | 启动生产服务器（需先 build） |
| `npm run lint` | 代码检查 |

## 🧩 组件系统

| 组件 | 作用 |
|------|------|
| `Preloader` | 入场动画：ATELIER 淡入 → 幕帘上滑 |
| `Nav` | 毛玻璃导航栏，滚动时触发 backdrop-blur |
| `Hero` | 全屏视频背景 + 居中标题 + 滚动渐隐 |
| `Projects` | 全宽沉浸式项目卡片，视差滚动 + clip-path 裁剪揭示 |
| `Philosophy` | 品牌理念，左图右文布局 |
| `Services` | 服务范围，右图左文交替布局 |
| `Contact` | 联系方式，深色背景区域 |
| `CustomCursor` | 细圆环自定义光标，跟随鼠标 |
| `MagneticButton` | 磁性悬停按钮，光标靠近时吸附 |
| `TextReveal` | 滚动触发文字揭示，字符逐个淡入 |
| `ScrollProgress` | 页面顶部滚动进度条 |

### 动画细节

```tsx
// 项目卡片视差滚动
const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

// clip-path 裁剪揭示（非简单淡入）
initial={{ clipPath: "inset(8% 0% 8% 0%)" }}
animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}

// 悬停时移除暖色叠层
<div className="bg-gradient-to-br from-amber-900/10 via-transparent to-orange-900/5
                mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" />
```

## 🎨 设计系统

### 颜色

| 名称 | 色值 | 用途 |
|------|------|------|
| `background` | `#f0ece7` | 页面背景（暖米色） |
| `foreground` | `#2a2a2a` | 主文字（碳灰） |
| `text-secondary` | `#888888` | 次要文字 |
| `text-muted` | `#999999` | 辅助信息 |

### 字体

| 名称 | 字体 | 用途 |
|------|------|------|
| `font-sans` | Geist Sans | 正文、UI |
| `font-serif` | Playfair Display | 正文强调 |
| `font-display` | Cormorant Garamond | Hero 标题、项目标题 |

### 设计语言

- **静奢美学**（Quiet Luxury）：暖色调、低对比、克制的色彩运用
- **纸质纹理**：全局 SVG 噪声覆盖，混合模式 overlay，营造触感
- **非对称布局**：左图右文交替，打破网格的生硬感
- **全局隐藏光标**：`cursor: none !important`，用自定义组件替代

## 🛠️ 技术栈

- **Next.js 16** + React 19（App Router）
- **Tailwind CSS v4**（`@theme inline` 设计令牌）
- **Framer Motion**（滚动驱动动画、视差、clip-path）
- **Resend**（联系表单邮件发送）
- **TypeScript**

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源。

---

<div align="center">

**如果觉得有用，请给个 ⭐ Star 支持一下！**

</div>
