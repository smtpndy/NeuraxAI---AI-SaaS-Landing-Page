# Neurax AI — Landing Page

A premium, production-ready AI SaaS landing page built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- 🌑 Dark mode by default with glassmorphism effects
- 🎞 Smooth Framer Motion scroll animations
- 📱 Fully responsive (mobile, tablet, desktop, ultra-wide)
- ♿ Accessible with semantic HTML and ARIA labels
- ⚡ Fast Vite build system
- 🎨 Premium design system with custom design tokens

## 📦 Sections

| Section | Description |
|---|---|
| **Hero** | Animated headline, CTA buttons, floating dashboard mockup |
| **Trusted By** | Infinite marquee of company logos |
| **Features** | 6 glassmorphism feature cards with hover glow |
| **How It Works** | 3-step process with connecting progress lines |
| **AI Capabilities** | Metrics, stats, and animated progress bars |
| **Testimonials** | Masonry grid of reviews with star ratings |
| **Pricing** | Monthly/yearly toggle, 3 plans, popular highlight |
| **FAQ** | Animated accordion |
| **CTA** | Conversion-focused final call-to-action |
| **Footer** | Navigation, social links, copyright |

## 🚀 Getting Started

```bash
# 1. Enter the project directory
cd neurax-ai

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Or simply run the provided `start.bat` file by double-clicking it.

The app will be available at **http://localhost:5173**

## 🏗 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Sticky navbar with glassmorphism
│   │   └── Footer.tsx        # Full footer with links & social
│   ├── sections/
│   │   ├── Hero.tsx          # Hero with dashboard mockup
│   │   ├── TrustedBy.tsx     # Logo marquee
│   │   ├── Features.tsx      # Feature cards
│   │   ├── HowItWorks.tsx    # 3-step process
│   │   ├── AICapabilities.tsx# AI metrics & capabilities
│   │   ├── Testimonials.tsx  # Masonry testimonials
│   │   ├── Pricing.tsx       # Pricing plans
│   │   ├── FAQ.tsx           # Accordion FAQ
│   │   └── CTASection.tsx    # Final CTA banner
│   └── ui/
│       └── SectionHeader.tsx # Reusable section header
├── data/
│   └── index.ts              # All static page content
├── hooks/
│   └── useScrollAnimation.ts # Scroll animation hook & variants
├── types/
│   └── index.ts              # TypeScript interfaces
├── App.tsx                   # Root component
├── main.tsx                  # Entry point
└── index.css                 # Global styles & design tokens
```

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#050814` near-black |
| Primary | `#6366f1` Indigo |
| Secondary | `#8b5cf6` Violet |
| Accent | `#06b6d4` Cyan |
| Text Primary | `#f8fafc` |
| Text Muted | `#94a3b8` |

## 🛠 Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** — lightning-fast build tool
- **Tailwind CSS 3** — utility-first styling
- **Framer Motion 11** — production-ready animations
- **Lucide React** — consistent icon system
- **Inter + Syne** — Google Fonts typography

## 📝 Build for Production

```bash
npm run build
npm run preview
```
