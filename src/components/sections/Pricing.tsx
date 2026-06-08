import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { pricingPlans } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'

/**
 * Pricing section with monthly/yearly toggle, three plan cards, and a
 * highlighted popular plan with gradient border.
 */
export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-primary w-[600px] h-[600px] left-1/2 top-0 -translate-x-1/2 opacity-8" />
      </div>

      <div className="container-xl relative z-10">
        <SectionHeader
          badge="✦ Pricing"
          title={
            <>
              Simple, transparent{' '}
              <span className="gradient-text">pricing</span>
            </>
          }
          description="Start free, scale as you grow. No hidden fees, no surprise charges. Cancel or change plans anytime."
        />

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-dark-400'}`}>
            Monthly
          </span>
          <button
            id="pricing-toggle"
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
              isYearly ? 'bg-primary-500' : 'bg-white/10'
            }`}
            aria-label="Toggle billing period"
          >
            <motion.div
              className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md"
              animate={{ x: isYearly ? 28 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-dark-400'}`}>
              Yearly
            </span>
            <span className="badge text-xs py-0.5 text-emerald-400 border-emerald-500/20 bg-emerald-500/10">
              Save 20%
            </span>
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? 'gradient-border scale-[1.02] lg:scale-105'
                  : 'border border-white/8'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-primary-500 to-violet-500 shadow-glow-sm">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div
                className={`p-8 rounded-2xl h-full flex flex-col ${
                  plan.popular
                    ? 'bg-gradient-to-b from-primary-500/10 to-dark-900/90 backdrop-blur-sm'
                    : 'glass-card'
                }`}
              >
                {/* Plan name & description */}
                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-end gap-2">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={isYearly ? 'yearly' : 'monthly'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="font-display text-5xl font-bold text-white"
                      >
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-dark-400 text-sm mb-2">/ month</span>
                  </div>
                  {isYearly && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-emerald-400 mt-1"
                    >
                      Billed ${plan.yearlyPrice * 12}/year — save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                    </motion.p>
                  )}
                </div>

                {/* CTA */}
                <button
                  id={`pricing-cta-${plan.id}`}
                  className={`w-full py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-300 mb-8 ${
                    plan.popular
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  <span className="relative z-10">{plan.ctaLabel}</span>
                </button>

                {/* Divider */}
                <div className="h-px bg-white/5 mb-8" />

                {/* Features list */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                          feature.included
                            ? 'bg-primary-500/20 text-primary-400'
                            : 'bg-white/5 text-dark-600'
                        }`}
                      >
                        {feature.included ? (
                          <Check className="w-2.5 h-2.5" strokeWidth={3} />
                        ) : (
                          <X className="w-2.5 h-2.5" strokeWidth={3} />
                        )}
                      </div>
                      <span
                        className={`text-sm ${
                          feature.included ? 'text-dark-200' : 'text-dark-600'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-dark-500 text-sm mt-12"
        >
          All plans include a 14-day free trial. No credit card required.{' '}
          <a href="#faq" className="text-primary-400 hover:text-primary-300 transition-colors">
            See FAQ for details →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
