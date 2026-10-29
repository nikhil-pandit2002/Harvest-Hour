import React, { useState } from 'react';
import { SmartImage } from './SmartImage.tsx';
import { Sprout, Clock, Compass, ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';

export const AboutStorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'origins' | 'covenant' | 'seedbank'>('origins');

  return (
    <section id="our-story" className="py-20 md:py-28 bg-[var(--color-surface)] border-b border-[var(--color-border)] relative overflow-hidden">
      {/* Decorative subtle background pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-turmeric)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[var(--color-turmeric)] bg-[var(--color-turmeric)]/10 mb-4">
            <Sprout className="w-3.5 h-3.5" />
            <span>The Ground We Stand On</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--color-text)] font-semibold leading-tight tracking-tight">
            Fourteen living acres, reborn from dry granite scrub.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] font-sans leading-relaxed">
            In 2018, we traded Bengaluru desks for a parched, over-grazed hillside in Harohalli on Kanakapura Road. 
            We did not build a weekend resort; we built a working sanctuary dedicated to living soil and the lost art of the immediate meal.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual collage of the founders and working beds */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[var(--color-border)] aspect-[4/3] group">
              <SmartImage
                src="/assets/aistudio/types-of-organic-farming-in-india_953e6a8b.jpg"
                alt="Ananya and Karthik inspecting regenerative crops at dawn"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[var(--color-turmeric)] font-mono font-semibold">Field 4 • Harohalli</span>
                <p className="text-base sm:text-lg font-serif italic mt-1">
                  "If the soil smells like sweet monsoon rain before you even plant, you have already won."
                </p>
                <span className="text-xs text-white/80 mt-1">— Ananya Hegde, Co-founder & Soil Biologist</span>
              </div>
            </div>

            {/* Micro stats banner */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-[var(--color-surface-subtle)] border border-[var(--color-border)] text-center">
                <span className="block text-2xl font-serif font-bold text-[var(--color-primary)]">2018</span>
                <span className="text-xs text-[var(--color-text-muted)] mt-1 block">First Composting Trench</span>
              </div>
              <div className="p-4 rounded-xl bg-[var(--color-surface-subtle)] border border-[var(--color-border)] text-center">
                <span className="block text-2xl font-serif font-bold text-[var(--color-primary)]">0g</span>
                <span className="text-xs text-[var(--color-text-muted)] mt-1 block">Synthetic Sprays Ever Used</span>
              </div>
              <div className="p-4 rounded-xl bg-[var(--color-surface-subtle)] border border-[var(--color-border)] text-center">
                <span className="block text-2xl font-serif font-bold text-[var(--color-turmeric)]">60 Min</span>
                <span className="text-xs text-[var(--color-text-muted)] mt-1 block">Soil-to-Plate Rule</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed deep-dive narrative */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            {/* Tab navigation */}
            <div className="flex border-b border-[var(--color-border)] mb-8 gap-4 overflow-x-auto pb-2">
              <button
                onClick={() => setActiveTab('origins')}
                className={`pb-3 text-sm font-semibold tracking-wide transition-all border-b-2 whitespace-nowrap ${
                  activeTab === 'origins'
                    ? 'border-[var(--color-turmeric)] text-[var(--color-turmeric)]'
                    : 'border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                1. The Land's Rebirth
              </button>
              <button
                onClick={() => setActiveTab('covenant')}
                className={`pb-3 text-sm font-semibold tracking-wide transition-all border-b-2 whitespace-nowrap ${
                  activeTab === 'covenant'
                    ? 'border-[var(--color-turmeric)] text-[var(--color-turmeric)]'
                    : 'border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                2. The 60-Minute Rule
              </button>
              <button
                onClick={() => setActiveTab('seedbank')}
                className={`pb-3 text-sm font-semibold tracking-wide transition-all border-b-2 whitespace-nowrap ${
                  activeTab === 'seedbank'
                    ? 'border-[var(--color-turmeric)] text-[var(--color-turmeric)]'
                    : 'border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                3. The Deccan Seed Archive
              </button>
            </div>

            {/* Tab 1: Origins */}
            {activeTab === 'origins' && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="text-2xl font-serif font-medium text-[var(--color-text)]">
                  Turning compacted red stone into rich, humic earth
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm sm:text-base">
                  When Karthik and Ananya acquired these 14 acres beneath Bilikal Betta, the topsoil had been stripped by decades of monoculture eucalyptus and tractor tillage. Rain simply ran off the slope without soaking in.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm sm:text-base">
                  Over five painstaking years, we dug 3,200 meters of contour swales to trap monsoon water, re-introduced indigenous Hallikar cattle, brewed over 40,000 litres of microbial Jeevamrutha, and mulched with vetiver grass and sugarcane bagasse.
                </p>
                <div className="p-4 rounded-xl bg-[var(--color-surface-subtle)] border-l-4 border-[var(--color-primary)]">
                  <p className="text-xs sm:text-sm text-[var(--color-text)] italic">
                    "Today, earthworms number over 120 per cubic foot of bed. When you pull up a beetroot here, you are smelling the living microbiology of an unbroken Deccan ecosystem."
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: The Covenant */}
            {activeTab === 'covenant' && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="text-2xl font-serif font-medium text-[var(--color-text)]">
                  Why cold storage is banned at Harvest Hour
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm sm:text-base">
                  Commercial restaurants buy vegetables harvested days ago, refrigerated, wrapped in cling film, and transported hundreds of kilometres. Sugar turns to starch; crisp cell walls turn limp; micronutrients evaporate.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm sm:text-base">
                  We run our farm kitchen on a strict <strong>60-minute window</strong>. If a basket of tender baby greens, heirloom cherry tomatoes, or sweet Thai basil is harvested at 11:30 AM with guests, it must hit the wood-fired hearth or wooden salad trench by 12:30 PM.
                </p>
                <div className="p-4 rounded-xl bg-[var(--color-surface-subtle)] border-l-4 border-[var(--color-turmeric)]">
                  <p className="text-xs sm:text-sm text-[var(--color-text)] italic">
                    "Guests tell us they tasted sweetness in a raw brinjal or carrot they did not know existed. That is not culinary sorcery; that is simply the biology of cellular freshness."
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: Seed Archive */}
            {activeTab === 'seedbank' && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="text-2xl font-serif font-medium text-[var(--color-text)]">
                  19 Native varieties saved from regional extinction
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm sm:text-base">
                  Modern agriculture relies on uniform F1 hybrid seeds owned by three conglomerate chemical corporations. At Harvest Hour, 100% of our crops come from open-pollinated heirloom seeds gathered from tribal and traditional farmers across Karnataka, Tamil Nadu, and Kerala.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm sm:text-base">
                  From fragrant <em>Gandhasale</em> scented rice to drought-resilient <em>Matti Gulla</em> green aubergine and wild Karnataka amaranths, we save our own seeds season after season in terracotta urns dusted with neem ash.
                </p>
                <div className="p-4 rounded-xl bg-[var(--color-surface-subtle)] border-l-4 border-[var(--color-primary)]">
                  <p className="text-xs sm:text-sm text-[var(--color-text)] italic">
                    "Every guest who attends our afternoon seed-saving workshop takes home an envelope of open-pollinated seeds to plant on their apartment balcony."
                  </p>
                </div>
              </div>
            )}

            {/* 4 Pillars Mini-Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-[var(--color-border)]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text)]">Open 7 Days</h4>
                  <p className="text-xs text-[var(--color-text-muted)]">Monday through Sunday, morning to sunset</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[var(--color-turmeric)]/10 text-[var(--color-turmeric)] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text)]">Zero Chemicals</h4>
                  <p className="text-xs text-[var(--color-text-muted)]">NPOP Certified organic standards</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
