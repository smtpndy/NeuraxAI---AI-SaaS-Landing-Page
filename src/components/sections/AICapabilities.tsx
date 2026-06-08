import { motion } from 'framer-motion'
import { capabilities, stats } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'

/**
 * AI Capabilities section showcasing key AI features with animated
 * metric counters and capability cards.
 */
export default function AICapabilities() {
  return (
    <section id="capabilities" className="section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/3 to-transparent" />
        <div className="orb orb-primary w-[600px] h-[600px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-8" />
      </div>

      <div className="container-xl relative z-10">
        <SectionHeader
          badge="✦ AI Capabilities"
          title={
            <>
              Intelligence that <span className="gradient-text">adapts and scales</span>
            </>
          }
          description="Our AI models are purpose-built for enterprise workloads — delivering accuracy, speed, and reliability at any scale."
        />

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-3xl lg:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-dark-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="relative glass-card rounded-2xl p-8 border border-white/8 overflow-hidden group cursor-default"
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${cap.color} transition-opacity duration-500`}
                />

                {/* Top metric */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cap.color} flex items-center justify-center`}
                    style={{
                      boxShadow:
                        index === 0
                          ? '0 8px 24px rgba(99,102,241,0.4)'
                          : index === 1
                          ? '0 8px 24px rgba(34,211,238,0.4)'
                          : '0 8px 24px rgba(52,211,153,0.4)',
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>

                  <div className="text-right">
                    <div className="font-display text-3xl font-bold gradient-text leading-none">
                      {cap.metric}
                    </div>
                    <div className="text-xs text-dark-500 mt-0.5">{cap.metricLabel}</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 font-display">
                  {cap.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed">{cap.description}</p>

                {/* Animated progress bar */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs text-dark-500 mb-2">
                    <span>Performance score</span>
                    <span className="text-primary-400">
                      {cap.metric.includes('%') ? cap.metric : '98%'}
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${cap.color}`}
                      initial={{ width: '0%' }}
                      whileInView={{ width: cap.metric.includes('%') ? cap.metric : '95%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 + index * 0.2, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
