import React from 'react';
import { CROPS, MONTH_NAMES, MONTH_FULL_NAMES } from '../utils/booking.ts';

export const GrowingCalendar: React.FC = () => {
  const currentMonth = new Date().getMonth() + 1; // 1-12
  const allCrops = CROPS;

  return (
    <section id="what-grows" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text)] text-balance">
            What grows, and when
          </h2>
          <p className="font-sans-body text-base sm:text-lg text-[var(--color-text-secondary)] mt-5 leading-relaxed text-balance">
            We do not buy in to fill a menu. If it is not on this chart this month, it is not on your plate.
            At least sixty percent of every dish is cut on the farm that morning.
          </p>
        </div>

        {/* Current Month Highlight Notice */}
        <div className="flex items-center gap-3 text-xs sm:text-sm text-[var(--color-text-secondary)] mb-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-[var(--color-turmeric)] inline-block" />
            <span className="font-semibold text-[var(--color-text)]">
              Current Month: {MONTH_FULL_NAMES[currentMonth - 1]}
            </span>
          </div>
          <span aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-[var(--color-primary)] inline-block" />
            <span>In Season</span>
          </div>
        </div>

        {/* Horizontally Scrollable Calendar Table Container */}
        <div className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-ground)] shadow-xs">
          <div className="calendar-scroll overflow-x-auto min-w-0">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                  <th
                    scope="col"
                    className="py-4 px-4 sm:px-6 text-xs sm:text-sm font-serif-display font-bold text-[var(--color-text)] sticky left-0 z-20 bg-[var(--color-surface)] min-w-[160px] border-r border-[var(--color-border)]"
                  >
                    Crop ({allCrops.length})
                  </th>
                  {MONTH_NAMES.map((month, idx) => {
                    const monthNum = idx + 1;
                    const isCurrent = monthNum === currentMonth;
                    return (
                      <th
                        key={month}
                        scope="col"
                        className={`py-4 px-2 text-center text-xs font-tabular font-bold tracking-wider uppercase transition-colors min-w-[44px] ${
                          isCurrent
                            ? 'bg-[var(--color-turmeric)]/15 text-[var(--color-turmeric)] border-x-2 border-[var(--color-turmeric)]'
                            : 'text-[var(--color-text-secondary)]'
                        }`}
                      >
                        <div>{month}</div>
                        {isCurrent && (
                          <div className="text-[9px] tracking-normal lowercase text-[var(--color-turmeric)] font-semibold mt-0.5">
                            now
                          </div>
                        )}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)] text-xs sm:text-sm">
                {allCrops.map((crop) => {
                  const isInCurrentMonth = crop.months.includes(currentMonth);
                  return (
                    <tr
                      key={crop.name}
                      className={`hover:bg-[var(--color-surface-subtle)]/50 transition-colors ${
                        isInCurrentMonth ? 'bg-[var(--color-surface)]/40' : ''
                      }`}
                    >
                      {/* Crop Name Column */}
                      <th
                        scope="row"
                        className="py-3 px-4 sm:px-6 font-medium text-[var(--color-text)] sticky left-0 z-10 bg-[var(--color-ground)] border-r border-[var(--color-border)] whitespace-nowrap"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span>{crop.name}</span>
                          <span className="text-[10px] text-[var(--color-text-secondary)] font-normal hidden sm:inline">
                            {crop.category}
                          </span>
                        </div>
                      </th>

                      {/* 12 Months Cells */}
                      {MONTH_NAMES.map((_, idx) => {
                        const monthNum = idx + 1;
                        const inSeason = crop.months.includes(monthNum);
                        const isCurrent = monthNum === currentMonth;

                        return (
                          <td
                            key={monthNum}
                            className={`py-3 px-2 text-center transition-colors ${
                              isCurrent
                                ? 'bg-[var(--color-turmeric)]/10 border-x-2 border-[var(--color-turmeric)]/60'
                                : ''
                            }`}
                          >
                            {inSeason ? (
                              <div
                                className={`w-6 h-6 mx-auto rounded-md flex items-center justify-center transition-transform hover:scale-110 ${
                                  isCurrent
                                    ? 'bg-[var(--color-turmeric)] text-white shadow-xs'
                                    : 'bg-[var(--color-primary)] text-white/90'
                                }`}
                                title={`${crop.name} is in season in ${MONTH_NAMES[idx]}`}
                              >
                                <span className="w-2 h-2 rounded-full bg-white" />
                              </div>
                            ) : (
                              <span className="text-[var(--color-border)]" aria-hidden="true">
                                ·
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote note */}
        <p className="text-xs text-[var(--color-text-secondary)] mt-4">
          Note: Curry leaf and Lemongrass are perennial aromatics harvested continuously throughout all twelve months.
        </p>
      </div>
    </section>
  );
};
