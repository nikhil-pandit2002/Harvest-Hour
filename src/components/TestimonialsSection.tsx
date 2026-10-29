import React, { useState } from 'react';
import { Star, Quote, MessageSquareHeart, CheckCircle2, Filter, Heart, Sparkles, Send } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  category: 'family' | 'chef' | 'school' | 'solo';
  sitting: string;
  dayAttended: string;
  date: string;
  rating: number;
  quote: string;
  highlight: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Rohit & Shweta Nair',
    role: 'Parents of 6-year-old Kabir',
    location: 'Whitefield, Bengaluru',
    category: 'family',
    sitting: 'Full Day Pass • Midday Hearth Feast',
    dayAttended: 'Sunday Family Table',
    date: 'February 2026',
    rating: 5,
    highlight: 'Our son refused vegetables for 3 years until he pulled a carrot out of the Harohalli soil himself.',
    quote: 'We drove down at 7:30 AM via NICE road. The lack of loud music, screens, or plastic games was an absolute breath of fresh air. Kabir spent two uninterrupted hours running between the compost mounds and the nursery with the resident farm dog. Sitting down to eat the crisp wild amaranth greens we helped pick 40 minutes earlier changed how our family thinks about dinner.'
  },
  {
    id: '2',
    name: 'Chef Ankit Sen',
    role: 'Executive Chef & Culinary Consultant',
    location: 'Indiranagar, Bengaluru',
    category: 'chef',
    sitting: 'Midday Communal Hearth Feast',
    dayAttended: 'Thursday Chef Sitting',
    date: 'January 2026',
    rating: 5,
    highlight: 'The 60-minute harvest-to-plate rule is not a marketing phrase here; you literally taste living enzymes.',
    quote: 'As chefs, we talk about farm-to-table constantly, but 99% of restaurants still store produce in walk-in coolers for three days. Sitting under the passionfruit canopy eating wood-roasted brinjals that were attached to a bush sixty minutes prior gave me goosebumps. The sweetness in the vegetables without any added sugar is proof of what real humic soil produces.'
  },
  {
    id: '3',
    name: 'Dr. Gayatri Murthy',
    role: 'Head of Experiential Sciences, Greenwood High',
    location: 'Sarjapur, Bengaluru',
    category: 'school',
    sitting: 'Field Botany Cohort (40 Students)',
    dayAttended: 'Wednesday Educational Tour',
    date: 'February 2026',
    rating: 5,
    highlight: 'The best living biology classroom in South Karnataka. Children touched root nodules and mycorrhizae.',
    quote: 'We brought our grade 7 students for a day on soil ecosystems. Karthik and the farm educators did not lecture them with slides—the children dug into earthworm chambers, tested soil pH with litmus paper, and learned how multi-species cover cropping prevents soil erosion. Every child returned to Bengaluru with dirty fingernails and inspired minds.'
  },
  {
    id: '4',
    name: 'Nandini Raman',
    role: 'Architect & Weekend Ceramicist',
    location: 'Jayanagar, Bengaluru',
    category: 'solo',
    sitting: 'Morning Harvest + Studio Pottery Pass',
    dayAttended: 'Monday Creative Retreat',
    date: 'February 2026',
    rating: 5,
    highlight: 'Total silence, warm morning sunlight, and raw terracotta under your palms.',
    quote: 'Now that the farm is open all seven days of the week, I booked a solo Monday retreat. Sitting at the pottery kick-wheel under the tamarind tree while birds flitted through the heirloom tomato vines gave me the deepest creative reset I have experienced in years. The herbal tisane brewed with fresh lemongrass and ginger was heavenly.'
  },
  {
    id: '5',
    name: 'Vikramaditya & Preeti Rao',
    role: 'Senior Tech Director & Environmental Lawyer',
    location: 'Koramangala, Bengaluru',
    category: 'family',
    sitting: 'Full Day Pass • Twilight Fire',
    dayAttended: 'Saturday Long Table',
    date: 'January 2026',
    rating: 5,
    highlight: 'No rush, no crowded queues. Only 50 guests across 14 acres feels wonderfully private.',
    quote: 'The 50-guest daily cap makes all the difference in the world. You never feel jostled. We spent an hour just reading books on the hammock by the pond while our twins fed the Hallikar calves. The smoked millet bread served directly from the wood-fired mud oven with freshly churned butter is unforgettable.'
  },
  {
    id: '6',
    name: 'Tara Philip',
    role: 'Nutritionist & Gut Microbiome Researcher',
    location: 'Richmond Town, Bengaluru',
    category: 'chef',
    sitting: 'Morning Harvest & Raw Tasting',
    dayAttended: 'Tuesday Morning Sitting',
    date: 'February 2026',
    rating: 5,
    highlight: 'The phytonutrient and antioxidant profile of unchilled harvest cannot be replicated in a supermarket.',
    quote: 'I brought a portable refractometer to test the Brix (sugar and mineral content) of their heirloom cherry tomatoes and cucumbers. The readings were nearly 40% higher than organic produce from supermarket cold cases. It is pure living fuel for human cellular health.'
  }
];

export const TestimonialsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'family' | 'chef' | 'school' | 'solo'>('all');
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    sitting: 'Full Day Pass',
    rating: 5,
    feedback: ''
  });

  const filteredTestimonials = selectedCategory === 'all'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter((t) => t.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.feedback) return;
    setSubmittedMessage(true);
    setTimeout(() => {
      setShowSubmitModal(false);
      setSubmittedMessage(false);
      setNewReview({ name: '', role: '', sitting: 'Full Day Pass', rating: 5, feedback: '' });
    }, 2200);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[var(--color-ground)] border-b border-[var(--color-border)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[var(--color-turmeric)] bg-[var(--color-turmeric)]/10 mb-4">
              <MessageSquareHeart className="w-3.5 h-3.5" />
              <span>Voices from the Soil</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--color-text)] font-semibold leading-tight tracking-tight">
              Stories from our guests, chefs, and little hands.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[var(--color-text-secondary)] font-sans">
              Real reflections from visitors who spent unhurried hours harvesting beneath the Kanakapura sky.
            </p>
          </div>

          {/* Social Proof Summary & Add Review Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <div className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center gap-4 shadow-sm">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[var(--color-turmeric)]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-[var(--color-text-muted)] font-mono mt-1">4.96/5.0 from 840+ verified visits</span>
              </div>
            </div>

            <button
              onClick={() => setShowSubmitModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-[var(--color-surface)] hover:bg-[var(--color-surface-subtle)] text-[var(--color-text)] border border-[var(--color-border)] transition-colors shadow-sm"
            >
              <Heart className="w-4 h-4 text-[var(--color-turmeric)]" />
              <span>Leave a guest note</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs sm:text-sm font-medium">
          <span className="text-[var(--color-text-muted)] flex items-center gap-1 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {[
            { id: 'all', label: 'All Guest Notes' },
            { id: 'family', label: 'Families with Children' },
            { id: 'chef', label: 'Chefs & Nutritionists' },
            { id: 'school', label: 'Schools & Educators' },
            { id: 'solo', label: 'Solo & Creative Retreats' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all border ${
                selectedCategory === cat.id
                  ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-sm'
                  : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-text-muted)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-turmeric)]/50 transition-all flex flex-col justify-between shadow-sm hover:shadow-md group"
            >
              <div>
                {/* Header: Sitting badge and stars */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[var(--color-border)]">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-[var(--color-surface-subtle)] text-[var(--color-primary)] font-medium">
                    <CheckCircle2 className="w-3 h-3 text-[var(--color-primary)]" />
                    {item.dayAttended}
                  </span>
                  <div className="flex items-center text-[var(--color-turmeric)]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Highlight Quote */}
                <p className="text-base font-serif font-medium text-[var(--color-text)] mb-3 leading-snug">
                  "{item.highlight}"
                </p>

                {/* Full Review */}
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-sans leading-relaxed">
                  {item.quote}
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-6 mt-6 border-t border-[var(--color-border)] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-serif font-bold text-[var(--color-text)]">{item.name}</h4>
                  <p className="text-xs text-[var(--color-text-muted)]">{item.role}</p>
                  <p className="text-[11px] text-[var(--color-text-muted)] font-mono">{item.location} • {item.date}</p>
                </div>
                <Quote className="w-6 h-6 text-[var(--color-border)] group-hover:text-[var(--color-turmeric)] transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Guest Note Submission Modal */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="w-full max-w-lg bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="absolute top-4 right-4 p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] rounded-full hover:bg-[var(--color-surface-subtle)]"
                aria-label="Close modal"
              >
                ✕
              </button>

              {submittedMessage ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-[var(--color-text)]">Thank You for Your Words</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] max-w-sm mx-auto">
                    Your memory will be added to our seasonal guestbook and pinned in the dining veranda.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-2">
                    <h3 className="text-xl font-serif font-semibold text-[var(--color-text)]">Leave a Note in the Farm Guestbook</h3>
                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                      Share what you tasted, saw, or felt during your day at Harohalli.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-3.5 py-2 text-sm rounded-lg bg-[var(--color-surface-subtle)] border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-turmeric)] text-[var(--color-text)]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1">
                        Role or Family Note
                      </label>
                      <input
                        type="text"
                        value={newReview.role}
                        onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                        placeholder="e.g. Architect & Mother of 2"
                        className="w-full px-3.5 py-2 text-sm rounded-lg bg-[var(--color-surface-subtle)] border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-turmeric)] text-[var(--color-text)]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1">
                        Sitting Visited
                      </label>
                      <select
                        value={newReview.sitting}
                        onChange={(e) => setNewReview({ ...newReview, sitting: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm rounded-lg bg-[var(--color-surface-subtle)] border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-turmeric)] text-[var(--color-text)]"
                      >
                        <option value="Full Day Pass">Full Day Pass (8 AM - 4 PM)</option>
                        <option value="Midday Hearth Feast">Midday Hearth Feast (11 AM - 3 PM)</option>
                        <option value="Morning Harvest">Morning Harvest (8 AM - 12 PM)</option>
                        <option value="Studio Pottery & Tea">Studio Pottery & Tea</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text)] mb-1">
                      Your Memory / Review
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newReview.feedback}
                      onChange={(e) => setNewReview({ ...newReview, feedback: e.target.value })}
                      placeholder="What was the most memorable part of your harvest or meal?"
                      className="w-full px-3.5 py-2 text-sm rounded-lg bg-[var(--color-surface-subtle)] border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-turmeric)] text-[var(--color-text)]"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setShowSubmitModal(false)}
                      className="px-4 py-2 text-xs font-medium rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-subtle)]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white shadow-sm transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Post Note</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
