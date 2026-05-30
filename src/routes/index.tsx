import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Users, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { Hero } from '~/components/sections/Hero'
import { WhyGsarth } from '~/components/sections/WhyGsarth'
import { ServicesGrid } from '~/components/sections/ServicesGrid'
import { ContactForm } from '~/components/sections/ContactForm'
import { generateMetadata } from '~/lib/seo'

export const Route = createFileRoute('/')({
  head: () => generateMetadata({
    title: 'Elite Marketing & Branding Agency in Delhi',
    description: 'GSARTH is a premium marketing and branding agency delivering world-class digital strategy, elite branding, and SEO solutions for modern enterprises.',
    keywords: 'marketing agency Delhi, branding agency India, SEO experts, performance marketing, digital strategy, GSARTH'
  }),
  component: HomePage,
})

const stats = [
  { value: '211%', label: 'Avg Revenue Growth', icon: <BarChart3 size={24} /> },
  { value: '180+', label: 'Projects Delivered', icon: <Zap size={24} /> },
  { value: '94%', label: 'Client Retention', icon: <ShieldCheck size={24} /> },
  { value: '50+', label: 'Elite Strategists', icon: <Users size={24} /> },
];

function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />

      {/* Stats Bar */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center h-10 w-10 sm:h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 mb-3 sm:mb-4">
                  {stat.icon}
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-1 sm:mb-2">{stat.value}</p>
                <p className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />
      <WhyGsarth />

      {/* Process Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-[9px] sm:text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">How We Work</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-4 sm:mb-6 text-slate-900 dark:text-white">
              The GSARTH <br className="hidden sm:block" /> Methodology.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Deep audit of your market position, competitors, and growth bottlenecks.' },
              { step: '02', title: 'Strategy', desc: 'Architect a data-driven roadmap aligned to your revenue goals.' },
              { step: '03', title: 'Execution', desc: 'Deploy with elite velocity across all channels simultaneously.' },
              { step: '04', title: 'Scale', desc: 'Optimize, iterate, and expand into new market segments.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 lg:p-10 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 relative"
              >
                <p className="text-4xl sm:text-5xl font-black text-blue-600/10 mb-4 sm:mb-6">{item.step}</p>
                <h4 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-slate-900 dark:text-white">{item.title}</h4>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-[9px] sm:text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">Client Proof</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              Results that <br className="hidden sm:block" /> Speak.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                quote: "GSARTH redefined our unit economics. We scaled 200% in 4 months with a 4.2x ROAS on paid campaigns.",
                author: "Rahul Verma",
                role: "CEO, Nexora Tech",
                metric: "+224% SQLs"
              },
              {
                quote: "The branding work was transformative. Our perceived value jumped immediately — we stopped competing on price.",
                author: "Priya Sharma",
                role: "Founder, Skalify",
                metric: "+181% Revenue"
              },
              {
                quote: "Their SEO methodology isn't just about traffic — it's about revenue. We saw a 3x increase in qualified leads.",
                author: "Amit Patel",
                role: "CMO, Aureva Health",
                metric: "+310% Organic"
              }
            ].map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 lg:p-10 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col"
              >
                <div className="inline-block self-start px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[9px] sm:text-xs font-black uppercase tracking-widest mb-6 sm:mb-8">
                  {t.metric}
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8 flex-grow italic">
                  "{t.quote}"
                </p>
                <div className="pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800">
                  <p className="font-black text-slate-900 dark:text-white text-sm sm:text-base">{t.author}</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] sm:h-[600px] bg-blue-600/10 blur-[100px] sm:blur-[150px] -z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-start">
            <div>
              <h2 className="text-xs sm:text-sm font-black text-blue-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">Start Scaling</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight mb-6 sm:mb-8">
                Ready for <br className="hidden sm:block" /> Exponential Growth?
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-slate-400 mb-8 sm:mb-12 leading-relaxed">
                Book a free strategy session with our elite team. We'll audit your current positioning
                and deliver a roadmap for market dominance.
              </p>

              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                {[
                  'No-obligation 30-minute strategy call',
                  'Custom growth audit report',
                  'Competitor gap analysis included',
                  'Clear ROI projection'
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-blue-400 shrink-0" />
                    <span className="font-bold text-slate-300 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-black text-xs sm:text-sm uppercase tracking-widest transition-all shadow-[0_20px_40px_rgba(37,99,235,0.25)] active:scale-95"
              >
                Book Free Audit <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] p-1.5 sm:p-2">
              <div className="rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
