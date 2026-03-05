# Fanbasis → Zapier → GHL Integration Guide
## Money Decoded 3-Track Funnel
## Created: 2026-03-05

---

## ARCHITECTURE

```
GHL Sales Page → "Buy Now" button → Fanbasis Checkout Link
        ↓
Customer completes payment on Fanbasis
        ↓
Fanbasis Zapier Trigger: "New Sale" (instant)
        ↓
Zapier maps data → sends to GHL Inbound Webhook
        ↓
GHL Workflow fires:
  → Create/update contact
  → Apply product tag
  → Grant membership access
  → Send confirmation email
  → Enroll in post-purchase sequence
```

---

## STEP 1: SET UP FANBASIS PRODUCTS

Log into Fanbasis and create these products:

| # | Product Name | Price | Type | BNPL |
|---|-------------|-------|------|------|
| 1 | Money Decoded Trilogy — All 3 Books | $7.00 | Digital, one-time | No |
| 2 | The Deal Machine — Active Investor's Playbook | $147.00 | Digital, one-time | Yes (Klarna) |
| 3 | The Wealth Shift — Reposition Your Money | $197.00 | Digital, one-time | Yes (Klarna) |
| 4 | The Foundation — Financial Blueprint | $97.00 | Digital, one-time | Yes (Klarna) |
| 5 | FIRE + RE Coaching — 6 Month Program | $5,997.00 | Service, one-time | Yes (all BNPL) |
| 6 | Coaching — 3-Pay Plan | $1,999.00 | Recurring, 3 payments | N/A |
| 7 | Coaching — 6-Pay Plan | $999.00 | Recurring, 6 payments | N/A |

For each product:
1. Create the product in Fanbasis dashboard
2. Copy the **shareable payment link** (e.g., `https://fanbasis.com/checkout/your-product-id`)
3. Upload digital files (PDFs, templates, audio) for auto-delivery
4. Enable BNPL/financing options where applicable

---

## STEP 2: SET UP ZAPIER (Middleware)

### Account
- Sign up at https://zapier.com ($29.99/mo Starter plan)
- Need: Fanbasis account connected + GHL account connected

### Create 5 Zaps (one per product type):

#### Zap 1: Trilogy Purchase ($7)
```
TRIGGER: Fanbasis → New Sale → Filter: product = "Trilogy"
ACTION: GHL → Inbound Webhook
  → email: {{sale_email}}
  → first_name: {{sale_first_name}}
  → last_name: {{sale_last_name}}
  → tags: buyer,trilogy-purchased
  → custom_field.product_purchased: trilogy
```

#### Zap 2: Deal Machine Purchase ($147)
```
TRIGGER: Fanbasis → New Sale → Filter: product = "Deal Machine"
ACTION: GHL → Inbound Webhook
  → email: {{sale_email}}
  → tags: deal-machine-buyer
  → custom_field.product_purchased: deal-machine
```

#### Zap 3: Wealth Shift Purchase ($197)
```
TRIGGER: Fanbasis → New Sale → Filter: product = "Wealth Shift"
ACTION: GHL → Inbound Webhook
  → email: {{sale_email}}
  → tags: wealth-shift-buyer
  → custom_field.product_purchased: wealth-shift
```

#### Zap 4: Foundation Purchase ($97)
```
TRIGGER: Fanbasis → New Sale → Filter: product = "Foundation"
ACTION: GHL → Inbound Webhook
  → email: {{sale_email}}
  → tags: foundation-buyer
  → custom_field.product_purchased: foundation
```

#### Zap 5: Coaching Enrollment ($5,997)
```
TRIGGER: Fanbasis → New Sale → Filter: product contains "Coaching"
ACTION: GHL → Inbound Webhook
  → email: {{sale_email}}
  → tags: enrolled-group
  → custom_field.product_purchased: coaching
```

#### Zap 6 (Optional): Refund Handler
```
TRIGGER: Fanbasis → Refund Issued
ACTION: GHL → Inbound Webhook
  → email: {{sale_email}}
  → tags: refunded
  → (GHL workflow removes access)
```

---

## STEP 3: SET UP GHL INBOUND WEBHOOKS

In GHL, create a workflow for each purchase event:

### Webhook Workflow: Trilogy Purchased
1. Go to **Automation → Workflows → + Create Workflow**
2. Trigger: **Inbound Webhook**
3. Copy the webhook URL (give to Zapier)
4. Steps:
   - Create/Update Contact (from webhook data)
   - Add Tag: `buyer`
   - Add Tag: `trilogy-purchased`
   - Remove Tag: `in-sequence-a`
   - Remove From Workflow: `MD — Sequence A: Book 1 to Trilogy`
   - Update Pipeline: Money Decoded Funnel → Trilogy Buyer
   - Grant Membership: Money Decoded → Trilogy level
   - Send Email: Trilogy confirmation with download links

### Webhook Workflow: Track Product Purchased
(Create one for each: Deal Machine, Wealth Shift, Foundation)
1. Trigger: **Inbound Webhook**
2. Steps:
   - Create/Update Contact
   - Add Tag: `[product]-buyer`
   - Remove from B-sequence workflow
   - Update Pipeline: → Track Product Buyer
   - Grant Membership: Money Decoded → [Track level]
   - Send Email: Product confirmation
   - Enroll in C-sequence

### Webhook Workflow: Coaching Enrolled
1. Trigger: **Inbound Webhook**
2. Steps:
   - Add Tag: `enrolled-group`, `active-student`
   - Update Pipeline: → Enrolled
   - Grant Membership: Money Decoded → Coaching
   - Grant Community Access: FIRE Coaching Community
   - Send Email: Coaching welcome
   - Internal Notification

---

## STEP 4: LINK FANBASIS CHECKOUT TO GHL PAGES

On each GHL sales page, replace the order form with a button linking to Fanbasis:

### Delivery + Tripwire Page (Book 1 download)
```html
<a href="https://fanbasis.com/checkout/[TRILOGY-PRODUCT-ID]?email={{contact.email}}&first_name={{contact.first_name}}"
   class="btn-gold" target="_blank">
   GET THE TRILOGY — $7
</a>
```

### Deal Machine Offer Page
```html
<a href="https://fanbasis.com/checkout/[DM-PRODUCT-ID]?email={{contact.email}}"
   class="btn-gold" target="_blank">
   GET THE DEAL MACHINE — $147
</a>
<!-- Financing option -->
<p style="text-align:center; margin-top:10px;">
   <small>Or pay as low as $12/mo with Klarna</small>
</p>
```

### Wealth Shift Offer Page
```html
<a href="https://fanbasis.com/checkout/[WS-PRODUCT-ID]?email={{contact.email}}"
   class="btn-gold" target="_blank">
   GET THE WEALTH SHIFT — $197
</a>
<p style="text-align:center; margin-top:10px;">
   <small>Or pay as low as $16/mo with Klarna</small>
</p>
```

### Foundation Offer Page
```html
<a href="https://fanbasis.com/checkout/[FD-PRODUCT-ID]?email={{contact.email}}"
   class="btn-gold" target="_blank">
   GET THE FOUNDATION — $97
</a>
<p style="text-align:center; margin-top:10px;">
   <small>Or pay as low as $8/mo with Klarna</small>
</p>
```

**NOTE:** Check if Fanbasis supports query parameters for pre-filling customer data. If not, the customer enters their info on Fanbasis checkout, and Zapier matches by email in GHL.

---

## STEP 5: POST-PURCHASE REDIRECT

After Fanbasis checkout completes, customers need to get back to your funnel:

**Option A (if Fanbasis supports redirect URL):**
- Set post-purchase redirect to: `https://readmoneydecoded.com/thank-you`
- Customer seamlessly returns to your thank-you page

**Option B (if no redirect support):**
- Fanbasis shows its own confirmation page
- Zapier immediately fires → GHL sends confirmation email with portal link
- Email arrives within 30-60 seconds
- Customer clicks link in email → enters your membership portal

**Option B is likely the flow.** The email must be fast and clear:
- Subject: "Your [product] is ready — access everything here"
- Body: Membership portal login link + what to do first + audio module 1

---

## COST SUMMARY

| Service | Monthly Cost |
|---------|-------------|
| Fanbasis | TBD (transaction-based, check dashboard after signup) |
| Zapier Starter | $29.99/mo |
| GHL | $97/mo (existing) |
| **Total overhead** | **~$127/mo + Fanbasis fees** |

---

## CRITICAL SETUP ORDER

1. [ ] Fanbasis: Create account → create all 7 products → copy payment links
2. [ ] Zapier: Create account → connect Fanbasis + GHL → build 5 Zaps
3. [ ] GHL: Create 5 inbound webhook workflows → copy URLs to Zapier
4. [ ] GHL Pages: Replace order forms with Fanbasis checkout buttons
5. [ ] Test: Buy each product with a test email → verify GHL tags + emails fire
6. [ ] Go live

---

## FANBASIS RISK MITIGATION

Since Fanbasis can hold funds up to 180 days:
1. **Keep records** of every transaction
2. **Withdraw frequently** — don't let balance accumulate
3. **Respond to disputes immediately** — they can refund without your consent
4. **Monitor Trustpilot/BBB** for pattern changes
5. **Have PayPal as backup** — if Fanbasis freezes funds, switch to PayPal + GHL native integration instantly
