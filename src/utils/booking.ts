/**
 * Core business rules, pricing logic, and seasonal growing data for Harvest Hour.
 */

export interface CropSeason {
  name: string;
  category: 'Greens' | 'Vegetables' | 'Herbs' | 'Gourds & Others';
  months: number[]; // 1 = Jan, 12 = Dec
}

export const CROPS: CropSeason[] = [
  { name: 'Tomato', category: 'Vegetables', months: [9, 10, 11, 12, 1, 2] },
  { name: 'Spinach', category: 'Greens', months: [10, 11, 12, 1, 2] },
  { name: 'Methi', category: 'Greens', months: [10, 11, 12, 1] },
  { name: 'Coriander', category: 'Herbs', months: [9, 10, 11, 12, 1, 2] },
  { name: 'Cauliflower', category: 'Vegetables', months: [10, 11, 12, 1, 2] },
  { name: 'Carrot', category: 'Vegetables', months: [11, 12, 1, 2] },
  { name: 'Green peas', category: 'Vegetables', months: [11, 12, 1] },
  { name: 'Radish', category: 'Vegetables', months: [10, 11, 12, 1, 2] },
  { name: 'Brinjal', category: 'Vegetables', months: [8, 9, 10, 11] },
  { name: 'Drumstick', category: 'Vegetables', months: [2, 3, 4] },
  { name: 'Cucumber', category: 'Vegetables', months: [2, 3, 4, 5] },
  { name: 'Okra', category: 'Vegetables', months: [3, 4, 5, 6, 7, 8, 9] },
  { name: 'Amaranth', category: 'Greens', months: [3, 4, 5, 6, 7] },
  { name: 'Ridge gourd', category: 'Gourds & Others', months: [4, 5, 6, 7, 8] },
  { name: 'Cluster bean', category: 'Vegetables', months: [5, 6, 7, 8, 9, 10] },
  { name: 'Sweet corn', category: 'Vegetables', months: [6, 7, 8, 9] },
  { name: 'Pumpkin', category: 'Gourds & Others', months: [6, 7, 8, 9, 10] },
  { name: 'Curry leaf', category: 'Herbs', months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  { name: 'Lemongrass', category: 'Herbs', months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
];

export const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export const MONTH_FULL_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

/**
 * Returns crops in season for a given month number (1 - 12).
 */
export function getSeasonalCrops(month: number): string[] {
  if (month < 1 || month > 12) return [];
  return CROPS.filter(crop => crop.months.includes(month)).map(c => c.name);
}

export interface DayRateInfo {
  isOpen: boolean;
  isClosedReason?: string;
  isWeekend: boolean;
  isPeakWeekend: boolean;
  dayOfWeek: number; // 0 = Sun, 1 = Mon, ..., 6 = Sat
  ratePerAdult: number;
  rateTypeLabel: string;
}

/**
 * Calculates day rate rules for Harvest Hour:
 * - Open all 7 days of the week (Monday to Sunday)
 * - Mon - Fri: Weekday (Rs 2,800)
 * - Sat & Sun (Nov - Feb): Peak weekend (Rs 4,200)
 * - Sat & Sun (Mar - Oct): Regular weekend (Rs 3,500)
 */
export function getDayRateInfo(dateInput: string | Date): DayRateInfo {
  const d = typeof dateInput === 'string' ? new Date(`${dateInput}T12:00:00`) : dateInput;
  if (isNaN(d.getTime())) {
    return {
      isOpen: false,
      isClosedReason: 'Please select a valid date.',
      isWeekend: false,
      isPeakWeekend: false,
      dayOfWeek: -1,
      ratePerAdult: 0,
      rateTypeLabel: 'Invalid Date',
    };
  }

  const dayOfWeek = d.getDay(); // 0: Sun, 1: Mon, 2: Tue, 3: Wed, 4: Thu, 5: Fri, 6: Sat
  const month = d.getMonth() + 1; // 1-12

  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

  // Peak months are November (11), December (12), January (1), February (2)
  const isPeakMonth = month === 11 || month === 12 || month === 1 || month === 2;
  const isPeakWeekend = isWeekend && isPeakMonth;

  let ratePerAdult = 2800;
  let rateTypeLabel = 'Weekday';

  if (isPeakWeekend) {
    ratePerAdult = 4200;
    rateTypeLabel = 'Peak Weekend (Winter Harvest)';
  } else if (isWeekend) {
    ratePerAdult = 3500;
    rateTypeLabel = 'Weekend';
  }

  return {
    isOpen: true,
    isWeekend,
    isPeakWeekend,
    dayOfWeek,
    ratePerAdult,
    rateTypeLabel,
  };
}

export interface BookingFormInput {
  date: string; // YYYY-MM-DD
  sitting: 'morning' | 'midday';
  adults: number;
  children: number;
  underFives: number;
  potteryPlaces: number;
  workshopPlaces: number;
  fullName: string;
  phone: string;
  email: string;
  notes?: string;
}

export interface BookingLineItem {
  label: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface BookingCalculationResult {
  isValidDate: boolean;
  isOpen: boolean;
  statusMessage?: string;
  adultRate: number;
  rateTypeLabel: string;
  lineItems: BookingLineItem[];
  subtotal: number;
  tax: number; // included in pricing or transparently detailed
  total: number;
}

export const CHILD_RATE = 1800;
export const POTTERY_RATE = 900;
export const WORKSHOP_RATE = 1200;

export function calculateBooking(input: {
  date: string;
  adults: number;
  children: number;
  underFives?: number;
  potteryPlaces: number;
  workshopPlaces: number;
}): BookingCalculationResult {
  const dayInfo = getDayRateInfo(input.date);

  if (!dayInfo.isOpen) {
    return {
      isValidDate: false,
      isOpen: false,
      statusMessage: dayInfo.isClosedReason || 'Closed on this day.',
      adultRate: 0,
      rateTypeLabel: dayInfo.rateTypeLabel,
      lineItems: [],
      subtotal: 0,
      tax: 0,
      total: 0,
    };
  }

  const lineItems: BookingLineItem[] = [];

  const adults = Math.max(0, input.adults || 0);
  if (adults > 0) {
    lineItems.push({
      label: `Adults (${dayInfo.rateTypeLabel})`,
      quantity: adults,
      unitPrice: dayInfo.ratePerAdult,
      total: adults * dayInfo.ratePerAdult,
    });
  }

  const children = Math.max(0, input.children || 0);
  if (children > 0) {
    lineItems.push({
      label: 'Children (5–15, includes Farm School)',
      quantity: children,
      unitPrice: CHILD_RATE,
      total: children * CHILD_RATE,
    });
  }

  const underFives = Math.max(0, input.underFives || 0);
  if (underFives > 0) {
    lineItems.push({
      label: 'Children under 5',
      quantity: underFives,
      unitPrice: 0,
      total: 0,
    });
  }

  const pottery = Math.max(0, input.potteryPlaces || 0);
  if (pottery > 0) {
    lineItems.push({
      label: 'The Pottery Shed (Wheel & firing)',
      quantity: pottery,
      unitPrice: POTTERY_RATE,
      total: pottery * POTTERY_RATE,
    });
  }

  const workshop = Math.max(0, input.workshopPlaces || 0);
  if (workshop > 0) {
    lineItems.push({
      label: 'Growing Workshop (Adults)',
      quantity: workshop,
      unitPrice: WORKSHOP_RATE,
      total: workshop * WORKSHOP_RATE,
    });
  }

  const total = lineItems.reduce((acc, item) => acc + item.total, 0);

  return {
    isValidDate: true,
    isOpen: true,
    adultRate: dayInfo.ratePerAdult,
    rateTypeLabel: dayInfo.rateTypeLabel,
    lineItems,
    subtotal: total,
    tax: 0,
    total,
  };
}

/**
 * Generates an authentic booking reference in the format HH-1234
 */
export function generateBookingReference(): string {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `HH-${randomNum}`;
}
