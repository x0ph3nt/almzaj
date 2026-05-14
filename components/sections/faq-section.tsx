'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What is IT Asset Disposition (ITAD)?',
    answer: 'IT Asset Disposition is the process of disposing of outdated or unwanted IT equipment in a secure and responsible way. This includes data removal, refurbishment for resale, and proper recycling of components that cannot be reused.',
  },
  {
    question: 'How do you handle data security?',
    answer: 'We use established data wiping procedures to ensure information is removed from devices before they are refurbished or recycled. We provide documentation of the data destruction process for your records.',
  },
  {
    question: 'What types of devices do you accept?',
    answer: 'We accept most IT equipment including desktop computers, laptops, servers, networking equipment, mobile phones, tablets, and printers. If you have specific equipment you are unsure about, please contact us.',
  },
  {
    question: 'Do you provide pickup services?',
    answer: 'Yes, we can arrange pickup from your location. We handle the collection process with proper documentation so you have a record of what was collected.',
  },
  {
    question: 'What happens to devices that cannot be refurbished?',
    answer: 'Devices and components that cannot be refurbished are sent to recycling facilities for proper disposal. We work to minimize waste and ensure materials are handled responsibly.',
  },
  {
    question: 'How can I get a quote?',
    answer: 'Contact us through our website, WhatsApp, or email with details about your equipment and requirements. We will review your needs and provide a proposal.',
  },
  {
    question: 'Where do you operate?',
    answer: 'We have offices in Saudi Arabia (established 2006), the United Arab Emirates (since 2020), and the United States (newly opened in 2025 in Albany, NY). Our main operations remain in the GCC region.',
  },
]

export function FAQSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
