import React, { useState } from 'react';
import { ShoppingBag, Users, HelpCircle, ChevronDown, Sparkles, Check, Coffee, Trees, Utensils } from 'lucide-react';

interface PantryItem {
  id: string;
  name: string;
  weight: string;
  price: string;
  tag: string;
  description: string;
}

const PANTRY_ITEMS: PantryItem[] = [
  {
    id: 'honey',
    name: 'Wild Ridge Multi-Flora Raw Honey',
    weight: '500g Glass Jar',
    price: '₹550',
    tag: 'Harvested Bi-Weekly',
    description: 'Unheated, unfiltered raw honey from bee boxes placed among our eucalyptus ridges and passionfruit trellises.'
  },
  {
    id: 'oil',
    name: 'Wood-Cold-Pressed Black Sesame Oil',
    weight: '750ml Stone Bottle',
    price: '₹480',
    tag: 'Bullock-Driven Wood Press',
    description: 'Pressed at room temperature using heirloom black sesame seeds grown right in Field 2. Rich, nutty, and enzyme-intact.'
  },
  {
    id: 'sourdough',
    name: 'Khapli Emmer Wood-Fired Sourdough',
    weight: '800g Hearth Loaf',
    price: '₹320',
    tag: 'Baked Every Morning at 7 AM',
    description: '36-hour slow fermentation using ancient Karnataka Khapli wheat. Baked in our clay mud hearth with tamarind wood coals.'
  },
  {
    id: 'pickle',
    name: 'Sun-Cured Wild Mango & Mustard Thokku',
    weight: '350g Ceramic Urn',
    price: '₹350',
    tag: 'Fermented 40 Days',
    description: 'Small wild sour mangoes cured in rock salt and crushed black mustard seeds under the Ramanagara sun.'
  }
];

const FAQS = [
  {
    q: 'What should we wear for a day in the fields?',
    a: 'Wear comfortable loose cotton clothes and closed-toe footwear or boots that you don’t mind getting red Deccan mud on. We provide sun hats, hand-woven cotton harvesting baskets, and brass pruning shears upon arrival.'
  },
  {
    q: 'Can we bring our family pet?',
    a: 'Yes! Well-behaved dogs on leashes are warmly welcomed in our outdoor orchards, walking trails, and veranda dining areas. We ask that pets stay off the active seedling nursery beds.'
  },
  {
    q: 'What happens if it rains during our booked day?',
    a: 'Our central long dining veranda is covered with antique clay Mangalore tiles and open wooden eaves. Watching the rain roll down Bilikal Betta onto the banana groves while sipping piping hot ginger tisane is one of the farm’s most magical experiences. Rain boots and umbrellas are provided.'
  },
  {
    q: 'How do you accommodate dietary preferences (vegan, gluten-free, Jain)?',
    a: 'Because everything is harvested and prepared in our open hearth kitchen on the same morning, our chefs can easily adapt dishes. Our entire table is plant-forward and vegetarian, with abundant gluten-free millet options and no onion/garlic dishes available on request.'
  },
  {
    q: 'Is the farm accessible for elderly guests and strollers?',
    a: 'Yes, the main paths connecting the arrival pavilion, dining veranda, pottery shelter, and central raised beds are leveled packed-gravel walkways without steep steps.'
  }
];

export const FarmPantryAndAddons: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedPantry, setSelectedPantry] = useState<string[]>([]);
  const [pantryNotice, setPantryNotice] = useState<string | null>(null);

  const togglePantry = (name: string) => {
    if (selectedPantry.includes(name)) {
      setSelectedPantry(selectedPantry.filter((item) => item !== name));
    } else {
      setSelectedPantry([...selectedPantry, name]);
      setPantryNotice(`Added ${name} to your pre-order note.`);
      setTimeout(() => setPantryNotice(null), 2500);
    }
  };

  return (
    <section id="pantry-and-gatherings" className="py-20 md:py-28 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section 1: The Farm Pantry */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[var(--color-turmeric)] bg-[var(--color-turmeric)]/10 mb-4">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Take The Farm Home</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[var(--color-text)] font-semibold tracking-tight">
                The Farm Pantry: Small-Batch Provisions
              </h2>
              <p className="mt-2 text-[var(--color-text-secondary)] text-base max-w-2xl">
                Cured, cold-pressed, or wood-fired on the farm in strictly limited batches. Available for guests to collect at departure.
              </p>
            </div>

            {selectedPantry.length > 0 && (
              <div className="p-3 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-xl flex items-center gap-3">
                <Check className="w-4 h-4 text-[var(--color-primary)]" />
                <span className="text-xs font-mono text-[var(--color-primary)] font-medium">
                  {selectedPantry.length} pantry item(s) earmarked for pickup
                </span>
              </div>
            )}
          </div>

          {/* Pantry Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PANTRY_ITEMS.map((item) => {
              const isSelected = selectedPantry.includes(item.name);
              return (
                <div
                  key={item.id}
                  className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[var(--color-surface-subtle)] border-[var(--color-turmeric)] ring-1 ring-[var(--color-turmeric)]'
                      : 'bg-[var(--color-ground)] border-[var(--color-border)] hover:border-[var(--color-text-muted)]'
                  }`}
                >
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-medium text-[var(--color-turmeric)] bg-[var(--color-turmeric)]/10 mb-3">
                      {item.tag}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-[var(--color-text)] leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs font-mono text-[var(--color-text-muted)] mt-1 mb-3">
                      {item.weight}
                    </p>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                    <span className="font-serif font-bold text-lg text-[var(--color-text)]">
                      {item.price}
                    </span>
                    <button
                      onClick={() => togglePantry(item.name)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-[var(--color-turmeric)] text-white'
                          : 'bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-turmeric)]'
                      }`}
                    >
                      {isSelected ? 'Earmarked ✓' : '+ Add to Visit'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {pantryNotice && (
            <p className="mt-4 text-xs font-mono text-[var(--color-primary)] text-right animate-pulse">
              {pantryNotice}
            </p>
          )}
        </div>

        {/* Section 2: Private Hearth Buyouts & Celebrations */}
        <div className="mb-20 rounded-3xl bg-[var(--color-forest)] text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[var(--color-turmeric)]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-[var(--color-turmeric)] bg-white/10 mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>Private Gatherings & Buyouts</span>
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold leading-tight">
              Host an unhurried celebration under the tamarind canopy.
            </h3>
            <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed font-sans">
              From intimate milestone 40th birthdays and slow weddings to executive retreats seeking deep mental clarity. 
              Enjoy exclusive private use of the entire 14 acres, custom wood-fired menus, and pottery workshops for groups of 20 to 50 guests.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/20">
              <div className="flex items-center gap-3">
                <Utensils className="w-5 h-5 text-[var(--color-turmeric)]" />
                <span className="text-xs sm:text-sm font-medium">Bespoke 6-Course Feast</span>
              </div>
              <div className="flex items-center gap-3">
                <Trees className="w-5 h-5 text-[var(--color-turmeric)]" />
                <span className="text-xs sm:text-sm font-medium">Exclusive 14-Acre Buyout</span>
              </div>
              <div className="flex items-center gap-3">
                <Coffee className="w-5 h-5 text-[var(--color-turmeric)]" />
                <span className="text-xs sm:text-sm font-medium">Full Day Butler & Sommelier</span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#book-a-day"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-[var(--color-forest)] bg-[var(--color-turmeric)] hover:bg-[var(--color-turmeric-light)] transition-colors shadow-lg"
              >
                Inquire About Private Buyouts
              </a>
            </div>
          </div>
        </div>

        {/* Section 3: Frequently Asked Questions */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[var(--color-turmeric)] bg-[var(--color-turmeric)]/10 mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Need to Know</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--color-text)]">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-1">
              Everything you need to prepare for your day in Harohalli.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-ground)] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left font-serif font-medium text-base sm:text-lg text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[var(--color-text-muted)] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[var(--color-turmeric)]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[var(--color-text-secondary)] font-sans leading-relaxed border-t border-[var(--color-border)]/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
