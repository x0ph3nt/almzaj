import { Metadata } from 'next'
import { LegalPageLayout } from '@/components/legal-page-layout'

export const metadata: Metadata = {
  title: 'Privacy Policy | ALMZAJ USA',
  description: 'Privacy Policy for ALMZAJ USA Import & Export Inc. Learn how we collect, use, and protect your personal information.',
}

const sections = [
  {
    title: '1. Introduction',
    content: [
      'ALMZAJ USA Import & Export Inc. ("ALMZAJ," "we," "us," or "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with us in any manner.',
      'This policy applies to all individuals who interact with ALMZAJ, including clients, prospective clients, website visitors, and business partners. By using our services or accessing our website, you consent to the practices described in this Privacy Policy.',
    ],
  },
  {
    title: '2. Information We Collect',
    content: [
      'Personal Information: We may collect personal information that you voluntarily provide to us, including but not limited to: name, email address, phone number, company name, job title, mailing address, and any other information you choose to provide when contacting us or requesting our services.',
      'Business Information: For our IT Asset Disposition (ITAD) services, we may collect information about your organization, including asset inventories, equipment details, and other business-related information necessary to provide our services.',
      'Automatically Collected Information: When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.',
    ],
  },
  {
    title: '3. How We Use Your Information',
    content: [
      'We use the information we collect for various purposes, including: providing and maintaining our ITAD services, processing your inquiries and service requests, communicating with you about our services and updates, improving our website and services, complying with legal obligations, and protecting our rights and the rights of third parties.',
      'We do not sell, rent, or trade your personal information to third parties for marketing purposes. We may share your information with trusted service providers who assist us in operating our business, subject to strict confidentiality obligations.',
    ],
  },
  {
    title: '4. Data Security',
    content: [
      'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure data storage, access controls, and regular security assessments.',
      'Given the nature of our ITAD services, we maintain rigorous security protocols for handling client data and assets. All data processing activities are conducted in accordance with industry best practices and applicable data protection regulations.',
    ],
  },
  {
    title: '5. International Data Transfers',
    content: [
      'ALMZAJ operates internationally with locations in Saudi Arabia, the United Arab Emirates, and the United States. Your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.',
      'When transferring data across borders, we implement appropriate contractual protections and comply with relevant international data transfer mechanisms.',
    ],
  },
  {
    title: '6. Your Rights',
    content: [
      'Depending on your location, you may have certain rights regarding your personal information, including: the right to access your personal information, the right to correct inaccurate information, the right to request deletion of your information, the right to restrict processing, the right to data portability, and the right to withdraw consent.',
      'To exercise any of these rights, please contact us using the information provided at the end of this policy. We will respond to your request within the timeframes required by applicable law.',
    ],
  },
  {
    title: '7. Cookies and Tracking Technologies',
    content: [
      'Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings. For more information, please see our Cookie Policy.',
    ],
  },
  {
    title: '8. Third-Party Links',
    content: [
      'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.',
    ],
  },
  {
    title: '9. Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website with a new effective date.',
    ],
  },
  {
    title: '10. Contact Us',
    content: [
      'If you have any questions about this Privacy Policy or our privacy practices, please contact us at: ALMZAJ USA Import & Export Inc., 165 Central Ave, Albany, NY 12206, United States. Phone: +971 563072259.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="January 2025"
      sections={sections}
    />
  )
}
