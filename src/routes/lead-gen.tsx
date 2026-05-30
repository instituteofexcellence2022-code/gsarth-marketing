import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  ArrowRight,
  Zap, 
  Target, 
  BarChart3, 
  CheckCircle2, 
  TrendingUp,
  Layers,
  Gauge,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react'
import { generateMetadata } from '~/lib/seo'

export const Route = createFileRoute('/lead-gen')({
  head: () => generateMetadata({
    title: 'Performance Marketing & Lead Generation',
    description: 'ROI-driven paid acquisition campaigns engineered for scale. Dominate your market niche with GSARTH performance marketing.'
  }),
  component: LeadGenPage,
})

const channels = [
  { t: 'Meta Ads', d: 'Direct-response creative and scalable lead acquisition across Facebook & Instagram.', i: <Zap size={18} /> },
  { t: 'Google Search', d: 'Capture high-intent demand at the exact moment people are ready to buy.', i: <Target size={18} /> },
  { t: 'YouTube & Display', d: 'Build awareness and retarget with precision to reduce CAC over time.', i: <Layers size={18} /> },
  { t: 'Landing Pages', d: 'Conversion-first pages engineered to reduce CPL and increase qualified calls.', i: <Gauge size={18} /> },
  { t: 'WhatsApp Funnels', d: 'Fast response loops that turn clicks into conversations and bookings.', i: <MessageSquare size={18} /> },
  { t: 'Attribution', d: 'Clear reporting, source tracking, and performance decisions based on data.', i: <BarChart3 size={18} /> },
]

const leadGenDeliverables = [
  'Campaign architecture (TOF/MOF/BOF) with testing plan',
  'Creative direction + ad iterations (static, video, UGC style)',
  'Landing pages and CRO improvements (forms, offers, copy)',
  'Tracking setup: pixels, events, conversions, UTM discipline',
  'Lead routing: email/WhatsApp/CRM integration',
  'Weekly reporting with insights and next actions',
]

const leadGenProcess = [
  {
    step: '01',
    t: 'Unit Economics & Offer',
    d: 'We align on what to sell, to whom, and what metrics define success.',
    points: ['ICP + objections', 'Offer and messaging', 'KPIs: CPL, CAC, ROAS, SQL rate'],
  },
  {
    step: '02',
    t: 'Build & Tracking',
    d: 'We set up the funnel, landing pages, and tracking so everything is measurable.',
    points: ['Pixels + conversions', 'Landing page build', 'Lead routing + QA'],
  },
  {
    step: '03',
    t: 'Launch & Learn',
    d: 'We test creatives, audiences, and angles to find winners quickly.',
    points: ['A/B testing cadence', 'Audience segmentation', 'Creative iterations'],
  },
  {
    step: '04',
    t: 'Scale & Optimize',
    d: 'We scale profitable campaigns and fix bottlenecks across the funnel.',
    points: ['Budget scaling', 'CRO improvements', 'Retargeting + LTV focus'],
  },
]

const leadGenFaqs = [
  {
    q: 'How fast can we start seeing leads?',
    a: 'Once tracking and landing pages are ready, campaigns can generate leads quickly. The first 1–2 weeks are focused on learning and improving lead quality and CPL through structured testing.',
  },
  {
    q: 'Do you handle creatives and landing pages?',
    a: 'Yes. Performance marketing is creative + funnel. We support creative direction and iterations, plus landing pages and CRO to reduce CPL and increase conversion.',
  },
  {
    q: 'How do you measure lead quality?',
    a: 'We track beyond CPL: form-to-call rate, qualification rate, SQL rate, and closed-won (where possible). That’s how we optimize for revenue, not vanity metrics.',
  },
  {
    q: 'Can you integrate with our CRM/WhatsApp?',
    a: 'Yes. We can route leads to WhatsApp, email, or CRM workflows so response time stays fast and conversion improves.',
  },
  {
    q: 'What industries do you work with?',
    a: 'We run performance systems for B2B, SaaS, services, healthcare, education, real estate, and local brands—tailored to your sales cycle and unit economics.',
  },
]

function LeadGenPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(leadGenFaqs[0]?.q ?? null)

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      <header className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight mb-6 sm:mb-8">
            Performance <span className="text-blue-600">Marketing.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Acquisition engineered with mathematical precision. We build full-funnel growth engines that turn 
            casual interest into high-intent sales opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-12">
            <Link to="/contact" className="btn-premium text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5 inline-flex items-center justify-center gap-2">
              Request Growth Audit <ArrowRight size={16} />
            </Link>
            <a href="#deliverables" className="px-6 sm:px-10 py-4 sm:py-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest text-slate-900 dark:text-white hover:shadow-xl transition-all text-center">
              See Deliverables
            </a>
          </div>
        </motion.div>
      </header>

      <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-14 lg:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">Channel System</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              A full-funnel engine, not just ads.
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
            We build and optimize the entire acquisition path: creative → click → landing page → lead → follow-up.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {channels.map((c) => (
            <div key={c.t} className="card-premium p-6 sm:p-8 lg:p-10">
              <div className="h-11 w-11 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-5">
                {c.i}
              </div>
              <h4 className="text-lg sm:text-xl font-black mb-2 text-slate-900 dark:text-white">{c.t}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="deliverables" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            <div className="max-w-2xl">
              <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">Deliverables</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                Clear deliverables. Clear accountability.
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
              You get a structured testing system, funnel improvements, and reporting you can actually act on.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-[2rem] sm:rounded-[3rem] bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 lg:p-10">
              <ul className="space-y-3">
                {leadGenDeliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm sm:text-base font-bold text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue-600" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] sm:rounded-[3rem] bg-slate-950 text-white p-6 sm:p-8 lg:p-10 shadow-2xl shadow-blue-500/10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-11 w-11 rounded-2xl bg-white/10 border border-white/10 text-blue-300 flex items-center justify-center">
                    <ShieldCheck size={20} />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black">Quality-focused scaling</h4>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-7 max-w-xl">
                  Scaling only works when lead quality and follow-up speed are engineered into the system. We optimize beyond CPL.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    { v: '↑', l: 'SQL rate' },
                    { v: '↓', l: 'CAC' },
                    { v: '↑', l: 'ROAS' },
                  ].map((x) => (
                    <div key={x.l} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                      <p className="text-3xl sm:text-4xl font-black mb-2">{x.v}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/70">{x.l}</p>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 sm:px-8 py-4 rounded-full bg-white text-slate-950 font-black text-xs sm:text-sm uppercase tracking-widest hover:opacity-95 transition-opacity">
                  Build My Funnel <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">Process</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              A testing cadence built to find winners and scale them.
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
            We move fast, but systematically—so every decision improves performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {leadGenProcess.map((m, i) => (
            <motion.div
              key={m.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="card-premium p-6 sm:p-7 lg:p-8"
            >
              <p className="text-4xl font-black tracking-tighter text-blue-600/15 mb-4">{m.step}</p>
              <h4 className="text-lg sm:text-xl font-black mb-2 text-slate-900 dark:text-white">{m.t}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">{m.d}</p>
              <ul className="space-y-2">
                {m.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-500">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-blue-600/50" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {['Multi-Channel Ads', 'Funnel Optimization', 'Growth Analytics'].map((t, idx) => {
            const icons = [<Zap size={24} />, <Target size={24} />, <BarChart3 size={24} />];
            const descs = [
              'Strategic deployment across Meta, Google, and LinkedIn targeting high-intent segments.',
              'Landing page engineering and conversion rate optimization to lower CPL.',
              'Real-time attribution modeling and cross-channel performance tracking.'
            ];
            const imgs = [
              'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1553484771-047a44f47754?auto=format&fit=crop&q=80&w=800'
            ];
            return (
              <motion.div key={t} className="card-premium !p-0 overflow-hidden group">
                 <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={imgs[idx]} alt={t} width={800} height={500} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors" />
                 </div>
                 <div className="p-6 sm:p-8 lg:p-10">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                        {icons[idx]}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4">{t}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">{descs[idx]}</p>
                    <div className="flex items-center gap-2 text-blue-600 font-bold text-xs sm:text-sm">
                        <CheckCircle2 size={14} /> Data-Validated
                    </div>
                 </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Demand Generation Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
           <div>
              <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">Demand Gen</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 sm:mb-8 leading-tight">Lower CPL. Higher LTV. <br className="hidden sm:block" /> Total Transparency.</h3>
              <div className="space-y-4 sm:space-y-6">
                 {[
                   'Dynamic re-targeting frameworks',
                   'AI-powered audience modeling',
                   'Custom CRM integration & lead routing',
                   'High-fidelity landing page experiences'
                 ].map(item => (
                   <div key={item} className="flex items-center gap-3 sm:gap-4">
                      <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                         <CheckCircle2 size={12} />
                      </div>
                      <span className="font-bold text-slate-700 dark:text-slate-300 text-sm sm:text-base">{item}</span>
                   </div>
                 ))}
              </div>
              <Link to="/contact" className="btn-premium mt-8 sm:mt-12 text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5">Discuss Your ROI</Link>
           </div>
           <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                 <TrendingUp size={80} className="mb-6 sm:mb-8 opacity-20 group-hover:scale-110 transition-transform duration-700" />
                 <p className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-tighter">4.2x</p>
                 <p className="text-base sm:text-lg lg:text-xl font-bold uppercase tracking-widest opacity-70">Average Client ROAS</p>
                 <div className="mt-auto pt-8 sm:pt-12 border-t border-white/20">
                    <p className="italic text-sm sm:text-base lg:text-lg">"GSARTH's performance engineering redefined our unit economics. We scaled 200% in 4 months."</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 container-wide text-center">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 sm:mb-12">Ready to Scale?</h3>
        <Link to="/contact" className="btn-premium text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5">Request a Growth Audit</Link>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">FAQ</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">Performance marketing, simplified.</h3>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {leadGenFaqs.map((item) => {
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
                        ? 'bg-blue-600 border-blue-600 text-white'
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
