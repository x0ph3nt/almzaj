import { Metadata } from 'next'
import { LegalPageLayout } from '@/components/legal-page-layout'

export const metadata: Metadata = {
  title: 'Disclaimer | ALMZAJ USA',
  description: 'Legal disclaimer for ALMZAJ USA Import & Export Inc. website and services.',
}

const sections = [
  {
    title: '1. General Disclaimer',
    content: [
      'The information provided on this website is for general informational purposes only. While ALMZAJ USA Import & Export Inc. ("ALMZAJ," "we," "us," or "our") strives to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.',
      'Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.',
    ],
  },
  {
    title: '2. Professional Advice Disclaimer',
    content: [
      'The content on this website does not constitute professional advice. For specific guidance regarding IT asset disposition, data security, environmental compliance, or any other matters, you should consult with qualified professionals who can provide advice tailored to your specific circumstances.',
      'ALMZAJ provides information about our services and general industry practices, but this should not be construed as professional, legal, financial, or technical advice.',
    ],
  },
  {
    title: '3. Service Representations',
    content: [
      'While we strive to provide accurate descriptions of our services, actual service delivery may vary based on specific circumstances, equipment conditions, and other factors. Service terms, pricing, and capabilities are subject to change without notice.',
      'Specific service commitments will be outlined in individual service agreements executed between ALMZAJ and clients.',
    ],
  },
  {
    title: '4. Third-Party Links',
    content: [
      'Through this website, you may be able to link to other websites that are not under the control of ALMZAJ. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.',
    ],
  },
  {
    title: '5. Availability Disclaimer',
    content: [
      'Every effort is made to keep the website up and running smoothly. However, ALMZAJ takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.',
    ],
  },
  {
    title: '6. Geographic Limitations',
    content: [
      'Our services and this website are intended for use by businesses and individuals in regions where we operate. Service availability and specific offerings may vary by location. Please contact us directly to confirm service availability in your area.',
    ],
  },
  {
    title: '7. Data Processing Disclaimer',
    content: [
      'While ALMZAJ employs industry-standard data destruction and security measures, we cannot guarantee that all data will be completely irrecoverable in all circumstances. Clients are advised to remove sensitive data from devices before transferring them for processing, where feasible.',
      'Specific data handling procedures and guarantees will be detailed in service agreements.',
    ],
  },
  {
    title: '8. Environmental Claims',
    content: [
      'Our environmental practices and claims are based on current industry standards and our operational procedures. Environmental impact may vary based on specific equipment types and processing methods. Detailed environmental reports are available upon request for specific service engagements.',
    ],
  },
  {
    title: '9. Contact',
    content: [
      'If you have any questions about this Disclaimer, please contact us at: ALMZAJ USA Import & Export Inc., 165 Central Ave, Albany, NY 12206, United States. Phone: +971 563072259.',
    ],
  },
]

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Disclaimer"
      lastUpdated="January 2025"
      sections={sections}
    />
  )
}
