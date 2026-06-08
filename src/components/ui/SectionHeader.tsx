import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface SectionHeaderProps {
  badge?: string
  title: ReactNode
  description?: string
  centered?: boolean
  className?: string
}

/**
 * Reusable section header with optional badge, title, and description.
 * Supports gradient text in titles via JSX children.
 */
export default function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
          style={{ justifyContent: centered ? 'center' : 'flex-start' }}
        >
          <span className="section-label">{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-lg text-dark-400 max-w-2xl leading-relaxed"
          style={{ margin: centered ? '1rem auto 0' : '1rem 0 0' }}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
