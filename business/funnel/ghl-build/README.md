# GHL Money Decoded Funnel — Build Package

## Quick Start

### Step 1: Get Your GHL Credentials

1. Log into GoHighLevel
2. Go to **Settings > Business Info** → copy your **Location ID**
3. Go to **Settings > Integrations > API** → create a **Private Integration Token** (or use existing)
4. Grant these scopes: `contacts`, `tags`, `custom-fields`, `emails`

### Step 2: Run the API Script

```bash
# Install dependency (if not already installed)
pip install requests

# Run with CLI args
python ghl-setup.py --api-key YOUR_API_KEY --location-id YOUR_LOCATION_ID

# Or use environment variables
export GHL_API_KEY=your_key_here
export GHL_LOCATION_ID=your_location_id_here
python ghl-setup.py

# Dry run (see what would be created without making API calls)
python ghl-setup.py --api-key YOUR_KEY --location-id YOUR_ID --dry-run
```

**What the script creates:**
- 36 tags (lifecycle, track, engagement, sequence, traffic source)
- 2 custom fields (`investor_track` radio, `funnel_source` text)
- Validates email template HTML files exist in `ghl-emails/`

### Step 3: Build Everything Else in GHL UI

Open `GHL-CLICK-BY-CLICK-GUIDE.md` and follow it step by step:

1. **Pipeline** — 1 pipeline, 10 stages (5 min)
2. **Products** — 7 products + 2 payment plans (15 min)
3. **Funnel Pages** — 9 pages (45-60 min)
4. **Workflows** — 18 workflows (60-90 min)
5. **Membership** — 6 access levels, content categories, drip schedules (30 min)
6. **Calendar** — Strategy call with availability + form fields (10 min)
7. **Smart Lists** — 11 saved CRM filters (10 min)
8. **Community** — 1 community, 6 channels (5 min)

**Total build time:** 2-4 hours

### Step 4: Load Email Templates

For each workflow that sends an email, copy the HTML from `ghl-emails/` into GHL's email builder:

1. In the workflow, click the **Send Email** action
2. Switch to **HTML mode** in the email editor
3. Open the corresponding HTML file from `ghl-emails/`
4. Copy-paste the full HTML content
5. Switch back to visual mode to verify it looks correct
6. Save

### Step 5: Test the Full Funnel

Use the testing checklist at the bottom of `GHL-CLICK-BY-CLICK-GUIDE.md` to walk through the complete flow with a test contact.

---

## File Structure

```
ghl-build/
├── README.md                         ← You are here
├── ghl-setup.py                      ← API automation script (tags + fields)
├── ghl-config.json                   ← Master config (all tags, fields, email refs)
├── GHL-CLICK-BY-CLICK-GUIDE.md       ← UI build guide (pipelines, products, workflows, etc.)
└── ghl-emails/                       ← HTML email templates
    ├── sequence-a/                   ← 6 emails: Book 1 → $7 Trilogy
    │   ├── a1-red-pill.html
    │   ├── a2-august-1971.html
    │   ├── a3-bank-lie.html
    │   ├── a4-blackrock.html
    │   ├── a5-social-proof.html
    │   └── a6-last-chance.html
    ├── sequence-b1/                  ← 4 emails: Active track → $147 Deal Machine
    │   ├── b1-1-active-track.html
    │   ├── b1-2-gap.html
    │   ├── b1-3-deal-machine-breakdown.html
    │   └── b1-4-one-more-thing.html
    ├── sequence-b2/                  ← 4 emails: Passive track → $197 Wealth Shift
    │   ├── b2-1-passive-track.html
    │   ├── b2-2-problem-question.html
    │   ├── b2-3-wealth-shift-breakdown.html
    │   └── b2-4-cost-of-waiting.html
    ├── sequence-b3/                  ← 4 emails: Foundation track → $97 Foundation
    │   ├── b3-1-foundation-track.html
    │   ├── b3-2-eyes-open.html
    │   ├── b3-3-foundation-breakdown.html
    │   └── b3-4-no-shame.html
    ├── sequence-c1/                  ← 9 emails: Deal Machine buyer → Coaching app
    │   ├── c1-1-deal-making-track.html
    │   ├── c1-2-down-markets.html
    │   ├── c1-3-first-deal-lost.html
    │   ├── c1-4-meet-david.html
    │   ├── c1-5-keisha-wholesale.html
    │   ├── c1-6-three-mistakes.html
    │   ├── c1-7-applications-open.html
    │   ├── c1-8-spots-left.html
    │   └── c1-9-closing-friday.html
    ├── sequence-c2/                  ← 9 emails: Wealth Shift buyer → Coaching app
    │   ├── c2-1-wealth-shift-ready.html
    │   ├── c2-2-advisor-wont-tell.html
    │   ├── c2-3-250m-lesson.html
    │   ├── c2-4-david-story.html
    │   ├── c2-5-fear-500k.html
    │   ├── c2-6-three-wealth-mistakes.html
    │   ├── c2-7-applications-open.html
    │   ├── c2-8-spots-remaining.html
    │   └── c2-9-final-note.html
    ├── sequence-c3/                  ← 9 emails: Foundation buyer → Coaching app
    │   ├── c3-1-welcome-foundation.html
    │   ├── c3-2-started-with-less.html
    │   ├── c3-3-keisha-680.html
    │   ├── c3-4-keisha-3-properties.html
    │   ├── c3-5-not-starting-late.html
    │   ├── c3-6-four-mistakes.html
    │   ├── c3-7-applications-open.html
    │   ├── c3-8-spots-left.html
    │   └── c3-9-last-email.html
    └── sequence-d/                   ← 4 emails: Application → Strategy call
        ├── d1-application-received.html
        ├── d2-what-to-expect.html
        ├── d3-why-15.html
        └── d4-quick-question.html
```

## What's Automated vs Manual

| Component | Method | Count |
|-----------|--------|-------|
| Tags | API Script | 36 |
| Custom Fields | API Script | 2 |
| Email HTML Templates | Pre-built files | 49 |
| Pipeline | UI (guide) | 1 (10 stages) |
| Products | UI (guide) | 9 |
| Workflows | UI (guide) | 18 |
| Funnel Pages | UI (guide) | 9 |
| Membership Levels | UI (guide) | 6 |
| Calendar | UI (guide) | 1 |
| Smart Lists | UI (guide) | 11 |
| Community | UI (guide) | 1 (6 channels) |

## Hiring a Fiverr Builder

If you want to hand this off to a GHL freelancer:

1. Share this entire `ghl-build/` folder with them
2. Tell them: "Run the Python script first, then follow the click-by-click guide"
3. Budget: $50-$150 for an experienced GHL builder
4. Timeline: 2-3 hours of work
5. They should NOT need to write any copy — all email content is pre-built in the HTML files

## Revenue Model

Per 10,000 leads through this funnel:

| Stage | Revenue |
|-------|---------|
| $7 Trilogy (10% conversion) | $7,000 |
| Track products ($97-$197) | $36,637 |
| Group coaching ($5,997) | $47,976 |
| 1-on-1 upgrade ($14,997) | $14,997 |
| **Total** | **$106,610** |
| **Revenue per lead** | **$10.66** |
