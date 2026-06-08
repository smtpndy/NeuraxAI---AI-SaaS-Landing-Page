import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { steps } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'

/**
 * How It Works section with a 3-step numbered process visualization
 * and connecting lines between steps.
 */
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-cyan w-[400px] h-[400px] -right-20 top-1/2 opacity-10" />
      </div>

      <div className="container-xl relative z-10">
        <SectionHeader
          badge="✦ How It Works"
          title={
            <>
              From zero to AI-powered{' '}
              <span className="gradient-text">in three steps</span>
            </>
          }
          description="Getting started with Neurax is remarkably simple. No ML expertise required — just connect, configure, and deploy."
        />

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-20 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px">
            <div className="h-full bg-gradient-to-r from-primary-500/20 via-cyan-500/20 to-emerald-500/20" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  {/* Arrow between cards (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <ArrowRight className="w-5 h-5 text-dark-600 rotate-90" />
                    </div>
                  )}

                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card rounded-2xl p-8 border border-white/8 group cursor-default relative overflow-hidden"
                  >
                    {/* Hover glow */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${step.color} rounded-2xl`}
                      style={{ opacity: 0, mixBlendMode: 'overlay' }}
                    />

                    {/* Step number badge */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center font-display font-bold text-lg text-white`}
                        style={{
                          boxShadow:
                            index === 0
                              ? '0 8px 24px rgba(99,102,241,0.4)'
                              : index === 1
                              ? '0 8px 24px rgba(34,211,238,0.4)'
                              : '0 8px 24px rgba(52,211,153,0.4)',
                        }}
                      >
                        {step.id}
                      </div>
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${step.color} bg-opacity-10 flex items-center justify-center`}
                        style={{ background: 'rgba(255,255,255,0.05)' }}
                      >
                        <Icon className="w-4 h-4 text-white/60" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 font-display">
                      {step.title}
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Animated progress indicator */}
                    <motion.div
                      className={`mt-6 h-1 rounded-full bg-gradient-to-r ${step.color}`}
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
