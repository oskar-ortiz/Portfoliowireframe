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
          <stop offset="0%" stopColor="#5B21B6" />
          <stop offset="52%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="brand-monogram-fill" x1="13" y1="12" x2="34" y2="35">
          <stop offset="0%" stopColor="#EDE9FE" />
          <stop offset="100%" stopColor="#FDF2F8" />
        </linearGradient>
      </defs>
      <rect
        x="7"
        y="7"
        width="34"
        height="34"
        rx="12"
        fill="url(#brand-monogram-fill)"
        stroke="url(#brand-monogram-gradient)"
        strokeWidth="2.5"
      />
      <path
        d="M16 24C16 18.4772 20.4772 14 26 14H28.2C31.4033 14 34 16.5968 34 19.8C34 23.0032 31.4033 25.6 28.2 25.6H23.5C21.0147 25.6 19 27.6147 19 30.1C19 32.5853 21.0147 34.6 23.5 34.6H34"
        stroke="url(#brand-monogram-gradient)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.6"
      />
      <path
        d="M15 24C15 18.4772 19.4772 14 25 14C30.5228 14 35 18.4772 35 24C35 29.5228 30.5228 34 25 34C19.4772 34 15 29.5228 15 24Z"
        stroke="url(#brand-monogram-gradient)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.6"
      />
    </svg>
  );
}
