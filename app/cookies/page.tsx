import { Metadata } from 'next'
import { LegalPageLayout } from '@/components/legal-page-layout'

export const metadata: Metadata = {
  title: 'Cookie Policy | ALMZAJ USA',
  description: 'Cookie Policy for ALMZAJ USA Import & Export Inc. Learn how we use cookies and similar technologies.',
}

const sections = [
  {
    title: '1. Introduction',
    content: [
      'This Cookie Policy explains how ALMZAJ USA Import & Export Inc. ("ALMZAJ," "we," "us," or "our") uses cookies and similar tracking technologies when you visit our website. This policy should be read in conjunction with our Privacy Policy.',
      'By continuing to use our website, you consent to the use of cookies as described in this policy. You can manage your cookie preferences through your browser settings.',
    ],
  },
  {
    title: '2. What Are Cookies',
    content: [
      'Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.',
      'Cookies can be "persistent" (remaining on your device for a set period or until you delete them) or "session" cookies (deleted when you close your browser).',
    ],
  },
  {
    title: '3. Types of Cookies We Use',
    content: [
      'Essential Cookies: These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.',
      'Analytics Cookies: We use analytics cookies to understand how visitors interact with our website. These cookies help us improve our website by collecting and reporting information about your usage patterns.',
      'Functional Cookies: These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.',
      'Marketing Cookies: These cookies may be used to track visitors across websites and display relevant advertisements. We limit our use of marketing cookies and prioritize your privacy.',
    ],
  },
  {
    title: '4. Third-Party Cookies',
    content: [
      'Some cookies on our website are placed by third-party service providers, such as analytics tools and social media platforms. These third parties may collect information about your online activities over time and across different websites.',
      'We do not control these third-party cookies. Please refer to the respective privacy policies of these third parties for more information about their data practices.',
    ],
  },
  {
    title: '5. Cookie Management',
    content: [
      'Most web browsers allow you to control cookies through their settings. You can typically set your browser to refuse cookies or alert you when cookies are being sent. However, disabling certain cookies may affect the functionality of our website.',
      'To manage cookies in popular browsers: Chrome - Settings > Privacy and Security > Cookies; Firefox - Options > Privacy & Security > Cookies; Safari - Preferences > Privacy > Cookies; Edge - Settings > Privacy & Services > Cookies.',
    ],
  },
  {
    title: '6. Do Not Track Signals',
    content: [
      'Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Our website currently does not respond to DNT signals, but we respect your privacy choices as described in this policy and our Privacy Policy.',
    ],
  },
  {
    title: '7. Updates to This Policy',
    content: [
      'We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. Any changes will be posted on this page with an updated effective date.',
    ],
  },
  {
    title: '8. Contact Us',
    content: [
      'If you have any questions about our use of cookies, please contact us at: ALMZAJ USA Import & Export Inc., 165 Central Ave, Albany, NY 12206, United States. Phone: +971 563072259.',
    ],
  },
]

export default function CookiesPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      lastUpdated="January 2025"
      sections={sections}
    />
  )
}
