import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS } from "~/constants/navigation";
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
            <Link to="/" className="text-2xl sm:text-3xl font-black tracking-tight inline-block">
              GSARTH
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
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4">
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
            <h5 className="font-bold mb-5 sm:mb-6 uppercase tracking-widest text-[10px] sm:text-xs text-slate-500">
              Solutions
            </h5>
            <ul className="space-y-3">
              {serviceChildren.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.href as any}
                    className="text-sm font-medium text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-bold mb-5 sm:mb-6 uppercase tracking-widest text-[10px] sm:text-xs text-slate-500">
              Company
            </h5>
            <ul className="space-y-3">
              {["About", "Case Studies", "Blog", "Careers", "Contact"].map((item) => {
                const link = NAV_LINKS.find((l) => l.label === item);
                return (
                  <li key={item}>
                    <Link
                      to={(link?.href as any) ?? "/"}
                      className="text-sm font-medium text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block"
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
            <h5 className="font-bold mb-5 sm:mb-6 uppercase tracking-widest text-[10px] sm:text-xs text-slate-500">
              Contact
            </h5>
            <ul className="space-y-4 sm:space-y-5">
              <li className="flex gap-3">
                <div className="h-9 w-9 shrink-0 rounded-lg bg-white/5 flex items-center justify-center text-blue-500">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">Email</p>
                  <p className="text-sm font-bold">contact@gsarth.com</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="h-9 w-9 shrink-0 rounded-lg bg-white/5 flex items-center justify-center text-green-500">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">Call</p>
                  <p className="text-sm font-bold">+91 93110 15100</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="h-9 w-9 shrink-0 rounded-lg bg-white/5 flex items-center justify-center text-orange-500">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">Office</p>
                  <p className="text-sm font-bold">New Delhi, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 sm:pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600 text-center sm:text-left">
            © {currentYear} GSARTH Marketing & Branding. All Rights Reserved.
          </p>
          <div className="flex gap-6 sm:gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-600">
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
