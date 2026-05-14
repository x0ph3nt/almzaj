import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ALMZAJ USA | Enterprise ITAD & Electronics Solutions',
  description: 'ALMZAJ USA Import & Export Inc. - Leading provider of IT Asset Disposition, electronics refurbishment, secure data wiping, and device lifecycle management. Operating internationally since 2006.',
  keywords: ['ITAD', 'IT Asset Disposition', 'Electronics Refurbishment', 'Data Wiping', 'Device Recycling', 'Import Export', 'Electronics'],
  authors: [{ name: 'ALMZAJ USA Import & Export Inc.' }],
  openGraph: {
    title: 'ALMZAJ USA | Enterprise ITAD & Electronics Solutions',
    description: 'Leading provider of IT Asset Disposition, electronics refurbishment, and secure data wiping services. Operating internationally since 2006.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a2e' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
