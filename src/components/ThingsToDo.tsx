import React from 'react';
import {
  PickYourOwnGraphic,
  CookWithChefGraphic,
  PotteryShedGraphic,
  FarmSchoolGraphic,
  GrowingWorkshopGraphic,
  FarmCratesGraphic,
} from './FarmIllustrations.tsx';
import { SmartImage } from './SmartImage.tsx';

interface ActivityCard {
  id: string;
  title: string;
  priceDuration: string;
  description: string;
  graphic: React.ReactNode;
}

export const ThingsToDo: React.FC = () => {
  const activities: ActivityCard[] = [
    {
      id: 'pick-your-own',
      title: 'Pick your own',
      priceDuration: 'Included · 75 minutes',
      description:
        'Out into the rows with a crate and a knife. A grower walks with you and explains why the methi is good this week and the tomatoes are two weeks away. You cut only what you want to eat.',
      graphic: (
        <SmartImage
          src="/assets/aistudio/images__8__82d9661e.jpg"
          alt="Lush organic vegetable crop rows in rich soil ready for harvesting"
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          fallbackNode={
            <PickYourOwnGraphic
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Hands harvesting fresh methi and spinach with a knife into a wicker basket"
            />
          }
        />
      ),
    },
    {
      id: 'cook-with-chef',
      title: 'Cook with the chef',
      priceDuration: 'Included · 90 minutes',
      description:
        'You put your crate on the pass and the chef builds a menu around it, or you say what you feel like and he works out how to get there. Then you are on a station, not watching a demonstration.',
      graphic: (
        <SmartImage
          src="/images/cook_with_chef.jpg"
          alt="Resident chef cooking fresh produce with guests in rustic kitchen"
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          fallbackNode={
            <CookWithChefGraphic
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Open rustic kitchen pavilion with resident chef and guests cooking fresh farm produce"
            />
          }
        />
      ),
    },
    {
      id: 'pottery-shed',
      title: 'The pottery shed',
      priceDuration: 'Rs 900 a person · 60 minutes',
      description:
        'The same soil the vegetables come out of, on a wheel. Four wheels and a hand-building table, run by a potter from Channapatna. Children take their piece home fired the following week.',
      graphic: (
        <SmartImage
          src="/assets/aistudio/images__7__6484c65a.jpg"
          alt="Hands shaping wet clay into a vase on an artisan pottery wheel"
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          fallbackNode={
            <PotteryShedGraphic
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Hands throwing wet terracotta clay on an artisan pottery wheel"
            />
          }
        />
      ),
    },
    {
      id: 'farm-school',
      title: 'Farm school for children',
      priceDuration: 'Included for children · 40 minutes',
      description:
        'Forty minutes on soil, seed and compost, pitched at five to twelve year olds and run by someone who likes children. They plant one thing, label it, and come back to find it grown.',
      graphic: (
        <SmartImage
          src="/assets/aistudio/images__10__25671de6.jpg"
          alt="Children learning organic gardening in raised beds and playing on straw bales"
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          fallbackNode={
            <FarmSchoolGraphic
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Children learning about soil, seeds, and seedlings with farm mentor"
            />
          }
        />
      ),
    },
    {
      id: 'growing-workshops',
      title: 'Growing workshops',
      priceDuration: 'Rs 1,200 a person · 90 minutes',
      description:
        'For adults who want the balcony to work. Composting, seed saving, a kitchen garden in four pots, and what actually goes wrong in a Bengaluru summer. Small groups, one topic a weekend.',
      graphic: (
        <SmartImage
          src="/assets/aistudio/images__9__4c07651d.jpg"
          alt="Cucumbers and heirloom tomatoes flourishing on kitchen garden vines"
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          fallbackNode={
            <GrowingWorkshopGraphic
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Adults gathered around compost garden bed and seed packets"
            />
          }
        />
      ),
    },
    {
      id: 'farm-shop-crates',
      title: 'Farm shop and crates',
      priceDuration: 'Crates from Rs 1,400 a month',
      description:
        'Take home what you could not eat, or put a crate on repeat and we deliver across Bengaluru on Saturdays. Members get first call on peak dates and two visits a year.',
      graphic: (
        <SmartImage
          src="/assets/aistudio/LENTO_201_b8b5c776.webp"
          alt="Rustic farm shop and cafe pavilion with lush climbing plants and handcrafted preserves"
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          fallbackNode={
            <FarmCratesGraphic
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Overhead still life of wooden crate packed with seasonal vegetables on rough teak wood"
            />
          }
        />
      ),
    },
  ];

  return (
    <section id="things-to-do" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--color-primary)] mb-3">
            What happens on the farm
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text)] text-balance">
            Things to do
          </h2>
          <p className="font-sans-body text-base sm:text-lg text-[var(--color-text-secondary)] mt-4 text-balance">
            A morning designed so adults and children spend their hours in soil, kitchen,
            and craft, rather than behind screens.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((act) => (
            <article
              key={act.id}
              className="group flex flex-col bg-[var(--color-ground)] border border-[var(--color-border)] rounded-2xl overflow-hidden hover:border-[var(--color-primary)]/40 hover:shadow-md transition-all duration-300"
            >
              {/* Visual Card Image */}
              <div className="overflow-hidden bg-[var(--color-surface-subtle)] border-b border-[var(--color-border)] relative">
                {act.graphic}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif-display text-2xl font-bold text-[var(--color-text)] mb-3">
                    {act.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {act.description}
                  </p>
                </div>

                {/* Turmeric price/duration line */}
                <div className="pt-4 border-t border-[var(--color-border)]/60">
                  <span className="font-tabular font-semibold text-sm sm:text-base text-[var(--color-turmeric)]">
                    {act.priceDuration}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
