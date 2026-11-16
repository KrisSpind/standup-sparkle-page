interface LogoMarkProps {
  className?: string;
}

// Keep in sync with public/favicon.svg
export const LogoMark = ({ className }: LogoMarkProps) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
    <circle cx="32" cy="32" r="32" className="fill-primary" />
    <g
      fill="none"
      className="stroke-primary-foreground"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="4.5"
    >
      <path d="M17 19c4 7 9 11 15 11s11-4 15-11" />
      <path d="M32 30v13" />
      <path d="M14 52c5-5 11-7.5 18-7.5S45 47 50 52" opacity=".7" />
    </g>
    <circle cx="32" cy="18" r="5" className="fill-primary-foreground" />
  </svg>
);

const Logo = () => (
  <span className="inline-flex items-center gap-3">
    <LogoMark className="w-9 h-9 shrink-0" />
    <span className="flex flex-col leading-tight">
      <span className="font-display text-xl">StandUp Coaching</span>
      <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Regina Huber</span>
    </span>
  </span>
);

export default Logo;
