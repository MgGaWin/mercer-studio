# Interior Design Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-end interior design studio homepage with STUDIO ANÓNIMO editorial aesthetic — magazine typography, generous whitespace, restrained motion, light neutral palette.

**Architecture:** Next.js App Router with Server Components for layout, isolated Client Components for interactive elements. Tailwind CSS v4 for styling. Framer Motion for scroll-triggered reveals. Playfair Display serif for headings, Geist Sans for body.

**Tech Stack:** Next.js 15, Tailwind CSS v4, Framer Motion, Playfair Display (Google Fonts), Geist Sans (next/font)

---

## File Structure

```
src/
  app/
    layout.tsx          — Root layout: fonts, metadata, html/body
    page.tsx            — Homepage: compose all sections
    globals.css         — Design tokens, Tailwind config, custom styles
  components/
    Nav.tsx             — Sticky navigation with glass morphism
    Hero.tsx            — Full-bleed video/image hero with serif title
    Projects.tsx        — 2-column project grid with hover effects
    Philosophy.tsx      — Left image, right text philosophy section
    Services.tsx        — 3-column services with dividers
    Contact.tsx         — Dark background contact/CTA section
    Footer.tsx          — Minimal footer
```

---

### Task 1: Install Dependencies

**Files:**
- Modify: `package.json` (via npm install)

- [ ] **Step 1: Install framer-motion**

Run:
```bash
npm install framer-motion
```

Expected: framer-motion added to dependencies in package.json

- [ ] **Step 2: Verify installation**

Run:
```bash
npm ls framer-motion
```

Expected: Shows installed version

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add framer-motion for scroll animations"
```

---

### Task 2: Configure Design Tokens & Fonts

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update globals.css with design tokens**

Replace `src/app/globals.css` entirely:

```css
@import "tailwindcss";

@theme inline {
  --color-background: #faf8f5;
  --color-foreground: #2a2a2a;
  --color-text-secondary: #888888;
  --color-text-muted: #999999;
  --color-dark: #2a2a2a;
  --color-darker: #222222;
  --font-sans: var(--font-geist-sans);
  --font-serif: var(--font-playfair);
  --font-mono: var(--font-geist-mono);
}

body {
  background: var(--color-background);
  color: var(--color-foreground);
}

/* Smooth scroll for anchor links */
html {
  scroll-behavior: smooth;
}

/* Selection color */
::selection {
  background: rgba(42, 42, 42, 0.12);
}
```

- [ ] **Step 2: Update layout.tsx with fonts and metadata**

Replace `src/app/layout.tsx` entirely:

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Atelier — Interior Design Studio",
  description:
    "A multidisciplinary design studio specializing in residential, hospitality, and commercial interiors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: Verify dev server starts**

Run:
```bash
npm run dev
```

Expected: Server starts without errors on http://localhost:3000

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "feat: configure design tokens, fonts (Geist + Playfair Display)"
```

---

### Task 3: Create Nav Component

**Files:**
- Create: `src/components/Nav.tsx`

- [ ] **Step 1: Create Nav component**

Create `src/components/Nav.tsx`:

```tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-500 ${
        scrolled
          ? "bg-[#faf8f5]/80 backdrop-blur-md border-b border-black/[0.04]"
          : "bg-transparent"
      }`}
    >
      <a
        href="#"
        className="font-serif text-sm md:text-base tracking-[0.3em] text-foreground"
      >
        ATELIER
      </a>
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[0.65rem] tracking-[0.2em] uppercase text-text-secondary hover:text-foreground transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
```

- [ ] **Step 2: Verify component compiles**

Run:
```bash
npm run build 2>&1 | head -30
```

Expected: No TypeScript errors for Nav component

- [ ] **Step 3: Commit**

```bash
git add src/components/Nav.tsx
git commit -m "feat: add sticky navigation with glass morphism on scroll"
```

---

### Task 4: Create Hero Component

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Create Hero component**

Create `src/components/Hero.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-end pb-16 pl-6 md:pl-10 overflow-hidden">
      {/* Background — replace with video or real image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4ccc4] via-[#c2b8ae] to-[#b0a498]" />
        {/* Uncomment below for video background */}
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-video.mp4"
        /> */}
      </div>

      {/* Hero content — bottom-left aligned */}
      <div className="relative z-10 max-w-[55%]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-[#2a2a2a]"
        >
          Interiors
          <br />
          that
          <br />
          breathe
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-5 text-[0.65rem] tracking-[0.2em] uppercase text-[#2a2a2a]/55"
        >
          Residential &mdash; Hospitality &mdash; Commercial
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="inline-flex items-center gap-2 mt-8 text-[0.7rem] tracking-[0.15em] uppercase text-[#5a5a5a] border-b border-[#5a5a5a] pb-1 hover:gap-3 transition-all duration-300"
        >
          View selected works
          <span className="text-sm">&rarr;</span>
        </motion.a>
      </div>

      {/* Vertical text indicator (optional) */}
      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 writing-mode-vertical text-[0.6rem] tracking-[0.2em] uppercase text-white/40 [writing-mode:vertical-rl]">
        Interior Design Studio
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify component compiles**

Run:
```bash
npm run build 2>&1 | head -30
```

Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: add full-bleed hero with serif title and fade-in animation"
```

---

### Task 5: Create Projects Component

**Files:**
- Create: `src/components/Projects.tsx`

- [ ] **Step 1: Create Projects component**

Create `src/components/Projects.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Hillside Residence",
    type: "Residential",
    year: "2024",
    image: "https://picsum.photos/seed/hillside/800/600",
  },
  {
    title: "Meridian Hotel Lobby",
    type: "Hospitality",
    year: "2023",
    image: "https://picsum.photos/seed/meridian/800/600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[0.65rem] tracking-[0.25em] uppercase text-text-muted mb-12"
        >
          Selected Works
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-[0.6rem] tracking-[0.2em] uppercase text-white/70">
                  {project.type} &mdash; {project.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-right"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.15em] uppercase text-text-secondary border-b border-text-muted pb-1 hover:text-foreground hover:border-foreground transition-colors duration-300"
          >
            View all projects
            <span>&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify component compiles**

Run:
```bash
npm run build 2>&1 | head -30
```

Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/Projects.tsx
git commit -m "feat: add projects grid with hover effects and scroll reveal"
```

---

### Task 6: Create Philosophy Component

**Files:**
- Create: `src/components/Philosophy.tsx`

- [ ] **Step 1: Create Philosophy component**

Create `src/components/Philosophy.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-10 border-t border-black/[0.06]"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[3/4] overflow-hidden"
        >
          <img
            src="https://picsum.photos/seed/studio/600/800"
            alt="Atelier studio"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-text-muted mb-8">
            Our Philosophy
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-foreground tracking-tight">
            We believe that great design is not about filling space, but about
            understanding what to leave empty.
          </blockquote>
          <p className="mt-6 text-sm leading-relaxed text-text-secondary max-w-[45ch]">
            Founded in 2018, Atelier is a multidisciplinary design studio
            specializing in residential, hospitality, and commercial interiors.
            Our approach centers on material honesty, spatial rhythm, and the
            quiet dialogue between light and form.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify component compiles**

Run:
```bash
npm run build 2>&1 | head -30
```

Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/Philosophy.tsx
git commit -m "feat: add philosophy section with image and quote"
```

---

### Task 7: Create Services Component

**Files:**
- Create: `src/components/Services.tsx`

- [ ] **Step 1: Create Services component**

Create `src/components/Services.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Residential",
    description:
      "Full-service interior design for private homes, apartments, and countryside retreats.",
  },
  {
    title: "Hospitality",
    description:
      "Bespoke environments for hotels, restaurants, and boutique spaces that tell a story.",
  },
  {
    title: "Commercial",
    description:
      "Workspaces and retail environments designed for both function and lasting impression.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 px-6 md:px-10 border-t border-black/[0.06]"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[0.65rem] tracking-[0.25em] uppercase text-text-muted mb-14"
        >
          Services
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`py-8 md:py-0 md:px-8 ${
                i < services.length - 1
                  ? "md:border-r md:border-black/[0.06]"
                  : ""
              }`}
            >
              <h3 className="font-serif text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-xs leading-relaxed text-text-secondary">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify component compiles**

Run:
```bash
npm run build 2>&1 | head -30
```

Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/Services.tsx
git commit -m "feat: add services section with 3-column layout"
```

---

### Task 8: Create Contact Component

**Files:**
- Create: `src/components/Contact.tsx`

- [ ] **Step 1: Create Contact component**

Create `src/components/Contact.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";

const contactInfo = [
  { label: "Email", value: "hello@atelier-studio.com" },
  { label: "Phone", value: "+1 (212) 847-3920" },
  { label: "Studio", value: "142 Wooster Street\nNew York, NY 10012" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 bg-dark text-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-white/40 mb-8">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight">
            Let&apos;s create
            <br />
            something
            <br />
            remarkable
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2"
        >
          {contactInfo.map((item) => (
            <div key={item.label} className="mb-8 last:mb-0">
              <p className="text-[0.6rem] tracking-[0.2em] uppercase text-white/40 mb-2">
                {item.label}
              </p>
              <p className="text-sm text-white/85 whitespace-pre-line">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify component compiles**

Run:
```bash
npm run build 2>&1 | head -30
```

Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/Contact.tsx
git commit -m "feat: add contact section with dark background"
```

---

### Task 9: Create Footer Component

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Create Footer component**

Create `src/components/Footer.tsx`:

```tsx
export default function Footer() {
  return (
    <footer className="py-6 px-6 md:px-10 bg-darker">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <p className="text-[0.55rem] tracking-[0.15em] uppercase text-white/30">
          &copy; 2024 Atelier Studio
        </p>
        <div className="flex items-center gap-6">
          {["Instagram", "Pinterest", "LinkedIn"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-[0.55rem] tracking-[0.12em] uppercase text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify component compiles**

Run:
```bash
npm run build 2>&1 | head -30
```

Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: add minimal footer with social links"
```

---

### Task 10: Compose Homepage

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Compose all sections in page.tsx**

Replace `src/app/page.tsx` entirely:

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Philosophy />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify full build**

Run:
```bash
npm run build
```

Expected: Build succeeds with no errors

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: compose homepage with all sections"
```

---

### Task 11: Final Visual Verification

- [ ] **Step 1: Start dev server and verify**

Run:
```bash
npm run dev
```

Expected: Server starts on http://localhost:3000

- [ ] **Step 2: Check all sections render**

Open http://localhost:3000 and verify:
- Nav is visible and sticky
- Hero is full-screen with serif title bottom-left
- Projects grid shows 2 cards with hover effect
- Philosophy section has image + quote
- Services shows 3 columns with dividers
- Contact section has dark background
- Footer is minimal at bottom

- [ ] **Step 3: Check responsive behavior**

Resize browser to mobile width (< 768px) and verify:
- Nav links hidden (mobile menu not implemented yet — acceptable)
- Hero text scales down
- All grids collapse to single column
- No horizontal scroll
