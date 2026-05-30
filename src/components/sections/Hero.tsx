import { useEffect, useState } from "react";
import { BarChart3, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "~/lib/utils";
import dpiitLogo from "../../../logo img/DPIIT logo.png";
import isoCertLogo from "../../../logo img/iso cert logo.jpg";
import msmeLogo from "../../../logo img/msme.png";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 sm:pt-24 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] lg:w-[900px] h-[350px] sm:h-[450px] lg:h-[550px] bg-blue-500/8 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] -z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[250px] sm:w-[350px] lg:w-[450px] h-[250px] sm:h-[350px] lg:h-[450px] bg-indigo-500/5 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full pb-8">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-5 sm:mb-8">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider sm:tracking-[0.2em]">
              Delhi&apos;s Elite Growth Agency
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black tracking-tight leading-[0.92] sm:leading-[0.9] mb-5 sm:mb-8 text-slate-900 dark:text-white">
            Build a <span className="text-blue-600">Brand</span>{" "}
            <br className="hidden sm:block" /> that Dominates.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg sm:max-w-xl mb-6 sm:mb-10 leading-relaxed font-medium">
            GSARTH is a premium marketing agency engineered for scale. We translate vision into high-performance revenue engines.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="btn-premium w-full sm:w-auto text-center text-xs sm:text-sm px-6 sm:px-10 py-4 sm:py-5"
            >
              Book Growth Audit
            </Link>
            <Link
              to="/services"
              className="px-6 sm:px-10 py-4 sm:py-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              Solutions{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="mt-8 sm:mt-14 flex flex-col gap-3 sm:gap-4">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Trusted by Market Leaders
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 lg:gap-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
              {["SKALIFY", "NOVENTRA", "AUREVA", "VIRTION"].map((brand) => (
                <span
                  key={brand}
                  className="text-sm sm:text-lg lg:text-xl font-black tracking-tighter"
                >
                  {brand}
                </span>
              ))}
            </div>

            <div className="pt-4 sm:pt-6">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3 sm:mb-4">
                Certified & Registered
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {[
                  { src: dpiitLogo, alt: "DPIIT Certified" },
                  { src: isoCertLogo, alt: "ISO Certified" },
                  { src: msmeLogo, alt: "MSME Registered" },
                ].map((badge) => (
                  <div
                    key={badge.alt}
                    className="h-10 w-24 sm:h-11 sm:w-28 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 flex items-center justify-center px-3 shadow-sm"
                  >
                    <img
                      src={badge.src}
                      alt={badge.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-7 sm:h-8 w-full object-contain opacity-90 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative lg:ml-auto order-1 lg:order-2">
          <div className={cn(
            "relative rounded-2xl sm:rounded-3xl lg:rounded-[40px] overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/20",
            !reducedMotion && "animate-float"
          )}>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
              alt="Elite Digital Strategy GSARTH"
              width={800}
              height={600}
              className="w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/5] object-cover"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

            <div className="absolute bottom-3 sm:bottom-5 lg:bottom-8 left-3 sm:left-5 lg:left-8 right-3 sm:right-5 lg:right-8">
              <div className="p-3 sm:p-5 lg:p-6 backdrop-blur-xl bg-white/10 border border-white/15 rounded-xl lg:rounded-2xl text-white">
                <div className="flex items-center justify-between mb-1 sm:mb-3">
                  <p className="text-xl sm:text-3xl lg:text-4xl font-black">+211%</p>
                  <BarChart3 className="text-blue-400 shrink-0" size={20} />
                </div>
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-[0.3em] opacity-70">
                  Average Revenue Growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
