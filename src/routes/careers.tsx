import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Clock, CheckCircle2, Zap, Users, Target } from 'lucide-react'
import { generateMetadata } from '~/lib/seo'

export const Route = createFileRoute('/careers')({
  head: () => generateMetadata({
    title: 'Careers at GSARTH',
    description: 'Join the collective of growth strategists, design obsessives, and performance engineers building market-dominating brands.'
  }),
  component: CareersPage,
})

const roles = [
  {
    title: 'Senior Performance Marketing Manager',
    department: 'Growth',
    location: 'New Delhi / Remote',
    type: 'Full-time',
    description: 'Lead high-budget Meta & Google ad campaigns for enterprise clients. You will own ROAS targets and funnel optimization.'
  },
  {
    title: 'Brand Strategist',
    department: 'Branding',
    location: 'New Delhi',
    type: 'Full-time',
    description: 'Architect brand positioning and visual narratives for startups scaling into market leaders.'
  },
  {
    title: 'SEO & Content Lead',
    department: 'SEO',
    location: 'New Delhi / Remote',
    type: 'Full-time',
    description: 'Own topical authority strategy, technical SEO audits, and high-intent content frameworks for B2B SaaS clients.'
  },
  {
    title: 'Frontend Developer (React)',
    department: 'Engineering',
    location: 'New Delhi / Remote',
    type: 'Full-time',
    description: 'Build high-conversion marketing sites and landing pages using modern React architecture.'
  },
  {
    title: 'Client Success Manager',
    department: 'Operations',
    location: 'New Delhi',
    type: 'Full-time',
    description: 'Be the strategic bridge between clients and execution teams. Ensure timelines, quality, and retention.'
  },
]

const perks = [
  { icon: <Zap size={20} />, title: 'Performance Bonuses', desc: 'Revenue-linked bonuses tied to client outcomes.' },
  { icon: <Users size={20} />, title: 'Elite Team Only', desc: 'Work alongside senior strategists. No juniors, no outsourcing.' },
  { icon: <Target size={20} />, title: 'Clear Growth Path', desc: 'Defined promotion tracks from specialist to director in 24 months.' },
  { icon: <Clock size={20} />, title: 'Flexible Hours', desc: 'Remote-first culture with async collaboration standards.' },
]

function CareersPage() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Hero */}
      <header className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6 sm:mb-8">
            <span className="text-[9px] sm:text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">Join the Collective</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 sm:mb-8 leading-[0.95]">
            Build the <br /> <span className="text-blue-600">Future</span> of Growth.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            We hire the best and give them the freedom to do extraordinary work. If you obsess over outcomes,
            you'll fit right in.
          </p>
        </motion.div>
      </header>

      {/* Culture Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <div>
              <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">Our Culture</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 sm:mb-8">Radical Ownership.<br />Zero Micromanagement.</h3>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 mb-8 sm:mb-10 leading-relaxed">
                At GSARTH, we don't count hours. We count impact. Every team member owns their domain end-to-end,
                with the autonomy and resources to deliver elite results.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {['Outcome-based culture', 'Weekly learning stipends', 'Direct access to leadership', 'No meeting overload'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-blue-600" />
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 sm:p-6 lg:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
                >
                  <div className="h-10 w-10 sm:h-12 sm:w-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                    {perk.icon}
                  </div>
                  <h4 className="text-sm sm:text-base lg:text-lg font-black mb-1 sm:mb-2">{perk.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{perk.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 gap-4">
          <div>
            <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4">Open Positions</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">Join the Roster.</h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">{roles.length} roles currently open</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-5 sm:p-6 lg:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-xl transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                    <h4 className="text-lg sm:text-xl font-black">{role.title}</h4>
                    <span className="px-2 sm:px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[9px] sm:text-[10px] font-black uppercase tracking-widest">
                      {role.department}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4 max-w-2xl">{role.description}</p>
                  <div className="flex items-center gap-4 sm:gap-6 text-[9px] sm:text-xs font-black uppercase tracking-widest text-slate-400">
                    <span className="flex items-center gap-1"><MapPin size={10} /> {role.location}</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {role.type}</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="shrink-0 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">Don't see your role?</h3>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 mb-8 sm:mb-12">
            We are always looking for exceptional talent. Send us your profile and we'll reach out when the right opportunity opens.
          </p>
          <Link to="/contact" className="btn-premium inline-flex items-center gap-3 text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5">
            Submit Your Profile <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
