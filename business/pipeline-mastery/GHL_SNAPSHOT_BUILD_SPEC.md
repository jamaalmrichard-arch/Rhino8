# GHL SNAPSHOT BUILD SPEC — Pipeline Mastery
# PARKED — NOT LIVE
# Purpose: Step-by-step guide to build the entire GHL Snapshot manually
# Time estimate: 3-4 hours for full build

---

## STEP 1: PIPELINE STAGES

Go to: Settings → Pipelines → Create New Pipeline → "Pipeline Mastery"

| # | Stage Name | Description | Auto-Action |
|---|-----------|-------------|-------------|
| 1 | NEW LEAD | Just imported, not yet contacted | Auto-assign to user, create Call Task |
| 2 | CONTACT ATTEMPTED | Tried to reach, no answer | Continue 13-touch sequence |
| 3 | CONTACTED | Spoke with owner | Log notes, update lead score |
| 4 | QUALIFIED | Motivated + equity + timeline | Alert notification, schedule appointment |
| 5 | APPOINTMENT SET | Property visit scheduled | Send confirmation SMS + email |
| 6 | OFFER MADE | Verbal or written offer presented | Create follow-up task (48 hrs) |
| 7 | UNDER CONTRACT | Signed PSA | Pause all marketing, trigger disposition |
| 8 | CLOSED | Deal done, paid | Move to Closed Won, log revenue |
| 9 | NURTURE | Not ready now, monthly follow-up | Start monthly drip |
| 10 | DEAD | Not motivated / DNC | Remove from all automations |

---

## STEP 2: CUSTOM FIELDS

Go to: Settings → Custom Fields → Create for Contacts

| Field Name | Type | Options/Notes |
|-----------|------|---------------|
| Property Address | Text | The subject property |
| Mailing Address | Text | Owner's mailing address (if different) |
| Property Condition | Dropdown | Excellent / Good / Fair / Poor / Distressed |
| Motivation Level | Dropdown | Hot / Warm / Cold / Dead |
| Timeline | Dropdown | ASAP (0-30 days) / 1-3 Months / 3-6 Months / 6+ Months / No Timeline |
| Asking Price | Number | What seller wants |
| ARV Estimate | Number | After repair value |
| Rehab Estimate | Number | Estimated repair cost |
| MAO | Number | Maximum allowable offer (auto-calc later or manual) |
| Monthly Rent Estimate | Number | Expected rental income |
| Equity Estimate | Dropdown | High (70%+) / Medium (40-69%) / Low (<40%) / Unknown |
| List Source | Dropdown | Pre-Foreclosure / Tax Delinquent / Probate / Absentee / Vacant / Code Violation / Driving for Dollars / Referral / Other |
| Lead Score | Number | 0-100 (manual or tag-based) |
| Exit Strategy | Dropdown | Wholesale / BRRRR / Flip / Sub-To / Seller Finance / Wrap / Lease Option / Hold |
| Beds | Number | |
| Baths | Number | |
| Sqft | Number | |
| Year Built | Number | |
| Notes | Long Text | Free-form notes |
| Touch Count | Number | How many of 13 touches completed |
| DNC | Checkbox | Do Not Contact flag |

---

## STEP 3: TAGS

Go to: Settings → Tags → Create

**Source Tags:**
- `src:pre-foreclosure`
- `src:tax-delinquent`
- `src:probate`
- `src:absentee`
- `src:vacant`
- `src:code-violation`
- `src:driving`
- `src:referral`
- `src:stacked` (on 2+ lists)

**Status Tags:**
- `status:new`
- `status:hot-lead` (score 60+)
- `status:warm`
- `status:cold`
- `status:dnc`
- `status:nurture`

**Sequence Tags:**
- `seq:13touch-active`
- `seq:13touch-complete`
- `seq:nurture-active`
- `seq:paused`

**Deal Tags:**
- `deal:wholesale`
- `deal:brrrr`
- `deal:flip`
- `deal:creative`
- `deal:under-contract`
- `deal:closed`

---

## STEP 4: LEAD SCORING RULES

Apply these point values via tags or workflow conditions:

| Factor | Points | How to Apply |
|--------|--------|-------------|
| Pre-foreclosure list | +20 | Auto-tag on import based on list source |
| Tax delinquent list | +15 | Auto-tag on import |
| On 2+ lists (stacked) | +25 | Tag `src:stacked` on import |
| Absentee/out-of-state | +10 | Auto-tag on import |
| Vacant property | +15 | Auto-tag on import |
| Probate/inherited | +20 | Auto-tag on import |
| High equity (70%+) | +10 | Based on Equity Estimate field |
| Answered phone | +10 | Manual update after call |
| Expressed motivation | +30 | Manual update after conversation |
| Has timeline (<90 days) | +20 | Based on Timeline field |
| Willing to discuss price | +15 | Manual update after conversation |

**Scoring tiers:**
- 0-29: Cold → standard sequence
- 30-59: Warm → prioritize in call list
- 60+: HOT → immediate attention, skip to front of queue

---

## STEP 5: AUTOMATION WORKFLOWS (13-Touch Sequence)

Go to: Automation → Workflows → Create New

### MASTER WORKFLOW: "13-Touch Sequence"

**Trigger:** Contact tag added = `seq:13touch-active`

```
TRIGGER: Tag "seq:13touch-active" added
│
├─ DAY 1 (Immediate)
│  ├─ Create Task: "Call Lead — Touch 1" (assigned to user)
│  ├─ Wait 2 hours after task created
│  └─ Send SMS: [TOUCH 2 — Text #1] (see copy doc)
│
├─ WAIT 2 days
│  └─ Send Voicemail Drop: [TOUCH 3 — RVM #1]
│
├─ WAIT 2 days (Day 5 total)
│  └─ Send Email: [TOUCH 4 — Email #1]
│
├─ WAIT 2 days (Day 7)
│  └─ Create Task: "Call Lead — Touch 5" (assigned to user)
│
├─ WAIT 3 days (Day 10)
│  └─ Send SMS: [TOUCH 6 — Text #2]
│
├─ WAIT 4 days (Day 14)
│  └─ Create Task: "Send Direct Mail — Touch 7 (Postcard)"
│     Note: "Upload to Ballpoint Marketing batch"
│
├─ WAIT 3 days (Day 17)
│  └─ Send Voicemail Drop: [TOUCH 8 — RVM #2]
│
├─ WAIT 4 days (Day 21)
│  └─ Send Email: [TOUCH 9 — Email #2]
│
├─ WAIT 4 days (Day 25)
│  └─ Create Task: "Call Lead — Touch 10" (assigned to user)
│
├─ WAIT 5 days (Day 30)
│  └─ Send SMS: [TOUCH 11 — Text #3 (Breakup)]
│
├─ WAIT 10 days (Day 40)
│  └─ Create Task: "Send Direct Mail — Touch 12 (Yellow Letter)"
│     Note: "Upload to Ballpoint Marketing batch"
│
├─ WAIT 15 days (Day 55)
│  ├─ Send Email: [TOUCH 13 — Email #3 (Final)]
│  ├─ Remove Tag: "seq:13touch-active"
│  └─ Add Tag: "seq:13touch-complete"
│
└─ IF/ELSE: Check pipeline stage
   ├─ IF stage = QUALIFIED or later → END (do not add to nurture)
   └─ ELSE → Add Tag: "seq:nurture-active"
```

### NURTURE WORKFLOW: "Monthly Nurture"

**Trigger:** Contact tag added = `seq:nurture-active`

```
TRIGGER: Tag "seq:nurture-active" added
│
├─ WAIT 30 days
│  └─ Send SMS: "Quick check-in about [Property Address]..."
│
├─ WAIT 30 days
│  └─ Send Voicemail Drop: Market update angle
│
├─ WAIT 30 days
│  └─ Create Task: "Send nurture postcard"
│
├─ WAIT 30 days
│  └─ Send Email: Market report / value-add content
│
└─ LOOP: Go back to start (repeat quarterly forever)
```

### DNC WORKFLOW: "DNC Handler"

**Trigger:** Contact replies with "stop", "unsubscribe", "remove", "DNC"

```
TRIGGER: SMS reply contains STOP/UNSUBSCRIBE/REMOVE/DNC
│
├─ IMMEDIATELY:
│  ├─ Add Tag: "status:dnc"
│  ├─ Remove Tag: "seq:13touch-active"
│  ├─ Remove Tag: "seq:nurture-active"
│  ├─ Remove from ALL workflows
│  ├─ Update custom field DNC = TRUE
│  └─ Send SMS: "You've been removed. We won't contact you again."
│
└─ Create Internal Note: "DNC requested [date] via [channel]"
```

### POST-PURCHASE WORKFLOW (Student Onboarding)

**Trigger:** Stripe payment webhook — tag "student-active" added

```
TRIGGER: Tag "student-active" added
│
├─ IMMEDIATELY:
│  ├─ Send Email: Course login + Snapshot import link + welcome video
│  └─ Send SMS: "Your Pipeline Mastery access is ready. Check your email."
│
├─ WAIT 1 day
│  └─ Send Email: "Day 1 — Start here: Import your GHL Snapshot"
│
├─ WAIT 2 days
│  └─ Send Email: "Day 3 — Set up PropStream (your data engine)"
│
├─ WAIT 3 days
│  └─ Send Email: "Day 6 — Your 13-touch system is live. Here's how to use it."
│
├─ WAIT 4 days
│  └─ Send Email: "Day 10 — Seller psychology: the words that close deals"
│
├─ WAIT 5 days
│  └─ Send Email: "Day 15 — Making your first offer (use the templates)"
│
├─ WAIT 5 days
│  └─ Send Email: "Day 20 — Tracking your KPIs (are you on pace?)"
│
├─ WAIT 5 days
│  └─ Send Email: "Day 25 — Scaling: when to hire your first VA"
│
├─ WAIT 5 days
│  └─ Send Email: "Day 30 — You're 30 days in. How's it going? (feedback survey)"
│
└─ Add Tag: "student-onboarded"
```

---

## STEP 6: LANDING PAGES TO BUILD IN GHL

| Page | Purpose | Key Elements |
|------|---------|-------------|
| Lead Capture | Motivated seller leads (for student's business) | Headline, 3 bullet benefits, form (name, phone, property address), CTA |
| Calendar Booking | Appointment scheduling | Embedded GHL calendar, timezone auto-detect |
| Sales Page | Pipeline Mastery course purchase | Already built (v3 HTML), recreate in GHL or embed |
| Lead Magnet | "47 Words That Kill Deals" PDF download | Headline, email capture form, instant PDF delivery |
| Webinar Replay | VSL/webinar recording page | Video embed, CTA button below |

---

## STEP 7: SNAPSHOT EXPORT + TEST

1. Go to: Settings → Company → Snapshots
2. Click "Create Snapshot"
3. Name: "Pipeline Mastery v1.0"
4. Include: Pipelines, Custom Fields, Tags, Workflows, Templates, Funnels, Calendars
5. Generate shareable link
6. TEST: Create a free GHL trial account → import Snapshot → verify:
   - [ ] All 10 pipeline stages appear
   - [ ] All custom fields present
   - [ ] All tags created
   - [ ] 13-touch workflow fires on test lead
   - [ ] DNC workflow triggers on "STOP" reply
   - [ ] Email/SMS templates populated
   - [ ] Landing pages imported
   - [ ] Calendar booking works

---

# BUILD ORDER (Do in this sequence)
1. Custom Fields (10 min)
2. Tags (10 min)
3. Pipeline Stages (10 min)
4. Email/SMS/VM templates — paste from copy doc (20 min)
5. 13-Touch Workflow (45 min)
6. Nurture Workflow (15 min)
7. DNC Workflow (10 min)
8. Student Onboarding Workflow (15 min)
9. Landing Pages (30 min)
10. Calendar (10 min)
11. Export Snapshot + Test (20 min)

**Total: ~3-3.5 hours**

# STATUS: PARKED — NOT DEPLOYED
