# Pipeline Mastery™ — Complete Operations Blueprint
## How Every Tool Connects, Pays You, and Gets Delivered

---

## SECTION 1: THE FULL TECH STACK — AFFILIATE STATUS & COMMISSIONS

Every tool in this system MUST pay you when your students sign up. Here's the confirmed status on every piece:

### ✅ CONFIRMED AFFILIATE PROGRAMS

| # | Tool Function | Tool Name | Affiliate Commission | Type | Sign Up |
|---|---|---|---|---|---|
| 1 | Data Intelligence & List Building | PropStream | **30% recurring monthly** — lifetime of subscriber | Recurring | propstream.com/partner-with-us |
| 2 | CRM & Pipeline | Zoho CRM | **15% recurring** — first 12 months of purchases | Recurring (12mo) | zoho.com/affiliate |
| 3 | SMS/Text Campaigns | Launch Control | **15% recurring** — first 12 months of subscription | Recurring (12mo) | launchcontrol.us/launch-affiliates |
| 4 | Direct Mail (Handwritten) | Ballpoint Marketing | **20% letters / 22% postcards** — lifetime per customer | Recurring lifetime | ballpointmarketing.com/affiliate |
| 5 | Power Dialer | CallTools | Partner program exists — **contact directly for terms** | Custom deal | calltools.com/partner |
| 6 | Skip Tracing / Contact Discovery | DataZapp | **No formal affiliate program found** — must negotiate or replace | TBD | Contact directly |

### ⚠️ TOOLS NEEDING ACTION

**CallTools** — Has a partner page but no public commission rates. You need to email/call their partner team and negotiate a referral deal. If they won't pay, replace with **JustCall** (20% recurring, lifetime, has Zoho CRM integration built-in, includes power dialer + SMS + voicemail).

**DataZapp** — No public affiliate program. Options:
- **Option A:** Contact them directly and propose a partnership. You're bringing volume. Ask for 15-20% of all spend from your referrals.
- **Option B:** Replace with **BatchLeads** skip tracing — they offer **30% recurring monthly** commission through their affiliate program. BatchLeads also does list stacking and skip tracing in one platform.
- **Option C:** Use PropStream's built-in skip tracing (included in their subscription) and eliminate the need for a separate skip tracer entirely.

### 🔄 TOOLS WITH NO COST (FREE OR INCLUDED)

| Tool Function | Solution | Cost |
|---|---|---|
| Email Sequences | Zoho Campaigns (included with Zoho CRM) | $0 extra |
| Voicemail Drops (RVM) | Slybroadcast or built into CallTools | Included or ~$0.02/drop |
| Deal Analysis | Your own spreadsheet/calculator template | $0 |
| CRM Automations | Zoho CRM built-in workflows | Included |
| Integration Glue | Zapier (free tier = 100 tasks/month) | Free to $20/mo |

### 💰 PROJECTED AFFILIATE INCOME PER STUDENT

Assuming each student subscribes to the recommended stack:

| Tool | Student Monthly Cost | Your Commission | Your Monthly Earning Per Student |
|---|---|---|---|
| PropStream | $99/mo | 30% | **$29.70/mo** |
| Zoho CRM | ~$30/mo | 15% | **$4.50/mo** |
| Launch Control | ~$200/mo | 15% | **$30.00/mo** |
| Ballpoint Marketing | ~$500/order (avg) | 20% | **$100/order** |
| CallTools/Dialer | ~$150/mo | 15-25% (negotiated) | **$22-37/mo** |

**Conservative per-student monthly passive = ~$86-$100/month recurring**

| Students | Monthly Affiliate Revenue | Annual Affiliate Revenue |
|---|---|---|
| 10 students | $860-$1,000/mo | $10,320-$12,000/yr |
| 25 students | $2,150-$2,500/mo | $25,800-$30,000/yr |
| 50 students | $4,300-$5,000/mo | $51,600-$60,000/yr |
| 100 students | $8,600-$10,000/mo | $103,200-$120,000/yr |

**This is ON TOP of your $5,000 per sale.** 100 students = $500K in course revenue + $100K+/year in recurring affiliate income.

---

## SECTION 2: HOW THE BACKEND ACTUALLY CONNECTS

This is the part nobody sees. Here's exactly how data flows from one tool to the next:

### THE INTEGRATION MAP

```
PROPSTREAM (Data + Lists)
    │
    │ [Manual CSV Export]
    │ Pull distressed property lists → export as .csv
    │
    ▼
DATAZAPP / BATCHLEADS (Skip Tracing)
    │
    │ [Manual CSV Upload → Download]
    │ Upload property list → get back phone + email → download .csv
    │
    ▼
ZOHO CRM (Command Center)
    │
    │ [CSV Import + Auto-Assignment]
    │ Import enriched leads → auto-score → auto-assign to pipeline stage
    │
    ├──────────────────┬──────────────────┬──────────────────┐
    │                  │                  │                  │
    ▼                  ▼                  ▼                  ▼
CALLTOOLS         LAUNCH CONTROL    ZOHO CAMPAIGNS    BALLPOINT
(Power Dialer)    (SMS/Text)        (Email Drip)      (Direct Mail)
    │                  │                  │                  │
    │ [Zapier]         │ [Zapier]         │ [Native]         │ [Manual/API]
    │                  │                  │                  │
    └──────────────────┴──────────────────┴──────────────────┘
                              │
                              ▼
                    ZOHO CRM (All Results Flow Back)
                    Every call logged, text tracked, email opened,
                    mail sent — all recorded on the lead record
                              │
                              ▼
                    LEAD SCORING + STAGE CHANGES
                    Hot leads auto-escalate → appointment set
                              │
                              ▼
                    DEAL ANALYSIS + CLOSE
```

### CONNECTION METHOD FOR EACH TOOL

**1. PropStream → Skip Tracer (Manual CSV)**
- In PropStream: Build your stacked list (pre-foreclosure + tax delinquent + absentee owner, etc.)
- Export as CSV (name, address, mailing address)
- Upload to DataZapp or BatchLeads for skip tracing
- Download enriched CSV with phone numbers + emails
- **Why manual:** PropStream doesn't have a live API to most skip tracers. The CSV export/import takes 5 minutes. Not worth over-engineering.

**2. Skip Tracer → Zoho CRM (CSV Import + Zapier)**
- Import enriched CSV into Zoho CRM
- Zoho auto-assigns lead source, creates tasks, scores the lead
- OR use Zapier + Google Sheets as a bridge: skip trace results go to a Google Sheet → Zapier watches for new rows → auto-creates leads in Zoho CRM
- **Setup once, runs forever**

**3. Zoho CRM → CallTools (Zapier Integration)**
- Zapier trigger: "New Lead in Zoho CRM" or "Lead Stage Changed to CONTACT ATTEMPTED"
- Zapier action: "Create Contact in CallTools" — adds lead to the dialing campaign
- When agent dispositions a call in CallTools, Zapier fires back: "Update Lead in Zoho CRM" with call result, notes, and disposition
- **Confirmed:** Zapier has CallTools PCC integration with triggers for new dispositions, SMS, emails, and calendar events

**4. Zoho CRM → Launch Control (Zapier Integration)**
- Zapier trigger: "New Lead in Zoho CRM"
- Zapier action: "Add Prospect to Launch Control"
- Launch Control fires automated text drip campaigns
- Responses come back to Launch Control dashboard
- When a lead responds, manually update Zoho CRM (or use Zapier webhook from Launch Control)
- **Confirmed:** Zapier has Zoho CRM ↔ Launch Control integration

**5. Zoho CRM → Zoho Campaigns (Native Integration — No Zapier Needed)**
- Zoho Campaigns is part of the Zoho ecosystem
- Leads sync natively between Zoho CRM and Zoho Campaigns
- Set up email drip sequences inside Zoho Campaigns
- Open/click/reply data flows back to the CRM lead record automatically
- **This is the easiest connection — zero setup beyond enabling the integration in Zoho**

**6. Zoho CRM → Ballpoint Marketing (Manual + Optional API)**
- When a lead reaches a certain stage or date in the sequence (Day 14, Day 40), export a batch to Ballpoint
- Ballpoint has an API for larger operations, but most users upload a CSV list to their portal
- Select your mailer template, confirm, and Ballpoint prints and mails
- **Semi-manual:** You batch direct mail sends weekly or bi-weekly. Upload a CSV of leads who are due for Touch 7 (Day 14) or Touch 12 (Day 40)

**7. Everything → Zoho CRM (All Roads Lead Back)**
- CallTools call results → Zoho via Zapier
- Launch Control text responses → Zoho via Zapier or manual
- Zoho Campaigns email activity → Zoho natively
- Ballpoint mail sends → manually log in Zoho or use a custom field
- **Result:** Every lead in Zoho CRM has a complete activity history across ALL channels

### ZAPIER — THE GLUE

Zapier is the backbone that connects tools that don't natively talk to each other. Here's what you need:

| Zap | Trigger | Action |
|---|---|---|
| New Lead → Dialer | New lead in Zoho CRM | Create contact in CallTools |
| New Lead → Text | New lead in Zoho CRM | Add prospect in Launch Control |
| Call Result → CRM | New disposition in CallTools | Update lead in Zoho CRM |
| Text Response → CRM | New SMS in Launch Control | Update lead in Zoho CRM |
| Lead → Email Drip | (Native) | Zoho CRM ↔ Zoho Campaigns |

**Cost:** Zapier free plan handles 100 tasks/month. Starter plan ($20/mo) handles 750. Professional ($50/mo) handles 2,000. Most students will need the $20/mo plan.

---

## SECTION 3: WHAT STUDENTS ACTUALLY GET (DELIVERABLES)

When someone pays $5,000, they get access to a private portal. Here's exactly what's inside:

### MODULE 1: The Machine Overview (Video + PDF)
- System architecture diagram (the pipeline visual)
- How all tools connect
- Expected costs breakdown
- ROI math (how many leads → how many deals → how much money)
- **Deliverable:** 1 video (15-20 min), 1 PDF guide

### MODULE 2: Data Intelligence & List Building (Video + Templates)
- Over-the-shoulder PropStream setup tutorial
- How to build stacked lists (pre-foreclosure + tax delinquent + code violations, etc.)
- List management and deduplication
- Export workflow
- **Deliverable:** 2-3 videos (45 min total), list-stacking checklist PDF
- **Affiliate link embedded in "Sign up for PropStream here" button**

### MODULE 3: Skip Tracing & Contact Discovery (Video)
- Over-the-shoulder skip tracing tutorial
- How to upload, process, and download enriched lists
- Data hygiene — cleaning bad numbers, removing duplicates
- **Deliverable:** 1 video (15 min), data cleaning checklist
- **Affiliate link embedded**

### MODULE 4: CRM Setup & Automation (Video + Template)
- Full Zoho CRM walkthrough — setting up from scratch
- Pipeline stages pre-built (import template)
- Lead scoring rules
- Automation workflows (auto-assign, auto-task, auto-email)
- Custom fields and views
- **Deliverable:** 3-4 videos (1.5 hrs total), Zoho CRM template file (importable), automation workflow screenshots
- **Affiliate link embedded**

### MODULE 5: The 13-Touch Follow-Up System (Video + Scripts)
- Full breakdown of all 13 touches
- Setting up each channel (dialer, text, email, voicemail, mail)
- Zapier connections walkthrough
- Timing and sequencing
- **Deliverable:** 2-3 videos (1 hr total), complete script document (all 13 touches written out), Zapier template links
- **Affiliate links for CallTools, Launch Control, Ballpoint all embedded**

### MODULE 6: Seller Psychology & Soft Language (Video + PDF)
- The 30+ word swap framework
- 4 Pillars of Pre-Qualifying
- 10 Psychological Principles
- 9 Objection Handlers (word-for-word)
- 6 Closing Techniques
- Role play examples
- **Deliverable:** 2 videos (45 min), complete Seller Psychology PDF (already built — SELLER_PSYCHOLOGY_MASTERY.md)

### MODULE 7: Making Offers & Closing (Video + Templates)
- Running comps and numbers
- Structuring offers (wholesale, creative finance, listing)
- Presenting offers using soft language
- Contract templates
- **Deliverable:** 2 videos (30 min), offer calculator spreadsheet, contract templates

### MODULE 8: Scaling & KPIs (Video + Dashboard)
- KPI tracking setup
- Hiring VAs and acquisition managers
- Training materials for team members
- Systemizing for hands-off operation
- **Deliverable:** 1-2 videos (30 min), KPI dashboard template, VA job description + training doc

### BONUS: Private Community
- Access to a private community (Skool, Discord, or Facebook Group)
- Weekly Q&A or office hours (optional, can start this later)
- Networking with other Pipeline Mastery operators

### TOTAL DELIVERABLES SUMMARY

| Type | Count |
|---|---|
| Video tutorials | 15-20 videos (~6-8 hours total) |
| PDF guides & checklists | 8-10 documents |
| Script library | 1 comprehensive document (13 touches + objection handlers) |
| CRM template (importable) | 1 Zoho template |
| Spreadsheet templates | 2-3 (deal analyzer, KPI dashboard, offer calculator) |
| Contract templates | 2-3 (assignment, purchase agreement, disclosure) |
| Zapier workflow templates | 4-5 pre-built zap links |
| Community access | 1 private group |

---

## SECTION 4: ANONYMOUS BUSINESS SETUP

### THE BRAND (No Personal Identity)

**What the public sees:**
- Company name: Pipeline Mastery™ (or Pipeline Mastery LLC)
- Virtual business address in a professional location
- Generic support email: support@pipelinemastery.com
- No founder name, no face, no personal social media tied to it
- Professional website with system-focused copy (already built — v3)
- "The System" is the brand, not a person

**Website changes needed (already done in v3):**
- Removed all "I" language — replaced with system-focused language
- No personal photos, no founder story
- The system sells itself through results and mechanics

### VIRTUAL BUSINESS ADDRESS

**Recommended: Northwest Registered Agent — $29/month**
- Real street address with suite number (looks like an office, not a PO box)
- Same-day mail scanning to online portal
- Can use for LLC registration
- Locations in: California, New York, Texas, Washington, Illinois + more
- **Also offers LLC formation for $39 + state fees — bundle it**

**Alternative: Business Anywhere — $15-20/month**
- Cheaper option, same core features
- Locations in Florida, Wyoming, New Mexico, Arizona

**Where to register:** Wyoming or New Mexico
- **Wyoming:** No state income tax, strong privacy laws, doesn't require member names on public filings, $100 filing fee, $60/year annual report
- **New Mexico:** No annual report requirement, no state publication requirement, very private

### LLC PRIVACY SETUP

1. **Form LLC in Wyoming** — doesn't publicly list member/manager names
2. **Use virtual address** as principal office address (not your home)
3. **Registered agent** — use Northwest (included in their $29/mo plan) so your name/home address doesn't appear on state filings
4. **EIN from IRS** — free, use LLC name + virtual address
5. **Business bank account** — open with EIN + Articles of Organization + virtual address
6. **Payment processing** — Stripe or PayPal Business under the LLC name
7. **Domain privacy** — enable WHOIS privacy on your domain registration (free with most registrars)

**Total anonymous setup cost: ~$130-200 one-time + $29/month**
- Wyoming LLC filing: $100
- Registered agent (Year 1 included with Northwest): $0
- Virtual address: $29/month
- Domain + hosting: ~$15-30/month (or free with Carrd/landing page)
- Stripe/PayPal: $0 (they take a % per transaction)

### PAYMENT PROCESSING

**For $5,000 transactions, you need:**
- **Stripe** (2.9% + $0.30 per transaction) = ~$145 fee on $5K sale. You keep ~$4,855.
- Set up under LLC name with EIN. Stripe doesn't publicly display owner information.
- **Alternative:** PayPal Business (2.99% + $0.49) = similar fees
- **For high-ticket:** Consider adding a payment plan option: 3x $1,750 or 6x $900. This lowers the barrier and increases conversions.

---

## SECTION 5: LAUNCH PLAN — $0 TO FIRST SALE

### PHASE 1: SETUP (Week 1-2) — Cost: ~$170

1. ☐ Form Wyoming LLC ($100)
2. ☐ Set up virtual address ($29/mo — first month $29)
3. ☐ Get EIN from IRS (free, same day online)
4. ☐ Open business bank account (free)
5. ☐ Set up Stripe under LLC ($0)
6. ☐ Register domain — pipelinemastery.com or similar ($12/yr)
7. ☐ Deploy landing page (already built — v3)
8. ☐ Set up support email: support@pipelinemastery.com
9. ☐ Sign up for ALL affiliate programs (free):
   - PropStream Partner
   - Zoho Affiliate
   - Launch Control Affiliate
   - Ballpoint Marketing Affiliate
   - CallTools Partner (email them)
   - DataZapp/BatchLeads (email them)

### PHASE 2: BUILD COURSE PORTAL (Week 2-4) — Cost: $0-$50

**Free/cheap course hosting options:**
- **Skool** ($99/mo) — community + course in one. Industry standard. But costs money.
- **Systeme.io** (FREE plan) — course hosting, landing pages, email, payment. Handles up to 2,000 contacts and 1 course for free.
- **Google Drive + Notion** (FREE) — cheapest option. Upload videos to unlisted YouTube/Vimeo, organize in a Notion page, share access link after payment. Not pretty but works.
- **Teachable Free Plan** — basic course hosting with their branding

**Recommended for $0 budget: Systeme.io free plan**
- Host all videos and PDFs
- Built-in checkout (accepts Stripe/PayPal)
- Email automation included
- Landing page builder included
- Upgrade to $27/mo when you have revenue

**Content creation order:**
1. Record Module 1 (overview) — screen recording with Loom (free)
2. Record Module 4 (CRM setup) — this is the most impressive, record it next
3. Record Module 2 (PropStream) and Module 3 (skip tracing)
4. Package all existing written materials as PDFs (already built)
5. Record Modules 5-8
6. Total recording time needed: ~8-12 hours of screen recording

### PHASE 3: GET FIRST SALES (Week 3-6) — Cost: $0

**Free lead generation for Pipeline Mastery itself:**

1. **YouTube content** — Record 2-3 videos/week showing the system in action (no face needed — screen recordings with voiceover)
   - "How I Find Motivated Sellers Before They Hit Any List"
   - "The 13-Touch Follow-Up System That Closes 4-6 Deals/Month"
   - "Why Your CRM Is Costing You Deals"
   - "The Words That Kill Deals (And What To Say Instead)"
   
2. **Facebook Groups** — Join RE investing, wholesaling, and agent groups. Provide massive value. Drop knowledge. Don't pitch — let people come to you.

3. **TikTok/Instagram Reels** — Short clips showing system screenshots, before/after pipeline views, deal numbers. Screen recordings work great here.

4. **Reddit** — r/realestateinvesting, r/wholesaling, r/realtors — answer questions with deep knowledge, subtle mentions of "my system"

5. **Lead magnet** — "47 Words That Kill Deals (And What to Say Instead)" — free PDF download → captures email → email sequence → pitch Pipeline Mastery

6. **Webinar/VSL** — Record a 45-60 minute presentation showing the system. This becomes your sales tool. Send traffic to it from all channels.

### PHASE 4: SCALE (Month 2+) — Reinvest profits

Once you have 2-3 sales ($10K-$15K revenue):
- Invest in paid ads (Facebook/Instagram/YouTube)
- Hire a high-ticket closer (pay 10-15% commission per sale = $500-750 per close)
- Consider Skool for better community experience
- Add weekly office hours / Q&A calls to increase perceived value

---

## SECTION 6: REVENUE MODEL SUMMARY

### INCOME STREAMS

| Stream | Per Unit | Recurring? |
|---|---|---|
| Course sale | $5,000 | One-time |
| PropStream affiliate | $29.70/student/mo | Yes — lifetime |
| Zoho affiliate | $4.50/student/mo | Yes — 12 months |
| Launch Control affiliate | $30/student/mo | Yes — 12 months |
| Ballpoint affiliate | $100+/student/order | Yes — lifetime per customer |
| CallTools affiliate | $22-37/student/mo | Yes — negotiated |
| Payment plans interest | Built into higher total | One-time |

### YEAR 1 PROJECTION (Conservative)

| Metric | Value |
|---|---|
| Students (Year 1) | 30 |
| Course revenue | $150,000 |
| Affiliate revenue (monthly avg) | $2,500-$3,000/mo |
| Affiliate revenue (Year 1) | $20,000-$30,000 |
| **Total Year 1 Revenue** | **$170,000-$180,000** |

### COSTS (Year 1)

| Expense | Annual Cost |
|---|---|
| Wyoming LLC + registered agent | $160 |
| Virtual address | $348 |
| Domain + basic hosting | $150 |
| Course platform (Systeme.io paid plan) | $324 |
| Zapier (for your own operations) | $240 |
| Stripe fees (on $150K @ 2.9%) | ~$4,400 |
| Screen recording tools (Loom paid) | $150 |
| **Total Costs** | **~$5,772** |
| **Net Profit** | **~$164,000-$174,000** |

---

## SECTION 7: IMMEDIATE ACTION ITEMS

### THIS WEEK
1. ☐ Sign up for affiliate programs (all free — do this TODAY)
2. ☐ Reach out to CallTools and DataZapp for partnership terms
3. ☐ File Wyoming LLC ($100)
4. ☐ Get virtual address set up ($29)
5. ☐ Register domain

### NEXT WEEK
1. ☐ Get EIN, open bank account, set up Stripe
2. ☐ Set up Systeme.io (free) and upload existing materials as course
3. ☐ Record first 2-3 tutorial videos (screen recording with voiceover)
4. ☐ Deploy landing page to live domain with Stripe checkout

### WEEK 3-4
1. ☐ Finish recording all 8 modules
2. ☐ Package all PDFs and templates
3. ☐ Set up lead magnet funnel (free PDF → email → pitch)
4. ☐ Start posting YouTube/TikTok content

### MONTH 2
1. ☐ First sales coming in
2. ☐ Reinvest in paid advertising
3. ☐ Consider hiring high-ticket closer
4. ☐ Optimize based on student feedback

---

## KEY DECISION: REPLACE OR NEGOTIATE

**DataZapp** — No affiliate program. Either:
- Negotiate a deal (you're bringing 30+ customers/year)
- Replace with **BatchLeads** (30% recurring, has list building + skip tracing in one)
- Use **PropStream's built-in skip tracing** (simplifies the stack and one less tool to teach)

**CallTools** — Has partner program but no public rates. Either:
- Email their partner team and negotiate 15-25% recurring
- Replace with **JustCall** (20% recurring, Zoho integration built-in, includes dialer + SMS + voicemail in one platform)

**The rule is simple: if they don't pay you, they don't make the cut. Period.**
