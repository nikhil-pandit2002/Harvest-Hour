import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer' | 'mark-only';
  inverted?: boolean;
}

/**
 * Harvest Hour Brand Logo
 * Mark: Clock face where hands are an organic leaf and a culinary fork,
 * honoring the 1-hour promise from soil to plate.
 * Wordmark: "Harvest Hour" with "Farm to Fork" set below.
 */
export const BrandLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'header',
  inverted = false,
}) => {
  const primaryColor = inverted ? '#FCFDF9' : 'currentColor';
  const accentColor = inverted ? '#DFA74E' : 'var(--color-turmeric, #B87518)';
  const secondaryColor = inverted ? 'rgba(252, 253, 249, 0.75)' : 'var(--color-text-secondary, #5D6B57)';

  const mark = (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10 shrink-0"
      aria-hidden="true"
    >
      {/* Outer clock ring with subtle tick marks */}
      <circle cx="24" cy="24" r="21" stroke={primaryColor} strokeWidth="1.75" />
      <circle cx="24" cy="24" r="1.75" fill={accentColor} />

      {/* Clock hour ticks at 12, 3, 6, 9 */}
      <line x1="24" y1="4.5" x2="24" y2="7.5" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="43.5" y1="24" x2="40.5" y2="24" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="43.5" x2="24" y2="40.5" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4.5" y1="24" x2="7.5" y2="24" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" />

      {/* Minute Hand: Organic Leaf pointing toward 12 o'clock (the Harvest) */}
      <path
        d="M24 24 Q21 16 23 8 Q24 7 25 8 Q27 16 24 24 Z"
        fill={accentColor}
      />
      <line x1="24" y1="23" x2="24" y2="9" stroke="#FCFDF9" strokeWidth="0.8" opacity="0.8" />

      {/* Hour Hand: Three-tined Dining Fork pointing toward 2 o'clock (the Table) */}
      <g transform="rotate(55 24 24)">
        {/* Fork handle */}
        <line x1="24" y1="24" x2="24" y2="15" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" />
        {/* Fork base & tines */}
        <path d="M21 15 C21 12.5 27 12.5 27 15" stroke={primaryColor} strokeWidth="1.2" fill="none" />
        <line x1="21.5" y1="13" x2="21.5" y2="9.5" stroke={primaryColor} strokeWidth="1.2" strokeLinecap="round" />
        <line x1="24" y1="13" x2="24" y2="9" stroke={primaryColor} strokeWidth="1.2" strokeLinecap="round" />
        <line x1="26.5" y1="13" x2="26.5" y2="9.5" stroke={primaryColor} strokeWidth="1.2" strokeLinecap="round" />
      </g>
    </svg>
  );

  if (variant === 'mark-only') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {mark}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {mark}
      <div className="flex flex-col">
        <span
          className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight leading-none"
          style={{ color: primaryColor }}
        >
          Harvest Hour
        </span>
        <span
          className="text-[10px] sm:text-xs font-sans-body uppercase tracking-[0.22em] font-semibold mt-1"
          style={{ color: secondaryColor }}
        >
          Farm to Fork
        </span>
      </div>
    </div>
  );
};
