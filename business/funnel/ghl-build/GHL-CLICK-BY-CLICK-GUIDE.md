# GHL CLICK-BY-CLICK BUILD GUIDE
## Money Decoded 3-Track Funnel | J. Marque Brand
## Everything the API Can't Do — Manual UI Build Steps
### Created: 2026-02-25

---

> **Who this is for:** You (or a Fiverr GHL freelancer at $50-150) can follow these steps to build every component that requires the GHL UI. The API script (`ghl-setup.py`) handles tags, custom fields, and email template setup. This guide covers the remaining 60% — pipelines, products, workflows, funnels, memberships, calendar, and smart lists.
>
> **Time estimate:** 2-3 hours for an experienced GHL builder. 4-6 hours if new to GHL.

---

## TABLE OF CONTENTS

1. [Pipeline (1 pipeline, 10 stages)](#1-pipeline)
2. [Products (7 products + 2 payment plans)](#2-products)
3. [Funnel Pages (9 pages)](#3-funnel-pages)
4. [Workflows (18 workflows)](#4-workflows)
5. [Membership / Course Area (6 access levels)](#5-membership)
6. [Calendar (1 calendar)](#6-calendar)
7. [Smart Lists (11 saved filters)](#7-smart-lists)
8. [Community (1 community, 6 channels)](#8-community)

---

## 1. PIPELINE

**Navigate to:** CRM > Pipelines > + Create Pipeline

**Pipeline Name:** `Money Decoded Funnel`

### Create these 10 stages in order:

| # | Stage Name | Color | Tag Trigger |
|---|-----------|-------|-------------|
| 1 | Book1 Lead | Gray | `lead` |
| 2 | Trilogy Buyer | Blue | `buyer` |
| 3 | Track Selected | Light Blue | `track-active` OR `track-passive` OR `track-foundation` |
| 4 | Track Product Buyer | Green | `deal-machine-buyer` OR `wealth-shift-buyer` OR `foundation-buyer` |
| 5 | Coaching Applicant | Yellow | `applicant` |
| 6 | Strategy Call | Orange | `booked-call` |
| 7 | Strategy Call Complete | Deep Orange | `call-completed` |
| 8 | Enrolled | Gold | `enrolled-group` OR `enrolled-1on1` |
| 9 | Active Student | Dark Green | `active-student` |
| 10 | Graduate | Purple | `graduated` |

### Steps:
1. Click **+ Add Stage**
2. Enter stage name from table
3. Pick stage color (use the progression above for visual clarity)
4. Repeat for all 10 stages
5. Click **Save Pipeline**

> **Note:** Stage movements are all handled by workflows (Section 4). You do NOT need to set up manual drag-and-drop rules. The workflows auto-move contacts between stages.

---

## 2. PRODUCTS

**Navigate to:** Payments > Products > + Add Product

Create each product exactly as specified. These are referenced by funnel order forms and workflows.

### Product 1: Book 1 — FREE Lead Magnet

| Field | Value |
|-------|-------|
| **Product Name** | `Money Decoded: The History of Money (FREE)` |
| **Product Type** | Digital Product |
| **Price** | $0.00 |
| **Payment Type** | One-time |
| **Description** | FREE ebook — The History of Money by J. Marque. How we went from gold to government promises. |

**Steps:**
1. Click **+ Add Product**
2. Fill in name, price ($0.00), type (One-time)
3. Paste description
4. Under **Digital Files** > Upload `MoneyDecoded_Book1_HistoryOfMoney.pdf`
5. Click **Save**

> This product is NOT sold through a checkout. It's delivered via workflow when someone submits the opt-in form.

---

### Product 2: Money Decoded Trilogy — $7

| Field | Value |
|-------|-------|
| **Product Name** | `Money Decoded Trilogy — All 3 Books` |
| **Price** | $7.00 |
| **Payment Type** | One-time |
| **Description** | The complete Money Decoded trilogy: The History of Money, Modern Money, and The Future of Money. 28,000+ words of financial education by J. Marque. |

**Steps:**
1. **+ Add Product**
2. Name: `Money Decoded Trilogy — All 3 Books`
3. Price: `7.00`, Type: One-time
4. Upload all 3 book PDFs under Digital Files
5. **Save**

---

### Product 3: The Deal Machine — $147 (Track 1)

| Field | Value |
|-------|-------|
| **Product Name** | `The Deal Machine — Active Investor's Playbook` |
| **Price** | $147.00 |
| **Payment Type** | One-time |
| **Description** | The Deal Machine: 85-page guide + 6 audio modules + 12 templates. How to find deals, close deals, and build cash flow in real estate. |

**Steps:**
1. **+ Add Product**
2. Name, price ($147.00), type (One-time)
3. Upload Deal Machine PDF + 6 audio files + 12 template files
4. **Save**

---

### Product 4: The Wealth Shift — $197 (Track 2)

| Field | Value |
|-------|-------|
| **Product Name** | `The Wealth Shift — Reposition Your Money` |
| **Price** | $197.00 |
| **Payment Type** | One-time |
| **Description** | The Wealth Shift: 72-page guide + 5 audio modules + 8 worksheets. How to reposition retirement, savings, and investments into real estate without quitting your job. |

**Steps:** Same as above. Upload Wealth Shift PDF + 5 audio files + 8 worksheets.

---

### Product 5: The Foundation — $97 (Track 3)

| Field | Value |
|-------|-------|
| **Product Name** | `The Foundation — Financial Blueprint` |
| **Price** | $97.00 |
| **Payment Type** | One-time |
| **Description** | The Foundation: 60-page guide + 7 audio modules + 9 worksheets. From financial blank slate to investor-ready in 90 days. |

**Steps:** Same pattern. Upload Foundation PDF + 7 audio files + 9 worksheets.

---

### Product 6: Group Coaching — $5,997

| Field | Value |
|-------|-------|
| **Product Name** | `FIRE + Real Estate Coaching — 6 Month Program` |
| **Product Type** | Service |
| **Price** | $5,997.00 |
| **Payment Type** | One-time |
| **Description** | 6-month group coaching program. 2 live calls/week, deal review, private community, the framework behind $250M in RE transactions. |

**Also create payment plan products:**

| Plan | Product Name | Price | Billing |
|------|-------------|-------|---------|
| 3-Pay | `Coaching — 3-Pay Plan` | $1,999.00 | Recurring, 3 payments, monthly |
| 6-Pay | `Coaching — 6-Pay Plan` | $999.00 | Recurring, 6 payments, monthly |

**Steps for recurring products:**
1. **+ Add Product**
2. Name: `Coaching — 3-Pay Plan`
3. Price: `1999.00`
4. Type: **Recurring**
5. Billing Period: Monthly
6. Number of Payments: 3
7. **Save**
8. Repeat for 6-Pay ($999.00, 6 payments)

> Coaching is NOT sold through a funnel checkout. Payment links are sent manually after strategy call closes. Use **Payments > Payment Links** to generate links.

---

### Product 7: Premium 1-on-1 Coaching — $14,997

| Field | Value |
|-------|-------|
| **Product Name** | `Premium 1-on-1 Coaching — 6 Months` |
| **Price** | $14,997.00 |
| **Payment Type** | One-time |

> Upsell offered on strategy calls or to group coaching graduates. No funnel page needed.

---

## 3. FUNNEL PAGES

**Navigate to:** Sites > Funnels > + New Funnel

**Funnel Name:** `Money Decoded — 3-Track Funnel`

### Step 1: Opt-In Page

| Setting | Value |
|---------|-------|
| **Step Name** | `Opt-In` |
| **Step URL** | `/free-ebook` |
| **Template** | Pick any clean single-column template |

**Page elements to add (top to bottom):**
1. **Hero headline:** "The Financial Education They Didn't Want You to Have"
2. **Sub-headline:** "Get the FREE ebook that reveals 2,600 years of monetary manipulation — and why everything you were taught about money is wrong."
3. **Book cover image** (Money Decoded Book 1, gold on black)
4. **Form element** with 2 fields:
   - First Name (required)
   - Email Address (required)
5. **CTA button:** "SEND ME THE FREE EBOOK" — Gold (#D4AF37) on Black
6. **Social proof line:** "Join 2,000+ readers who took the red pill on money"
7. **Author bio:** "$250M+ in real estate. USMC Veteran. No fluff. No theory. Just truth."

**Form configuration:**
1. Drag **Form** element onto page
2. Add fields: First Name (required), Email (required)
3. Form Settings > On Submit: **Open URL / Redirect** → next step (Delivery-Tripwire)
4. Form Settings > Advanced: Add Hidden Field `funnel_source` = `money-decoded-optin`
5. Assign to workflow: `MD — Sequence A: Book 1 to Trilogy`

---

### Step 2: Delivery + Tripwire Page

| Setting | Value |
|---------|-------|
| **Step Name** | `Delivery-Tripwire` |
| **Step URL** | `/book-download` |

**Page elements:**
1. **Confirmation banner:** "Your free ebook is on its way to your inbox. Start reading below."
2. **Download button** linking to Book 1 PDF (from Media Library)
3. **Divider:** "You've seen Chapter 1. Here's the full story."
4. **Trilogy offer section:** "Get the Complete Trilogy for Just $7"
5. **Three book cover images** side by side
6. **Order Form** element (see below)
7. **Guarantee:** "If you don't learn something that changes how you think about money, email me and I'll refund every penny."

**Order form configuration:**
1. Drag **Order Form** onto page
2. Form Type: **2-Step Order Form**
   - Step 1: Email (pre-filled), First Name
   - Step 2: Card Number, Expiration, CVC
3. **Attach Product:** Select `Money Decoded Trilogy — All 3 Books` ($7.00)
4. Submit Button: "GET THE TRILOGY — $7" (Gold on Black)
5. **On Submit:** Redirect to Step 3 (Questionnaire)

---

### Step 3: Post-Purchase Questionnaire

| Setting | Value |
|---------|-------|
| **Step Name** | `Track-Selection` |
| **Step URL** | `/your-path` |

**Page elements:**
1. **Header:** "Smart move — your trilogy is confirmed! Check your email for download links."
2. **Transition:** "One quick question before we send your books..."
3. **Subheadline:** "This helps me personalize what I send you next."
4. **Three large clickable cards:**

| Card | Heading | Subtext | Links to |
|------|---------|---------|----------|
| 1 | "I want to make money in real estate" | "Teach me how to find deals, close deals, and build cash flow — even in a down market." | `/deal-machine-offer` |
| 2 | "I have money that should be working harder" | "Show me how to move my retirement, savings, or investments into real estate — without quitting my job." | `/wealth-shift-offer` |
| 3 | "I'm starting from scratch" | "I need to understand my finances and get investor-ready before my first deal." | `/foundation-offer` |

**Implementation (simplest approach — 3 buttons):**
1. Create 3 large button elements styled as cards
2. Button 1 links to: `/deal-machine-offer?email={{contact.email}}`
3. Button 2 links to: `/wealth-shift-offer?email={{contact.email}}`
4. Button 3 links to: `/foundation-offer?email={{contact.email}}`
5. Each button URL triggers a mini-form or webhook that applies the correct tag
6. Default nudge text at bottom: "Not sure? Start with The Foundation — it's where every great investor begins."

**Alternative (form-based):**
1. Add a Form with a Radio Button field named `investor_track`
2. Options: active / passive / foundation
3. Style as large cards using Custom CSS
4. On Submit: Trigger workflow `MD — Questionnaire Router`

---

### Step 4A: Deal Machine Offer Page

| Setting | Value |
|---------|-------|
| **Step Name** | `Deal-Machine-Offer` |
| **Step URL** | `/deal-machine-offer` |

**Page elements:**
1. **Hero:** "The Deal Machine — Your Playbook for Real Estate Income"
2. **Sub:** "85 pages. 6 audio modules. 12 done-for-you templates. Everything you need to close your first deal in 90 days."
3. **Product image** (Deal Machine cover)
4. **What's Inside:** List all 6 modules + 12 templates
5. **Case studies:** David ($6,800/mo), Keisha ($8,500 first wholesale)
6. **Price anchor:** "Real estate courses charge $997-$2,997. Yours for $147."
7. **Order Form:** Attach product `The Deal Machine` ($147)
8. **Guarantee:** "30-day money-back guarantee."
9. **Decline link:** "No thanks, just send me my trilogy" → redirect to Thank You page

**Order form:** Attach `The Deal Machine — Active Investor's Playbook` ($147). On Submit: redirect to Thank You.

---

### Step 4B: Wealth Shift Offer Page

| Setting | Value |
|---------|-------|
| **Step Name** | `Wealth-Shift-Offer` |
| **Step URL** | `/wealth-shift-offer` |

**Same structure as 4A but for Wealth Shift:**
- Hero: "The Wealth Shift — Make Your Money Work While You Don't"
- Sub: "72 pages. 5 audio modules. 8 worksheets."
- Case study: David (SDIRA, $80K → $730/mo, 22% CoC vs 6%)
- Price anchor: "Financial advisors charge $5,000+. Yours for $197."
- Order form: Attach `The Wealth Shift — Reposition Your Money` ($197)
- Decline link → Thank You

---

### Step 4C: Foundation Offer Page

| Setting | Value |
|---------|-------|
| **Step Name** | `Foundation-Offer` |
| **Step URL** | `/foundation-offer` |

**Same structure:**
- Hero: "The Foundation — Your Financial Blueprint"
- Sub: "60 pages. 7 audio modules. 9 worksheets. From financial blank slate to investor-ready in 90 days."
- Case study: Keisha (teacher, $52K, 0 → 3 properties in 11 months)
- Price anchor: "Budget apps charge $10/mo forever. This one-time purchase changes your financial trajectory."
- Order form: Attach `The Foundation — Financial Blueprint` ($97)
- Decline link → Thank You

---

### Step 5: Thank You Page

| Setting | Value |
|---------|-------|
| **Step Name** | `Thank-You` |
| **Step URL** | `/thank-you` |

**Page elements:**
1. "You're in. Your purchase is confirmed."
2. "Check your email for download links and login details for your member portal."
3. **Button:** "Access Your Member Portal" → membership login URL
4. **Social share buttons**
5. **Coaching teaser:** "Ready to go from knowledge to action? I work with a small group of people every quarter who want to build real estate wealth. When you're ready, I'll tell you about it."

---

### Step 6: Coaching Application Page

| Setting | Value |
|---------|-------|
| **Step Name** | `Apply` |
| **Step URL** | `/apply` |

> This page is NOT part of the linear funnel flow. It's linked from C1/C2/C3 emails (Emails 7-9).

**Page elements:**
1. **Headline:** "Apply for the FIRE + Real Estate Coaching Program"
2. **Sub:** "15 spots per cohort. 6 months. The system behind $250M in transactions."
3. **Program details:** What's included (2 calls/week, deal review, community, system)
4. **Investment:** "$5,997 — financing available via Coach Financing / FlexxBuy"
5. **Application Survey form** (see below)

**Create the survey:**
1. Go to **Sites > Forms / Surveys > + New Survey**
2. Survey Name: `Coaching Application`
3. Add these fields:

| Field | Type | Required |
|-------|------|----------|
| First Name | Text | YES |
| Last Name | Text | YES |
| Email | Email | YES |
| Phone | Phone | YES |
| City, State | Text | YES |
| "What best describes your real estate experience?" | Multiple Choice | YES |
| "What's your primary goal for the next 6 months?" | Multiple Choice | YES |

**Q1 options:**
- A) I haven't done my first deal yet
- B) I've done 1-3 deals but I'm not consistent
- C) I'm active and want to scale
- D) I'm repositioning wealth from other asset classes

**Q2 options:**
- A) Close my first deal
- B) Build consistent monthly cash flow
- C) Reposition retirement/savings into real estate
- D) Scale from a few properties to a portfolio

4. **On Submit:** Redirect to confirmation message + Trigger workflow `MD — Application Handler`

---

## 4. WORKFLOWS

**Navigate to:** Automation > Workflows > + Create Workflow > Start from Scratch

Build each workflow exactly as specified. Each step is numbered for easy reference.

---

### WORKFLOW 1: Sequence A — Book 1 to Trilogy

**Name:** `MD — Sequence A: Book 1 to Trilogy`
**Trigger:** Form Submitted → `Money Decoded Opt-In`

| Step | Action | Details |
|------|--------|---------|
| 1 | ADD TAG | `lead` |
| 2 | ADD TAG | `in-sequence-a` |
| 3 | ADD TAG | `book1-downloaded` |
| 4 | ADD TO PIPELINE | Pipeline: "Money Decoded Funnel" / Stage: "Book1 Lead" |
| 5 | GRANT MEMBERSHIP | Membership: "Money Decoded" / Level: "Free Tier" |
| 6 | SEND EMAIL | Template: `Seq A — Email 1: Red Pill` |
| 7 | WAIT | 1 day |
| 8 | IF/ELSE | Has tag `buyer`? → YES: End / NO: Continue |
| 9 | SEND EMAIL | Template: `Seq A — Email 2: August 1971` |
| 10 | WAIT | 1 day |
| 11 | IF/ELSE | Has tag `buyer`? → YES: End / NO: Continue |
| 12 | SEND EMAIL | Template: `Seq A — Email 3: Bank Lie` |
| 13 | WAIT | 2 days |
| 14 | IF/ELSE | Has tag `buyer`? → YES: End / NO: Continue |
| 15 | SEND EMAIL | Template: `Seq A — Email 4: BlackRock` |
| 16 | WAIT | 1 day |
| 17 | IF/ELSE | Has tag `buyer`? → YES: End / NO: Continue |
| 18 | SEND EMAIL | Template: `Seq A — Email 5: Social Proof` |
| 19 | WAIT | 2 days |
| 20 | IF/ELSE | Has tag `buyer`? → YES: End / NO: Continue |
| 21 | SEND EMAIL | Template: `Seq A — Email 6: Last Chance` |
| 22 | REMOVE TAG | `in-sequence-a` |
| 23 | ADD TAG | `completed-sequence-a` |
| 24 | END | |

**Goal (optional):** Set workflow goal to "Product Purchased: Money Decoded Trilogy". When goal hits, exit workflow.

---

### WORKFLOW 2: Trilogy Purchase Handler

**Name:** `MD — Trilogy Purchase Handler`
**Trigger:** Order Submitted → Product = `Money Decoded Trilogy — All 3 Books`

| Step | Action | Details |
|------|--------|---------|
| 1 | ADD TAG | `buyer` |
| 2 | ADD TAG | `trilogy-purchased` |
| 3 | REMOVE TAG | `in-sequence-a` |
| 4 | REMOVE FROM WORKFLOW | `MD — Sequence A: Book 1 to Trilogy` |
| 5 | UPDATE PIPELINE | Stage: "Trilogy Buyer" |
| 6 | GRANT MEMBERSHIP | Level: "Trilogy" |
| 7 | SEND EMAIL | Subject: "Smart move — your trilogy is ready" / Body: Download links for all 3 books + member portal login |
| 8 | END | |

---

### WORKFLOW 3: Questionnaire Router

**Name:** `MD — Questionnaire Router`
**Trigger:** Form Submitted → `Track Selection Questionnaire`

| Step | Action | Details |
|------|--------|---------|
| 1 | UPDATE PIPELINE | Stage: "Track Selected" |
| 2 | IF/ELSE | Custom field `investor_track` = "active"? |
| 2a | → YES: ADD TAG | `track-active` |
| 2b | → YES: WAIT | 1 hour |
| 2c | → YES: IF/ELSE | Has tag `deal-machine-buyer`? |
| 2d | → → YES: END | (Purchase handler takes over) |
| 2e | → → NO: ENROLL | In workflow `MD — Sequence B1: Push Deal Machine` |
| 3 | IF/ELSE | Custom field `investor_track` = "passive"? |
| 3a | → YES: ADD TAG | `track-passive` |
| 3b | → YES: WAIT | 1 hour |
| 3c | → YES: IF/ELSE | Has tag `wealth-shift-buyer`? |
| 3d | → → YES: END | |
| 3e | → → NO: ENROLL | In workflow `MD — Sequence B2: Push Wealth Shift` |
| 4 | IF/ELSE | Custom field `investor_track` = "foundation"? |
| 4a | → YES: ADD TAG | `track-foundation` |
| 4b | → YES: WAIT | 1 hour |
| 4c | → YES: IF/ELSE | Has tag `foundation-buyer`? |
| 4d | → → YES: END | |
| 4e | → → NO: ENROLL | In workflow `MD — Sequence B3: Push Foundation` |
| 5 | FALLBACK | If no match: Apply `track-foundation` tag, enroll in B3 |
| 6 | END | |

> **Key logic:** The 1-hour wait gives buyers time to purchase on the offer page. If they buy within 1 hour, the Purchase Handler fires. If they don't, they get enrolled in the B sequence to nurture via email.

---

### WORKFLOW 4: Deal Machine Purchase Handler

**Name:** `MD — Deal Machine Purchase Handler`
**Trigger:** Order Submitted → Product = `The Deal Machine — Active Investor's Playbook`

| Step | Action | Details |
|------|--------|---------|
| 1 | ADD TAG | `deal-machine-buyer` |
| 2 | REMOVE TAG | `in-sequence-b1` |
| 3 | REMOVE FROM WORKFLOW | `MD — Sequence B1: Push Deal Machine` |
| 4 | UPDATE PIPELINE | Stage: "Track Product Buyer" |
| 5 | GRANT MEMBERSHIP | Level: "Track 1: Deal Machine" |
| 6 | SEND EMAIL | Subject: "Your Deal Machine is ready — let's find your first deal" |
| 7 | ENROLL IN WORKFLOW | `MD — Sequence C1: Deal Machine to Coaching` |
| 8 | END | |

---

### WORKFLOW 5: Wealth Shift Purchase Handler

**Name:** `MD — Wealth Shift Purchase Handler`
**Trigger:** Order Submitted → Product = `The Wealth Shift — Reposition Your Money`

| Step | Action | Details |
|------|--------|---------|
| 1 | ADD TAG | `wealth-shift-buyer` |
| 2 | REMOVE TAG | `in-sequence-b2` |
| 3 | REMOVE FROM WORKFLOW | `MD — Sequence B2: Push Wealth Shift` |
| 4 | UPDATE PIPELINE | Stage: "Track Product Buyer" |
| 5 | GRANT MEMBERSHIP | Level: "Track 2: Wealth Shift" |
| 6 | SEND EMAIL | Subject: "Your Wealth Shift guide is ready — let's reposition your money" |
| 7 | ENROLL IN WORKFLOW | `MD — Sequence C2: Wealth Shift to Coaching` |
| 8 | END | |

---

### WORKFLOW 6: Foundation Purchase Handler

**Name:** `MD — Foundation Purchase Handler`
**Trigger:** Order Submitted → Product = `The Foundation — Financial Blueprint`

| Step | Action | Details |
|------|--------|---------|
| 1 | ADD TAG | `foundation-buyer` |
| 2 | REMOVE TAG | `in-sequence-b3` |
| 3 | REMOVE FROM WORKFLOW | `MD — Sequence B3: Push Foundation` |
| 4 | UPDATE PIPELINE | Stage: "Track Product Buyer" |
| 5 | GRANT MEMBERSHIP | Level: "Track 3: Foundation" |
| 6 | SEND EMAIL | Subject: "Your Foundation blueprint is ready — let's build" |
| 7 | ENROLL IN WORKFLOW | `MD — Sequence C3: Foundation to Coaching` |
| 8 | END | |

---

### WORKFLOW 7: Sequence B1 — Push Deal Machine

**Name:** `MD — Sequence B1: Push Deal Machine`
**Trigger:** Enrolled by Questionnaire Router (1 hour after track selection, no purchase)

| Step | Action | Details |
|------|--------|---------|
| 1 | ADD TAG | `in-sequence-b1` |
| 2 | SEND EMAIL | Template: `Seq B1 — Email 1: Active Track` |
| 3 | WAIT | 2 days |
| 4 | IF/ELSE | Has tag `deal-machine-buyer`? → YES: Remove tag + End / NO: Continue |
| 5 | SEND EMAIL | Template: `Seq B1 — Email 2: Gap` |
| 6 | WAIT | 2 days |
| 7 | IF/ELSE | Has tag `deal-machine-buyer`? → YES: Remove tag + End / NO: Continue |
| 8 | SEND EMAIL | Template: `Seq B1 — Email 3: Deal Machine` |
| 9 | WAIT | 3 days |
| 10 | IF/ELSE | Has tag `deal-machine-buyer`? → YES: Remove tag + End / NO: Continue |
| 11 | SEND EMAIL | Template: `Seq B1 — Email 4: Soft Close` |
| 12 | REMOVE TAG | `in-sequence-b1` |
| 13 | END | |

**Timing:** Day 0, 2, 4, 7

---

### WORKFLOW 8: Sequence B2 — Push Wealth Shift

**Name:** `MD — Sequence B2: Push Wealth Shift`
**Trigger:** Enrolled by Questionnaire Router

**Identical structure to B1, except:**
- Tags: `in-sequence-b2` / check for `wealth-shift-buyer`
- Emails: Use `Seq B2` templates
- Timing: Day 0, 2, 4, 7

| Step | Action | Details |
|------|--------|---------|
| 1 | ADD TAG | `in-sequence-b2` |
| 2 | SEND EMAIL | Template: `Seq B2 — Email 1: Passive Track` |
| 3 | WAIT | 2 days |
| 4 | IF/ELSE | Has tag `wealth-shift-buyer`? → YES: End / NO: Continue |
| 5 | SEND EMAIL | Template: `Seq B2 — Email 2: Fee Problem` |
| 6 | WAIT | 2 days |
| 7 | IF/ELSE | Check tag → YES: End / NO: Continue |
| 8 | SEND EMAIL | Template: `Seq B2 — Email 3: Wealth Shift` |
| 9 | WAIT | 3 days |
| 10 | IF/ELSE | Check tag → YES: End / NO: Continue |
| 11 | SEND EMAIL | Template: `Seq B2 — Email 4: Cost of Waiting` |
| 12 | REMOVE TAG | `in-sequence-b2` |
| 13 | END | |

---

### WORKFLOW 9: Sequence B3 — Push Foundation

**Name:** `MD — Sequence B3: Push Foundation`
**Trigger:** Enrolled by Questionnaire Router

**Identical structure to B1, except:**
- Tags: `in-sequence-b3` / check for `foundation-buyer`
- Emails: Use `Seq B3` templates

| Step | Action | Details |
|------|--------|---------|
| 1 | ADD TAG | `in-sequence-b3` |
| 2 | SEND EMAIL | Template: `Seq B3 — Email 1: Foundation Track` |
| 3 | WAIT | 2 days |
| 4 | IF/ELSE | Has tag `foundation-buyer`? → YES: End / NO: Continue |
| 5 | SEND EMAIL | Template: `Seq B3 — Email 2: Eyes Open` |
| 6 | WAIT | 2 days |
| 7 | IF/ELSE | Check tag → YES: End / NO: Continue |
| 8 | SEND EMAIL | Template: `Seq B3 — Email 3: Foundation` |
| 9 | WAIT | 3 days |
| 10 | IF/ELSE | Check tag → YES: End / NO: Continue |
| 11 | SEND EMAIL | Template: `Seq B3 — Email 4: No Shame` |
| 12 | REMOVE TAG | `in-sequence-b3` |
| 13 | END | |

---

### WORKFLOW 10: Sequence C1 — Deal Machine to Coaching

**Name:** `MD — Sequence C1: Deal Machine to Coaching`
**Trigger:** Enrolled by Deal Machine Purchase Handler

| Step | Action | Details |
|------|--------|---------|
| 1 | ADD TAG | `in-sequence-c1` |
| 2 | SEND EMAIL | Template: `Seq C1 — Email 1: Deal Track Welcome` |
| 3 | WAIT | 2 days |
| 4 | IF/ELSE | Has tag `applicant`? → YES: Remove tag + End / NO: Continue |
| 5 | SEND EMAIL | Template: `Seq C1 — Email 2: Down Markets` |
| 6 | WAIT | 2 days |
| 7 | IF/ELSE | applicant? → End or Continue |
| 8 | SEND EMAIL | Template: `Seq C1 — Email 3: Origin Story` |
| 9 | WAIT | 2 days |
| 10 | IF/ELSE | applicant? |
| 11 | SEND EMAIL | Template: `Seq C1 — Email 4: David` |
| 12 | WAIT | 2 days |
| 13 | IF/ELSE | applicant? |
| 14 | SEND EMAIL | Template: `Seq C1 — Email 5: Keisha` |
| 15 | WAIT | 2 days |
| 16 | IF/ELSE | applicant? |
| 17 | SEND EMAIL | Template: `Seq C1 — Email 6: Mistakes` |
| 18 | WAIT | 2 days |
| 19 | IF/ELSE | applicant? |
| 20 | SEND EMAIL | Template: `Seq C1 — Email 7: Coaching Pitch` (**CTA: /apply**) |
| 21 | WAIT | 3 days |
| 22 | IF/ELSE | applicant? |
| 23 | SEND EMAIL | Template: `Seq C1 — Email 8: FAQ` (**CTA: /apply**) |
| 24 | WAIT | 3 days |
| 25 | IF/ELSE | applicant? |
| 26 | SEND EMAIL | Template: `Seq C1 — Email 9: Close` (**CTA: /apply**) |
| 27 | REMOVE TAG | `in-sequence-c1` |
| 28 | END | |

**Timing:** Day 0, 2, 4, 6, 8, 10, 12, 15, 18

---

### WORKFLOW 11: Sequence C2 — Wealth Shift to Coaching

**Name:** `MD — Sequence C2: Wealth Shift to Coaching`
**Trigger:** Enrolled by Wealth Shift Purchase Handler

**Identical structure to C1 (9 emails, same wait pattern), except:**
- Tags: `in-sequence-c2` / check for `applicant`
- Emails: Use `Seq C2` templates
- Timing: Day 0, 2, 4, 7, 9, 11, 13, 15, 18

| Step | Action |
|------|--------|
| 1 | ADD TAG → `in-sequence-c2` |
| 2 | SEND EMAIL → `Seq C2 — Email 1: Wealth Shift Welcome` |
| 3-4 | WAIT 2 days → IF/ELSE `applicant` |
| 5 | SEND EMAIL → `Seq C2 — Email 2: Advisor Secret` |
| 6-7 | WAIT 2 days → IF/ELSE |
| 8 | SEND EMAIL → `Seq C2 — Email 3: $250M Lesson` |
| 9-10 | WAIT 3 days → IF/ELSE |
| 11 | SEND EMAIL → `Seq C2 — Email 4: David Story` |
| 12-13 | WAIT 2 days → IF/ELSE |
| 14 | SEND EMAIL → `Seq C2 — Email 5: Fear` |
| 15-16 | WAIT 2 days → IF/ELSE |
| 17 | SEND EMAIL → `Seq C2 — Email 6: Wealth Mistakes` |
| 18-19 | WAIT 2 days → IF/ELSE |
| 20 | SEND EMAIL → `Seq C2 — Email 7: Coaching Pitch` (CTA: /apply) |
| 21-22 | WAIT 2 days → IF/ELSE |
| 23 | SEND EMAIL → `Seq C2 — Email 8: FAQ` (CTA: /apply) |
| 24-25 | WAIT 3 days → IF/ELSE |
| 26 | SEND EMAIL → `Seq C2 — Email 9: Close` (CTA: /apply) |
| 27 | REMOVE TAG → `in-sequence-c2` |
| 28 | END |

---

### WORKFLOW 12: Sequence C3 — Foundation to Coaching

**Name:** `MD — Sequence C3: Foundation to Coaching`
**Trigger:** Enrolled by Foundation Purchase Handler

**Same structure as C1/C2, except:**
- Tags: `in-sequence-c3` / check for `applicant`
- Emails: Use `Seq C3` templates

| Step | Action |
|------|--------|
| 1 | ADD TAG → `in-sequence-c3` |
| 2 | SEND → `Seq C3 — Email 1: Foundation Welcome` |
| ... | (Same 9-email pattern with IF/ELSE checks for `applicant` between each) |
| 26 | SEND → `Seq C3 — Email 9: Close` (CTA: /apply) |
| 27 | REMOVE TAG → `in-sequence-c3` |
| 28 | END |

**Emails in order:**
1. Welcome to The Foundation
2. I started with less than you think
3. The $680/month Keisha didn't know she was wasting
4. Keisha now owns 3 properties
5. You're not starting late — you're starting right
6. 4 mistakes beginners make
7. Applications are open — 15 spots (CTA: /apply)
8. 8 spots left — your questions answered (CTA: /apply)
9. last email about this (CTA: /apply)

---

### WORKFLOW 13: Application Handler

**Name:** `MD — Application Handler`
**Trigger:** Survey Submitted → `Coaching Application`

| Step | Action | Details |
|------|--------|---------|
| 1 | ADD TAG | `applicant` |
| 2 | REMOVE TAGS | `in-sequence-c1`, `in-sequence-c2`, `in-sequence-c3` |
| 3 | REMOVE FROM WORKFLOWS | All three C sequence workflows |
| 4 | UPDATE PIPELINE | Stage: "Coaching Applicant" |
| 5 | SEND INTERNAL NOTIFICATION | To: your email / Subject: "NEW COACHING APPLICATION: {{contact.first_name}} {{contact.last_name}}" / Include application answers + tags |
| 6 | ENROLL IN WORKFLOW | `MD — Sequence D: Application to Strategy Call` |
| 7 | END | |

---

### WORKFLOW 14: Sequence D — Application to Strategy Call

**Name:** `MD — Sequence D: Application to Strategy Call`
**Trigger:** Enrolled by Application Handler

| Step | Action | Details |
|------|--------|---------|
| 1 | ADD TAG | `in-sequence-d` |
| 2 | SEND EMAIL | Template: `Seq D — Email 1: Application Received` |
| 3 | WAIT | 1 day |
| 4 | IF/ELSE | Has tag `booked-call`? → YES: Remove tag + End / NO: Continue |
| 5 | SEND EMAIL | Template: `Seq D — Email 2: Call Prep` (include calendar booking link) |
| 6 | WAIT | 1 day |
| 7 | IF/ELSE | booked-call? |
| 8 | SEND EMAIL | Template: `Seq D — Email 3: Why 15` |
| 9 | WAIT | 1 day |
| 10 | IF/ELSE | booked-call? |
| 11 | SEND EMAIL | Template: `Seq D — Email 4: Book Call` (include calendar booking link) |
| 12 | REMOVE TAG | `in-sequence-d` |
| 13 | END | |

**Timing:** Day 0, 1, 2, 3

---

### WORKFLOW 15: Strategy Call Booked

**Name:** `MD — Strategy Call Booked`
**Trigger:** Appointment Scheduled → Calendar = `Strategy Call`

| Step | Action | Details |
|------|--------|---------|
| 1 | ADD TAG | `booked-call` |
| 2 | REMOVE TAG | `in-sequence-d` |
| 3 | REMOVE FROM WORKFLOW | `MD — Sequence D` |
| 4 | UPDATE PIPELINE | Stage: "Strategy Call" |
| 5 | SEND EMAIL | Confirmation with date/time/meeting link + prep checklist |
| 6 | SEND INTERNAL NOTIFICATION | Full contact details + application answers + track tag |
| 7 | WAIT | Until 24 hours before appointment |
| 8 | SEND EMAIL | 24-hour reminder with meeting link |
| 9 | WAIT | Until 1 hour before appointment |
| 10 | SEND SMS | "Hey {{contact.first_name}} — our strategy call is in 1 hour. Join here: {{appointment.meeting_link}} — J. Marque" |
| 11 | WAIT | Until 15 min after appointment end |
| 12 | IF/ELSE | Appointment completed? |
| 12a | → YES | ADD TAG `call-completed` → UPDATE PIPELINE "Strategy Call Complete" → END |
| 12b | → NO | ADD TAG `no-show` → Continue to step 13 |
| 13 | WAIT | 30 minutes |
| 14 | SEND EMAIL | "Missed you on the call — let's reschedule" with reschedule link |
| 15 | WAIT | 2 days |
| 16 | IF/ELSE | Still no `call-completed`? → SEND SMS follow-up with calendar link |
| 17 | END | |

---

### WORKFLOW 16: Coaching Enrollment

**Name:** `MD — Coaching Enrollment`
**Trigger:** Payment Received for coaching product OR tag `enrolled-group` manually added

| Step | Action | Details |
|------|--------|---------|
| 1 | ADD TAG | `enrolled-group` |
| 2 | ADD TAG | `active-student` |
| 3 | UPDATE PIPELINE | Stage: "Enrolled" |
| 4 | GRANT MEMBERSHIP | Level: "Coaching" |
| 5 | SEND EMAIL | Welcome email with: portal link, community link, call schedule (Tue/Thu 7PM ET), first assignment |
| 6 | SEND INTERNAL NOTIFICATION | "NEW ENROLLMENT: {{contact.first_name}} — Group Coaching ($5,997)" |
| 7 | CREATE TASK | "Onboard {{contact.first_name}} — check portal + community" / Due: 1 day |
| 8 | WAIT | 180 days (6 months) |
| 9 | REMOVE TAG | `active-student` |
| 10 | ADD TAG | `graduated` |
| 11 | UPDATE PIPELINE | Stage: "Graduate" |
| 12 | SEND EMAIL | "6 months — look how far you've come" (graduation + testimonial request + 1-on-1 hint) |
| 13 | END | |

---

### WORKFLOW 17: Engagement Tracker (optional, build later)

**Name:** `MD — Engagement Tracker`
**Trigger:** Runs daily (cron)

**Purpose:** Auto-apply/remove engagement tags based on email activity.

| Rule | Action |
|------|--------|
| Opened or clicked any email in last 7 days | ADD `engaged-7d` |
| No opens/clicks in 7+ days | REMOVE `engaged-7d` |
| Opened or clicked in last 30 days | ADD `engaged-30d` |
| No opens/clicks in 30+ days | ADD `cold-30`, REMOVE `engaged-30d` |
| No opens/clicks in 90+ days | ADD `cold-90` |

> Build this after the main funnel is running and you have data.

---

### WORKFLOW 18: UTM Source Tagger (optional, build later)

**Name:** `MD — UTM Source Tagger`
**Trigger:** Form Submitted (any opt-in form)

**Purpose:** Apply traffic source tags based on UTM parameters.

| Condition | Action |
|-----------|--------|
| UTM source contains "tiktok" | ADD TAG `source-tiktok` |
| UTM source contains "instagram" | ADD TAG `source-instagram` |
| UTM source contains "gumroad" | ADD TAG `source-gumroad` |
| No UTM or source = "organic" | ADD TAG `source-organic` |

---

## 5. MEMBERSHIP

**Navigate to:** Memberships > + New Course

### Create the Course

**Course Name:** `Money Decoded — Member Portal`

### Create 5 Categories:

| # | Category Name |
|---|--------------|
| 1 | Money Decoded Books |
| 2 | The Deal Machine (Track 1) |
| 3 | The Wealth Shift (Track 2) |
| 4 | The Foundation (Track 3) |
| 5 | Coaching Program |

### Create 6 Offers (access levels):

| Offer Name | Price | Content Access |
|------------|-------|----------------|
| Free Tier | $0 | Category 1: Book 1 only |
| Trilogy | $7 | Category 1: All 3 books |
| Track 1: Deal Machine | $147 | Categories 1 + 2 |
| Track 2: Wealth Shift | $197 | Categories 1 + 3 |
| Track 3: Foundation | $97 | Categories 1 + 4 |
| Coaching | $5,997 | All categories (1-5) |

**Steps to create offers:**
1. Go to **Memberships > Offers > + New Offer**
2. Name: `Free Tier` / Price: $0
3. Select which categories/lessons this offer grants access to
4. Repeat for all 6 offers

### Add Lessons to Each Category:

**Category 1: Money Decoded Books**
- Welcome to Money Decoded (Free Tier+)
- Book 1: The History of Money — PDF download (Free Tier+)
- Book 2: Modern Money — PDF download (Trilogy+)
- Book 3: The Future of Money — PDF download (Trilogy+)

**Category 2: The Deal Machine**
- Deal Machine Overview (Immediate)
- Audio Module 1: Mindset of a Deal Finder (Immediate)
- Audio Module 2: Market Analysis (Drip: Day 3)
- Audio Module 3: Deal Sourcing (Drip: Day 5)
- Audio Module 4: Making Offers (Drip: Day 7)
- Audio Module 5: Due Diligence (Drip: Day 10)
- Audio Module 6: Closing the Deal (Drip: Day 14)
- Templates Library — 12 templates (Immediate)
- Full Deal Machine PDF — 85 pages (Immediate)

**Category 3: The Wealth Shift**
- Wealth Shift Overview (Immediate)
- Audio Module 1: Hidden Cost of Traditional Investing (Immediate)
- Audio Module 2: SDIRA & Solo 401(k) (Drip: Day 3)
- Audio Module 3: Private Lending (Drip: Day 5)
- Audio Module 4: Passive Deal Analysis (Drip: Day 7)
- Audio Module 5: Building Your Passive Portfolio (Drip: Day 10)
- Worksheets Library — 8 worksheets (Immediate)
- Full Wealth Shift PDF — 72 pages (Immediate)

**Category 4: The Foundation**
- Foundation Overview (Immediate)
- Audio Module 1: It All Starts with a Budget (Immediate)
- Audio Module 2: Understanding Risk Management (Drip: Day 3)
- Audio Module 3: Keys to the Safe (Drip: Day 5)
- Audio Modules 4-5: Balance Sheet & Net Worth (Drip: Day 7)
- Audio Module 6: Retirement Accounts (Drip: Day 10)
- Audio Module 7: Your FIRE Team (Drip: Day 14)
- Worksheets Library — 9 worksheets (Immediate)
- Full Foundation PDF — 60 pages (Immediate)

**Category 5: Coaching Program**
- Welcome + Onboarding (orientation video, calendar, community)
- Week 1-4: Foundation phase replays
- Week 5-8: First Deal phase replays
- Week 9-16: Execution phase replays
- Week 17-24: Scale phase replays
- Resource Vault (scripts, templates, contracts)
- Call Recordings Archive

**Setting drip schedules:**
1. Click lesson > Settings > Drip
2. Select "Unlock X days after enrollment"
3. Enter the day number from the tables above

---

## 6. CALENDAR

**Navigate to:** Calendars > + Create Calendar

### Strategy Call Calendar

| Setting | Value |
|---------|-------|
| **Calendar Name** | `Strategy Call — J. Marque` |
| **Calendar Type** | Simple (solo) |
| **Meeting Duration** | 30 minutes |
| **Buffer Time** | 15 minutes (before and after) |
| **Max Bookings per Day** | 4 |
| **Max Bookings per Slot** | 1 |
| **Booking Window** | Min 24 hours notice, max 14 days out |
| **Meeting Location** | Zoom (connect integration) or Google Meet |

### Availability

| Day | Available | Time Slots (Eastern) |
|-----|-----------|---------------------|
| Monday | NO | — |
| Tuesday | YES | 10:00 AM - 12:00 PM, 2:00 PM - 4:00 PM |
| Wednesday | NO | — |
| Thursday | YES | 10:00 AM - 12:00 PM, 2:00 PM - 4:00 PM |
| Friday | YES | 10:00 AM - 12:00 PM |
| Saturday | NO | — |
| Sunday | NO | — |

### Calendar Form Fields

| Field | Type | Required |
|-------|------|----------|
| First Name | Text | YES |
| Last Name | Text | YES |
| Email | Email | YES |
| Phone | Phone | YES |
| "What's your #1 financial goal for the next 12 months?" | Long Text | YES |
| "Which track product did you purchase?" | Dropdown: The Deal Machine / The Wealth Shift / The Foundation / None yet | YES |

### Notification Settings

1. Calendars > Strategy Call > **Notifications**
2. Confirmation email: **ON** (auto-sent on booking)
3. Reminder 24h: **ON**
4. Reminder 1h: **ON** (SMS)
5. Post-appointment follow-up: **ON**
6. Cancellation: **ON**

### Advanced Settings

- Allow reschedule: **YES**
- Allow cancel: **YES** (minimum 2 hours before)
- Reschedule link in confirmation email: **YES**
- Connect Zoom for auto-generated meeting links
- Sync with Google Calendar to prevent double-booking

---

## 7. SMART LISTS

**Navigate to:** CRM > Smart Lists (or CRM > Contacts > Save Filter)

Create these 11 saved filters:

| # | Smart List Name | Filter Criteria |
|---|----------------|-----------------|
| 1 | Hot Leads | Tag = `lead` AND opted in within last 7 days |
| 2 | Trilogy Buyers Not Tracked | Tag = `buyer` AND NOT any track tag AND purchased within last 7 days |
| 3 | Track Active — No Purchase | Tag = `track-active` AND NOT tag = `deal-machine-buyer` AND within last 30 days |
| 4 | Track Passive — No Purchase | Tag = `track-passive` AND NOT tag = `wealth-shift-buyer` AND within last 30 days |
| 5 | Track Foundation — No Purchase | Tag = `track-foundation` AND NOT tag = `foundation-buyer` AND within last 30 days |
| 6 | Track Buyers Not Applied | Any buyer tag (`deal-machine-buyer` OR `wealth-shift-buyer` OR `foundation-buyer`) AND NOT tag = `applicant` AND within last 60 days |
| 7 | Applicants Not Booked | Tag = `applicant` AND NOT tag = `booked-call` AND applied within last 14 days |
| 8 | Calls This Week | Tag = `booked-call` AND appointment date = this week |
| 9 | No-Shows | Tag = `no-show` AND NOT tag = `call-completed` |
| 10 | Active Students | Tag = `active-student` |
| 11 | Cold 90 Days | Tag = `cold-90` |

**For each smart list:**
1. Go to CRM > Contacts
2. Click **Filters**
3. Add the filter conditions from the table
4. Click **Save Filter** (or **Save as Smart List**)
5. Name it per the table above

---

## 8. COMMUNITY

**Navigate to:** Memberships > Communities

### Create Community

**Community Name:** `FIRE Coaching Community`

### Create 6 Channels:

| Channel | Purpose |
|---------|---------|
| `#introductions` | New members introduce themselves |
| `#general` | Daily discussion |
| `#deal-analysis` | Post deals for group review |
| `#wins` | Celebrate closed deals and milestones |
| `#resources` | Shared tools, links, templates |
| `#questions` | Ask anything |

### Access Control

- Restricted to contacts with tag `active-student` OR `graduated`
- Link community access to the **Coaching** offer in the membership

---

## BUILD ORDER CHECKLIST

Complete in this order for fastest time to live:

- [ ] **Phase 1 (Day 1):** Run `ghl-setup.py` → creates tags + custom fields
- [ ] **Phase 1:** Create Pipeline (Section 1)
- [ ] **Phase 1:** Create all 7+ Products (Section 2)
- [ ] **Phase 2 (Day 1-2):** Build Funnel Steps 1-3 (Opt-in, Delivery, Questionnaire)
- [ ] **Phase 2:** Build Workflows 1-3 (Sequence A, Trilogy Handler, Router)
- [ ] **Phase 3 (Day 2):** Build Funnel Steps 4A-4C + 5 (Track offers + Thank You)
- [ ] **Phase 3:** Build Workflows 4-9 (Purchase Handlers + B Sequences)
- [ ] **Phase 4 (Day 2-3):** Build Workflows 10-12 (C Sequences)
- [ ] **Phase 4:** Build Workflow 13 (Application Handler)
- [ ] **Phase 4:** Build Funnel Step 6 (Application Page) + Survey
- [ ] **Phase 5 (Day 3):** Build Workflow 14 (Sequence D)
- [ ] **Phase 5:** Build Workflow 15 (Calendar Handler)
- [ ] **Phase 5:** Create Calendar (Section 6)
- [ ] **Phase 5:** Build Workflow 16 (Enrollment)
- [ ] **Phase 6 (Day 3):** Create Membership + Offers (Section 5)
- [ ] **Phase 6:** Create Smart Lists (Section 7)
- [ ] **Phase 6:** Create Community (Section 8)
- [ ] **Phase 7:** Build Workflows 17-18 (Engagement + UTM — optional, do after launch)
- [ ] **Phase 8: TEST** — Walk through full funnel end-to-end with a test contact

---

## TESTING CHECKLIST

After building everything, test the full flow:

1. [ ] Submit opt-in form → Verify: tag `lead` applied, Sequence A email 1 received, pipeline Stage 1
2. [ ] Purchase $7 trilogy → Verify: tags `buyer` + `trilogy-purchased`, Sequence A stops, pipeline Stage 2
3. [ ] Select Active track → Verify: tag `track-active`, redirected to Deal Machine offer page, pipeline Stage 3
4. [ ] Wait 1 hour without purchasing → Verify: enrolled in B1 sequence, Email 1 received
5. [ ] Purchase $147 Deal Machine → Verify: tag `deal-machine-buyer`, B1 stops, C1 starts, pipeline Stage 4
6. [ ] Repeat steps 3-5 for Passive and Foundation tracks
7. [ ] Submit coaching application → Verify: tag `applicant`, C sequence stops, D starts, internal notification received
8. [ ] Book strategy call → Verify: tag `booked-call`, D stops, confirmation email, pipeline Stage 6
9. [ ] Complete call → Verify: tag `call-completed`, pipeline Stage 7
10. [ ] Process coaching payment → Verify: tag `enrolled-group`, membership granted, welcome email, pipeline Stage 8
11. [ ] Check all email templates render correctly in test inbox
12. [ ] Verify membership portal shows correct content per access level
