import React, { useState } from 'react';
import { Check, Package, Sparkles } from 'lucide-react';

interface CrateTier {
  id: string;
  name: string;
  cadence: string;
  weight: string;
  yieldNote: string;
  price: string;
  period: string;
  isPopular?: boolean;
  features: string[];
}

export const CratesSection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [subscriptionSuccess, setSubscriptionSuccess] = useState<string | null>(null);

  const tiers: CrateTier[] = [
    {
      id: 'fortnightly-small',
      name: 'Fortnightly, small',
      cadence: 'Alternate Saturdays',
      weight: '4 to 5 kilos',
      yieldNote: 'Feeds two',
      price: 'Rs 1,400',
      period: 'a month',
      features: [
        'Fresh greens, seasonal roots & herbs',
        'Packed Friday night, delivered Saturday morning',
        'Includes weekly harvest recipe card from our chef',
      ],
    },
    {
      id: 'weekly-small',
      name: 'Weekly, small',
      cadence: 'Every Saturday',
      weight: '4 to 5 kilos',
      yieldNote: 'Feeds two',
      price: 'Rs 2,600',
      period: 'a month',
      features: [
        'Weekly supply of certified organic vegetables',
        'Delivered Saturday across Bengaluru',
        'Direct from Harohalli farm soil',
      ],
    },
    {
      id: 'weekly-family',
      name: 'Weekly, family',
      cadence: 'Every Saturday',
      weight: '8 to 10 kilos',
      yieldNote: 'Feeds four',
      price: 'Rs 4,200',
      period: 'a month',
      isPopular: true,
      features: [
        'Generous variety of all in-season crops',
        'Feeds a household of 4 comfortably',
        'Priority delivery window before 10 AM',
      ],
    },
    {
      id: 'membership',
      name: 'Membership',
      cadence: 'Annual program',
      weight: 'Weekly family crate (8–10 kg)',
      yieldNote: 'Full household & visits',
      price: 'Rs 48,000',
      period: 'a year',
      features: [
        'Weekly family crate throughout the year',
        'Two full-day farm visits a year included',
        'First call on peak winter dates & workshops',
        'Seasonal preserves & cold-pressed oils',
      ],
    },
  ];

  const handleSubscribe = (tier: CrateTier) => {
    setSelectedTier(tier.name);
    setSubscriptionSuccess(
      `Your interest in the "${tier.name}" (${tier.price} ${tier.period}) has been noted. You can also add this to your booking notes or activate it at the farm shop!`
    );
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--color-primary)] mb-3">
            Farm Standing Orders
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text)] text-balance">
            The crate
          </h2>
          <p className="font-sans-body text-base sm:text-lg text-[var(--color-text-secondary)] mt-4 leading-relaxed text-balance">
            Most people who visit once want the vegetables again. Crates are packed Friday night and
            delivered across Bengaluru on Saturday, and they hold whatever the calendar says is ready,
            which is the whole idea.
          </p>
        </div>

        {subscriptionSuccess && (
          <div className="mb-8 p-4 rounded-xl bg-[var(--color-surface-subtle)] border border-[var(--color-turmeric)] text-sm text-[var(--color-text)] flex items-center justify-between gap-4 animate-in fade-in">
            <span>{subscriptionSuccess}</span>
            <button
              type="button"
              onClick={() => setSubscriptionSuccess(null)}
              className="text-xs font-bold text-[var(--color-turmeric)] hover:underline shrink-0"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* 4 Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col justify-between p-6 rounded-2xl border transition-all ${
                tier.isPopular
                  ? 'bg-[var(--color-ground)] border-[var(--color-turmeric)] shadow-md ring-1 ring-[var(--color-turmeric)]/30'
                  : 'bg-[var(--color-ground)] border-[var(--color-border)] hover:border-[var(--color-primary)]/40 shadow-xs'
              }`}
            >
              <div>
                {/* Popular indicator */}
                <div className="flex items-center justify-between mb-3 min-h-[22px]">
                  <span className="text-xs uppercase font-bold tracking-wider text-[var(--color-text-secondary)]">
                    {tier.cadence}
                  </span>
                  {tier.isPopular && (
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[var(--color-turmeric)] bg-[var(--color-surface)] px-2 py-0.5 rounded border border-[var(--color-turmeric)]/30">
                      Most popular
                    </span>
                  )}
                </div>

                <h3 className="font-serif-display text-xl font-bold text-[var(--color-text)] mb-2">
                  {tier.name}
                </h3>

                <p className="text-xs text-[var(--color-text-secondary)] mb-4">
                  {tier.weight} · {tier.yieldNote}
                </p>

                {/* Price block */}
                <div className="mb-6 pt-2 pb-4 border-y border-[var(--color-border)]/60">
                  <div className="flex items-baseline gap-1">
                    <span className="font-tabular text-2xl sm:text-3xl font-bold text-[var(--color-turmeric)]">
                      {tier.price}
                    </span>
                    <span className="text-xs text-[var(--color-text-secondary)]">
                      /{tier.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-[var(--color-text-secondary)]">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <button
                type="button"
                onClick={() => handleSubscribe(tier)}
                className={`w-full py-2.5 px-4 text-xs font-semibold rounded-lg transition-colors text-center ${
                  tier.isPopular
                    ? 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)]'
                    : 'bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-primary)]'
                }`}
              >
                Put crate on repeat
              </button>
            </div>
          ))}
        </div>

        {/* Mandatory Note */}
        <p className="text-center text-sm font-medium text-[var(--color-text-secondary)] mt-8">
          Pause any week. Cancel whenever. No contract.
        </p>
      </div>
    </section>
  );
};
