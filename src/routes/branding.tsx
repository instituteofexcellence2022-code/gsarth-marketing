import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Layers, Target, CheckCircle2, ShieldCheck, Palette, Compass, FileText, Sparkles, LayoutGrid, MessageSquareQuote } from 'lucide-react'
import { generateMetadata } from '~/lib/seo'

export const Route = createFileRoute('/branding')({
  head: () => generateMetadata({
    title: 'Elite Branding & Identity Services',
    description: 'Build an authoritative brand that commands attention. Strategic positioning, visual systems, and messaging frameworks by GSARTH.'
  }),
  component: BrandingPage,
})

const brandingDeliverables = [
  'Brand strategy + positioning (ICP, category, differentiation)',
  'Messaging system (value props, tone, narrative pillars)',
  'Logo system (primary, secondary, mark, lockups)',
  'Color, typography, iconography, and layout system',
  'Social templates and ad creative foundation',
  'Website-ready visual direction and UI style base',
  'Brand guidelines (PDF / system documentation)',
  'Launch kit: assets for web, social, and print',
]

const brandingProcess = [
  {
    step: '01',
    t: 'Discovery',
    d: 'We understand your market, audience psychology, competitors, and your current perception.',
    points: ['Stakeholder interviews', 'Competitor + category mapping', 'Audience insights + ICP'],
  },
  {
    step: '02',
    t: 'Positioning',
    d: 'We define what you stand for and how you win—then translate it into a clear narrative.',
    points: ['Value proposition architecture', 'Messaging pillars', 'Brand voice + tone'],
  },
  {
    step: '03',
    t: 'Identity System',
    d: 'We design a scalable visual system that stays premium across every touchpoint.',
    points: ['Logo + symbol system', 'Typography + colors', 'Layout + component rules'],
  },
  {
    step: '04',
    t: 'Launch & Scale',
    d: 'We package everything your team needs to execute consistently and grow without dilution.',
    points: ['Guidelines + templates', 'Asset export + handoff', 'Execution support'],
  },
]

const brandingFaqs = [
  {
    q: 'Do we really need branding if we already have a logo?',
    a: 'A logo is one asset. Branding is your positioning, messaging, and system for trust. If your brand feels inconsistent or you’re competing on price, you need strategy and a cohesive identity system—not just a mark.',
  },
  {
    q: 'What’s included in a brand identity system?',
    a: 'Logo suite, typography, color system, layouts, iconography, imagery direction, and templates—plus guidelines so every future asset stays consistent and premium.',
  },
  {
    q: 'Can you help apply the branding to our website and marketing?',
    a: 'Yes. We can translate the identity system into web-ready UI direction, social templates, ad creative foundations, and print-ready assets to launch fast and consistently.',
  },
  {
    q: 'How do you make branding “trustworthy” and not just “pretty”?',
    a: 'We design around clarity, consistency, and perceived value. Trust comes from strong positioning, confident messaging, clean hierarchy, and repeatable visual rules that look premium everywhere.',
  },
  {
    q: 'Do you work with B2B and enterprise brands?',
    a: 'Yes. The work is tailored: B2B often requires authority signals, proof design, and messaging built for longer sales cycles. Consumer brands often need faster memorability and stronger differentiation.',
  },
]

function BrandingPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(brandingFaqs[0]?.q ?? null)

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      <header className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-6 sm:mb-8">Brand Architecture</h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight mb-6 sm:mb-8 leading-[1.1]">
            Elite <span className="text-blue-600">Identity.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            More than a logo. We create strategic visual systems and messaging frameworks that position 
            your business as the dominant market leader.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-12">
            <Link to="/contact" className="btn-premium text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5 inline-flex items-center justify-center gap-2">
              Start a Brand Audit <ArrowRight size={16} />
            </Link>
            <a href="#deliverables" className="px-6 sm:px-10 py-4 sm:py-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest text-slate-900 dark:text-white hover:shadow-xl transition-all text-center">
              See Deliverables
            </a>
          </div>

          <div className="mt-10 sm:mt-16 flex flex-wrap gap-3 sm:gap-4">
            {[
              { i: <Compass size={16} />, t: 'Positioning' },
              { i: <MessageSquareQuote size={16} />, t: 'Messaging' },
              { i: <Palette size={16} />, t: 'Identity System' },
              { i: <LayoutGrid size={16} />, t: 'Templates' },
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
          {['Strategic Positioning', 'Visual Systems', 'Messaging Framework'].map((t, idx) => {
            const icons = [<Compass size={24} />, <Palette size={24} />, <Target size={24} />];
            const descs = [
              'Identifying your unique market gap and architecting a narrative that wins.',
              'High-fidelity identity design, typography, and color systems for global scale.',
              'Commanding tone-of-voice that resonates with high-value prospects.'
            ];
            const imgs = [
              'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800'
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
                A complete brand system—ready for web, social, and sales.
              </h3>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
              We deliver the strategy and the assets so your business looks consistent, premium, and trustworthy everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-[2rem] sm:rounded-[3rem] bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-11 w-11 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <h4 className="text-xl sm:text-2xl font-black">What you receive</h4>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {brandingDeliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm font-bold text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-600" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] sm:rounded-[3rem] bg-slate-950 text-white p-6 sm:p-8 lg:p-10 shadow-2xl shadow-blue-500/10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-11 w-11 rounded-2xl bg-white/10 border border-white/10 text-blue-300 flex items-center justify-center">
                    <Sparkles size={20} />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black">Outcome: higher perceived value</h4>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-7 max-w-xl">
                  Strong branding creates clarity and confidence. It reduces sales friction, improves conversion, and enables premium pricing.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    { v: '↑', l: 'Trust' },
                    { v: '↓', l: 'Price pressure' },
                    { v: '↑', l: 'Conversion' },
                  ].map((x) => (
                    <div key={x.l} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                      <p className="text-3xl sm:text-4xl font-black mb-2">{x.v}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/70">{x.l}</p>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 sm:px-8 py-4 rounded-full bg-white text-slate-950 font-black text-xs sm:text-sm uppercase tracking-widest hover:opacity-95 transition-opacity">
                  Build My Brand System <ArrowRight size={16} />
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
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">
              A repeatable system for creating brands that look premium everywhere.
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
            Strategy first. Then visuals. Then a scalable system that protects consistency as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {brandingProcess.map((m, i) => (
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

      {/* Perceived Value Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center relative z-10">
           <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 sm:mb-8 leading-tight">Your Brand is <br className="hidden sm:block" /> Your Margin.</h3>
              <p className="text-base sm:text-lg lg:text-xl opacity-70 mb-8 sm:mb-12 leading-relaxed">
                Elite branding reduces sales friction. When your brand projects authority, you don't compete on price—you compete on value.
              </p>
              <div className="grid grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                 <div>
                    <p className="text-3xl sm:text-4xl font-black text-blue-500 mb-2">94%</p>
                    <p className="text-[9px] sm:text-xs font-bold uppercase tracking-widest opacity-60">Brand Recognition</p>
                 </div>
                 <div>
                    <p className="text-3xl sm:text-4xl font-black text-blue-500 mb-2">3.8x</p>
                    <p className="text-[9px] sm:text-xs font-bold uppercase tracking-widest opacity-60">Trust Multiplier</p>
                 </div>
              </div>
              <Link to="/contact" className="btn-premium text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5">Architect Your Brand</Link>
           </div>
           <div className="relative">
              <div className="aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden border border-white/10 group">
                 <img 
                   src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200" 
                   alt="Premium Brand Design" 
                   width={800}
                   height={1000}
                   loading="lazy"
                   decoding="async"
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                 <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 p-4 sm:p-8 glass rounded-2xl sm:rounded-3xl">
                    <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-blue-400 mb-2">Elite Output</p>
                    <p className="text-sm sm:text-xl font-bold">"Design is the silent ambassador of your brand."</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Services Grid Integration */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 container-wide">
         <div className="flex items-center gap-2 text-blue-600 font-bold text-xs sm:text-sm mb-8 sm:mb-12">
            <CheckCircle2 size={14} /> Integrated Brand Ecosystem
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="p-6 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
               <Layers className="text-blue-600 mb-6 sm:mb-8" size={32} />
               <h4 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4">Multi-Platform Visuals</h4>
               <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">Consistency across web, social, mobile, and print advertising.</p>
            </div>
            <div className="p-6 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
               <ShieldCheck className="text-blue-600 mb-6 sm:mb-8" size={32} />
               <h4 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4">Market Authority</h4>
               <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">Positioning that builds instant credibility and customer loyalty.</p>
            </div>
         </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">FAQ</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">Branding questions, answered.</h3>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {brandingFaqs.map((item) => {
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

        <div className="mt-12 sm:mt-16 p-7 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-blue-600 text-white text-center shadow-2xl shadow-blue-600/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="relative">
            <h4 className="text-2xl sm:text-3xl font-black mb-3">Ready to look like the category leader?</h4>
            <p className="text-sm sm:text-base text-blue-100 mb-7 sm:mb-10 max-w-2xl mx-auto">
              Get a brand system that elevates perceived value and makes your marketing instantly more effective.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="px-6 sm:px-10 py-4 sm:py-5 bg-white text-blue-600 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:opacity-95 transition-opacity inline-flex items-center justify-center gap-2">
                Request Brand Audit <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/919311015100" target="_blank" rel="noopener" className="px-6 sm:px-10 py-4 sm:py-5 border-2 border-white/20 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
