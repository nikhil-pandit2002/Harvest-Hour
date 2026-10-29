import React, { useState } from 'react';
import { getSeasonalCrops, MONTH_FULL_NAMES, MONTH_NAMES } from '../utils/booking.ts';
import { Sparkles, Calendar } from 'lucide-react';

export const SeasonStrip: React.FC = () => {
  // Current month (1-12)
  const currentMonth = new Date().getMonth() + 1;
  const [selectedMonth, setSelectedMonth] = useState<number>(currentMonth);

  const seasonalCrops = getSeasonalCrops(selectedMonth);
  const isCurrentMonth = selectedMonth === currentMonth;

  return (
    <section className="bg-[var(--color-ground)] py-10 px-4 sm:px-6 lg:px-8 border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 shadow-sm">
          {/* Top header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-turmeric)] shrink-0" aria-hidden="true" />
              <div>
                <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[var(--color-text)]">
                  Ready this week ({MONTH_FULL_NAMES[selectedMonth - 1]})
                </h2>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-0.5">
                  {isCurrentMonth
                    ? 'Harvesting right now in our vegetable rows'
                    : `Seasonal preview for ${MONTH_FULL_NAMES[selectedMonth - 1]}`}
                </p>
              </div>
            </div>

            {/* Quick interactive month preview tabs */}
            <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none" aria-label="Select month to preview harvest">
              {MONTH_NAMES.map((m, idx) => {
                const monthNum = idx + 1;
                const isSelected = selectedMonth === monthNum;
                const isRealCurrent = monthNum === currentMonth;
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setSelectedMonth(monthNum)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'bg-[var(--color-primary)] text-white shadow-xs'
                        : isRealCurrent
                        ? 'bg-[var(--color-surface-subtle)] text-[var(--color-turmeric)] font-bold border border-[var(--color-turmeric)]/40'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-subtle)]'
                    }`}
                    title={isRealCurrent ? `${m} (Current Month)` : m}
                  >
                    {m}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Seasonal Crops Pills / Tags */}
          <div className="flex flex-wrap gap-2.5 items-center my-4" aria-label="Crops in season">
            {seasonalCrops.map((crop) => (
              <span
                key={crop}
                className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[var(--color-surface-subtle)] text-[var(--color-text)] border border-[var(--color-border)]/70 hover:border-[var(--color-primary)]/50 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] mr-2 shrink-0" aria-hidden="true" />
                {crop}
              </span>
            ))}
          </div>

          {/* Mandatory Caption */}
          <p className="text-xs sm:text-sm italic text-[var(--color-text-secondary)] mt-5 pt-3 border-t border-[var(--color-border)]/40">
            This list changes every few weeks, and so does lunch. That is rather the point.
          </p>
        </div>
      </div>
    </section>
  );
};
