'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface LegalSection {
  title: string
  content: string | string[]
}

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  sections: LegalSection[]
}

export function LegalPageLayout({ title, lastUpdated, sections }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
              {title}
            </h1>
            <p className="mt-2 text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="multiple" className="w-full" defaultValue={sections.map((_, i) => `section-${i}`)}>
            {sections.map((section, index) => (
              <AccordionItem key={index} value={`section-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-5">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  {Array.isArray(section.content) ? (
                    <div className="space-y-4">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Company Info Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="text-sm text-muted-foreground space-y-2">
            <p className="font-medium text-foreground">ALMZAJ USA Import & Export Inc.</p>
            <p>165 Central Ave, Albany, NY 12206, United States</p>
            <p>Phone: +971 563072259</p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
