import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, User } from 'lucide-react'
import { generateMetadata } from '~/lib/seo'

export const Route = createFileRoute('/blog')({
  head: () => generateMetadata({
    title: 'Strategic Growth Insights | Blog',
    description: 'Expert perspectives on marketing, branding, and performance engineering from the GSARTH strategy team.'
  }),
  component: BlogPage,
})

const posts = [
  {
    title: 'The Future of SEO in the Era of AI Overviews',
    category: 'SEO',
    date: 'May 12, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Why Premium Branding is More Effective Than Direct Response',
    category: 'Branding',
    date: 'May 10, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Mastering Multi-Channel Lead Generation for B2B SaaS',
    category: 'Lead Gen',
    date: 'May 08, 2024',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800'
  }
]

function BlogPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      <header className="pt-32 sm:pt-40 lg:pt-48 pb-12 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 sm:mb-8">Growth <span className="text-blue-600">Insights.</span></h1>
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Elite perspectives on marketing, branding, and performance engineering. 
          Stay informed on the strategies driving modern business growth.
        </p>
      </header>

      <section className="pb-16 sm:pb-24 lg:pb-32 max-w-7xl mx-auto px-4 sm:px-6">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.map((p, i) => (
              <motion.div 
                key={p.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                   <img src={p.image} alt={p.title} width={800} height={500} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 sm:p-8 lg:p-10">
                   <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 sm:mb-6">
                      <span className="bg-blue-50 dark:bg-blue-900/30 px-2 sm:px-3 py-1 rounded-full">{p.category}</span>
                      <span className="flex items-center gap-1 text-slate-400"><Clock size={12} /> {p.readTime}</span>
                   </div>
                   <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-4 sm:mb-6 leading-tight group-hover:text-blue-600 transition-colors">{p.title}</h3>
                   <div className="flex items-center justify-between pt-6 sm:pt-8 border-t border-slate-50 dark:border-slate-800">
                      <div className="flex items-center gap-2">
                         <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center"><User size={14} /></div>
                         <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest opacity-60">GSARTH Strategy</span>
                      </div>
                      <Link to="/contact" className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-slate-100 dark:border-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <ArrowRight size={16} />
                      </Link>
                   </div>
                </div>
              </motion.div>
            ))}
         </div>
      </section>
    </div>
  )
}
