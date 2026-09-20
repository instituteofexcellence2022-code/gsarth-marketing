import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Linkedin, Mail, MapPin, Phone, ArrowUpRight, ShieldCheck, Clock, Navigation } from "lucide-react";
import { NAV_LINKS } from "~/constants/navigation";
import { Logo } from "./Logo";
import dpiitLogo from "../../../logo img/DPIIT logo.png";
import isoCertLogo from "../../../logo img/iso cert logo.jpg";
import msmeLogo from "../../../logo img/msme.png";

const iconMap: Record<string, React.ReactNode> = {
  Twitter: <Twitter size={18} />,
  Instagram: <Instagram size={18} />,
  Linkedin: <Linkedin size={18} />,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceChildren = NAV_LINKS.find((l) => l.label === "Services")?.children ?? [];

  return (
    <footer className="bg-slate-950 text-white pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5 sm:space-y-6">
            <Link to="/" className="inline-block">
              <Logo size="lg" subtitle="Marketing • Advertising • Tech" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Elite marketing and branding agency engineered for enterprise-grade growth systems. We translate vision into ROI.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {iconMap[social.icon] ?? null}
                  </span>
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center justify-between mb-3.5">
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-blue-400 shrink-0" />
                  <span>Certified & Registered</span>
                </p>
                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Govt. Verified
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {[
                  { src: dpiitLogo, title: "DPIIT", subtitle: "Certified", alt: "DPIIT Certified" },
                  { src: isoCertLogo, title: "ISO", subtitle: "Certified", alt: "ISO Certified" },
                  { src: msmeLogo, title: "MSME", subtitle: "Registered", alt: "MSME Registered" },
                ].map((badge) => (
                  <div
                    key={badge.alt}
                    className="group relative flex flex-col items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/90 shadow-[0_4px_18px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.25)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="h-10 sm:h-12 w-full flex items-center justify-center">
                      <img
                        src={badge.src}
                        alt={badge.alt}
                        title={badge.alt}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-2 text-center w-full pt-1.5 border-t border-slate-100">
                      <p className="text-[10px] sm:text-[11px] font-black tracking-tight text-slate-900 leading-none">
                        {badge.title}
                      </p>
                      <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">
                        {badge.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-bold mb-5 sm:mb-6 uppercase tracking-widest text-[10px] sm:text-xs text-slate-400">
              Solutions
            </p>
            <ul className="space-y-3">
              {serviceChildren.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.href as any}
                    className="text-sm font-medium text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-bold mb-5 sm:mb-6 uppercase tracking-widest text-[10px] sm:text-xs text-slate-400">
              Company
            </p>
            <ul className="space-y-3">
              {["About", "Case Studies", "Blog", "Careers", "Contact"].map((item) => {
                const link = NAV_LINKS.find((l) => l.label === item);
                return (
                  <li key={item}>
                    <Link
                      to={(link?.href as any) ?? "/"}
                      className="text-sm font-medium text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="font-bold mb-5 sm:mb-6 uppercase tracking-widest text-[10px] sm:text-xs text-slate-400">
              Contact
            </p>
            <ul className="space-y-4 sm:space-y-5">
              <li className="flex gap-3">
                <div className="h-9 w-9 shrink-0 rounded-lg bg-white/5 flex items-center justify-center text-blue-500">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Email</p>
                  <a className="text-sm font-bold hover:text-white transition-colors" href="mailto:contact@gsarth.com">
                    contact@gsarth.com
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="h-9 w-9 shrink-0 rounded-lg bg-white/5 flex items-center justify-center text-green-500">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Call / WhatsApp</p>
                  <a className="text-sm font-bold hover:text-white transition-colors" href="tel:+917678525920">
                    +91 76785 25920
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="h-9 w-9 shrink-0 rounded-lg bg-white/5 flex items-center justify-center text-orange-500">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Office</p>
                  <a
                    className="text-sm font-bold hover:text-white transition-colors"
                    href="https://maps.google.com/?q=New+Delhi+Delhi+110077"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    New Delhi - 110077
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Large Location & Google Map Showcase (Expansive on Desktop, Compact on Mobile) */}
        <div className="mb-12 sm:mb-16 lg:mb-20 rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-900/60 overflow-hidden shadow-2xl backdrop-blur-xl ring-1 ring-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Info Panel */}
            <div className="lg:col-span-4 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border-b lg:border-b-0 lg:border-r border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] sm:text-[11px] font-black uppercase tracking-wider mb-4 sm:mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Corporate Headquarters
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-white mb-2 sm:mb-3 leading-tight">
                  Visit Our Delhi Hub.
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  Dwarka, New Delhi – 110077. Strategic headquarters engineered for performance marketing, enterprise branding, and search authority.
                </p>
              </div>

              <div className="space-y-3.5 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <Clock size={13} className="text-blue-400 shrink-0" />
                    Office Hours
                  </span>
                  <span>Mon – Sat: 9:30 AM – 7:00 PM</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <Navigation size={13} className="text-orange-400 shrink-0" />
                    GPS Coordinates
                  </span>
                  <span className="font-mono text-[11px] text-blue-400 font-bold">28.5823° N, 77.0689° E</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <Phone size={13} className="text-emerald-400 shrink-0" />
                    Direct Line
                  </span>
                  <a href="tel:+917678525920" className="hover:text-white font-semibold transition-colors">
                    +91 76785 25920
                  </a>
                </div>
                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=28.5823,77.0689+(GSARTH+Marketing+HQ)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs uppercase tracking-wider text-center transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group"
                  >
                    <span>Get Directions in Google Maps</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Expansive Map Canvas: Large on Desktop (360px+), Compact on Mobile (150px) */}
            <div className="lg:col-span-8 relative w-full h-[150px] sm:h-[240px] lg:h-[360px] bg-slate-950 overflow-hidden group">
              <iframe
                title="GSARTH Office Google Map - Large Desktop View - New Delhi 110077"
                src="https://maps.google.com/maps?q=28.5823,77.0689+(GSARTH%20Marketing%20%26%20Tech%20HQ)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen={false}
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
              {/* Floating Live Hub Badge */}
              <div className="absolute top-3 right-3 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-lg text-[11px] text-slate-300 font-semibold pointer-events-none">
                <MapPin size={12} className="text-orange-400 shrink-0" />
                <span>Dwarka Sector Hub • New Delhi 110077</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 sm:pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center sm:text-left">
            © {currentYear} GSARTH Marketing & Branding. All Rights Reserved.
          </p>
          <div className="flex gap-6 sm:gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com/gsarth_agency", icon: "Twitter" },
  { label: "Instagram", href: "https://instagram.com/gsarth_official", icon: "Instagram" },
  { label: "LinkedIn", href: "https://linkedin.com/company/gsarth", icon: "Linkedin" },
];
