import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Layers, Search, Zap, Megaphone, Smartphone, Instagram } from 'lucide-react'
import { useState } from 'react'
import { generateMetadata } from '~/lib/seo'

export const Route = createFileRoute('/portfolio')({
  head: () => generateMetadata({
    title: 'Elite Portfolio | GSARTH Case Studies',
    description: 'A curated showcase of our most impactful brand transformations, performance campaigns, and growth engineering projects.'
  }),
  component: PortfolioPage,
})

const projects = [
  {
    client: 'Nexora Tech',
    category: 'Performance Marketing',
    metric: '+224% SQLs',
    desc: 'Full-funnel B2B lead generation overhaul for a global SaaS platform. Rebuilt ad architecture, landing pages, and CRM integration.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    icon: <Zap size={20} />,
    color: 'blue'
  },
  {
    client: 'Skalify',
    category: 'Branding + E-Commerce',
    metric: '+181% Revenue',
    desc: 'Premium brand repositioning and performance pivot for a D2C e-commerce startup entering Tier-1 markets.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    icon: <Layers size={20} />,
    color: 'indigo'
  },
  {
    client: 'Aureva Health',
    category: 'SEO + Content',
    metric: '+310% Organic',
    desc: 'Topical authority campaign for a healthcare startup. Built 150+ content clusters and secured high-trust backlinks.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    icon: <Search size={20} />,
    color: 'emerald'
  },
  {
    client: 'Virtion Finance',
    category: 'Web Development',
    metric: '95 Lighthouse',
    desc: 'High-conversion corporate website with real-time dashboard integration and enterprise-grade security.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    icon: <Smartphone size={20} />,
    color: 'purple'
  },
  {
    client: 'Novara Events',
    category: 'Offline + Digital',
    metric: '+45k Footfall',
    desc: 'Integrated offline-to-online campaign with hoardings, QR funnels, and influencer amplification for a product launch.',
    image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800',
    icon: <Megaphone size={20} />,
    color: 'orange'
  },
  {
    client: 'Lumina Beauty',
    category: 'Social Growth',
    metric: '+850k Followers',
    desc: 'Viral content strategy and influencer network activation that turned a local brand into a national beauty authority.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
    icon: <Instagram size={20} />,
    color: 'pink'
  },
]

const categories = ['All', 'Performance Marketing', 'Branding + E-Commerce', 'SEO + Content', 'Web Development', 'Offline + Digital', 'Social Growth']

function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Hero */}
      <header className="pt-32 sm:pt-40 lg:pt-48 pb-12 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6 sm:mb-8">
            <span className="text-[9px] sm:text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">Selected Work</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 sm:mb-8 leading-[0.95]">
            Proof of <br /> <span className="text-blue-600">Performance.</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Every project below is a case study in velocity, precision, and ROI. We don't showcase concepts — we showcase revenue.
          </p>
        </motion.div>
      </header>

      {/* Filter */}
      <section className="py-6 sm:py-8 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm transition-all border ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-blue-500/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 sm:pb-24 lg:pb-32 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filtered.map((project, i) => (
            <motion.div
              key={project.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.client}
                  width={800}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                  <span className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest ${
                    project.color === 'blue' ? 'bg-blue-600 text-white' :
                    project.color === 'indigo' ? 'bg-indigo-600 text-white' :
                    project.color === 'emerald' ? 'bg-emerald-600 text-white' :
                    project.color === 'purple' ? 'bg-purple-600 text-white' :
                    project.color === 'orange' ? 'bg-orange-600 text-white' :
                    'bg-pink-600 text-white'
                  }`}>
                    {project.icon} {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <p className="text-2xl sm:text-3xl font-black text-white mb-1">{project.metric}</p>
                  <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white/60">Key Outcome</p>
                </div>
              </div>
              <div className="p-5 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">{project.client}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{project.desc}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-blue-600 group/btn"
                >
                  Discuss Similar Results <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: '180+', label: 'Projects Delivered' },
              { value: '94%', label: 'Client Retention' },
              { value: '4.2x', label: 'Average ROAS' },
              { value: '₹50Cr+', label: 'Revenue Generated' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-400 mb-2">{stat.value}</p>
                <p className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">Ready for your case study?</h3>
        <p className="text-base sm:text-lg lg:text-xl text-slate-500 dark:text-slate-400 mb-8 sm:mb-12">
          Let's build a project worth showcasing. Start with a free growth audit.
        </p>
        <Link to="/contact" className="btn-premium inline-flex items-center gap-3 text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5">
          Book Strategy Call <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  )
}
