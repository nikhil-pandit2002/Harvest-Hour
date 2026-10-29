/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ThingsToDo } from './components/ThingsToDo.tsx';
import { SundayTimeline } from './components/SundayTimeline.tsx';
import { AboutStorySection } from './components/AboutStorySection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { FarmPantryAndAddons } from './components/FarmPantryAndAddons.tsx';
import { RatesSection } from './components/RatesSection.tsx';
import { CratesSection } from './components/CratesSection.tsx';
import { WhyBuiltThisWay } from './components/WhyBuiltThisWay.tsx';
import { VisitSection } from './components/VisitSection.tsx';
import { BookingForm } from './components/BookingForm.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
    }
  }, [isDark]);

  const scrollToBooking = () => {
    const el = document.getElementById('book-a-day');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExplore = () => {
    const el = document.getElementById('things-to-do');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-ground)] text-[var(--color-text)] transition-colors duration-200 selection:bg-[var(--color-turmeric)] selection:text-white">
      {/* 1. Sticky Header */}
      <Header
        onBookClick={scrollToBooking}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
      />

      <main className="flex-1">
        {/* 2. Full-Width Photographic Hero */}
        <Hero
          onBookClick={scrollToBooking}
          onExploreClick={scrollToExplore}
        />

        {/* 3. Things To Do (6 Cards in Responsive Grid) */}
        <ThingsToDo />

        {/* 4. Our Story: The Fourteen-Acre Covenant & Land Rebirth */}
        <AboutStorySection />

        {/* 5. How a Day Runs (Vertical Timeline with Turmeric Times) */}
        <SundayTimeline />

        {/* 6. Why It Is Built This Way (4 Big Statistics & Texture Divider) */}
        <WhyBuiltThisWay />

        {/* 7. Voices from the Soil (Verified Testimonials & Guest Notes) */}
        <TestimonialsSection />

        {/* 8. Rates (Two Columns: A day at the farm & Add on) */}
        <RatesSection onBookClick={scrollToBooking} />

        {/* 9. The Crate (4 Subscription Tiers) */}
        <CratesSection />

        {/* 10. The Farm Pantry, Private Gatherings & FAQs */}
        <FarmPantryAndAddons />

        {/* 11. Visit (Address, Drive, Hours & Stylised Route Map Graphic) */}
        <VisitSection />

        {/* 12. Working Booking Form (Live calculation, Peak rates, HH-1234 Reference) */}
        <BookingForm />
      </main>

      {/* 12. Footer (Logo, Address, Selectable Text Contacts, GIM notice) */}
      <Footer />
    </div>
  );
}
