import { motion } from "framer-motion";
import { BarChart3, Users, Zap, ShieldCheck } from "lucide-react";
import { cn } from "~/lib/utils";

const features = [
  {
    title: "Data-Driven Intelligence",
    desc: "We don't guess. Our strategies are built on massive datasets and consumer behavior analysis, ensuring every move is backed by math.",
    icon: <BarChart3 className="w-6 h-6" />,
    className: "lg:col-span-2",
    color: "blue"
  },
  {
    title: "Elite Talent",
    desc: "Your brand is handled by senior strategists only. No juniors, no outsourcing.",
    icon: <Users className="w-6 h-6" />,
    className: "lg:col-span-1",
    color: "indigo"
  },
  {
    title: "Topical Authority",
    desc: "We build brands that search engines and humans both trust as industry leaders.",
    icon: <ShieldCheck className="w-6 h-6" />,
    className: "lg:col-span-1",
    color: "emerald"
  },
  {
    title: "Enterprise Velocity",
    desc: "Execution speed is our competitive edge. We launch, test, and scale with unmatched momentum to keep you ahead of the market curve.",
    icon: <Zap className="w-6 h-6" />,
    className: "lg:col-span-2",
    color: "orange"
  },
];

export function WhyGsarth() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-[9px] sm:text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">Strategic Advantage</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-4 sm:mb-6 text-slate-900 dark:text-white">
            Engineered for Market <br className="hidden sm:block" /> Dominance.
          </h3>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            We don't just "do marketing". We architect the strategic infrastructure required to capture market share and sustain growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={cn(
                "p-6 sm:p-8 lg:p-10 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between group hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/5",
                item.className
              )}
            >
              <div>
                <div className={cn(
                  "h-10 w-10 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform shadow-lg",
                  item.color === 'blue' ? "bg-blue-50 text-blue-600 shadow-blue-500/10" :
                  item.color === 'indigo' ? "bg-indigo-50 text-indigo-600 shadow-indigo-500/10" :
                  item.color === 'emerald' ? "bg-emerald-50 text-emerald-600 shadow-emerald-500/10" :
                  "bg-orange-50 text-orange-600 shadow-orange-500/10"
                )}>
                  {item.icon}
                </div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white">{item.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
