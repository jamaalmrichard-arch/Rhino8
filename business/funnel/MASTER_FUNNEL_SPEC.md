# MASTER FUNNEL SPEC — Money Decoded → 3-Track System → Coaching
## J. Marque Brand | Updated: 2026-02-24
## Architecture: 3-Track Funnel with Progressive Reveal

---

## THE FUNNEL (3-TRACK ARCHITECTURE)

```
[TRAFFIC] — TikTok, IG, organic, Gumroad SEO
     |
[OPT-IN PAGE] — "Get the FREE ebook: The History of Money"
     | GHL captures email → Tag: "lead" → Trigger: Sequence A
     |
[DELIVERY PAGE] — Book 1 download + $7 Trilogy offer on same page
     |
     +-- BUYS $7 → Tag: "buyer" → Deliver trilogy
     |       |
     |       +-- [QUESTIONNAIRE PAGE] — "One quick question before we send your books..."
     |               |
     |               +-- Card 1: "I want to make money in real estate"
     |               |       → Tag: "track-active"
     |               |       → Route to TRACK 1: ACTIVE INVESTOR
     |               |       → Show: The Deal Machine offer ($147)
     |               |           +-- BUYS → Tag: "deal-machine-buyer" → Trigger: Sequence C1
     |               |           +-- SKIPS → Trigger: Sequence B1 (push to $147)
     |               |
     |               +-- Card 2: "I have money that should be working harder"
     |               |       → Tag: "track-passive"
     |               |       → Route to TRACK 2: PASSIVE INVESTOR
     |               |       → Show: The Wealth Shift offer ($197)
     |               |           +-- BUYS → Tag: "wealth-shift-buyer" → Trigger: Sequence C2
     |               |           +-- SKIPS → Trigger: Sequence B2 (push to $197)
     |               |
     |               +-- Card 3: "I'm starting from scratch"
     |                       → Tag: "track-foundation"
     |                       → Route to TRACK 3: THE FOUNDATION
     |                       → Show: The Foundation offer ($97)
     |                           +-- BUYS → Tag: "foundation-buyer" → Trigger: Sequence C3
     |                           +-- SKIPS → Trigger: Sequence B3 (push to $97)
     |
     +-- DOESN'T BUY $7 → Sequence A continues (6 emails → push to $7)
             +-- BUYS → flows into questionnaire above
             +-- DOESN'T BUY → Stays on broadcast list (2x/week value)

[SEQUENCE C1/C2/C3] — 9 emails / 18 days → Push to coaching APPLICATION
     |
[APPLICATION PAGE] — Contact info + qualifying questions
     | Tag: "applicant" → Trigger: Sequence D
     |
[SEQUENCE D] — 4 emails / 4 days → Nurture before strategy call
     |
[STRATEGY CALL] — Close $5,997 group coaching OR $14,997 1-on-1
     | NOTE: First time buyer sees J. Marque's FACE (progressive reveal)
     |
[ONBOARDING] — Welcome email + community access + calendar link
```

---

## PROGRESSIVE REVEAL STRATEGY

The J. Marque brand uses a deliberate identity reveal across the funnel:

```
STAGE 1: Money Decoded Trilogy ($7)
  → TEXT ONLY. Anonymous pen name. No voice. No face.
  → Buyer knows: J. Marque, $250M in RE, USMC Veteran.

STAGE 2: Track Product ($97-$197)
  → REAL VOICE introduced via audio modules.
  → First time buyer hears the actual person.
  → Builds parasocial trust and familiarity.
  → Still no face.

STAGE 3: Strategy Call ($5,997 coaching pitch)
  → FACE REVEAL on the video call.
  → Buyer has consumed 28K words + 60-90 min of audio.
  → They feel like they know J. Marque. Face confirms trust.
  → Higher close rates due to relationship built gradually.
```

---

## PRODUCTS & PRICING

| Step | Product | Price | Format | Delivery | Platform |
|------|---------|-------|--------|----------|----------|
| Lead Magnet | Money Decoded Book 1: The History of Money | FREE | PDF | Instant download | GHL opt-in → auto-email |
| Tripwire | Money Decoded Trilogy (all 3 books) | $7 | PDF/EPUB | Instant download | Gumroad or GHL checkout |
| Track 1 Mid-Tier | **The Deal Machine** — Active Investor's Playbook | $147 | 85pg PDF + 6 audio modules + 12 templates | Instant download | GHL checkout |
| Track 2 Mid-Tier | **The Wealth Shift** — Reposition Your Money | $197 | 72pg PDF + 5 audio modules + 8 worksheets | Instant download | GHL checkout |
| Track 3 Mid-Tier | **The Foundation** — Financial Blueprint | $97 | 60pg PDF + 7 audio modules + 9 worksheets | Instant download | GHL checkout |
| Core Offer | Group Coaching — 6-Month RE Execution | $5,997 | Application → Call → Onboarding | Live calls + community | Coach Financing / FlexxBuy |
| Premium | 1-on-1 Coaching Upgrade | $14,997 | Upsell from group graduates | Direct outreach | Direct |

---

## THE 3 TRACKS — SUMMARY

| Track | Audience | Mindset | Product | Price | Key Case Study | Email Sequence |
|-------|----------|---------|---------|-------|---------------|----------------|
| **1: Active** | Hustlers, career changers, deal-makers | "Teach me how to DO deals" | The Deal Machine | $147 | David ($6,800/mo) + Keisha ($8,500 wholesale) | C1 |
| **2: Passive** | High earners, professionals, 401(k) holders | "Make my money work harder" | The Wealth Shift | $197 | David (SDIRA reposition, $80K → $730/mo) | C2 |
| **3: Foundation** | Beginners, starting from zero | "Where do I even begin?" | The Foundation | $97 | Keisha (teacher, $52K, 0 → 3 properties) | C3 |

---

## EMAIL SEQUENCES

| Sequence | Trigger | Emails | Days | Goal | File | Status |
|----------|---------|--------|------|------|------|--------|
| A | Book 1 downloaded | 6 | 7 | Convert to $7 trilogy buyer | `EMAIL_SEQUENCE_A_BOOK1_TO_TRILOGY.md` | DONE |
| B1 | Track 1 selected, Deal Machine skipped | 4 | 7 | Convert to $147 Deal Machine buyer | `EMAIL_SEQUENCE_B1_TRILOGY_TO_DEAL_MACHINE.md` | TODO |
| B2 | Track 2 selected, Wealth Shift skipped | 4 | 7 | Convert to $197 Wealth Shift buyer | `EMAIL_SEQUENCE_B2_TRILOGY_TO_WEALTH_SHIFT.md` | TODO |
| B3 | Track 3 selected, Foundation skipped | 4 | 7 | Convert to $97 Foundation buyer | `EMAIL_SEQUENCE_B3_TRILOGY_TO_FOUNDATION.md` | TODO |
| C1 | Deal Machine purchased ($147) | 9 | 18 | Get coaching application | `EMAIL_SEQUENCE_C1_ACTIVE_INVESTOR.md` | DONE |
| C2 | Wealth Shift purchased ($197) | 9 | 18 | Get coaching application | `EMAIL_SEQUENCE_C2_PASSIVE_INVESTOR.md` | DONE |
| C3 | Foundation purchased ($97) | 9 | 18 | Get coaching application | `EMAIL_SEQUENCE_C3_FOUNDATION.md` | DONE |
| D | Application submitted | 4 | 4 | Get them on strategy call | `EMAIL_SEQUENCE_D_APPLICATION_NURTURE.md` | TODO |
| Broadcast | All subscribers post-sequence | Ongoing | 2x/week | Nurture, value, re-engage | Tue + Thu sends | TODO |
| Re-engage | 90 days no activity | 5 | 14 | Win back or clean list | TODO | TODO |
| Cart Close | Open cart window | 3 | 3 | Close stragglers | TODO | TODO |

**Note:** The original Sequence B (`EMAIL_SEQUENCE_B_TRILOGY_TO_FIRE.md`) and Sequence C (`EMAIL_SEQUENCE_C_FIRE_TO_COACHING.md`) are ARCHIVED. They've been replaced by track-specific sequences (B1/B2/B3 and C1/C2/C3). Original files kept for reference.

---

## POST-PURCHASE QUESTIONNAIRE (Replaces OTO Page)

**Location:** Shown immediately after $7 trilogy purchase (replaces the old $97 FIRE Workbook OTO page)
**Page file:** `pages/questionnaire.html`
**Purpose:** Route buyers into 1 of 3 tracks based on self-selection

**Headline:** "One quick question before we send your books..."
**Subheadline:** "This helps me personalize what I send you next."

**Card 1 — Active Investor:**
- "I want to make money in real estate"
- "Teach me how to find deals, close deals, and build cash flow -- even in a down market."
- Routes to Track 1 → Deal Machine offer page

**Card 2 — Passive Investor:**
- "I have money that should be working harder"
- "Show me how to move my retirement, savings, or investments into real estate -- without quitting my job."
- Routes to Track 2 → Wealth Shift offer page

**Card 3 — The Foundation:**
- "I'm starting from scratch"
- "I need to understand my finances and get investor-ready before my first deal."
- Routes to Track 3 → Foundation offer page

**Default:** "Not sure? Start with The Foundation -- it's where every great investor begins."

---

## APPLICATION QUESTIONNAIRE (Coaching)

**Q1:** "What best describes your real estate experience?"
- A) I haven't done my first deal yet
- B) I've done 1-3 deals but I'm not consistent
- C) I'm active and want to scale
- D) I'm repositioning wealth from other asset classes

**Q2:** "What's your primary goal for the next 6 months?"
- A) Close my first deal
- B) Build consistent monthly cash flow
- C) Reposition retirement/savings into real estate
- D) Scale from a few properties to a portfolio

**Additional fields:** Full name, email, phone, city/state

**Routing:** All applications go to Sequence D → strategy call. The questionnaire data informs the call -- it doesn't filter people out.

---

## GHL TAGS

| Tag | Applied When |
|-----|-------------|
| `lead` | Opts in for Book 1 |
| `buyer` | Purchases $7 trilogy |
| `track-active` | Selects Active Investor on questionnaire |
| `track-passive` | Selects Passive Investor on questionnaire |
| `track-foundation` | Selects Foundation on questionnaire |
| `deal-machine-buyer` | Purchases $147 Deal Machine |
| `wealth-shift-buyer` | Purchases $197 Wealth Shift |
| `foundation-buyer` | Purchases $97 Foundation |
| `applicant` | Submits coaching application |
| `booked-call` | Books strategy call |
| `enrolled-group` | Enrolled in $5,997 group coaching |
| `enrolled-1on1` | Enrolled in $14,997 1-on-1 coaching |
| `cold-90` | No engagement for 90 days |

**Removed tags:** `fire-buyer`, `educate`, `activate`, `scale` (replaced by track-specific tags)

---

## CONVERSION TARGETS (3-Track Model)

### Funnel Flow (per 10,000 leads)

| Stage | Target Rate | Math |
|-------|------------|------|
| Opt-in → $7 buyer | 10% | 1,000 buyers |
| $7 buyer → Selects Track | 85% | 850 tracked (150 abandon questionnaire) |
| Track distribution | 35% / 30% / 35% | 298 Active / 255 Passive / 298 Foundation |
| Track product purchase (page) | 18% | 54 Active / 46 Passive / 54 Foundation = 154 total |
| Track product purchase (email B sequence) | 8% of remaining | 20 Active / 17 Passive / 20 Foundation = 57 more |
| Total mid-tier buyers | | **211 mid-tier buyers** |
| Mid-tier → Applies for coaching | 8% avg | ~17 applications |
| Application → Books call | 75% | ~13 calls |
| Call → Enrolls group | 30% | ~4 enrolled |
| Group → Upgrades 1-on-1 | 15% | ~1 upgrade |

### Revenue per 10,000 Leads

| Source | Revenue |
|--------|---------|
| Trilogy ($7 x 1,000) | $7,000 |
| The Deal Machine ($147 x 74) | $10,878 |
| The Wealth Shift ($197 x 63) | $12,411 |
| The Foundation ($97 x 74) | $7,178 |
| Group Coaching ($5,997 x 4) | $23,988 |
| 1-on-1 Upgrade ($14,997 x 1) | $14,997 |
| **TOTAL** | **$76,452** |
| **Revenue per lead** | **$7.65** |

**Note:** Revenue per lead slightly lower than the old single-OTO model ($8.36) because the questionnaire adds a friction step and the mid-tier price is spread across 3 products. However, the 3-track model produces:
- Higher mid-tier satisfaction (personalized product)
- Higher coaching application rates (tailored sequences)
- Higher coaching close rates (strategy call is more informed)
- Higher LTV (better audience understanding for future products)

The LTV advantage is expected to exceed the slight RPL reduction within 6 months.

---

## TECH STACK

| Tool | Purpose | Cost |
|------|---------|------|
| GHL (GoHighLevel) | Email, CRM, automations, landing pages, calendar, checkout | $97/mo |
| Gumroad | Book 1 free + Trilogy $7 checkout (migrating to GHL) | 10% per sale |
| Coach Financing / FlexxBuy | $5,997 coaching financing | 5% per funded deal |
| GHL Calendar | Strategy call booking | Included |
| Skool or GHL Community | Group coaching community | $99/mo (Skool) or included |
| HeyGen | AI avatar for course content (future) | $29/mo |
| Audio hosting | Mid-tier audio modules (GHL or private podcast) | Included/minimal |

---

## DELIVERABLE STATUS

| Deliverable | Status | Action Needed |
|-------------|--------|---------------|
| Book 1 manuscript + covers + EPUB | DONE | None |
| Books 2 & 3 manuscripts + covers + EPUBs | DONE | None |
| Sales copy + social hooks | DONE | Update pricing from $19.99 to $7 |
| Questionnaire page (post-purchase) | DONE | `pages/questionnaire.html` -- integrate GHL routing |
| 3-Track Product Outlines | DONE | `THREE_TRACK_PRODUCT_OUTLINES.md` |
| The Deal Machine (Track 1 PDF + audio) | TODO | Write 85pg guide, record 6 audio modules, build 12 templates |
| The Wealth Shift (Track 2 PDF + audio) | TODO | Write 72pg guide, record 5 audio modules, build 8 worksheets |
| The Foundation (Track 3 PDF + audio) | PARTIAL | FIRE Workbook exists (5 versions) -- rebrand, expand, add audio modules |
| Track 1 offer page | TODO | Build in GHL (similar to old OTO page, adapted for Deal Machine) |
| Track 2 offer page | TODO | Build in GHL |
| Track 3 offer page | TODO | Build in GHL |
| Email Sequence A (6 emails) | DONE | Load into GHL |
| Email Sequence B (original, 4 emails) | ARCHIVED | Replaced by B1/B2/B3 |
| Email Sequence B1 (Active, 4 emails) | TODO | Write (push to $147) |
| Email Sequence B2 (Passive, 4 emails) | TODO | Write (push to $197) |
| Email Sequence B3 (Foundation, 4 emails) | TODO | Write (push to $97) |
| Email Sequence C (original, 9 emails) | ARCHIVED | Replaced by C1/C2/C3 |
| Email Sequence C1 (Active, 9 emails) | DONE | `EMAIL_SEQUENCE_C1_ACTIVE_INVESTOR.md` -- load into GHL |
| Email Sequence C2 (Passive, 9 emails) | DONE | `EMAIL_SEQUENCE_C2_PASSIVE_INVESTOR.md` -- load into GHL |
| Email Sequence C3 (Foundation, 9 emails) | DONE | `EMAIL_SEQUENCE_C3_FOUNDATION.md` -- load into GHL |
| Email Sequence D (4 emails) | TODO | Write |
| Opt-in landing page | DONE | `pages/optin.html` -- integrate GHL form |
| $7 tripwire page | DONE | `pages/tripwire.html` -- integrate checkout |
| Coaching application page | DONE | `pages/coaching-application.html` -- integrate GHL |
| Group coaching curriculum | DONE | `GROUP_COACHING_CURRICULUM.md` -- 26-week, 52-call |
| Financing integration | TODO | Set up Coach Financing/FlexxBuy |

---

## BUILD ORDER (Updated)

| Phase | Tasks | Timeline |
|-------|-------|----------|
| **Phase 1: Front Door** | Opt-in page live, $7 checkout live, Sequence A loaded into GHL | Week 1 |
| **Phase 2: Questionnaire + Routing** | Questionnaire page integrated with GHL, 3 track tags configured, routing logic built | Week 1-2 |
| **Phase 3: Track Products** | The Foundation product finalized (rebrand FIRE Workbook + audio), track offer pages built | Week 2-3 |
| **Phase 4: Email Sequences** | B1/B2/B3 written, C1/C2/C3 loaded into GHL, Sequence D written + loaded | Week 2-3 |
| **Phase 5: Backend** | Application page integrated, strategy call calendar, financing setup | Week 3-4 |
| **Phase 6: The Deal Machine + Wealth Shift** | Write/record Track 1 and Track 2 products (can launch with Foundation only first) | Week 4-6 |
| **Phase 7: Go Live** | Test full flow end-to-end (all 3 tracks), launch traffic | Week 4 (Foundation) / Week 6 (all tracks) |

**Launch Strategy:** Can launch with Track 3 (Foundation) first since the FIRE Workbook already exists and just needs rebranding + audio. Tracks 1 and 2 require new product creation. Route all questionnaire clicks to Foundation temporarily while building the other two products.

---

## FILE STRUCTURE

```
business/funnel/
  MASTER_FUNNEL_SPEC.md                         ← This file
  THREE_TRACK_PRODUCT_OUTLINES.md               ← Product specs for all 3 tracks
  GROUP_COACHING_CURRICULUM.md                   ← 26-week coaching program
  GHL_AUTOMATION_BLUEPRINT.md                   ← GHL setup guide
  GHL_COMMERCE_RESEARCH.md                      ← Commerce platform research
  COMMUNITY_PLATFORM_RESEARCH.md                ← Community platform research
  RE_EDUCATION_MARKET_RESEARCH.md               ← Market research
  FIRE_WORKBOOK_AUDIT.md                        ← FIRE workbook version audit
  EMAIL_SEQUENCE_A_BOOK1_TO_TRILOGY.md          ← Sequence A (active)
  EMAIL_SEQUENCE_B_TRILOGY_TO_FIRE.md           ← Sequence B (ARCHIVED - replaced by B1/B2/B3)
  EMAIL_SEQUENCE_C_FIRE_TO_COACHING.md          ← Sequence C (ARCHIVED - replaced by C1/C2/C3)
  EMAIL_SEQUENCE_D_APPLICATION_NURTURE.md       ← Sequence D (TODO)
  EMAIL_SEQUENCE_C1_ACTIVE_INVESTOR.md          ← Sequence C1 - Active track
  EMAIL_SEQUENCE_C2_PASSIVE_INVESTOR.md         ← Sequence C2 - Passive track
  EMAIL_SEQUENCE_C3_FOUNDATION.md               ← Sequence C3 - Foundation track
  pages/
    optin.html                                  ← Lead magnet opt-in page
    tripwire.html                               ← $7 trilogy sales page
    oto-fire.html                               ← $97 OTO page (ARCHIVED - replaced by questionnaire)
    questionnaire.html                          ← Post-purchase track selection page
    coaching-application.html                   ← Coaching application page
  html-emails/
    all_emails_preview.html                     ← Email template previews
```
