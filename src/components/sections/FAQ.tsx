import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'

/**
 * FAQ section with animated accordion items. Clicking a question smoothly
 * expands/collapses the answer with Framer Motion.
 */
export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('1')

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" className="section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-cyan w-[400px] h-[400px] right-1/4 bottom-0 opacity-8" />
      </div>

      <div className="container-xl relative z-10">
        <SectionHeader
          badge="✦ FAQ"
          title={
            <>
              Frequently asked{' '}
              <span className="gradient-text">questions</span>
            </>
          }
          description="Everything you need to know about Neurax AI. Can't find the answer? Our team is just a message away."
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <div
                className={`glass-card rounded-xl border overflow-hidden transition-all duration-300 ${
                  openId === item.id
                    ? 'border-primary-500/30'
                    : 'border-white/8 hover:border-white/15'
                }`}
              >
                {/* Question */}
                <button
                  id={`faq-${item.id}`}
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={openId === item.id}
                >
                  <span className="text-sm font-medium text-white leading-relaxed">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openId === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-colors ${
                        openId === item.id ? 'text-primary-400' : 'text-dark-500'
                      }`}
                    />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {openId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="h-px bg-white/5 mb-4" />
                        <p className="text-dark-400 text-sm leading-relaxed">
                          {item.answer}
                        </p>
                        {item.category && (
                          <span className="mt-4 inline-block badge text-xs">
                            {item.category}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-dark-400 text-sm">
            Still have questions?{' '}
            <a
              href="mailto:support@neurax.ai"
              className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
            >
              Contact our support team →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
