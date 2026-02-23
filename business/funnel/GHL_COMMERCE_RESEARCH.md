# GHL COMMERCE RESEARCH — Selling Digital Products Through GoHighLevel
## J. Marque Brand | Money Decoded + FIRE Workbook + Coaching
### Research Date: 2026-02-22

---

## TABLE OF CONTENTS

1. [GHL Payment Integration (Stripe)](#1-ghl-payment-integration)
2. [GHL Digital Product Delivery](#2-ghl-digital-product-delivery)
3. [GHL Funnels vs External Pages](#3-ghl-funnels-vs-external-pages)
4. [GHL vs Gumroad Comparison](#4-ghl-vs-gumroad-comparison)
5. [Product-by-Product GHL Setup Plan](#5-product-by-product-ghl-setup-plan)
6. [Recommendation](#6-recommendation)

---

## 1. GHL PAYMENT INTEGRATION

### Connecting Stripe to GHL

| Step | Action |
|------|--------|
| 1 | Navigate to **Payments > Integrations** in your GHL sub-account |
| 2 | Click **Connect with Stripe** |
| 3 | Log into Stripe (or create account if needed) |
| 4 | Authorize GHL to access your Stripe account |
| 5 | Done — Stripe is now your payment processor |

**Requirements:**
- Admin-level access in Stripe to authorize the integration
- GHL only tracks transactions created *through GHL* after integration — previous Stripe payments do NOT sync
- Test mode available: simulate payments without charging real cards

### Supported Payment Methods via Stripe

| Method | Supported |
|--------|-----------|
| Credit/Debit Cards | YES |
| Apple Pay | YES |
| Google Pay | YES |
| ACH Direct Debit | YES |
| Affirm | YES |
| Klarna | YES |
| AfterPay | YES |

**Key:** Affirm/Klarna support means BNPL (Buy Now Pay Later) is built-in — critical for the $97 FIRE Workbook upsell.

### Setting Up Products in GHL

GHL handles products in two ways:

**Method 1: E-Commerce Store Products**
- Navigate to **Payments > Products**
- Create product with name, description, price, and type (one-time or recurring)
- Attach digital files (up to 10 files, 100 MB each)
- After purchase, customer gets email with "Access Downloads" button → Customer Access Center (OTP login required)

**Method 2: Funnel Order Form Products**
- Create product in Payments > Products
- Drag an Order Form element onto a funnel page
- Select the product to attach
- Works with 1-step or 2-step order forms

### Order Forms vs Checkout Pages

| Feature | Order Form (Funnel) | E-Commerce Checkout |
|---------|---------------------|---------------------|
| Location | Embedded in funnel page | Standalone store page |
| Customization | Full design control | Template-based |
| Upsells | One-click upsells on next funnel step | Upsell products at checkout |
| Order Bumps | YES — multiple bumps per form | YES |
| Best For | Digital products, courses, coaching | Physical products, multi-SKU stores |
| **Our Use Case** | **THIS ONE** | Not needed |

### One-Click Upsells

This is the critical feature for the $7 → $97 OTO flow.

**How it works:**
1. Customer buys $7 Trilogy on funnel Step 1 (order form)
2. Payment token is stored from Step 1
3. Customer lands on Step 2 (OTO page with FIRE Workbook at $97)
4. Customer clicks "Yes, Add This" — charged instantly using stored token, NO re-entry of card info
5. If customer declines, they go to a downsell page or thank-you page

**Supported processors for one-click upsells:** Stripe, Authorize.net, NMI, PayPal, Square

**Limitation:** Each funnel step supports ONE upsell product. To offer multiple upsells, chain multiple funnel steps (Step 2 = OTO1, Step 3 = OTO2, etc.)

### Order Bumps

- Embedded directly within the order form (checkbox offer)
- Multiple bump products allowed per form
- Works with Stripe, PayPal, and all supported GHL processors
- **Use case:** On the $7 Trilogy checkout, add the FIRE Workbook as a $67 order bump (discounted from $97 to incentivize impulse add)

### Workflow Automation on Purchase

| Trigger | Action |
|---------|--------|
| Order Submitted | Add tag, send email, grant membership access |
| Payment received (Stripe) | One-time charge workflow action |
| Product purchased | Move pipeline stage, trigger email sequence |

**Important:** Enable "Allow Multiple" in workflow settings so each purchase event (main product + bump + upsell) triggers separately.

---

## 2. GHL DIGITAL PRODUCT DELIVERY

### Method 1: E-Commerce Store Digital Delivery (Native)

**How it works:**
1. Upload PDF/EPUB files to the product (up to 10 files, 100 MB each per product)
2. Customer purchases → receives Order Confirmation Email
3. Email contains "Access Downloads" button
4. Button leads to **Customer Access Center** (OTP-secured login)
5. Customer downloads files

**Pros:**
- Native, no-code setup
- Secure — OTP login required
- Download tracking built-in

**Cons:**
- Customer must go through OTP flow (friction)
- Only works for e-commerce store purchases, not funnel order forms
- No direct download link in email

### Method 2: Membership Area (Courses/Memberships)

**How it works:**
1. Create a "Course" or "Membership" in GHL
2. Add lessons/modules with PDF attachments or embedded content
3. On purchase → workflow grants membership access automatically
4. Customer logs into membership portal to access content

**Capabilities:**
- Drip content: unlock lessons X days after enrollment
- Completion-based unlock: must finish Module 1 before Module 2 opens
- Tag-based unlock: grant access to specific modules via tags
- Private channel access: restrict courses to specific community channels

**Pros:**
- Professional look (course portal)
- Drip scheduling for workbooks/courses
- Access control via tags and workflows
- Can host ALL products (ebooks + workbook) in one portal
- Community features built-in

**Cons:**
- Overkill for simple PDF download
- Customer needs portal login

### Method 3: Workflow-Based Email Delivery (Recommended for Ebooks)

**How it works:**
1. Upload PDFs to GHL Media Library
2. On purchase trigger → Workflow sends email with download link
3. Link points to Media Library file (can use expiring links for security)
4. Customer clicks and downloads directly from email

**Pros:**
- Instant delivery, zero friction
- No portal login needed
- Works with funnel order forms AND e-commerce store
- Can combine: email link + membership access

**Cons:**
- Less secure (link can be shared)
- No built-in download tracking

### Recommended Delivery Strategy for Our Products

| Product | Delivery Method | Why |
|---------|----------------|-----|
| Book 1 (FREE) | Workflow email with download link | Zero friction, fast lead capture |
| Trilogy ($7) | Workflow email with download links + Membership access | Email for instant gratification, portal for long-term access |
| FIRE Workbook ($97) | Membership portal only | Premium feel, drip-able, completion tracking |
| Group Coaching ($5,997) | Membership portal + Community | Full course portal, private channel, drip schedule |

### DRM / Access Control

GHL does NOT have traditional DRM (like Adobe DRM or Kindle DRM). Available protections:

| Protection | Available |
|-----------|-----------|
| OTP-secured Customer Access Center | YES |
| Expiring download links | YES (via workflow timing) |
| Download limit tracking | YES (via Customer Access Center) |
| PDF password protection | NO (do this before uploading) |
| Watermarking with buyer info | NO (do this before uploading) |
| Membership portal login required | YES |
| IP/device restrictions | NO |

**Bottom line:** For $7 ebooks, DRM is not worth the friction. For $97 workbook, membership portal access is sufficient. For $5,997 coaching, the portal + community is adequate.

---

## 3. GHL FUNNELS VS EXTERNAL PAGES

### Can GHL Host the Full Funnel? (Opt-in → Tripwire → OTO → Thank You)

**YES.** GHL's funnel builder can host every page in the sequence:

| Page | GHL Capable | Template Available |
|------|------------|-------------------|
| Opt-in (email capture) | YES | 400+ templates |
| Delivery + Tripwire (Book 1 download + $7 offer) | YES | Tripwire templates available |
| OTO (one-click $97 upsell) | YES | OTO/upsell templates |
| Downsell (if OTO skipped) | YES | Standard page |
| Thank You / Confirmation | YES | Standard page |
| Application (coaching questionnaire) | YES | Survey/form templates |

### GHL Funnel Builder Capabilities

**Strengths:**
- Drag-and-drop builder, no code needed
- AI page generation (describe what you want → GHL builds it)
- Built-in elements: countdown timers, pop-ups, video embeds, testimonial blocks, order forms, booking calendars, surveys, forms
- 1-step and 2-step order forms
- Shopping cart mode
- Global sections (header/footer reusable across pages)
- Mobile responsive (auto-generated, editable)
- Custom CSS/JS injection supported
- A/B split testing on funnel pages
- 400+ pre-built templates

**Limitations:**
- Originally desktop-first design → mobile rendering can be clunky
- Page speed can be slower than hand-coded HTML
- SEO is weak by default: no enforced URLs, metadata, schema, or canonicals
- Routine page edits can change URLs or create duplicates
- Limited design flexibility compared to raw HTML/CSS
- No real-time SEO feedback (though new SEO assistant auto-populates metadata as of 2025)

### GHL Page Speed Optimization

GHL provides built-in optimization settings:
- **Optimize JavaScript** — enable in funnel settings
- **Image optimization** — enable in funnel settings
- **Lazy loading** — available for images
- **Minimize elements** — fewer sections = faster load

**Reality check:** GHL funnels typically score 50-75 on Google PageSpeed. Hand-coded HTML pages score 90-100. For a funnel where traffic comes from email/social (not SEO), this matters less.

### GHL Funnel Builder vs Our Custom HTML Pages

| Factor | GHL Funnel Builder | Custom HTML (what we built) |
|--------|-------------------|---------------------------|
| Speed to edit | Minutes (drag-and-drop) | Requires code changes |
| Page speed | 50-75 PageSpeed | 90-100 PageSpeed |
| Design flexibility | Template-constrained | Unlimited |
| Mobile rendering | Auto (sometimes clunky) | Manual (pixel-perfect) |
| SEO | Weak default, improving | Full control |
| Order form integration | Native, seamless | Requires embed or redirect |
| Upsell flow | Built-in one-click | Requires custom integration |
| Email automation | Native triggers | Requires webhook/Zapier |
| Analytics | Built-in tracking | Requires GTM/analytics setup |
| A/B testing | Built-in | Requires external tool |
| **Verdict** | **USE FOR FUNNEL PAGES** | **USE FOR PUBLIC-FACING SITE** |

### Recommendation: Hybrid Approach

1. **Use GHL funnel builder** for the checkout flow (opt-in → tripwire → OTO → thank-you) because:
   - Native order form + one-click upsell is seamless
   - Workflow triggers fire automatically on purchase
   - No external integrations needed
   - A/B testable without code

2. **Keep custom HTML pages** for:
   - Public landing pages that need SEO (if we go organic search later)
   - The ebook reader/preview page
   - Any page that needs perfect design control

3. **Traffic routing:**
   - Social media links → GHL opt-in page (fast capture)
   - Gumroad "About" page links → GHL opt-in page
   - Organic Google traffic → Custom HTML landing page → redirect to GHL funnel

---

## 4. GHL VS GUMROAD COMPARISON

### Transaction Fees

| Platform | Fee Structure | On a $7 Sale | On a $97 Sale | On a $5,997 Sale |
|----------|-------------- |-------------|--------------|-----------------|
| **GHL + Stripe** | 2.9% + $0.30 per transaction | $0.50 (7.2%) | $3.11 (3.2%) | $174.21 (2.9%) |
| **Gumroad** | 10% flat + payment processing (~2.9% + $0.30) | $1.30 (18.6%) | $13.00 (13.4%) | $780.00 (13.0%) |

**Annual cost comparison at projected volume:**

| Scenario | GHL + Stripe Fees | Gumroad Fees | Savings with GHL |
|----------|--------------------|--------------|-------------------|
| 500 x $7 sales/yr | $252 | $3,850 | **$3,598/yr** |
| 100 x $97 sales/yr | $311 | $1,300 | **$989/yr** |
| 10 x $5,997 sales/yr | $1,742 | $7,800 | **$6,058/yr** |
| **TOTAL** | **$2,305** | **$12,950** | **$10,645/yr saved** |

**GHL subscription cost:** $97/mo ($1,164/yr on Starter) — still saves **$9,481/yr** net vs Gumroad.

### Feature Comparison

| Feature | GHL | Gumroad |
|---------|-----|---------|
| **Transaction Fees** | 2.9% + $0.30 (Stripe only) | 10% + ~3.2% processing |
| **Monthly Fee** | $97-$497/mo | $0 |
| **Checkout Experience** | Custom funnel pages, 1-step/2-step forms | Simple, clean, standard |
| **One-Click Upsells** | YES — native, no re-entry of card | NO — must go through separate checkout |
| **Order Bumps** | YES — multiple per form | NO |
| **Email Automation** | YES — full built-in (sequences, workflows, broadcasts) | Basic — drip sequences only |
| **Funnel Builder** | YES — unlimited pages, A/B testing | NO — single product pages only |
| **Membership/Course Hosting** | YES — full portal with drip, access control | NO |
| **CRM** | YES — full contact management, pipeline, tags | NO — basic customer list |
| **Analytics/Tracking** | Funnel analytics, conversion rates, revenue dashboards | Basic sales analytics |
| **Customer Management** | Full CRM — tags, segments, pipeline stages, notes | Basic customer list + email |
| **Affiliate Program** | YES (on Unlimited/Pro plans) | YES — built-in |
| **Tax Handling** | YOU handle sales tax (or use Stripe Tax add-on) | Gumroad handles ALL tax (MoR) |
| **Marketplace/Discovery** | NO — you drive all traffic | YES — Gumroad Discover (30% fee on marketplace sales) |
| **Ease of Setup** | Medium — more powerful but more to configure | Easy — upload + sell in 5 minutes |
| **BNPL (Klarna/Affirm)** | YES — via Stripe integration | NO |
| **Custom Domain** | YES | YES (paid feature) |

### Key Differentiators

**GHL wins on:**
- One-click upsells (critical for $7 → $97 flow)
- Order bumps (add $67 workbook bump to $7 checkout)
- Full email automation (our 4 sequences live natively)
- CRM + pipeline management (track leads through entire funnel)
- Membership hosting (FIRE workbook + coaching portal)
- Dramatically lower fees at scale

**Gumroad wins on:**
- Zero monthly cost (pay only when you sell)
- Marketplace discovery (passive traffic)
- Tax handling — Gumroad is a Merchant of Record, handles ALL global sales tax/VAT
- Simplicity — zero learning curve
- Quick launch — upload and sell in minutes

---

## 5. PRODUCT-BY-PRODUCT GHL SETUP PLAN

### Product 1: Book 1 — FREE Lead Magnet

| Setting | Value |
|---------|-------|
| Product Type | Digital product (free) |
| Price | $0.00 |
| Funnel Page | Opt-in page (email capture only, no payment) |
| Delivery | Workflow: on form submit → send email with download link → add tag "lead" → start Sequence A |
| File | Upload Book 1 PDF to Media Library |
| Membership | Optional — also grant "Free Tier" membership access |

### Product 2: Money Decoded Trilogy — $7 Tripwire

| Setting | Value |
|---------|-------|
| Product Type | Digital product |
| Price | $7.00 one-time |
| Funnel Page | Delivery page with order form (same page as Book 1 download) |
| Order Form | 2-step: Step 1 = email (pre-filled from opt-in), Step 2 = card |
| Order Bump | FIRE Workbook at $67 (discounted from $97) — "Add the complete workbook for $67 (save $30)" |
| Delivery | Workflow: on purchase → send email with all 3 PDF links → add tag "buyer" → grant "Trilogy" membership access → start Sequence B if OTO skipped |
| Files | Upload all 3 book PDFs to Media Library |

### Product 3: FIRE Workbook — $97 OTO / Upsell

| Setting | Value |
|---------|-------|
| Product Type | Digital product |
| Price | $97.00 one-time |
| Funnel Page | OTO page (one-click upsell, appears after $7 purchase) |
| Upsell Type | One-click (uses stored payment token from $7 purchase) |
| Delivery | Workflow: on purchase → add tag "fire-buyer" → grant "FIRE Workbook" membership access → send confirmation email → start Sequence C |
| Membership Content | 7 modules in membership portal, dripped over 7 days |
| Downsell | If OTO skipped → downsell page at $47 (limited version) OR skip to thank-you |

### Product 4: Group Coaching — $5,997 (Application-Based)

| Setting | Value |
|---------|-------|
| Product Type | Service (NOT digital product — application required) |
| Price | $5,997 (collected on strategy call or via payment link) |
| Funnel Page | Application page (GHL survey/form with qualifying questions) |
| Checkout | NO direct checkout — application form only |
| Delivery | Workflow: on application submit → add tag "applicant" → start Sequence D → add to coaching pipeline → assign to calendar for strategy call |
| Post-Close | Manual: send payment link ($5,997) → on payment → grant "Coaching" membership access + add to community |
| Financing Option | Offer payment plans: 3x $1,999 or 6x $999 (GHL supports recurring billing via Stripe subscriptions) |

### Funnel Page Flow in GHL

```
FUNNEL: "Money Decoded"

Step 1: Opt-In Page
  → Form: Name + Email
  → Submit → Workflow: tag "lead", Sequence A
  → Redirect to Step 2

Step 2: Delivery + Tripwire Page
  → Top: "Your free ebook is ready — downloading now..."
  → Auto-email with Book 1 download link
  → Below: "Get the complete trilogy for just $7"
  → Order Form (2-step) with $67 FIRE Workbook order bump
  → On purchase → Redirect to Step 3

Step 3: OTO Page (One-Click Upsell)
  → "Wait — your order is confirmed. Special one-time offer..."
  → FIRE Workbook at $97 (or $47 if they got the $67 bump — skip this step)
  → One-click "Yes, add this to my order" button
  → On accept → Redirect to Step 4
  → On decline → Redirect to Step 4

Step 4: Thank You / Confirmation
  → "You're in. Check your email for your downloads."
  → Links to membership portal
  → Links to community
  → Social proof + coaching teaser

Step 5: Application Page (linked from Sequence C emails)
  → Survey: 2 qualifying questions + contact info
  → Submit → Workflow: tag "applicant", Sequence D, pipeline stage "Applied"
```

---

## 6. RECOMMENDATION

### Verdict: SELL EVERYTHING THROUGH GHL. DROP GUMROAD.

**Reasoning:**

| Factor | Decision |
|--------|----------|
| **Fees** | GHL + Stripe saves ~$10K/yr at modest volume vs Gumroad |
| **Upsell flow** | GHL has native one-click upsells. Gumroad does NOT. This alone justifies GHL. |
| **Order bumps** | GHL has order bumps. Gumroad does NOT. Extra revenue on every checkout. |
| **Email automation** | All 4 email sequences run natively in GHL. No Zapier, no external ESP. |
| **CRM** | Every buyer is a contact in GHL with tags, pipeline stage, activity history. Gumroad gives you a flat customer list. |
| **Membership** | FIRE Workbook and Coaching both need a portal. GHL has one built-in. Gumroad does not. |
| **Single system** | One login, one dashboard, one analytics view. No fragmented data. |

### What About Gumroad's Advantages?

| Gumroad Advantage | Mitigation |
|-------------------|------------|
| **Marketplace discovery** | Gumroad Discover charges 30% on marketplace sales — not worth it. Our traffic is social/email, not Gumroad's marketplace. |
| **Tax handling (MoR)** | Enable Stripe Tax ($0.50 per transaction) for automatic sales tax calculation and remittance. Or — for digital products under $50K/yr in most states, you may not even need to collect sales tax. Research your nexus obligations. |
| **Zero monthly fee** | GHL is already $97/mo for the full CRM, email, funnels, and automation. We're paying it regardless. Adding commerce costs $0 extra. |
| **Quick setup** | GHL setup takes 1-2 days instead of 30 minutes. But it's a one-time investment that pays back every month in saved fees and increased conversions. |

### Dual-Platform Option (NOT Recommended)

If you wanted to keep Gumroad for cold traffic / SEO discovery:
- Gumroad: Book 1 (FREE) only — lead magnet to capture email
- Then redirect all Gumroad buyers into GHL email sequence
- Problem: fragmented customer data, two systems to manage, Gumroad gets 10% of every sale for no reason

**Better approach:** Use the Gumroad profile page ONLY as a redirect. Keep `jamaalrichard.gumroad.com` live with a "Get your free ebook" link that points to the GHL opt-in page. Zero Gumroad sales, zero Gumroad fees, but keep the Gumroad SEO/marketplace presence.

### Implementation Priority

| Step | Task | Time |
|------|------|------|
| 1 | Connect Stripe to GHL sub-account | 10 min |
| 2 | Create 4 products in GHL (Book 1, Trilogy, FIRE Workbook, Coaching) | 30 min |
| 3 | Build 5-step funnel in GHL (opt-in → delivery/tripwire → OTO → thank-you → application) | 2-3 hours |
| 4 | Set up membership portal (Trilogy access + FIRE Workbook modules) | 1-2 hours |
| 5 | Build 4 email workflows (Sequences A-D with purchase triggers) | 2-3 hours |
| 6 | Upload all PDFs to Media Library | 10 min |
| 7 | Test full flow end-to-end (Stripe test mode) | 1 hour |
| 8 | Update Gumroad profile to redirect to GHL opt-in | 10 min |
| 9 | Go live | — |
| **TOTAL** | | **~8 hours** |

### Cost Summary: GHL Commerce Stack

| Item | Monthly Cost |
|------|-------------|
| GHL Starter Plan | $97/mo (already paying) |
| Stripe processing | 2.9% + $0.30 per transaction |
| Stripe Tax (optional) | $0.50 per transaction |
| Custom domain (already have) | $0 |
| **Additional cost to sell through GHL** | **$0/mo** |

vs. Gumroad: 10% + ~3.2% per transaction + no upsells + no automation + no CRM.

---

## SOURCES

- [GHL Digital Product Delivery for E-Commerce](https://help.gohighlevel.com/support/solutions/articles/155000004054-how-to-deliver-digital-products-for-e-commerce-stores-)
- [GHL Getting Started: Create & Sell Products](https://help.gohighlevel.com/support/solutions/articles/155000005071-getting-started-sell-products)
- [GHL Stripe Integration](https://help.gohighlevel.com/support/solutions/articles/155000005073-getting-started-connect-stripe)
- [GHL Stripe Payment Methods Management](https://help.gohighlevel.com/support/solutions/articles/155000002377-manage-payment-methods-displayed-with-stripe-integration)
- [GHL One-Click Order Upsells in Forms](https://help.gohighlevel.com/support/solutions/articles/155000006914-how-to-use-order-upsell-in-forms)
- [GHL Order Bumps Setup](https://help.gohighlevel.com/support/solutions/articles/155000005767-forms-how-to-setup-and-use-order-bumps)
- [GHL One-Click Upsell in Memberships](https://help.gohighlevel.com/support/solutions/articles/48001213776-one-click-upsell-in-memberships)
- [GHL Shopping Cart Mode (V2 Funnels)](https://help.gohighlevel.com/support/solutions/articles/48001221440-shopping-cart-mode-in-one-and-two-step-order-forms-v2-funnels-only-)
- [GHL Membership/Course Access via Workflows](https://help.gohighlevel.com/support/solutions/articles/155000002845-how-to-grant-access-to-membership-courses-using-workflows)
- [GHL Advanced Course Unlock Options](https://help.gohighlevel.com/support/solutions/articles/155000004656-advanced-course-unlock-options-in-communities)
- [GHL Drip Content Notifications](https://help.gohighlevel.com/support/solutions/articles/155000002174-courses-in-app-notifications-for-comment-unlocked-drip-content)
- [GHL Page Speed Optimization](https://help.gohighlevel.com/support/solutions/articles/155000006268-how-to-improve-funnel-website-page-speed)
- [GHL Funnel & Website AI Builder](https://help.gohighlevel.com/support/solutions/articles/155000006713-funnels-websites-ai)
- [GHL Pricing Guide](https://help.gohighlevel.com/support/solutions/articles/155000001156-highlevel-pricing-guide)
- [GHL Transaction Fee Breakdown](https://marketing24.io/post/understanding-gohighlevel-transaction-fee-a-complete-breakdown)
- [GHL Pricing 2025 — Costs, Plans, Hidden Fees](https://marketing24.io/post/gohighlevel-pricing-2025-costs-best-plans--hidden-fees)
- [GHL SEO Technical Fixes 2026](https://www.e2msolutions.com/blog/technical-seo-gohighlevel/)
- [GHL for Coaches — Full Guide 2025](https://supplygem.com/gohighlevel-for-coaching/)
- [Gumroad Pricing: 10% Flat Fee](https://gumroad.com/pricing)
- [Gumroad Fee Explanation](https://gumroad.com/help/article/66-gumroads-fees)
- [Gumroad Pricing 2026 Comparison](https://www.schoolmaker.com/blog/gumroad-pricing)
- [Stripe Pricing & Fees](https://stripe.com/pricing)
