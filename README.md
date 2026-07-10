<div align="center">

# 🏛️ Mercer Studio

**高端私人豪宅室内设计工作室展示网站 · Next.js + Tailwind CSS v4**

[![Version](https://img.shields.io/github/v/release/MgGaWin/mercer-studio?style=flat-square&label=Version&color=blue)](https://github.com/MgGaWin/mercer-studio/releases)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux-0078d4?style=flat-square&logo=visualstudiocode)]()
[![License](https://img.shields.io/github/license/MgGaWin/mercer-studio?style=flat-square&color=green)](LICENSE)
[![Stars](https://img.shields.io/github/stars/MgGaWin/mercer-studio?style=flat-square&color=yellow)]()

---

[功能特性](#-功能特性) · [快速开始](#-快速开始) · [项目结构](#-项目结构) · [设计系统](#-设计系统) · [更新日志](#-更新日志) · [许可证](#-许可证)

</div>

## ✨ 功能特性

| 功能 | 说明 |
|:---|:---|
| 🎬 **全屏视频 Hero** | 沉浸式全屏视频背景 + 滚动动画 |
| ✨ **流畅动画** | Framer Motion 驱动的滚动触发动画 |
| 🖱️ **自定义光标** | 细圆环自定义光标 + 磁性按钮效果 |
| 📐 **响应式布局** | 完美适配桌面端和移动端 |
| 🎨 **高端设计** | 奢华品牌风格，Cormorant Garamond 字体 |
| 🔄 **Preloader** | ATELIER 品牌加载动画 |

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
| `npm run start` | 启动生产服务器 |
| `npm run lint` | 代码检查 |

## 📁 项目结构

```
src/
  app/
    layout.tsx          # 根布局：字体、Preloader、元数据
    page.tsx            # 首页：组装所有组件
    globals.css         # 全局样式：颜色、字体、动画
  components/
    Preloader.tsx       # 加载动画：ATELIER 品牌
    Nav.tsx             # 导航栏：毛玻璃效果
    Hero.tsx            # 全屏视频 + 滚动动画
    Projects.tsx        # 全宽瀑布式项目展示
    Philosophy.tsx      # 品牌理念（左图右文）
    Services.tsx        # 服务范围（右图左文）
    Contact.tsx         # 联系方式（深色背景）
    Footer.tsx          # 页脚
    CustomCursor.tsx    # 自定义光标
    MagneticButton.tsx  # 磁性按钮
    TextReveal.tsx      # 文字揭示动画
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

## 📋 更新日志

### v1.0.0
- 首次发布
- 全屏视频 Hero + 滚动动画
- 自定义光标 + 磁性按钮
- 响应式瀑布式项目展示
- 品牌理念 + 服务范围展示

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源。

---

<div align="center">

**如果觉得有用，请给个 ⭐ Star 支持一下！**

</div>
