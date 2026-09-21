# Rendezvous

**Website Plan | Restaurant, Lounge and Club | Blantyre, Malawi**

---

## 1. Overview

One mobile-first website with three worlds: the Restaurant, the Lounge and the Club. The Home page is the lobby. Each side has its own page and mood, while the whole site keeps one identity in red, black and white. The goal is a site that feels like the venue itself, not a template.

**Build order:** the website is built first. The owners are pitched only after the site is finished, so they see a real, working product.

---

## 2. Pages (9 in total)

| # | Page | Purpose |
|---|------|---------|
| 1 | Home | The lobby. Hero, three doors, upcoming events, who we are, menu teaser, gallery strip, reserve, footer. |
| 2 | Restaurant | Food, atmosphere, opening hours, signature dishes. Always shown in the light look. |
| 3 | Lounge | Drinks, chill nights, atmosphere, opening hours. Follows the time of day, the bridge between the other two sides. |
| 4 | Club | Nightlife, DJs, tables and bottle service. Always shown in the dark look, day or night (see section 6). |
| 5 | Menu | One page with tabs: Food, Drinks, Bottles. |
| 6 | Events | Upcoming nights with RSVP or ticket info. Event detail pages can be added later as a repeatable template. |
| 7 | Reserve | Table booking through a simple form and a direct WhatsApp button. |
| 8 | Gallery | Real photos and short video loops of the venue and its nights. |
| 9 | Contact / Find Us | Map, hours, WhatsApp, phone and social links. |

---

## 3. Home Page Flow

- **Hero:** full-screen video or photo with the Rendezvous name and a big Reserve button.
- **Three doors:** three large tappable cards for Restaurant, Lounge and Club.
- **Upcoming events:** a swipeable row of event cards.
- **Who we are:** a short, punchy story of two to three lines.
- **Menu teaser:** three or four signature items and a View full menu button.
- **Gallery strip:** real moments, people, drinks, lights.
- **Reserve section:** a simple form or a WhatsApp button.
- **Footer:** location, hours, socials.
- **Time-aware:** the whole page changes with the time of day (see section 6).

---

## 4. Navigation (mobile-first)

- A sticky Reserve button that is always visible.
- A simple bottom bar or a full-screen menu opened with one tap: Home, Menu, Events, Reserve.
- Every page reachable in two taps or less.
- Simple and easy to move around. It is a bar, not an organization, so nothing feels corporate or crowded.

---

## 5. Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js |
| Styling | Tailwind CSS |
| Motion | Framer Motion |
| Icons | Font Awesome |

---

## 6. Design System

### Typography

Space Grotesk for headlines. Inter for body text and small text. Clean and modern, not fancy.

| Style | Desktop | Mobile | Use |
|-------|---------|--------|-----|
| H1 | 64 px | 40 px | Hero headlines |
| H2 | 40 px | 28 px | Section headlines |
| H3 | 28 px | 22 px | Sub headlines |
| Body | 18 px | 16 px | Body copy |
| Small | 14 px | 14 px | Captions and small text |

The desktop sizes are the ones originally chosen. The mobile sizes are added because 64 px is too large for a phone screen and would wrap awkwardly.

### Colors and time-of-day shift

The 60/30/10 color rule is dropped. Instead, the website changes its look with the time of day, like the venue itself, which is a lunch spot by day and a night spot after dark. The brand colors stay the same: red, black and white.

| | Day look | Night look |
|---|----------|------------|
| Background | White | Black |
| Text | Black | White |
| Red | Buttons, highlights, big blocks | Buttons, highlights, big blocks |
| Hero shows | Restaurant and food | Club or lounge and tonight's event |
| Reserve button | Open for lunch | Tonight at Rendezvous |
| Status label | Open now or Opens at 5pm | Open now or Opens at 5pm |

The exact red value is still to be confirmed and then locked as one Tailwind color token, so it is never approximated.

### Rules for the shift

- The look switches automatically based on the visitor's local time. The switch time (for example 6pm) is to be confirmed.
- Each page has its own rule for the look, shown in the table below.
- Red is used for buttons, highlights and large blocks. Small text stays black on white by day and white on black at night, so it is always easy to read.
- The switch itself is a smooth fade, not a sudden jump.

### Look per page

| Page | Look | Why |
|------|------|-----|
| Home | Follows the clock | The lobby of the whole venue. |
| Restaurant | Always light | The food side stays bright and clean. |
| Lounge | Follows the clock | The bridge between restaurant and club. |
| Club | Always dark | The nightlife side. |
| Menu, Events, Reserve, Gallery, Contact | Follows the clock | Shared pages that match the time the visitor arrives. |

So the clock only changes Home, Lounge and the shared pages. Restaurant and Club keep a fixed identity.

### No glow rule

There is no glow anywhere on the website. That means no glowing shadows, no neon effects and no blurred red halos, on any page including the Club. Depth and energy come from flat solid color, sharp edges, big type, real photography and purposeful motion instead.

---

## 7. Content and Feel

- Real photos and short video loops of the actual venue. No stock images.
- Big bold headlines, short copy, no long paragraphs.
- Smooth transitions between the three sides, like walking through doors.
- Motion with a purpose (Framer Motion), never decoration for its own sake.
- Light on data so it loads fast on mobile networks in Malawi.
- WhatsApp reservation button, since many guests will prefer it over a form.

---

## 8. To Confirm Before Building

- Exact red color value.
- Day to night switch time (for example 6pm), and whether visitors can also switch the look by hand.
- The opening hours that drive the Open now label and the daytime versus night content.
- Logo and brand assets for Rendezvous.
- Photos, videos and event flyers (to be provided later).
- Menu content: dishes, drinks, bottles and prices.
- Opening hours, address, phone number and WhatsApp number.
- Reservation method: form only, WhatsApp only, or both.

---

## 9. Suggested Build Order

| Step | What happens |
|------|--------------|
| 1 | Plan defined (this document). |
| 2 | Design system set up: colors, fonts, type scale, buttons, cards. |
| 3 | Build the shared layout, navigation and sticky Reserve button. |
| 4 | Build Home, then the three side pages, then Menu, Events, Reserve, Gallery, Contact. |
| 5 | Test on real phones and slow data, then polish motion. |
| 6 | Pitch the finished website to the owners. |
