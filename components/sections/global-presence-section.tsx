'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const locations = [
  {
    country: 'Saudi Arabia',
    role: 'Headquarters',
    established: '2006',
    description: 'Our main operations center in Riyadh, where we have built our business over nearly two decades serving the Saudi market.',
    isPrimary: true,
  },
  {
    country: 'United Arab Emirates',
    role: 'Regional Branch',
    established: '2020',
    description: 'Our UAE office in Dubai and Ajman supports clients across the Emirates and the broader GCC region.',
    isPrimary: false,
  },
  {
    country: 'United States',
    role: 'New Market Entry',
    established: '2026',
    description: 'Our newest office in Albany, New York, established in 2026 as we begin expanding into the North American market.',
    isPrimary: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function GlobalPresenceSection() {
  return (
    <section id="global" className="py-24 sm:py-32 bg-background">
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
            Our Locations
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Where We Operate
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Established in the GCC, now growing into international markets
          </p>
        </motion.div>

        {/* Timeline/Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {locations.map((location, index) => (
            <motion.div
              key={location.country}
              variants={itemVariants}
              className={`relative group ${location.isPrimary ? 'lg:row-span-1' : ''}`}
            >
              <div
                className={`h-full p-8 rounded-2xl border transition-all duration-300 ${location.isPrimary
                  ? 'bg-primary/5 border-primary/20 hover:border-primary/40'
                  : 'bg-card border-border hover:border-primary/30 hover:bg-accent/50'
                  }`}
              >
                {/* Location Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div
                      className={`p-2 rounded-lg ${location.isPrimary ? 'bg-primary/10' : 'bg-muted'
                        }`}
                    >
                      <MapPin
                        className={`w-5 h-5 ${location.isPrimary ? 'text-primary' : 'text-muted-foreground'
                          }`}
                      />
                    </div>
                    {location.isPrimary && (
                      <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        Headquarters
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Est. {location.established}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {location.country}
                </h3>
                <p className="text-sm font-medium text-primary mb-4">{location.role}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {location.description}
                </p>

                {/* Timeline connector for desktop */}
                {index < locations.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-px bg-border" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* World Map Visual - Subtle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 relative"
        >
          <div className="aspect-[3/1] relative rounded-2xl bg-muted/30 border border-border overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Connecting businesses across continents
                </p>
                <div className="mt-4 flex items-center justify-center gap-8">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-sm font-medium">Riyadh</span>
                  </div>
                  <div className="w-16 h-px bg-border" />
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary/70" />
                    <span className="text-sm font-medium">Dubai</span>
                  </div>
                  <div className="w-16 h-px bg-border" />
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary/50" />
                    <span className="text-sm font-medium">Albany</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
