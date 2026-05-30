import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import {
  BarChart3, Zap, Target, Globe, Award, Users,
  TrendingUp, Megaphone, Palette,
  Rocket, ShieldCheck, Clock, MapPin, ArrowRight,
  CheckCircle2, Star, Briefcase
} from 'lucide-react'
import { generateMetadata } from '~/lib/seo'

export const Route = createFileRoute('/about')({
  head: () => generateMetadata({
    title: 'About GSARTH | Elite Marketing, Branding & Advertising Agency',
    description: 'GSARTH is a premier full-service marketing, branding and advertising agency in Delhi. Discover our story, philosophy, and the team behind 180+ successful brand transformations.'
  }),
  component: AboutPage,
})

const stats = [
  { value: '180+', label: 'Projects Delivered', icon: <Briefcase size={18} /> },
  { value: '94%', label: 'Client Retention', icon: <ShieldCheck size={18} /> },
  { value: '211%', label: 'Avg Revenue Growth', icon: <TrendingUp size={18} /> },
  { value: '50+', label: 'Elite Strategists', icon: <Users size={18} /> },
]

const domains = [
  {
    title: 'Marketing',
    subtitle: 'Performance Engineering',
    color: 'blue',
    icon: <Megaphone size={24} />,
    description: 'We engineer high-performance marketing systems that transform ad spend into predictable revenue. Our data-driven approach combines paid acquisition, organic growth, and conversion optimization to build self-sustaining growth engines.',
    capabilities: [
      'Performance Marketing (Meta, Google, LinkedIn Ads)',
      'SEO & Search Engineering',
      'Social Media Growth & Community Building',
      'Content Strategy & Copywriting',
      'Lead Generation & Sales Funnel Design',
      'Email Marketing & Automation'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Branding',
    subtitle: 'Identity Architecture',
    color: 'indigo',
    icon: <Palette size={24} />,
    description: 'We architect brand identities that command market authority. From strategic positioning to visual systems, we create brands that reduce sales friction, justify premium pricing, and build lasting customer loyalty.',
    capabilities: [
      'Brand Strategy & Positioning',
      'Visual Identity & Logo Design',
      'Brand Guidelines & Systems',
      'Packaging & Product Design',
      'Corporate Identity Systems',
      'Brand Messaging & Voice'
    ],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Advertising',
    subtitle: 'Omnichannel Domination',
    color: 'orange',
    icon: <Globe size={24} />,
    description: 'We dominate both digital and physical landscapes. From high-impact outdoor hoardings to precision-targeted digital campaigns, we ensure your brand is impossible to ignore across every touchpoint.',
    capabilities: [
      'Outdoor & Billboard Advertising',
      'Hoardings & Transit Media',
      'Event Branding & Exhibition Design',
      'Print & Corporate Collateral',
      'OOH Strategy & Media Buying',
      'QR-Integrated Offline-to-Online Campaigns'
    ],
    image: 'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?auto=format&fit=crop&q=80&w=800'
  }
]

const values = [
  { t: 'Extreme Transparency', d: 'No hidden fees, no opaque reports. You see every dollar spent and every result generated.', i: <BarChart3 className="text-blue-600" size={20} /> },
  { t: 'Obsessive Quality', d: 'We believe that the details are not the details. They are the brand.', i: <Zap className="text-orange-600" size={20} /> },
  { t: 'Radical Innovation', d: 'We constantly test new AI and performance technologies to ensure our clients stay ahead.', i: <Rocket className="text-emerald-600" size={20} /> },
  { t: 'Unwavering Integrity', d: 'We only promise what we can deliver. No vanity metrics, only outcomes that move the needle.', i: <ShieldCheck className="text-indigo-600" size={20} /> },
]

const clients = [
  'NEXORA', 'SKALIFY', 'AUREVA', 'VIRTION', 'NOVENTRA', 'LUMINA',
  'NOVARA', 'LUXORA', 'PRIMUS', 'ZENTECH', 'SOLVIX', 'MERIDIAN'
]

function AboutPage() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Hero */}
      <header className="relative pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6 sm:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span className="text-[9px] sm:text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">Delhi's Elite Growth Agency</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-black tracking-tight leading-[0.9] mb-6 sm:mb-8">
              We Engineer <br />
              <span className="text-blue-600">Market Dominance.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              GSARTH is a premier full-service agency built for enterprises that refuse to settle for average.
              We operate at the intersection of <strong>Marketing</strong>, <strong>Branding</strong>, and <strong>Advertising</strong> — 
              delivering integrated strategies that capture market share and sustain exponential growth.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/5 blur-[80px] lg:blur-[120px] -z-0" />
      </header>

      {/* Stats Bar */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800">
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
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</p>
                <p className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4 sm:mb-6">Our Origin</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 sm:mb-8">
              Built by Strategists. <br />Not Salespeople.
            </h3>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                GSARTH was founded on a simple but radical premise: that marketing, branding, and advertising 
                should be a unified operating system — not a series of disconnected experiments managed by 
                separate agencies with competing agendas.
              </p>
              <p>
                We started as a collective of growth strategists, design obsessives, and performance engineers 
                who were frustrated with the fragmented agency landscape. Our founders had spent years watching 
                brands bleed money on disconnected campaigns — beautiful ads that didn't convert, SEO that 
                drove traffic but not revenue, and branding that looked premium but failed to justify pricing.
              </p>
              <p>
                So we built something different. An agency where every decision is tied to a business outcome. 
                Where designers understand conversion psychology. Where SEOs think about revenue per visitor. 
                Where ad buyers obsess over LTV, not just CPC.
              </p>
            </div>
          </motion.div>
          <div className="relative">
            <div className="relative rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600"
                alt="GSARTH Strategic Team"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 sm:-bottom-10 -right-4 sm:-right-10 p-4 sm:p-6 lg:p-8 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800">
              <p className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white mb-1">Since 2019</p>
              <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-500">Building Market Leaders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Domains */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[150px] -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-xs sm:text-sm font-black text-blue-400 uppercase tracking-[0.3em] mb-4 sm:mb-6">What We Do</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-6">
              Three Disciplines. <br />One Unified Mission.
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-slate-400">
              We don't silo marketing, branding, and advertising. We integrate them into a cohesive 
              growth engine that amplifies every touchpoint.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {domains.map((domain, i) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className={`rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] overflow-hidden shadow-2xl border border-white/10`}>
                    <img src={domain.image} alt={domain.title} width={800} height={500} loading="lazy" decoding="async" className="w-full aspect-[16/10] object-cover" />
                    <div className={`absolute inset-0 bg-${domain.color}-600/20 mix-blend-overlay`} />
                  </div>
                </div>

                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-${domain.color}-500/10 border border-${domain.color}-500/20 mb-6`}>
                    <span className={`text-${domain.color}-400`}>{domain.icon}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{domain.subtitle}</span>
                  </div>
                  <h4 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">{domain.title}</h4>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed mb-6 sm:mb-8">
                    {domain.description}
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    {domain.capabilities.map(cap => (
                      <div key={cap} className="flex items-center gap-3">
                        <CheckCircle2 size={14} className={`text-${domain.color}-400 shrink-0`} />
                        <span className="text-xs sm:text-sm font-bold text-slate-300">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
          <div>
            <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4 sm:mb-6">The GSARTH Difference</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 sm:mb-8">
              Why Leaders <br />Choose Us.
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 sm:mb-10">
              In a market saturated with agencies promising the world and delivering reports, 
              we built GSARTH on one non-negotiable principle: <strong>outcome-led execution</strong>.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {[
                { title: 'Unified Growth System', desc: 'Marketing, branding, and advertising under one roof — no fragmented messaging.' },
                { title: 'Revenue-First Metrics', desc: 'We track SQLs, CAC, and LTV. Not impressions, likes, or vanity traffic.' },
                { title: 'Elite Talent Only', desc: 'Senior strategists handle your account. No juniors, no outsourcing to cheap labour.' },
                { title: 'Speed as Strategy', desc: 'We launch, test, and iterate in weeks, not quarters. Market timing is everything.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <Star size={18} />
                  </div>
                  <div>
                    <h4 className="font-black text-sm sm:text-base mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { num: '01', label: 'Discovery', desc: 'Deep business audit' },
              { num: '02', label: 'Strategy', desc: 'Unified roadmap' },
              { num: '03', label: 'Creative', desc: 'Design & copy' },
              { num: '04', label: 'Launch', desc: 'Deploy fast' },
              { num: '05', label: 'Optimize', desc: 'Data iteration' },
              { num: '06', label: 'Scale', desc: 'Expand channels' },
            ].map((step) => (
              <div key={step.num} className="p-5 sm:p-6 lg:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <p className="text-2xl sm:text-3xl font-black text-blue-600/20 mb-3">{step.num}</p>
                <h4 className="text-base sm:text-lg font-black mb-1">{step.label}</h4>
                <p className="text-xs sm:text-sm text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4 sm:mb-6">Our DNA</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">The Principles of Performance.</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center group hover:shadow-xl transition-all"
              >
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-slate-50 dark:bg-slate-800 mx-auto flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  {v.i}
                </div>
                <h4 className="text-lg sm:text-xl font-black mb-2 sm:mb-3">{v.t}</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 lg:p-16 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[60px] bg-slate-950 text-white border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-6 sm:mb-8">
                <Target size={20} className="text-blue-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Our Mission</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8">Empower enterprises to dominate their markets.</h3>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed">
              To provide ambitious businesses with the strategic growth infrastructure required to capture 
              market share, build defensible brand equity, and create sustainable revenue engines that 
              outlive the competition.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 lg:p-16 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[60px] bg-blue-600 text-white flex flex-col justify-between shadow-2xl shadow-blue-600/20"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-6 sm:mb-8">
                <Rocket size={20} className="text-white" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/70">Our Vision</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8">Be the global benchmark for growth excellence.</h3>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
              To be recognized worldwide as the definitive authority on strategic marketing, elite branding, 
              and high-impact advertising — known for our integrity, innovation, and unwavering focus on 
              measurable business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Marquee */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-3 sm:mb-4">Trusted By</h2>
            <h3 className="text-2xl sm:text-3xl font-black">Leaders Who Demand Results.</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {clients.map((client) => (
              <div
                key={client}
                className="px-5 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center"
              >
                <span className="text-xs sm:text-sm font-black tracking-widest text-slate-400">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div>
            <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4 sm:mb-6">Global Hub</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 sm:mb-8">
              Headquartered in Delhi. <br />Serving the World.
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 sm:mb-10">
              While our headquarters is in New Delhi, India, our client portfolio spans North America, 
              Europe, the Middle East, and Southeast Asia. We operate as a distributed team with 
              strategists across time zones to ensure your brand never sleeps.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-black text-sm sm:text-base">New Delhi, India</p>
                  <p className="text-xs text-slate-500">Global Headquarters</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-xl flex items-center justify-center">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="font-black text-sm sm:text-base">24/7 Operations</p>
                  <p className="text-xs text-slate-500">Cross-timezone team coverage</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-xl flex items-center justify-center">
                  <Globe size={18} />
                </div>
                <div>
                  <p className="font-black text-sm sm:text-base">12+ Countries</p>
                  <p className="text-xs text-slate-500">Active client markets</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=1200"
                alt="New Delhi India"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-6 glass rounded-2xl">
              <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-blue-400 mb-1">India Office</p>
              <p className="text-sm sm:text-base font-bold text-white">New Delhi — The Growth Capital</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards / Recognition */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xs sm:text-sm font-black text-blue-400 uppercase tracking-[0.3em] mb-4 sm:mb-6">Recognition</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black">Awards & Milestones.</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { year: '2024', award: 'Best Performance Agency', org: 'Delhi Marketing Awards' },
              { year: '2023', award: 'Top 10 Branding Firms', org: 'India Business Review' },
              { year: '2023', award: 'Innovation in OOH', org: 'Outdoor Advertising Summit' },
              { year: '2022', award: 'Rising Agency of the Year', org: 'AdWeek Asia' },
            ].map((item, i) => (
              <motion.div
                key={item.award}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white/5 border border-white/10 text-center"
              >
                <Award size={24} className="mx-auto mb-4 text-blue-400" />
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-3">{item.year}</p>
                <h4 className="text-base sm:text-lg font-black mb-2">{item.award}</h4>
                <p className="text-xs text-slate-500">{item.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
            Ready to Build <br /> Something Iconic?
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-slate-500 dark:text-slate-400 mb-8 sm:mb-12">
            Let's discuss how GSARTH can architect your brand's market dominance.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/contact" className="btn-premium inline-flex items-center gap-3 text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5">
              Book a Strategy Call <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="px-6 sm:px-10 py-4 sm:py-5 border-2 border-slate-100 dark:border-slate-800 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
              Explore Services
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
