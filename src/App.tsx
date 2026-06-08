import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Layout
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Sections
import Hero from '@/components/sections/Hero'
import TrustedBy from '@/components/sections/TrustedBy'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import AICapabilities from '@/components/sections/AICapabilities'
import Testimonials from '@/components/sections/Testimonials'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import CTASection from '@/components/sections/CTASection'

/**
 * Root application component — assembles all landing page sections
 * with a global page entrance animation.
 */
function App() {
  // Smooth scroll polyfill for older browsers
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen bg-dark-950 text-dark-50 overflow-x-hidden"
      >
        {/* Global background elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Primary gradient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Page content */}
        <main>
          <Hero />
          <TrustedBy />
          <Features />
          <HowItWorks />
          <AICapabilities />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTASection />
        </main>

        {/* Footer */}
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}

export default App
