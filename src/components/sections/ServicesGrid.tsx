import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Layers, Search, Zap, Smartphone, Instagram, Megaphone } from "lucide-react";
import { cn } from "~/lib/utils";

const services = [
  {
    title: "Digital Marketing",
    desc: "Integrated full-funnel strategy across paid, organic, and owned channels to maximize market reach.",
    icon: <Globe className="w-7 h-7 sm:w-8 sm:h-8" />,
    color: "blue",
    href: "/services"
  },
  {
    title: "Branding & Identity",
    desc: "Strategic brand positioning and visual systems that command attention and build long-term trust.",
    icon: <Layers className="w-7 h-7 sm:w-8 sm:h-8" />,
    color: "indigo",
    href: "/branding"
  },
  {
    title: "SEO Solutions",
    desc: "Technical SEO and search-intent content optimization to dominate organic search results.",
    icon: <Search className="w-7 h-7 sm:w-8 sm:h-8" />,
    color: "emerald",
    href: "/seo"
  },
  {
    title: "Performance Ads",
    desc: "ROI-driven paid acquisition campaigns engineered for hyper-scaling and efficiency.",
    icon: <Zap className="w-7 h-7 sm:w-8 sm:h-8" />,
    color: "orange",
    href: "/lead-gen"
  },
  {
    title: "Offline Branding",
    desc: "High-impact outdoor advertising, hoardings, and retail branding for physical dominance.",
    icon: <Megaphone className="w-7 h-7 sm:w-8 sm:h-8" />,
    color: "amber",
    href: "/offline-marketing"
  },
  {
    title: "Web Development",
    desc: "High-conversion, lightning-fast digital experiences built with modern architecture.",
    icon: <Smartphone className="w-7 h-7 sm:w-8 sm:h-8" />,
    color: "purple",
    href: "/web-development"
  },
  {
    title: "Social Growth",
    desc: "Community building and viral content strategies that turn followers into brand advocates.",
    icon: <Instagram className="w-7 h-7 sm:w-8 sm:h-8" />,
    color: "pink",
    href: "/social-media"
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-14 lg:mb-20">
          <div className="max-w-2xl">
            <h2 className="text-[10px] sm:text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-5">
              Our Expertise
            </h2>
            <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              Solutions for <br className="hidden sm:block" />{" "}
              <span className="text-slate-400">Exponential</span> Scaling.
            </h3>
          </div>
          <Link
            to="/services"
            className="flex items-center gap-2 font-bold text-blue-600 group mb-0 lg:mb-3 text-sm shrink-0"
          >
            View Service Architecture
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform shrink-0"
              size={16}
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="card-premium group relative overflow-hidden p-5 sm:p-6 lg:p-8"
            >
              <div
                className={cn(
                  "mb-4 sm:mb-6 h-11 w-11 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg",
                  service.color === "blue"
                    ? "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white shadow-blue-500/10"
                    : service.color === "indigo"
                    ? "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white shadow-indigo-500/10"
                    : service.color === "emerald"
                    ? "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white shadow-emerald-500/10"
                    : service.color === "orange"
                    ? "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white shadow-orange-500/10"
                    : service.color === "amber"
                    ? "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white shadow-amber-500/10"
                    : service.color === "purple"
                    ? "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white shadow-purple-500/10"
                    : "bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white shadow-pink-500/10"
                )}
              >
                {service.icon}
              </div>
              <h4 className="text-lg sm:text-xl lg:text-2xl font-black mb-2 sm:mb-3 text-slate-900 dark:text-white">
                {service.title}
              </h4>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4 sm:mb-6">
                {service.desc}
              </p>
              <Link
                to={service.href as any}
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all translate-y-0 lg:translate-y-2 group-hover:translate-y-0"
              >
                Explore Strategy <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
