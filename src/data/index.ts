import {
  Brain,
  Zap,
  Shield,
  BarChart3,
  Globe,
  Code2,
  Cpu,
  LineChart,
  Lock,
  Layers,
  MessageSquare,
  Workflow,
  Github,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-react'
import type {
  Feature,
  Step,
  Capability,
  Stat,
  Testimonial,
  PricingPlan,
  FAQItem,
  TrustedCompany,
  FooterSection,
  SocialLink,
} from '@/types'

// ── Navigation ────────────────────────────────────────────────────────
export const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

// ── Trusted Companies ─────────────────────────────────────────────────
export const trustedCompanies: TrustedCompany[] = [
  { id: '1', name: 'Vercel', logo: 'Vercel' },
  { id: '2', name: 'Stripe', logo: 'Stripe' },
  { id: '3', name: 'Linear', logo: 'Linear' },
  { id: '4', name: 'Notion', logo: 'Notion' },
  { id: '5', name: 'Figma', logo: 'Figma' },
  { id: '6', name: 'Loom', logo: 'Loom' },
  { id: '7', name: 'Raycast', logo: 'Raycast' },
  { id: '8', name: 'Retool', logo: 'Retool' },
  { id: '9', name: 'Descript', logo: 'Descript' },
  { id: '10', name: 'Craft', logo: 'Craft' },
]

// ── Features ──────────────────────────────────────────────────────────
export const features: Feature[] = [
  {
    id: 'neural-processing',
    icon: Brain,
    title: 'Neural Processing Engine',
    description:
      'State-of-the-art transformer models process your data with human-level understanding, context awareness, and multi-modal reasoning.',
    gradient: 'from-primary-500 to-violet-500',
    glowColor: 'rgba(99,102,241,0.4)',
    tag: 'Core',
  },
  {
    id: 'lightning-speed',
    icon: Zap,
    title: 'Lightning-Fast Inference',
    description:
      'Sub-100ms response times powered by our globally distributed edge network. Scale from prototype to production without performance compromise.',
    gradient: 'from-yellow-400 to-orange-500',
    glowColor: 'rgba(251,191,36,0.4)',
    tag: 'Performance',
  },
  {
    id: 'enterprise-security',
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description:
      'SOC 2 Type II certified. End-to-end encryption, zero data retention, and private cloud deployment options for regulated industries.',
    gradient: 'from-emerald-400 to-teal-500',
    glowColor: 'rgba(52,211,153,0.4)',
    tag: 'Security',
  },
  {
    id: 'analytics-dashboard',
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description:
      'Granular insights into AI usage, performance metrics, and ROI tracking. Make data-driven decisions with beautiful, actionable dashboards.',
    gradient: 'from-cyan-400 to-blue-500',
    glowColor: 'rgba(34,211,238,0.4)',
    tag: 'Analytics',
  },
  {
    id: 'global-deployment',
    icon: Globe,
    title: 'Global Edge Deployment',
    description:
      'Deploy AI models across 32 regions worldwide. Automatic failover, geo-routing, and 99.99% uptime SLA for mission-critical applications.',
    gradient: 'from-violet-400 to-purple-600',
    glowColor: 'rgba(167,139,250,0.4)',
    tag: 'Infrastructure',
  },
  {
    id: 'developer-api',
    icon: Code2,
    title: 'Developer-First API',
    description:
      'RESTful and GraphQL APIs with SDKs for 15+ languages. Comprehensive documentation, interactive playground, and dedicated developer support.',
    gradient: 'from-pink-400 to-rose-500',
    glowColor: 'rgba(244,114,182,0.4)',
    tag: 'Developer',
  },
]

// ── How It Works ──────────────────────────────────────────────────────
export const steps: Step[] = [
  {
    id: 1,
    title: 'Connect Your Data',
    description:
      'Integrate with 200+ data sources in minutes using our no-code connectors or REST API. Your data stays encrypted and never leaves your control.',
    icon: Layers,
    color: 'from-primary-500 to-violet-500',
  },
  {
    id: 2,
    title: 'Train & Configure',
    description:
      'Fine-tune our foundation models on your domain-specific data. No ML expertise required — our AutoML engine handles the complexity for you.',
    icon: Cpu,
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 3,
    title: 'Deploy & Scale',
    description:
      'Push to production with a single click. Auto-scale to handle millions of requests, monitor performance in real-time, and iterate rapidly.',
    icon: Workflow,
    color: 'from-emerald-400 to-teal-500',
  },
]

// ── AI Capabilities ───────────────────────────────────────────────────
export const capabilities: Capability[] = [
  {
    id: 'nlp',
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'Understand intent, sentiment, entities, and context across 100+ languages with 97% accuracy.',
    metric: '97%',
    metricLabel: 'Accuracy Rate',
    color: 'from-primary-500 to-violet-500',
  },
  {
    id: 'predictive',
    icon: LineChart,
    title: 'Predictive Analytics',
    description: 'Forecast trends, detect anomalies, and surface opportunities before they happen using time-series AI.',
    metric: '3.2×',
    metricLabel: 'Revenue Impact',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 'security-ai',
    icon: Lock,
    title: 'Intelligent Security',
    description: 'Real-time threat detection, anomaly identification, and automated incident response powered by AI.',
    metric: '<50ms',
    metricLabel: 'Threat Response',
    color: 'from-emerald-400 to-teal-500',
  },
]

export const stats: Stat[] = [
  { value: '10B+', label: 'API calls processed monthly' },
  { value: '99.99%', label: 'Uptime SLA guaranteed' },
  { value: '150+', label: 'Enterprise customers' },
  { value: '<100ms', label: 'Average inference latency' },
]

// ── Testimonials ──────────────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    title: 'CTO',
    company: 'Prismatic Labs',
    avatar: 'SC',
    content:
      'Neurax AI transformed how our team processes data. We went from 3-week analysis cycles to real-time insights. The accuracy is genuinely impressive — it caught patterns our data scientists missed.',
    rating: 5,
    featured: true,
  },
  {
    id: '2',
    name: 'Marcus Rivera',
    title: 'Head of Engineering',
    company: 'StackForge',
    avatar: 'MR',
    content:
      'The API is beautifully designed and the documentation is exceptional. We integrated Neurax into our product in a weekend. Our customers now rave about the AI features we ship.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Anika Patel',
    title: 'VP of Product',
    company: 'Elevate SaaS',
    avatar: 'AP',
    content:
      'We evaluated 6 AI platforms. Neurax won on every dimension: accuracy, speed, pricing, and support. It\'s the rare product that actually delivers on its promises.',
    rating: 5,
  },
  {
    id: '4',
    name: 'James Okafor',
    title: 'Founder & CEO',
    company: 'Synthex AI',
    avatar: 'JO',
    content:
      'As a fellow AI startup, I\'m critical of the space. Neurax is the real deal. Their fine-tuning pipeline is world-class and the latency is production-ready out of the box.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Elena Vasquez',
    title: 'Director of Data Science',
    company: 'Meridian Health',
    avatar: 'EV',
    content:
      'HIPAA compliance was non-negotiable for us. Neurax made it seamless. The private cloud deployment and audit logging gave our security team full confidence.',
    rating: 5,
  },
  {
    id: '6',
    name: 'David Kim',
    title: 'Engineering Manager',
    company: 'CloudPulse',
    avatar: 'DK',
    content:
      'The real-time analytics dashboard alone is worth the price. Combined with predictive alerts, we\'ve reduced incidents by 67% and our on-call load has dropped dramatically.',
    rating: 5,
  },
]

// ── Pricing ───────────────────────────────────────────────────────────
export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for indie developers and early-stage startups exploring AI.',
    monthlyPrice: 29,
    yearlyPrice: 23,
    ctaLabel: 'Start Free Trial',
    features: [
      { text: '500K API calls / month', included: true },
      { text: '3 AI models', included: true },
      { text: 'Standard NLP processing', included: true },
      { text: 'Community support', included: true },
      { text: 'Basic analytics dashboard', included: true },
      { text: 'REST API access', included: true },
      { text: 'Custom model fine-tuning', included: false },
      { text: 'Private cloud deployment', included: false },
      { text: 'SLA guarantee', included: false },
      { text: 'Dedicated support', included: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For growing teams that need power, speed, and advanced AI capabilities.',
    monthlyPrice: 99,
    yearlyPrice: 79,
    ctaLabel: 'Get Started',
    popular: true,
    badge: 'Most Popular',
    features: [
      { text: '10M API calls / month', included: true },
      { text: 'All 15+ AI models', included: true },
      { text: 'Advanced NLP + Vision AI', included: true },
      { text: 'Priority support (4h response)', included: true },
      { text: 'Advanced analytics + exports', included: true },
      { text: 'REST + GraphQL API', included: true },
      { text: 'Custom model fine-tuning', included: true },
      { text: 'Private cloud deployment', included: false },
      { text: '99.9% SLA guarantee', included: true },
      { text: 'Dedicated support', included: false },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Unlimited scale, custom models, and white-glove support for large organizations.',
    monthlyPrice: 399,
    yearlyPrice: 319,
    ctaLabel: 'Contact Sales',
    features: [
      { text: 'Unlimited API calls', included: true },
      { text: 'All models + custom training', included: true },
      { text: 'Full AI suite + multimodal', included: true },
      { text: '24/7 dedicated support', included: true },
      { text: 'Custom dashboards & reporting', included: true },
      { text: 'All APIs + webhooks + SDKs', included: true },
      { text: 'Advanced fine-tuning pipeline', included: true },
      { text: 'Private cloud / on-prem deploy', included: true },
      { text: '99.99% SLA + uptime credits', included: true },
      { text: 'Dedicated success manager', included: true },
    ],
  },
]

// ── FAQ ───────────────────────────────────────────────────────────────
export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'How does the 14-day free trial work?',
    answer:
      'Start your trial with full Pro plan access — no credit card required. Explore all features, make API calls, and build integrations. At the end of 14 days, choose a plan that fits your needs or cancel with zero charges.',
    category: 'Billing',
  },
  {
    id: '2',
    question: 'What happens if I exceed my monthly API limit?',
    answer:
      'We\'ll notify you at 80% and 100% usage. You can enable auto-overage billing at a transparent per-call rate, or upgrade your plan. We never cut off access unexpectedly — your applications will always keep running.',
    category: 'Usage',
  },
  {
    id: '3',
    question: 'How is my data protected and kept private?',
    answer:
      'All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We\'re SOC 2 Type II and GDPR compliant. By default, we never use customer data to train our public models. Enterprise customers get private deployment options with complete data isolation.',
    category: 'Security',
  },
  {
    id: '4',
    question: 'Can I fine-tune models on my own data?',
    answer:
      'Yes — available on Pro and Enterprise plans. Upload your dataset, configure training parameters, and our AutoML pipeline handles the rest. Fine-tuned models are private to your account and deliver significantly higher accuracy on domain-specific tasks.',
    category: 'Technical',
  },
  {
    id: '5',
    question: 'What AI models are available?',
    answer:
      'We offer 15+ specialized models covering NLP (text classification, summarization, sentiment, NER, translation), Computer Vision (OCR, object detection, image understanding), Predictive Analytics, and Code Generation. We also support custom model deployment for Enterprise customers.',
    category: 'Technical',
  },
  {
    id: '6',
    question: 'Do you offer on-premise or private cloud deployment?',
    answer:
      'Yes — Enterprise customers can deploy Neurax in their own AWS, GCP, or Azure environment, or on-premise infrastructure. This gives you complete data sovereignty, network isolation, and compliance with strict regulatory requirements.',
    category: 'Enterprise',
  },
  {
    id: '7',
    question: 'What kind of support do you offer?',
    answer:
      'Starter plans include community forum access. Pro plans get priority email support with 4-hour response times. Enterprise plans receive 24/7 phone, email, and Slack support with a dedicated Customer Success Manager and guaranteed response times.',
    category: 'Support',
  },
  {
    id: '8',
    question: 'Can I cancel or change my plan at any time?',
    answer:
      'Absolutely. You can upgrade, downgrade, or cancel at any time from your dashboard. If you cancel, you\'ll retain access through the end of your billing period. Annual plans include a 30-day money-back guarantee.',
    category: 'Billing',
  },
]

// ── Footer ────────────────────────────────────────────────────────────
export const footerSections: FooterSection[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Changelog', href: '#' },
      { label: 'Roadmap', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'SDKs & Libraries', href: '#' },
      { label: 'Open Source', href: '#' },
      { label: 'Community', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'Compliance', href: '#' },
    ],
  },
]

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com', icon: Github },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
]
