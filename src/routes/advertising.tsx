import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  ArrowRight, Building2, GraduationCap, Hospital, Landmark, BarChart3,
  Megaphone, QrCode, Users, MapPin,
  Store, Stethoscope, Dumbbell, BookOpen, UtensilsCrossed, Rocket,
  CheckCircle2, Briefcase, Zap, Target, Monitor, Smartphone,
  Printer, Truck, Layout, Search,
  ChevronDown, Star, MessageSquare, Phone
} from 'lucide-react'
import { generateMetadata } from '~/lib/seo'

export const Route = createFileRoute('/advertising')({
  head: () => generateMetadata({
    title: 'Advertising Solutions | Enterprise & Local Business Marketing',
    description: 'GSARTH delivers strategic advertising for every scale — from enterprise branding and institutional campaigns to hyperlocal business promotions and shop branding.',
    keywords: 'enterprise marketing agency, institutional branding, local business advertising, hoarding advertising Delhi, shop branding, clinic marketing, restaurant promotions, coaching center branding'
  }),
  component: AdvertisingPage,
})

const enterpriseServices = [
  {
    icon: <Building2 size={22} />,
    title: 'Corporate Branding Systems',
    desc: 'Full-spectrum identity architecture for organizations that require scale, consistency, and authority across every touchpoint.',
    capabilities: [
      'Corporate Identity Design',
      'Brand Architecture & Hierarchy',
      'Multi-Branch Branding Systems',
      'Corporate Signage & Wayfinding',
      'Reception & Office Branding',
      'Comprehensive Brand Guidelines',
      'Employer Branding & Recruitment',
      'Internal Brand Communication'
    ],
    bestFor: ['Universities', 'Hospitals', 'Enterprises', 'Corporate Offices', 'Institutes'],
    color: 'blue'
  },
  {
    icon: <Megaphone size={22} />,
    title: 'Large-Scale Outdoor Advertising',
    desc: 'Massive visibility campaigns across highways, metros, airports, and transit corridors with measurable attribution.',
    capabilities: [
      'Highway Mega-Hoardings',
      'Metro & City Billboards',
      'Airport Advertising Zones',
      'Transit Media (Bus, Cab, Auto)',
      'Digital Outdoor LED Screens',
      'Multi-City Campaign Rollouts'
    ],
    addons: ['QR-integrated hoardings', 'Campaign analytics dashboard', 'Geo-targeted visibility planning', 'Traffic heatmap analysis'],
    color: 'indigo'
  },
  {
    icon: <GraduationCap size={22} />,
    title: 'Institutional Marketing Solutions',
    desc: 'Enrollment-driven campaigns designed for educational and healthcare institutions competing in crowded markets.',
    capabilities: [
      'Admission Campaign Strategy',
      'Education Brand Identity',
      'Campus Promotion Systems',
      'Student Outreach Campaigns',
      'Awareness Drive Execution',
      'Public Relations Campaigns'
    ],
    bestFor: ['Schools', 'Colleges', 'Universities', 'Coaching Chains', 'Healthcare Groups'],
    color: 'emerald'
  },
  {
    icon: <Monitor size={22} />,
    title: 'Enterprise Digital Marketing',
    desc: 'Scalable digital infrastructure for multi-location brands requiring unified messaging and lead pipeline engineering.',
    capabilities: [
      'Enterprise SEO & Authority Building',
      'Online Reputation Management',
      'Multi-Location Local SEO',
      'Performance Marketing at Scale',
      'Lead Funnel Architecture',
      'CRM-Integrated Marketing Automation'
    ],
    color: 'purple'
  }
]

const enterprisePricing = [
  {
    tier: 'Enterprise Starter',
    price: '₹1,50,000',
    period: '/month',
    tag: null,
    desc: 'Medium-sized institutions and multi-location businesses ready for structured growth.',
    features: [
      'Dedicated campaign strategist',
      'Multi-channel campaign planning',
      'Monthly performance reports',
      'Brand health monitoring',
      'Priority support channel'
    ]
  },
  {
    tier: 'Enterprise Growth',
    price: '₹5,00,000',
    period: '/month',
    tag: 'Most Popular',
    desc: 'Large educational institutes, healthcare groups, and real estate developers scaling fast.',
    features: [
      'Everything in Starter',
      'Multi-city campaign execution',
      'Offline + Online integration',
      'Premium media buying access',
      'Campaign analytics dashboard',
      'Weekly strategy calls'
    ]
  },
  {
    tier: 'Enterprise Authority',
    price: 'Custom',
    period: ' Pricing',
    tag: 'Bespoke',
    desc: 'Full-service strategic partnership for market-dominating organizations.',
    features: [
      'Everything in Growth',
      'Dedicated strategy team (3+)',
      'National campaign coverage',
      'Premium outdoor media access',
      'Custom analytics dashboard',
      'Quarterly business reviews',
      'Strategic consulting retainers'
    ]
  }
]

const enterpriseDelivery = [
  { step: '01', title: 'Discovery & Governance', desc: 'Stakeholder alignment, audit, KPI definition, and governance cadence for clean execution.' },
  { step: '02', title: 'Campaign Architecture', desc: 'Channel plan, creative direction, media buying logic, and rollout timeline across locations.' },
  { step: '03', title: 'Execution at Scale', desc: 'Design, production, approvals, installations, and digital orchestration with QA checkpoints.' },
  { step: '04', title: 'Measurement & Iteration', desc: 'Dashboards, reporting, learning loops, and optimization—so every month improves efficiency.' },
]

const enterpriseDeliverables = [
  'Brand system and campaign creative direction for consistency',
  'Outdoor media planning with placement strategy and buying support',
  'Digital growth layer: SEO / performance / reputation (as required)',
  'Offline-to-online funnel integration (QR, landing pages, WhatsApp routing)',
  'Campaign dashboards and executive-ready reporting',
  'Dedicated senior strategist and clear governance rhythm',
]

const localServices = [
  {
    icon: <Store size={20} />,
    title: 'Local Shop & Storefront Branding',
    desc: 'Transform your storefront into a customer-magnet with professional signage, glow signs, and visual identity that makes you the most visible business on your street.',
    items: ['Glow Sign Boards (LED/Acrylic)', 'Shop Front Branding & Fascia', 'Vinyl Window Graphics', 'Interior Wall Branding', 'Counter, Menu & POS Design', 'Directional & Parking Signage'],
    industries: ['Retail Shops', 'Salons', 'Cafes', 'Pharmacies', 'Boutiques'],
    price: '₹10,000',
    result: '3x more walk-ins'
  },
  {
    icon: <Printer size={20} />,
    title: 'Flyer & Pamphlet Marketing',
    desc: 'Hyperlocal distribution campaigns that put your brand directly into customer hands across societies, markets, and commercial hubs — with QR tracking.',
    items: ['Conversion-Focused Creative Design', 'Premium Offset/Digital Printing', 'Targeted Society Distribution', 'Market & Hub Campaigns', 'QR-Code Lead Tracking', 'Seasonal Offer Pamphlets'],
    industries: ['Coaching Centers', 'Clinics', 'Gyms', 'Restaurants', 'Real Estate'],
    price: '₹8,000',
    result: 'Up to 500+ local leads'
  },
  {
    icon: <Smartphone size={20} />,
    title: 'Local Digital Marketing & GMB',
    desc: 'Affordable digital packages designed to make local businesses discoverable on Google, Instagram, and WhatsApp — where your customers already spend time.',
    items: ['Instagram Reels & Growth Strategy', 'Google My Business Optimization', 'Local SEO & "Near Me" Ranking', 'WhatsApp Marketing Broadcasts', 'Facebook/Instagram Lead Ads', 'Review & Rating Management'],
    industries: ['Restaurants', 'Clinics', 'Gyms', 'Salons', 'Repair Services'],
    price: '₹15,000/mo',
    result: 'Top 3 Google Maps rank'
  },
  {
    icon: <Truck size={20} />,
    title: 'Hyperlocal Roadshows & Activations',
    desc: 'Boots-on-the-ground activations that create buzz, drive immediate footfall, and put your brand face-to-face with potential customers in your area.',
    items: ['Local Roadshows with Branded Van', 'Society Activation Camps', 'Mall & Market Stalls', 'Product Sampling Campaigns', 'Promoter Staffing & Training', 'Live Demo & Engagement Events'],
    industries: ['Fitness Centers', 'Beauty Brands', 'Food Startups', 'Education', 'Healthcare'],
    price: '₹20,000',
    result: 'Immediate footfall spike'
  },
  {
    icon: <Layout size={20} />,
    title: 'Small Business Website + SEO',
    desc: 'High-conversion, mobile-first websites built to turn visitors into leads and calls — with basic SEO so customers find you before they find competitors.',
    items: ['Mobile-Responsive Design', 'On-Page SEO Setup', 'Lead Generation Contact Forms', 'WhatsApp Click-to-Chat Button', 'Google Maps Integration', 'Fast Loading (Core Web Vitals)'],
    industries: ['Consultants', 'Lawyers', 'CA Firms', 'Clinics', 'Coaching'],
    price: '₹25,000',
    result: '2x more inquiry calls'
  },
  {
    icon: <Search size={20} />,
    title: 'Google Maps Dominance Package',
    desc: 'A specialized service to rank your business at the top of "near me" searches — the #1 way local customers discover new businesses today.',
    items: ['GMB Profile Full Optimization', 'Local Citation Building', 'Review Generation Strategy', 'Competitor Map Analysis', 'Photo & Post Content Calendar', 'Monthly Ranking Reports'],
    industries: ['Restaurants', 'Clinics', 'Gyms', 'Repair', 'Salons'],
    price: '₹12,000/mo',
    result: '#1 in local search'
  }
]

const localPackages = [
  {
    name: 'Local Starter',
    price: '₹18,000',
    desc: 'Perfect for new businesses entering the local market.',
    items: ['Shop Glow Sign Board', '1,000 Flyers + Distribution', 'Google My Business Setup', 'Basic WhatsApp Marketing']
  },
  {
    name: 'Local Growth',
    price: '₹35,000',
    desc: 'For businesses ready to aggressively grow local visibility.',
    items: ['Everything in Starter', 'Social Media Management', 'Local SEO Foundation', '500 QR Pamphlets', 'Monthly Performance Report']
  },
  {
    name: 'Local Domination',
    price: '₹55,000',
    desc: 'Complete local market takeover for ambitious local brands.',
    items: ['Everything in Growth', 'Small Business Website', 'Hyperlocal Roadshow (1 Event)', 'Google Ads Starter', 'Dedicated Account Manager']
  }
]

const enterpriseFeatures = [
  { icon: <BarChart3 size={20} />, title: 'Campaign Analytics Dashboard', desc: 'Real-time tracking of visibility, leads, QR scans, campaign reach, and geographic performance.' },
  { icon: <Zap size={20} />, title: 'Omnichannel Campaign System', desc: 'Hoarding → QR → Landing Page → WhatsApp → CRM. Fully integrated offline-to-online funnel.' },
  { icon: <Users size={20} />, title: 'Dedicated Brand Strategist', desc: 'A senior strategist assigned exclusively to your account for strategic continuity and speed.' },
  { icon: <Target size={20} />, title: 'Hyperlocal Domination Planning', desc: 'Region-specific campaign architecture to dominate your target geographic markets.' },
]

const localWhyChoose = [
  { icon: <Zap size={20} />, title: 'Affordable Premium Quality', desc: 'Enterprise-level creative quality at local business budgets. No shortcuts on design or strategy.' },
  { icon: <QrCode size={20} />, title: 'Offline → Online Integration', desc: 'Your hoardings, flyers, and shop signs connect to digital funnels via QR. Every rupee trackable.' },
  { icon: <MapPin size={20} />, title: 'Neighbourhood Domination', desc: 'We map your competition and engineer a visibility plan to make your brand the local category leader.' },
  { icon: <Smartphone size={20} />, title: 'WhatsApp Lead Engine', desc: 'Direct-response funnels that turn pamphlet readers and Google searchers into WhatsApp conversations.' },
  { icon: <Search size={20} />, title: '"Near Me" SEO Mastery', desc: 'We optimize for the exact searches your customers make: "best gym near me", "dentist in Saket", etc.' },
  { icon: <Rocket size={20} />, title: 'Launch in 7 Days', desc: 'No long waits. Local campaigns go live fast so you start seeing results within the first week.' },
]

const localIndustriesDetailed = [
  {
    icon: <Stethoscope size={20} />,
    name: 'Clinics & Hospitals',
    desc: 'Google Maps ranking, patient education content, local SEO, and appointment WhatsApp funnels.',
    color: 'emerald'
  },
  {
    icon: <UtensilsCrossed size={20} />,
    name: 'Restaurants & Cafes',
    desc: 'Instagram Reels strategy, GMB optimization, menu design, flyer distribution, and review management.',
    color: 'orange'
  },
  {
    icon: <Dumbbell size={20} />,
    name: 'Gyms & Fitness',
    desc: 'Transformation content, local influencer tie-ups, membership WhatsApp funnels, and hoarding ads.',
    color: 'blue'
  },
  {
    icon: <BookOpen size={20} />,
    name: 'Coaching & Education',
    desc: 'Admission campaigns, demo class promotions, pamphlet drives, and Google Ads for enrollments.',
    color: 'indigo'
  },
  {
    icon: <Store size={20} />,
    name: 'Retail & Boutiques',
    desc: 'Shop branding, seasonal offer campaigns, local digital ads, and loyalty program design.',
    color: 'pink'
  },
  {
    icon: <Building2 size={20} />,
    name: 'Real Estate Brokers',
    desc: 'Property listing sites, hoarding creatives, GMB optimization, and lead qualification funnels.',
    color: 'purple'
  },
]

const localResults = [
  { metric: '+312%', label: 'Local Search Visibility', client: 'Dental Clinic, South Delhi' },
  { metric: '+180%', label: 'Walk-in Footfall', client: 'Fashion Boutique, Lajpat Nagar' },
  { metric: '+240%', label: 'WhatsApp Inquiries', client: 'Fitness Studio, Gurgaon' },
  { metric: '+95%', label: 'Google Maps Ranking', client: 'Cafe Chain, Noida' },
]

const howItWorksSteps = [
  {
    step: '01',
    title: 'Free Visibility Audit',
    desc: 'We analyze your current Google presence, competitor positioning, and local market gaps — completely free.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
  },
  {
    step: '02',
    title: 'Custom Strategy Map',
    desc: 'You receive a tailored growth roadmap with exact services, timelines, and expected results for your business type.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop'
  },
  {
    step: '03',
    title: 'Creative Production & Setup',
    desc: 'Our team designs, prints, installs, and configures everything — from glow signs to Google Business profiles.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop'
  },
  {
    step: '04',
    title: 'Launch & Optimize',
    desc: 'Campaign goes live. We monitor, tweak, and report weekly so your results keep improving month after month.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
  }
]

const testimonials = [
  {
    quote: "GSARTH got us from page 3 to the top of Google Maps in 6 weeks. Our appointment calls doubled — and we didn't have to do anything. They handled everything.",
    name: 'Dr. Priya Sharma',
    role: 'Owner',
    business: 'Smile Dental Care, Saket',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
    rating: 5
  },
  {
    quote: "The QR pamphlet campaign was genius. 3,000 flyers in local societies brought us 180+ WhatsApp inquiries in one month. Best marketing spend we've ever done.",
    name: 'Rohit Mehta',
    role: 'Founder',
    business: 'FitLife Gym, Gurgaon',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    rating: 5
  },
  {
    quote: "They built our entire storefront — glow sign, menu boards, window vinyls — and our website. Walk-ins went up 180% in the first month alone. Absolutely worth it.",
    name: 'Ananya Kapoor',
    role: 'Co-owner',
    business: 'Brew & Bite Cafe, Noida',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    rating: 5
  }
]

const faqs = [
  {
    q: 'How long until I see results from local marketing?',
    a: 'Most clients see noticeable improvements within 2–4 weeks. Google Maps optimization typically shows results in 2–3 weeks. Shop signage and branding improvements can increase walk-ins immediately after installation. For digital campaigns, we set up tracking so you see real-time lead flow from day one.'
  },
  {
    q: 'I have a small budget — can you still help?',
    a: 'Absolutely. Our Local Starter package begins at just ₹18,000, and individual services like shop branding (₹10,000) or flyer marketing (₹8,000) are designed for small businesses. We recommend starting with one high-impact service and scaling up as you see returns.'
  },
  {
    q: 'Which areas do you cover for local services?',
    a: 'We currently serve Delhi NCR (Delhi, Gurgaon, Noida, Faridabad, Ghaziabad) with plans to expand to Jaipur, Chandigarh, and Mumbai. If you are outside these areas, contact us — we may still be able to serve you for digital-only packages.'
  },
  {
    q: 'Can I track how many leads come from flyers and hoardings?',
    a: 'Yes — this is one of our key differentiators. Every print piece includes a unique QR code and tracking URL. You get a dashboard showing exactly how many scans, clicks, form fills, and WhatsApp messages each campaign generated.'
  },
  {
    q: 'Do you handle both design and printing, or do I need to arrange printing?',
    a: 'We handle everything end-to-end: creative design, professional printing, installation (for signage), and distribution (for flyers). You do not need to coordinate with multiple vendors. One agency, one invoice, one result.'
  },
  {
    q: 'Is there a long-term contract or lock-in?',
    a: 'No lock-in for any local package. Most services are one-time projects (like shop branding or website builds). For monthly retainers (like local digital marketing), you can pause or cancel with 15 days notice. We believe results should earn retention, not contracts.'
  }
]

const industries = [
  { icon: <Building2 size={16} />, label: 'Corporate' },
  { icon: <GraduationCap size={16} />, label: 'Education' },
  { icon: <Hospital size={16} />, label: 'Healthcare' },
  { icon: <Landmark size={16} />, label: 'Real Estate' },
  { icon: <Store size={16} />, label: 'Retail' },
  { icon: <UtensilsCrossed size={16} />, label: 'Restaurants' },
  { icon: <Stethoscope size={16} />, label: 'Clinics' },
  { icon: <Dumbbell size={16} />, label: 'Gyms' },
  { icon: <BookOpen size={16} />, label: 'Coaching' },
  { icon: <Rocket size={16} />, label: 'Startups' },
]

function AdvertisingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      {/* ===== HERO ===== */}
      <header className="relative pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[120px] -z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 sm:mb-8">
              <span className="text-[9px] sm:text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Premium Strategic Partner</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-black tracking-tighter leading-[0.9] mb-6 sm:mb-8 text-white">
              Advertising <br /> <span className="text-blue-500">Solutions.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-3xl leading-relaxed mb-8 sm:mb-10">
              From <strong className="text-white">Local Market Leaders</strong> to <strong className="text-white">Enterprise Brands</strong> — 
              GSARTH Builds Visibility That Drives Growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link to="/contact" className="btn-premium text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5 inline-flex items-center justify-center gap-2">
                Request Enterprise Proposal <ArrowRight size={16} />
              </Link>
              <a href="#local" className="px-6 sm:px-10 py-4 sm:py-5 border-2 border-white/10 text-white rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-white/5 transition-all text-center">
                Explore Local Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ===== POSITIONING BAR ===== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl mx-auto">
            Solutions designed for <strong className="text-slate-900 dark:text-white">every scale of business</strong> — 
            from enterprise-level branding campaigns to hyperlocal business promotions, 
            GSARTH delivers strategic marketing solutions tailored for every stage of growth.
          </p>
        </div>
      </section>

      {/* ===== INDUSTRY ECOSYSTEM ===== */}
      <section className="py-12 sm:py-16 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 text-center mb-6 sm:mb-8">Industries We Serve</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {industries.map((ind) => (
              <div key={ind.label} className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400">
                {ind.icon} {ind.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 1: ENTERPRISE ===== */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-4 sm:mb-6">
              <Briefcase size={14} className="text-blue-600" />
              <span className="text-[9px] sm:text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">Section 01</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-6">
              Enterprise Marketing <br /> & Branding Solutions.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
              Strategic large-scale marketing infrastructure for corporate brands, universities, healthcare institutions, 
              real estate developers, and enterprises that demand scale, authority, and measurable impact.
            </p>
          </div>

          {/* Enterprise Intro */}
          <div className="p-6 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[3rem] bg-slate-950 text-white mb-12 sm:mb-16 lg:mb-20">
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-4xl">
              GSARTH delivers <strong className="text-white">enterprise-grade marketing and branding solutions</strong> designed for organizations 
              that require scale, authority, visibility, and measurable business impact. We combine strategic consulting, 
              premium branding systems, outdoor media planning, digital growth infrastructure, and integrated campaign 
              execution to help large organizations dominate competitive markets.
            </p>
          </div>

          {/* Enterprise Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {enterpriseServices.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all"
              >
                <div className={`h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 ${
                  svc.color === 'blue' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20' :
                  svc.color === 'indigo' ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20' :
                  svc.color === 'emerald' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20' :
                  'bg-purple-50 text-purple-600 dark:bg-purple-900/20'
                }`}>
                  {svc.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">{svc.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 sm:mb-6">{svc.desc}</p>
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {svc.capabilities.map(cap => (
                    <li key={cap} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400">
                      <CheckCircle2 size={12} className={`shrink-0 ${svc.color === 'blue' ? 'text-blue-500' : svc.color === 'indigo' ? 'text-indigo-500' : svc.color === 'emerald' ? 'text-emerald-500' : 'text-purple-500'}`} />
                      {cap}
                    </li>
                  ))}
                </ul>
                {svc.addons && (
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 sm:mb-3">Premium Add-ons</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.addons.map(addon => (
                        <span key={addon} className="px-2 sm:px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest">{addon}</span>
                      ))}
                    </div>
                  </div>
                )}
                {svc.bestFor && (
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Best For</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.bestFor.map(bf => (
                        <span key={bf} className="px-2 sm:px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest">{bf}</span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Enterprise Pricing */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 sm:mb-12">Enterprise Pricing Architecture.</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {enterprisePricing.map((plan, i) => (
                <motion.div
                  key={plan.tier}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-6 sm:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] border transition-all ${
                    plan.tag === 'Most Popular'
                      ? 'bg-slate-950 text-white border-slate-800 shadow-2xl md:scale-105 z-10'
                      : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800'
                  }`}
                >
                  {plan.tag && (
                    <div className={`absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest ${
                      plan.tag === 'Most Popular' ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}>
                      {plan.tag}
                    </div>
                  )}
                  <p className={`text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-3 ${plan.tag === 'Most Popular' ? 'text-blue-400' : 'text-blue-600'}`}>{plan.tier}</p>
                  <h4 className="text-3xl sm:text-4xl font-black mb-2">{plan.price}<span className="text-sm sm:text-base font-normal opacity-60">{plan.period}</span></h4>
                  <p className={`text-xs sm:text-sm mb-6 sm:mb-8 ${plan.tag === 'Most Popular' ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>
                  <ul className="space-y-2 sm:space-y-3">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                        <CheckCircle2 size={14} className={plan.tag === 'Most Popular' ? 'text-blue-400' : 'text-blue-600'} />
                        <span className={plan.tag === 'Most Popular' ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enterprise Unique Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {enterpriseFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
              >
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-5">
                  {f.icon}
                </div>
                <h4 className="text-sm sm:text-base font-black mb-2 sm:mb-3">{f.title}</h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-6 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4 sm:mb-6">What You Get</p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6">Enterprise-grade deliverables.</h3>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">
                Designed for multi-location execution, authority building, and measurable outcomes—without scattered vendors.
              </p>
              <ul className="space-y-3">
                {enterpriseDeliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue-600" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[3rem] bg-slate-950 text-white border border-white/10 shadow-2xl shadow-blue-600/10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="relative">
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-4 sm:mb-6">Delivery Model</p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6">How enterprise projects run.</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {enterpriseDelivery.map((s) => (
                    <div key={s.step} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                      <p className="text-2xl font-black text-blue-400/40 mb-2">{s.step}</p>
                      <p className="font-black mb-1">{s.title}</p>
                      <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="px-6 sm:px-10 py-4 sm:py-5 bg-blue-600 text-white rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-blue-700 transition-all text-center shadow-xl shadow-blue-600/20">
                    Request Enterprise Proposal
                  </Link>
                  <a href="tel:+919311015100" className="px-6 sm:px-10 py-4 sm:py-5 border-2 border-white/15 text-white rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-white/5 transition-all text-center">
                    Call +91 93110 15100
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DIVIDER CTA ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
            Enterprise Clients Deserve <br /> Enterprise Strategy.
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-blue-100 mb-8 sm:mb-12">
            Schedule a consultation with our senior strategy team to discuss your institutional growth objectives.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/contact" className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-blue-600 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-slate-100 transition-all shadow-xl inline-flex items-center justify-center gap-2">
              Schedule Strategy Consultation <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/20 text-white rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-white/10 transition-all text-center">
              Talk to Brand Experts
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: LOCAL BUSINESS (ENHANCED) ===== */}
      <section id="local" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800 mb-4 sm:mb-6">
              <Store size={14} className="text-orange-600" />
              <span className="text-[9px] sm:text-[10px] font-black text-orange-600 dark:text-orange-400 uppercase tracking-[0.3em]">Section 02</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-6">
              Marketing Solutions <br /> for Local Businesses.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
              Affordable yet powerful branding and promotional solutions designed to help local businesses 
              grow visibility, trust, and customer engagement — without enterprise budgets.
            </p>
          </div>

          {/* Local Intro */}
          <div className="p-6 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 mb-12 sm:mb-16 lg:mb-20">
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
              GSARTH helps <strong className="text-slate-900 dark:text-white">local businesses</strong> build strong market presence through strategic digital marketing, 
              outdoor branding, local promotions, retail visibility, and hyperlocal campaigns. Whether you own a shop, gym, 
              clinic, restaurant, coaching center, or startup — our growth-focused solutions help you attract more local 
              customers and improve brand recognition.
            </p>
          </div>

          {/* Industry-Specific Use Cases */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 sm:mb-12">Built for Your Business Type.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {localIndustriesDetailed.map((ind, i) => (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 sm:p-6 lg:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all"
                >
                  <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center mb-4 sm:mb-5 ${
                    ind.color === 'emerald' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20' :
                    ind.color === 'orange' ? 'bg-orange-50 text-orange-600 dark:bg-orange-900/20' :
                    ind.color === 'blue' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20' :
                    ind.color === 'indigo' ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20' :
                    ind.color === 'pink' ? 'bg-pink-50 text-pink-600 dark:bg-pink-900/20' :
                    'bg-purple-50 text-purple-600 dark:bg-purple-900/20'
                  }`}>
                    {ind.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-black mb-2 sm:mb-3">{ind.name}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{ind.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Local Services */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 sm:mb-12">Local Growth Services.</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {localServices.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 sm:p-6 lg:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all flex flex-col"
                >
                  <div className="h-10 w-10 sm:h-12 sm:w-12 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5">
                    {svc.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-black mb-2 sm:mb-3">{svc.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 sm:mb-5 flex-grow">{svc.desc}</p>
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                    {svc.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400">
                        <CheckCircle2 size={12} className="text-orange-500 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mb-3">
                    <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Best For</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {svc.industries.map(ind => (
                        <span key={ind} className="px-2 py-0.5 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">{ind}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div>
                      <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Starting From</p>
                      <p className="text-xl sm:text-2xl font-black text-orange-600">{svc.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-1">Typical Result</p>
                      <p className="text-xs sm:text-sm font-black text-emerald-600">{svc.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Local Starter Packages */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 sm:mb-12">All-in-One Local Growth Packages.</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {localPackages.map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] border transition-all ${
                    i === 1
                      ? 'bg-slate-950 text-white border-slate-800 shadow-2xl md:scale-105 z-10'
                      : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800'
                  }`}
                >
                  {i === 1 && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-orange-600 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white">Most Popular</div>
                  )}
                  <p className={`text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-3 ${i === 1 ? 'text-orange-400' : 'text-orange-600'}`}>{pkg.name}</p>
                  <h4 className="text-3xl sm:text-4xl font-black mb-2">{pkg.price}</h4>
                  <p className={`text-xs sm:text-sm mb-6 sm:mb-8 ${i === 1 ? 'text-slate-400' : 'text-slate-500'}`}>{pkg.desc}</p>
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {pkg.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                        <CheckCircle2 size={14} className={i === 1 ? 'text-orange-400' : 'text-orange-600'} />
                        <span className={i === 1 ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`block w-full py-3 sm:py-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-widest text-center transition-all ${
                    i === 1
                      ? 'bg-white text-slate-950 hover:bg-orange-500 hover:text-white'
                      : 'bg-slate-950 text-white dark:bg-orange-600 hover:bg-orange-700'
                  }`}>
                    Get This Package
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Local Businesses Choose GSARTH */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 sm:mb-12">Why Local Businesses Choose GSARTH.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {localWhyChoose.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 sm:p-6 lg:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
                >
                  <div className="h-10 w-10 sm:h-12 sm:w-12 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-xl flex items-center justify-center mb-4 sm:mb-5">
                    {item.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-black mb-2 sm:mb-3">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Local Results */}
          <div className="p-6 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-center mb-8 sm:mb-10">Real Results for Local Businesses.</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {localResults.map((res, i) => (
                <motion.div
                  key={res.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-orange-600 mb-2">{res.metric}</p>
                  <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-slate-500 mb-1">{res.label}</p>
                  <p className="text-[9px] sm:text-[10px] font-bold text-slate-400">{res.client}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-3 sm:mb-4">Simple Process</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
              How It Works.
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              From first contact to live campaign in 4 simple steps. No jargon, no delays, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {howItWorksSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    width={600}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                    <span className="text-3xl sm:text-4xl font-black text-white/20">{step.step}</span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h4 className="text-base sm:text-lg font-black mb-2">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-3 sm:mb-4">Social Proof</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
              Trusted by Local Business Owners.
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Real results from real businesses across Delhi NCR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all flex flex-col"
              >
                <div className="flex gap-1 mb-4 sm:mb-5">
                  {Array.from({ length: t.rating }).map((_, ri) => (
                    <Star key={ri} size={14} className="text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8 flex-grow italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-slate-100 dark:border-slate-800">
                  <img
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm sm:text-base font-black">{t.name}</p>
                    <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t.role}, {t.business}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GROWTH CHARTS ===== */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-3 sm:mb-4">Data-Driven Growth</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
              What Growth Looks Like.
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Typical results our local business clients see within the first 90 days.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Line Chart */}
            <div className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <h4 className="text-base sm:text-lg font-black mb-1">Local Search Visibility Growth</h4>
              <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 sm:mb-8">6-month trajectory (Dental Clinic, South Delhi)</p>
              <div className="relative h-48 sm:h-56 w-full">
                <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
                  {/* Grid lines */}
                  {[0, 50, 100, 150, 200].map(y => (
                    <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
                  ))}
                  {/* Area fill */}
                  <path
                    d="M0,180 L66,165 L133,140 L200,110 L266,80 L333,50 L400,30 L400,200 L0,200 Z"
                    fill="currentColor"
                    fillOpacity="0.08"
                    className="text-orange-500"
                  />
                  {/* Line */}
                  <path
                    d="M0,180 L66,165 L133,140 L200,110 L266,80 L333,50 L400,30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500"
                  />
                  {/* Dots */}
                  {[[0,180],[66,165],[133,140],[200,110],[266,80],[333,50],[400,30]].map(([cx, cy], di) => (
                    <circle key={di} cx={cx} cy={cy} r="5" fill="currentColor" className="text-orange-500" />
                  ))}
                </svg>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-2">
                  <span>Month 1</span>
                  <span>Month 2</span>
                  <span>Month 3</span>
                  <span>Month 4</span>
                  <span>Month 5</span>
                  <span>Month 6</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold text-slate-500">Starting position: Page 3 on Google Maps</span>
                <span className="text-xs sm:text-sm font-black text-orange-600">+312% visibility</span>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <h4 className="text-base sm:text-lg font-black mb-1">Impact by Service Type</h4>
              <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 sm:mb-8">Average client-reported improvement (first 90 days)</p>
              <div className="space-y-4 sm:space-y-5">
                {[
                  { label: 'Google Maps Optimization', value: 95, color: 'bg-emerald-500' },
                  { label: 'Shop Signage & Branding', value: 82, color: 'bg-blue-500' },
                  { label: 'WhatsApp Lead Funnels', value: 78, color: 'bg-orange-500' },
                  { label: 'Flyer + QR Distribution', value: 65, color: 'bg-purple-500' },
                  { label: 'Social Media Management', value: 58, color: 'bg-pink-500' },
                ].map(bar => (
                  <div key={bar.label}>
                    <div className="flex justify-between mb-1.5 sm:mb-2">
                      <span className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400">{bar.label}</span>
                      <span className="text-xs sm:text-sm font-black">+{bar.value}%</span>
                    </div>
                    <div className="h-2.5 sm:h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className={`h-full rounded-full ${bar.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Data aggregated from 45+ local business clients across Delhi NCR, tracked over 90-day campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ACCORDION ===== */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-3 sm:mb-4">Questions</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
              Frequently Asked Questions.
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-slate-500 dark:text-slate-400">
              Everything you need to know before starting your local growth campaign.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-[1.25rem] sm:rounded-[1.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                >
                  <span className="text-sm sm:text-base font-black pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                    <div className="pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-800">
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-4">
              Still have questions? Talk to a strategist directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a href="https://wa.me/919311015100" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-emerald-600 text-white font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-emerald-700 transition-all">
                <Phone size={14} /> WhatsApp Us
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                <MessageSquare size={14} /> Email Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCAL CTA ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
            Ready to Dominate <br /> Your Local Market?
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-orange-100 mb-8 sm:mb-12">
            Get a free local visibility audit. We'll analyze your current presence and deliver a growth roadmap tailored to your neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/contact" className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-orange-600 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-slate-100 transition-all shadow-xl inline-flex items-center justify-center gap-2">
              Grow My Business <ArrowRight size={16} />
            </Link>
            <a href="https://wa.me/919311015100" className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/20 text-white rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-white/10 transition-all text-center">
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON / TRUST ===== */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            One Agency. Every Scale.
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
            Whether you're a neighborhood clinic or a national university chain, GSARTH has the strategic 
            infrastructure to make your brand the leader in its market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="p-6 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[3rem] bg-slate-950 text-white border border-white/10">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Building2 size={24} className="text-blue-400" />
              <h4 className="text-xl sm:text-2xl font-black">Enterprise Clients</h4>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {['Dedicated brand strategist', 'Multi-city campaign execution', 'Campaign analytics dashboard', 'Premium media buying', 'Strategic consulting retainers'].map(item => (
                <li key={item} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-300">
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10">
              <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Typical Investment</p>
              <p className="text-xl sm:text-2xl font-black">₹1.5L — ₹15L+ / month</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Store size={24} className="text-orange-600" />
              <h4 className="text-xl sm:text-2xl font-black">Local Businesses</h4>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {['WhatsApp lead funnels', 'Google Maps optimization', 'QR-integrated print materials', 'Hyperlocal distribution', 'Affordable monthly packages'].map(item => (
                <li key={item} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400">
                  <CheckCircle2 size={14} className="text-orange-500 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-100 dark:border-slate-800">
              <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Typical Investment</p>
              <p className="text-xl sm:text-2xl font-black text-orange-600">₹8,000 — ₹50,000 / month</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
            Let's Build Your <br /> Market Presence.
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-slate-500 dark:text-slate-400 mb-8 sm:mb-12">
            Tell us about your business. We'll recommend the right strategy and pricing tier for your goals.
          </p>
          <Link to="/contact" className="btn-premium inline-flex items-center gap-3 text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5">
            Get Your Custom Plan <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
