'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Mail, MessageCircle } from 'lucide-react'

const offices = [
  {
    location: 'Saudi Arabia',
    role: 'Headquarters',
    city: 'Riyadh',
    isPrimary: true,
  },
  {
    location: 'United Arab Emirates',
    role: 'Regional Branch',
    city: 'Dubai / UAE',
    isPrimary: false,
  },
  {
    location: 'United States',
    role: 'New Office (2026)',
    address: '165 Central Ave, Albany, NY 12206',
    isPrimary: false,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-muted/30">
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
            Contact Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our services? Our team is ready to assist you across our global locations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-card rounded-2xl border border-border p-8 h-full">
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">USA Office</p>
                    <p className="text-muted-foreground leading-relaxed">
                      165 Central Ave<br />
                      Albany, NY 12206<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">Email Us</p>
                    <a
                      href="mailto:info@almzajusa.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-lg"
                    >
                      info@almzajusa.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">WhatsApp</p>
                    <a
                      href="https://wa.me/971563072259"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-lg"
                    >
                      +971 56 307 2259
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">Business Hours</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-border h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.048673677661!2d-73.7650093!3d42.6528573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0a3a3df04c7d%3A0x4a6c8b1f1f8b4c1a!2s165%20Central%20Ave%2C%20Albany%2C%20NY%2012206!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ALMZAJ USA Office Location"
            />
          </motion.div>
        </div>

        {/* Global Offices Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
            Our Global Presence
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div
                key={office.location}
                className={`p-6 rounded-xl border transition-all hover:shadow-md ${office.isPrimary
                  ? 'bg-primary/5 border-primary/20'
                  : 'bg-card border-border'
                  }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  {office.isPrimary && (
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      Headquarters
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  {office.location}
                </h4>
                <p className="text-sm text-primary font-medium mb-1">{office.role}</p>
                <p className="text-sm text-muted-foreground">
                  {office.address || office.city}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}