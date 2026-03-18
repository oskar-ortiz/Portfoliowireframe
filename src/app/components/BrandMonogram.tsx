type BrandMonogramProps = Readonly<{
  className?: string;
}>;

export function BrandMonogram({ className }: BrandMonogramProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="brand-monogram-gradient" x1="8" y1="8" x2="40" y2="40">
          <stop offset="0%" stopColor="#312E81" />
          <stop offset="55%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <rect
        x="7"
        y="7"
        width="34"
        height="34"
        rx="12"
        stroke="url(#brand-monogram-gradient)"
        strokeWidth="2.5"
      />
      <path
        d="M16 18.5C16 15.4624 18.4624 13 21.5 13H26.5C29.5376 13 32 15.4624 32 18.5V29.5C32 32.5376 29.5376 35 26.5 35H21.5C18.4624 35 16 32.5376 16 29.5V18.5Z"
        stroke="url(#brand-monogram-gradient)"
        strokeWidth="2.6"
      />
      <path
        d="M20 16.5L28.5 31.5"
        stroke="url(#brand-monogram-gradient)"
        strokeLinecap="round"
        strokeWidth="2.6"
      />
    </svg>
  );
}
