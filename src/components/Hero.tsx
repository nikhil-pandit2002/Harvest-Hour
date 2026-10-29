import React from 'react';
import { HeroLandscapeGraphic } from './FarmIllustrations.tsx';
import { SmartImage } from './SmartImage.tsx';
import { ArrowDown, Calendar, MapPin } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      {/* Background Photographic Visual with Scrim */}
      <div className="absolute inset-0 z-0">
        <SmartImage
          src="/assets/aistudio/types-of-organic-farming-in-india_953e6a8b.jpg"
          alt="14-acre organic farm at sunrise on the outskirts of Bengaluru, showing rows of crops receding to granite hills"
          className="w-full h-full object-cover object-center"
          fallbackNode={
            <HeroLandscapeGraphic
              className="w-full h-full object-cover object-center"
              alt="14-acre organic farm at sunrise on the outskirts of Bengaluru, showing rows of crops receding to granite hills"
            />
          }
        />
        {/* Measured scrim to guarantee WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ground)] via-[var(--color-ground)]/80 to-[var(--color-ground)]/40 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32 text-center flex flex-col items-center">
        {/* Trust marker kicker: clean unboxed text with responsive wrapping */}
        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--color-primary)] mb-6">
          <span>Certified Organic Farm</span>
          <span aria-hidden="true" className="text-[var(--color-text-secondary)]">·</span>
          <span>Bengaluru South</span>
          <span aria-hidden="true" className="text-[var(--color-text-secondary)]">·</span>
          <span>Two Sittings Daily</span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--color-text)] max-w-4xl text-balance leading-[1.08] mb-6">
          Pick it. Cook it. <br className="hidden sm:inline" />
          Eat it within the hour.
        </h1>

        {/* Sub-headline with enhanced contrast */}
        <p className="font-sans-body text-lg sm:text-xl font-medium text-[var(--color-text)]/90 max-w-2xl text-balance leading-relaxed mb-10">
          Fourteen organic acres an hour south of Bengaluru. Harvest your own vegetables,
          cook them with our chef, and sit down to them while they are still warm from the field.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
          <button
            type="button"
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] active:translate-y-0.5 rounded-lg shadow-md transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Book a day
          </button>
          <button
            type="button"
            onClick={onExploreClick}
            className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-[var(--color-text)] bg-[var(--color-surface)]/80 hover:bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            See what happens here
            <ArrowDown className="w-4 h-4 text-[var(--color-turmeric)]" />
          </button>
        </div>

        {/* Single Line Address & Location Footer */}
        <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm text-[var(--color-text-secondary)] font-medium text-balance max-w-xl">
          <MapPin className="w-4 h-4 text-[var(--color-turmeric)] shrink-0 hidden sm:inline" />
          <span>
            Survey No. 112/3, Harohalli, Kanakapura Road · 58 km from MG Road · Open all 7 days a week
          </span>
        </div>
      </div>
    </section>
  );
};
