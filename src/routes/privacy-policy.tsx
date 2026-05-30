import { createFileRoute, Link } from '@tanstack/react-router'
import { generateMetadata } from '~/lib/seo'

export const Route = createFileRoute('/privacy-policy')({
  head: () => generateMetadata({
    title: 'Privacy Policy',
    description: 'How GSARTH handles your data with integrity, transparency, and enterprise-grade security.'
  }),
  component: PrivacyPolicyPage,
})

function PrivacyPolicyPage() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-16 sm:pb-24">
        <div className="mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-6">Privacy Policy.</h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400">
            Last updated: January 2024
          </p>
        </div>

        <div className="prose prose-base sm:prose-lg dark:prose-invert max-w-none">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">
            GSARTH Marketing & Branding ("we", "our", "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website or engage with our services.
          </p>

          <h2 className="text-xl sm:text-2xl font-black mt-10 sm:mt-12 mb-4 sm:mb-6">1. Information We Collect</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="space-y-2 sm:space-y-3 text-slate-600 dark:text-slate-400 mb-6 sm:mb-8">
            <li>Fill out our contact or consultation forms</li>
            <li>Subscribe to our newsletter or marketing communications</li>
            <li>Request a quote or proposal</li>
            <li>Engage with us on social media platforms</li>
          </ul>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">
            This information may include your name, email address, phone number, company name, 
            business type, and project requirements.
          </p>

          <h2 className="text-xl sm:text-2xl font-black mt-10 sm:mt-12 mb-4 sm:mb-6">2. How We Use Your Information</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="space-y-2 sm:space-y-3 text-slate-600 dark:text-slate-400 mb-6 sm:mb-8">
            <li>Provide, operate, and maintain our services</li>
            <li>Communicate with you about your inquiries and projects</li>
            <li>Send marketing and promotional materials (with your consent)</li>
            <li>Improve our website, services, and customer experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-black mt-10 sm:mt-12 mb-4 sm:mb-6">3. Data Security</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">
            We implement industry-standard security measures to protect your personal information 
            from unauthorized access, alteration, disclosure, or destruction. However, no method of 
            transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl sm:text-2xl font-black mt-10 sm:mt-12 mb-4 sm:mb-6">4. Sharing Your Information</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">
            We do not sell, trade, or rent your personal information to third parties. We may share 
            information with trusted service providers who assist us in operating our website and 
            conducting our business, subject to strict confidentiality agreements.
          </p>

          <h2 className="text-xl sm:text-2xl font-black mt-10 sm:mt-12 mb-4 sm:mb-6">5. Cookies & Tracking</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">
            We may use cookies and similar tracking technologies to enhance your browsing experience, 
            analyze site traffic, and understand where our visitors come from. You can instruct your 
            browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2 className="text-xl sm:text-2xl font-black mt-10 sm:mt-12 mb-4 sm:mb-6">6. Your Rights</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            You have the right to:
          </p>
          <ul className="space-y-2 sm:space-y-3 text-slate-600 dark:text-slate-400 mb-6 sm:mb-8">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal data</li>
            <li>Opt-out of marketing communications at any time</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-black mt-10 sm:mt-12 mb-4 sm:mb-6">7. Contact Us</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:contact@gsarth.com" className="text-blue-600 hover:underline">contact@gsarth.com</a> 
            or via WhatsApp at +91 93110 15100.
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
