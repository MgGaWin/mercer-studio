# Interior Design Studio — Homepage Design Spec

## Overview

A high-end interior design studio website homepage inspired by STUDIO ANÓNIMO's editorial aesthetic. Magazine-style typography, generous whitespace, restrained motion, light neutral palette. All English.

**Stack:** Next.js (App Router) + Tailwind CSS v4 + Geist fonts + Playfair Display (serif for headings)

## Design Tokens

### Colors
- Background: `#faf8f5` (warm off-white)
- Text primary: `#2a2a2a` (charcoal)
- Text secondary: `#888888` (warm gray)
- Text muted: `#999999` (light gray)
- Accent: None — monochrome palette only
- Dark sections (Contact): `#2a2a2a` background, white text

### Typography
- **Headings (Hero):** Playfair Display, serif, `text-6xl md:text-8xl`, `tracking-tight`, `leading-[0.9]`
- **Section headings:** Playfair Display, serif, `text-3xl md:text-4xl`
- **Body/UI:** Geist Sans, `text-sm md:text-base`, `tracking-wide`, uppercase for labels
- **Nav/Labels:** Geist Sans, `text-xs`, `tracking-[0.2em]`, uppercase

### Spacing
- Section padding: `py-24 md:py-32 px-6 md:px-10`
- Container max-width: `max-w-[1400px] mx-auto`
- Section gaps: generous, 80-120px between sections

## Page Structure

### 1. Navigation (Sticky)
- Position: fixed top, full width
- Layout: Logo left, links right
- Style: `backdrop-blur-md bg-[#faf8f5]/80` on scroll
- Border: `border-b border-black/[0.04]`
- Links: Projects, Services, About, Contact
- Logo: "ATELIER" in serif, `tracking-[0.3em]`

### 2. Hero Section
- Height: `min-h-[100dvh]` (full viewport, dvh for mobile stability)
- Background: Full-bleed video or image, `object-cover`, no margins/padding
- Content: Bottom-left aligned, `pb-16 pl-10`
- Title: "Interiors that breathe" — Playfair Display, oversized serif
- Subtitle: "Residential — Hospitality — Commercial" in uppercase small text
- CTA: "View selected works →" with underline
- No centered layout — strictly left-aligned asymmetric

### 3. Selected Works (Projects Grid)
- Layout: 2-column grid, `grid-cols-1 md:grid-cols-2 gap-6`
- Each card: Aspect ratio 4:3, background image, gradient overlay at bottom
- Hover: Slight scale `scale-[1.02]` transition, show project info
- Project info: Name (serif) + Type — Year (uppercase small)
- "View all projects →" link, right-aligned below grid

### 4. Philosophy (About)
- Layout: 2-column, `grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12`
- Left: Studio photo (aspect-ratio 3:4)
- Right: Section label + philosophy quote (serif, `text-2xl`) + description paragraph
- Top border: `border-t border-black/[0.06]`

### 5. Services
- Layout: 3-column, `grid-cols-1 md:grid-cols-3`
- Each column: Title (serif) + description paragraph
- Separated by `border-r border-black/[0.06]` (last item no border)
- Services: Residential, Hospitality, Commercial

### 6. Contact / CTA
- Background: `#2a2a2a` (dark), white text
- Layout: 2-column grid
- Left: "Let's create something remarkable" (serif heading)
- Right: Email, Phone, Studio address
- Label style: uppercase, `text-[0.65rem]`, `tracking-[0.2em]`, `text-white/40`

### 7. Footer
- Background: `#222222`
- Layout: Copyright left, social links right
- Style: Minimal, `text-[0.6rem]`, `text-white/30`

## Motion & Interactions

**Motion Intensity: 3/10 (Restrained)**
- Page load: Subtle fade-in for hero text (`opacity 0→1`, `translateY 20px→0`, `duration: 1.2s`)
- Scroll reveals: Staggered fade-up for sections on viewport entry (Framer Motion `whileInView`)
- Hover: `scale-[1.02]` on project cards, `transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1)`
- No auto-playing animations, no parallax, no infinite loops
- Nav backdrop blur activates on scroll

## Responsive Behavior

- **Mobile (<768px):** Single column, hero text smaller (`text-5xl`), stacked layouts
- **Tablet (768-1024px):** 2-column grids maintained, adjusted spacing
- **Desktop (>1024px):** Full layout as described

## Technical Notes

- Use `next/font/google` for Playfair Display
- Hero video: Use `<video>` element with `autoPlay muted loop playsInline`
- Images: Use `next/image` with placeholder images (picsum.photos or similar)
- All interactive components: `'use client'` directive
- Server Components for static layout
- Tailwind v4 syntax (`@import "tailwindcss"`, `@theme inline`)

## Content

All placeholder content uses realistic interior design studio copy. No generic "Lorem ipsum" or startup slop names.
