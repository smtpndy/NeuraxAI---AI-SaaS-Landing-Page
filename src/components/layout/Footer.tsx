import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { footerSections, socialLinks } from '@/data'

/**
 * Full-featured footer with navigation links, social links, and copyright.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 bg-dark-950/50">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display text-lg font-bold text-white">
                Neurax<span className="gradient-text"> AI</span>
              </span>
            </a>
            <p className="text-dark-400 text-sm leading-relaxed max-w-xs mb-6">
              The next-generation AI platform for teams that want to build, deploy, and scale intelligent applications without limits.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-dark-400 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Link sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-dark-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            © {currentYear} Neurax AI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-dark-500 text-sm">
            <span>Built with</span>
            <span className="text-red-400 mx-1">♥</span>
            <span>for the future of AI</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
