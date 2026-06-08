import { motion } from 'framer-motion'
import { features } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'

/**
 * Features section with 6 glassmorphism cards, gradient icons, and hover glow effects.
 */
export default function Features() {
  return (
    <section id="features" className="section">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb orb-primary w-[500px] h-[500px] top-1/2 left-1/4 opacity-10" />
      </div>

      <div className="container-xl relative z-10">
        <SectionHeader
          badge="✦ Features"
          title={
            <>
              Everything you need to{' '}
              <span className="gradient-text">build with AI</span>
            </>
          }
          description="Neurax provides a complete toolkit for integrating artificial intelligence into your products — from raw APIs to no-code automation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                className="glass-card-hover p-6 rounded-2xl group cursor-default"
              >
                {/* Tag */}
                {feature.tag && (
                  <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-md bg-white/5 text-dark-400 mb-4">
                    {feature.tag}
                  </span>
                )}

                {/* Icon */}
                <div
                  className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
                  style={{ boxShadow: `0 8px 24px ${feature.glowColor}` }}
                >
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-200 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className={`mt-5 h-px w-0 group-hover:w-full bg-gradient-to-r ${feature.gradient} transition-all duration-500 rounded-full opacity-50`}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
