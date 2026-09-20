import { cn } from "~/lib/utils";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
  subtitle?: string;
  isScrolled?: boolean;
}

/* 
 * Bespoke GSARTH Growth-Tech Mark:
 * A precision geometric monogram "G" with an integrated ascending 
 * 45° growth vector (↗) in electric cobalt, engineered for an elite tech agency.
 */
function GrowthTechMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Architectural "G" chassis */}
      <path
        d="M19 12.5V15C19 17.7614 16.7614 20 14 20H10C7.23858 20 5 17.7614 5 15V10C5 7.23858 7.23858 5 10 5H14C15.85 5 17.45 6.05 18.25 7.6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-70 group-hover:opacity-100 transition-opacity"
      />
      {/* Precision Ascending Growth Trajectory (Electric Cobalt) */}
      <path
        d="M11.5 12.5L20 4M20 4H14.5M20 4V9.5"
        stroke="#3b82f6"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  iconClassName,
  size = "md",
  showSubtitle = true,
  subtitle = "Marketing • Tech",
  isScrolled,
}: LogoProps) {
  const sizeClasses = {
    sm: {
      badge: "h-8 w-8 rounded-lg",
      icon: "h-4 w-4",
      text: "text-lg",
      subtitle: "text-[7px]",
    },
    md: {
      badge: "h-9 w-9 sm:h-10 sm:w-10 rounded-xl",
      icon: "h-4.5 w-4.5 sm:h-5 sm:w-5",
      text: "text-xl sm:text-2xl",
      subtitle: "text-[8px] sm:text-[9px]",
    },
    lg: {
      badge: "h-11 w-11 sm:h-12 sm:w-12 rounded-xl",
      icon: "h-5.5 w-5.5 sm:h-6 sm:w-6",
      text: "text-2xl sm:text-3xl",
      subtitle: "text-[9px] sm:text-[10px]",
    },
  }[size];

  return (
    <div className={cn("flex items-center gap-2.5 sm:gap-3 shrink-0 group", className)}>
      {/* Stealth Obsidian & Electric Cobalt Badge */}
      <div
        className={cn(
          "relative flex items-center justify-center transition-all duration-300",
          "bg-slate-950 text-white border border-slate-800/90 shadow-sm",
          "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] ring-1 ring-black/5 dark:ring-white/10",
          "group-hover:border-blue-500/40 group-hover:shadow-[0_0_24px_rgba(37,99,235,0.18)]",
          sizeClasses.badge,
          iconClassName
        )}
      >
        <GrowthTechMark
          className={cn(
            "transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
            sizeClasses.icon
          )}
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span
          className={cn(
            "font-black tracking-tight leading-none transition-colors",
            sizeClasses.text,
            isScrolled === undefined
              ? "text-inherit"
              : isScrolled
              ? "text-slate-900 dark:text-white"
              : "text-slate-900 dark:text-white"
          )}
        >
          GSARTH
        </span>
        {showSubtitle && (
          <span
            className={cn(
              "font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400 mt-1",
              sizeClasses.subtitle
            )}
          >
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}
