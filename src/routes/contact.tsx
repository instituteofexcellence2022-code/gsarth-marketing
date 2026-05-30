import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react'
import { ContactForm } from '~/components/sections/ContactForm'
import { generateMetadata } from '~/lib/seo'

export const Route = createFileRoute('/contact')({
  head: () => generateMetadata({
    title: 'Contact Our Elite Strategy Team',
    description: 'Ready to scale your business? Book a consultation with GSARTH elite marketing and branding strategists in Delhi.',
    keywords: 'contact GSARTH, marketing consultation, business growth audit, digital strategy contact'
  }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="pt-32 sm:pt-40 lg:pt-40 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-start">
          {/* Left Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6 sm:mb-8">
               <span className="text-[9px] sm:text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">Growth Consultation</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1] mb-6 sm:mb-8">
              Let's build your <br /> <span className="text-blue-600">Growth</span> Roadmap.
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-10 sm:mb-16 max-w-md leading-relaxed">
              Ready to scale? Book a consultation with our elite strategists to discuss your objectives 
              and current market landscape.
            </p>

            <div className="space-y-6 sm:space-y-10">
              <ContactInfoItem 
                icon={<Mail size={20} />}
                label="Strategic Inquiries"
                value="contact@gsarth.com"
                color="blue"
              />
              <ContactInfoItem 
                icon={<Phone size={20} />}
                label="Direct Line / WhatsApp"
                value="+91 93110 15100"
                color="green"
              />
              <ContactInfoItem 
                icon={<MapPin size={20} />}
                label="Global Hub"
                value="New Delhi, India"
                color="orange"
              />
            </div>

            <div className="mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-slate-200 dark:border-slate-800">
               <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-6 sm:mb-8">Social Ecosystem</p>
               <div className="flex gap-3 sm:gap-4">
                  <SocialIcon href="https://twitter.com/gsarth_agency" icon={<Twitter size={18} />} label="Twitter" />
                  <SocialIcon href="https://instagram.com/gsarth_official" icon={<Instagram size={18} />} label="Instagram" />
                  <SocialIcon href="https://linkedin.com/company/gsarth" icon={<Linkedin size={18} />} label="LinkedIn" />
               </div>
            </div>
          </motion.div>

          {/* Right Column: High-Fidelity Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function ContactInfoItem({ icon, label, value, color }: { icon: React.ReactNode, label: string, value: string, color: string }) {
  const colorMap: Record<string, string> = {
    blue: "text-blue-600 bg-blue-50 dark:bg-blue-900/20",
    green: "text-green-600 bg-green-50 dark:bg-green-900/20",
    orange: "text-orange-600 bg-orange-50 dark:bg-orange-900/20",
  };

  return (
    <div className="flex items-center gap-4 sm:gap-6 group">
      <div className={`h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm ${colorMap[color]}`}>
        {icon}
      </div>
      <div>
        <p className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-base sm:text-lg lg:text-xl font-black text-slate-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
}

function SocialIcon({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all"
    >
      {icon}
    </a>
  );
}
