# JAMAAL'S ACTION CHECKLIST — Money Decoded Launch
## Everything YOU need to do (in order)
## Updated: 2026-03-05

---

## PRIORITY 1: ACCOUNTS & SETUP (Do Today)

### 1A. Grab readmoneydecoded.com domain (~$12)
- [ ] Go to https://www.namecheap.com or GoDaddy
- [ ] Search: `readmoneydecoded.com`
- [ ] Purchase it (~$10-$15/year)
- [ ] Point DNS to GHL: Set A record to GHL's IP (or use GHL custom domain setup)
- [ ] Also point `jamaalrichard.com` to GHL as secondary brand domain

### 1B. ElevenLabs Voice Clone (10 min, $5/mo)
- [ ] Log into ElevenLabs with jamaalrichard388@gmail.com
- [ ] Go to **VoiceLab → Add Voice → Instant Voice Clone**
- [ ] Record 1-5 minutes of clear voice (or upload existing recording)
   - Read naturally, like talking to a student
   - No background noise
   - Speak at your normal pace
- [ ] Name the voice: "J. Marque"
- [ ] Copy **Voice ID** from voice settings page
- [ ] Copy **API Key** from Profile → API Key
- [ ] Give both to Jai to run the audio generator

### 1C. New Zoom Account for J. Marque
- [ ] Go to https://zoom.us/signup
- [ ] Use a dedicated email (e.g., jmarque@readmoneydecoded.com after domain setup, or jamaalrichard388+zoom@gmail.com for now)
- [ ] Free plan works for 1-on-1 strategy calls (40 min limit on group)
- [ ] Consider Zoom Pro ($13.33/mo) for unlimited call length
- [ ] Connect to GHL: **Settings → Calendar Settings → Video Conferencing → Zoom → Authorize**

### 1D. Fanbasis Account Setup
- [ ] Go to https://fanbasis.com and sign up / complete onboarding
- [ ] Note: Onboarding may take 2-4 weeks. START THIS NOW.
- [ ] While waiting: Use everything else (GHL email sequences, membership portal, etc.)
- [ ] Once active: Create all 7 products (see FANBASIS_INTEGRATION_GUIDE.md)
- [ ] Copy all shareable payment links

### 1E. Zapier Account ($29.99/mo)
- [ ] Go to https://zapier.com and sign up for Starter plan
- [ ] Connect: Fanbasis + GHL
- [ ] Build the 5 Zaps (see FANBASIS_INTEGRATION_GUIDE.md)

---

## PRIORITY 2: GHL CONFIGURATION (30 min)

### 2A. Custom Domain in GHL
- [ ] Go to **Settings → Custom Domains → Add Domain**
- [ ] Add: `readmoneydecoded.com`
- [ ] Follow DNS verification steps
- [ ] Set as default funnel domain

### 2B. Create GHL Membership Portal
- [ ] **Sites → Memberships → + New Membership**
- [ ] Name: "Money Decoded"
- [ ] Create 6 tiers and upload files from `products/*/deliverables/`:

| Tier | Upload These Files |
|------|-------------------|
| Free | Book 1 PDF only |
| Trilogy ($7) | Books 1-3 PDFs + EPUBs |
| Deal Machine ($147) | DM PDF + 6 audio + 12 templates |
| Wealth Shift ($197) | WS PDF + 5 audio + 6 templates |
| Foundation ($97) | FD PDF + 7 audio + 9 templates |
| Coaching ($5,997) | Everything + call recordings |

### 2C. Create GHL Community
- [ ] **Sites → Communities → Create Community**
- [ ] Name: "FIRE Coaching Community"
- [ ] Create channels: #introductions, #general, #deal-analysis, #wins, #resources, #questions
- [ ] Access: tag `active-student` only

### 2D. Create GHL Calendar
- [ ] **Calendars → + New Calendar**
- [ ] Name: "Strategy Call — J. Marque"
- [ ] Duration: 30 min
- [ ] Availability: Tue/Thu 10AM-12PM & 2PM-4PM, Fri 10AM-12PM
- [ ] Connect Zoom account
- [ ] Required fields: Name, Email, Phone, Financial Goal, Track Purchased
- [ ] Reminders: 24h email + 1h email

### 2E. Create Inbound Webhook Workflows
(For Fanbasis → Zapier → GHL connection)
- [ ] Create 5 webhook-triggered workflows (one per product)
- [ ] Copy webhook URLs → paste into Zapier actions
- [ ] See FANBASIS_INTEGRATION_GUIDE.md for step-by-step

### 2F. Update Sales Pages with Fanbasis Buttons
- [ ] Replace GHL order forms with Fanbasis checkout links
- [ ] Add BNPL messaging: "Pay as low as $X/mo with Klarna"
- [ ] Ensure all buttons open Fanbasis in same window or new tab

---

## PRIORITY 3: TESTING (Before Going Live)

- [ ] Test: Submit opt-in form → receive Book 1 email → PDF downloads
- [ ] Test: Buy Trilogy via Fanbasis ($7) → Zapier fires → GHL applies tags → email arrives
- [ ] Test: Complete questionnaire → correct track tag → correct page redirect
- [ ] Test: Buy track product → membership portal access works → audio + templates visible
- [ ] Test: Submit coaching application → Sequence D emails start
- [ ] Test: Book strategy call → Zoom link in confirmation email
- [ ] Test: Mobile — check portal + community on LeadConnector app

---

## PRIORITY 4: LAUNCH PREP

- [ ] Set up Google Analytics on readmoneydecoded.com
- [ ] Create Gumroad redirect: jamaalrichard.gumroad.com → readmoneydecoded.com/free-ebook
- [ ] Prepare first social media post announcing the funnel
- [ ] Set up UTM links for each traffic source (TikTok, Instagram, etc.)
- [ ] Enable GHL engagement tracking workflows (WF17, WF18)

---

## FINANCING PUSH — BNPL STRATEGY

For maximum conversions, push financing HARD on every page:

### Track Products ($97-$197):
- Klarna / Affirm: "Pay in 4 installments of $24.25-$49.25"
- Highlight this on every buy button
- Add comparison: "Less than your monthly Netflix + Spotify combined"

### Coaching ($5,997):
- 3-Pay: $1,999/mo × 3
- 6-Pay: $999/mo × 6
- FlexxBuy / Coach Financing: Third-party financing for larger amounts
- PayPal Pay Later: "Pay over time with PayPal"
- Klarna: Monthly installments

### Script for Strategy Calls:
"The investment is $5,997. We offer three ways to make it work:
1. Pay in full — you save $0 (already a fair price)
2. 3 monthly payments of $1,999
3. 6 monthly payments of $999
4. Third-party financing through Klarna or Coach Financing — they approve most people in 60 seconds"

---

## CHEAT CODES — EVERY MONEY ANGLE

### Revenue Streams from This Funnel:
1. **$7 Trilogy** — lead qualifier + email list builder
2. **$97-$197 Track Products** — core revenue
3. **$5,997 Coaching** — high-ticket backend
4. **Affiliate Income** — GHL 40%, PropStream 30%, BatchLeads 30%, Ballpoint 20%
5. **Amazon KDP** — republish trilogy on Amazon for passive royalties
6. **Gumroad** — Book 1 free lead magnet already live
7. **Future: Course on Fanbasis** — repurpose audio modules into video course

### Quick Wins (can do THIS WEEK):
1. Publish Money Decoded Book 1 on Amazon KDP (FREE, earns royalties)
2. Share Gumroad link on TikTok/Instagram (start collecting emails NOW)
3. Set up Amazon Associates account (start earning affiliate income from book recommendations)
4. Create a simple landing page on readmoneydecoded.com → redirect to GHL opt-in

### Compounding Strategy:
- Every Book 1 download → 8-15% buy Trilogy ($7) → 15-25% buy Track ($97-$197) → 5-10% apply for Coaching ($5,997)
- Per 10,000 leads: ~$106,610 projected revenue (per GHL Blueprint model)
- Scale traffic → revenue scales linearly
