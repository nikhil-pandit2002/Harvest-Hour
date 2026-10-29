import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CROPS,
  getSeasonalCrops,
  getDayRateInfo,
  calculateBooking,
  generateBookingReference,
} from './booking.ts';

test('growing calendar contains all 19 crops', () => {
  assert.equal(CROPS.length, 19);
  const cropNames = CROPS.map(c => c.name);
  assert.ok(cropNames.includes('Tomato'));
  assert.ok(cropNames.includes('Methi'));
  assert.ok(cropNames.includes('Curry leaf'));
  assert.ok(cropNames.includes('Lemongrass'));
});

test('seasonal crops for October include Methi, Spinach, Cauliflower, and Tomato', () => {
  const octCrops = getSeasonalCrops(10);
  assert.ok(octCrops.includes('Methi'));
  assert.ok(octCrops.includes('Spinach'));
  assert.ok(octCrops.includes('Cauliflower'));
  assert.ok(octCrops.includes('Tomato'));
  // Drumstick is Feb, Mar, Apr only
  assert.equal(octCrops.includes('Drumstick'), false);
});

test('curry leaf and lemongrass are available all 12 months', () => {
  for (let m = 1; m <= 12; m++) {
    const crops = getSeasonalCrops(m);
    assert.ok(crops.includes('Curry leaf'), `Curry leaf missing in month ${m}`);
    assert.ok(crops.includes('Lemongrass'), `Lemongrass missing in month ${m}`);
  }
});

test('day rate confirms farm is open on Mondays and Tuesdays at weekday rate (Rs 2,800)', () => {
  // 2026-11-02 is a Monday
  const monday = getDayRateInfo('2026-11-02');
  assert.equal(monday.isOpen, true);
  assert.equal(monday.isWeekend, false);
  assert.equal(monday.ratePerAdult, 2800);

  // 2026-11-03 is a Tuesday
  const tuesday = getDayRateInfo('2026-11-03');
  assert.equal(tuesday.isOpen, true);
  assert.equal(tuesday.isWeekend, false);
  assert.equal(tuesday.ratePerAdult, 2800);
});

test('day rate calculates weekday rate (Rs 2,800) across all weekdays', () => {
  // 2026-11-04 is a Wednesday
  const wed = getDayRateInfo('2026-11-04');
  assert.equal(wed.isOpen, true);
  assert.equal(wed.isWeekend, false);
  assert.equal(wed.ratePerAdult, 2800);
});

test('day rate calculates peak weekend rate (Rs 4,200) for November-February Saturdays & Sundays', () => {
  // 2026-11-07 is a Saturday in November
  const peakSat = getDayRateInfo('2026-11-07');
  assert.equal(peakSat.isOpen, true);
  assert.equal(peakSat.isWeekend, true);
  assert.equal(peakSat.isPeakWeekend, true);
  assert.equal(peakSat.ratePerAdult, 4200);

  // 2026-01-10 is a Saturday in January
  const janSat = getDayRateInfo('2026-01-10');
  assert.equal(janSat.isPeakWeekend, true);
  assert.equal(janSat.ratePerAdult, 4200);
});

test('day rate calculates regular weekend rate (Rs 3,500) for March-October weekends', () => {
  // 2026-04-11 is a Saturday in April
  const aprilSat = getDayRateInfo('2026-04-11');
  assert.equal(aprilSat.isOpen, true);
  assert.equal(aprilSat.isWeekend, true);
  assert.equal(aprilSat.isPeakWeekend, false);
  assert.equal(aprilSat.ratePerAdult, 3500);
});

test('calculateBooking computes line items and total correctly for peak weekend with add-ons', () => {
  const result = calculateBooking({
    date: '2026-11-07', // Peak Saturday
    adults: 2,          // 2 * 4200 = 8400
    children: 1,        // 1 * 1800 = 1800
    underFives: 1,      // 0
    potteryPlaces: 1,   // 1 * 900 = 900
    workshopPlaces: 0,
  });

  assert.equal(result.isValidDate, true);
  assert.equal(result.adultRate, 4200);
  // Total: 8400 + 1800 + 900 = 11100
  assert.equal(result.total, 11100);
});

test('booking reference matches HH-1234 format', () => {
  const ref = generateBookingReference();
  assert.match(ref, /^HH-\d{4}$/);
});
