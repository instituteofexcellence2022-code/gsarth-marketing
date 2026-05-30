import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Instagram, ArrowRight, CheckCircle2, TrendingUp, Users, Zap, Target, Camera, BarChart3, MessageSquare, Layers, CalendarDays, Sparkles } from 'lucide-react'
import { generateMetadata } from '~/lib/seo'

export const Route = createFileRoute('/social-media')({
  head: () => generateMetadata({
    title: 'Social Growth Strategy | Community Architecture',
    description: 'Transform followers into brand advocates. Elite social media marketing, viral content strategies, and community engineering by GSARTH.'
  }),
  component: SocialMediaPage,
})

const platforms = [
  {
    name: 'Instagram',
    icon: <Instagram size={20} />,
    color: 'pink',
    desc: 'Reels-first strategy, influencer collaborations, and shoppable content ecosystems.',
    features: ['Reels & Stories Strategy', 'Influencer Network', 'Shopping Integration', 'Growth Hacking']
  },
  {
    name: 'LinkedIn',
    icon: <Users size={20} />,
    color: 'blue',
    desc: 'B2B authority building, thought leadership content, and executive personal branding.',
    features: ['Thought Leadership', 'Employee Advocacy', 'Lead Gen Forms', 'Company Page Growth']
  },
  {
    name: 'YouTube',
    icon: <Camera size={20} />,
    color: 'red',
    desc: 'Long-form authority content and Shorts for maximum algorithmic reach.',
    features: ['SEO-Optimized Titles', 'Thumbnail Engineering', 'Shorts Strategy', 'Monetization Roadmap']
  }
]

const socialDeliverables = [
  'Content strategy + monthly calendar',
  'Creative direction and brand-consistent templates',
  'Reels/Shorts formats and hook library',
  'Community management and engagement loops',
  'Influencer collaboration sourcing (when applicable)',
  'Profile optimization and highlights structure',
  'Weekly performance reporting with next actions',
]

const socialProcess = [
  {
    step: '01',
    t: 'Positioning & Content Pillars',
    d: 'We define your audience, narrative, and the content pillars that build authority and demand.',
    points: ['Audience + ICP clarity', 'Pillar + format mapping', 'Hook library and messaging'],
  },
  {
    step: '02',
    t: 'Production System',
    d: 'A repeatable system for high output without losing quality.',
    points: ['Templates + brand rules', 'Reels/Shorts pipeline', 'Asset management workflow'],
  },
  {
    step: '03',
    t: 'Distribution & Engagement',
    d: 'We engineer reach through consistent publishing and community loops.',
    points: ['Posting cadence', 'Community management', 'Collabs and distribution'],
  },
  {
    step: '04',
    t: 'Optimize & Monetize',
    d: 'We track what works, scale winners, and connect content to revenue actions.',
    points: ['Weekly insights', 'CTA + funnel integration', 'Iteration and scaling'],
  },
]

const socialFaqs = [
  {
    q: 'How many posts/reels do you create per month?',
    a: 'It depends on your goals and team bandwidth. We typically run a consistent cadence focused on Reels/Shorts plus supporting posts and stories. The key is repeatable formats and weekly iteration.',
  },
  {
    q: 'Do you handle shooting and editing?',
    a: 'We can support the production workflow end-to-end depending on the engagement model. At minimum, you’ll get scripts, hook directions, templates, and editing guidelines for consistent output.',
  },
  {
    q: 'How do you turn followers into leads?',
    a: 'We connect content to conversion: CTAs, offer framing, lead magnets, landing pages, and WhatsApp funnels. Community + clarity + conversion system.',
  },
  {
    q: 'Which platforms do you recommend?',
    a: 'We select platforms based on your audience and sales cycle. B2B often wins on LinkedIn + YouTube; consumer brands often win on Instagram + Shorts—then we expand based on ROI.',
  },
  {
    q: 'What reporting do we get?',
    a: 'Weekly reporting with reach, engagement quality, content winners/losers, and next steps. We focus on metrics that correlate with business outcomes—not vanity.',
  },
]

function SocialMediaPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(socialFaqs[0]?.q ?? null)

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Hero */}
      <header className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-pink-50 dark:bg-pink-900/30 border border-pink-100 dark:border-pink-800 mb-6 sm:mb-8">
            <span className="text-[9px] sm:text-[10px] font-black text-pink-600 dark:text-pink-400 uppercase tracking-[0.3em]">Community Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 sm:mb-8 leading-[0.95]">
            Social <span className="text-pink-600">Dominance.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            We don't just post content — we engineer communities. Our strategies turn passive followers 
            into active brand advocates, driving both organic reach and bottom-line revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-12">
            <Link to="/contact" className="btn-premium text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5 inline-flex items-center justify-center gap-2">
              Get a Social Audit <ArrowRight size={16} />
            </Link>
            <a href="#deliverables" className="px-6 sm:px-10 py-4 sm:py-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest text-slate-900 dark:text-white hover:shadow-xl transition-all text-center">
              See Deliverables
            </a>
          </div>

          <div className="mt-10 sm:mt-16 flex flex-wrap gap-3 sm:gap-4">
            {[
              { i: <Sparkles size={16} />, t: 'Viral formats' },
              { i: <MessageSquare size={16} />, t: 'Community' },
              { i: <CalendarDays size={16} />, t: 'Consistency' },
              { i: <Layers size={16} />, t: 'Funnel-linked' },
            ].map((x) => (
              <div key={x.t} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 text-xs sm:text-sm font-black text-slate-600 dark:text-slate-300">
                <span className="text-pink-600">{x.i}</span>
                {x.t}
              </div>
            ))}
          </div>
        </motion.div>
      </header>

      <section id="deliverables" className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-14 lg:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-xs sm:text-sm font-black text-pink-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">Deliverables</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              A content system built for growth and conversion.
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
            A professional social program needs strategy, production, and iteration—not random posting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="rounded-[2rem] sm:rounded-[3rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 lg:p-10">
            <ul className="space-y-3">
              {socialDeliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm sm:text-base font-bold text-slate-600 dark:text-slate-300">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-pink-600" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] sm:rounded-[3rem] bg-slate-950 text-white p-6 sm:p-8 lg:p-10 shadow-2xl shadow-pink-500/10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative">
              <h4 className="text-xl sm:text-2xl font-black mb-3">Outcome: audience that buys</h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-7 max-w-xl">
                We engineer content that earns attention and trust—then connect it to measurable actions (DMs, WhatsApp, forms, calls).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { v: '↑', l: 'Qualified DMs' },
                  { v: '↑', l: 'Brand trust' },
                  { v: '↑', l: 'Inbound leads' },
                ].map((x) => (
                  <div key={x.l} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                    <p className="text-3xl sm:text-4xl font-black mb-2">{x.v}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/70">{x.l}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 sm:px-8 py-4 rounded-full bg-white text-slate-950 font-black text-xs sm:text-sm uppercase tracking-widest hover:opacity-95 transition-opacity">
                Build My Social System <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Strategy */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-xs sm:text-sm font-black text-pink-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">Platform Mastery</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">Every Platform. One Strategy.</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 lg:p-10 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all group"
              >
                <div className={`h-12 w-12 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 transition-transform group-hover:scale-110 ${
                  platform.color === 'pink' ? 'bg-pink-50 text-pink-600 dark:bg-pink-900/20' :
                  platform.color === 'blue' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20' :
                  'bg-red-50 text-red-600 dark:bg-red-900/20'
                }`}>
                  {platform.icon}
                </div>
                <h4 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4">{platform.name}</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">{platform.desc}</p>
                <ul className="space-y-2 sm:space-y-3">
                  {platform.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500">
                      <CheckCircle2 size={12} className="text-pink-600/50" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Framework */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          <div>
            <h2 className="text-xs sm:text-sm font-black text-pink-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">The Viral Engine</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 sm:mb-8">Content that Converts.<br />Communities that Scale.</h3>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 mb-8 sm:mb-10 leading-relaxed">
              Our social strategy is built on a proprietary framework: Hook → Engage → Convert → Advocate. 
              Every piece of content is engineered to move users through this funnel with precision.
            </p>
            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: <TrendingUp size={18} />, title: 'Algorithmic Optimization', desc: 'Data-backed posting times, hashtag clusters, and engagement loops.' },
                { icon: <Zap size={18} />, title: 'Viral Content Engineering', desc: 'Trend-jacking, format innovation, and share-worthy creative direction.' },
                { icon: <Target size={18} />, title: 'Community Monetization', desc: 'Turn engagement into revenue with integrated CTAs and funnel design.' },
                { icon: <BarChart3 size={18} />, title: 'Performance Analytics', desc: 'Weekly performance dashboards with actionable growth recommendations.' },
              ].map(item => (
                <div key={item.title} className="flex gap-3 sm:gap-4">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 shrink-0 bg-pink-50 dark:bg-pink-900/20 text-pink-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black mb-1 text-sm sm:text-base">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200"
                alt="Social Growth Strategy"
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 sm:-bottom-8 -left-4 sm:-left-8 p-4 sm:p-6 lg:p-8 bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800">
              <p className="text-2xl sm:text-3xl font-black text-pink-600 mb-1">+850k</p>
              <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400">Followers Generated</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <h2 className="text-xs sm:text-sm font-black text-pink-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">Process</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              A repeatable workflow for scale.
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
            We build momentum with consistent publishing, community loops, and weekly optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {socialProcess.map((m, i) => (
            <motion.div
              key={m.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="card-premium p-6 sm:p-7 lg:p-8"
            >
              <p className="text-4xl font-black tracking-tighter text-pink-600/15 mb-4">{m.step}</p>
              <h4 className="text-lg sm:text-xl font-black mb-2 text-slate-900 dark:text-white">{m.t}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">{m.d}</p>
              <ul className="space-y-2">
                {m.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-500">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-pink-600/50" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">Ready to Go Viral?</h3>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 mb-8 sm:mb-12">
            Let's engineer a social strategy that turns your brand into a cultural force.
          </p>
          <Link to="/contact" className="btn-premium inline-flex items-center gap-3 text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5">
            Start Social Scaling <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-xs sm:text-sm font-black text-pink-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">FAQ</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">Social growth, explained.</h3>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {socialFaqs.map((item) => {
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
                        ? 'bg-pink-600 border-pink-600 text-white'
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
