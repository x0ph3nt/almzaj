'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  ShieldCheck, 
  Clock, 
  Leaf, 
  Globe, 
  Workflow 
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Our staff has practical experience in electronics refurbishment, data handling, and logistics.',
  },
  {
    icon: ShieldCheck,
    title: 'Data Security',
    description: 'We follow established protocols to ensure your data and assets are handled securely.',
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    description: 'We work efficiently to meet agreed timelines and keep you informed throughout the process.',
  },
  {
    icon: Leaf,
    title: 'Responsible Recycling',
    description: 'Proper disposal and recycling practices to minimize environmental impact.',
  },
  {
    icon: Globe,
    title: 'GCC Expertise',
    description: 'Deep understanding of the Saudi and UAE markets with over 18 years of regional experience.',
  },
  {
    icon: Workflow,
    title: 'Clear Process',
    description: 'Organized workflows with documentation and tracking from collection to completion.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
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

export function WhyChooseUsSection() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
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
            Why Work With Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            What We Offer
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The benefits of working with our team
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="flex gap-4"
            >
              <div className="shrink-0">
                <div className="p-2.5 bg-primary/10 rounded-lg">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
