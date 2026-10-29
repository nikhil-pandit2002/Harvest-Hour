import React from 'react';
import { RouteMapGraphic } from './FarmIllustrations.tsx';
import { MapPin, Navigation, Clock, Users, Calendar } from 'lucide-react';

export const VisitSection: React.FC = () => {
  return (
    <section id="visit" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--color-primary)] mb-3">
            Getting Here
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text)] text-balance">
            Visit
          </h2>
          <p className="font-sans-body text-base sm:text-lg text-[var(--color-text-secondary)] mt-4 text-balance">
            A quiet rural sanctuary easily reachable south of the city along Kanakapura Road.
          </p>
        </div>

        {/* Two Columns Grid: Details on Left, Stylised Map Graphic on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Address, The Drive, Hours, Booking Note */}
          <div className="lg:col-span-6 space-y-8">
            {/* Address */}
            <div className="bg-[var(--color-ground)] border border-[var(--color-border)] rounded-xl p-6">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[var(--color-turmeric)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif-display text-lg font-bold text-[var(--color-text)] mb-1">
                    Address
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed font-sans-body select-all">
                    Survey No. 112/3, Bilikal Betta Road, Harohalli Hobli,
                    <br />
                    Kanakapura Taluk, Ramanagara District, Karnataka 562112
                  </p>
                </div>
              </div>
            </div>

            {/* The Drive */}
            <div className="bg-[var(--color-ground)] border border-[var(--color-border)] rounded-xl p-6">
              <div className="flex items-start gap-3.5">
                <Navigation className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif-display text-lg font-bold text-[var(--color-text)] mb-1">
                    The drive
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed font-sans-body">
                    58 km from MG Road, about 90 minutes on a Sunday morning.
                    Straight down Kanakapura Road, left after the Harohalli industrial gate,
                    then two kilometres of farm track.
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours & Sittings */}
            <div className="bg-[var(--color-ground)] border border-[var(--color-border)] rounded-xl p-6">
              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[var(--color-turmeric)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif-display text-lg font-bold text-[var(--color-text)] mb-1">
                    Opening hours & Sittings
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-sans-body">
                    Open every day of the week, Monday through Sunday (closed through most of June for the monsoon replenishment).
                  </p>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium">
                    <div className="p-2.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)]">
                      <span className="font-semibold text-[var(--color-text)] block">Morning Harvest</span>
                      <span className="text-[var(--color-turmeric)] font-tabular">8:30 AM – 1:30 PM</span>
                    </div>
                    <div className="p-2.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)]">
                      <span className="font-semibold text-[var(--color-text)] block">Midday Table</span>
                      <span className="text-[var(--color-turmeric)] font-tabular">11:30 AM – 4:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Note */}
            <div className="bg-[var(--color-ground)] border border-[var(--color-border)] rounded-xl p-6">
              <div className="flex items-start gap-3.5">
                <Users className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif-display text-lg font-bold text-[var(--color-text)] mb-1">
                    Capacity note
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-sans-body">
                    Twenty-five guests per sitting, fifty a day maximum. We recommend reserving
                    at least one week in advance for regular weekends, and two weeks ahead during peak winter months.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stylised Map Graphic */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md shadow-md rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-ground)]">
              <RouteMapGraphic
                className="w-full h-auto"
                alt="Stylized roadmap from Bengaluru MG Road south along Kanakapura Road to Harvest Hour at Harohalli"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
