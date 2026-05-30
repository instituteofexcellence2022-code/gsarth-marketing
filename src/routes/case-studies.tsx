import { createFileRoute, Link } from '@tanstack/react-router'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  ArrowRight, TrendingUp, Users, Eye, Phone, MapPin, Star, Calendar, IndianRupee,
  Target, BarChart3, Zap, ArrowUpRight, Briefcase, Stethoscope,
  BookOpen, Building2, UtensilsCrossed, Dumbbell, ArrowDown, Sparkles, Layers,
  Play, Quote
} from 'lucide-react'
import { generateMetadata } from '~/lib/seo'

export const Route = createFileRoute('/case-studies')({
  head: () => generateMetadata({
    title: 'Success Stories | GSARTH Case Studies — Indian Brands, Real Results',
    description: 'Explore how GSARTH scaled Indian businesses — from Delhi NCR clinics to D2C brands, coaching centers, real estate, and restaurants. Real metrics, real growth.',
    keywords: 'marketing case studies India, branding success stories Delhi, local business growth case study, D2C brand marketing India, clinic marketing results, coaching center enrollment growth'
  }),
  component: CaseStudiesPage,
})

/* ── Color themes per industry ── */
const industryThemes: Record<string, { bg: string; text: string; accent: string; light: string; border: string; darkBg: string }> = {
  'D2C / E-Commerce':      { bg: 'bg-rose-50', text: 'text-rose-600', accent: 'text-rose-500', light: 'bg-rose-500', border: 'border-rose-100', darkBg: 'dark:bg-rose-900/10' },
  'Healthcare / Dental':   { bg: 'bg-emerald-50', text: 'text-emerald-600', accent: 'text-emerald-500', light: 'bg-emerald-500', border: 'border-emerald-100', darkBg: 'dark:bg-emerald-900/10' },
  'Education / JEE Coaching': { bg: 'bg-amber-50', text: 'text-amber-600', accent: 'text-amber-500', light: 'bg-amber-500', border: 'border-amber-100', darkBg: 'dark:bg-amber-900/10' },
  'Real Estate / Brokerage': { bg: 'bg-violet-50', text: 'text-violet-600', accent: 'text-violet-500', light: 'bg-violet-500', border: 'border-violet-100', darkBg: 'dark:bg-violet-900/10' },
  'F&B / Casual Dining':   { bg: 'bg-orange-50', text: 'text-orange-600', accent: 'text-orange-500', light: 'bg-orange-500', border: 'border-orange-100', darkBg: 'dark:bg-orange-900/10' },
  'Fitness / Gym Chain':   { bg: 'bg-sky-50', text: 'text-sky-600', accent: 'text-sky-500', light: 'bg-sky-500', border: 'border-sky-100', darkBg: 'dark:bg-sky-900/10' },
}

const industryIcons: Record<string, React.ReactNode> = {
  'D2C / E-Commerce': <Sparkles size={16} />,
  'Healthcare / Dental': <Stethoscope size={16} />,
  'Education / JEE Coaching': <BookOpen size={16} />,
  'Real Estate / Brokerage': <Building2 size={16} />,
  'F&B / Casual Dining': <UtensilsCrossed size={16} />,
  'Fitness / Gym Chain': <Dumbbell size={16} />,
}

/* ── Detailed case studies for Indian market ── */
const caseStudies = [
  {
    id: 'd2c-brand',
    industry: 'D2C / E-Commerce',
    client: 'Ayaana Wellness',
    location: 'Delhi → Pan-India',
    duration: '8 Months',
    budget: '₹3.2L/month',
    before: { metric: '0.8x ROAS', desc: 'Meta ads bleeding cash, no repeat customers' },
    after: { metric: '4.8x ROAS', desc: '₹47L monthly revenue, 12,400 new customers' },
    challenge: 'Ayaana was a bootstrapped ayurvedic skincare D2C brand struggling with ₹180/customer acquisition cost and near-zero repeat purchases. Instagram presence was weak, and Meta ads were burning cash with 0.8x ROAS.',
    strategy: [
      'Revamped brand identity with Indian artisanal aesthetic and UGC-first creative strategy',
      'Built performance funnel: Awareness (Reels) → Consideration (UGC Testimonials) → Conversion (Offer Ads)',
      'WhatsApp retention automation for abandoned carts and post-purchase cross-sell',
      'Influencer seeding with 35 micro-creators in the clean-beauty niche'
    ],
    results: [
      { metric: '+312%', label: 'Revenue Growth', icon: <TrendingUp size={16} /> },
      { metric: '4.8x', label: 'ROAS Achieved', icon: <Target size={16} /> },
      { metric: '-58%', label: 'CAC Reduction', icon: <IndianRupee size={16} /> },
      { metric: '+12,400', label: 'New Customers', icon: <Users size={16} /> },
    ],
    testimonial: {
      quote: "We went from barely breaking even to ₹47L monthly revenue in 8 months. The UGC creative strategy GSARTH built was the game-changer — our customers became our best marketers.",
      name: 'Meera Thakur',
      role: 'Co-founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face'
    },
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&h=700&fit=crop',
    tags: ['Meta Ads', 'UGC Strategy', 'WhatsApp Automation', 'D2C Growth']
  },
  {
    id: 'dental-clinic',
    industry: 'Healthcare / Dental',
    client: '32 Pearls Dental',
    location: 'South Delhi, GK-1',
    duration: '5 Months',
    budget: '₹35,000/month',
    before: { metric: 'Page 3', desc: 'Invisible on Google Maps, zero digital presence' },
    after: { metric: '#1 Rank', desc: 'Top-ranked dental clinic, 8-12 daily inquiries' },
    challenge: 'A premium dental clinic in Greater Kailash with excellent clinical outcomes but invisible online. Ranking page 3 on Google Maps for "dentist near me". Zero Instagram presence. Walk-ins were entirely referral-dependent.',
    strategy: [
      'Full GMB optimization with 50+ professional photos, service posts, and structured Q&A',
      'Local SEO citation building across 25+ Indian healthcare directories (Practo, Lybrate, Justdial)',
      'Instagram Reels strategy featuring transformation stories and dentist education content',
      'WhatsApp chatbot for appointment booking and follow-up reminders'
    ],
    results: [
      { metric: '#1 Rank', label: 'Google Maps Delhi', icon: <MapPin size={16} /> },
      { metric: '+287%', label: 'Walk-in Patients', icon: <Users size={16} /> },
      { metric: '+156%', label: 'WhatsApp Bookings', icon: <Phone size={16} /> },
      { metric: '4.9★', label: 'Google Reviews', icon: <Star size={16} /> },
    ],
    testimonial: {
      quote: "Before GSARTH, patients found us only through word-of-mouth. Now we are the #1 dental clinic on Google Maps in our area and get 8-12 new patient inquiries daily through WhatsApp alone.",
      name: 'Dr. Vikram Sethi',
      role: 'Founder & Head Dentist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face'
    },
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=700&fit=crop',
    tags: ['Local SEO', 'GMB Optimization', 'Healthcare Marketing', 'WhatsApp Funnel']
  },
  {
    id: 'coaching-center',
    industry: 'Education / JEE Coaching',
    client: 'Apex Academy',
    location: 'Lajpat Nagar, Delhi',
    duration: '4 Months',
    budget: '₹55,000/month',
    before: { metric: 'Declining', desc: 'Post-pandemic enrollment drop, no lead tracking' },
    after: { metric: '+340%', desc: 'Filled 2 batches in 1 month, ₹127 cost per lead' },
    challenge: 'A well-established JEE/NEET coaching center with declining enrollment post-pandemic. Competitors had taken over with aggressive digital ads. The academy had no Instagram presence, no lead tracking, and relied solely on walk-ins and pamphlets.',
    strategy: [
      'Built high-conversion landing page with demo-class registration and merit-scholarship calculator',
      'Meta lead-generation ads targeting 11th-12th students and parents within 8km radius',
      'YouTube Shorts strategy with toppers\' interviews and chapter-wise tricks',
      'Pamphlet distribution in 40+ societies with QR codes linking to WhatsApp demo-class booking'
    ],
    results: [
      { metric: '+340%', label: 'Admission Inquiries', icon: <Phone size={16} /> },
      { metric: '₹127', label: 'Cost Per Lead', icon: <IndianRupee size={16} /> },
      { metric: '+210%', label: 'Demo Attendance', icon: <Users size={16} /> },
      { metric: '89%', label: 'Conversion Rate', icon: <TrendingUp size={16} /> },
    ],
    testimonial: {
      quote: "We filled two entire batches in one month — something that used to take us a full admission season. The combination of Instagram ads + pamphlet QR codes brought us the exact students we wanted in our neighborhood.",
      name: 'Ramesh Gupta',
      role: 'Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
    },
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=700&fit=crop',
    tags: ['Education Marketing', 'Lead Generation', 'YouTube Shorts', 'Hyperlocal']
  },
  {
    id: 'real-estate',
    industry: 'Real Estate / Brokerage',
    client: 'Homestead Realty',
    location: 'Gurgaon / Noida',
    duration: '10 Months',
    budget: '₹1.8L/month',
    before: { metric: 'Low Intent', desc: 'Unqualified leads, no luxury brand recall' },
    after: { metric: '+420%', desc: '6 luxury properties closed in one quarter' },
    challenge: 'A boutique real estate brokerage competing against giants like 99acres and Magicbricks. High-ticket property listings were not getting visibility. Leads were low-intent and unqualified. No brand recall in the luxury segment.',
    strategy: [
      'Premium brand repositioning with high-end visual identity and property video tours',
      'Google Ads for high-intent keywords ("3 BHK Gurgaon", "luxury villa Noida") with landing page optimization',
      'Instagram Reels featuring property walkthroughs, neighborhood guides, and investment insights',
      'CRM-integrated lead scoring system to prioritize hot buyers for immediate callback'
    ],
    results: [
      { metric: '+420%', label: 'Qualified Leads', icon: <Users size={16} /> },
      { metric: '₹2,400', label: 'Cost Per Lead', icon: <IndianRupee size={16} /> },
      { metric: '+65%', label: 'Site Visits', icon: <MapPin size={16} /> },
      { metric: '₹18Cr+', label: 'Property Sold', icon: <TrendingUp size={16} /> },
    ],
    testimonial: {
      quote: "In real estate, lead quality matters more than lead quantity. GSARTH cracked this — our cost per site visit dropped by half, and we closed 6 luxury properties in one quarter. The video-first approach changed everything.",
      name: 'Anil Khurana',
      role: 'Managing Partner',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face'
    },
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=700&fit=crop',
    tags: ['Real Estate Marketing', 'Google Ads', 'Video Content', 'CRM Integration']
  },
  {
    id: 'restaurant',
    industry: 'F&B / Casual Dining',
    client: 'Naivedya Kitchen',
    location: 'Hauz Khas, Delhi',
    duration: '6 Months',
    budget: '₹28,000/month',
    before: { metric: 'Empty Tables', desc: 'Zero Instagram, competitors had 5x footfall' },
    after: { metric: '+190%', desc: 'Lines on weekends, weekday campaign ROI positive' },
    challenge: 'A hidden gem in Hauz Khas Village serving South Indian fusion. Despite excellent food, the restaurant was struggling with empty weekdays and no Instagram presence. Competitor cafes with inferior food had 5x the footfall purely because of social media.',
    strategy: [
      'Instagram Reels-first strategy featuring sizzling food cinematography and chef stories',
      'Google My Business optimization with daily menu updates, photos, and review response protocol',
      'Zomato/Swiggy profile redesign and sponsored listing management for delivery revenue',
      'Weekday "work-from-cafe" campaign targeting freelancers and students in the vicinity'
    ],
    results: [
      { metric: '+265%', label: 'Instagram Reach', icon: <Eye size={16} /> },
      { metric: '+190%', label: 'Weekday Footfall', icon: <Users size={16} /> },
      { metric: '+145%', label: 'Zomato Orders', icon: <Zap size={16} /> },
      { metric: '4.7★', label: 'Google Reviews', icon: <Star size={16} /> },
    ],
    testimonial: {
      quote: "We were a 20-table restaurant that nobody knew about. After GSARTH took over our Instagram, we started getting lines on weekends. The weekday campaign alone paid for the entire marketing retainer in the first month.",
      name: 'Chef Karthik Menon',
      role: 'Owner & Head Chef',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face'
    },
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=700&fit=crop',
    tags: ['Restaurant Marketing', 'Instagram Reels', 'Food Photography', 'Local Discovery']
  },
  {
    id: 'gym-fitness',
    industry: 'Fitness / Gym Chain',
    client: 'IronPulse Fitness',
    location: 'Sector 62, Noida',
    duration: '7 Months',
    budget: '₹42,000/month',
    before: { metric: '180 Members', desc: 'Stagnant growth, 3 new budget competitors' },
    after: { metric: '312 Members', desc: 'Waitlist for PT, viral transformation content' },
    challenge: 'A mid-size gym with modern equipment but stuck at 180 members. No digital presence. Competing against 3 new budget gyms that opened nearby with aggressive discounting. Membership renewals were dropping and new sign-ups had dried up.',
    strategy: [
      'Transformation content series: member before/after stories with full consent and emotional storytelling',
      'Instagram Reels featuring workout tips, trainer profiles, and gym culture content',
      'Google Ads for high-intent keywords ("gym near me", "personal trainer Noida") with offer landing pages',
      'Referral automation: existing members get 1 free month for every successful referral via WhatsApp'
    ],
    results: [
      { metric: '+215%', label: 'New Memberships', icon: <Users size={16} /> },
      { metric: '312', label: 'Active Members', icon: <Target size={16} /> },
      { metric: '+78%', label: 'Renewal Rate', icon: <TrendingUp size={16} /> },
      { metric: '+156%', label: 'Referral Signups', icon: <ArrowUpRight size={16} /> },
    ],
    testimonial: {
      quote: "Three new gyms opened within 2km of us. Instead of cutting prices, GSARTH helped us build a brand people wanted to belong to. Our member transformation videos went viral locally — now we have a waitlist for personal training.",
      name: 'Sanya Rawat',
      role: 'Founder',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face'
    },
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=700&fit=crop',
    tags: ['Fitness Marketing', 'Transformation Content', 'Referral Systems', 'Google Ads']
  }
]

/* ── Summary stats bar ── */
const summaryStats = [
  { value: '45+', label: 'Indian Brands Scaled', icon: <Briefcase size={18} /> },
  { value: '₹50Cr+', label: 'Revenue Generated', icon: <IndianRupee size={18} /> },
  { value: '8.2x', label: 'Avg. ROAS', icon: <BarChart3 size={18} /> },
  { value: '4.9★', label: 'Client Satisfaction', icon: <Star size={18} /> },
]

/* ── Process steps ── */
const processSteps = [
  { num: '01', title: 'Discovery & Audit', desc: 'Deep-dive into your current digital presence, competitors, and market gaps.' },
  { num: '02', title: 'Strategy Blueprint', desc: 'Custom roadmap with channel mix, budget allocation, and 90-day milestones.' },
  { num: '03', title: 'Creative Execution', desc: 'High-conversion assets: ads, landing pages, videos, signage, and content calendars.' },
  { num: '04', title: 'Launch & Optimize', desc: 'Campaign goes live with real-time tracking, A/B testing, and weekly performance reviews.' },
]

function CaseStudiesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={containerRef} className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-200 dark:bg-slate-800 z-50">
        <motion.div style={{ width: progressWidth }} className="h-full bg-blue-500" />
      </div>

      {/* ===== HERO ===== */}
      <header className="relative pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
              <Layers size={14} className="text-blue-400" />
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Proof Over Promises</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter leading-[0.85] mb-8 text-white">
              Success <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">Stories.</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-10">
              Real Indian brands. Real market challenges. <span className="text-white font-semibold">Real, measurable growth</span> — across Delhi NCR and beyond.
            </p>

            {/* Industry Pills */}
            <div className="flex flex-wrap gap-3">
              {caseStudies.map((s) => {
                const theme = industryThemes[s.industry]
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`group flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all hover:scale-105 ${theme.border} ${theme.darkBg} ${theme.text} border-current/20 hover:shadow-lg`}
                  >
                    <span className="opacity-70">{industryIcons[s.industry]}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">{s.industry.split(' / ')[0]}</span>
                    <ArrowDown size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
            <div className="w-1 h-2 bg-slate-400 rounded-full" />
          </div>
        </motion.div>
      </header>

      {/* ===== SUMMARY STATS ===== */}
      <section className="relative py-14 sm:py-18 bg-slate-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {summaryStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 text-blue-400 mb-4">
                  {stat.icon}
                </div>
                <p className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
                  {stat.value}
                </p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CASE STUDY CARDS ===== */}
      <section className="py-20 sm:py-28 md:py-36 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-32 sm:space-y-40 lg:space-y-48">
          {caseStudies.map((study, i) => {
            const theme = industryThemes[study.industry]
            const isReversed = i % 2 === 1
            return (
              <motion.article
                key={study.id}
                id={study.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Case Number Watermark */}
                <div className="absolute -top-12 sm:-top-16 left-0 sm:left-4 text-[8rem] sm:text-[12rem] font-black text-slate-100 dark:text-slate-900 leading-none select-none pointer-events-none">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start ${isReversed ? 'lg:direction-rtl' : ''}`}>
                  {/* IMAGE COLUMN */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : ''}`}>
                    {/* Before/After Bar */}
                    <div className="flex mb-4">
                      <div className="flex-1 p-3 sm:p-4 rounded-l-xl sm:rounded-l-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Before</p>
                        <p className="text-sm sm:text-base font-black text-slate-500">{study.before.metric}</p>
                        <p className="text-[9px] sm:text-[10px] text-slate-400 mt-1 leading-snug">{study.before.desc}</p>
                      </div>
                      <div className="flex items-center justify-center px-3 sm:px-4 bg-slate-950 dark:bg-white">
                        <ArrowRight size={16} className="text-white dark:text-slate-950" />
                      </div>
                      <div className={`flex-1 p-3 sm:p-4 rounded-r-xl sm:rounded-r-2xl ${theme.bg} ${theme.darkBg} border ${theme.border}`}>
                        <p className={`text-[9px] sm:text-[10px] font-black uppercase tracking-widest ${theme.text} mb-1`}>After</p>
                        <p className={`text-sm sm:text-base font-black ${theme.text}`}>{study.after.metric}</p>
                        <p className="text-[9px] sm:text-[10px] text-slate-500 mt-1 leading-snug">{study.after.desc}</p>
                      </div>
                    </div>

                    {/* Main Image */}
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden group shadow-2xl shadow-slate-900/10">
                      <img
                        src={study.image}
                        alt={study.client}
                        width={800}
                        height={450}
                        loading="lazy"
                        decoding="async"
                        className="w-full aspect-[16/9] object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                      {/* Play button overlay hint */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                          <Play size={24} className="text-slate-900 ml-1" fill="currentColor" />
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex flex-wrap gap-2">
                        {study.tags.map(tag => (
                          <span key={tag} className="px-3 py-1.5 rounded-full bg-white/95 text-slate-900 text-[9px] sm:text-[10px] font-black uppercase tracking-widest shadow-lg">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pull Quote Testimonial */}
                    <div className="mt-6 sm:mt-8 relative pl-6 sm:pl-8">
                      <Quote size={24} className={`absolute top-0 left-0 ${theme.text} opacity-30`} />
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed italic">
                        {study.testimonial.quote}
                      </p>
                      <div className="flex items-center gap-3 mt-4">
                        <img
                          src={study.testimonial.image}
                          alt={study.testimonial.name}
                          width={40}
                          height={40}
                          loading="lazy"
                          decoding="async"
                          className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-700"
                        />
                        <div>
                          <p className="text-sm font-black">{study.testimonial.name}</p>
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{study.testimonial.role}, {study.client}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT COLUMN */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    {/* Industry Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${theme.bg} ${theme.darkBg} border ${theme.border} mb-5`}>
                      <span className={theme.text}>{industryIcons[study.industry]}</span>
                      <span className={`text-[10px] font-black uppercase tracking-[0.25em] ${theme.text}`}>{study.industry}</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3">
                      {study.client}
                    </h2>

                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><MapPin size={11} /> {study.location}</span>
                      <span className="flex items-center gap-1.5"><Calendar size={11} /> {study.duration}</span>
                      <span className="flex items-center gap-1.5"><IndianRupee size={11} /> {study.budget}</span>
                    </div>

                    {/* Challenge */}
                    <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                      <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-3">The Challenge</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Strategy Steps */}
                    <div className="mb-8">
                      <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-4">GSARTH Strategy</h3>
                      <div className="space-y-4">
                        {study.strategy.map((s, si) => (
                          <div key={si} className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black ${theme.bg} ${theme.darkBg} ${theme.text} shrink-0`}>
                                {si + 1}
                              </div>
                              {si < study.strategy.length - 1 && (
                                <div className="w-px flex-1 bg-slate-200 dark:bg-slate-800 mt-1" />
                              )}
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pb-4">{s}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Results — Horizontal Metrics Bar */}
                    <div className="grid grid-cols-2 gap-3">
                      {study.results.map((res, ri) => (
                        <motion.div
                          key={res.label}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: ri * 0.08 }}
                          className={`p-4 rounded-xl ${theme.bg} ${theme.darkBg} border ${theme.border}`}
                        >
                          <div className={`mb-2 ${theme.text}`}>{res.icon}</div>
                          <p className={`text-2xl sm:text-3xl font-black ${theme.text} mb-0.5`}>{res.metric}</p>
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{res.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      {/* ===== GSARTH PROCESS ===== */}
      <section className="py-20 sm:py-28 md:py-36 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400 mb-4">How We Deliver</p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-5">
              The GSARTH Process.
            </h3>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              A proven framework that turns market challenges into measurable growth — every time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group hover:shadow-xl transition-all"
              >
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-slate-950 text-white flex items-center justify-center text-lg font-black group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h4 className="text-lg sm:text-xl font-black mb-3">{step.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PERFORMANCE BENCHMARKS ===== */}
      <section className="py-20 sm:py-28 md:py-36 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-4">Performance Benchmarks</p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-5">
              Results by Industry.
            </h3>
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
              Aggregated data across 45+ Indian clients. These are typical outcomes — not outliers.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="bg-white/5">
                  <th className="text-left py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Industry</th>
                  <th className="text-left py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Primary Service</th>
                  <th className="text-right py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Typical Improvement</th>
                  <th className="text-right py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Cost Per Lead</th>
                  <th className="text-right py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Duration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { industry: 'D2C / E-Commerce', service: 'Meta Ads + UGC', improvement: '+220% Revenue', cpl: '₹180 → ₹75', duration: '6-8 months', color: 'text-rose-400' },
                  { industry: 'Dental / Healthcare', service: 'GMB + Local SEO', improvement: '+250% Walk-ins', cpl: 'Organic', duration: '3-5 months', color: 'text-emerald-400' },
                  { industry: 'JEE/NEET Coaching', service: 'Meta Lead Ads', improvement: '+300% Inquiries', cpl: '₹85 – ₹150', duration: '2-4 months', color: 'text-amber-400' },
                  { industry: 'Real Estate', service: 'Google Ads + CRM', improvement: '+180% Site Visits', cpl: '₹1,800 – ₹3,200', duration: '8-12 months', color: 'text-violet-400' },
                  { industry: 'Restaurants / F&B', service: 'Instagram + GMB', improvement: '+160% Footfall', cpl: '₹25 – ₹60', duration: '3-6 months', color: 'text-orange-400' },
                  { industry: 'Gyms / Fitness', service: 'Reels + Referral', improvement: '+190% Signups', cpl: '₹350 – ₹650', duration: '4-7 months', color: 'text-sky-400' },
                ].map((row, i) => (
                  <motion.tr
                    key={row.industry}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border-t border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-5 px-6 text-sm font-bold">{row.industry}</td>
                    <td className="py-5 px-6 text-sm text-slate-400">{row.service}</td>
                    <td className={`py-5 px-6 text-sm font-black text-right ${row.color}`}>{row.improvement}</td>
                    <td className="py-5 px-6 text-sm text-slate-300 text-right">{row.cpl}</td>
                    <td className="py-5 px-6 text-sm text-slate-500 text-right">{row.duration}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-3">
            {[
              { industry: 'D2C / E-Commerce', service: 'Meta Ads + UGC', improvement: '+220% Revenue', cpl: '₹180 → ₹75', duration: '6-8 months', accent: 'bg-rose-500' },
              { industry: 'Dental / Healthcare', service: 'GMB + Local SEO', improvement: '+250% Walk-ins', cpl: 'Organic', duration: '3-5 months', accent: 'bg-emerald-500' },
              { industry: 'JEE/NEET Coaching', service: 'Meta Lead Ads', improvement: '+300% Inquiries', cpl: '₹85 – ₹150', duration: '2-4 months', accent: 'bg-amber-500' },
              { industry: 'Real Estate', service: 'Google Ads + CRM', improvement: '+180% Site Visits', cpl: '₹1,800 – ₹3,200', duration: '8-12 months', accent: 'bg-violet-500' },
              { industry: 'Restaurants / F&B', service: 'Instagram + GMB', improvement: '+160% Footfall', cpl: '₹25 – ₹60', duration: '3-6 months', accent: 'bg-orange-500' },
              { industry: 'Gyms / Fitness', service: 'Reels + Referral', improvement: '+190% Signups', cpl: '₹350 – ₹650', duration: '4-7 months', accent: 'bg-sky-500' },
            ].map((row, i) => (
              <motion.div
                key={row.industry}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 rounded-xl bg-white/5 border border-white/10"
              >
                <div className={`w-1 h-8 rounded-full ${row.accent} mb-3`} />
                <p className="text-sm font-bold mb-1">{row.industry}</p>
                <p className="text-xs text-slate-400 mb-3">{row.service}</p>
                <div className="flex justify-between text-xs">
                  <span className="text-white font-black">{row.improvement}</span>
                  <span className="text-slate-400">{row.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 sm:py-32 md:py-40 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-6">
            <Sparkles size={14} className="text-blue-500" />
            <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">Your Turn</span>
          </div>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            Your Brand Could Be <br className="hidden sm:block" /> Our Next Story.
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you are a ₹10,000/month local shop or a ₹10L/month D2C brand — we build campaigns that deliver measurable, documented growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-premium inline-flex items-center justify-center gap-3 text-xs sm:text-sm px-8 sm:px-10 py-4 sm:py-5">
              Start Your Case Study <ArrowRight size={16} />
            </Link>
            <a href="#d2c-brand" className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-full border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              Browse All Stories
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
