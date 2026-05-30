import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Search, ShieldCheck, CheckCircle2, TrendingUp, Database, Globe, FileText, Layers, Link2, Gauge } from 'lucide-react'
import { generateMetadata } from '~/lib/seo'

export const Route = createFileRoute('/seo')({
  head: () => generateMetadata({
    title: 'Advanced SEO Strategy | Topical Authority & Technical Excellence',
    description: 'Dominate organic search results with GSARTH. We focus on technical precision, topical authority, and high-intent content optimization.'
  }),
  component: SeoPage,
})

const seoDeliverables = [
  'Technical SEO audit + prioritized fixes roadmap',
  'Core Web Vitals improvements and performance tuning',
  'Semantic schema and structured data implementation',
  'Topical authority plan (clusters, internal links, entity coverage)',
  'Content briefs for high-intent pages and supporting articles',
  'On-page optimization across key landing pages',
  'Backlink strategy + digital PR targets (quality-first)',
  'Monthly reporting: rankings, traffic, leads, and next actions',
]

const seoProcess = [
  {
    step: '01',
    t: 'Audit & Opportunity Map',
    d: 'We analyze your site, SERP landscape, and competitors to identify the highest-ROI opportunities.',
    points: ['Technical + crawlability audit', 'Keyword intent mapping', 'Competitor gap analysis'],
  },
  {
    step: '02',
    t: 'Technical Foundation',
    d: 'Fix architecture issues that block performance, indexing, and conversion.',
    points: ['Core Web Vitals', 'Indexing + canonical strategy', 'Schema + information architecture'],
  },
  {
    step: '03',
    t: 'Topical Authority',
    d: 'Build entity-first content systems that earn trust and compound over time.',
    points: ['Cluster strategy', 'Internal linking logic', 'Content briefs + editorial system'],
  },
  {
    step: '04',
    t: 'Authority & Growth',
    d: 'Strengthen off-page signals and refine based on data every month.',
    points: ['Digital PR targets', 'Link quality improvements', 'Iterative optimization + reporting'],
  },
]

const seoFaqs = [
  {
    q: 'How long does SEO take to show results?',
    a: 'Most brands see early movement in 4–8 weeks, with compounding gains over 3–6 months. Timelines depend on competition, site health, and the amount of content/authority needed to win.',
  },
  {
    q: 'Do you focus on traffic or leads?',
    a: 'We focus on revenue outcomes. That means targeting high-intent queries, improving conversion paths, and measuring leads/sales—not vanity traffic.',
  },
  {
    q: 'Will this survive algorithm updates?',
    a: 'Yes—because we build around fundamentals: technical excellence, helpful content depth, entity coverage, and genuine authority signals. That’s exactly what updates reward over time.',
  },
  {
    q: 'Do you provide content writing?',
    a: 'We provide content strategy and briefs, and can support writing workflows depending on the engagement. At minimum, you’ll get a clear content system that your team or ours can execute.',
  },
  {
    q: 'What tools do you use?',
    a: 'We use a blend of crawl analysis, performance audits, SERP intelligence, and analytics. The outcome matters more than the tools: actionable fixes, measurable growth, and transparent reporting.',
  },
]

function SeoPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(seoFaqs[0]?.q ?? null)

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      <header className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-6 sm:mb-8">Search Engineering</h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight mb-6 sm:mb-8 leading-[1.1]">
            Topical <span className="text-blue-600">Authority.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            We don't just "rank for keywords". We build brands that search engines and humans both 
            trust as definitive industry leaders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-12">
            <Link to="/contact" className="btn-premium text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5 inline-flex items-center justify-center gap-2">
              Get an SEO Audit <ArrowRight size={16} />
            </Link>
            <a href="#deliverables" className="px-6 sm:px-10 py-4 sm:py-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest text-slate-900 dark:text-white hover:shadow-xl transition-all text-center">
              See Deliverables
            </a>
          </div>

          <div className="mt-10 sm:mt-16 flex flex-wrap gap-3 sm:gap-4">
            {[
              { i: <Gauge size={16} />, t: 'Core Web Vitals' },
              { i: <Layers size={16} />, t: 'Topical Clusters' },
              { i: <Link2 size={16} />, t: 'Authority Signals' },
              { i: <Globe size={16} />, t: 'Local + National SEO' },
            ].map((x) => (
              <div key={x.t} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 text-xs sm:text-sm font-black text-slate-600 dark:text-slate-300">
                <span className="text-blue-600">{x.i}</span>
                {x.t}
              </div>
            ))}
          </div>
        </motion.div>
      </header>

      <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {['Technical Precision', 'Topical Clusters', 'Authority Signals'].map((t, idx) => {
            const icons = [<Database size={24} />, <Search size={24} />, <ShieldCheck size={24} />];
            const descs = [
              'Core Web Vitals, schema architecture, and sub-second performance engineering.',
              'Comprehensive content frameworks that establish total dominance over a market niche.',
              'Strategic link acquisition and brand mentions from high-trust industry publications.'
            ];
            const imgs = [
              'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
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
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">{descs[idx]}</p>
                 </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section id="deliverables" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            <div className="max-w-2xl">
              <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">Deliverables</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.05]">
                Everything needed to win search intent and convert it into revenue.
              </h3>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
              A professional SEO program is more than content. It’s technical health, topical depth, and authority—executed consistently.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-[2rem] sm:rounded-[3rem] bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-11 w-11 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <h4 className="text-xl sm:text-2xl font-black">Included in your SEO program</h4>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {seoDeliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm font-bold text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-600" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] sm:rounded-[3rem] bg-blue-600 text-white p-6 sm:p-8 lg:p-10 shadow-2xl shadow-blue-600/20 relative overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="relative">
                <h4 className="text-xl sm:text-2xl font-black mb-3">What success looks like</h4>
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed mb-6 sm:mb-8 max-w-xl">
                  Rankings are a means to an end. The goal is qualified demand: users who are ready to buy, book, or inquire.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    { v: '95+', l: 'Performance Score' },
                    { v: '3x', l: 'Qualified Leads' },
                    { v: '↑', l: 'Compounding ROI' },
                  ].map((x) => (
                    <div key={x.l} className="bg-white/10 border border-white/15 rounded-2xl p-5 text-center">
                      <p className="text-3xl sm:text-4xl font-black mb-2">{x.v}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/70">{x.l}</p>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 sm:px-8 py-4 rounded-full bg-white text-blue-600 font-black text-xs sm:text-sm uppercase tracking-widest hover:opacity-95 transition-opacity">
                  Request SEO Strategy Call <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Framework Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
           <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-4 sm:mb-6">Our Authority Framework.</h3>
              <p className="text-base sm:text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto">A rigorous methodology for long-term organic growth and market capture.</p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { s: '01', t: 'Discovery', d: 'Deep audit of site health and competitor gap analysis.' },
                { s: '02', t: 'Technical', d: 'Fixing architecture and implementing semantic schema.' },
                { s: '03', t: 'Content', d: 'Developing high-intent topical clusters.' },
                { s: '04', t: 'Authority', d: 'Scaling off-page signals and brand trust.' },
              ].map(step => (
                <div key={step.s} className="p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                   <p className="text-3xl sm:text-4xl font-black text-blue-600/20 mb-4 sm:mb-6">{step.s}</p>
                   <h4 className="text-lg sm:text-xl font-black mb-2 sm:mb-3">{step.t}</h4>
                   <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{step.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">Method</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">
              The SEO operating system we run for every serious brand.
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
            A repeatable structure built for speed, correctness, and long-term search equity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {seoProcess.map((m, i) => (
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

      {/* Proof Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
           <div className="relative">
              <div className="p-6 sm:p-8 lg:p-12 bg-blue-600 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] text-white shadow-2xl shadow-blue-500/30 group">
                 <TrendingUp size={60} className="mb-6 sm:mb-8 opacity-20 group-hover:scale-110 transition-transform duration-700" />
                 <p className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-tighter">+224%</p>
                 <p className="text-base sm:text-lg lg:text-xl font-bold uppercase tracking-widest opacity-70">Organic Traffic Growth</p>
                 <div className="h-px w-full bg-white/20 my-6 sm:my-10" />
                 <p className="text-sm sm:text-base lg:text-lg italic opacity-80">"GSARTH's SEO methodology isn't just about traffic—it's about revenue. We saw a 3x increase in qualified leads."</p>
              </div>
           </div>
           <div>
              <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">Real Results</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 sm:mb-8 leading-tight">Rank for Intent. <br className="hidden sm:block" /> Not just Volume.</h3>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 sm:mb-10 leading-relaxed">
                 High volume keywords are vanity metrics. We target high-intent search queries that actually 
                 impact your bottom line. Our SEO strategy is built to survive algorithm updates and 
                 deliver sustainable ROI.
              </p>
              <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                 {['Lighthouse 95+ performance', 'Structured Data Implementation', 'Entity-based SEO Architecture'].map(item => (
                   <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-blue-600" />
                      <span className="font-bold text-sm sm:text-base">{item}</span>
                   </div>
                 ))}
              </div>
              <Link to="/contact" className="btn-premium text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5">Get An SEO Audit</Link>
           </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">FAQ</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">SEO clarity, no confusion.</h3>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {seoFaqs.map((item) => {
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

        <div className="mt-12 sm:mt-16 p-7 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-slate-950 text-white text-center shadow-2xl shadow-blue-500/10">
          <h4 className="text-2xl sm:text-3xl font-black mb-3">Want to know what you can win in search?</h4>
          <p className="text-sm sm:text-base text-slate-300 mb-7 sm:mb-10 max-w-2xl mx-auto">
            Get a clear roadmap: what to fix, what to build, and what to prioritize to generate qualified demand.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-premium text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5 inline-flex items-center justify-center gap-2">
              Book SEO Strategy Call <ArrowRight size={16} />
            </Link>
            <a href="https://wa.me/919311015100" target="_blank" rel="noopener" className="px-6 sm:px-10 py-4 sm:py-5 border-2 border-white/10 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
