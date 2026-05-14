'use client'

import { motion } from 'framer-motion'
import { 
  Server, 
  Smartphone, 
  RefreshCw, 
  ShieldCheck, 
  Recycle, 
  Truck 
} from 'lucide-react'

const services = [
  {
    icon: Server,
    title: 'ITAD Services',
    description: 'IT Asset Disposition services to help businesses retire technology assets securely and responsibly.',
    features: [
      'Asset tracking and reporting',
      'Compliance documentation',
      'Value recovery',
      'End-of-life management',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Device Repair',
    description: 'Repair services for smartphones and tablets, including screen replacement, battery issues, and other common problems.',
    features: [
      'Screen and display repair',
      'Battery replacement',
      'Component repair',
      'Quality testing',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Electronics Refurbishment',
    description: 'Refurbishment services that restore used devices to working condition for resale or redeployment.',
    features: [
      'Functional testing',
      'Cosmetic restoration',
      'Software installation',
      'Grade classification',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Data Wiping',
    description: 'Secure data destruction services to ensure sensitive information is properly removed from devices before disposal or resale.',
    features: [
      'Certified processes',
      'Destruction certificates',
      'Chain of custody tracking',
      'Audit documentation',
    ],
  },
  {
    icon: Recycle,
    title: 'Electronics Recycling',
    description: 'Responsible recycling services for electronics that can no longer be refurbished or resold.',
    features: [
      'Proper e-waste disposal',
      'Material recovery',
      'Environmental compliance',
      'Recycling reports',
    ],
  },
  {
    icon: Truck,
    title: 'Import & Export',
    description: 'International trading and logistics for electronics, with experience in GCC and US markets.',
    features: [
      'Customs documentation',
      'International shipping',
      'Trade compliance',
      'Inventory management',
    ],
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-background">
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
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Services for the complete lifecycle of your technology assets
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-6 group-hover:bg-primary/15 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
