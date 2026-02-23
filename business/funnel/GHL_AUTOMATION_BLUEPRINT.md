# GHL AUTOMATION BLUEPRINT — Money Decoded Funnel
## J. Marque Brand | Complete Build Guide
### Created: 2026-02-22

---

## TABLE OF CONTENTS

1. [Product Setup](#1-product-setup)
2. [Funnel Pages](#2-funnel-pages-in-ghl)
3. [Tag Architecture](#3-complete-tag-architecture)
4. [Email Workflows](#4-four-email-workflows)
5. [Pipeline Setup](#5-pipeline-setup)
6. [Calendar Setup](#6-calendar-setup)
7. [Membership / Course Area](#7-membership--course-area)
8. [Reporting & KPIs](#8-reporting--kpis)

---

## 1. PRODUCT SETUP

Navigate to **Payments > Products** in your GHL sub-account. Create each product exactly as specified.

### Product 1: Book 1 — FREE Lead Magnet

| Field | Value |
|-------|-------|
| **Product Name** | Money Decoded: The History of Money (FREE) |
| **Product Type** | Digital Product |
| **Price** | $0.00 |
| **Payment Type** | One-time |
| **Description** | FREE ebook — The History of Money by J. Marque. How we went from gold to government promises. |
| **Digital Files** | Upload `MoneyDecoded_Book1_HistoryOfMoney.pdf` |
| **Delivery Method** | Workflow email (not e-commerce store — zero friction) |
| **Membership Access** | Grant "Free Tier" level in Money Decoded membership |

**How to create:**
1. Go to **Payments > Products > + Add Product**
2. Name: `Money Decoded: The History of Money (FREE)`
3. Price: `0.00`
4. Type: One-time
5. Description: paste the text above
6. Under **Digital Files**, click **Upload** and select the Book 1 PDF from your computer
7. Click **Save**

**Note:** This product is NOT sold through a checkout. It is delivered via workflow when someone submits the opt-in form. No order form needed — just a form with Name + Email fields.

---

### Product 2: Money Decoded Trilogy — $7

| Field | Value |
|-------|-------|
| **Product Name** | Money Decoded Trilogy — All 3 Books |
| **Product Type** | Digital Product |
| **Price** | $7.00 |
| **Payment Type** | One-time |
| **Description** | The complete Money Decoded trilogy: The History of Money, Modern Money, and The Future of Money. 28,000+ words of financial education by J. Marque. |
| **Digital Files** | Upload all 3 PDFs: Book 1, Book 2, Book 3 |
| **Delivery Method** | Workflow email with download links + Membership portal access |
| **Membership Access** | Grant "Trilogy" level in Money Decoded membership |

**How to create:**
1. Go to **Payments > Products > + Add Product**
2. Name: `Money Decoded Trilogy — All 3 Books`
3. Price: `7.00`
4. Type: One-time
5. Upload all 3 book PDFs under Digital Files
6. Click **Save**

---

### Product 3: FIRE Workbook — $97

| Field | Value |
|-------|-------|
| **Product Name** | FIRE Workbook — 7-Module Wealth Execution System |
| **Product Type** | Digital Product |
| **Price** | $97.00 |
| **Payment Type** | One-time |
| **Description** | The FIRE (Financially Independent, Retire Early) Workbook. 7 modules: Budget P&L, Risk Management, Lender-Ready Checklist, Balance Sheet, Net Worth, Retirement Accounts, Your FIRE Team. |
| **Digital Files** | Upload FIRE Workbook PDF (25 pages, 7 modules) |
| **Delivery Method** | Membership portal access only (premium feel) |
| **Membership Access** | Grant "FIRE Workbook" level in Money Decoded membership |
| **Upsell Type** | One-click upsell (uses stored payment token from $7 purchase) |

**How to create:**
1. Go to **Payments > Products > + Add Product**
2. Name: `FIRE Workbook — 7-Module Wealth Execution System`
3. Price: `97.00`
4. Type: One-time
5. Upload FIRE Workbook PDF
6. Click **Save**

**Also create the Order Bump version:**
1. Go to **Payments > Products > + Add Product**
2. Name: `FIRE Workbook — Order Bump`
3. Price: `67.00`
4. Type: One-time
5. Same digital files as $97 product
6. Description: `Add the FIRE Workbook to your order and save $30! 7 modules that take you from understanding money to building wealth.`
7. Click **Save**

This bump version appears as a checkbox on the $7 order form at a discounted $67 price.

---

### Product 4: Group Coaching — $5,997

| Field | Value |
|-------|-------|
| **Product Name** | FIRE + Real Estate Coaching — 6 Month Program |
| **Product Type** | Service |
| **Price** | $5,997.00 |
| **Payment Type** | One-time (also create recurring version below) |
| **Description** | 6-month group coaching program. 2 live calls/week, deal review, private community, FIRE execution system, the framework behind $250M in RE transactions. |
| **Delivery Method** | Application required — no direct checkout |
| **Membership Access** | Grant "Coaching" level in Money Decoded membership + Community access |

**How to create:**
1. Go to **Payments > Products > + Add Product**
2. Name: `FIRE + Real Estate Coaching — 6 Month Program`
3. Price: `5997.00`
4. Type: One-time
5. Click **Save**

**Also create payment plan products:**

| Plan | Product Name | Price | Billing |
|------|-------------|-------|---------|
| 3-Pay | `Coaching — 3-Pay Plan` | $1,999.00 | Recurring, 3 payments, monthly |
| 6-Pay | `Coaching — 6-Pay Plan` | $999.00 | Recurring, 6 payments, monthly |

To create recurring products:
1. **Payments > Products > + Add Product**
2. Name: `Coaching — 3-Pay Plan`
3. Price: `1999.00`
4. Type: **Recurring**
5. Billing Period: Monthly
6. Number of Payments: 3
7. Click **Save**
8. Repeat for the 6-Pay version

**Note:** Coaching is NOT sold through a funnel checkout. The payment link is sent manually after the strategy call closes the sale. Use **Payments > Payment Links** to generate a link for the client's chosen plan (pay-in-full, 3-pay, or 6-pay).

---

### Product 5 (Optional): 1-on-1 Coaching — $14,997

| Field | Value |
|-------|-------|
| **Product Name** | Premium 1-on-1 Coaching — 6 Months |
| **Product Type** | Service |
| **Price** | $14,997.00 |
| **Payment Type** | One-time |
| **Delivery Method** | Direct offer to group coaching graduates — no funnel page |

Create the same way. This is an upsell offered on strategy calls or to existing group students.

---

## 2. FUNNEL PAGES IN GHL

Navigate to **Sites > Funnels > + New Funnel**.

**Funnel Name:** `Money Decoded`
**Funnel Steps:** 5

---

### Step 1: Opt-In Page

**Step Name:** `Opt-In`
**Step URL:** `/free-ebook`
**Purpose:** Capture email address in exchange for Book 1

**Page Elements (top to bottom):**

| Section | Content |
|---------|---------|
| **Hero Section** | Headline: "The Financial Education They Didn't Want You to Have" |
| **Sub-headline** | "Get the FREE ebook that reveals 2,600 years of monetary manipulation — and why everything you were taught about money is wrong." |
| **Book Cover Image** | Money Decoded Book 1 cover (gold on black) |
| **Opt-In Form** | 2 fields: First Name, Email Address |
| **CTA Button** | Text: "SEND ME THE FREE EBOOK" / Color: Gold (#D4AF37) on Black |
| **Social Proof** | "Join 2,000+ readers who took the red pill on money" |
| **Bullet Points** | 3-5 key takeaways from Book 1 (use from sales-copy.md) |
| **Author Bio** | "$250M+ in real estate. USMC Veteran. No fluff. No theory. Just truth." |

**Form Configuration:**
1. Drag a **Form** element onto the page
2. Add fields: `First Name` (required), `Email` (required)
3. Under **Form Settings > On Submit**:
   - Action: **Open URL / Redirect**
   - Redirect URL: Next funnel step (Delivery + Tripwire)
4. Under **Form Settings > Advanced**:
   - Add Hidden Field: `funnel_source` = `money-decoded-optin`
5. Assign to **Workflow**: `MD — Sequence A: Book 1 to Trilogy` (configured in Section 4)

**Workflow triggers on form submission — NOT on product purchase. This is a free opt-in, not a sale.**

---

### Step 2: Delivery + Tripwire Page

**Step Name:** `Delivery-Tripwire`
**Step URL:** `/book-download`
**Purpose:** Deliver Book 1 + sell $7 Trilogy

**Page Elements (top to bottom):**

| Section | Content |
|---------|---------|
| **Confirmation Banner** | "Your free ebook is on its way to your inbox. Start reading below." |
| **Embedded Book 1** | Either iframe reader or "Download Book 1 Now" button linking to PDF |
| **Divider / Transition** | "You've seen Chapter 1. Here's the full story." |
| **Trilogy Offer Section** | Headline: "Get the Complete Trilogy for Just $7" |
| **Three Book Covers** | Side by side: Book 1, Book 2, Book 3 |
| **Bullet Points** | What's in each book (use 3-line descriptions from sales-copy.md) |
| **Order Form** | 2-step order form configured below |
| **Guarantee** | "If you don't learn something that changes how you think about money, email me and I'll refund every penny." |
| **Countdown Timer** | Optional: 48-hour countdown for $7 price (creates urgency) |

**Order Form Configuration:**

1. Drag an **Order Form** element onto the page
2. Form Type: **2-Step Order Form**
   - Step 1: Email (pre-filled from opt-in), First Name
   - Step 2: Card Number, Expiration, CVC
3. **Attach Product:** Select `Money Decoded Trilogy — All 3 Books` ($7.00)
4. **Add Order Bump:**
   - Click **+ Add Bump**
   - Select product: `FIRE Workbook — Order Bump` ($67.00)
   - Bump Headline: "ONE-TIME OFFER: Add the FIRE Workbook for $67 (Save $30)"
   - Bump Description: "The trilogy shows you how money works. The FIRE Workbook shows you what to DO about it. 7 modules: budget, insurance, lender prep, net worth, retirement accounts, and your first deal checklist. This $30 discount is only available right now."
   - Bump Position: Below payment fields, above submit button
   - Bump Style: Checkbox with yellow highlight border
5. **Submit Button:** Text: "GET THE TRILOGY — $7" / Color: Gold on Black
6. **On Submit:** Redirect to Step 3 (OTO page)

---

### Step 3: OTO Upsell Page

**Step Name:** `OTO-Upsell`
**Step URL:** `/special-offer`
**Purpose:** One-click upsell to $97 FIRE Workbook

**Important:** This page only appears if the buyer did NOT purchase the FIRE Workbook via the order bump. If they bought the $67 bump, skip this step and go directly to Thank You.

**Implementing the skip logic:**
- In the workflow triggered by the $7 purchase, add an **If/Else** condition:
  - IF Contact has tag `fire-buyer` → redirect to Step 4 (Thank You)
  - ELSE → redirect to Step 3 (OTO page)

Alternatively, use GHL's built-in funnel conditional redirect:
1. In funnel Step 2 settings, under **After Form Submission**:
   - Default redirect: Step 3 (OTO)
2. In the purchase workflow, if the bump was purchased, update the contact's `funnel_redirect` custom field to skip to Step 4

**Page Elements (top to bottom):**

| Section | Content |
|---------|---------|
| **Confirmation Header** | "Your trilogy is confirmed! Check your email for download links." |
| **Transition** | "Before you go — I have something that makes the trilogy 10x more powerful." |
| **Video (optional)** | 60-90 second AI avatar video explaining the FIRE Workbook value |
| **Headline** | "The Books Show You How Money Works. This Workbook Shows You What to DO About It." |
| **Workbook Cover + Module List** | Display all 7 modules with descriptions |
| **Price Anchor** | "Normally $197 — yours today for just $97" |
| **One-Click Button** | Text: "YES — Add the FIRE Workbook to My Order ($97)" |
| **Decline Link** | Text: "No thanks, I'll figure it out on my own" → redirects to Step 4 |

**One-Click Upsell Setup:**

1. In **Funnel Settings** for this step:
   - Enable **One-Click Upsell**
   - Attach product: `FIRE Workbook — 7-Module Wealth Execution System` ($97.00)
   - Processor: Stripe (uses stored payment token from Step 2)
2. **Accept Button:** Charges $97 immediately, redirects to Step 4
3. **Decline Link:** Redirects to Step 3B (Downsell) or Step 4 (Thank You)

**One-click upsell mechanics:**
- The buyer's card info was captured and tokenized during the $7 purchase on Step 2
- When they click "YES — Add the FIRE Workbook," Stripe charges the stored token instantly
- No re-entry of card information required
- This is what makes 20%+ OTO conversion rates possible

---

### Step 3B: OTO Downsell Page (Optional)

**Step Name:** `OTO-Downsell`
**Step URL:** `/last-chance`
**Purpose:** Catch people who decline $97 with a lower offer

**Only create this step if you want to test a downsell. Otherwise skip to Step 4.**

| Section | Content |
|---------|---------|
| **Headline** | "Wait — how about a lighter version?" |
| **Offer** | FIRE Workbook Lite: Modules 1, 3, and 7 only — $47 |
| **One-Click Button** | "YES — Give Me the Starter Pack ($47)" |
| **Decline Link** | "No thanks" → Step 4 |

Create a separate product for this: `FIRE Workbook Lite — $47` with the same upsell configuration.

---

### Step 4: Thank You / Confirmation Page

**Step Name:** `Thank-You`
**Step URL:** `/thank-you`
**Purpose:** Confirm purchase, deliver access, tease coaching

**Page Elements (top to bottom):**

| Section | Content |
|---------|---------|
| **Confirmation** | "You're in. Your purchase is confirmed." |
| **What's Next** | "Check your email for download links and login details for your member portal." |
| **Member Portal Button** | "Access Your Member Portal" → link to membership login |
| **Social Share** | "Share with someone who needs to see this" + social buttons |
| **Coaching Teaser** | "Ready to go from knowledge to action? I work with a small group of people every quarter who want to build real estate wealth using the FIRE system. When you're ready, I'll tell you about it." |
| **Social Proof** | Testimonial quotes from David, Keisha |

---

### Step 5: Coaching Application Page

**Step Name:** `Apply`
**Step URL:** `/apply`
**Purpose:** Qualify and capture coaching applicants

**This page is NOT part of the linear funnel flow.** It is linked from Sequence C emails (Emails 7, 8, 9). It can also be accessed directly via URL.

**Page Elements (top to bottom):**

| Section | Content |
|---------|---------|
| **Headline** | "Apply for the FIRE + Real Estate Coaching Program" |
| **Sub-headline** | "15 spots per cohort. 6 months. The system behind $250M in transactions." |
| **Program Details** | What's included (2 calls/week, deal review, community, system) |
| **Investment** | "$5,997 — financing available" |
| **Application Form** | GHL Survey form (configured below) |

**Application Form (GHL Survey):**

1. Navigate to **Sites > Forms / Surveys > + New Survey**
2. Survey Name: `Coaching Application`
3. Fields:

| Field | Type | Required |
|-------|------|----------|
| First Name | Text | YES |
| Last Name | Text | YES |
| Email | Email | YES |
| Phone | Phone | YES |
| City, State | Text | YES |
| Q1: "Now that you know how money really works — what do you want to do about it?" | Multiple Choice: A) Keep learning, B) Start making money through RE, C) Already in RE — need to level up | YES |
| Q2: "What best describes where you are right now?" | Multiple Choice: A) Complete beginner, B) Studying but no action, C) Active but messy systems, D) Experienced and ready for next level | YES |
| Q3: "Do you have access to capital (savings, retirement accounts, credit, etc.) to invest in your first property within 90 days?" | Multiple Choice: A) Yes, B) Working on it, C) Not yet | YES |
| Q4: "What's your biggest financial goal in the next 12 months?" | Long Text | YES |

4. **On Submit:**
   - Action: Redirect to a confirmation page (or show inline "Application received" message)
   - Trigger workflow: `MD — Sequence D: Application to Strategy Call`

---

## 3. COMPLETE TAG ARCHITECTURE

### Lifecycle Tags

| Tag | Trigger | Applied By | What It Does |
|-----|---------|-----------|--------------|
| `lead` | Form submission on opt-in page | Workflow: Sequence A | Identifies free subscriber. Enrolls in Sequence A. Adds to pipeline Stage 1. |
| `book1-downloaded` | Delivery email sent/opened | Workflow: Sequence A | Confirms Book 1 was delivered. Used for engagement tracking. |
| `buyer` | $7 Trilogy purchased (Stripe payment received) | Workflow: Purchase trigger | Identifies paying customer. Moves pipeline to Stage 2. |
| `trilogy-purchased` | $7 Trilogy purchased | Workflow: Purchase trigger | Specific product tag. Used for content segmentation and delivery. |
| `fire-buyer` | $97 FIRE Workbook purchased (OTO or bump or email) | Workflow: Purchase trigger | Mid-tier customer. Moves pipeline to Stage 3. Starts Sequence C. |
| `applicant` | Coaching application form submitted | Workflow: Sequence D | High-intent lead. Moves pipeline to Stage 4. Starts Sequence D. |
| `booked-call` | Strategy call booked via GHL Calendar | Workflow: Calendar trigger | Moves pipeline to Stage 5. Triggers confirmation + reminder automation. |
| `call-completed` | Strategy call marked complete (manual or calendar event ended) | Workflow: Calendar trigger | Moves pipeline to Stage 6. |
| `enrolled-group` | $5,997 group coaching payment received | Workflow: Manual trigger after close | Active coaching student. Moves pipeline to Stage 7. Grants coaching membership. |
| `enrolled-1on1` | $14,997 1-on-1 payment received | Workflow: Manual trigger after close | Premium student. Moves pipeline to Stage 8. |
| `active-student` | Currently in coaching program (within 6-month window) | Workflow: Auto-applied on enrollment | Used for community access and broadcast segmentation. |
| `graduated` | 6-month coaching program completed | Workflow: Date-based (enrollment date + 180 days) | Alumni status. Eligible for testimonial request and 1-on-1 upgrade pitch. |

### Engagement Tags

| Tag | Trigger | Applied By | What It Does |
|-----|---------|-----------|--------------|
| `engaged-7d` | Opened or clicked any email in last 7 days | Workflow: Engagement automation | Segments active contacts for broadcast frequency decisions. |
| `engaged-30d` | Opened or clicked any email in last 30 days | Workflow: Engagement automation | Used for list hygiene and re-engagement triggers. |
| `cold-30` | No email open or click for 30 days | Workflow: Inactivity automation | Warning flag. Reduce send frequency. |
| `cold-90` | No email open or click for 90 days | Workflow: Inactivity automation | Trigger re-engagement sequence (5 emails over 14 days). If no response, suppress from sends. |
| `unsubscribed` | Clicked unsubscribe link | GHL automatic | Suppressed from all sends. Do NOT delete — keep in CRM for reporting. |

### Segmentation Tags

| Tag | Trigger | Applied By | What It Does |
|-----|---------|-----------|--------------|
| `educate` | Application Q1 = "Keep learning" AND Q2 = "Beginner" or "Studying" | Workflow: Application routing | Slower nurture path. More value emails before coaching pitch. |
| `activate` | Application Q1 = "Start making money through RE" | Workflow: Application routing | Standard group coaching track. $5,997 pitch. |
| `scale` | Application Q1 = "Already in RE — need to level up" AND Q2 = "Active" or "Experienced" | Workflow: Application routing | Fast-track to strategy call. Potentially pitch 1-on-1 directly. |
| `oto-declined` | Declined $97 OTO page (clicked "No thanks") | Workflow: Funnel redirect tracking | Used in Sequence B to tailor email copy (they already saw the offer once). |
| `bump-purchased` | Bought $67 FIRE Workbook via order bump | Workflow: Purchase trigger | Skip OTO page. Same product delivery as fire-buyer. Also apply `fire-buyer` tag. |
| `source-tiktok` | UTM source = tiktok | Workflow: UTM capture on opt-in | Traffic source tracking for ROI analysis. |
| `source-instagram` | UTM source = instagram | Workflow: UTM capture on opt-in | Traffic source tracking for ROI analysis. |
| `source-organic` | UTM source = organic or no UTM | Workflow: UTM capture on opt-in | Traffic source tracking for ROI analysis. |
| `source-gumroad` | UTM source = gumroad | Workflow: UTM capture on opt-in | Tracks redirects from Gumroad profile. |

### Sequence Status Tags

| Tag | Trigger | Applied By | What It Does |
|-----|---------|-----------|--------------|
| `in-sequence-a` | Enrolled in Sequence A | Workflow: Sequence A start | Prevents duplicate enrollment. Removed when sequence completes or goal hits. |
| `in-sequence-b` | Enrolled in Sequence B | Workflow: Sequence B start | Same. |
| `in-sequence-c` | Enrolled in Sequence C | Workflow: Sequence C start | Same. |
| `in-sequence-d` | Enrolled in Sequence D | Workflow: Sequence D start | Same. |
| `completed-sequence-a` | Finished all 6 Sequence A emails without buying | Workflow: Sequence A completion | Moves to broadcast list. |
| `no-show` | Booked strategy call but did not attend | Workflow: Calendar no-show trigger | Triggers no-show follow-up automation. |

---

## 4. FOUR EMAIL WORKFLOWS

Navigate to **Automation > Workflows > + Create Workflow > Start from Scratch** for each workflow.

---

### WORKFLOW A: Book 1 to Trilogy ($7)

**Workflow Name:** `MD — Sequence A: Book 1 to Trilogy`
**Trigger Type:** Form Submitted
**Trigger Filter:** Form = `Money Decoded Opt-In` (the opt-in page form)

**Goal:** Contact purchases $7 Trilogy
**Goal Action:** When goal is achieved:
1. Remove contact from this workflow
2. Remove tag `in-sequence-a`
3. Add tags: `buyer`, `trilogy-purchased`
4. Enroll in Workflow B (if OTO was declined) OR Workflow C (if OTO/bump was purchased)

---

**STEP-BY-STEP WORKFLOW BUILD:**

```
TRIGGER: Form Submitted → "Money Decoded Opt-In"
  │
  ├─ Step 1: ADD TAG → "lead"
  │
  ├─ Step 2: ADD TAG → "in-sequence-a"
  │
  ├─ Step 3: ADD TAG → "book1-downloaded"
  │
  ├─ Step 4: ADD TO PIPELINE
  │    Pipeline: "Money Decoded Funnel"
  │    Stage: "Lead"
  │
  ├─ Step 5: GRANT MEMBERSHIP ACCESS
  │    Membership: "Money Decoded"
  │    Level: "Free Tier"
  │
  ├─ Step 6: SEND EMAIL → "Seq A — Email 1: You just took the red pill on money"
  │    Subject: You just took the red pill on money
  │    Preview: Welcome to the other side.
  │    Body: [Full Email 1 from Sequence A file]
  │    From: J. Marque <jmarque@yourdomain.com>
  │    Include download link for Book 1 PDF (Media Library URL)
  │
  ├─ Step 7: WAIT → 1 day
  │
  ├─ Step 8: IF/ELSE → Contact has tag "buyer"?
  │    ├─ YES → GO TO: End (Goal achieved — exit workflow)
  │    └─ NO → Continue
  │
  ├─ Step 9: SEND EMAIL → "Seq A — Email 2: What happened on August 15, 1971"
  │    Subject: What happened on August 15, 1971
  │    Preview: One Sunday night changed everything.
  │    Body: [Full Email 2 from Sequence A file]
  │
  ├─ Step 10: WAIT → 1 day
  │
  ├─ Step 11: IF/ELSE → Contact has tag "buyer"?
  │    ├─ YES → GO TO: End
  │    └─ NO → Continue
  │
  ├─ Step 12: SEND EMAIL → "Seq A — Email 3: The $847/year lie your bank is telling you"
  │    Subject: The $847/year lie your bank is telling you
  │    Preview: Your savings account is costing you money.
  │    Body: [Full Email 3 from Sequence A file]
  │
  ├─ Step 13: WAIT → 2 days
  │
  ├─ Step 14: IF/ELSE → Contact has tag "buyer"?
  │    ├─ YES → GO TO: End
  │    └─ NO → Continue
  │
  ├─ Step 15: SEND EMAIL → "Seq A — Email 4: BlackRock just bet $4.7 billion on this"
  │    Subject: BlackRock just bet $4.7 billion on this
  │    Preview: When the biggest fund on earth moves, pay attention.
  │    Body: [Full Email 4 from Sequence A file]
  │    INCLUDE CTA LINK: Link to funnel Step 2 (Delivery + Tripwire page with $7 order form)
  │
  ├─ Step 16: WAIT → 1 day
  │
  ├─ Step 17: IF/ELSE → Contact has tag "buyer"?
  │    ├─ YES → GO TO: End
  │    └─ NO → Continue
  │
  ├─ Step 18: SEND EMAIL → "Seq A — Email 5: I read all 3 in one weekend"
  │    Subject: "I read all 3 in one weekend" — Marcus, Atlanta
  │    Preview: His exact words after finishing Book 3.
  │    Body: [Full Email 5 from Sequence A file]
  │    INCLUDE CTA LINK: Funnel Step 2
  │
  ├─ Step 19: WAIT → 2 days
  │
  ├─ Step 20: IF/ELSE → Contact has tag "buyer"?
  │    ├─ YES → GO TO: End
  │    └─ NO → Continue
  │
  ├─ Step 21: SEND EMAIL → "Seq A — Email 6: Last chance at $7 — price going up"
  │    Subject: Last chance at $7 — price going up
  │    Preview: This is my last email about this.
  │    Body: [Full Email 6 from Sequence A file]
  │    INCLUDE CTA LINK: Funnel Step 2
  │
  ├─ Step 22: REMOVE TAG → "in-sequence-a"
  │
  ├─ Step 23: ADD TAG → "completed-sequence-a"
  │
  └─ END
```

**Schedule / Timing Summary:**

| Email | Day | Wait Before | Subject |
|-------|-----|-------------|---------|
| 1 | 0 | Immediate | You just took the red pill on money |
| 2 | 1 | 1 day | What happened on August 15, 1971 |
| 3 | 2 | 1 day | The $847/year lie your bank is telling you |
| 4 | 4 | 2 days | BlackRock just bet $4.7 billion on this |
| 5 | 5 | 1 day | "I read all 3 in one weekend" — Marcus, Atlanta |
| 6 | 7 | 2 days | Last chance at $7 — price going up |

**Goal Configuration in GHL:**
1. In workflow settings, click **Workflow Settings** (gear icon)
2. Under **Goal Event**, select: **Product Purchased**
3. Product: `Money Decoded Trilogy — All 3 Books`
4. When goal hits: **End workflow** for this contact

---

### WORKFLOW: Trilogy Purchase Handler

**Workflow Name:** `MD — Trilogy Purchase Handler`
**Trigger Type:** Payment Received (Stripe) / Order Submitted
**Trigger Filter:** Product = `Money Decoded Trilogy — All 3 Books`

This is a SEPARATE workflow from Sequence A. It handles what happens when someone buys the $7 trilogy — regardless of whether they came from Sequence A emails or directly from the funnel page.

```
TRIGGER: Order Submitted → Product = "Money Decoded Trilogy"
  │
  ├─ Step 1: ADD TAG → "buyer"
  │
  ├─ Step 2: ADD TAG → "trilogy-purchased"
  │
  ├─ Step 3: REMOVE TAG → "in-sequence-a"
  │    (Removes them from Sequence A if they were in it)
  │
  ├─ Step 4: REMOVE FROM WORKFLOW → "MD — Sequence A: Book 1 to Trilogy"
  │    (Stops Sequence A emails)
  │
  ├─ Step 5: UPDATE PIPELINE STAGE
  │    Pipeline: "Money Decoded Funnel"
  │    Stage: "Buyer ($7)"
  │
  ├─ Step 6: GRANT MEMBERSHIP ACCESS
  │    Membership: "Money Decoded"
  │    Level: "Trilogy"
  │
  ├─ Step 7: SEND EMAIL → "Trilogy Purchase Confirmation"
  │    Subject: Smart move — your trilogy is ready
  │    Body: Download links for all 3 books + membership portal login
  │
  ├─ Step 8: WAIT → 5 minutes
  │    (Allow time for OTO page decision)
  │
  ├─ Step 9: IF/ELSE → Contact has tag "fire-buyer"?
  │    ├─ YES → GO TO: End (they already bought FIRE — Workflow C will trigger from FIRE purchase handler)
  │    └─ NO → Continue
  │
  ├─ Step 10: ADD TAG → "oto-declined"
  │
  ├─ Step 11: ENROLL IN WORKFLOW → "MD — Sequence B: Trilogy to FIRE Workbook"
  │
  └─ END
```

**Note on the 5-minute wait (Step 8):** After the $7 purchase, the buyer lands on the OTO page. They may take 1-3 minutes to decide. The 5-minute wait gives them time to purchase the OTO before routing them into Sequence B. If they buy the $97 FIRE Workbook during those 5 minutes, the `fire-buyer` tag gets applied by the FIRE Purchase Handler workflow, and the If/Else catches it.

---

### WORKFLOW: FIRE Workbook Purchase Handler

**Workflow Name:** `MD — FIRE Workbook Purchase Handler`
**Trigger Type:** Payment Received (Stripe) / Order Submitted
**Trigger Filter:** Product = `FIRE Workbook` (any version — $97 OTO, $67 bump, or $47 downsell)

```
TRIGGER: Order Submitted → Product contains "FIRE Workbook"
  │
  ├─ Step 1: ADD TAG → "fire-buyer"
  │
  ├─ Step 2: IF/ELSE → Contact has tag "bump-purchased"?
  │    ├─ YES → Continue (came from order bump, already has "buyer" tag)
  │    └─ NO → ADD TAG → "oto-purchased" (came from OTO page)
  │
  ├─ Step 3: REMOVE TAG → "in-sequence-b"
  │
  ├─ Step 4: REMOVE FROM WORKFLOW → "MD — Sequence B: Trilogy to FIRE Workbook"
  │    (Stops Sequence B if they were in it)
  │
  ├─ Step 5: UPDATE PIPELINE STAGE
  │    Pipeline: "Money Decoded Funnel"
  │    Stage: "FIRE Buyer ($97)"
  │
  ├─ Step 6: GRANT MEMBERSHIP ACCESS
  │    Membership: "Money Decoded"
  │    Level: "FIRE Workbook"
  │
  ├─ Step 7: SEND EMAIL → "FIRE Workbook Confirmation"
  │    Subject: Your FIRE Workbook is ready — let's build
  │    Body: Membership portal login link + Module 1 instructions
  │
  ├─ Step 8: ENROLL IN WORKFLOW → "MD — Sequence C: FIRE to Coaching Application"
  │
  └─ END
```

---

### WORKFLOW B: Trilogy to FIRE Workbook ($97)

**Workflow Name:** `MD — Sequence B: Trilogy to FIRE Workbook`
**Trigger Type:** Workflow Enrollment (enrolled by Trilogy Purchase Handler)
**Do NOT use a purchase trigger — this workflow is only for people who bought the trilogy but skipped the OTO.**

**Goal:** Contact purchases $97 FIRE Workbook
**Goal Action:** Remove from workflow, handled by FIRE Purchase Handler

```
TRIGGER: Enrolled by another workflow (Trilogy Purchase Handler)
  │
  ├─ Step 1: ADD TAG → "in-sequence-b"
  │
  ├─ Step 2: SEND EMAIL → "Seq B — Email 1: Smart move — your trilogy is ready"
  │    Subject: Smart move — your trilogy is ready
  │    Preview: You're ahead of 99% of people right now.
  │    Body: [Full Email 1 from Sequence B file]
  │    NOTE: This is the delivery + welcome email. Contains download links.
  │
  ├─ Step 3: WAIT → 2 days
  │
  ├─ Step 4: IF/ELSE → Contact has tag "fire-buyer"?
  │    ├─ YES → REMOVE TAG "in-sequence-b" → END
  │    └─ NO → Continue
  │
  ├─ Step 5: SEND EMAIL → "Seq B — Email 2: Knowledge without action is entertainment"
  │    Subject: Knowledge without action is entertainment
  │    Preview: The gap between knowing and doing.
  │    Body: [Full Email 2 from Sequence B file]
  │
  ├─ Step 6: WAIT → 2 days
  │
  ├─ Step 7: IF/ELSE → Contact has tag "fire-buyer"?
  │    ├─ YES → REMOVE TAG "in-sequence-b" → END
  │    └─ NO → Continue
  │
  ├─ Step 8: SEND EMAIL → "Seq B — Email 3: Your 90-day wealth plan — 7 modules"
  │    Subject: Your 90-day wealth plan — 7 modules
  │    Preview: From "I understand money" to "I'm building wealth."
  │    Body: [Full Email 3 from Sequence B file]
  │    INCLUDE CTA LINK: Direct link to FIRE Workbook checkout (standalone page or direct payment link)
  │
  ├─ Step 9: WAIT → 3 days
  │
  ├─ Step 10: IF/ELSE → Contact has tag "fire-buyer"?
  │    ├─ YES → REMOVE TAG "in-sequence-b" → END
  │    └─ NO → Continue
  │
  ├─ Step 11: SEND EMAIL → "Seq B — Email 4: {first_name}, still thinking about it?"
  │    Subject: {first_name}, still thinking about it?
  │    Preview: Let me address the real question.
  │    Body: [Full Email 4 from Sequence B file]
  │    INCLUDE CTA LINK: FIRE Workbook checkout
  │
  ├─ Step 12: REMOVE TAG → "in-sequence-b"
  │
  └─ END
```

**Schedule / Timing Summary:**

| Email | Day | Wait Before | Subject |
|-------|-----|-------------|---------|
| 1 | 0 | Immediate | Smart move — your trilogy is ready |
| 2 | 2 | 2 days | Knowledge without action is entertainment |
| 3 | 4 | 2 days | Your 90-day wealth plan — 7 modules |
| 4 | 7 | 3 days | {first_name}, still thinking about it? |

---

### WORKFLOW C: FIRE Workbook to Coaching Application

**Workflow Name:** `MD — Sequence C: FIRE to Coaching Application`
**Trigger Type:** Workflow Enrollment (enrolled by FIRE Purchase Handler)

**Goal:** Contact submits coaching application
**Goal Action:** Remove from workflow, handled by Application Handler

```
TRIGGER: Enrolled by another workflow (FIRE Purchase Handler)
  │
  ├─ Step 1: ADD TAG → "in-sequence-c"
  │
  ├─ Step 2: SEND EMAIL → "Seq C — Email 1: Welcome to the inner circle"
  │    Subject: Welcome to the inner circle
  │    Preview: You just invested in yourself. Here's what's next.
  │    Body: [Full Email 1 from Sequence C file]
  │    Template: Premium Branded
  │
  ├─ Step 3: WAIT → 2 days
  │
  ├─ Step 4: IF/ELSE → Contact has tag "applicant"?
  │    ├─ YES → REMOVE TAG "in-sequence-c" → END
  │    └─ NO → Continue
  │
  ├─ Step 5: SEND EMAIL → "Seq C — Email 2: I almost quit in year 2"
  │    Subject: I almost quit in year 2
  │    Preview: The thing nobody tells you about building wealth.
  │    Body: [Full Email 2 from Sequence C file]
  │    Template: Clean Minimal
  │
  ├─ Step 6: WAIT → 2 days
  │
  ├─ Step 7: IF/ELSE → Contact has tag "applicant"?
  │    ├─ YES → REMOVE TAG "in-sequence-c" → END
  │    └─ NO → Continue
  │
  ├─ Step 8: SEND EMAIL → "Seq C — Email 3: The 3 wealth levers nobody teaches you"
  │    Subject: The 3 wealth levers nobody teaches you
  │    Preview: School teaches you zero of these.
  │    Body: [Full Email 3 from Sequence C file]
  │    Template: Clean Minimal
  │
  ├─ Step 9: WAIT → 2 days
  │
  ├─ Step 10: IF/ELSE → Contact has tag "applicant"?
  │    ├─ YES → REMOVE TAG "in-sequence-c" → END
  │    └─ NO → Continue
  │
  ├─ Step 11: SEND EMAIL → "Seq C — Email 4: {first_name}, meet David"
  │    Subject: {first_name}, meet David — he was exactly where you are
  │    Preview: From $95K salary to $6,800/mo passive.
  │    Body: [Full Email 4 from Sequence C file]
  │    Template: Pure Text
  │
  ├─ Step 12: WAIT → 2 days
  │
  ├─ Step 13: IF/ELSE → Contact has tag "applicant"?
  │    ├─ YES → REMOVE TAG "in-sequence-c" → END
  │    └─ NO → Continue
  │
  ├─ Step 14: SEND EMAIL → "Seq C — Email 5: 3 mistakes smart people make with money"
  │    Subject: 3 mistakes smart people make with money
  │    Preview: Smart people make the worst financial mistakes.
  │    Body: [Full Email 5 from Sequence C file]
  │    Template: Clean Minimal
  │
  ├─ Step 15: WAIT → 2 days
  │
  ├─ Step 16: IF/ELSE → Contact has tag "applicant"?
  │    ├─ YES → REMOVE TAG "in-sequence-c" → END
  │    └─ NO → Continue
  │
  ├─ Step 17: SEND EMAIL → "Seq C — Email 6: From $0 to 3 rental properties in 11 months"
  │    Subject: From $0 to 3 rental properties in 11 months
  │    Preview: Different person. Same system. Same result.
  │    Body: [Full Email 6 from Sequence C file]
  │    Template: Pure Text
  │
  ├─ Step 18: WAIT → 2 days
  │
  ├─ Step 19: IF/ELSE → Contact has tag "applicant"?
  │    ├─ YES → REMOVE TAG "in-sequence-c" → END
  │    └─ NO → Continue
  │
  ├─ Step 20: SEND EMAIL → "Seq C — Email 7: Applications are open — 15 spots"
  │    Subject: Applications are open — 15 spots
  │    Preview: 6 months. A system. Accountability. Results.
  │    Body: [Full Email 7 from Sequence C file]
  │    Template: Dark Premium
  │    INCLUDE CTA LINK: Funnel Step 5 (Application page URL)
  │
  ├─ Step 21: WAIT → 3 days
  │
  ├─ Step 22: IF/ELSE → Contact has tag "applicant"?
  │    ├─ YES → REMOVE TAG "in-sequence-c" → END
  │    └─ NO → Continue
  │
  ├─ Step 23: SEND EMAIL → "Seq C — Email 8: 8 spots left — your questions answered"
  │    Subject: 8 spots left — your questions answered
  │    Preview: The 4 questions everyone asks before joining.
  │    Body: [Full Email 8 from Sequence C file]
  │    Template: Clean Minimal
  │    INCLUDE CTA LINK: Application page
  │
  ├─ Step 24: WAIT → 3 days
  │
  ├─ Step 25: IF/ELSE → Contact has tag "applicant"?
  │    ├─ YES → REMOVE TAG "in-sequence-c" → END
  │    └─ NO → Continue
  │
  ├─ Step 26: SEND EMAIL → "Seq C — Email 9: closing applications friday"
  │    Subject: closing applications friday
  │    Preview: This is my last email about the program.
  │    Body: [Full Email 9 from Sequence C file]
  │    Template: Pure Text
  │    INCLUDE CTA LINK: Application page
  │
  ├─ Step 27: REMOVE TAG → "in-sequence-c"
  │
  └─ END
```

**Schedule / Timing Summary:**

| Email | Day | Wait Before | Subject | Template |
|-------|-----|-------------|---------|----------|
| 1 | 0 | Immediate | Welcome to the inner circle | Premium Branded |
| 2 | 2 | 2 days | I almost quit in year 2 | Clean Minimal |
| 3 | 4 | 2 days | The 3 wealth levers nobody teaches you | Clean Minimal |
| 4 | 6 | 2 days | {first_name}, meet David | Pure Text |
| 5 | 8 | 2 days | 3 mistakes smart people make with money | Clean Minimal |
| 6 | 10 | 2 days | From $0 to 3 rental properties in 11 months | Pure Text |
| 7 | 12 | 2 days | Applications are open — 15 spots | Dark Premium |
| 8 | 15 | 3 days | 8 spots left — your questions answered | Clean Minimal |
| 9 | 18 | 3 days | closing applications friday | Pure Text |

---

### WORKFLOW: Application Handler

**Workflow Name:** `MD — Application Handler`
**Trigger Type:** Form/Survey Submitted
**Trigger Filter:** Survey = `Coaching Application`

```
TRIGGER: Survey Submitted → "Coaching Application"
  │
  ├─ Step 1: ADD TAG → "applicant"
  │
  ├─ Step 2: REMOVE TAG → "in-sequence-c"
  │
  ├─ Step 3: REMOVE FROM WORKFLOW → "MD — Sequence C: FIRE to Coaching Application"
  │
  ├─ Step 4: UPDATE PIPELINE STAGE
  │    Pipeline: "Money Decoded Funnel"
  │    Stage: "Applicant"
  │
  ├─ Step 5: IF/ELSE → Q1 = "Already in RE" AND Q2 = "Active" or "Experienced"?
  │    ├─ YES → ADD TAG "scale" → (fast-track: auto-send calendar link)
  │    └─ NO → Continue
  │
  ├─ Step 6: IF/ELSE → Q1 = "Keep learning" AND Q2 = "Beginner" or "Studying"?
  │    ├─ YES → ADD TAG "educate"
  │    └─ NO → ADD TAG "activate"
  │
  ├─ Step 7: SEND INTERNAL NOTIFICATION
  │    To: jmarque@yourdomain.com
  │    Subject: NEW COACHING APPLICATION: {{contact.first_name}} {{contact.last_name}}
  │    Body: Full application details + tags + pipeline stage
  │
  ├─ Step 8: ENROLL IN WORKFLOW → "MD — Sequence D: Application to Strategy Call"
  │
  └─ END
```

---

### WORKFLOW D: Application to Strategy Call

**Workflow Name:** `MD — Sequence D: Application to Strategy Call`
**Trigger Type:** Workflow Enrollment (enrolled by Application Handler)

**Goal:** Contact books strategy call
**Goal Action:** Remove from workflow, add `booked-call` tag

```
TRIGGER: Enrolled by another workflow (Application Handler)
  │
  ├─ Step 1: ADD TAG → "in-sequence-d"
  │
  ├─ Step 2: SEND EMAIL → "Seq D — Email 1: Application received — here's what happens next"
  │    Subject: Application received — here's what happens next
  │    Preview: You're in. Here's the process.
  │    Body: [Full Email 1 from Sequence D file]
  │    Template: Premium Branded
  │    INCLUDE: Overview of the 3-step process (review → booking link → strategy call)
  │
  ├─ Step 3: WAIT → 1 day
  │
  ├─ Step 4: IF/ELSE → Contact has tag "booked-call"?
  │    ├─ YES → REMOVE TAG "in-sequence-d" → END
  │    └─ NO → Continue
  │
  ├─ Step 5: SEND EMAIL → "Seq D — Email 2: What to expect on your strategy call"
  │    Subject: What to expect on your strategy call
  │    Preview: This is not a sales pitch.
  │    Body: [Full Email 2 from Sequence D file]
  │    Template: Clean Minimal
  │    INCLUDE: Calendar booking link (GHL Calendar widget link)
  │
  ├─ Step 6: WAIT → 1 day
  │
  ├─ Step 7: IF/ELSE → Contact has tag "booked-call"?
  │    ├─ YES → REMOVE TAG "in-sequence-d" → END
  │    └─ NO → Continue
  │
  ├─ Step 8: SEND EMAIL → "Seq D — Email 3: Why I only take 15 people per cohort"
  │    Subject: Why I only take 15 people per cohort
  │    Preview: I could take 100. I choose 15.
  │    Body: [Full Email 3 from Sequence D file]
  │    Template: Pure Text
  │
  ├─ Step 9: WAIT → 1 day
  │
  ├─ Step 10: IF/ELSE → Contact has tag "booked-call"?
  │    ├─ YES → REMOVE TAG "in-sequence-d" → END
  │    └─ NO → Continue
  │
  ├─ Step 11: SEND EMAIL → "Seq D — Email 4: Quick question about your application"
  │    Subject: Quick question about your application
  │    Preview: Just checking in.
  │    Body: [Full Email 4 from Sequence D file]
  │    Template: Pure Text
  │    INCLUDE: Calendar booking link
  │
  ├─ Step 12: REMOVE TAG → "in-sequence-d"
  │
  └─ END
```

**Schedule / Timing Summary:**

| Email | Day | Wait Before | Subject |
|-------|-----|-------------|---------|
| 1 | 0 | Immediate | Application received — here's what happens next |
| 2 | 1 | 1 day | What to expect on your strategy call |
| 3 | 2 | 1 day | Why I only take 15 people per cohort |
| 4 | 3 | 1 day | Quick question about your application |

---

### WORKFLOW: Calendar Booking Handler

**Workflow Name:** `MD — Strategy Call Booked`
**Trigger Type:** Appointment Scheduled
**Trigger Filter:** Calendar = `Strategy Call`

```
TRIGGER: Appointment Scheduled → Calendar = "Strategy Call"
  │
  ├─ Step 1: ADD TAG → "booked-call"
  │
  ├─ Step 2: REMOVE TAG → "in-sequence-d"
  │
  ├─ Step 3: REMOVE FROM WORKFLOW → "MD — Sequence D: Application to Strategy Call"
  │
  ├─ Step 4: UPDATE PIPELINE STAGE
  │    Pipeline: "Money Decoded Funnel"
  │    Stage: "Call Booked"
  │
  ├─ Step 5: SEND EMAIL → "Strategy Call Confirmation"
  │    Subject: Your strategy call is confirmed — {{appointment.date}} at {{appointment.time}}
  │    Body:
  │      "Your 30-minute strategy call is booked for {{appointment.date}} at {{appointment.time}}.
  │
  │       How to prepare:
  │       1. Have your FIRE Workbook Module 1 (budget P&L) filled out
  │       2. Know your approximate credit score
  │       3. Know what's in your retirement accounts (even a rough number)
  │       4. Think about your 12-month goal
  │
  │       Join here: {{appointment.meeting_link}}
  │
  │       Talk soon,
  │       — J. Marque"
  │
  ├─ Step 6: SEND INTERNAL NOTIFICATION
  │    To: jmarque@yourdomain.com
  │    Subject: STRATEGY CALL BOOKED: {{contact.first_name}} {{contact.last_name}} — {{appointment.date}}
  │    Body: Contact details, application answers, tags, pipeline stage
  │
  ├─ Step 7: WAIT → Until 24 hours before appointment
  │    (Use: Wait > Until date/time > {{appointment.start_time}} minus 24 hours)
  │
  ├─ Step 8: SEND EMAIL → "24-Hour Reminder"
  │    Subject: Reminder: Your strategy call is tomorrow
  │    Body:
  │      "{first_name},
  │
  │       Quick reminder — our strategy call is tomorrow at {{appointment.time}}.
  │
  │       Have your FIRE Workbook numbers ready. The more complete your picture, the more specific your plan will be.
  │
  │       Join here: {{appointment.meeting_link}}
  │
  │       — J. Marque"
  │
  ├─ Step 9: WAIT → Until 1 hour before appointment
  │
  ├─ Step 10: SEND SMS → "1-Hour Reminder"
  │    Body: "Hey {first_name} — our strategy call is in 1 hour. Join here: {{appointment.meeting_link}} — J. Marque"
  │
  ├─ Step 11: WAIT → Until 15 minutes after appointment end time
  │    (Grace period for late shows)
  │
  ├─ Step 12: IF/ELSE → Appointment status = "Completed" or "Showed"?
  │    ├─ YES → ADD TAG "call-completed" → UPDATE PIPELINE STAGE to "Strategy Call Complete" → END
  │    └─ NO → GO TO: No-Show Handler (Step 13)
  │
  ├─ Step 13: ADD TAG → "no-show"
  │
  ├─ Step 14: WAIT → 30 minutes
  │
  ├─ Step 15: SEND EMAIL → "No-Show Follow-Up"
  │    Subject: Missed you on the call — let's reschedule
  │    Body:
  │      "{first_name},
  │
  │       I was on the call but didn't see you join. No worries — life happens.
  │
  │       Your application is still active and your spot is held. Click below to reschedule:
  │
  │       [Reschedule Your Strategy Call →]
  │
  │       If the timing changed, just reply 'not now' and I'll release your spot.
  │
  │       — J. Marque"
  │
  ├─ Step 16: WAIT → 2 days
  │
  ├─ Step 17: IF/ELSE → Contact has tag "booked-call" AND NOT "call-completed"?
  │    ├─ YES (still hasn't rebooked) → SEND SMS
  │    │    Body: "Hey {first_name}, just following up on the strategy call. Want to reschedule? Here's my calendar: [LINK] — J. Marque"
  │    └─ NO → END
  │
  └─ END
```

---

### WORKFLOW: Post-Call Enrollment

**Workflow Name:** `MD — Coaching Enrollment`
**Trigger Type:** Payment Received / Manual Tag Assignment
**Trigger Filter:** Product = `FIRE + Real Estate Coaching` OR tag `enrolled-group` manually applied

```
TRIGGER: Payment Received → Coaching product OR Tag Added → "enrolled-group"
  │
  ├─ Step 1: ADD TAG → "enrolled-group"
  │
  ├─ Step 2: ADD TAG → "active-student"
  │
  ├─ Step 3: UPDATE PIPELINE STAGE
  │    Pipeline: "Money Decoded Funnel"
  │    Stage: "Enrolled (Group)"
  │
  ├─ Step 4: GRANT MEMBERSHIP ACCESS
  │    Membership: "Money Decoded"
  │    Level: "Coaching"
  │
  ├─ Step 5: SEND EMAIL → "Welcome to the Program"
  │    Subject: Welcome to FIRE Coaching — here's everything you need
  │    Body:
  │      "{first_name},
  │
  │       Welcome. You just made the most important investment of your financial life.
  │
  │       Here's what happens now:
  │
  │       1. LOGIN TO YOUR PORTAL: [Member Portal Link]
  │          - All course materials, recordings, and resources are here
  │
  │       2. JOIN THE COMMUNITY: [Community Link]
  │          - Introduce yourself in the #introductions channel
  │          - This is your 24/7 support network
  │
  │       3. ADD THESE TO YOUR CALENDAR:
  │          - Tuesday 7 PM ET: Strategy Call (Zoom link in portal)
  │          - Thursday 7 PM ET: Hot Seat (Zoom link in portal)
  │
  │       4. FIRST ASSIGNMENT:
  │          - Complete FIRE Workbook Module 1 (Budget P&L) if you haven't already
  │          - Share your Module 1 results in the community by this Friday
  │
  │       Your first live call is this [Tuesday/Thursday]. Come with questions.
  │
  │       Let's build.
  │
  │       — J. Marque
  │       $250M+ in Real Estate | USMC Veteran"
  │
  ├─ Step 6: SEND INTERNAL NOTIFICATION
  │    To: jmarque@yourdomain.com
  │    Subject: NEW ENROLLMENT: {{contact.first_name}} — Group Coaching ($5,997)
  │
  ├─ Step 7: CREATE TASK
  │    Title: "Onboard {{contact.first_name}} — check portal access + community join"
  │    Due: 1 day from now
  │    Assigned to: J. Marque
  │
  ├─ Step 8: WAIT → 180 days (6 months)
  │
  ├─ Step 9: REMOVE TAG → "active-student"
  │
  ├─ Step 10: ADD TAG → "graduated"
  │
  ├─ Step 11: UPDATE PIPELINE STAGE → "Graduated"
  │
  ├─ Step 12: SEND EMAIL → "Graduation + Testimonial Request"
  │    Subject: 6 months — look how far you've come
  │    Body: Recap of journey, request testimonial, hint at 1-on-1 upgrade
  │
  └─ END
```

---

## 5. PIPELINE SETUP

Navigate to **CRM > Pipelines > + Create Pipeline**.

**Pipeline Name:** `Money Decoded Funnel`

### Stages

| Stage # | Stage Name | Trigger (auto-move) | Tag Required |
|---------|-----------|---------------------|--------------|
| 1 | Lead | Opt-in form submitted | `lead` |
| 2 | Buyer ($7) | $7 Trilogy purchased | `buyer` |
| 3 | FIRE Buyer ($97) | $97 FIRE Workbook purchased | `fire-buyer` |
| 4 | Applicant | Coaching application submitted | `applicant` |
| 5 | Call Booked | Strategy call booked | `booked-call` |
| 6 | Strategy Call Complete | Call completed (manual mark or calendar event) | `call-completed` |
| 7 | Enrolled (Group) | $5,997 payment received | `enrolled-group` |
| 8 | Enrolled (1-on-1) | $14,997 payment received | `enrolled-1on1` |
| 9 | Active Student | Currently in 6-month program | `active-student` |
| 10 | Graduated | 6-month program completed | `graduated` |

### How to Create Each Stage

1. Click **+ Add Stage**
2. Name: Enter stage name from table above
3. Stage Color: Use a progression (gray > blue > green > gold > dark green)
4. Repeat for all 10 stages

### Pipeline Automation (Auto-Move Between Stages)

All stage movements are handled by the workflows defined in Section 4. Each workflow contains `UPDATE PIPELINE STAGE` actions at the appropriate points:

| Event | Workflow Responsible | Pipeline Action |
|-------|---------------------|-----------------|
| Opt-in form submitted | Sequence A workflow | Add to pipeline, Stage 1: Lead |
| $7 purchased | Trilogy Purchase Handler | Move to Stage 2: Buyer ($7) |
| $97 purchased | FIRE Purchase Handler | Move to Stage 3: FIRE Buyer ($97) |
| Application submitted | Application Handler | Move to Stage 4: Applicant |
| Call booked | Calendar Booking Handler | Move to Stage 5: Call Booked |
| Call completed | Calendar Booking Handler | Move to Stage 6: Strategy Call Complete |
| Enrolled group | Coaching Enrollment | Move to Stage 7: Enrolled (Group) |
| Enrolled 1-on-1 | Manual tag | Move to Stage 8: Enrolled (1-on-1) |
| 6 months elapsed | Coaching Enrollment (timer) | Move to Stage 10: Graduated |

### Pipeline Views

Set up the following **Smart Lists** (saved filters) under CRM > Smart Lists:

| Smart List Name | Filter Criteria | Purpose |
|----------------|-----------------|---------|
| Hot Leads | Tag = `lead`, opted in within last 7 days | Fresh leads for manual outreach |
| Buyers Not Upgraded | Tag = `buyer`, NOT tag = `fire-buyer`, purchased within last 30 days | Target for FIRE Workbook push |
| FIRE Buyers Not Applied | Tag = `fire-buyer`, NOT tag = `applicant`, purchased within last 60 days | Target for application push |
| Applicants Not Booked | Tag = `applicant`, NOT tag = `booked-call`, applied within last 14 days | Follow up manually |
| Calls This Week | Tag = `booked-call`, appointment date = this week | Prep for strategy calls |
| No-Shows | Tag = `no-show`, NOT tag = `call-completed` | Reschedule outreach |
| Active Students | Tag = `active-student` | Current cohort management |
| Cold 90 Days | Tag = `cold-90` | Re-engagement or list cleaning |

---

## 6. CALENDAR SETUP

Navigate to **Calendars > + Create Calendar**.

### Strategy Call Calendar

| Setting | Value |
|---------|-------|
| **Calendar Name** | Strategy Call — J. Marque |
| **Calendar Type** | Round Robin (if multiple team members) or **Simple** (solo) |
| **Meeting Duration** | 30 minutes |
| **Buffer Time** | 15 minutes between calls (before and after) |
| **Max Bookings per Day** | 4 (prevents burnout, creates scarcity) |
| **Max Bookings per Slot** | 1 |
| **Booking Window** | Minimum 24 hours notice, maximum 14 days out |
| **Meeting Location** | Zoom (connect Zoom integration) or Google Meet |

### Availability Settings

| Day | Available | Time Slots (Eastern) |
|-----|-----------|---------------------|
| Monday | NO | - |
| Tuesday | YES | 10:00 AM - 12:00 PM, 2:00 PM - 4:00 PM |
| Wednesday | NO | - |
| Thursday | YES | 10:00 AM - 12:00 PM, 2:00 PM - 4:00 PM |
| Friday | YES | 10:00 AM - 12:00 PM |
| Saturday | NO | - |
| Sunday | NO | - |

**Why Tue/Thu/Fri only:** Creates scarcity. Limited slots = perceived demand = higher show rates.

### Calendar Form Fields

The booking page should collect:

| Field | Type | Required |
|-------|------|----------|
| First Name | Text | YES |
| Last Name | Text | YES |
| Email | Email | YES |
| Phone | Phone | YES |
| "What's your #1 financial goal for the next 12 months?" | Long Text | YES |
| "Have you completed your FIRE Workbook?" | Dropdown: Yes / Working on it / Not yet | YES |

### Confirmation Email Template

**Triggered automatically by GHL when appointment is booked.**

```
Subject: Your Strategy Call is Confirmed — {{appointment.date}}

{first_name},

Your 30-minute strategy call is booked:

DATE: {{appointment.date}}
TIME: {{appointment.time}} Eastern
JOIN: {{appointment.meeting_link}}

HOW TO PREPARE:
1. Have your FIRE Workbook Module 1 (Budget P&L) completed
2. Know your approximate credit score
3. Know your retirement account balances (rough numbers OK)
4. Have your 12-month financial goal written down

This call is about YOUR plan. Not a sales pitch. I'll map out your personalized
6-month roadmap — and it's yours whether you join the coaching program or not.

See you on {{appointment.date}}.

— J. Marque
$250M+ in Real Estate | USMC Veteran
```

### Reminder Emails

**24-Hour Reminder:**
- Trigger: Automated (GHL calendar setting: "Send reminder 24 hours before")
- Subject: `Reminder: Your strategy call is tomorrow at {{appointment.time}}`
- Body: Short reminder + meeting link + prep checklist

**1-Hour Reminder (SMS):**
- Trigger: Automated (GHL calendar setting: "Send reminder 1 hour before")
- Channel: SMS
- Body: `Hey {first_name} — our strategy call is in 1 hour. Join here: {{appointment.meeting_link}} — J. Marque`

### No-Show Follow-Up Automation

Handled by the **Strategy Call Booked** workflow (Section 4). Summary:

| Timing | Action | Channel |
|--------|--------|---------|
| 15 min after call end | Check if appointment status = Completed | System check |
| If no-show: +30 min | Send "Missed you" email with reschedule link | Email |
| If no-show: +2 days | Send follow-up SMS with calendar link | SMS |
| If still no-show: +5 days | Final email: "Releasing your spot — last chance to reschedule" | Email |

### Calendar Settings in GHL

1. Go to **Calendars > Strategy Call**
2. Under **Notifications:**
   - Confirmation email: ON (use template above)
   - Reminder (24h): ON
   - Reminder (1h): ON
   - Follow-up (post-appointment): ON
   - Cancellation: ON
3. Under **Advanced:**
   - Allow reschedule: YES
   - Allow cancel: YES (minimum 2 hours before)
   - Reschedule link in confirmation email: YES
4. Under **Integrations:**
   - Connect Zoom for auto-generated meeting links
   - Sync with Google Calendar to prevent double-booking

---

## 7. MEMBERSHIP / COURSE AREA

Navigate to **Memberships > + New Course**.

### Membership Structure

**Course Name:** `Money Decoded — Member Portal`

### Access Levels (Offers)

Create the following **Offers** under the membership. Each offer grants access to specific content:

| Offer Name | Price | Triggered By | Content Access |
|------------|-------|-------------|----------------|
| Free Tier | $0 | Opt-in form submitted | Book 1 only |
| Trilogy | $7 | $7 purchase | Books 1, 2, 3 |
| FIRE Workbook | $97 | $97 purchase | Books 1, 2, 3 + FIRE Workbook (7 modules) |
| Coaching | $5,997 | Enrollment | Everything + Coaching modules + Community |

### Content Organization

**Category 1: Money Decoded Books**

| Lesson | Content | Access Level |
|--------|---------|-------------|
| Welcome to Money Decoded | Welcome message, how to use the portal, J. Marque bio | Free Tier+ |
| Book 1: The History of Money | PDF download + embedded reader (if supported) | Free Tier+ |
| Book 2: Modern Money | PDF download | Trilogy+ |
| Book 3: The Future of Money | PDF download | Trilogy+ |
| Bonus: Social Media Hooks | Shareable quotes and graphics from the trilogy | Trilogy+ |

**Category 2: FIRE Workbook**

| Lesson | Content | Access Level | Drip Schedule |
|--------|---------|-------------|---------------|
| FIRE Workbook Overview | How to use the workbook, video walkthrough | FIRE Workbook+ | Immediate |
| Module 1: It All Starts with a Budget | PDF section + instructional notes | FIRE Workbook+ | Immediate |
| Module 2: Understanding Risk Management | PDF section + instructional notes | FIRE Workbook+ | Day 3 |
| Module 3: Keys to the Safe | PDF section + lender-ready checklist template | FIRE Workbook+ | Day 5 |
| Module 4-5: Balance Sheet & Net Worth | PDF section + net worth calculator template | FIRE Workbook+ | Day 7 |
| Module 6: Retirement Accounts | PDF section + retirement repositioning worksheet | FIRE Workbook+ | Day 10 |
| Module 7: Your FIRE Team | PDF section + team contact template + first deal checklist | FIRE Workbook+ | Day 14 |
| Full FIRE Workbook PDF | Complete 25-page PDF download | FIRE Workbook+ | Immediate |

**Category 3: Coaching Program** (locked to coaching-level access)

| Lesson | Content | Access Level |
|--------|---------|-------------|
| Welcome + Onboarding | Orientation video, calendar links, community access, first assignment | Coaching |
| Week 1-4: Foundation | Recorded call replays, deal analysis framework | Coaching |
| Week 5-8: First Deal | Deal sourcing, analysis, offer templates | Coaching |
| Week 9-16: Execution | BRRRR walkthrough, rehab management, refinance process | Coaching |
| Week 17-24: Scale | Portfolio management, VA hiring, second/third deal | Coaching |
| Resource Vault | Scripts, templates, contracts, checklists | Coaching |
| Call Recordings Archive | All Tuesday + Thursday call recordings | Coaching |

### How to Set Up Membership in GHL

1. Go to **Memberships > + New**
2. Course Name: `Money Decoded — Member Portal`
3. **Add Categories** (as listed above): Books, FIRE Workbook, Coaching
4. **Add Lessons** within each category
5. For each lesson:
   - Upload PDF attachments
   - Add description text
   - Set access level by assigning to the appropriate **Offer**
6. **Drip Schedule** (for FIRE Workbook modules):
   - Click the lesson > Settings > Drip > "Unlock X days after enrollment"
   - Set day numbers as shown in the table above
7. **Create Offers:**
   - Go to **Memberships > Offers > + New Offer**
   - Name: `Free Tier` / Price: $0 / Content: Book 1 lessons only
   - Repeat for Trilogy ($7), FIRE Workbook ($97), Coaching ($5,997)
8. **Grant Access via Workflow:**
   - In each purchase/enrollment workflow (Section 4), use the **Grant Offer** action
   - Action: Grant Membership > Select Course > Select Offer
   - This is already included in each workflow defined above

### Community Setup (for Coaching)

1. Go to **Memberships > Communities**
2. Create Community: `FIRE Coaching Community`
3. Create Channels:
   - `#introductions` — New members introduce themselves
   - `#general` — Daily discussion
   - `#deal-analysis` — Post deals for group review
   - `#wins` — Celebrate closed deals and milestones
   - `#resources` — Shared tools, links, templates
   - `#questions` — Ask anything
4. Access: Restricted to contacts with tag `active-student` or `graduated`
5. Link community access to the Coaching Offer in the membership

---

## 8. REPORTING & KPIs

### Funnel Metrics Dashboard

Build the following tracking views in GHL. Use **Reporting > Dashboard** and **CRM > Smart Lists**.

#### Core Conversion Metrics

| Metric | How to Track in GHL | Target | Formula |
|--------|--------------------|---------|---------|
| **Opt-in Rate** | Funnel analytics: Step 1 views vs. form submissions | 25-40% | Submissions / Page Views |
| **$7 Conversion Rate** | Funnel analytics: Step 2 order form completions / total leads | 8-15% | Trilogy purchases / Total leads |
| **OTO Take Rate** | Funnel analytics: Step 3 upsell accepted / Step 2 purchasers | 15-25% | FIRE purchases (OTO) / Trilogy purchasers |
| **Bump Take Rate** | Order bump purchases / Step 2 order form submissions | 10-20% | Bump purchases / Trilogy purchasers |
| **Combined FIRE Rate** | Total FIRE buyers (OTO + bump + email) / Total trilogy buyers | 20-30% | All FIRE purchases / All trilogy purchases |
| **Application Rate** | Coaching applications / FIRE buyers | 5-10% | Applicants / FIRE buyers |
| **Call Booking Rate** | Strategy calls booked / Applications | 70-80% | Booked / Applied |
| **Show Rate** | Calls completed / Calls booked | 75-85% | Showed / Booked |
| **Close Rate** | Enrollments / Calls completed | 25-35% | Enrolled / Calls completed |

#### Revenue Metrics

| Metric | How to Track | Target |
|--------|-------------|--------|
| **Revenue per Lead** | Total revenue / Total opt-ins | $8.36 (per 10K model) |
| **Average Order Value (AOV)** | Total checkout revenue / Total orders | $15-$25 (with bumps/OTOs) |
| **Customer Lifetime Value (LTV)** | Total revenue per customer across all products | $50-$6,100 depending on journey |
| **Cost per Acquisition (CPA)** | Ad spend / Buyers (when running paid traffic) | Target: < $3 per $7 buyer |
| **Monthly Recurring Revenue** | Coaching payment plans + active subscriptions | Track in Payments > Subscriptions |
| **Total Funnel Revenue** | Sum of all product sales | Track in Payments > Transactions |

#### Email Performance Metrics

Track in **Marketing > Emails > Statistics** for each workflow:

**Sequence A:**

| Email | Target Open Rate | Target Click Rate |
|-------|-----------------|-------------------|
| Email 1 (Day 0) | 60%+ | 15%+ |
| Email 2 (Day 1) | 40%+ | 5%+ |
| Email 3 (Day 2) | 35%+ | 5%+ |
| Email 4 (Day 4) | 35%+ | 8%+ |
| Email 5 (Day 5) | 30%+ | 8%+ |
| Email 6 (Day 7) | 35%+ | 10%+ |

**Sequence B:**

| Email | Target Open Rate | Target Click Rate |
|-------|-----------------|-------------------|
| Email 1 (Day 0) | 65%+ | 20%+ |
| Email 2 (Day 2) | 40%+ | 3%+ |
| Email 3 (Day 4) | 35%+ | 10%+ |
| Email 4 (Day 7) | 30%+ | 8%+ |

**Sequence C:**

| Email | Target Open Rate | Target Click Rate |
|-------|-----------------|-------------------|
| Email 1 (Day 0) | 65%+ | 20%+ |
| Email 2 (Day 2) | 40%+ | N/A |
| Email 3 (Day 4) | 35%+ | 3%+ |
| Email 4 (Day 6) | 35%+ | N/A |
| Email 5 (Day 8) | 30%+ | 3%+ |
| Email 6 (Day 10) | 30%+ | N/A |
| Email 7 (Day 12) | 35%+ | 10%+ |
| Email 8 (Day 15) | 30%+ | 8%+ |
| Email 9 (Day 18) | 35%+ | 8%+ |

**Sequence D:**

| Email | Target Open Rate | Target Click Rate |
|-------|-----------------|-------------------|
| Email 1 (Day 0) | 75%+ | 10%+ |
| Email 2 (Day 1) | 60%+ | 5%+ |
| Email 3 (Day 2) | 50%+ | N/A |
| Email 4 (Day 3) | 55%+ | 15%+ |

#### Pipeline Velocity Metrics

| Metric | Definition | How to Track |
|--------|-----------|-------------|
| **Lead to Buyer Time** | Average days from opt-in to $7 purchase | Pipeline stage timestamps |
| **Buyer to FIRE Time** | Average days from $7 to $97 purchase | Pipeline stage timestamps |
| **FIRE to Application Time** | Average days from $97 to coaching application | Pipeline stage timestamps |
| **Application to Close Time** | Average days from application to enrollment | Pipeline stage timestamps |
| **Full Funnel Velocity** | Average days from opt-in to coaching enrollment | Pipeline stage timestamps |
| **Stage Drop-off Rate** | % of contacts stuck at each stage for 30+ days | Smart Lists + date filters |

### Weekly KPI Review Checklist

Run this every Monday morning:

| Check | Where in GHL | Action if Below Target |
|-------|-------------|----------------------|
| New leads this week | CRM > filter by tag `lead` + date | Increase content output / traffic spend |
| $7 conversions | Payments > Transactions > filter by product | Review Sequence A email performance, adjust copy |
| $97 conversions | Payments > Transactions > filter by product | Review OTO page, test new headline, review Sequence B |
| Applications received | CRM > filter by tag `applicant` + date | Review Sequence C emails 7-9, increase urgency |
| Calls booked | Calendar > this week's bookings | Review Sequence D, check calendar availability |
| Calls completed (show rate) | Calendar > completed vs. total | Improve reminder sequence, add SMS day-of |
| Revenue this week | Payments > Dashboard | Identify weakest link in funnel, optimize |
| Email open rates (all sequences) | Marketing > Emails > Statistics | Test new subject lines on underperformers |
| Unsubscribe rate | Marketing > Emails > Statistics | If >2% on any email, review tone and frequency |
| List growth (net new subscribers) | CRM > total contacts with `lead` tag | Baseline for growth trend |

### Revenue Model (per 10,000 leads)

| Stage | Volume | Revenue |
|-------|--------|---------|
| Opt-ins | 10,000 | $0 |
| $7 Trilogy (10% conversion) | 1,000 | $7,000 |
| $97 FIRE Workbook — OTO page (20% of buyers) | 200 | $19,400 |
| $97 FIRE Workbook — email (8% of remaining 800) | 64 | $6,208 |
| Total FIRE buyers | 264 | $25,608 |
| Coaching applications (10% of FIRE buyers) | 26 | $0 |
| Strategy calls booked (75% of applicants) | 20 | $0 |
| Group enrollments (30% close rate) | 6 | $35,982 |
| 1-on-1 upgrades (15% of group) | ~1 | $14,997 |
| **TOTAL REVENUE** | | **$83,587** |
| **Revenue per Lead** | | **$8.36** |

---

## COMPLETE WORKFLOW INDEX

| # | Workflow Name | Trigger | Enrollment |
|---|--------------|---------|------------|
| 1 | MD — Sequence A: Book 1 to Trilogy | Form Submitted (Opt-In) | Auto |
| 2 | MD — Trilogy Purchase Handler | Order Submitted ($7 product) | Auto |
| 3 | MD — FIRE Workbook Purchase Handler | Order Submitted ($97/$67/$47 product) | Auto |
| 4 | MD — Sequence B: Trilogy to FIRE Workbook | Enrolled by workflow #2 | By handler |
| 5 | MD — Sequence C: FIRE to Coaching Application | Enrolled by workflow #3 | By handler |
| 6 | MD — Application Handler | Survey Submitted (Coaching App) | Auto |
| 7 | MD — Sequence D: Application to Strategy Call | Enrolled by workflow #6 | By handler |
| 8 | MD — Strategy Call Booked | Appointment Scheduled | Auto |
| 9 | MD — Coaching Enrollment | Payment Received / Tag Added | Auto/Manual |
| 10 | MD — Engagement Tracker | Cron (daily) | Auto |
| 11 | MD — Re-Engagement (cold-90) | Tag Added (cold-90) | Auto |
| 12 | MD — No-Show Follow-Up | Part of workflow #8 | Auto |

---

## COMPLETE TAG INDEX

| Tag | Category | Applied By |
|-----|----------|-----------|
| `lead` | Lifecycle | Workflow 1 |
| `book1-downloaded` | Lifecycle | Workflow 1 |
| `buyer` | Lifecycle | Workflow 2 |
| `trilogy-purchased` | Lifecycle | Workflow 2 |
| `fire-buyer` | Lifecycle | Workflow 3 |
| `applicant` | Lifecycle | Workflow 6 |
| `booked-call` | Lifecycle | Workflow 8 |
| `call-completed` | Lifecycle | Workflow 8 |
| `enrolled-group` | Lifecycle | Workflow 9 |
| `enrolled-1on1` | Lifecycle | Workflow 9 (manual) |
| `active-student` | Lifecycle | Workflow 9 |
| `graduated` | Lifecycle | Workflow 9 (180-day timer) |
| `in-sequence-a` | Sequence | Workflow 1 |
| `in-sequence-b` | Sequence | Workflow 4 |
| `in-sequence-c` | Sequence | Workflow 5 |
| `in-sequence-d` | Sequence | Workflow 7 |
| `completed-sequence-a` | Sequence | Workflow 1 |
| `oto-declined` | Segmentation | Workflow 2 |
| `oto-purchased` | Segmentation | Workflow 3 |
| `bump-purchased` | Segmentation | Workflow 3 |
| `educate` | Segmentation | Workflow 6 |
| `activate` | Segmentation | Workflow 6 |
| `scale` | Segmentation | Workflow 6 |
| `no-show` | Engagement | Workflow 8 |
| `engaged-7d` | Engagement | Workflow 10 |
| `engaged-30d` | Engagement | Workflow 10 |
| `cold-30` | Engagement | Workflow 10 |
| `cold-90` | Engagement | Workflow 10 |
| `unsubscribed` | System | GHL auto |
| `source-tiktok` | Traffic | Workflow 1 (UTM) |
| `source-instagram` | Traffic | Workflow 1 (UTM) |
| `source-organic` | Traffic | Workflow 1 (UTM) |
| `source-gumroad` | Traffic | Workflow 1 (UTM) |

---

## BUILD CHECKLIST

| # | Task | Time Est. | Status |
|---|------|-----------|--------|
| 1 | Connect Stripe to GHL | 10 min | [ ] |
| 2 | Create 4 products (Book 1 free, Trilogy $7, FIRE $97, Coaching $5,997) + payment plans | 30 min | [ ] |
| 3 | Create FIRE Order Bump product ($67) | 5 min | [ ] |
| 4 | Upload all PDFs to GHL Media Library | 10 min | [ ] |
| 5 | Build 5-step funnel (Opt-In, Delivery/Tripwire, OTO, Thank You, Application) | 2-3 hrs | [ ] |
| 6 | Configure opt-in form with workflow trigger | 15 min | [ ] |
| 7 | Configure 2-step order form with $7 product + $67 bump | 30 min | [ ] |
| 8 | Configure one-click upsell on OTO page | 20 min | [ ] |
| 9 | Build coaching application survey (4 questions + contact fields) | 20 min | [ ] |
| 10 | Create all 33 tags in CRM > Tags | 20 min | [ ] |
| 11 | Build Workflow 1: Sequence A (6 emails) | 45 min | [ ] |
| 12 | Build Workflow 2: Trilogy Purchase Handler | 15 min | [ ] |
| 13 | Build Workflow 3: FIRE Purchase Handler | 15 min | [ ] |
| 14 | Build Workflow 4: Sequence B (4 emails) | 30 min | [ ] |
| 15 | Build Workflow 5: Sequence C (9 emails) | 45 min | [ ] |
| 16 | Build Workflow 6: Application Handler | 15 min | [ ] |
| 17 | Build Workflow 7: Sequence D (4 emails) | 30 min | [ ] |
| 18 | Build Workflow 8: Strategy Call Booked + reminders + no-show | 30 min | [ ] |
| 19 | Build Workflow 9: Coaching Enrollment | 20 min | [ ] |
| 20 | Create pipeline: Money Decoded Funnel (10 stages) | 15 min | [ ] |
| 21 | Create Strategy Call calendar with availability + form fields | 20 min | [ ] |
| 22 | Set up calendar confirmation + reminder emails/SMS | 15 min | [ ] |
| 23 | Create membership portal with 3 categories + offers | 1 hr | [ ] |
| 24 | Set up FIRE Workbook drip schedule (7 modules over 14 days) | 15 min | [ ] |
| 25 | Create coaching community with 6 channels | 15 min | [ ] |
| 26 | Create Smart Lists for pipeline views (8 lists) | 20 min | [ ] |
| 27 | Test full flow: opt-in → Book 1 delivery → $7 purchase → OTO → email sequences | 1 hr | [ ] |
| 28 | Test: $7 purchase with bump → skip OTO → correct tags applied | 15 min | [ ] |
| 29 | Test: Application → Sequence D → Calendar booking → reminders | 30 min | [ ] |
| 30 | Test: No-show flow → follow-up emails/SMS | 15 min | [ ] |
| 31 | Update Gumroad profile to redirect to GHL opt-in | 5 min | [ ] |
| **TOTAL** | | **~10-12 hrs** | |

---

## NOTES

- **Stripe Test Mode:** Use Stripe test mode for all testing. Card number `4242 4242 4242 4242`, any future expiry, any CVC. Switch to live mode only after full flow is verified.
- **Email From Address:** Set up a custom sending domain in GHL (Settings > Email Services) for better deliverability. Use `jmarque@yourdomain.com` or `hello@moneydecoded.com`.
- **SPF/DKIM/DMARC:** Configure DNS records for your sending domain to avoid spam folders. GHL provides the records under Settings > Email Services.
- **Webhook Backup:** If GHL's native Stripe integration misses an event, set up a Stripe webhook pointing to your GHL sub-account webhook URL as a failsafe.
- **GDPR/CAN-SPAM:** Include unsubscribe link in all emails (GHL adds this automatically). Include physical mailing address in email footer (use virtual office address from Northwest Registered Agent).
- **Mobile Testing:** Test every funnel page on mobile before going live. GHL funnels auto-generate mobile versions, but review and adjust spacing, font sizes, and button sizes.
- **A/B Testing Priority:** Once live, test in this order: (1) opt-in page headline, (2) Email 4 subject line (first $7 pitch), (3) OTO page headline, (4) Email 7 of Sequence C (first coaching pitch).

---

*Last updated: 2026-02-22*
*Part of the J. Marque brand ecosystem*
*Ref: MASTER_FUNNEL_SPEC.md | GHL_COMMERCE_RESEARCH.md | Email Sequences A-D*
