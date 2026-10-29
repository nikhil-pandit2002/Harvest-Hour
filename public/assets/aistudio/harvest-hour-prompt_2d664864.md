# Build Brief: Harvest Hour

Paste this whole document into Google AI Studio as a single prompt.

---

## YOUR TASK

Build a complete, professional, visually polished marketing website for a premium
agritourism farm called **Harvest Hour**, located on the outskirts of Bengaluru, India.

Deliver it as **one self-contained HTML file** with all CSS and JavaScript inline, so it
can be opened directly in a browser or dropped onto Netlify or Vercel with no build step.

Also **generate a logo** and all the photographic imagery described in the IMAGES section,
and embed them in the page.

This must look like the real website of a real premium hospitality business, not a
template and not a student mockup. Judge your own output against the standard of a
boutique hotel or a fine-dining restaurant website.

---

## PART 1 — THE BUSINESS

**Harvest Hour** is a 14-acre certified-organic farm roughly an hour south of Bengaluru
where city families spend a half day. Guests harvest their own vegetables from the rows,
hand the crate to a resident chef, cook the meal with him, and eat it at a long table
facing the field they just cut it from. Children do a farm-school session and throw pots
on a wheel. Everyone can buy produce on the way out or put a vegetable crate on a
standing order.

**The core promise, and the reason for the name:** the time between the vegetable leaving
the soil and arriving on your plate is about one hour. The menu is not fixed in advance.
It is decided by whatever is ripe that morning and by what the guest chooses to pick.

**The problem it solves.** Urban Indian families pay a premium for food labelled organic
with no way to verify the claim. Weekend options around Bengaluru are repetitive: malls,
cafes, resorts. Parents feel their children have no idea where food comes from. Harvest
Hour answers all three at once by letting you cut the thing yourself.

**Who it is for**
- Affluent Bengaluru families, household income above Rs 25 lakh, with children aged 5 to 15
- Couples looking for a different kind of Sunday
- Corporate teams on weekday offsites
- Schools on weekday educational visits

**Address (use exactly this)**
Survey No. 112/3, Bilikal Betta Road, Harohalli Hobli,
Kanakapura Taluk, Ramanagara District, Karnataka 562112

58 km from MG Road, about 90 minutes on a Sunday morning.
Open Wednesday to Sunday. Closed through most of June.
Two sittings daily: 8:30am and 11:30am. Twenty-five guests per sitting, fifty a day maximum.

---

## PART 2 — BRAND AND LOGO

**Name:** Harvest Hour
**Tagline:** Farm to Fork

### Logo, generate this
A clean, modern, premium wordmark reading **Harvest Hour** with the tagline **Farm to
Fork** set smaller beneath it. Pair the wordmark with a simple, confident mark that could
work embossed on a menu or stamped on a wooden crate. Good directions for the mark: a
minimal sun over a horizon line, a single wheat or herb sprig, a fork whose tines become
plant stems, or a clock face where the hands are a leaf and a fork. Pick one idea and
execute it cleanly. It must be legible at small sizes, work in a single flat colour, and
read as a hospitality brand rather than an agricultural co-operative.

Place the logo in the header, and a reversed or single-colour version in the footer.

### Palette
Build everything from these, as CSS custom properties:
- Deep forest green `#2E5A2B` — primary
- Bright leaf `#4C8A45` — secondary
- Turmeric gold `#B87518` — accent, used sparingly for prices, highlights and calls to action
- Warm clay `#A8563C` — minor accent, for the pottery sections only
- Off-white `#F3F5EF` — page ground
- Near-black `#151B12` — text
- Soft grey-green `#5D6B57` — secondary text

Implement a dark mode using `prefers-color-scheme` as well, with every colour defined as a
token on `:root` and redefined in the dark block.

### Typography
Load from Google Fonts. Use an elegant high-contrast serif for headings and a clean
grotesque for body text. Suggested pairing: **Instrument Serif** or **Fraunces** for
display, **Karla** or **DM Sans** for body. Set a clear type scale. Headings get
`text-wrap: balance`. Body text stays near 65 characters wide.

---

## PART 3 — PAGE STRUCTURE AND CONTENT

Build these sections in this order. Use the copy provided. Write any additional copy in
the same voice: plain, confident, specific, no marketing fluff, no exclamation marks.

### 1. Sticky header
Logo on the left. Nav links: Things to do, What grows, Rates, Visit. A "Book a day"
button on the right in turmeric or green.

### 2. Hero
Full-width photographic hero.

Headline: **Pick it. Cook it. Eat it within the hour.**
Sub-headline: Fourteen organic acres an hour south of Bengaluru. Harvest your own
vegetables, cook them with our chef, and sit down to them while they are still warm from
the field.

Two buttons: "Book a day" (primary) and "See what happens here" (secondary, scrolls down).
Below them, a single line: *Survey No. 112/3, Harohalli, Kanakapura Road · 58 km from MG
Road · Open Wednesday to Sunday*

### 3. "Ready this week" strip
A card showing what is currently in season, as a row of pills. Use JavaScript to pick the
correct list from the current month using the growing calendar data in section 6.
Caption underneath: *This list changes every few weeks, and so does lunch. That is rather
the point.*

### 4. Things to do
Six cards in a responsive grid. Each card has a photograph, a heading, two or three
sentences, and a price or duration line in turmeric.

**Pick your own** · Included, 75 minutes
Out into the rows with a crate and a knife. A grower walks with you and explains why the
methi is good this week and the tomatoes are two weeks away. You cut only what you want to eat.

**Cook with the chef** · Included, 90 minutes
You put your crate on the pass and the chef builds a menu around it, or you say what you
feel like and he works out how to get there. Then you are on a station, not watching a demonstration.

**The pottery shed** · Rs 900 a person, 60 minutes
The same soil the vegetables come out of, on a wheel. Four wheels and a hand-building
table, run by a potter from Channapatna. Children take their piece home fired the following week.

**Farm school for children** · Included for children, 40 minutes
Forty minutes on soil, seed and compost, pitched at five to twelve year olds and run by
someone who likes children. They plant one thing, label it, and come back to find it grown.

**Growing workshops** · Rs 1,200 a person, 90 minutes
For adults who want the balcony to work. Composting, seed saving, a kitchen garden in four
pots, and what actually goes wrong in a Bengaluru summer. Small groups, one topic a weekend.

**Farm shop and crates** · Crates from Rs 1,400 a month
Take home what you could not eat, or put a crate on repeat and we deliver across Bengaluru
on Saturdays. Members get first call on peak dates and two visits a year.

### 5. How a Sunday runs
A vertical timeline with times in turmeric down the left.

- **8:30 Arrival** — A cold press of whatever is heaviest on the vine, and a walk through what is ready today.
- **9:15 Harvest** — Into the rows with a crate. Children get their own smaller one and are generally more ruthless about it than their parents.
- **10:30 Split** — Adults to the kitchen or the growing workshop. Children to farm school, then the pottery shed. Nobody is left holding a phone.
- **12:30 The long table** — Served in courses at the pavilion, facing the field you cut it from two hours earlier.
- **14:00 The shop** — Crates, preserves, jaggery from the next village, and a sourdough starter if you ask nicely.

### 6. What grows, and when
Intro: *We do not buy in to fill a menu. If it is not on this chart this month, it is not
on your plate. At least sixty percent of every dish is cut on the farm that morning.*

Build a **growing calendar**: a table with crop names down the left and the twelve months
across the top, with a filled cell wherever that crop is in season. Highlight the current
month's column in turmeric using JavaScript. Make it horizontally scrollable on mobile.

Use this data, months numbered 1 to 12:

| Crop | In season |
|---|---|
| Tomato | Sep, Oct, Nov, Dec, Jan, Feb |
| Spinach | Oct, Nov, Dec, Jan, Feb |
| Methi | Oct, Nov, Dec, Jan |
| Coriander | Sep, Oct, Nov, Dec, Jan, Feb |
| Cauliflower | Oct, Nov, Dec, Jan, Feb |
| Carrot | Nov, Dec, Jan, Feb |
| Green peas | Nov, Dec, Jan |
| Radish | Oct, Nov, Dec, Jan, Feb |
| Brinjal | Aug, Sep, Oct, Nov |
| Drumstick | Feb, Mar, Apr |
| Cucumber | Feb, Mar, Apr, May |
| Okra | Mar, Apr, May, Jun, Jul, Aug, Sep |
| Amaranth | Mar, Apr, May, Jun, Jul |
| Ridge gourd | Apr, May, Jun, Jul, Aug |
| Cluster bean | May, Jun, Jul, Aug, Sep, Oct |
| Sweet corn | Jun, Jul, Aug, Sep |
| Pumpkin | Jun, Jul, Aug, Sep, Oct |
| Curry leaf | All year |
| Lemongrass | All year |

### 7. Rates
Two columns.

**A day at the farm**
- Weekday (Wednesday to Friday, either sitting) — Rs 2,800
- Weekend (Saturday and Sunday) — Rs 3,500
- Peak weekend (November to February) — Rs 4,200
- Children (five to fifteen, farm school included) — Rs 1,800
- Under fives — Free, and welcome

**Add on, or book the lot**
- Pottery shed, one piece fired and collected later — Rs 900
- Growing workshop, adults — Rs 1,200
- School visit, weekday mornings, forty children minimum — Rs 800 a child
- Private buyout, the whole farm, one sitting, up to fifty — From Rs 1,50,000
- Corporate day, weekdays, cooking in teams, up to forty — From Rs 1,80,000

### 8. The crate, a subscription section
Intro: *Most people who visit once want the vegetables again. Crates are packed Friday
night and delivered across Bengaluru on Saturday, and they hold whatever the calendar says
is ready, which is the whole idea.*

Four tiers, as cards or rows. Note under them: *Pause any week. Cancel whenever. No contract.*
- Fortnightly, small — four to five kilos, feeds two — Rs 1,400 a month
- Weekly, small — four to five kilos, feeds two — Rs 2,600 a month
- Weekly, family — eight to ten kilos, feeds four — Rs 4,200 a month
- Membership — weekly family crate, two visits a year, first call on peak dates — Rs 48,000 a year

### 9. Why it is built this way
Intro: *Organic on a label asks you to trust a certificate. It seemed simpler to let you
cut the thing yourself. Everything else here follows from that one decision, including the
parts that cost us money.*

Four large statistics:
- **14** acres, of which eleven are under cultivation
- **Year 2** of the three-year organic conversion
- **50** guests a day, across two sittings
- **60%** of each plate cut on the farm that morning, minimum

### 10. Visit
Two columns. Left: address, the drive, opening hours, booking note. Right: a simple
stylised map graphic showing Bengaluru at the top, Kanakapura Road running south, and
Harvest Hour marked at the bottom with "58 km · 90 min".

**The drive:** 58 km from MG Road, about 90 minutes on a Sunday morning. Straight down
Kanakapura Road, left after the Harohalli industrial gate, then two kilometres of farm track.

### 11. Booking section
A working booking form on the page. Fields: date picker, sitting (8:30am Morning Harvest
or 11:30am Midday Table), number of adults, number of children, pottery places, workshop
places, name, phone, email, and a notes field labelled "Anything the chef should know".

Calculate and display the total live as the user changes the inputs, using the rates above.
Apply the correct rate automatically: weekday for Wednesday to Friday, weekend for Saturday
and Sunday, peak for Saturday and Sunday in November through February. Disable Mondays and
Tuesdays, which are closed.

On submit, prevent the default, validate, and show a styled confirmation panel with a
generated booking reference in the format HH-1234 and a summary of what was booked.

### 12. Footer
Logo, address, opening hours, a contact email and phone shown as selectable text, and
social links. Include this line in small text: *A student venture concept, Goa Institute of
Management.*

---

## PART 4 — IMAGES

Generate every image. Do not use placeholder boxes, grey rectangles, or stock photo URLs.
Embed each generated image in the page.

**Photographic style for all of them:** warm natural daylight, shallow depth of field,
documentary rather than staged, muted earthy colour grading, nothing over-saturated. South
Indian setting with recognisably Indian people, clothing and produce. Think the photography
of a good travel magazine, not a stock library.

Generate these:

1. **Hero, wide landscape** — rows of leafy vegetables receding toward low hills in early
   morning light, with a figure in the middle distance carrying a harvest crate. Warm,
   hazy, inviting.
2. **Pick your own** — close hands cutting spinach or methi, soil visible, a wicker crate
   half full.
3. **Cook with the chef** — an open rustic kitchen, a chef and two guests at a station,
   fresh vegetables on a wooden counter, steam, movement.
4. **The pottery shed** — hands centring clay on a potter's wheel, clay-covered fingers,
   soft side light.
5. **Farm school** — Indian children aged seven to ten crouched over a seedling tray,
   absorbed, an adult pointing something out.
6. **Growing workshop** — adults around a compost bed and a table of seed packets and
   terracotta pots.
7. **Farm shop and crates** — a wooden crate packed with mixed seasonal Indian vegetables,
   overhead, on a rough wooden table.
8. **The long table** — a long communal table under a shaded pavilion, plated food,
   people eating, the field visible behind.
9. **A texture or detail shot** — soil, a sprig of curry leaf, or water on a leaf, for use
   as a section divider band.

---

## PART 5 — TECHNICAL REQUIREMENTS

- One self-contained HTML file. All CSS in a single `<style>` block, all JavaScript in a
  single `<script>` block. Google Fonts loaded by link tag. Images embedded.
- Fully responsive. Must work at 390px phone width with no horizontal scrolling anywhere.
  Give grid and flex children `min-width: 0` so long text wraps instead of pushing the page wide.
- Dark mode via `prefers-color-scheme`, with every colour defined as a CSS custom property
  on `:root` and redefined in the dark block. No hard-coded colours in component rules.
- Semantic HTML. Proper heading hierarchy. Alt text on every image. Visible keyboard focus
  states. Respect `prefers-reduced-motion`.
- Smooth scrolling for the nav anchors. Subtle scroll-reveal animations are fine, but every
  section must be visible and readable at rest, never left at opacity zero waiting for an observer.
- The booking form and the growing calendar must actually work in JavaScript, not be static images.
- `font-variant-numeric: tabular-nums` wherever prices or numbers line up.

---

## PART 6 — QUALITY BAR

Do this:
- Make deliberate, specific design choices. Real typographic hierarchy, generous whitespace,
  considered spacing.
- Use full-bleed image bands to break up the measured text column.
- Let the turmeric accent do a small amount of work in a lot of places rather than a lot of
  work in one place.

Do not do this:
- Do not invent customer testimonials, star ratings, review counts, press quotes, awards or
  media logos. This is a concept for a venture that does not trade yet, and fabricated social
  proof would be dishonest. Leave those sections out entirely.
- Do not use lorem ipsum anywhere. Every word on the page should be real copy.
- Do not use emoji as section markers or icons.
- Do not centre everything. Do not put the same border radius and drop shadow on every block.
- Do not use a purple-to-blue gradient hero, and do not default to Inter.

Build the complete file now.
