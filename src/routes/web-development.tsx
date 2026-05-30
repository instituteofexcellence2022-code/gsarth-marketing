import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, CheckCircle2, ShieldCheck, Smartphone, Gauge, Code2, Search, Paintbrush, Layers, Database, Lock, Rocket } from 'lucide-react'
import { generateMetadata } from '~/lib/seo'

export const Route = createFileRoute('/web-development')({
  head: () => generateMetadata({
    title: 'Elite Web Development | High-Conversion Digital Experiences',
    description: 'SEO-friendly, lightning-fast corporate websites and landing pages built with modern architecture for maximum conversion.'
  }),
  component: WebDevelopmentPage,
})

const techStack = [
  { icon: <Code2 size={20} />, name: 'React + Next.js', desc: 'Server-side rendering for SEO and sub-second load times.' },
  { icon: <Gauge size={20} />, name: 'Core Web Vitals 95+', desc: 'Performance-engineered for Lighthouse excellence.' },
  { icon: <ShieldCheck size={20} />, name: 'Enterprise Security', desc: 'End-to-end encryption and compliance-ready architecture.' },
  { icon: <Smartphone size={20} />, name: 'Mobile-First', desc: 'Responsive design optimized for every screen size.' },
  { icon: <Search size={20} />, name: 'SEO-Native', desc: 'Semantic HTML, structured data, and crawl-friendly architecture.' },
  { icon: <Paintbrush size={20} />, name: 'Conversion Design', desc: 'UI/UX patterns proven to increase sign-ups and sales.' },
]

const deliverables = [
  'Custom corporate website design',
  'High-conversion landing page systems',
  'E-commerce storefront development',
  'SaaS product dashboards',
  'CMS integration (Sanity, Strapi, Contentful)',
  'A/B testing infrastructure',
]

const buildProcess = [
  {
    step: '01',
    t: 'Discovery & UX',
    d: 'We understand your goals, customers, and current funnel so the site is built to convert.',
    points: ['Messaging + page structure', 'Wireframes for key pages', 'Conversion-first UX decisions'],
  },
  {
    step: '02',
    t: 'Design System',
    d: 'A premium UI system that stays consistent as you add pages and campaigns.',
    points: ['Typography + spacing rules', 'Reusable components', 'Responsive design for all breakpoints'],
  },
  {
    step: '03',
    t: 'Build & Integrations',
    d: 'Engineering focused on speed, SEO, and maintainability—plus the integrations you need.',
    points: ['SSR/SEO setup', 'Forms + CRM hooks', 'Analytics + tracking'],
  },
  {
    step: '04',
    t: 'Launch & Optimize',
    d: 'We launch with QA, performance validation, and then optimize based on data.',
    points: ['Performance + SEO checks', 'Accessibility basics', 'Iteration and improvements'],
  },
]

const webDeliverablesDetailed = [
  'Copy and layout improvements to increase conversion',
  'Technical SEO: metadata, schema, sitemap, crawl structure',
  'Speed: image optimization, caching, bundle hygiene',
  'Lead capture: forms, WhatsApp click-to-chat, tracking',
  'CMS or admin workflows (if needed)',
  'Deployment setup (Vercel) and monitoring basics',
]

const webFaqs = [
  {
    q: 'Can you redesign our site without changing the content?',
    a: 'Yes. We can improve conversion and clarity using better hierarchy, layout, and UI patterns while keeping your core content intact. We’ll recommend copy tweaks where it increases ROI.',
  },
  {
    q: 'Will the site be mobile-first and fast?',
    a: 'Yes. Mobile-first responsiveness and performance are core requirements. We target excellent Core Web Vitals, optimize images, and keep the UI system clean and scalable.',
  },
  {
    q: 'Do you provide hosting and deployment?',
    a: 'We typically deploy on Vercel with best-practice configurations. We can also work with your preferred hosting, but modern deployment helps performance and reliability.',
  },
  {
    q: 'Can you integrate forms with WhatsApp/CRM?',
    a: 'Yes. We can route form leads to email, WhatsApp, or your CRM. The goal is fast response time so you don’t lose leads.',
  },
  {
    q: 'Do you support ongoing updates after launch?',
    a: 'Yes. We can provide maintenance and iteration: new landing pages, CRO tests, SEO improvements, and continuous enhancements based on analytics.',
  },
]

function WebDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(webFaqs[0]?.q ?? null)

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Hero */}
      <header className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800 mb-6 sm:mb-8">
            <span className="text-[9px] sm:text-[10px] font-black text-purple-600 dark:text-purple-400 uppercase tracking-[0.3em]">Digital Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 sm:mb-8 leading-[0.95]">
            Web <span className="text-purple-600">Excellence.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            We build digital experiences that don't just look premium — they convert. 
            Every pixel is engineered for speed, trust, and revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-12">
            <Link to="/contact" className="btn-premium text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5 inline-flex items-center justify-center gap-2">
              Get a Website Audit <ArrowRight size={16} />
            </Link>
            <a href="#process" className="px-6 sm:px-10 py-4 sm:py-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest text-slate-900 dark:text-white hover:shadow-xl transition-all text-center">
              How We Build
            </a>
          </div>

          <div className="mt-10 sm:mt-16 flex flex-wrap gap-3 sm:gap-4">
            {[
              { i: <Gauge size={16} />, t: 'Speed-first' },
              { i: <Search size={16} />, t: 'SEO-native' },
              { i: <Lock size={16} />, t: 'Secure' },
              { i: <Layers size={16} />, t: 'Scalable system' },
            ].map((x) => (
              <div key={x.t} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 text-xs sm:text-sm font-black text-slate-600 dark:text-slate-300">
                <span className="text-purple-600">{x.i}</span>
                {x.t}
              </div>
            ))}
          </div>
        </motion.div>
      </header>

      <section id="process" className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-14 lg:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-xs sm:text-sm font-black text-purple-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">Process</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              A professional build process designed for conversion and long-term maintainability.
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
            We don’t just “make pages”. We build an operating system for your digital acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {buildProcess.map((m, i) => (
            <motion.div
              key={m.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="card-premium p-6 sm:p-7 lg:p-8"
            >
              <p className="text-4xl font-black tracking-tighter text-purple-600/15 mb-4">{m.step}</p>
              <h4 className="text-lg sm:text-xl font-black mb-2 text-slate-900 dark:text-white">{m.t}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">{m.d}</p>
              <ul className="space-y-2">
                {m.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-500">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-purple-600/50" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="rounded-[2rem] sm:rounded-[3rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-2xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center">
                <Database size={20} />
              </div>
              <h4 className="text-xl sm:text-2xl font-black">What’s included</h4>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {webDeliverablesDetailed.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm font-bold text-slate-600 dark:text-slate-300">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-purple-600" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] sm:rounded-[3rem] bg-slate-950 text-white p-6 sm:p-8 lg:p-10 shadow-2xl shadow-purple-500/10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-11 w-11 rounded-2xl bg-white/10 border border-white/10 text-purple-300 flex items-center justify-center">
                  <Rocket size={20} />
                </div>
                <h4 className="text-xl sm:text-2xl font-black">Outcome: faster growth</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-7 max-w-xl">
                Your website is your most important salesperson. We optimize it for speed, trust, and conversion so every marketing channel performs better.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { v: '↑', l: 'Lead quality' },
                  { v: '↓', l: 'Bounce rate' },
                  { v: '↑', l: 'Conversion' },
                ].map((x) => (
                  <div key={x.l} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                    <p className="text-3xl sm:text-4xl font-black mb-2">{x.v}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/70">{x.l}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 sm:px-8 py-4 rounded-full bg-white text-slate-950 font-black text-xs sm:text-sm uppercase tracking-widest hover:opacity-95 transition-opacity">
                Start a Website Project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-xs sm:text-sm font-black text-purple-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">Technology</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">Built for Performance.</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group"
              >
                <div className="h-12 w-12 sm:h-14 bg-purple-50 dark:bg-purple-900/20 text-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-black mb-2 sm:mb-3">{tech.name}</h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
                alt="Web Development"
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 sm:-bottom-8 -right-4 sm:-right-8 p-4 sm:p-6 lg:p-8 bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800">
              <p className="text-2xl sm:text-3xl font-black text-purple-600 mb-1">95+</p>
              <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400">Lighthouse Score</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-xs sm:text-sm font-black text-purple-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">What We Build</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 sm:mb-8">Everything Digital.<br />Nothing Average.</h3>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 mb-8 sm:mb-10 leading-relaxed">
              From corporate websites to complex SaaS dashboards, we deliver high-performance digital products 
              that set the standard in your industry.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {deliverables.map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={12} />
                  </div>
                  <span className="font-bold text-slate-700 dark:text-slate-300 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-premium mt-8 sm:mt-10 inline-flex items-center gap-3 text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5">
              Start Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Performance Proof */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { value: '< 1.2s', label: 'Average Load Time', desc: 'Sub-second first contentful paint across all projects.' },
              { value: '100/100', label: 'SEO Score', desc: 'Perfect technical SEO health on every deployment.' },
              { value: '+68%', label: 'Conversion Lift', desc: 'Average conversion rate improvement post-launch.' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] bg-white/5 border border-white/10 text-center"
              >
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-purple-400 mb-3 sm:mb-4">{stat.value}</p>
                <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-white/60 mb-2 sm:mb-3">{stat.label}</p>
                <p className="text-xs sm:text-sm text-white/40">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">Your website is your first impression.</h3>
        <p className="text-base sm:text-lg lg:text-xl text-slate-500 dark:text-slate-400 mb-8 sm:mb-12">
          Make it unforgettable. Let's architect a digital experience that converts.
        </p>
        <Link to="/contact" className="btn-premium inline-flex items-center gap-3 text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5">
          Book Free Consultation <ArrowRight size={16} />
        </Link>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-xs sm:text-sm font-black text-purple-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">FAQ</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">Clear answers before you build.</h3>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {webFaqs.map((item) => {
            const isOpen = openFaq === item.q
            return (
              <div key={item.q} className="rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq((prev) => (prev === item.q ? null : item.q))}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 sm:py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 h-10 w-10 rounded-2xl flex items-center justify-center border transition-all ${
                      isOpen
                        ? 'bg-purple-600 border-purple-600 text-white'
                        : 'bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-500'
                    }`}
                  >
                    <ArrowRight size={18} className={isOpen ? 'rotate-90 transition-transform' : '-rotate-90 transition-transform'} />
                  </span>
                </button>
                {isOpen ? (
                  <div className="px-5 sm:px-7 pb-6 sm:pb-7">
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
