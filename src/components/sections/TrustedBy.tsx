import { motion } from 'framer-motion'
import { trustedCompanies } from '@/data'

/**
 * "Trusted By" section with an infinite marquee of company logos.
 */
export default function TrustedBy() {
  // Duplicate for seamless looping
  const logos = [...trustedCompanies, ...trustedCompanies]

  return (
    <section id="trusted-by" className="relative py-16 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-dark-950 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-dark-950 to-transparent pointer-events-none" />

      <div className="container-xl mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-dark-500 uppercase tracking-widest"
        >
          Trusted by teams at world-class companies
        </motion.p>
      </div>

      {/* Marquee track */}
      <div className="flex overflow-hidden">
        <div className="marquee-track flex items-center gap-12 whitespace-nowrap">
          {logos.map((company, index) => (
            <div
              key={`${company.id}-${index}`}
              className="flex items-center justify-center px-6 py-2 opacity-40 hover:opacity-70 transition-opacity duration-300 cursor-default select-none"
            >
              <LogoText name={company.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Renders a stylized text logo for each company.
 */
function LogoText({ name }: { name: string }) {
  return (
    <span
      className="text-white font-display font-bold text-xl tracking-tight"
      style={{ fontVariantNumeric: 'tabular-nums' }}
    >
      {name}
    </span>
  )
}
