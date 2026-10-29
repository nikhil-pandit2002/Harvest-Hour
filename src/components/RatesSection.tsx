import React from 'react';

interface RatesSectionProps {
  onBookClick: () => void;
}

export const RatesSection: React.FC<RatesSectionProps> = ({ onBookClick }) => {
  const dayRates = [
    {
      title: 'Weekday',
      detail: 'Monday to Friday, either sitting',
      price: 'Rs 2,800',
    },
    {
      title: 'Weekend',
      detail: 'Saturday and Sunday',
      price: 'Rs 3,500',
    },
    {
      title: 'Peak weekend',
      detail: 'November to February (Winter Harvest)',
      price: 'Rs 4,200',
      badge: 'Peak Harvest',
    },
    {
      title: 'Children',
      detail: 'Five to fifteen, farm school included',
      price: 'Rs 1,800',
    },
    {
      title: 'Under fives',
      detail: 'Free, and welcome',
      price: 'Free',
    },
  ];

  const addOnRates = [
    {
      title: 'Pottery shed',
      detail: 'One piece fired and collected later',
      price: 'Rs 900',
    },
    {
      title: 'Growing workshop',
      detail: 'Adults (Composting, balcony gardening, seed saving)',
      price: 'Rs 1,200',
    },
    {
      title: 'School visit',
      detail: 'Weekday mornings, forty children minimum',
      price: 'Rs 800 a child',
    },
    {
      title: 'Private buyout',
      detail: 'The whole farm, one sitting, up to fifty',
      price: 'From Rs 1,50,000',
    },
    {
      title: 'Corporate day',
      detail: 'Weekdays, cooking in teams, up to forty',
      price: 'From Rs 1,80,000',
    },
  ];

  return (
    <section id="rates" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[var(--color-ground)] border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--color-primary)] mb-3">
            Simple, Transparent Pricing
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text)] text-balance">
            Rates
          </h2>
          <p className="font-sans-body text-base sm:text-lg text-[var(--color-text-secondary)] mt-4 text-balance">
            Every day booking includes farm harvest, kitchen prep with the chef, and the long table lunch.
            Workshops and buyouts can be reserved on booking.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Column 1: A day at the farm */}
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="pb-4 mb-6 border-b border-[var(--color-border)]">
              <h3 className="font-serif-display text-2xl font-bold text-[var(--color-text)]">
                A day at the farm
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-1">
                Per person · Includes harvest crate, chef cooking session, and courses lunch
              </p>
            </div>

            <ul className="divide-y divide-[var(--color-border)]/60">
              {dayRates.map((rate) => (
                <li key={rate.title} className="py-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-base text-[var(--color-text)]">
                        {rate.title}
                      </span>
                      {rate.badge && (
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-turmeric)] bg-[var(--color-surface-subtle)] px-2 py-0.5 rounded">
                          {rate.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs sm:text-sm text-[var(--color-text-secondary)] block mt-0.5">
                      {rate.detail}
                    </span>
                  </div>
                  <span className="font-tabular font-bold text-base sm:text-lg text-[var(--color-turmeric)] whitespace-nowrap shrink-0">
                    {rate.price}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
              <button
                type="button"
                onClick={onBookClick}
                className="w-full py-3 px-4 text-sm font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] rounded-lg transition-colors text-center"
              >
                Book your visit
              </button>
            </div>
          </div>

          {/* Column 2: Add on, or book the lot */}
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="pb-4 mb-6 border-b border-[var(--color-border)]">
              <h3 className="font-serif-display text-2xl font-bold text-[var(--color-text)]">
                Add on, or book the lot
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-1">
                Individual sessions, group offsites, and private farm buyouts
              </p>
            </div>

            <ul className="divide-y divide-[var(--color-border)]/60">
              {addOnRates.map((item) => (
                <li key={item.title} className="py-4 flex items-center justify-between gap-4">
                  <div>
                    <span className="font-semibold text-base text-[var(--color-text)] block">
                      {item.title}
                    </span>
                    <span className="text-xs sm:text-sm text-[var(--color-text-secondary)] block mt-0.5">
                      {item.detail}
                    </span>
                  </div>
                  <span className="font-tabular font-bold text-base sm:text-lg text-[var(--color-turmeric)] whitespace-nowrap shrink-0">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-[var(--color-border)] text-xs text-[var(--color-text-secondary)]">
              Private buyouts and corporate sessions include exclusive access to the fields,
              kitchen pavilion, and dedicated staff. Enquire via notes on the booking form.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
