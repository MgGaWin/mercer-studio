# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| 命令 | 用途 |
|------|------|
| `npm run dev` | 启动开发服务器 (http://localhost:3000) |
| `npm run build` | 构建生产版本（检查错误） |
| `npm run start` | 启动生产服务器 |
| `npm run lint` | ESLint 代码检查 |

## Architecture

**Stack:** Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion + Google Fonts

**Project:** Mercer Studio — a luxury private residence interior design website. Magazine-style editorial layout, restrained animations, warm neutral palette (#f0ece7 background).

### Key files

```
src/app/
  layout.tsx          — Root layout: Geist + Playfair Display + Cormorant Garamond fonts, Preloader
  page.tsx            — Homepage: composes all sections
  globals.css         — Design tokens (@theme inline), global grain texture
src/components/
  Preloader.tsx       — Entry animation (once per session via sessionStorage)
  Nav.tsx             — Sticky nav with glass morphism, mobile hamburger menu, active section highlight
  Hero.tsx            — Full-screen video background, centered title, MagneticButton CTA
  Projects.tsx        — Full-bleed project showcase with parallax, grain overlay, warm tint
  Philosophy.tsx      — Left image + right text, clip-path reveal
  Services.tsx        — Alternating editorial layout (image/text swap per row)
  Contact.tsx         — Dark section with contact form + contact info
  BottomCTA.tsx       — "Your vision, our craft" CTA section
  Footer.tsx          — Minimal footer
  CustomCursor.tsx    — Thin ring cursor, auto-adapts color on dark sections
  MagneticButton.tsx  — Reusable magnetic hover button component
  TextReveal.tsx      — Character-by-character scroll reveal
  ScrollProgress.tsx  — Top 1px scroll progress bar
```

### Design tokens (globals.css)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `#f0ece7` | Page background (warm off-white) |
| `--color-foreground` | `#2a2a2a` | Primary text (charcoal) |
| `--color-text-secondary` | `#888888` | Secondary text |
| `--color-text-muted` | `#999999` | Muted labels |
| `--color-dark` | `#2a2a2a` | Contact section bg |
| `--color-darker` | `#222222` | Footer bg |
| `--font-sans` | Geist Sans | Body/UI text |
| `--font-serif` | Playfair Display | Section headings |
| `--font-display` | Cormorant Garamond | Hero title, project titles |

### Conventions

- Interactive components use `"use client"` directive; layout/page are Server Components
- All images in `public/images/` are WebP format (converted from PNG via Sharp)
- Hero background is a video file (`e_d_f_e_e_c_dfd_f_mp_.mp4`)
- Framer Motion for all animations; spring physics for cursor/buttons
- Custom cursor hidden on touch devices (checks `ontouchstart` / `maxTouchPoints`)
- Nav uses `IntersectionObserver` to highlight active section
