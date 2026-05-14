'use client'

import { motion } from 'framer-motion'
import { 
  Truck, 
  Search, 
  ShieldCheck, 
  RefreshCw, 
  Recycle as RecycleIcon, 
  Package 
} from 'lucide-react'

const steps = [
  {
    icon: Truck,
    title: 'Collection',
    description: 'We arrange pickup from your location with proper documentation.',
  },
  {
    icon: Search,
    title: 'Inspection',
    description: 'Assessment and inventory of all received assets.',
  },
  {
    icon: ShieldCheck,
    title: 'Data Wiping',
    description: 'Secure data destruction with verification and certification.',
  },
  {
    icon: RefreshCw,
    title: 'Refurbishment',
    description: 'Restoration and testing for devices that can be reused.',
  },
  {
    icon: RecycleIcon,
    title: 'Recycling',
    description: 'Proper recycling for components that cannot be refurbished.',
  },
  {
    icon: Package,
    title: 'Delivery',
    description: 'Distribution of refurbished devices or final documentation.',
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
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
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our approach to IT asset management
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center lg:text-center"
              >
                {/* Step Number & Icon */}
                <div className="relative z-10 mb-4 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 bg-card border-2 border-border rounded-2xl flex items-center justify-center group-hover:border-primary/50 transition-colors">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-primary-foreground">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
