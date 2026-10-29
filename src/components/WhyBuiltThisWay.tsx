import React from 'react';
import { LeafTextureGraphic } from './FarmIllustrations.tsx';
import { SmartImage } from './SmartImage.tsx';

export const WhyBuiltThisWay: React.FC = () => {
  const stats = [
    {
      figure: '14',
      unit: 'acres',
      description: 'Of which eleven are under active vegetable cultivation',
    },
    {
      figure: 'Year 2',
      unit: '',
      description: 'Of the rigorous three-year certified organic conversion',
    },
    {
      figure: '50',
      unit: 'guests',
      description: 'A day maximum, across two sittings of twenty-five each',
    },
    {
      figure: '60%',
      unit: 'minimum',
      description: 'Of each plate cut on the farm that morning, guaranteed',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[var(--color-ground)] border-b border-[var(--color-border)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header & Philosophy */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--color-primary)] mb-3">
            Our Principle
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text)] text-balance">
            Why it is built this way
          </h2>
          <p className="font-sans-body text-lg sm:text-xl text-[var(--color-text-secondary)] mt-6 leading-relaxed text-balance">
            Organic on a label asks you to trust a certificate. It seemed simpler to let you cut the thing
            yourself. Everything else here follows from that one decision, including the parts that cost us money.
          </p>
        </div>

        {/* 4 Large Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((st, i) => (
            <div
              key={i}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-7 flex flex-col justify-between hover:border-[var(--color-primary)]/40 transition-colors shadow-xs"
            >
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-serif-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[var(--color-primary)] tracking-tight">
                    {st.figure}
                  </span>
                  {st.unit && (
                    <span className="text-sm font-semibold text-[var(--color-turmeric)] uppercase tracking-wider">
                      {st.unit}
                    </span>
                  )}
                </div>
                <p className="font-sans-body text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed mt-3">
                  {st.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-bleed macro detail shot section divider band (Curry Leaf & Dew Texture) */}
      <div className="w-full border-y border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
        <SmartImage
          src="/images/leaf_texture.jpg"
          alt="Macro detail of fresh curry leaves with morning dew droplets and fertile farm soil"
          className="w-full h-36 sm:h-48 md:h-64 object-cover object-center"
          fallbackNode={
            <LeafTextureGraphic
              className="w-full h-36 sm:h-48 md:h-56 object-cover"
              alt="Macro detail of fresh curry leaves with morning dew droplets and fertile farm soil"
            />
          }
        />
      </div>
    </section>
  );
};
