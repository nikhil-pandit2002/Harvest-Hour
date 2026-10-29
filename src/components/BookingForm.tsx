import React, { useState, useId } from 'react';
import {
  calculateBooking,
  generateBookingReference,
  getDayRateInfo,
  BookingCalculationResult,
} from '../utils/booking.ts';
import { Calendar, Clock, Users, CheckCircle2, AlertCircle, ArrowRight, Printer } from 'lucide-react';

export const BookingForm: React.FC = () => {
  // Default to a future Saturday (e.g., upcoming weekend in November)
  const today = new Date();
  const defaultDate = new Date(today);
  // Find upcoming Saturday
  const daysUntilSat = (6 - defaultDate.getDay() + 7) % 7 || 7;
  defaultDate.setDate(defaultDate.getDate() + daysUntilSat);
  const defaultDateStr = defaultDate.toISOString().split('T')[0];

  const [date, setDate] = useState<string>(defaultDateStr);
  const [sitting, setSitting] = useState<'morning' | 'midday'>('morning');
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(1);
  const [underFives, setUnderFives] = useState<number>(0);
  const [potteryPlaces, setPotteryPlaces] = useState<number>(1);
  const [workshopPlaces, setWorkshopPlaces] = useState<number>(0);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmedBooking, setConfirmedBooking] = useState<{
    reference: string;
    date: string;
    sitting: string;
    adults: number;
    children: number;
    underFives: number;
    potteryPlaces: number;
    workshopPlaces: number;
    fullName: string;
    phone: string;
    email: string;
    notes: string;
    calculation: BookingCalculationResult;
  } | null>(null);

  // Live calculation
  const calculation = calculateBooking({
    date,
    adults,
    children,
    underFives,
    potteryPlaces,
    workshopPlaces,
  });

  const dayRateInfo = getDayRateInfo(date);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!date) {
      newErrors.date = 'Please select a date.';
    } else if (!calculation.isOpen) {
      newErrors.date = calculation.statusMessage || 'Harvest Hour is closed on this day.';
    }

    if (adults < 1) {
      newErrors.adults = 'At least one adult must accompany the booking.';
    }

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const reference = generateBookingReference();

    setConfirmedBooking({
      reference,
      date,
      sitting: sitting === 'morning' ? '8:30 AM Morning Harvest' : '11:30 AM Midday Table',
      adults,
      children,
      underFives,
      potteryPlaces,
      workshopPlaces,
      fullName,
      phone,
      email,
      notes,
      calculation,
    });
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setNotes('');
  };

  return (
    <section id="book-a-day" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[var(--color-ground)] border-b border-[var(--color-border)] scroll-mt-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--color-primary)] mb-3">
            Reserve Your Sitting
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text)] text-balance">
            Book a day
          </h2>
          <p className="font-sans-body text-base sm:text-lg text-[var(--color-text-secondary)] mt-4 leading-relaxed text-balance">
            Two sittings daily, Monday through Sunday (open all 7 days). Twenty-five guests per sitting.
            Live rate calculation updates automatically based on your date and party size.
          </p>
        </div>

        {/* Confirmation Screen */}
        {confirmedBooking ? (
          <div className="bg-[var(--color-surface)] border-2 border-[var(--color-primary)] rounded-2xl p-6 sm:p-10 shadow-lg animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[var(--color-border)] gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-primary)] block">
                    Sitting Reserved
                  </span>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[var(--color-text)]">
                    We look forward to hosting you
                  </h3>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs text-[var(--color-text-secondary)] block">Booking Reference</span>
                <span className="font-tabular font-bold text-2xl text-[var(--color-turmeric)]">
                  {confirmedBooking.reference}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="space-y-4">
                <h4 className="font-serif-display text-lg font-bold text-[var(--color-text)]">
                  Reservation Details
                </h4>
                <div className="space-y-2 text-[var(--color-text-secondary)]">
                  <p>
                    <strong className="text-[var(--color-text)]">Date:</strong>{' '}
                    {new Date(`${confirmedBooking.date}T12:00:00`).toLocaleDateString('en-IN', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <p>
                    <strong className="text-[var(--color-text)]">Sitting:</strong>{' '}
                    {confirmedBooking.sitting}
                  </p>
                  <p>
                    <strong className="text-[var(--color-text)]">Guests:</strong>{' '}
                    {confirmedBooking.adults} Adults
                    {confirmedBooking.children > 0 && `, ${confirmedBooking.children} Children`}
                    {confirmedBooking.underFives > 0 && `, ${confirmedBooking.underFives} Under 5`}
                  </p>
                  {(confirmedBooking.potteryPlaces > 0 || confirmedBooking.workshopPlaces > 0) && (
                    <p>
                      <strong className="text-[var(--color-text)]">Workshops:</strong>{' '}
                      {confirmedBooking.potteryPlaces > 0 && `${confirmedBooking.potteryPlaces} Pottery Shed place(s)`}
                      {confirmedBooking.potteryPlaces > 0 && confirmedBooking.workshopPlaces > 0 && ', '}
                      {confirmedBooking.workshopPlaces > 0 && `${confirmedBooking.workshopPlaces} Growing Workshop place(s)`}
                    </p>
                  )}
                  <p>
                    <strong className="text-[var(--color-text)]">Guest Name:</strong>{' '}
                    {confirmedBooking.fullName}
                  </p>
                  <p>
                    <strong className="text-[var(--color-text)]">Contact:</strong>{' '}
                    {confirmedBooking.phone} · {confirmedBooking.email}
                  </p>
                  {confirmedBooking.notes && (
                    <p className="p-3 rounded-lg bg-[var(--color-surface-subtle)] text-xs text-[var(--color-text)] italic">
                      "{confirmedBooking.notes}"
                    </p>
                  )}
                </div>
              </div>

              {/* Itemized Summary */}
              <div className="bg-[var(--color-ground)] p-6 rounded-xl border border-[var(--color-border)]">
                <h4 className="font-serif-display text-lg font-bold text-[var(--color-text)] mb-4">
                  Invoice Summary
                </h4>
                <div className="space-y-3 font-tabular text-sm">
                  {confirmedBooking.calculation.lineItems.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-[var(--color-text-secondary)]">
                      <span>
                        {item.label} × {item.quantity}
                      </span>
                      <span className="font-medium text-[var(--color-text)]">
                        Rs {item.total.toLocaleString('en-IN')}
                      </span>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-[var(--color-border)] flex justify-between items-baseline font-bold text-base text-[var(--color-text)]">
                    <span>Total Amount</span>
                    <span className="text-xl text-[var(--color-turmeric)]">
                      Rs {confirmedBooking.calculation.total.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-[var(--color-text-secondary)] mt-4">
                  Payment instructions sent to your email. Cash and UPI accepted on farm arrival.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-surface-subtle)] transition-colors"
              >
                <Printer className="w-4 h-4" />
                Print / Save receipt
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-semibold rounded-lg bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)] transition-colors"
              >
                Book another date
              </button>
            </div>
          </div>
        ) : (
          /* Working Booking Form */
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            noValidate
          >
            {/* Form Fields: 7 Columns */}
            <div className="lg:col-span-7 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
              {/* Step 1: Date & Sitting */}
              <div>
                <h3 className="font-serif-display text-xl font-bold text-[var(--color-text)] mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[var(--color-primary)]" />
                  1. Choose Date & Sitting
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date Input */}
                  <div>
                    <label htmlFor="booking-date" className="block text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider mb-1.5">
                      Date (Open all 7 days)
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className={`w-full px-3.5 py-2.5 text-sm bg-[var(--color-ground)] border rounded-lg text-[var(--color-text)] focus:outline-none ${
                        errors.date || !dayRateInfo.isOpen
                          ? 'border-red-500 ring-1 ring-red-500'
                          : 'border-[var(--color-border)] focus:border-[var(--color-primary)]'
                      }`}
                    />
                    {!dayRateInfo.isOpen && date && (
                      <p className="text-xs text-amber-700 dark:text-amber-400 mt-1.5 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {dayRateInfo.isClosedReason}
                      </p>
                    )}
                    {errors.date && (
                      <p className="text-xs text-red-600 mt-1">{errors.date}</p>
                    )}
                  </div>

                  {/* Sitting Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider mb-1.5">
                      Sitting
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      <label
                        className={`flex items-center justify-between p-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${
                          sitting === 'morning'
                            ? 'border-[var(--color-primary)] bg-[var(--color-surface-subtle)] font-semibold text-[var(--color-text)]'
                            : 'border-[var(--color-border)] text-[var(--color-text-secondary)]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="sitting"
                            value="morning"
                            checked={sitting === 'morning'}
                            onChange={() => setSitting('morning')}
                            className="text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                          />
                          <span>8:30 AM Morning Harvest</span>
                        </div>
                      </label>

                      <label
                        className={`flex items-center justify-between p-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${
                          sitting === 'midday'
                            ? 'border-[var(--color-primary)] bg-[var(--color-surface-subtle)] font-semibold text-[var(--color-text)]'
                            : 'border-[var(--color-border)] text-[var(--color-text-secondary)]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="sitting"
                            value="midday"
                            checked={sitting === 'midday'}
                            onChange={() => setSitting('midday')}
                            className="text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                          />
                          <span>11:30 AM Midday Table</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Party Size & Add-ons */}
              <div className="pt-4 border-t border-[var(--color-border)]/60">
                <h3 className="font-serif-display text-xl font-bold text-[var(--color-text)] mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[var(--color-primary)]" />
                  2. Guests & Workshops
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  {/* Adults */}
                  <div>
                    <label htmlFor="adults-count" className="block text-xs font-semibold text-[var(--color-text)] mb-1">
                      Adults
                    </label>
                    <div className="flex items-center">
                      <input
                        id="adults-count"
                        type="number"
                        min="1"
                        max="25"
                        value={adults}
                        onChange={(e) => setAdults(Math.max(1, parseInt(e.target.value) || 0))}
                        className="w-full px-3 py-2 text-sm bg-[var(--color-ground)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] font-tabular"
                      />
                    </div>
                    <span className="text-[11px] text-[var(--color-text-secondary)] mt-1 block">
                      {dayRateInfo.rateTypeLabel}: Rs {dayRateInfo.ratePerAdult.toLocaleString('en-IN')}
                    </span>
                    {errors.adults && <p className="text-xs text-red-600 mt-1">{errors.adults}</p>}
                  </div>

                  {/* Children (5-15) */}
                  <div>
                    <label htmlFor="children-count" className="block text-xs font-semibold text-[var(--color-text)] mb-1">
                      Children (5–15)
                    </label>
                    <input
                      id="children-count"
                      type="number"
                      min="0"
                      max="15"
                      value={children}
                      onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full px-3 py-2 text-sm bg-[var(--color-ground)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] font-tabular"
                    />
                    <span className="text-[11px] text-[var(--color-text-secondary)] mt-1 block">
                      Rs 1,800 · Farm school included
                    </span>
                  </div>

                  {/* Under 5 */}
                  <div>
                    <label htmlFor="under-fives-count" className="block text-xs font-semibold text-[var(--color-text)] mb-1">
                      Under 5s
                    </label>
                    <input
                      id="under-fives-count"
                      type="number"
                      min="0"
                      max="10"
                      value={underFives}
                      onChange={(e) => setUnderFives(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full px-3 py-2 text-sm bg-[var(--color-ground)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] font-tabular"
                    />
                    <span className="text-[11px] text-[var(--color-text-secondary)] mt-1 block">
                      Free & welcome
                    </span>
                  </div>
                </div>

                {/* Add-on Workshops */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                  <div>
                    <label htmlFor="pottery-count" className="block text-xs font-semibold text-[var(--color-text)] mb-1">
                      Pottery Shed Places
                    </label>
                    <input
                      id="pottery-count"
                      type="number"
                      min="0"
                      max="10"
                      value={potteryPlaces}
                      onChange={(e) => setPotteryPlaces(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full px-3 py-2 text-sm bg-[var(--color-ground)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] font-tabular"
                    />
                    <span className="text-[11px] text-[var(--color-text-secondary)] mt-1 block">
                      Rs 900 · Wheel, clay & fired piece
                    </span>
                  </div>

                  <div>
                    <label htmlFor="workshop-count" className="block text-xs font-semibold text-[var(--color-text)] mb-1">
                      Growing Workshop Places (Adults)
                    </label>
                    <input
                      id="workshop-count"
                      type="number"
                      min="0"
                      max="10"
                      value={workshopPlaces}
                      onChange={(e) => setWorkshopPlaces(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full px-3 py-2 text-sm bg-[var(--color-ground)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] font-tabular"
                    />
                    <span className="text-[11px] text-[var(--color-text-secondary)] mt-1 block">
                      Rs 1,200 · 90 min balcony masterclass
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 3: Guest Details & Notes */}
              <div className="pt-4 border-t border-[var(--color-border)]/60">
                <h3 className="font-serif-display text-xl font-bold text-[var(--color-text)] mb-4">
                  3. Your Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label htmlFor="guest-name" className="block text-xs font-semibold text-[var(--color-text)] mb-1">
                      Full Name *
                    </label>
                    <input
                      id="guest-name"
                      type="text"
                      placeholder="e.g. Ananya Rao"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full px-3 py-2 text-sm bg-[var(--color-ground)] border rounded-lg text-[var(--color-text)] ${
                        errors.fullName ? 'border-red-500' : 'border-[var(--color-border)]'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label htmlFor="guest-phone" className="block text-xs font-semibold text-[var(--color-text)] mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="guest-phone"
                      type="tel"
                      placeholder="+91 98450 12345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full px-3 py-2 text-sm bg-[var(--color-ground)] border rounded-lg text-[var(--color-text)] ${
                        errors.phone ? 'border-red-500' : 'border-[var(--color-border)]'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="guest-email" className="block text-xs font-semibold text-[var(--color-text)] mb-1">
                      Email Address *
                    </label>
                    <input
                      id="guest-email"
                      type="email"
                      placeholder="ananya@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-3 py-2 text-sm bg-[var(--color-ground)] border rounded-lg text-[var(--color-text)] ${
                        errors.email ? 'border-red-500' : 'border-[var(--color-border)]'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Notes field */}
                <div>
                  <label htmlFor="guest-notes" className="block text-xs font-semibold text-[var(--color-text)] mb-1">
                    Anything the chef should know
                  </label>
                  <textarea
                    id="guest-notes"
                    rows={2}
                    placeholder="Allergies, spice preferences, anniversaries, or vegetable requests..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[var(--color-ground)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)]/70 focus:outline-none focus:border-[var(--color-primary)]"
                  />
                </div>
              </div>
            </div>

            {/* Live Calculation Receipt Card: 5 Columns */}
            <div className="lg:col-span-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-7 sticky top-28 shadow-xs">
              <h3 className="font-serif-display text-2xl font-bold text-[var(--color-text)] pb-3 border-b border-[var(--color-border)]">
                Booking Summary
              </h3>

              {/* Day & Rate Type Pill */}
              <div className="my-4 p-3 rounded-lg bg-[var(--color-surface-subtle)] flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[var(--color-text)] block">
                    {dayRateInfo.rateTypeLabel}
                  </span>
                  <span className="text-[var(--color-text-secondary)]">
                    {date
                      ? new Date(`${date}T12:00:00`).toLocaleDateString('en-IN', {
                          weekday: 'short',
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })
                      : 'No date selected'}
                  </span>
                </div>
                <span className="font-tabular font-bold text-sm text-[var(--color-turmeric)]">
                  {dayRateInfo.isOpen ? `Rs ${dayRateInfo.ratePerAdult}/adult` : 'Closed'}
                </span>
              </div>

              {/* Itemized Calculation */}
              <div className="space-y-3 font-tabular text-xs sm:text-sm my-6 divide-y divide-[var(--color-border)]/50">
                {calculation.lineItems.map((item, idx) => (
                  <div key={idx} className="pt-2 flex justify-between items-center text-[var(--color-text-secondary)]">
                    <span>
                      {item.label} <span className="font-semibold text-[var(--color-text)]">× {item.quantity}</span>
                    </span>
                    <span className="font-semibold text-[var(--color-text)]">
                      Rs {item.total.toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}

                {calculation.lineItems.length === 0 && (
                  <p className="text-xs text-[var(--color-text-secondary)] py-4 text-center italic">
                    Select open date and guest count to view calculation
                  </p>
                )}

                {/* Total */}
                <div className="pt-4 flex justify-between items-baseline font-bold">
                  <span className="text-base text-[var(--color-text)]">Estimated Total</span>
                  <span className="font-tabular text-2xl sm:text-3xl text-[var(--color-turmeric)]">
                    Rs {calculation.total.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={!calculation.isOpen}
                className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Confirm reservation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-[var(--color-text-secondary)] mt-3">
                No credit card charged now. Payment is collected at the farm on your visit day.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
