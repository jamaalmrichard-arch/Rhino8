# Money Decoded — Delivery Infrastructure Status
## Updated: 2026-03-05

---

## COMPLETED BY JAI

### Phase 1A: PDFs (DONE)
| Product | File | Size |
|---------|------|------|
| Deal Machine | `products/deal-machine/deliverables/deal-machine.pdf` | 553 KB |
| Wealth Shift | `products/wealth-shift/deliverables/wealth-shift.pdf` | 555 KB |
| Foundation | `products/foundation/deliverables/foundation.pdf` | 513 KB |

### Phase 1C: Templates (DONE — 27 files)
| Track | Count | Location |
|-------|-------|----------|
| Deal Machine | 12 | `products/deal-machine/deliverables/templates/` |
| Wealth Shift | 6 | `products/wealth-shift/deliverables/templates/` |
| Foundation | 9 | `products/foundation/deliverables/templates/` |

### Phase 3A: WF1-3 Step Definitions (DONE)
- WF1: Sequence A — Book 1 to Trilogy (23 steps: tags, pipeline, membership, 6 emails, 5 if/else checks, cleanup)
- WF2: Trilogy Purchase Handler (7 steps: tags, remove from WF1, pipeline, membership, confirmation email)
- WF3: Questionnaire Router (multi-branch: 3 tracks + fallback, 1-hour purchase windows, B-sequence enrollment)

### Phase 3B: Membership Grants Added (DONE)
- WF4: Deal Machine Purchase Handler → `grant_membership: Track 1: Deal Machine`
- WF5: Wealth Shift Purchase Handler → `grant_membership: Track 2: Wealth Shift`
- WF6: Foundation Purchase Handler → `grant_membership: Track 3: Foundation`
- WF16: Coaching Enrollment → `grant_membership: Coaching` + `grant_community_access: FIRE Coaching Community`

### Phase 1B: Audio Script (READY — needs ElevenLabs setup)
- Script: `tools/audio-generator/generate-audio.js`
- 18 modules defined (DM:6, WS:5, FD:7)
- Estimated ~375 minutes total audio
- Needs: ElevenLabs account + voice clone + API key

---

## JAMAAL'S MANUAL STEPS (35 min total)

### Step 1: ElevenLabs Voice Clone Setup (10 min)
1. Go to https://elevenlabs.io — sign up ($5/mo starter plan)
2. Go to **VoiceLab → Add Voice → Instant Voice Clone**
3. Upload 1-5 minutes of your clear voice recording (no background noise)
4. Name the voice "J. Marque"
5. Copy the **Voice ID** from voice settings
6. Copy your **API Key** from Profile → API Key
7. Run the audio generator:
   ```
   cd ~/Jai/tools/audio-generator
   set ELEVENLABS_API_KEY=your_key_here
   set ELEVENLABS_VOICE_ID=your_voice_id_here
   node generate-audio.js
   ```

### Step 2: Connect Stripe to GHL (5 min)
1. Log into GHL → **Payments → Settings**
2. Click **Connect Stripe**
3. If no Stripe account: Create at https://stripe.com (use Legacy Luxe Collective LLC info)
4. Authorize the connection
5. Test with a $1 charge through a test order form

### Step 3: Create GHL Products (10 min)
Go to **Payments → Products → + Add Product** for each:

| Product | Price | Type |
|---------|-------|------|
| Money Decoded: The History of Money (FREE) | $0 | Digital, one-time |
| Money Decoded Trilogy — All 3 Books | $7 | Digital, one-time |
| The Deal Machine — Active Investor's Playbook | $147 | Digital, one-time |
| The Wealth Shift — Reposition Your Money | $197 | Digital, one-time |
| The Foundation — Financial Blueprint | $97 | Digital, one-time |
| FIRE + RE Coaching — 6 Month Program | $5,997 | Service, one-time |
| Coaching — 3-Pay Plan | $1,999 | Recurring, 3 payments |
| Coaching — 6-Pay Plan | $999 | Recurring, 6 payments |

Upload the PDFs and templates from `products/*/deliverables/` to each product's Digital Files.

### Step 4: Create Membership Portal (10 min)
1. Go to **Sites → Memberships → + New Membership**
2. Name: "Money Decoded"
3. Create 6 levels:

| Level | Products Included | Files to Upload |
|-------|-------------------|-----------------|
| Free Tier | Book 1 PDF | Book 1 only |
| Trilogy | Books 1-3 PDFs + EPUBs | All trilogy files |
| Track 1: Deal Machine | Trilogy + DM PDF + 6 audio + 12 templates | All DM deliverables |
| Track 2: Wealth Shift | Trilogy + WS PDF + 5 audio + 8 templates | All WS deliverables |
| Track 3: Foundation | Trilogy + FD PDF + 7 audio + 9 templates | All FD deliverables |
| Coaching | Everything + call recordings | All files + community |

### Step 5: Create GHL Community (5 min)
1. Go to **Sites → Communities → Create Community**
2. Name: "FIRE Coaching Community"
3. Create 6 channels: #introductions, #general, #deal-analysis, #wins, #resources, #questions
4. Access: Restrict to contacts with tag `active-student`

### Step 6: Connect Zoom + Create Calendar (10 min)
1. Go to **Settings → Calendar Settings → Video Conferencing → Zoom → Authorize**
2. Create Calendar: **Calendars → + New Calendar**
   - Name: "Strategy Call — J. Marque"
   - Type: Personal
   - Duration: 30 min
   - Availability: Tue/Thu 10AM-12PM & 2PM-4PM, Fri 10AM-12PM
   - Required fields: Name, Email, Phone, Financial Goal, Track Purchased
   - Reminders: 24h email + 1h email
   - Confirmation: Use `{{appointment.location}}` merge field for Zoom link

### Step 7: Create Order Forms (10 min)
Embed order forms on these pages:
1. **Trilogy ($7)** → On Book 1 thank-you/delivery page
2. **Deal Machine ($147)** → On track-deal-machine.html
3. **Wealth Shift ($197)** → On track-wealth-shift.html
4. **Foundation ($97)** → On track-foundation.html

Each form: 2-step checkout → connect to Stripe → link to correct product → on submit redirect to thank-you page.

### Step 8: Wire Membership Access to Tags (5 min)
In GHL Automation, create simple trigger workflows:
- Tag `lead` added → Grant "Free Tier" membership
- Tag `trilogy-purchased` added → Grant "Trilogy" membership
- Tag `deal-machine-buyer` added → Grant "Track 1: Deal Machine" membership
- Tag `wealth-shift-buyer` added → Grant "Track 2: Wealth Shift" membership
- Tag `foundation-buyer` added → Grant "Track 3: Foundation" membership
- Tag `active-student` added → Grant "Coaching" membership + Community access

---

## END-TO-END TEST CHECKLIST

| # | Flow | Test |
|---|------|------|
| 1 | FREE opt-in | Submit form → receive email with Book 1 PDF download → verify portal access |
| 2 | $7 Trilogy | Purchase → instant email with 3 books → Trilogy membership in portal |
| 3 | Questionnaire | Select track → correct tag applied → correct sales page redirect |
| 4 | $147 DM | Purchase → email + portal access + audio + templates visible |
| 5 | $197 WS | Purchase → email + portal access + audio + templates visible |
| 6 | $97 FD | Purchase → email + portal access + audio + templates visible |
| 7 | Application | Submit → Sequence D emails start → tag applied |
| 8 | Calendar | Book call → Zoom link in confirmation → reminders at 24h + 1h |
| 9 | $5,997 Coaching | Payment → welcome email + community access + full portal |
| 10 | Mobile | Community + portal accessible on LeadConnector app |

---

## FILE TREE (all deliverables)

```
funnel/products/
├── deal-machine/
│   ├── manuscript.md
│   └── deliverables/
│       ├── deal-machine.pdf (553 KB)
│       ├── deal-machine.html
│       ├── audio/ (pending ElevenLabs)
│       │   ├── deal-machine-module-1-the-down-market-advantage.mp3
│       │   ├── deal-machine-module-2-wholesaling.mp3
│       │   ├── deal-machine-module-3-the-brrrr-method.mp3
│       │   ├── deal-machine-module-4-fix-flip.mp3
│       │   ├── deal-machine-module-5-creative-finance.mp3
│       │   └── deal-machine-module-6-your-first-90-days.mp3
│       └── templates/
│           ├── 01-wholesale-deal-analyzer.xlsx
│           ├── 02-brrrr-calculator.xlsx
│           ├── 03-flip-calculator.xlsx
│           ├── 04-13-touch-scripts.xlsx
│           ├── 05-seller-questionnaire.xlsx
│           ├── 06-purchase-agreement.xlsx
│           ├── 07-assignment-contract.xlsx
│           ├── 08-scope-of-work.xlsx
│           ├── 09-contractor-checklist.xlsx
│           ├── 10-90-day-tracker.xlsx
│           ├── 11-pipeline-tracker.xlsx
│           └── 12-lead-scoring.xlsx
├── wealth-shift/
│   ├── manuscript.md
│   └── deliverables/
│       ├── wealth-shift.pdf (555 KB)
│       ├── wealth-shift.html
│       ├── audio/ (pending ElevenLabs)
│       │   ├── wealth-shift-module-1-the-wall-street-tax.mp3
│       │   ├── wealth-shift-module-2-the-sdira-playbook.mp3
│       │   ├── wealth-shift-module-3-liquidation-strategy.mp3
│       │   ├── wealth-shift-module-4-passive-real-estate.mp3
│       │   └── wealth-shift-module-5-your-wealth-shift-calculator.mp3
│       └── templates/
│           ├── 01-portfolio-analysis.xlsx
│           ├── 02-fee-drag-calculator.xlsx
│           ├── 03-opportunity-cost-calculator.xlsx
│           ├── 04-sdira-timeline.xlsx
│           ├── 05-replacement-income.xlsx
│           └── 06-risk-assessment.xlsx
└── foundation/
    ├── manuscript.md
    └── deliverables/
        ├── foundation.pdf (513 KB)
        ├── foundation.html
        ├── audio/ (pending ElevenLabs)
        │   ├── foundation-module-1-budget-cash-flow.mp3
        │   ├── foundation-module-2-risk-management.mp3
        │   ├── foundation-module-3-net-worth.mp3
        │   ├── foundation-module-4-retirement-accounts.mp3
        │   ├── foundation-module-5-investment-team.mp3
        │   ├── foundation-module-6-your-buy-box.mp3
        │   └── foundation-module-7-90-day-launch-plan.mp3
        └── templates/
            ├── 01-monthly-budget.xlsx
            ├── 02-waste-finder.xlsx
            ├── 03-net-worth-statement.xlsx
            ├── 04-insurance-audit.xlsx
            ├── 05-credit-worksheet.xlsx
            ├── 06-retirement-calculator.xlsx
            ├── 07-team-roster.xlsx
            ├── 08-buy-box-builder.xlsx
            └── 09-90-day-launch-plan.xlsx
```
