'use client'

import { motion } from 'framer-motion'
import { Building2, Users, Leaf, Award } from 'lucide-react'

const values = [
  {
    icon: Building2,
    title: 'Saudi-Founded',
    description: 'Established in 2006 in Saudi Arabia, we have built our reputation through consistent service and client relationships.',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'We work closely with each client to understand their needs and deliver solutions that fit their requirements.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Environmental responsibility guides our operations, with proper recycling and disposal practices.',
  },
  {
    icon: Award,
    title: 'Professional Standards',
    description: 'Our team brings practical experience in electronics refurbishment and IT asset management.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight text-balance">
              Our Story
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ALMZAJ began operations in Saudi Arabia in 2006, starting as a small electronics trading
                business. Over the years, we developed expertise in IT asset disposition, device
                refurbishment, and electronics recycling.
              </p>
              <p>
                In 2020, we opened our first branch in the United Arab Emirates, expanding our reach
                to serve more clients across the GCC region. Our Dubai and Ajman operations have allowed
                us to better support businesses in the Emirates.
              </p>
              <p>
                In 2026, we took our next step by establishing ALMZAJ USA Import & Export Inc. in Albany,
                New York. This new office represents our first venture into the North American market,
                and we are focused on building our presence here while continuing to serve our established
                client base in the Middle East.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Values Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <div className="p-2.5 bg-primary/10 rounded-lg w-fit mb-4">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
