import { Metadata } from 'next'
import { LegalPageLayout } from '@/components/legal-page-layout'

export const metadata: Metadata = {
  title: 'Terms & Conditions | ALMZAJ USA',
  description: 'Terms and Conditions for ALMZAJ USA Import & Export Inc. services and website usage.',
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing or using the services provided by ALMZAJ USA Import & Export Inc. ("ALMZAJ," "we," "us," or "our"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services or access our website.',
      'These terms apply to all visitors, users, and clients who access or use our services, including IT Asset Disposition (ITAD), electronics refurbishment, data wiping, recycling, and import/export services.',
    ],
  },
  {
    title: '2. Services Description',
    content: [
      'ALMZAJ provides comprehensive IT asset lifecycle management services, including but not limited to: IT Asset Disposition (ITAD), mobile device repair, electronics refurbishment, secure data wiping and destruction, electronics recycling, and import/export logistics.',
      'All services are provided in accordance with applicable laws, regulations, and industry best practices. Specific service terms, pricing, and deliverables will be outlined in individual service agreements or quotes provided to clients.',
    ],
  },
  {
    title: '3. Service Agreements',
    content: [
      'Prior to the commencement of services, ALMZAJ and the client will execute a service agreement detailing the scope of work, pricing, timelines, and other relevant terms. These Terms and Conditions are incorporated into all service agreements by reference.',
      'Any modifications to service agreements must be made in writing and signed by authorized representatives of both parties.',
    ],
  },
  {
    title: '4. Client Responsibilities',
    content: [
      'Clients are responsible for: providing accurate information about assets and equipment, ensuring proper authorization to dispose of or transfer assets, removing all personal or proprietary data not intended for destruction (where applicable), complying with all applicable laws regarding the transfer of equipment, and providing safe and reasonable access for equipment pickup.',
      'Clients warrant that they have the legal right and authority to transfer possession of all equipment provided to ALMZAJ for processing.',
    ],
  },
  {
    title: '5. Data Security and Destruction',
    content: [
      'ALMZAJ implements industry-standard data destruction methods to ensure complete and irreversible removal of data from storage devices. We provide certificates of data destruction upon completion of services.',
      'While we employ rigorous security measures, clients acknowledge that no data destruction method can guarantee 100% elimination of all data recovery possibilities. ALMZAJ shall not be liable for any data that may be recoverable after processing, provided we have followed agreed-upon destruction protocols.',
    ],
  },
  {
    title: '6. Pricing and Payment',
    content: [
      'Pricing for services will be quoted in writing prior to service commencement. Unless otherwise specified, quotes are valid for 30 days from the date of issue.',
      'Payment terms are net 30 days from the date of invoice unless otherwise agreed in writing. Late payments may be subject to interest charges at the rate of 1.5% per month or the maximum rate permitted by law, whichever is lower.',
    ],
  },
  {
    title: '7. Limitation of Liability',
    content: [
      'To the maximum extent permitted by applicable law, ALMZAJ shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.',
      'ALMZAJ\'s total liability for any claim arising from or related to our services shall not exceed the amount paid by the client for the specific services giving rise to the claim.',
    ],
  },
  {
    title: '8. Indemnification',
    content: [
      'Clients agree to indemnify, defend, and hold harmless ALMZAJ and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from: the client\'s breach of these terms, the client\'s violation of any applicable law, or any third-party claims related to equipment or data provided by the client.',
    ],
  },
  {
    title: '9. Intellectual Property',
    content: [
      'All intellectual property rights in our website, services, processes, and documentation remain the property of ALMZAJ or our licensors. Nothing in these terms grants you any right to use our trademarks, logos, or other intellectual property without our prior written consent.',
    ],
  },
  {
    title: '10. Confidentiality',
    content: [
      'Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of the business relationship. This obligation survives the termination of any service agreement.',
    ],
  },
  {
    title: '11. Termination',
    content: [
      'Either party may terminate a service agreement with 30 days\' written notice. ALMZAJ reserves the right to terminate services immediately if the client breaches these terms or any service agreement.',
      'Upon termination, the client remains responsible for payment of all services rendered prior to termination.',
    ],
  },
  {
    title: '12. Governing Law and Jurisdiction',
    content: [
      'These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.',
      'Any disputes arising from these terms or our services shall be resolved exclusively in the state or federal courts located in Albany County, New York.',
    ],
  },
  {
    title: '13. Modifications',
    content: [
      'ALMZAJ reserves the right to modify these Terms and Conditions at any time. Changes will be effective upon posting to our website. Continued use of our services after any modifications constitutes acceptance of the updated terms.',
    ],
  },
  {
    title: '14. Contact Information',
    content: [
      'For questions about these Terms and Conditions, please contact: ALMZAJ USA Import & Export Inc., 165 Central Ave, Albany, NY 12206, United States. Phone: +971 563072259.',
    ],
  },
]

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      lastUpdated="January 2025"
      sections={sections}
    />
  )
}
