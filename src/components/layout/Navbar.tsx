import { useState, useEffect, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { createPortal } from "react-dom";
import { cn } from "~/lib/utils";
import { NAV_LINKS } from "~/constants/navigation";

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

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const reducedMotion = useReducedMotion();
  const canUseDOM = typeof document !== "undefined";

  /* Theme init */
  useEffect(() => {
    const stored = localStorage.getItem("gsarth-theme") as "light" | "dark" | null;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored || (systemDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("gsarth-theme", next);
      return next;
    });
  }, []);

  const mobileMenu = (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0 }}
          animate={reducedMotion ? {} : { opacity: 1 }}
          exit={reducedMotion ? {} : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[150] bg-white dark:bg-slate-950 flex flex-col safe-top safe-bottom"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex justify-between items-center px-4 sm:px-6 py-4 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xl font-black">GSARTH</span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="border-b border-slate-50 dark:border-slate-900">
                <div className="flex items-center justify-between">
                  <Link
                    to={link.href as any}
                    onClick={() => !link.children && setMobileMenuOpen(false)}
                    className="flex-1 py-4 text-lg font-black hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg px-2 -mx-2"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <button
                      type="button"
                      onClick={() => setOpenAccordion(prev => prev === link.label ? null : link.label)}
                      className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      aria-label={`${openAccordion === link.label ? "Collapse" : "Expand"} ${link.label} submenu`}
                      aria-expanded={openAccordion === link.label}
                    >
                      <ChevronDown
                        size={18}
                        className={cn(
                          "transition-transform text-slate-500",
                          openAccordion === link.label ? "rotate-180" : ""
                        )}
                      />
                    </button>
                  )}
                </div>

                <AnimatePresence initial={false}>
                  {link.children && openAccordion === link.label && (
                    <motion.div
                      initial={reducedMotion ? {} : { height: 0, opacity: 0 }}
                      animate={reducedMotion ? {} : { height: "auto", opacity: 1 }}
                      exit={reducedMotion ? {} : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-4 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href as any}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-3 px-3 text-base font-bold text-slate-500 hover:text-blue-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="px-4 sm:px-6 py-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <button
              type="button"
              onClick={() => { toggleTheme(); }}
              className="flex items-center justify-between w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span>Theme — {theme === "dark" ? "Dark" : "Light"}</span>
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full bg-blue-600 text-white text-center py-4 rounded-xl font-black text-lg shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-[100] transition-all duration-300",
          isScrolled
            ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md py-3 shadow-sm border-b border-slate-100 dark:border-slate-800"
            : "bg-transparent py-4 sm:py-6"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0" aria-label="GSARTH Home">
          <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-xs sm:text-sm font-black text-white shadow-lg shadow-blue-500/30">
            G
          </span>
          <span className={cn(
            "text-lg sm:text-2xl font-black tracking-tight transition-colors",
            isScrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"
          )}>
            GSARTH
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.href as any}
                className={cn(
                  "text-sm font-bold transition-colors flex items-center gap-1 py-2",
                  isScrolled ? "text-slate-600 dark:text-slate-400" : "text-slate-700 dark:text-slate-300",
                  "hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg px-2"
                )}
              >
                {link.label}
                {link.children && (
                  <ChevronDown
                    size={14}
                    className={cn(
                      "transition-transform",
                      activeDropdown === link.label ? "rotate-180" : ""
                    )}
                  />
                )}
              </Link>

              {/* Desktop Dropdown */}
              {link.children && (
                <AnimatePresence>
                  {activeDropdown === link.label && (
                    <motion.div
                      initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
                      animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
                      exit={reducedMotion ? {} : { opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-xl p-2 overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href as any}
                          className="block px-4 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-600/20 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            Book Audit
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-slate-900 dark:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
        >
          <Menu size={24} />
        </button>
      </nav>
      </header>
      {canUseDOM ? createPortal(mobileMenu, document.body) : null}
    </>
  );
}
