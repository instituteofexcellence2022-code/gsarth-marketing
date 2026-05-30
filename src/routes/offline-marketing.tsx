import { createFileRoute, Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Megaphone, 
  Award, 
  Camera, 
  Printer, 
  CheckCircle2, 
  Users, 
  Truck, 
  ShieldCheck,
  BarChart3,
  MapPin,
  QrCode,
  MousePointer2,
  TrendingUp,
  Cpu,
  FileText,
  ClipboardCheck,
  Timer,
  PenTool,
  ChevronDown
} from 'lucide-react'
import { useState } from 'react'
import { generateMetadata } from '~/lib/seo'

export const Route = createFileRoute('/offline-marketing')({
  head: () => generateMetadata({
    title: 'Offline Marketing & Branding Packages | GSARTH',
    description: 'Premium offline marketing strategies. From high-impact hoardings and transit branding to QR-integrated print campaigns and local activations.',
    keywords: 'Billboard Advertising India, Hoarding Pricing, Event Branding Packages, Retail Branding, Transit Advertising, QR Marketing, Offline to Online Funnel'
  }),
  component: OfflineMarketingPage,
})

const categories = [
  { id: 'hoardings', name: 'Hoardings & Billboards', icon: <Megaphone size={18} /> },
  { id: 'events', name: 'Event Branding', icon: <Award size={18} /> },
  { id: 'retail', name: 'Retail & Shop', icon: <Camera size={18} /> },
  { id: 'print', name: 'Print & Corporate', icon: <Printer size={18} /> },
  { id: 'flyers', name: 'Flyers & Pamphlets', icon: <CheckCircle2 size={18} /> },
  { id: 'transit', name: 'Transit & Vehicle', icon: <Truck size={18} /> },
  { id: 'activations', name: 'Local Activations', icon: <Users size={18} /> },
]

const pricingData: Record<string, any[]> = {
  hoardings: [
    { t: 'Starter', p: '25,000', d: 'Local businesses & startups', items: ['Small city/local hoarding', '1 location placement', 'Creative adaptation', 'Basic campaign consultation', 'Installation support'] },
    { t: 'Growth', p: '75,000', d: 'Growing regional brands', items: ['Multiple hoarding locations', 'Premium traffic-area placement', 'Billboard creative design', 'Audience targeting consultation', 'Monthly visibility strategy', 'Campaign management'] },
    { t: 'Enterprise', p: '2,50,000', d: 'National & premium brands', items: ['Multi-city campaign planning', 'Premium highway & metro locations', 'Media buying strategy', 'Performance reporting', 'Dedicated campaign manager', 'Full branding consultation'] },
  ],
  events: [
    { t: 'Starter', p: '15,000', d: 'Basic event setups', items: ['Stage backdrop', 'Standee design', 'Basic branding kit', 'Welcome desk branding'] },
    { t: 'Growth', p: '50,000', d: 'Professional exhibitions', items: ['Stall branding', 'LED branding', 'Promotional material', 'Event setup consultation', 'Social media coverage support'] },
    { t: 'Enterprise', p: '2,00,000', d: 'Full-scale brand experiences', items: ['Full event identity design', 'Premium exhibition branding', 'Interactive setup', 'AV branding', 'Digital integration', 'On-site branding management'] },
  ],
  retail: [
    { t: 'Starter', p: '10,000', d: 'Standard shop front', items: ['Sign board', 'Basic storefront branding', 'Vinyl branding'] },
    { t: 'Growth', p: '40,000', d: 'Professional storefronts', items: ['Glow sign board', 'Window graphics', 'Interior branding', 'Product display branding'] },
    { t: 'Enterprise', p: '1,50,000', d: 'Premium showroom identity', items: ['Full showroom branding', 'Lighting consultation', 'Premium signage', 'Reception branding', 'Brand environment design'] },
  ],
  print: [
    { t: 'Starter', p: '5,000', d: 'Essential business kit', items: ['Visiting cards', 'Flyers', 'Basic brochure'] },
    { t: 'Growth', p: '20,000', d: 'Full business branding', items: ['Company profile', 'Catalog design', 'Premium print material', 'Brand stationery'] },
    { t: 'Enterprise', p: '75,000', d: 'Corporate identity system', items: ['Corporate identity system', 'Investor presentation kit', 'Premium packaging', 'Executive branding assets'] },
  ],
  flyers: [
    { t: 'Starter', p: '8,000', d: 'Local area awareness', items: ['2,000 flyer distribution', 'Area targeting', 'Basic design support'] },
    { t: 'Growth', p: '25,000', d: 'Hyperlocal penetration', items: ['10,000+ flyer distribution', 'Society targeting', 'Market campaign', 'Performance planning'] },
    { t: 'Enterprise', p: '1,00,000', d: 'Mass market reach', items: ['Multi-area distribution', 'Newspaper insert campaigns', 'Brand promoters', 'Reporting dashboard'] },
  ],
  transit: [
    { t: 'Starter', p: '12,000', d: 'Local mobile reach', items: ['10 auto placements', 'Design support', 'Installation'] },
    { t: 'Growth', p: '60,000', d: 'City-wide visibility', items: ['Cab branding', 'Auto branding', 'Route targeting', 'Campaign management'] },
    { t: 'Enterprise', p: '3,00,000', d: 'Multi-city transit', items: ['Bus branding', 'Fleet branding', 'Metro advertising', 'Multi-city visibility'] },
  ],
  activations: [
    { t: 'Starter', p: '15,000', d: 'Single spot activation', items: ['Local promotion setup', '2 brand promoters', 'Public interaction activities'] },
    { t: 'Growth', p: '50,000', d: 'Market-wide engagement', items: ['Sampling campaign', 'Booth activities', 'Lead collection', 'Engagement activities'] },
    { t: 'Enterprise', p: '2,50,000', d: 'Experiential roadshows', items: ['Roadshows', 'Multi-location activations', 'Influencer integration', 'Real-time reporting'] },
  ],
}

const includedInEveryCampaign = [
  { icon: <PenTool size={18} />, t: 'Professional creative', d: 'Design built for distance readability, recall, and trust — not generic templates.' },
  { icon: <ClipboardCheck size={18} />, t: 'Execution & QA', d: 'Vendor coordination, print checks, and on-ground quality validation.' },
  { icon: <QrCode size={18} />, t: 'QR + attribution (optional)', d: 'Trackable QR/UTM flows to measure scans, clicks, and WhatsApp conversions.' },
  { icon: <FileText size={18} />, t: 'Documentation & proofs', d: 'Photo proofs and a clear summary of what was delivered and where.' },
]

const costDrivers = [
  { t: 'Location & traffic density', d: 'Premium corridors, metro zones, and high-speed highways cost more but drive higher recall.' },
  { t: 'Size, material & illumination', d: 'LED, acrylic, glow signage, and larger formats increase production complexity and cost.' },
  { t: 'Duration & number of placements', d: 'More sites and longer exposure typically reduce per-unit cost and increase reach.' },
  { t: 'Creative complexity', d: 'Illustration-heavy or multi-format adaptations require more production time.' },
]

const offlineProcess = [
  { step: '01', t: 'Audit & plan', d: 'We assess your area, competitors, and target audience to recommend placements and formats.' },
  { step: '02', t: 'Design & production', d: 'We build creatives and coordinate print/production with quality checks.' },
  { step: '03', t: 'Install & launch', d: 'On-ground execution with proof, compliance coordination, and go-live checks.' },
  { step: '04', t: 'Measure & improve', d: 'If QR/landing pages are used, we track engagement and optimize the next cycle.' },
]

function OfflineMarketingPage() {
  const [activeCategory, setActiveCategory] = useState('hoardings')

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Premium Hero Section */}
      <header className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 lg:pb-32 relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] sm:h-[600px] lg:h-[800px] bg-orange-600/10 blur-[80px] lg:blur-[150px] -z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 sm:mb-8">
               <span className="text-[9px] sm:text-[10px] font-black text-orange-400 uppercase tracking-[0.3em] sm:tracking-[0.4em]">Strategic Offline Dominance</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter mb-6 sm:mb-10 leading-[0.85] text-white">
              Beyond Digital. <br /><span className="text-orange-600">Into Reality.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
              Dominating streets, markets, and minds. We engineer real-world visibility 
              that bridges the gap between digital awareness and physical trust.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mt-10 sm:mt-16">
               <Link to="/contact" className="px-6 sm:px-10 py-4 sm:py-5 bg-orange-600 text-white rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-orange-700 transition-all shadow-2xl shadow-orange-600/20">Architect Your Presence</Link>
               <a href="#packages" className="px-6 sm:px-10 py-4 sm:py-5 border-2 border-white/10 text-white rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-white/5 transition-all">View Packages</a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* The Hybrid Advantage: Offline to Online */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
              <div>
                 <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-orange-600 mb-4 sm:mb-6">The Omnichannel Edge</h2>
                 <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 sm:mb-8">Offline Branding <br className="hidden sm:block" /> Engineered for Attention.</h3>
                 <p className="text-sm sm:text-base lg:text-lg text-slate-500 dark:text-slate-400 mb-8 sm:mb-12 leading-relaxed">
                   Stop managing disconnected agencies. GSARTH unifies your digital authority with high-impact physical presence. 
                   Our "Offline-to-Online" funnel converts street visibility into CRM-ready leads through integrated tracking.
                 </p>
                 
                 <div className="space-y-6 sm:space-y-8">
                    {[
                      { icon: <QrCode size={20} />, t: 'QR Integrated Campaigns', d: 'Every hoarding and pamphlet includes dynamic tracking for real-time attribution.' },
                      { icon: <MousePointer2 size={20} />, t: 'Physical to Digital Funnels', d: 'Seamlessly guide customers from the street to your high-conversion landing pages.' },
                      { icon: <BarChart3 size={20} />, t: 'Attribution Analytics', d: 'We provide estimated impressions and scan data, making offline marketing measurable.' }
                    ].map(f => (
                      <div key={f.t} className="flex gap-4 sm:gap-6">
                         <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 bg-orange-50 dark:bg-orange-950 rounded-xl sm:rounded-2xl flex items-center justify-center text-orange-600">
                            {f.icon}
                         </div>
                         <div>
                            <h4 className="text-lg sm:text-xl font-black mb-1 sm:mb-2">{f.t}</h4>
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{f.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative">
                 <div className="aspect-square rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl relative z-10 border border-slate-100 dark:border-slate-800">
                    <img src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?auto=format&fit=crop&q=80&w=1200" alt="Offline Strategy" width={800} height={800} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-orange-600/10 mix-blend-overlay" />
                 </div>
                 <div className="absolute -bottom-6 sm:-bottom-10 -left-4 sm:-left-10 p-4 sm:p-6 lg:p-10 bg-slate-950 rounded-2xl sm:rounded-3xl shadow-2xl z-20 border border-white/10">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                       <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                       <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400">Live Campaign Monitor</p>
                    </div>
                    <p className="text-xl sm:text-2xl font-black text-white">+18.4k <span className="text-[9px] sm:text-xs text-orange-400 uppercase">QR Scans</span></p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            <div className="max-w-2xl">
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-orange-600 mb-4 sm:mb-6">How We Execute</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Offline marketing that looks premium and stays accountable.
              </h3>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
              Offline works when it is planned, professionally produced, and executed with discipline. We make it trackable when needed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {includedInEveryCampaign.map((x) => (
              <div key={x.t} className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                <div className="h-11 w-11 rounded-2xl bg-orange-50 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center mb-5">
                  {x.icon}
                </div>
                <h4 className="text-base sm:text-lg font-black mb-2">{x.t}</h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[3rem] bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="h-11 w-11 rounded-2xl bg-orange-50 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center">
                  <Timer size={20} />
                </div>
                <h4 className="text-xl sm:text-2xl font-black">What affects pricing?</h4>
              </div>
              <div className="space-y-4 sm:space-y-5">
                {costDrivers.map((d) => (
                  <div key={d.t} className="flex gap-3 sm:gap-4">
                    <CheckCircle2 size={16} className="text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm sm:text-base font-black text-slate-900 dark:text-white mb-1">{d.t}</p>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{d.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[3rem] bg-slate-950 text-white border border-white/10 shadow-2xl shadow-orange-600/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              <div className="relative">
                <h4 className="text-xl sm:text-2xl font-black mb-3">Our 4-step rollout</h4>
                <p className="text-sm sm:text-base text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                  From audit to on-ground execution — with professional creative and optional trackable funnels.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {offlineProcess.map((s) => (
                    <div key={s.step} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                      <p className="text-2xl font-black text-orange-400/40 mb-2">{s.step}</p>
                      <p className="font-black mb-1">{s.t}</p>
                      <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">{s.d}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="px-6 sm:px-10 py-4 sm:py-5 bg-orange-600 text-white rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-orange-700 transition-all text-center shadow-xl shadow-orange-600/20">
                    Request Proposal
                  </Link>
                  <a href="#packages" className="px-6 sm:px-10 py-4 sm:py-5 border-2 border-white/15 text-white rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-white/5 transition-all text-center">
                    View Packages
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovative Features Hub */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
               <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-orange-600 mb-4 sm:mb-6">Strategic Innovation</h2>
               <h3 className="text-3xl sm:text-4xl md:text-5xl font-black">Modern Agency Capabilities.</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
               {[
                 { icon: <MapPin size={20} />, t: 'Campaign Heatmaps', d: 'High-traffic placement analysis and audience density mapping for precision targeting.' },
                 { icon: <Cpu size={20} />, t: 'AI Location Logic', d: 'Proprietary models to suggest the best locations based on traffic intelligence.' },
                 { icon: <ShieldCheck size={20} />, t: 'Real-Time Audit', d: 'Photo proof uploads and daily monitoring of your physical brand assets.' },
                 { icon: <TrendingUp size={20} />, t: 'Reach Calculator', d: 'Estimated impressions and visibility scores for every offline placement.' }
               ].map(f => (
                 <div key={f.t} className="card-premium group p-6 sm:p-8 lg:p-10">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all">
                       {f.icon}
                    </div>
                    <h4 className="text-base sm:text-lg font-black mb-2 sm:mb-3">{f.t}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{f.d}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Pricing & Packages Section */}
      <section id="packages" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-orange-600 mb-4 sm:mb-6">Pricing Architecture</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-8">Strategic Packages.</h3>
            <p className="text-sm sm:text-base lg:text-lg text-slate-500 max-w-2xl mx-auto">
              Choose the depth of visibility your brand requires. All packages include basic strategic consultation.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-16">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition-all border
                  ${activeCategory === cat.id 
                    ? 'bg-orange-600 text-white border-orange-600 shadow-xl shadow-orange-600/20' 
                    : 'bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-orange-500/50'
                  }`}
              >
                <span className={activeCategory === cat.id ? 'text-white' : 'text-orange-600'}>
                  {cat.icon}
                </span>
                <span className="hidden sm:inline">{cat.name}</span>
                <span className="sm:hidden">{cat.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Dynamic Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <AnimatePresence mode="wait">
              {pricingData[activeCategory].map((p, i) => (
                <motion.div
                  key={p.t + activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[3rem] border transition-all duration-500
                    ${p.t === 'Growth' 
                      ? 'bg-slate-950 text-white border-slate-800 shadow-2xl md:scale-105 z-10' 
                      : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800'
                    }`}
                >
                  {p.t === 'Growth' && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-orange-600 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white">Most Recommended</div>
                  )}
                  <p className={`text-[9px] sm:text-xs font-black uppercase tracking-widest mb-2 ${p.t === 'Growth' ? 'text-orange-400' : 'text-orange-600'}`}>{p.t} Package</p>
                  <h4 className="text-2xl sm:text-3xl font-black mb-2">₹{p.p}<span className="text-xs sm:text-sm font-normal opacity-60">/starting</span></h4>
                  <p className="text-xs sm:text-sm mb-6 sm:mb-8 lg:mb-10 opacity-60 font-medium">{p.d}</p>
                  
                  <ul className="space-y-2 sm:space-y-3 lg:space-y-4 mb-8 sm:mb-10 lg:mb-12">
                    {p.items.map((item: string) => (
                      <li key={item} className="flex gap-2 sm:gap-3 text-xs sm:text-sm font-bold">
                        <CheckCircle2 size={14} className={p.t === 'Growth' ? 'text-orange-400' : 'text-orange-600'} />
                        <span className={p.t === 'Growth' ? 'text-slate-300' : 'text-slate-500'}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact" 
                    className={`block w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest text-center transition-all
                      ${p.t === 'Growth' 
                        ? 'bg-white text-slate-950 hover:bg-orange-500 hover:text-white' 
                        : 'bg-slate-950 text-white dark:bg-orange-600 hover:bg-orange-700'
                      }`}
                  >
                    Get Quote
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/40">
         <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-[9px] sm:text-[10px] font-black text-orange-600 text-center uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-8 sm:mb-12">Industry-Specific Solutions</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
               {['Education', 'Healthcare', 'Restaurants', 'Retail', 'Real Estate', 'Startups', 'Corporate'].map(ind => (
                 <div key={ind} className="px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 text-center text-[10px] sm:text-xs font-black uppercase tracking-widest hover:border-orange-500 transition-colors cursor-default">
                    {ind}
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Visibility Audit CTA */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 container-wide">
         <div className="p-8 sm:p-12 md:p-16 lg:p-24 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] bg-orange-600 relative overflow-hidden text-center text-white">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10 max-w-3xl mx-auto">
               <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 sm:mb-8 leading-tight">Claim Your Free <br className="hidden sm:block" /> Brand Visibility Audit.</h2>
               <p className="text-sm sm:text-base lg:text-xl text-orange-100 mb-8 sm:mb-12 font-medium">
                  We will analyze your shop front, existing billboards, or competitor branding 
                  and provide a professional strategic report. No obligation.
               </p>
               <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
                  <Link to="/contact" className="px-6 sm:px-10 py-4 sm:py-5 bg-white text-orange-600 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-slate-100 transition-all shadow-xl">Request Free Audit</Link>
                  <a href="https://wa.me/919311015100" className="px-6 sm:px-10 py-4 sm:py-5 border-2 border-white/20 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-white/10 transition-all">WhatsApp Inquiry</a>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 max-w-4xl mx-auto px-4 sm:px-6">
         <h3 className="text-2xl sm:text-3xl font-black text-center mb-10 sm:mb-16">Frequently Asked Questions</h3>
         <div className="space-y-3 sm:space-y-4">
            {[
              { q: 'How do you track offline campaign performance?', a: 'We use dynamic QR codes, dedicated landing pages, and attribution modeling to estimate impressions and measure direct engagement from physical assets.' },
              { q: 'Can you help us find the best hoarding locations?', a: 'Yes. We use traffic intelligence and heatmap analysis to suggest locations that offer the highest audience density for your specific target market.' },
              { q: 'Do you handle permissions and municipal compliance?', a: 'Absolutely. GSARTH manages all municipal permissions, structural audits, and legal compliance required for outdoor advertising.' }
            ].map((f, i) => (
              <details key={i} className="group p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer">
                 <summary className="list-none flex items-center justify-between font-bold text-sm sm:text-base lg:text-lg">
                    {f.q}
                    <ChevronDown size={18} className="group-open:rotate-180 transition-transform" />
                 </summary>
                 <p className="mt-4 sm:mt-6 text-slate-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base">{f.a}</p>
              </details>
            ))}
         </div>
      </section>
    </div>
  )
}
