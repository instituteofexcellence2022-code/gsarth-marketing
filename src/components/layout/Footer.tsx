import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
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
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                Certified & Registered
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {[
                  { src: dpiitLogo, alt: "DPIIT Certified" },
                  { src: isoCertLogo, alt: "ISO Certified" },
                  { src: msmeLogo, alt: "MSME Registered" },
                ].map((badge) => (
                  <div
                    key={badge.alt}
                    className="w-24 sm:w-28 rounded-2xl bg-white border border-slate-200/60 p-2 sm:p-2.5 shadow-[0_18px_40px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition-transform"
                  >
                    <img
                      src={badge.src}
                      alt={badge.alt}
                      title={badge.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-7 sm:h-8 w-full object-contain drop-shadow-sm"
                    />
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

          {/* Contact Info & Location */}
          <div className="space-y-4">
            <p className="font-bold mb-5 sm:mb-6 uppercase tracking-widest text-[10px] sm:text-xs text-slate-400">
              Contact & Location
            </p>
            <ul className="space-y-3.5 sm:space-y-4">
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

            {/* Google Map Card */}
            <div className="pt-2">
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/90 shadow-xl transition-all duration-300 hover:border-blue-500/30">
                {/* Tech Status Header - Visible on Desktop/Tablet, Hidden on Mobile */}
                <div className="hidden sm:flex items-center justify-between px-3 py-1.5 bg-slate-900/95 border-b border-white/5 text-[10px]">
                  <div className="flex items-center gap-1.5 text-slate-300 font-bold">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Corporate HQ</span>
                  </div>
                  <span className="text-[9px] text-slate-400 font-mono tracking-wider">28.58°N, 77.07°E</span>
                </div>

                {/* Map Viewport - Compact on Mobile (95px), Enhanced on Desktop (180px) */}
                <div className="relative w-full h-[95px] sm:h-[135px] lg:h-[180px] bg-slate-950">
                  <iframe
                    title="GSARTH Office Google Map - New Delhi 110077"
                    src="https://maps.google.com/maps?q=Dwarka%2C%20New%20Delhi%2C%20Delhi%20110077&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen={false}
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Footer Toolbar - Ultra-compact on mobile, refined on desktop */}
                <div className="px-2.5 sm:px-3 py-1.5 sm:py-2 bg-slate-900/95 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                    <MapPin size={11} className="text-orange-400 shrink-0" />
                    New Delhi, 110077
                  </span>
                  <a
                    href="https://maps.google.com/?q=Dwarka+New+Delhi+Delhi+110077"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] sm:text-[11px] font-bold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-0.5 group/link"
                  >
                    <span>Directions</span>
                    <ArrowUpRight size={11} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
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
