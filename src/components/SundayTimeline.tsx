import React from 'react';
import { TheLongTableGraphic } from './FarmIllustrations.tsx';
import { SmartImage } from './SmartImage.tsx';

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
}

export const SundayTimeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      time: '8:30',
      title: 'Arrival',
      description:
        'A cold press of whatever is heaviest on the vine, and a walk through what is ready today.',
    },
    {
      time: '9:15',
      title: 'Harvest',
      description:
        'Into the rows with a crate. Children get their own smaller one and are generally more ruthless about it than their parents.',
    },
    {
      time: '10:30',
      title: 'Split',
      description:
        'Adults to the kitchen or the growing workshop. Children to farm school, then the pottery shed. Nobody is left holding a phone.',
    },
    {
      time: '12:30',
      title: 'The long table',
      description:
        'Served in courses at the pavilion, facing the field you cut it from two hours earlier.',
    },
    {
      time: '14:00',
      title: 'The shop',
      description:
        'Crates, preserves, jaggery from the next village, and a sourdough starter if you ask nicely.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[var(--color-ground)] border-y border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--color-primary)] mb-3">
              The Rhythm of the Day
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text)] text-balance">
              How a Sunday runs
            </h2>
            <p className="font-sans-body text-base sm:text-lg text-[var(--color-text-secondary)] mt-5 leading-relaxed">
              We operate two sittings daily (8:30am and 11:30am), capped at twenty-five guests each.
              Here is how the morning sitting unfolds from first pour to the shop on departure.
            </p>

            <div className="mt-8 p-5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)]">
              <span className="font-semibold text-[var(--color-text)] block mb-1">
                Midday Sitting Note
              </span>
              The 11:30am sitting runs the same sequence shifted forward: harvest at 12:15pm,
              workshop split at 1:30pm, and the long table lunch served at 3:00pm.
            </div>
          </div>

          {/* Right Column: Vertical Timeline */}
          <div className="lg:col-span-7">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--color-border)] ml-4 sm:ml-6 space-y-12">
              {events.map((event, idx) => (
                <div key={event.time} className="relative group">
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[var(--color-surface)] border-3 border-[var(--color-turmeric)] group-hover:scale-125 transition-transform"
                    aria-hidden="true"
                  />

                  {/* Content block */}
                  <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 shadow-xs hover:border-[var(--color-turmeric)]/40 transition-colors">
                    {/* Time in turmeric down the left */}
                    <span className="font-tabular text-xl sm:text-2xl font-bold text-[var(--color-turmeric)] block mb-1">
                      {event.time}
                    </span>
                    <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[var(--color-text)] mb-2">
                      {event.title}
                    </h3>
                    <p className="font-sans-body text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expansive Full-bleed style Long Table Pavilion Photographic Showcase */}
        <div className="mt-20 border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm bg-[var(--color-surface)]">
          <SmartImage
            src="/assets/aistudio/al-fresco-outdoor-dining-area-restaurant-12671543_8b318cc7.webp"
            alt="The long communal table under a shaded garden pavilion facing lush greenery"
            className="w-full h-72 sm:h-96 md:h-[440px] object-cover"
            fallbackNode={
              <TheLongTableGraphic
                className="w-full h-72 sm:h-96 md:h-[420px] object-cover"
                alt="The long communal table under a shaded timber pavilion facing organic fields"
              />
            }
          />
          <div className="p-6 sm:p-8 bg-[var(--color-surface)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[var(--color-border)]">
            <div>
              <h4 className="font-serif-display text-xl font-bold text-[var(--color-text)]">
                The Long Table Pavilion
              </h4>
              <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">
                Twenty-five guests seated together facing the soil the vegetables left sixty minutes earlier.
              </p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-turmeric)] px-3 py-1 rounded bg-[var(--color-surface-subtle)] whitespace-nowrap">
              Course 1 Served 12:30 PM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
