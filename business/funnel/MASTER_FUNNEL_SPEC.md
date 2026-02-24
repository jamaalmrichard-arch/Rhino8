# MASTER FUNNEL SPEC — Money Decoded → FIRE → Coaching
## J. Marque Brand | Updated: 2026-02-22

---

## THE FUNNEL

```
[TRAFFIC] — TikTok, IG, organic, Gumroad SEO
     ↓
[OPT-IN PAGE] — "Get the FREE ebook: The History of Money"
     ↓ GHL captures email → Tag: "lead" → Trigger: Sequence A
     ↓
[DELIVERY PAGE] — Book 1 download + $7 Trilogy offer on same page
     ↓
     ├── BUYS $7 → Tag: "buyer" → Deliver trilogy → Show OTO page ($97 FIRE Workbook)
     │        ├── BUYS OTO → Tag: "fire-buyer" → Deliver workbook → Trigger: Sequence C
     │        └── SKIPS OTO → Trigger: Sequence B (push to $97)
     │                 ├── BUYS $97 from email → Tag: "fire-buyer" → Trigger: Sequence C
     │                 └── DOESN'T BUY → Stays on broadcast list (2x/week value)
     │
     └── DOESN'T BUY $7 → Sequence A continues (6 emails → push to $7)
              ├── BUYS → flows into buyer path above
              └── DOESN'T BUY → Stays on broadcast list (2x/week value)

[SEQUENCE C] — 9 emails / 18 days → Push to coaching APPLICATION
     ↓
[APPLICATION PAGE] — Questionnaire (2 qualifying questions + contact info)
     ↓ Tag: "applicant" → Trigger: Sequence D
     ↓
[SEQUENCE D] — 4 emails / 4 days → Nurture before strategy call
     ↓
[STRATEGY CALL] — Close $5,997 group coaching OR $14,997 1-on-1
     ↓
[ONBOARDING] — Welcome email + community access + calendar link
```

---

## PRODUCTS & PRICING

| Step | Product | Price | Delivery | Platform |
|------|---------|-------|----------|----------|
| Lead Magnet | Money Decoded Book 1: The History of Money | FREE | Instant PDF download | GHL opt-in → auto-email |
| Tripwire | Money Decoded Trilogy (all 3 books) | $7 | Instant PDF/EPUB download | Gumroad or GHL checkout |
| OTO | FIRE Course Workbook (7 modules, 25 pages) | $97 | Instant PDF download | One-click upsell page |
| Core Offer | Group Coaching — FIRE + 6-Month RE Execution | $5,997 | Application → Call → Onboarding | Coach Financing / FlexxBuy |
| Premium | 1-on-1 Coaching Upgrade | $14,997 | Upsell from group graduates | Direct outreach |

---

## EMAIL SEQUENCES

| Sequence | Trigger | Emails | Days | Goal | File |
|----------|---------|--------|------|------|------|
| A | Book 1 downloaded | 6 | 7 | Convert to $7 trilogy buyer | `EMAIL_SEQUENCE_A_BOOK1_TO_TRILOGY.md` |
| B | $7 purchased, OTO skipped | 4 | 7 | Convert to $97 FIRE workbook buyer | `EMAIL_SEQUENCE_B_TRILOGY_TO_FIRE.md` |
| C | $97 purchased | 9 | 18 | Get coaching application | `EMAIL_SEQUENCE_C_FIRE_TO_COACHING.md` (TODO) |
| D | Application submitted | 4 | 4 | Get them on strategy call | `EMAIL_SEQUENCE_D_APPLICATION_NURTURE.md` (TODO) |
| Broadcast | All subscribers post-sequence | Ongoing | 2x/week | Nurture, value, re-engage | Tue + Thu sends |
| Re-engage | 90 days no activity | 5 | 14 | Win back or clean list | TODO |
| Cart Close | Open cart window | 3 | 3 | Close stragglers | TODO |

---

## QUESTIONNAIRE (Application Page)

**Q1:** "Now that you know how money really works — what do you want to do about it?"
- A) Keep learning — I want the full picture
- B) Start making money through real estate
- C) I'm already in real estate — I need to level up

**Q2:** "What best describes where you are right now?"
- A) Complete beginner — haven't invested in anything yet
- B) I've been studying but haven't taken action
- C) I'm active but my systems are a mess
- D) I'm experienced and ready for the next level

**Routing:**
- Keep learning + Beginner/Studying → EDUCATE nurture (more value emails, slower push)
- Start in RE + Any level → GROUP COACHING track ($5,997)
- Already in RE + Active/Experienced → FAST TRACK to strategy call

**Additional fields:** Full name, email, phone, city/state

---

## GHL TAGS

| Tag | Applied When |
|-----|-------------|
| `lead` | Opts in for Book 1 |
| `buyer` | Purchases $7 trilogy |
| `fire-buyer` | Purchases $97 FIRE Workbook |
| `applicant` | Submits coaching application |
| `booked-call` | Books strategy call |
| `enrolled-group` | Enrolled in $5,997 group coaching |
| `enrolled-1on1` | Enrolled in $14,997 1-on-1 coaching |
| `educate` | Questionnaire → learning path |
| `activate` | Questionnaire → RE beginner path |
| `scale` | Questionnaire → experienced path |
| `cold-90` | No engagement for 90 days |

---

## CONVERSION TARGETS

| Stage | Target Rate | Math (per 10,000 leads) |
|-------|------------|------------------------|
| Opt-in → $7 buyer | 10% | 1,000 buyers |
| $7 buyer → $97 OTO (page) | 20% | 200 workbook buyers |
| $7 buyer → $97 (email) | 8% of remaining 800 | 64 more workbook buyers |
| Total $97 buyers | ~264 | |
| $97 buyer → Applies | 10% | 26 applications |
| Application → Books call | 75% | 20 calls |
| Call → Enrolls group | 30% | 6 enrolled |
| Group → Upgrades 1-on-1 | 15% | ~1 upgrade |

**Revenue per 10,000 leads:**
| Source | Revenue |
|--------|---------|
| Trilogy ($7 x 1,000) | $7,000 |
| FIRE Workbook ($97 x 264) | $25,608 |
| Group Coaching ($5,997 x 6) | $35,982 |
| 1-on-1 Upgrade ($14,997 x 1) | $14,997 |
| **TOTAL** | **$83,587** |
| **Revenue per lead** | **$8.36** |

---

## TECH STACK

| Tool | Purpose | Cost |
|------|---------|------|
| GHL (GoHighLevel) | Email, CRM, automations, landing pages, calendar | $97/mo |
| Gumroad | Book 1 free + Trilogy $7 checkout | 10% per sale |
| Coach Financing / FlexxBuy | $5,997 coaching financing | 5% per funded deal |
| Calendly or GHL Calendar | Strategy call booking | Free / included |
| Skool or GHL Community | Group coaching community | $99/mo (Skool) or included |
| HeyGen | AI avatar for course content (future) | $29/mo |

---

## DELIVERABLE STATUS

| Deliverable | Status | Action Needed |
|-------------|--------|---------------|
| Book 1 manuscript + covers + EPUB | DONE | None |
| Books 2 & 3 manuscripts + covers + EPUBs | DONE | None |
| Sales copy + social hooks | DONE | Update pricing from $19.99 to $7 |
| FIRE Workbook PDF | EXISTS (5 versions) | Pick final version, verify quality |
| Email Sequence A (6 emails) | DONE | Load into GHL |
| Email Sequence B (4 emails) | DONE | Load into GHL |
| Email Sequence C (9 emails) | TODO | Write |
| Email Sequence D (4 emails) | TODO | Write |
| Opt-in landing page | TODO | Build in GHL |
| $7 checkout page | TODO | Build in Gumroad/GHL |
| $97 OTO page | TODO | Build in GHL |
| Coaching application page | TODO | Build in GHL |
| Coaching sales page | TODO | Build in GHL |
| Group coaching curriculum | DONE | `GROUP_COACHING_CURRICULUM.md` — 26-week, 52-call curriculum |
| Financing integration | TODO | Set up Coach Financing/FlexxBuy |

---

## BUILD ORDER

| Phase | Tasks | Timeline |
|-------|-------|----------|
| **Phase 1: Front Door** | Opt-in page, $7 checkout, delivery automation, Sequence A loaded | Week 1 |
| **Phase 2: First Upsell** | $97 OTO page, Sequence B loaded, FIRE workbook finalized | Week 1-2 |
| **Phase 3: Backend** | Sequence C written + loaded, application page, Sequence D | Week 2-3 |
| **Phase 4: High Ticket** | Coaching sales page, strategy call calendar, financing setup | Week 3-4 |
| **Phase 5: Go Live** | Test full flow end-to-end, launch traffic | Week 4 |
