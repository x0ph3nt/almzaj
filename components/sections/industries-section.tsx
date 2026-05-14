'use client'

import { motion } from 'framer-motion'
import { 
  Building2, 
  Landmark, 
  ShoppingBag, 
  Radio, 
  GraduationCap, 
  Heart 
} from 'lucide-react'

const industries = [
  {
    icon: Building2,
    title: 'Corporate Business',
    description: 'IT asset management services for businesses looking to upgrade, dispose of, or recycle their technology.',
  },
  {
    icon: Landmark,
    title: 'Government',
    description: 'Services for government agencies requiring secure data handling and proper documentation.',
  },
  {
    icon: ShoppingBag,
    title: 'Retail',
    description: 'Device lifecycle management for retail businesses and point-of-sale equipment.',
  },
  {
    icon: Radio,
    title: 'Telecom',
    description: 'Services for telecommunications companies managing mobile devices and network equipment.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Supporting schools and universities with device refresh programs.',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Secure handling of medical devices with proper data sanitization.',
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

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Industries We Serve
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Industries We Work With
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We serve a range of sectors across the GCC and beyond
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              variants={itemVariants}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/15 transition-colors">
                <industry.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {industry.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
