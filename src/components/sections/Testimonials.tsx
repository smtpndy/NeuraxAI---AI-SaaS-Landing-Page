import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'

/**
 * Testimonials section displaying a masonry-style grid of customer reviews
 * with avatars, star ratings, and company info.
 */
export default function Testimonials() {
  return (
    <section id="testimonials" className="section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-violet w-[500px] h-[500px] -left-20 top-1/4 opacity-10" />
        <div className="orb orb-cyan w-[400px] h-[400px] -right-10 bottom-1/4 opacity-8" />
      </div>

      <div className="container-xl relative z-10">
        <SectionHeader
          badge="✦ Testimonials"
          title={
            <>
              Loved by teams{' '}
              <span className="gradient-text">around the world</span>
            </>
          }
          description="Thousands of companies use Neurax to build smarter products. Here's what they have to say."
        />

        {/* Masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="break-inside-avoid mb-6"
            >
              <motion.div
                whileHover={{ y: -3 }}
                className={`glass-card p-6 rounded-2xl border transition-all duration-300 cursor-default ${
                  testimonial.featured
                    ? 'border-primary-500/30 bg-gradient-to-br from-primary-500/8 to-violet-500/5'
                    : 'border-white/8 hover:border-white/15'
                }`}
              >
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-6 h-6 text-primary-500/50" />
                </div>

                {/* Star rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-dark-200 text-sm leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${getAvatarColors(index)})`,
                    }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-dark-500">
                      {testimonial.title} @ {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Featured badge */}
                {testimonial.featured && (
                  <div className="mt-4 pt-4 border-t border-primary-500/20">
                    <span className="badge text-xs">
                      ★ Featured Review
                    </span>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full border border-white/8">
            <div className="flex -space-x-2">
              {['SC', 'MR', 'AP', 'JO', 'EV'].map((avatar, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-dark-950 flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${getAvatarColors(i)})` }}
                >
                  {avatar[0]}
                </div>
              ))}
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-dark-300">
              <strong className="text-white">4.9/5</strong> from 2,000+ reviews
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/** Returns a gradient string for avatar backgrounds based on index. */
function getAvatarColors(index: number): string {
  const gradients = [
    '#6366f1, #8b5cf6',
    '#06b6d4, #3b82f6',
    '#10b981, #06b6d4',
    '#f59e0b, #ef4444',
    '#ec4899, #8b5cf6',
    '#14b8a6, #6366f1',
  ]
  return gradients[index % gradients.length]
}
