import { Metadata } from 'next'
import { LegalPageLayout } from '@/components/legal-page-layout'

export const metadata: Metadata = {
  title: 'Data Protection Policy | ALMZAJ USA',
  description: 'Data Protection Policy for ALMZAJ USA Import & Export Inc. Learn about our commitment to data security in ITAD services.',
}

const sections = [
  {
    title: '1. Introduction and Commitment',
    content: [
      'ALMZAJ USA Import & Export Inc. ("ALMZAJ," "we," "us," or "our") is committed to protecting the personal data and sensitive information entrusted to us by our clients. As a provider of IT Asset Disposition (ITAD) services, data protection is fundamental to our operations and business practices.',
      'This Data Protection Policy outlines our approach to handling, processing, and securing data in compliance with applicable data protection regulations, including but not limited to the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other relevant international and regional data protection laws.',
    ],
  },
  {
    title: '2. Scope and Application',
    content: [
      'This policy applies to all personal data and client information processed by ALMZAJ in the course of providing our services. This includes data contained on devices received for ITAD processing, client business information, and data collected through our website and business operations.',
      'All employees, contractors, and third-party service providers working with ALMZAJ are required to comply with this policy.',
    ],
  },
  {
    title: '3. Data Protection Principles',
    content: [
      'We adhere to the following data protection principles: Lawfulness, Fairness, and Transparency - We process data lawfully, fairly, and in a transparent manner. Purpose Limitation - We collect data only for specified, explicit, and legitimate purposes. Data Minimization - We ensure data collected is adequate, relevant, and limited to what is necessary.',
      'Accuracy - We take reasonable steps to ensure data is accurate and kept up to date. Storage Limitation - We keep data only for as long as necessary for the purposes for which it was collected. Integrity and Confidentiality - We process data in a manner that ensures appropriate security.',
    ],
  },
  {
    title: '4. Data Security Measures',
    content: [
      'We implement comprehensive technical and organizational measures to protect data, including: Physical Security - Secured facilities with access controls, surveillance, and restricted entry. Technical Security - Encryption, firewalls, intrusion detection systems, and secure data destruction tools. Administrative Security - Employee training, access controls, confidentiality agreements, and regular security audits.',
      'Our data destruction processes follow industry standards including NIST SP 800-88 guidelines for media sanitization. We maintain chain of custody documentation throughout the processing lifecycle.',
    ],
  },
  {
    title: '5. Data Destruction Procedures',
    content: [
      'For ITAD services, we employ multiple data destruction methods based on client requirements and industry best practices: Software-Based Wiping - Using certified data erasure tools that overwrite all data sectors. Degaussing - Electromagnetic data destruction for magnetic media. Physical Destruction - Shredding or crushing of storage devices when required.',
      'All data destruction activities are documented, and certificates of destruction are provided to clients upon completion.',
    ],
  },
  {
    title: '6. Data Subject Rights',
    content: [
      'We respect and facilitate the exercise of data subject rights, including: Right of Access - Individuals may request information about their personal data we process. Right to Rectification - Individuals may request correction of inaccurate personal data. Right to Erasure - Individuals may request deletion of their personal data under certain circumstances. Right to Data Portability - Individuals may request their data in a structured, commonly used format.',
      'Requests to exercise these rights should be submitted in writing to our Data Protection contact.',
    ],
  },
  {
    title: '7. International Data Transfers',
    content: [
      'As an international company operating in Saudi Arabia, UAE, and the United States, we may transfer data across borders. All international data transfers are conducted in compliance with applicable data protection laws and with appropriate safeguards in place.',
      'We use standard contractual clauses, adequacy decisions, and other legally recognized transfer mechanisms to ensure appropriate protection for transferred data.',
    ],
  },
  {
    title: '8. Third-Party Processing',
    content: [
      'When engaging third-party service providers who may process data on our behalf, we conduct due diligence to ensure they maintain appropriate data protection standards. All third-party processors are bound by data processing agreements that require compliance with applicable data protection requirements.',
    ],
  },
  {
    title: '9. Data Breach Response',
    content: [
      'We maintain a data breach response plan that includes: Detection and containment procedures, Assessment of risk and impact, Notification procedures for affected parties and authorities as required by law, Documentation and review processes.',
      'In the event of a data breach, we will notify affected parties and relevant authorities in accordance with applicable legal requirements.',
    ],
  },
  {
    title: '10. Employee Training and Awareness',
    content: [
      'All employees receive training on data protection principles and procedures. Regular refresher training is provided to ensure ongoing awareness of data protection requirements and best practices.',
    ],
  },
  {
    title: '11. Policy Review and Updates',
    content: [
      'This Data Protection Policy is reviewed regularly and updated as necessary to reflect changes in our practices, legal requirements, or industry standards. The current version will always be available on our website.',
    ],
  },
  {
    title: '12. Contact Information',
    content: [
      'For questions about this Data Protection Policy or to exercise your data protection rights, please contact: ALMZAJ USA Import & Export Inc., 165 Central Ave, Albany, NY 12206, United States. Phone: +971 563072259.',
    ],
  },
]

export default function DataProtectionPage() {
  return (
    <LegalPageLayout
      title="Data Protection Policy"
      lastUpdated="January 2025"
      sections={sections}
    />
  )
}
