import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Zap } from 'lucide-react'

/**
 * Hero section with animated gradient background, orbs, dashboard mockup,
 * and primary/secondary CTA buttons.
 */
export default function Hero() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Animated orbs */}
      <motion.div
        className="orb orb-primary w-[600px] h-[600px] -top-40 -left-20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb-cyan w-[400px] h-[400px] top-1/2 -right-20"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="orb orb-violet w-[300px] h-[300px] bottom-10 left-1/4"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      <div className="container-xl relative z-10 py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-8"
          >
            <span className="badge text-sm py-1.5 px-4">
              <Sparkles className="w-3.5 h-3.5 text-primary-400" />
              Introducing Neurax AI v2.0 — 10× faster inference
              <ArrowRight className="w-3 h-3 text-primary-400" />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight text-balance"
          >
            The AI Platform
            <br />
            <span className="gradient-text">Built for Scale</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg sm:text-xl text-dark-400 max-w-2xl mx-auto leading-relaxed"
          >
            Neurax AI gives your team the power of enterprise-grade artificial intelligence.
            Automate complex workflows, unlock real-time insights, and ship AI-powered products
            in days — not months.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              id="hero-get-started"
              onClick={() => scrollToSection('#pricing')}
              className="btn-primary px-8 py-4 text-base group w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
            <button
              id="hero-book-demo"
              onClick={() => scrollToSection('#how-it-works')}
              className="btn-secondary px-8 py-4 text-base w-full sm:w-auto group"
            >
              <Play className="w-4 h-4 text-primary-400 group-hover:text-primary-300" />
              Book a Demo
            </button>
          </motion.div>

          {/* Social proof micro-stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex items-center justify-center gap-6 sm:gap-10 flex-wrap"
          >
            {[
              { icon: Users, value: '10,000+', label: 'Teams using Neurax' },
              { icon: Zap, value: '10B+', label: 'API calls / month' },
              { icon: TrendingUp, value: '99.99%', label: 'Uptime guarantee' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm">
                <Icon className="w-4 h-4 text-primary-400" />
                <span className="text-white font-semibold">{value}</span>
                <span className="text-dark-500">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          {/* Glow under mockup */}
          <div className="absolute inset-x-10 -bottom-8 h-20 bg-primary-500/20 blur-2xl rounded-full" />

          {/* Main mockup frame */}
          <div className="gradient-border rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
            <div className="glass-card rounded-2xl overflow-hidden border-0">
              {/* Browser-style top bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/5 rounded-md px-3 py-1 text-xs text-dark-500 w-48 mx-auto text-center">
                    app.neurax.ai/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 bg-gradient-to-br from-dark-900/80 to-dark-950/80 min-h-[420px]">
                <div className="grid grid-cols-12 gap-4 h-full">
                  {/* Sidebar */}
                  <div className="col-span-2 space-y-2">
                    {['Dashboard', 'Models', 'Analytics', 'API Keys', 'Settings'].map((item, i) => (
                      <div
                        key={item}
                        className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                          i === 0
                            ? 'bg-primary-500/20 text-primary-300 border border-primary-500/20'
                            : 'text-dark-500'
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Main content */}
                  <div className="col-span-10 space-y-4">
                    {/* Stat cards row */}
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { label: 'API Calls', value: '2.4M', change: '+12%', color: 'primary' },
                        { label: 'Accuracy', value: '97.3%', change: '+2.1%', color: 'emerald' },
                        { label: 'Latency', value: '84ms', change: '-8ms', color: 'cyan' },
                        { label: 'Models', value: '12', change: '+3', color: 'violet' },
                      ].map(({ label, value, change, color }) => (
                        <div
                          key={label}
                          className={`glass-card p-3 rounded-xl border-${color}-500/15`}
                        >
                          <div className="text-xs text-dark-500 mb-1">{label}</div>
                          <div className="text-base font-bold text-white">{value}</div>
                          <div className="text-xs text-emerald-400 mt-0.5">{change}</div>
                        </div>
                      ))}
                    </div>

                    {/* Chart area */}
                    <div className="glass-card rounded-xl p-4" style={{ height: '200px' }}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-dark-300">API Request Volume</span>
                        <span className="badge text-xs py-0.5">Last 7 days</span>
                      </div>
                      {/* Simulated chart bars */}
                      <div className="flex items-end gap-1.5 h-28">
                        {[45, 62, 38, 78, 55, 88, 72, 95, 65, 82, 90, 75, 98, 85].map((h, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 rounded-t"
                            style={{
                              height: `${h}%`,
                              background:
                                i === 13
                                  ? 'linear-gradient(to top, #6366f1, #8b5cf6)'
                                  : 'rgba(99,102,241,0.25)',
                            }}
                            initial={{ scaleY: 0, originY: 1 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 0.8 + i * 0.03, duration: 0.4 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Bottom row */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="glass-card rounded-xl p-4">
                        <div className="text-xs font-semibold text-dark-300 mb-3">Recent Models</div>
                        <div className="space-y-2">
                          {['NLP Classifier v3', 'Sentiment Engine', 'OCR Model'].map((model, i) => (
                            <div key={model} className="flex items-center justify-between">
                              <span className="text-xs text-dark-400">{model}</span>
                              <span className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-emerald-400' : 'bg-primary-500'}`} />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="glass-card rounded-xl p-4">
                        <div className="text-xs font-semibold text-dark-300 mb-3">Live Activity</div>
                        <div className="space-y-2">
                          {[
                            { text: 'Model deployed', time: '2s ago', color: 'emerald' },
                            { text: 'Training complete', time: '14s ago', color: 'primary' },
                            { text: 'API key rotated', time: '1m ago', color: 'cyan' },
                          ].map(({ text, time, color }) => (
                            <div key={text} className="flex items-center gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full bg-${color}-400 animate-pulse`} />
                              <span className="text-xs text-dark-400 flex-1">{text}</span>
                              <span className="text-xs text-dark-600">{time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating feature badge */}
          <motion.div
            className="absolute -top-4 -right-4 sm:-right-8 glass-card rounded-xl px-4 py-3 border border-primary-500/20 hidden sm:flex items-center gap-3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <Zap className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Model Trained</div>
              <div className="text-xs text-emerald-400">97.3% accuracy ↑</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 sm:-left-8 glass-card rounded-xl px-4 py-3 border border-cyan-500/20 hidden sm:flex items-center gap-3"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">84ms latency</div>
              <div className="text-xs text-cyan-400">Global edge active</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
