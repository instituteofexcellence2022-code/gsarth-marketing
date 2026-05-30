import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Globe, 
  Search, 
  Zap, 
  Smartphone, 
  Instagram, 
  Target, 
  Megaphone, 
  Layout, 
  Printer, 
  Camera,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Award,
  Users,
  BarChart3
} from 'lucide-react'
import { generateMetadata } from '~/lib/seo'

export const Route = createFileRoute('/services')({
  head: () => generateMetadata({
    title: 'Growth Architecture | Integrated Online & Offline Marketing Agency',
    description: 'GSARTH is a premier full-service marketing & branding agency. We deliver 360° growth solutions, combining technical SEO and performance marketing with high-impact outdoor advertising.',
    keywords: 'Digital Marketing Agency, Branding Agency, SEO Services Delhi, Performance Marketing India, Outdoor Advertising, Billboard Advertising, Event Branding, Lead Generation Company'
  }),
  component: ServicesPage,
})

const onlineServices = [
  { 
    t: 'SEO Authority', 
    d: 'Strategic search engineering designed to dominate organic rankings. We focus on technical precision and building topical authority that search engines and users trust.', 
    features: ['Technical & Core Web Vitals', 'Topical Content Clustering', 'AI-Driven Keyword Intelligence', 'Semantic Schema Implementation'],
    icon: <Search />, 
    href: '/seo',
    badge: 'ROI-Driven'
  },
  { 
    t: 'Social Growth', 
    d: 'Community architecture that transforms followers into brand advocates. We manage global presence across Instagram, LinkedIn, and YouTube with viral-intent content.', 
    features: ['Reels & Shorts Strategy', 'Influencer Collaborations', 'Community Engagement Ops', 'B2B LinkedIn Authority'],
    icon: <Instagram />, 
    href: '/social-media',
    badge: 'Viral Intent'
  },
  { 
    t: 'Performance Ads', 
    d: 'Mathematically precise paid acquisition. We engineer high-ROAS campaigns across Meta, Google, and LinkedIn with dynamic re-targeting and funnel optimization.', 
    features: ['Meta & Google Ads Alpha', 'Conversion Rate Optimization', 'A/B Testing Frameworks', 'Lead Magnet Engineering'],
    icon: <Zap />, 
    href: '/lead-gen',
    badge: 'Scalable'
  },
  { 
    t: 'Web Development', 
    d: 'High-conversion digital experiences built on a modern tech stack. We deliver SEO-friendly, lightning-fast corporate websites optimized for Vercel deployment.', 
    features: ['Next.js Architecture', 'UI/UX Conversion Design', 'Mobile-First Engineering', 'Enterprise Security'],
    icon: <Smartphone />, 
    href: '/web-development',
    badge: 'High-Perf'
  },
  { 
    t: 'Content Strategy', 
    d: 'Storytelling as a strategic business asset. We produce high-intent SEO content, sales copy, and brand narratives that resonate with elite market segments.', 
    features: ['Conversion Copywriting', 'Long-form Authority Blogs', 'Email Narrative Systems', 'Social Brand Voice'],
    icon: <Layout />, 
    href: '/blog',
    badge: 'Premium'
  },
  { 
    t: 'Lead Generation', 
    d: 'Revenue pipeline engineering for B2B and SaaS. We build appointment-booking funnels and high-intent SQL acquisition systems with CRM integration.', 
    features: ['WhatsApp Marketing Hub', 'Sales Funnel Automation', 'High-Intent Lead Sourcing', 'CRM & Pipeline Setup'],
    icon: <Target />, 
    href: '/contact',
    badge: 'Enterprise'
  },
]

const offlineServices = [
  { 
    t: 'Hoardings & Billboards', 
    d: 'Massive scale visibility in high-traffic urban corridors. We secure premium highway and city placements for maximum brand recall and public attention.', 
    features: ['Highway Mega-Hoardings', 'Urban Digital Billboards', 'Traffic-Area Dominance'],
    icon: <Megaphone /> 
  },
  { 
    t: 'Event Branding', 
    d: 'Integrated experiential identity for conferences and trade shows. From stage branding to exhibition stalls, we create professional brand experiences.', 
    features: ['Corporate Trade Shows', 'Product Launch Setups', 'Stage & Stall Identity'],
    icon: <Award /> 
  },
  { 
    t: 'Retail & Shop Branding', 
    d: 'Commanding local presence with premium signage and POS solutions. We optimize retail touchpoints to drive walk-in conversions and recognition.', 
    features: ['Glow Sign Boards', 'Interior Brand Graphics', 'Point-of-Sale (POS) Design'],
    icon: <Camera /> 
  },
  { 
    t: 'Print & Pamphlets', 
    d: 'Tactile brand communication for direct audience reach. We design and print high-quality brochures and company profiles that project authority.', 
    features: ['Corporate Profile Design', 'Strategic Print Media', 'Premium Visiting Cards'],
    icon: <Printer /> 
  },
  { 
    t: 'Flyer Marketing', 
    d: 'Hyperlocal market penetration through targeted distribution. We engineer conversion-focused flyer campaigns for residential and commercial hubs.', 
    features: ['Targeted Residential Reach', 'Market Hub Distribution', 'Retail Offer Campaigns'],
    icon: <CheckCircle2 /> 
  },
  { 
    t: 'Local Promotions', 
    d: 'Ground-level brand activations and community engagement. We execute roadshows and sampling activities that build immediate local trust.', 
    features: ['Society Activations', 'Mobile Roadshows', 'Brand Activation Events'],
    icon: <Users /> 
  },
]

const methodology = [
  {
    step: '01',
    t: 'Discovery & Audit',
    d: 'We map your current position, diagnose bottlenecks, and define the fastest path to ROI.',
    points: ['Market & competitor intelligence', 'Funnel + conversion audit', 'Offer positioning & ICP clarity'],
    icon: <Search size={18} />,
  },
  {
    step: '02',
    t: 'Strategy Architecture',
    d: 'A channel-by-channel plan built around measurable outcomes, timelines, and accountability.',
    points: ['Growth roadmap & KPIs', 'Channel mix and budget logic', 'Messaging & creative direction'],
    icon: <Target size={18} />,
  },
  {
    step: '03',
    t: 'Execution & Launch',
    d: 'Fast, coordinated rollout across teams—designed for speed without sacrificing quality.',
    points: ['Campaign + content production', 'Landing pages & tracking setup', 'Operational checklists + QA'],
    icon: <Zap size={18} />,
  },
  {
    step: '04',
    t: 'Optimization & Scale',
    d: 'We iterate every week, improve efficiency, and scale what’s working with mathematical discipline.',
    points: ['A/B testing system', 'Reporting dashboards', 'Scale plans & expansion'],
    icon: <BarChart3 size={18} />,
  },
]

const digitalDeliverables = [
  'Tracking, pixels, and analytics instrumentation',
  'Landing pages optimized for conversion',
  'SEO technical fixes + topical authority plan',
  'Content calendar and high-intent copy',
  'Paid campaign structure, creatives, and testing',
  'Weekly performance reporting with next actions',
]

const offlineDeliverables = [
  'Media planning with placement strategy',
  'Hoarding / billboard creative and print-ready files',
  'Retail branding designs + production coordination',
  'Event stall, backdrop, and on-ground collaterals',
  'Distribution plan for flyers/pamphlets',
  'Offline-to-online integration (QR, WhatsApp, landing pages)',
]

const industries = [
  'SaaS & B2B',
  'Real Estate',
  'Healthcare',
  'Education',
  'Hospitality',
  'Retail & D2C',
  'Manufacturing',
  'Professional Services',
]

const faqs = [
  {
    q: 'How do you decide which channels we should invest in first?',
    a: 'We start with your unit economics, sales cycle, and competitive landscape. Then we prioritize the channels that can produce qualified demand fastest while building long-term compounding assets (SEO, brand, retention).',
  },
  {
    q: 'Do you work with both startups and established businesses?',
    a: 'Yes. The strategy changes by stage. Startups need speed-to-signal and validated acquisition. Mature brands need efficiency, brand consistency, and scale systems across multiple channels.',
  },
  {
    q: 'What does reporting look like?',
    a: 'Weekly reporting with KPIs, what changed, what we learned, and what happens next. You get clarity and accountability, not vanity metrics.',
  },
  {
    q: 'Can you handle offline advertising end-to-end?',
    a: 'Yes. We plan placements, design creatives, and coordinate production. We also connect offline campaigns to measurable online actions using QR/WhatsApp and landing pages.',
  },
  {
    q: 'How quickly can we start?',
    a: 'Once the kickoff is complete and access is provided, we can begin the audit and initial roadmap immediately, then move into execution in phased sprints.',
  },
]

function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(faqs[0]?.q ?? null)

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Premium Header Introduction */}
      <header className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-blue-500/5 blur-[80px] lg:blur-[120px] -z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6 sm:mb-8">
               <span className="text-[9px] sm:text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] sm:tracking-[0.3em]">Full-Service Architecture</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-black tracking-tighter mb-6 sm:mb-10 leading-[0.9]">
              Growth <br /><span className="text-blue-600">Architecture.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed font-medium">
              We provide the 360° strategic infrastructure required to capture market share and sustain dominance. 
              Our frameworks unify Online Digital Authority with High-Impact Offline Branding to deliver 
              a cohesive, ROI-focused brand ecosystem.
            </p>
            
            <div className="flex flex-wrap gap-4 sm:gap-8 mt-10 sm:mt-16 border-t border-slate-100 dark:border-slate-800 pt-6 sm:pt-10">
               <div className="flex items-center gap-2 sm:gap-3">
                  <BarChart3 className="text-blue-600" size={20} />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest opacity-60">ROI-Focused</span>
               </div>
               <div className="flex items-center gap-2 sm:gap-3">
                  <Globe className="text-blue-600" size={20} />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest opacity-60">Global Reach</span>
               </div>
               <div className="flex items-center gap-2 sm:gap-3">
                  <TrendingUp className="text-blue-600" size={20} />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest opacity-60">Scalable Systems</span>
               </div>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-14 lg:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-slate-400 mb-4 sm:mb-6">How We Deliver</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
              A professional system built for clarity, speed, and measurable growth.
            </h3>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              Every engagement runs on a repeatable operating model: diagnose, design, deploy, optimize.
              No guessing—just execution with accountability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {methodology.map((m, i) => (
            <motion.div
              key={m.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="card-premium p-6 sm:p-7 lg:p-8"
            >
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <span className="text-4xl font-black tracking-tighter text-blue-600/15">{m.step}</span>
                <div className="h-10 w-10 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
                  {m.icon}
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-black mb-2 text-slate-900 dark:text-white">{m.t}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 sm:mb-6">{m.d}</p>
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

        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 lg:p-10">
            <h4 className="text-xl sm:text-2xl font-black mb-3 text-slate-900 dark:text-white">What you get (Digital)</h4>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-6 leading-relaxed max-w-xl">
              High-impact execution that improves visibility, conversion, and acquisition—built to scale.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {digitalDeliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm font-bold text-slate-600 dark:text-slate-300">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-600" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-[0_25px_60px_rgba(37,99,235,0.08)]">
            <h4 className="text-xl sm:text-2xl font-black mb-3 text-slate-900 dark:text-white">What you get (Offline)</h4>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-6 leading-relaxed max-w-xl">
              Premium physical presence engineered for recall, reach, and real-world trust—connected to measurable action.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {offlineDeliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm font-bold text-slate-600 dark:text-slate-300">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-orange-600" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Online Marketing Section */}
      <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-blue-600 mb-4 sm:mb-6">Online Marketing</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-8 tracking-tight">Digital Dominance & Search Engineering.</h3>
          <p className="text-sm sm:text-base lg:text-lg text-slate-500 max-w-2xl leading-relaxed">
            We engineer high-performance digital funnels that drive search visibility, audience growth, 
            and scalable customer acquisition across all major digital platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {onlineServices.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-premium group flex flex-col h-full p-6 sm:p-8 lg:p-10"
            >
              <div className="flex justify-between items-start mb-6 sm:mb-8">
                <div className="h-12 w-12 sm:h-14 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  {s.icon}
                </div>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2 sm:px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400">
                  {s.badge}
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">{s.t}</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 leading-relaxed text-sm">{s.d}</p>
              
              <ul className="space-y-2 sm:space-y-3 mb-8 sm:mb-10 mt-auto">
                 {s.features.map(f => (
                   <li key={f} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-500">
                      <CheckCircle2 size={12} className="text-blue-600/50" />
                      {f}
                   </li>
                 ))}
              </ul>

              <Link to={s.href as any} className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-blue-600 pt-4 sm:pt-6 border-t border-slate-50 dark:border-slate-800 group/btn">
                Strategy Details <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 sm:mt-20 p-6 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[3rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
           <div>
              <h4 className="text-xl sm:text-2xl font-black mb-2">Need a Technical Audit?</h4>
              <p className="text-slate-500 font-medium text-sm sm:text-base">Talk to our strategy experts about your digital performance.</p>
           </div>
           <Link to="/contact" className="btn-premium whitespace-nowrap text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5">Talk to Experts</Link>
        </div>
      </section>

      {/* Offline Marketing Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-orange-600 mb-4 sm:mb-6">Offline Marketing</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-8 tracking-tight">Physical Brand Visibility & Recall.</h3>
            <p className="text-sm sm:text-base lg:text-lg text-slate-500 max-w-2xl leading-relaxed">
              Dominate the local market with high-impact physical advertising. We bridge the gap between digital 
              awareness and real-world presence through massive scale outdoor branding.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {offlineServices.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="h-12 w-12 sm:h-14 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:rotate-12 transition-transform">
                  {s.icon}
                </div>
                <h4 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4">{s.t}</h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">{s.d}</p>
                <div className="flex flex-wrap gap-2">
                   {s.features.map(tag => (
                     <span key={tag} className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2 sm:px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400">
                        {tag}
                     </span>
                   ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 sm:mt-20 p-6 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[3rem] bg-slate-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl shadow-blue-500/10">
             <div>
                <h4 className="text-xl sm:text-2xl font-black mb-2">Architect Your Offline Presence.</h4>
                <p className="text-slate-400 font-medium text-sm sm:text-base">Get premium urban and highway placements for your brand.</p>
             </div>
             <Link to="/offline-marketing" className="px-6 sm:px-10 py-4 sm:py-5 bg-white text-slate-950 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all shadow-xl">Request Proposal</Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-14 lg:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-slate-400 mb-4 sm:mb-6">Who We Scale</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
              Growth frameworks that adapt to your industry and your stage.
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
            From early-stage validation to enterprise optimization, we deploy the right playbooks with the right metrics.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {industries.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm font-black text-slate-600 dark:text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 rounded-[2rem] sm:rounded-[3rem] bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { t: 'Transparent reporting', d: 'Clear KPIs, weekly insights, and what happens next—no fluff.', i: <BarChart3 size={20} className="text-blue-600" /> },
              { t: 'Senior-only strategy', d: 'Your account is led by experienced operators, not juniors.', i: <Users size={20} className="text-indigo-600" /> },
              { t: 'Conversion-first execution', d: 'Every deliverable maps back to measurable business outcomes.', i: <TrendingUp size={20} className="text-emerald-600" /> },
            ].map((x) => (
              <div key={x.t} className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 p-6">
                <div className="h-11 w-11 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-4">
                  {x.i}
                </div>
                <h4 className="text-lg font-black mb-2 text-slate-900 dark:text-white">{x.t}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Conversion Engine */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
           <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
              <div className="max-w-xl">
                 <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-blue-600 mb-3 sm:mb-4">Portfolio</h2>
                 <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">Strategic execution across every vertical.</h3>
              </div>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm sm:text-base">From digital dominance to physical presence, we deliver integrated marketing that works.</p>
           </div>
           
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {[
                { t: 'Digital Transformation', i: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600' },
                { t: 'Brand Identity', i: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600' },
                { t: 'Outdoor Media', i: 'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?auto=format&fit=crop&q=80&w=600' },
                { t: 'Event Strategy', i: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=600' }
              ].map(p => (
                <div key={p.t} className="group relative aspect-square rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg">
                   <img src={p.i} alt={p.t} width={600} height={600} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-4 sm:p-6 lg:p-8">
                      <h4 className="text-white font-bold text-sm sm:text-base lg:text-lg">{p.t}</h4>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-slate-400 mb-4 sm:mb-6">FAQ</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
              Answers to the questions serious brands ask.
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
            If you want clarity before you commit, this is where to start.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((item) => {
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

      {/* Global Conversion Engine */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 container-wide text-center">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-3xl mx-auto px-4"
         >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter mb-6 sm:mb-10 leading-tight">Ready for 360° <br /> Growth?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-500 mb-8 sm:mb-12">
               Stop managing disconnected agencies. Partner with GSARTH for an integrated, 
               full-funnel growth strategy that delivers mathematical ROI.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
               <Link to="/contact" className="btn-premium text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5">Book Free Consultation</Link>
               <a href="https://wa.me/919311015100" target="_blank" rel="noopener" className="px-6 sm:px-10 py-4 sm:py-5 border-2 border-slate-100 dark:border-slate-800 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">Get Strategy Call</a>
            </div>
         </motion.div>
      </section>
    </div>
  )
}
