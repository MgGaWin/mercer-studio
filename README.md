# Mercer Studio — Private Residence Design

高端私人豪宅室内设计工作室网站。基于 Next.js + Tailwind CSS v4 构建。

---

## 快速开始

### 启动开发服务器

```bash
cd D:\idea\python\indoor-design-web
npm run dev
```

浏览器打开 **http://localhost:3000** 即可预览。

### 关闭开发服务器

在终端按 **Ctrl + C** 即可停止。

如果端口被占用，可以强制关闭：

```bash
# Windows
netstat -ano | findstr :3000
taskkill /F /PID <进程ID>
```

---

## 常用命令

| 命令 | 用途 |
|------|------|
| `npm run dev` | 启动开发服务器（热更新，改代码自动刷新） |
| `npm run build` | 构建生产版本（检查错误、优化资源） |
| `npm run start` | 启动生产服务器（需要先 build） |
| `npm run lint` | 代码检查 |

---

## 项目结构

```
src/
  app/
    layout.tsx          # 根布局：字体、Preloader、元数据
    page.tsx            # 首页：组装所有区块
    globals.css         # 设计令牌：颜色、字体、主题
  components/
    Preloader.tsx       # 进场动画（ATELIER 淡入 → 幕布上滑）
    Nav.tsx             # 吸顶导航（滚动毛玻璃）
    Hero.tsx            # 全屏视频背景 + 居中标题
    Projects.tsx        # 全幅沉浸式项目展示
    Philosophy.tsx      # 品牌理念（左图右文）
    Services.tsx        # 服务范围（交替图文布局）
    Contact.tsx         # 联系方式（深色背景）
    Footer.tsx          # 页脚
    CustomCursor.tsx    # 自定义光标（细线圆环）
    MagneticButton.tsx  # 磁性按钮组件
    TextReveal.tsx      # 文字揭示动画组件

public/
  images/               # 项目图片、服务图片、视频
```

---

## 设计系统

### 颜色

| 令牌 | 色值 | 用途 |
|------|------|------|
| `background` | `#f0ece7` | 页面背景（暖米色） |
| `foreground` | `#2a2a2a` | 主文字（炭灰） |
| `text-secondary` | `#888888` | 次文字 |
| `text-muted` | `#999999` | 弱化文字 |
| `dark` | `#2a2a2a` | Contact 区背景 |
| `darker` | `#222222` | Footer 背景 |

### 字体

| 令牌 | 字体 | 用途 |
|------|------|------|
| `font-sans` | Geist Sans | 正文、UI |
| `font-serif` | Playfair Display | 区块标题 |
| `font-display` | Cormorant Garamond | Hero 标题、项目标题 |

---

## 添加新项目

编辑 `src/components/Projects.tsx`，在 `projects` 数组中添加：

```tsx
{
  title: "项目名称",
  type: "Residential",  // 或 Hospitality / Commercial
  year: "2025",
  image: "/images/你的图片.jpg",  // 放到 public/images/
  description: "项目描述文案。",
}
```

---

## 替换 Hero 视频

将视频文件放到 `public/images/`，然后编辑 `src/components/Hero.tsx`：

```tsx
src="/images/你的视频.mp4"
```

---

## 部署

### Vercel（推荐）

```bash
npm i -g vercel
vercel
```

### 其他平台

```bash
npm run build
npm run start
```

生产服务器默认运行在 **http://localhost:3000**。

---

## 技术栈

- **Next.js 16** — React 框架（App Router）
- **Tailwind CSS v4** — 原子化 CSS
- **Framer Motion** — 动画引擎
- **Cormorant Garamond / Playfair Display / Geist** — 字体
