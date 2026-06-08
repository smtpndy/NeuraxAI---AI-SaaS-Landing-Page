import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

/**
 * Final CTA section — conversion-focused banner with animated gradient,
 * strong headline, and dual action buttons.
 */
export default function CTASection() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="cta" className="section relative overflow-hidden">
      <div className="container-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden text-center"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 via-violet-600/20 to-cyan-600/20" />
          <div className="absolute inset-0 dot-grid opacity-20" />

          {/* Animated orbs inside */}
          <div className="absolute top-0 left-1/4 w-64 h-64 orb orb-primary opacity-30" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 orb orb-cyan opacity-20" />

          {/* Gradient border */}
          <div className="absolute inset-0 rounded-3xl gradient-border" />

          {/* Content */}
          <div className="relative z-10 px-8 py-20 sm:px-16 sm:py-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <span className="badge text-sm py-1.5 px-4">
                <Sparkles className="w-3.5 h-3.5 text-primary-400" />
                14-day free trial — no credit card required
              </span>
            </motion.div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
              Ready to build the{' '}
              <span className="gradient-text">future with AI?</span>
            </h2>

            <p className="text-lg text-dark-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join over 10,000 teams already using Neurax to power their AI workflows. 
              Get started in minutes and ship AI features faster than ever before.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="cta-get-started"
                onClick={() => scrollToSection('#pricing')}
                className="btn-primary px-8 py-4 text-base w-full sm:w-auto group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Building Free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
              <button
                id="cta-talk-to-sales"
                className="btn-secondary px-8 py-4 text-base w-full sm:w-auto"
              >
                Talk to Sales
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-dark-500 text-sm">
              {[
                '✓ No credit card required',
                '✓ Cancel anytime',
                '✓ SOC 2 certified',
                '✓ 99.99% uptime SLA',
              ].map((item) => (
                <span key={item} className="text-dark-400">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
