import { LucideIcon } from 'lucide-react'

// ── Navigation ────────────────────────────────────────────────────────
export interface NavItem {
  label: string
  href: string
  isExternal?: boolean
}

export interface NavGroup {
  title: string
  items: NavItem[]
}

// ── Features ──────────────────────────────────────────────────────────
export interface Feature {
  id: string
  icon: LucideIcon
  title: string
  description: string
  gradient: string
  glowColor: string
  tag?: string
}

// ── How It Works ──────────────────────────────────────────────────────
export interface Step {
  id: number
  title: string
  description: string
  icon: LucideIcon
  color: string
}

// ── AI Capabilities ───────────────────────────────────────────────────
export interface Capability {
  id: string
  icon: LucideIcon
  title: string
  description: string
  metric: string
  metricLabel: string
  color: string
}

export interface Stat {
  value: string
  label: string
  suffix?: string
}

// ── Testimonials ──────────────────────────────────────────────────────
export interface Testimonial {
  id: string
  name: string
  title: string
  company: string
  avatar: string
  content: string
  rating: number
  featured?: boolean
}

// ── Pricing ───────────────────────────────────────────────────────────
export interface PricingFeature {
  text: string
  included: boolean
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  features: PricingFeature[]
  popular?: boolean
  ctaLabel: string
  badge?: string
}

// ── FAQ ───────────────────────────────────────────────────────────────
export interface FAQItem {
  id: string
  question: string
  answer: string
  category?: string
}

// ── Trusted By ────────────────────────────────────────────────────────
export interface TrustedCompany {
  id: string
  name: string
  logo: string
}

// ── Footer ────────────────────────────────────────────────────────────
export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface SocialLink {
  name: string
  href: string
  icon: LucideIcon
}
