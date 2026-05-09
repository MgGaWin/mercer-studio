# Premium Upgrade Plan — Luxury Interior Design Website

> **Goal:** Elevate from "clean template" to "private luxury residence studio" — editorial, immersive, premium feel.

---

## Phase 1: Entry Experience

### Task 1: Preloader
- Full-screen overlay with "ATELIER" text fade-in
- After 1.5s, overlay slides up revealing the page
- Use `#f0ece7` background matching site
- Framer Motion `AnimatePresence` for exit animation

### Task 2: Page-level Smooth Scroll
- Add `lenis` or CSS smooth-scroll for buttery scroll feel
- Subtle momentum-based scrolling

---

## Phase 2: Immersive Projects

### Task 3: Full-bleed Project Showcase
- Replace the 2-column card grid with full-width stacked sections
- Each project = one full viewport height
- Large background image + overlay text (project name, type, year)
- Scroll-triggered zoom/scale effect on images
- "View Project" CTA appears on hover

### Task 4: Horizontal Scroll Gallery (optional bonus)
- After the main projects, add a horizontal scrolling gallery strip
- Smaller curated images in a row, scroll-jacked

---

## Phase 3: Cursor & Micro-interactions

### Task 5: Custom Cursor
- Default: small dot (8px)
- On project images: expands to 80px circle with "View" text
- Smooth spring animation for expand/collapse
- Hide on mobile

### Task 6: Magnetic Buttons
- CTA buttons pull slightly toward cursor on hover
- Use Framer Motion `useMotionValue` + `useTransform`
- Subtle, not夸张

---

## Phase 4: Scroll Animations

### Task 7: Text Reveal on Scroll
- Headings clip-reveal from bottom (mask animation)
- Each line staggers in with slight delay
- Use Framer Motion `clipPath` animation

### Task 8: Parallax on Philosophy Section
- Studio image moves at different speed than text
- Subtle, 10-20% offset
- Creates depth without being distracting

---

## Phase 5: Visual Polish

### Task 9: Services Redesign
- Replace 3-column grid with alternating layout
- Image left + text right → Image right + text left
- Each service gets a full-width row with generous spacing

### Task 10: Contact Section Enhancement
- Add a subtle background texture or gradient
- CTA button with magnetic effect
- More breathing room
