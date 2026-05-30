import { createFileRoute, Link } from '@tanstack/react-router'
import { generateMetadata } from '~/lib/seo'

export const Route = createFileRoute('/terms-conditions')({
  head: () => generateMetadata({
    title: 'Terms & Conditions',
    description: 'The terms of engagement for working with GSARTH Marketing & Branding.'
  }),
  component: TermsPage,
})

function TermsPage() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-16 sm:pb-24">
        <div className="mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-6">Terms & Conditions.</h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400">
            Last updated: January 2024
          </p>
        </div>

        <div className="prose prose-base sm:prose-lg dark:prose-invert max-w-none">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">
            Please read these Terms and Conditions ("Terms") carefully before using the services 
            offered by GSARTH Marketing & Branding ("GSARTH", "we", "us", or "our"). By engaging 
            with our services, you agree to be bound by these Terms.
          </p>

          <h2 className="text-xl sm:text-2xl font-black mt-10 sm:mt-12 mb-4 sm:mb-6">1. Scope of Services</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">
            GSARTH provides strategic marketing, branding, SEO, web development, and offline advertising 
            services. The specific deliverables, timelines, and pricing for each engagement will be 
            outlined in a separate Statement of Work (SOW) or Proposal agreed upon by both parties.
          </p>

          <h2 className="text-xl sm:text-2xl font-black mt-10 sm:mt-12 mb-4 sm:mb-6">2. Engagement & Payment</h2>
          <ul className="space-y-2 sm:space-y-3 text-slate-600 dark:text-slate-400 mb-6 sm:mb-8">
            <li>A signed agreement and advance payment are required before project commencement.</li>
            <li>Payment terms are net 7 days from invoice date unless otherwise agreed.</li>
            <li>Late payments may incur a 2% monthly service charge.</li>
            <li>All fees are exclusive of applicable taxes (GST 18%).</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-black mt-10 sm:mt-12 mb-4 sm:mb-6">3. Intellectual Property</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">
            Upon full payment, all deliverables created specifically for the client (logos, websites, 
            content, ad creatives) will be transferred to the client. GSARTH retains the right to 
            display the work in our portfolio and marketing materials unless a mutual NDA specifies 
            otherwise. Pre-existing templates, frameworks, and proprietary tools remain the property 
            of GSARTH.
          </p>

          <h2 className="text-xl sm:text-2xl font-black mt-10 sm:mt-12 mb-4 sm:mb-6">4. Client Responsibilities</h2>
          <ul className="space-y-2 sm:space-y-3 text-slate-600 dark:text-slate-400 mb-6 sm:mb-8">
            <li>Provide timely access to necessary accounts, assets, and stakeholder feedback.</li>
            <li>Ensure all provided content and materials do not infringe third-party rights.</li>
            <li>Respond to requests for approval within 3 business days to maintain timelines.</li>
            <li>Review and approve deliverables within the agreed review window.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-black mt-10 sm:mt-12 mb-4 sm:mb-6">5. Confidentiality</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">
            Both parties agree to keep all proprietary information, business strategies, and 
            internal data confidential. This obligation survives termination of the engagement 
            for a period of 24 months.
          </p>

          <h2 className="text-xl sm:text-2xl font-black mt-10 sm:mt-12 mb-4 sm:mb-6">6. Limitation of Liability</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">
            GSARTH's total liability for any claim arising from our services shall not exceed the 
            total amount paid by the client for the specific project giving rise to the claim. 
            We are not liable for indirect, incidental, or consequential damages, including lost 
            profits or revenue.
          </p>

          <h2 className="text-xl sm:text-2xl font-black mt-10 sm:mt-12 mb-4 sm:mb-6">7. Termination</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">
            Either party may terminate the engagement with 30 days' written notice. In the event 
            of termination, the client is responsible for payment of all work completed and expenses 
            incurred up to the termination date. No refunds will be issued for completed milestones.
          </p>

          <h2 className="text-xl sm:text-2xl font-black mt-10 sm:mt-12 mb-4 sm:mb-6">8. Governing Law</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">
            These Terms shall be governed by and construed in accordance with the laws of India. 
            Any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
          </p>

          <h2 className="text-xl sm:text-2xl font-black mt-10 sm:mt-12 mb-4 sm:mb-6">9. Changes to Terms</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">
            We reserve the right to modify these Terms at any time. Changes will be effective 
            immediately upon posting to our website. Continued use of our services constitutes 
            acceptance of the updated Terms.
          </p>

          <h2 className="text-xl sm:text-2xl font-black mt-10 sm:mt-12 mb-4 sm:mb-6">10. Contact</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">
            For questions about these Terms, please contact us at{' '}
            <a href="mailto:contact@gsarth.com" className="text-blue-600 hover:underline">contact@gsarth.com</a>.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-100 dark:border-slate-800">
          <Link to="/" className="text-blue-600 font-bold hover:underline text-sm sm:text-base">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
