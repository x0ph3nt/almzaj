'use client'

import Link from 'next/link'
import { Linkedin, Twitter, MessageCircle } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'ITAD Services', href: '#services' },
    { label: 'Mobile Repair', href: '#services' },
    { label: 'Refurbishment', href: '#services' },
    { label: 'Data Wiping', href: '#services' },
    { label: 'Recycling', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Global Presence', href: '#global' },
    { label: 'Industries', href: '#industries' },
    { label: 'Contact', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Data Protection', href: '/data-protection' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold tracking-tight">
                  ALMZAJ USA
                </span>
                <span className="text-xs text-background/60">
                  Import & Export Inc.
                </span>
              </div>
            </Link>
            <p className="text-background/70 max-w-sm mb-6 leading-relaxed">
              A GCC-based electronics and ITAD company serving businesses in Saudi Arabia,
              UAE, and recently expanding into the United States.
            </p>
            {/* <div className="flex items-center gap-4">
              <a
                href="https://wa.me/971563072259"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="py-6 border-t border-background/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-background/50">
              <span>Established in Saudi Arabia, 2006</span>
              <span className="hidden sm:inline">•</span>
              <span>ITAD & Electronics Services</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>
              © {new Date().getFullYear()} ALMZAJ USA Import & Export Inc. All rights reserved.
            </p>
            <p>
              Saudi Arabia • United Arab Emirates • United States
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
