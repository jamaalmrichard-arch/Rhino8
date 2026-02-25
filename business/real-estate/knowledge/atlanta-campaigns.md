# Atlanta Lead Generation Campaigns
**Last Updated:** 2026-02-25
**Market:** Atlanta, GA (Fulton, DeKalb, Cobb, Gwinnett Counties)
**Prepared for:** Jamaal Richard | Gold Rhino

---

# CAMPAIGN 1: PROBATE LEADS

## 1. Pulling Probate Filings — Metro Atlanta Courts

### Fulton County Probate Court (PRIMARY)
- **Online Portal:** Case search at fultoncountycourts.org/case-search/ — search by party name, case number, or attorney. No login required for basic searches.
- **Court Website:** fultonprobatega.org
- **What's Available Online:** Case summary, parties involved, filing dates, current status, docket entries
- **Documents Available (request):** Wills, letters of administration, estate inventories, accountings, guardianship records, petitions/motions
- **Legal Basis:** Georgia Open Records Act + Georgia Rules of Superior Court 21 — probate records are public
- **Cost:** Free online search for basic info. Document copies require request (online, mail, or in-person)
- **Contact:** (404) 612-4640 | Probate.Estates@fultoncountyga.gov
- **E-Filing:** Available via Odyssey eFile Georgia (efilega.tylertech.cloud)
- **Volume:** Fulton has the busiest justice system in the Southeast US. Estimated 200-300+ new estate filings/month based on county population of ~1.1M and Georgia death rates.

### DeKalb County Probate Court
- **Online Portal:** E-file via Odyssey eFile Georgia (efilega.tylertech.cloud or georgia.tylertech.cloud/ofsweb)
- **Records Access:** By appointment — call (404) 371-2701 or email shharrison@dekalbcountyga.gov
- **In-Person:** 556 North McDonough Street, Decatur, GA 30030 (appointment required)
- **Website:** dekalbprobatega.com
- **Key Limitation:** Most services require scheduled appointment. Less online access than Fulton.

### Cobb County Probate Court
- **Online Portal:** cobbcounty.gov/probate-court/case-status-records-search — no login required
- **Search Options:** Year index, filing type filters, name/estate number/license number
- **Records Available:** Wills, estate details, letters of administration, inventories, appraisals, bills of sale
- **Limitation:** Free searches return limited info. Detailed records need mail/in-person request + fee
- **In-Person:** 32 Waddell Street, Marietta, GA 30090
- **Phone:** (770) 528-1900
- **Hours:** M-F 8:00 AM - 5:00 PM

### Gwinnett County Probate Court
- **Online Portal:** Tyler Odyssey Portal via gwinnettcourts.com/casesearch/ — search by decedent name or case number
- **Also:** re:SearchGA statewide system (free account may be required)
- **In-Person:** 75 Langley Drive, Lawrenceville, GA 30046
- **Phone:** (770) 822-8100
- **Hours:** M-F 8:00 AM - 4:30 PM

### Filing Pull Frequency

| County | Recommended Pull Schedule | Method |
|--------|--------------------------|--------|
| Fulton | Weekly (Monday AM) | Online portal + PropStream cross-reference |
| DeKalb | Bi-weekly | Appointment-based pull + PropStream |
| Cobb | Weekly | Online portal search |
| Gwinnett | Bi-weekly | Odyssey portal search |

**Workflow:** Pull new estate filings every Monday. Cross-reference against property records same day. Skip trace by Tuesday. First outreach by Wednesday.

---

## 2. Identifying Properties in an Estate

### Step-by-Step Property Identification

1. **Pull the probate filing** — get decedent name, case number, Personal Representative (PR) name/address
2. **Cross-reference county tax assessor** — search decedent name in Fulton County Board of Assessors (qpublic.net/ga/fulton) to find all properties owned
3. **GSCCCA (Georgia Superior Court Clerks' Cooperative Authority)** — search gsccca.org/search for real estate index by county and instrument type. Shows deeds, liens, encumbrances
4. **Georgia DOR Property Records Online** — dor.georgia.gov/property-records-online for statewide property tax records
5. **PropStream / BatchLeads** — input decedent name to find all properties tied to that owner across multiple counties
6. **Estate inventory filing** — if available in probate file, the PR is required to file an inventory of estate assets (including real property) with the court

### Key Data Points to Capture Per Property

| Field | Source |
|-------|--------|
| Property address | Tax assessor / PropStream |
| Parcel ID | County GIS |
| Fair market value | Tax assessor |
| Outstanding liens/mortgages | GSCCCA deed records |
| Tax delinquency status | County tax commissioner |
| Property condition (drive-by) | Fieldwork |
| Occupancy status | Fieldwork / utility records |
| PR name + contact | Probate filing |

---

## 3. Skip Tracing the Personal Representative

### Tool Comparison

| Tool | Cost | Data Returned | Probate-Specific? |
|------|------|--------------|-------------------|
| **PropStream** | $99/mo (includes 10K skip traces) | Up to 4 phone numbers + 4 emails per record, DNC-scrubbed | Yes — pre-probate + deceased owner filter |
| **BatchLeads** | $79/mo+ | Phone numbers + emails, confidence scores, DNC status | Yes — probate filter, but must manually map PR name to property address |
| **BatchSkipTracing** | Pay-per-trace (~$0.15-$0.20/record) | Multiple phone + email per record | General — good for bulk lists pulled from courthouse |
| **TLO/Tracers** | $0.10-$0.25/record | Deep skip — relatives, associates, employment | Best for hard-to-find PRs |

### PropStream Workflow
1. Filter by "Pre-Probate" or "Deceased Owner" in Quick Lists
2. Set geography to Fulton County / DeKalb / Cobb / Gwinnett
3. Export list with owner info
4. Run built-in skip trace (included in subscription)
5. Export with phone/email — auto-scrubbed against DNC
6. Load into CRM (GHL) for campaign

### BatchLeads Workflow
1. Upload courthouse-pulled list with PR first/last name + mailing address
2. Map PR name to "Owner Name" and PR mailing address to "Property Address" fields
3. Run skip trace
4. **Critical limitation:** BatchLeads does NOT return the decedent's property address in results — you must add those manually
5. Export and merge with your property list before loading to CRM

### Manual Skip Trace (Backup)
- Search PR name on WhitePages, Spokeo, BeenVerified
- Check LinkedIn for professional PRs (attorneys, bank trust officers)
- Facebook/social media search by name + city
- Drive by PR mailing address if local

---

## 4. Georgia Probate Timeline — When to Contact

### Timeline Overview

| Phase | Duration | What Happens | Contact Strategy |
|-------|----------|-------------|------------------|
| **Filing** | Week 1-2 | Will filed, petition for letters submitted | DO NOT CONTACT — too early, family is grieving |
| **Appointment** | Weeks 2-6 | Court appoints PR, heirs notified (30-day notice requirement) | PREPARE — build your file, identify properties |
| **Administration** | Months 2-12 | PR inventories assets, notifies creditors (60-day requirement), creditor claims period | **SWEET SPOT: Month 3-6** — PR is now managing property burden, creditor claims are coming in, reality of costs is hitting |
| **Creditor Period** | 3 months after newspaper publication | Creditors file claims against estate | Continue outreach — PR is motivated to liquidate |
| **Distribution** | Month 12-18+ | Assets distributed to heirs, estate closed | Late stage — deal with heirs directly if property wasn't sold |

### Optimal Contact Window
**Month 3-6 after filing.** Here is why:
- PR has been appointed and is legally authorized to act
- 30-day heir notification is complete
- PR is now receiving maintenance bills, insurance costs, property tax bills
- Creditor claims are accumulating — cash pressure building
- PR has had time to grieve but is now in "business mode"
- Most competition (if any) has already sent their first mailer in month 1 and stopped

### Contact Cadence
| Touch | Timing | Channel | Purpose |
|-------|--------|---------|---------|
| 1 | Month 3 | Handwritten mail | Introduction, condolence, offer to help |
| 2 | Month 3.5 | Text (if consent/non-DNC) | Gentle follow-up |
| 3 | Month 4 | Phone call | Discovery — what are they dealing with? |
| 4 | Month 5 | Mail (follow-up letter) | Reinforce value, share what you can do |
| 5 | Month 6 | Phone call | Check in — has situation changed? |
| 6 | Month 8 | Mail | Still here, no pressure |
| 7 | Month 10 | Phone/text | Final touch before distribution phase |

---

## 5. Georgia Compliance — Laws on Contacting Estates/Heirs

### Federal Compliance

| Rule | Requirement | Penalty |
|------|------------|---------|
| **TCPA** | Prior express written consent required for automated marketing texts/calls | $500-$1,500 per violation per recipient |
| **DNC Registry** | Scrub all lists against National DNC Registry every 31 days | $51,744 per call (2025 adjusted) |
| **FCC One-to-One Consent Rule** (effective 1/27/2025) | Consent must be business-specific — no shared consent across companies | Same TCPA penalties |
| **FCC Opt-Out Rule** (effective 4/11/2025) | Must honor opt-out within 10 business days, provide easy opt-out mechanism | Same TCPA penalties |

### Georgia-Specific Rules

| Rule | Detail |
|------|--------|
| **Georgia No Call Law** | State-level DNC. Must scrub against Georgia list in addition to federal DNC |
| **Georgia 5-Year Consent Expiration** | Consent obtained in Georgia expires after 5 years — must be renewed |
| **Georgia Open Records Act** | Probate records are public — accessing filings is fully legal |
| **No Anti-Solicitation Statute for Heirs** | Georgia does NOT have a specific law prohibiting contact with heirs/PRs about real estate purchases during probate (unlike some states with "barratry" restrictions on attorneys) |
| **Manual Dialing Exception** | If you manually dial (no auto-dialer, no prerecorded messages), you CAN cold call non-DNC numbers without prior consent |

### Compliance Checklist
- [ ] Scrub all lists against federal DNC Registry before any calls/texts
- [ ] Scrub against Georgia No Call list
- [ ] Use only manual dialing for cold outreach (no auto-dialer)
- [ ] Never use prerecorded messages without consent
- [ ] Include opt-out language in every text message
- [ ] Honor opt-outs within 10 business days
- [ ] Track consent dates — renew every 5 years (Georgia rule)
- [ ] Never misrepresent who you are or your intent
- [ ] Keep records of all outreach attempts and consent documentation

---

## 6. Best Tools for Probate Lead Generation

### Tool Stack (Recommended)

| Tool | Monthly Cost | Purpose | Priority |
|------|-------------|---------|----------|
| **PropStream** | $99 | Pre-probate filter, property data, skip tracing, DNC scrub | Must-have |
| **BatchLeads** | $79+ | Supplemental probate leads, driving-for-dollars, skip trace | Nice-to-have |
| **GoHighLevel (GHL)** | $97 | CRM, automated follow-up sequences, text/email campaigns | Must-have |
| **County Court Portals** | Free | Primary source — pull filings directly | Must-have |
| **GSCCCA** | Free (basic search) | Cross-reference property ownership, liens | Must-have |
| **REIPro / ProbateLeads.com** | $50-100 | Pre-built probate lead lists with skip trace | Optional |

### PropStream Probate-Specific Features
- **Pre-Probate Quick List:** Identifies properties where an owner is recently deceased (title record match)
- **120+ Search Filters:** Stack probate with equity, vacant, tax delinquent, absentee owner
- **Built-in Skip Trace:** Included in subscription, DNC-scrubbed, returns up to 4 phone + 4 email
- **Comps + ARV:** Run comps on probate properties without leaving the platform
- **Export to CRM:** CSV export for GHL import

---

## 7. Probate Deal Metrics

### Typical Discount Off ARV

| Scenario | Discount off ARV | Notes |
|----------|-----------------|-------|
| PR wants quick sale, property needs work | 25-40% below ARV | Best case — motivated PR, deferred maintenance |
| PR wants fair price, property in OK condition | 10-20% below ARV | Common scenario — still below retail |
| Multiple heirs, disagreements | 15-30% below ARV | Longer timeline but deeper discount |
| Property has liens/tax debt | 30-50% below ARV | Factor in lien payoff — could be a steal |

### Wholesale Fee Benchmarks (Atlanta Market)

| Deal Type | Typical Wholesale Fee | Notes |
|-----------|----------------------|-------|
| Single-family probate (Fulton/DeKalb) | $10,000-$25,000 | ARV $200K-$400K range |
| Single-family probate (Cobb/Gwinnett) | $8,000-$20,000 | Slightly thinner margins in suburbs |
| Multi-property estate | $15,000-$40,000+ | Package deals, bulk discount for buyer |
| Sub-to / creative deal | $0 assignment + $200-$500/mo cashflow | Take over payments, wrap or hold |

### MAO Formula for Probate
```
MAO = (ARV x 0.65) - Repairs - Wholesale Fee

Example:
ARV = $350,000
Repairs = $40,000
Wholesale Fee = $15,000
MAO = ($350,000 x 0.65) - $40,000 - $15,000 = $172,500
```
Note: Using 65% (not 70%) because probate sellers accept lower in exchange for certainty and speed. Atlanta market supports this — buyer pool is deep.

---

## 8. Campaign Templates — Soft, Empathetic Language

### Direct Mail Template #1 — First Touch (Month 3)

```
[Handwritten on plain card, no company branding]

Dear [PR First Name],

I hope this letter finds you and your family doing well during what
I know is a difficult time.

My name is [First Name], and I work with families in the Atlanta
area who have inherited property they may not be sure what to do with.

I'm not here to pressure you into anything. I simply wanted you to
know that if the property at [Property Address] becomes something
you'd rather not deal with — the maintenance, the taxes, the
insurance — I may be able to help take that off your plate.

There's no cost, no obligation, and no timeline. Whenever you're
ready, if ever, I'm here.

Wishing your family peace,

[First Name]
[Phone Number]
```

### Direct Mail Template #2 — Follow-Up (Month 5)

```
[Handwritten on plain card]

Hi [PR First Name],

I reached out a couple of months ago about the property at
[Property Address]. I wanted to check in — not to pressure
you, but because I know managing an estate property can feel
like one more thing on an already full plate.

If anything has changed or if you'd just like to talk through
your options, I'm happy to have a conversation. No strings.

Take care,

[First Name]
[Phone Number]
```

### Text Message Template #1 — Warm Intro (Non-DNC only, manual send)

```
Hi [PR First Name], my name is [Your Name]. I work with
families in Atlanta who've inherited property. I understand
this is a sensitive time — I just wanted you to know I'm
here if the property at [Address] ever becomes something
you'd like help with. No pressure at all. - [Your Name]
```

### Text Message Template #2 — Follow-Up

```
Hi [PR First Name], just checking in. I reached out before
about the property on [Street Name]. If you've been dealing
with maintenance costs, taxes, or just want to talk through
options — I'm happy to chat anytime. Take care. - [Your Name]
```

### Phone Script — Discovery Call (Month 4)

```
"Hi, is this [PR First Name]? My name is [Your Name], I sent
you a letter a few weeks ago about the property at [Address].

I know dealing with an estate is a lot — I've been through it
with my own family. I'm not calling to make you an offer or
anything like that. I just wanted to see how things are going
and if there's anything I can help with.

[LISTEN — let them talk]

If they mention burden:
"That sounds like a lot. What would be most helpful to you
right now?"

If they mention wanting to sell:
"I appreciate you sharing that. Would it be helpful if I put
together some numbers so you at least know what your options
look like? No commitment — just information."

If they're not ready:
"Totally understand. I'll check back in a month or so.
And if anything comes up before then, you've got my number."
```

---

## 9. Probate Campaign KPIs

### Expected Volume (Monthly)

| Metric | Fulton County | DeKalb | Cobb | Gwinnett | Total Metro |
|--------|-------------|---------|------|----------|-------------|
| New estate filings/month (est.) | 200-300 | 80-120 | 60-90 | 50-80 | 390-590 |
| Filings with real property (est. 40%) | 80-120 | 32-48 | 24-36 | 20-32 | 156-236 |
| After skip trace success (est. 70%) | 56-84 | 22-34 | 17-25 | 14-22 | 109-165 |
| Contactable leads/month | **56-84** | **22-34** | **17-25** | **14-22** | **109-165** |

### Conversion Funnel

| Stage | Rate | Monthly Volume (Fulton) |
|-------|------|------------------------|
| Leads identified | 100% | 80-120 |
| Skip traced successfully | 70% | 56-84 |
| Response to outreach | 8-15% | 5-13 |
| Appointments set | 30-40% of responses | 2-5 |
| Deals under contract | 25-33% of appointments | 1-2 |
| **Deals closed/month** | — | **1-2** |

### Revenue Projection

| Metric | Conservative | Moderate | Aggressive |
|--------|-------------|----------|------------|
| Deals/month (Fulton only) | 1 | 1.5 | 2 |
| Avg wholesale fee | $12,000 | $15,000 | $20,000 |
| Monthly revenue | $12,000 | $22,500 | $40,000 |
| Annual revenue | $144,000 | $270,000 | $480,000 |
| **Add DeKalb/Cobb/Gwinnett** | +50-75% | +50-75% | +50-75% |
| **Total annual (4-county)** | **$216,000-$252,000** | **$405,000-$472,500** | **$720,000-$840,000** |

### Monthly Marketing Budget

| Line Item | Cost |
|-----------|------|
| PropStream | $99 |
| GHL | $97 |
| Handwritten mailers (200/mo x $3 each) | $600 |
| Skip trace overage (if needed) | $50 |
| Phone/text (GHL or Twilio) | $50 |
| **Total monthly spend** | **~$896** |

### ROI Target
- Cost per deal: $896 / 1.5 deals = **$597/deal**
- Revenue per deal: $15,000
- **ROI: 25:1**

---

# CAMPAIGN 2: CHURCH ACQUISITIONS IN OPPORTUNITY ZONES

## 1. What Are Opportunity Zones?

Opportunity Zones (OZ) were created by the **Tax Cuts and Jobs Act of 2017** to drive investment into economically distressed census tracts. Investors get tax benefits for deploying capital gains into Qualified Opportunity Funds (QOFs) that invest in these zones.

### Tax Benefits (OZ 1.0 — investments before 12/31/2026)

| Benefit | Requirement | Detail |
|---------|------------|--------|
| **Capital Gains Deferral** | Invest eligible capital gains into a QOF | Defer federal tax on the gain until the earlier of: sale of QOF interest OR 12/31/2026 |
| **10-Year Exclusion** | Hold QOF investment for 10+ years | Permanently exclude ALL appreciation on the QOF investment from capital gains tax |
| **Eligible Gains** | Capital gains + qualified 1231 gains recognized before 1/1/2027 | Cannot be from related-party transactions |

### OZ 2.0 — Permanent Extension (One Big Beautiful Bill Act, signed 7/4/2025)

| Change | Detail |
|--------|--------|
| **Program Made Permanent** | No sunset — OZ incentive is now permanent law |
| **New Deferral Rules (post-2026)** | 5-year rolling deferral (gain recognized 5 years from investment date or upon sale, whichever first) |
| **Basis Step-Up** | 10% basis step-up after 5 years (previously had tiered 10%/15% at 5/7 years) |
| **10-Year Exclusion** | RETAINED — hold 10+ years, elect to step up basis to FMV on sale date, pay zero tax on appreciation |
| **New Zone Designations** | 90-day nomination period begins July 1, 2026. New designations effective January 1, 2027 |
| **Redesignation Cycle** | Governors redesignate every 10 years |
| **Rural Bonus** | Qualified Rural Opportunity Funds get 30% basis step-up at 5 years |
| **New Reporting** | IRS reporting under IRC 6039K/6039L — job creation, environmental impact, community engagement metrics |

### Why This Matters for Church Acquisitions
Buy a church in an OZ. Rezone and develop. Hold in a QOF for 10 years. Pay **zero capital gains tax** on the entire appreciation. On a $2M+ development, that is $300K-$500K in tax savings.

---

## 2. Atlanta Westside Opportunity Zone Census Tracts

Atlanta has **27 designated Federal Opportunity Zones**. The Westside concentrations are the prime targets for church acquisition.

### Confirmed Westside OZ Census Tracts (Fulton County FIPS: 13121)

| Census Tract | GEOID | Approximate Neighborhood(s) | Sq Mi | Pop (est.) | OZ Type |
|-------------|-------|----------------------------|-------|------------|---------|
| 43 | 13121004300 | Castleberry Hill / Vine City | — | — | Low-Income Community |
| 74 | 13121007400 | Grove Park / Bankhead | 0.9 | 3,400 | Low-Income Community |
| 75 | 13121007500 | English Avenue / Bankhead | — | — | Low-Income Community |
| 80 | 13121008000 | Adamsville / Collier Heights | 2.3 | 5,500 | Low-Income Community |
| 82.01 | 13121008201 | West End / Westview | — | — | Low-Income Community |
| 84 | 13121008400 | Center Hill / Carey Park | 0.7 | 2,600 | Low-Income Community |
| 85 | 13121008500 | Dixie Hills / Grove Park | — | — | Low-Income Community |
| 86.01 | 13121008601 | Grove Park / West Highlands | 1.7 | 5,000 | Low-Income Community |
| 87 | 13121008700 | Bankhead / Lincoln Homes | — | — | Low-Income Community |
| 120 | 13121012000 | South Atlanta / Lakewood | — | — | Low-Income Community |

### Additional Atlanta OZ Tracts (for reference)
Additional Fulton County OZ tracts include: 26, 77.04, 77.05, 78.07, 106.03, 110, 118, 119, and others. Full list available from Georgia DCA.

### Key Map Resources
- **HUD OZ Map:** opportunityzones.hud.gov/resources/map
- **OpportunityZones.com Map:** opportunityzones.com/tools/map/
- **Georgia DCA Full List:** dca.georgia.gov/financing-tools/incentives/federal-opportunity-zones
- **Fulton County GIS:** gisdata.fultoncountyga.gov (search "Federal Opportunity Zones" layer)
- **Invest Atlanta OZ Map (PDF):** investatlanta.com/assets/investatlanta-coa-oz-map_YBB4b9L.pdf

### Target Zone: Westside Corridor
**Primary neighborhoods:** English Avenue, Vine City, Bankhead, Grove Park, Ashview Heights, Dixie Hills
**Why here:**
- BeltLine Westside Trail proximity (infrastructure driving appreciation)
- Microsoft campus (announced, under development)
- Westside Park (largest city park, adjacent to reservoir)
- Westside Future Fund + Invest Atlanta incentive stacking
- $800K+ new townhomes going in along Hollowell Pkwy (Bankhead) — price discovery is happening NOW

---

## 3. How to Find Church Properties

### Method 1: Tax Records (Tax-Exempt Properties)
1. Go to **Fulton County Board of Assessors** (qpublic.net/ga/fulton)
2. Search by tax-exempt status — churches are classified as tax-exempt religious organizations
3. Filter by zip codes in target OZ tracts: 30314 (English Avenue/Vine City), 30318 (Bankhead/Grove Park), 30310 (West End), 30311 (Adamsville/Cascade)
4. Cross-reference parcel data against OZ tract boundaries using GIS

### Method 2: County GIS
1. **Atlanta GIS Portal:** gis.atlantaga.gov — overlay OZ boundaries with zoning layer
2. Filter for institutional zoning (I-1, I-2) or church-specific land use codes
3. Identify parcels with church structures + surrounding vacant lots

### Method 3: Google Maps
1. Search "church" in target neighborhoods on Google Maps
2. Note addresses, cross-reference with tax assessor for parcel size and ownership
3. Look for indicators of distress: empty parking lots, deferred maintenance, no recent Google reviews, inactive websites

### Method 4: Commercial Listing Platforms
- **LoopNet:** loopnet.com — search "churches for sale" in Atlanta
- **Crexi:** crexi.com — filter Religious Buildings/Churches in Atlanta
- **CityFeet:** cityfeet.com — church-specific commercial listings
- **Realmo:** realmo.com — churches and religious facilities
- **Current inventory (as of 2/2026):** ~7-10 churches listed for sale in Atlanta metro at any given time

### Method 5: Driving for Dollars
- Drive OZ neighborhoods on Sunday mornings
- Churches with empty parking lots = potential candidates
- Board-up properties, overgrown lots around churches = additional land acquisition opportunities
- Use BatchLeads DFD app to tag properties in real time

---

## 4. Why Churches Sell

| Reason | Frequency | Investor Opportunity |
|--------|-----------|---------------------|
| **Aging/shrinking congregation** | Very common | Fewer members = less tithing = can't maintain property |
| **Deferred maintenance burden** | Very common | Roof, HVAC, plumbing on 50-100 year old buildings. $100K+ repair bills |
| **Property tax issues** | Occasional | If church loses tax-exempt status or has commercial operations |
| **Denomination consolidation** | Common | National denominations merge congregations, close redundant buildings |
| **Leadership transition** | Common | New pastor wants different location/style of worship space |
| **Debt/financial distress** | Common | Building campaigns that overleveraged the church |
| **Insurance costs** | Growing | Older buildings = higher premiums, especially in Atlanta summer heat |
| **Neighborhood change** | Common on Westside | Original congregation moved to suburbs, commutes to church from 30+ miles away |

### Westside-Specific Dynamics
Many Westside churches were built 50-100 years ago when English Avenue and Vine City were thriving Black neighborhoods. As population declined (English Avenue went from 10,000+ to under 2,000 residents), congregations aged out and shrank. The buildings remain but many are barely operational. This creates a supply of motivated church sellers in an area where land values are accelerating due to BeltLine, Microsoft, and Westside Park development.

---

## 5. Typical Church Lot Sizes on Westside Atlanta

| Property Type | Typical Lot Size | Notes |
|--------------|-----------------|-------|
| Small storefront church | 0.10-0.25 acres (4,400-10,900 sq ft) | Row houses converted to churches, common in English Avenue |
| Mid-size traditional church | 0.25-0.75 acres (10,900-32,670 sq ft) | Standalone building with small parking lot |
| Large institutional church | 0.75-2.0 acres (32,670-87,120 sq ft) | Full campus — sanctuary, fellowship hall, parking |
| Church with adjacent parcels | 1.0-5.0+ acres | Church owns neighboring lots (often used as parking or vacant) |

**Key insight:** Many Westside churches own ADJACENT parcels (vacant lots, parking areas) that are on separate tax parcels. A church at 0.5 acres might control 1.5 acres total when you count the surrounding lots. Always check ALL parcels owned by the church entity, not just the building footprint.

---

## 6. Rezoning Process — Institutional to Residential/Mixed-Use

### Atlanta Zoning Districts (Relevant)

| Current (Church) | Target (Development) | Best For |
|-------------------|---------------------|----------|
| I-1 (Institutional) | MR (Multi-Family Residential) | Apartments, condos |
| I-1 (Institutional) | RG (Residential General) | Townhomes, duplexes |
| I-1 (Institutional) | MRC (Mixed Residential Commercial) | Ground-floor retail + residential above |
| R-4/R-5 (if already residential zoning) | RG or MR | Higher density residential |
| SPI (Special Public Interest) | Depends on SPI district rules | English Avenue has SPI-3 — may have specific provisions |

### Rezoning Process Steps

| Step | Action | Timeline |
|------|--------|----------|
| 1 | **Pre-application conference** with Office of Zoning & Development (OZD) | 1-2 weeks |
| 2 | **File rezoning application** with DCP. Must include site plan, legal description, proposed use | Day 0 |
| 3 | **Notify NPU** (Neighborhood Planning Unit) within 5 business days of filing | Week 1 |
| 4 | **NPU meeting** — present to community, get NPU vote (advisory, not binding) | Weeks 2-6 |
| 5 | **Zoning Review Board (ZRB)** hearing — 9-member board reviews application | Weeks 6-10 |
| 6 | **City Council Zoning Committee** hearing | Weeks 10-14 |
| 7 | **Full City Council** vote on rezoning | Weeks 14-18 |
| 8 | **Ordinance signed by Mayor** | Week 18-20 |

### Total Timeline: 4-6 months (no opposition), 6-12+ months (with opposition)

### Rezoning Application Fees (City of Atlanta)

| Parcel Size | Application Fee |
|-------------|----------------|
| 1 acre or less | $500 |
| 1+ to 5 acres | $625 |
| 5+ to 10 acres | $750 |
| 10+ acres | $1,250 |

**Additional costs:**
- Attorney/zoning consultant: $5,000-$15,000
- Site plan / civil engineering: $5,000-$20,000
- NPU presentation materials: $500-$1,000
- Newspaper publication notice: $200-$500
- **Total rezoning cost (all-in): $11,000-$37,000**

### Likelihood of Approval on Westside
**HIGH (70-85% probability)** if:
- Proposed use aligns with Westside Future Plan / Comprehensive Development Plan
- Includes affordable housing component (Invest Atlanta incentive alignment)
- NPU is engaged and supportive (community buy-in)
- Not displacing current residents
- Provides neighborhood amenities (retail, greenspace, parking)

**Important Note:** Atlanta is rewriting its entire zoning ordinance (Zoning 2.0). Draft V2 is in public comment through April 2026. The new code may simplify institutional-to-residential conversions. Monitor atlzoning.com for updates.

### English Avenue SPI-3 District
Atlanta City Council approved the English Avenue Special Public Interest District (SPI-3). This may have specific provisions for development in English Avenue that streamline or constrain certain zoning changes. Review SPI-3 regulations before filing any rezoning in English Avenue specifically.

---

## 7. Value Arbitrage: Church Purchase vs. Rezoned Residential Land

### Current Westside Land Values

| Metric | Value | Source |
|--------|-------|--------|
| Median price per acre (Fulton County) | $182,333 | Market data 2025 |
| Westside Atlanta land (with approvals/site plan) | $300,000-$400,000/acre | Comparable sales (e.g., 4.34 acres at $322K/acre with 13-home approval) |
| English Avenue/Vine City median home sale | $294,500 | Redfin trailing 12 months |
| Westside median sale price per sq ft | $147/sq ft | Redfin 2025 |
| Bankhead new townhomes (luxury) | $700,000-$800,000 | Stanley Martin / Brock Built |
| Atlanta metro overall median sale price per sq ft | $259/sq ft | Redfin 2025 |

### The Arbitrage

| Stage | Estimated Value | Basis |
|-------|----------------|-------|
| **Buy church property (as-is, institutional zoning)** | $15-$40/sq ft of land ($150K-$400K for 0.25-1.0 acre) | Church sales data, LoopNet comps |
| **After rezoning to residential/mixed-use** | $40-$90/sq ft of land | Comparable rezoned residential land sales |
| **Developed (townhomes/multifamily)** | $200-$400/sq ft of finished product | Comp sales of new construction in area |

### Example Deal: 0.5 Acre Church on Westside

| Item | Amount |
|------|--------|
| Purchase price (church, as-is) | $275,000 |
| Rezoning costs (all-in) | $25,000 |
| Demolition | $30,000 |
| Total basis in land | **$330,000** |
| Rezoned land value (0.5 acre, residential entitled) | **$150,000-$200,000** per buildable lot |
| If site yields 6 townhome lots | 6 x $175,000 = **$1,050,000** land value |
| **Profit on entitlement alone** | **$720,000** |

### If You Build (Townhomes)

| Item | Amount |
|------|--------|
| Land basis (from above) | $330,000 |
| Construction (6 townhomes x $250K each) | $1,500,000 |
| Soft costs (architecture, permits, interest) | $300,000 |
| Total project cost | **$2,130,000** |
| Sales (6 townhomes x $550,000 each) | **$3,300,000** |
| **Gross profit** | **$1,170,000** |
| **If held in QOF for 10 years — capital gains tax on appreciation** | **$0** |

---

## 8. Outreach Strategy — Approaching Church Trustees/Pastors

### DO NOT approach churches like a typical motivated seller campaign. This is relationship-based.

### Key Decision Makers

| Role | Authority | How to Reach |
|------|----------|-------------|
| **Pastor/Senior Minister** | Spiritual leader, often first point of contact, may or may not have sale authority | Sunday service, community events, phone |
| **Board of Trustees** | Usually holds legal authority over property decisions | Through pastor introduction |
| **Deacons/Elders Board** | Influential in congregational vote | Church meetings |
| **Denominational Authority** | Some denominations require approval from regional/national body (AME, Baptist Convention, etc.) | Research denomination structure first |

### Outreach Approach (Relationship-First)

**Phase 1: Discovery (Weeks 1-4)**
1. Attend a Sunday service. Sit in the back. Observe.
2. Introduce yourself after service to the pastor. Keep it casual.
3. Make a small donation ($50-$100). Shows respect.
4. Learn the church's story — how long have they been there? How many active members?
5. DO NOT mention buying the property on the first visit.

**Phase 2: Relationship Building (Weeks 4-8)**
1. Attend 2-3 more services or community events
2. Volunteer for a church activity (food drive, community day)
3. Have a private conversation with the pastor about the church's future
4. Ask open-ended questions:
   - "How has the neighborhood change affected the church?"
   - "What's the church's vision for the next 5-10 years?"
   - "Are there any challenges with maintaining the building?"

**Phase 3: Proposal (Weeks 8-12)**
1. Only proceed if the pastor has indicated openness to change
2. Request a meeting with the pastor AND trustees together
3. Present your vision as a PARTNERSHIP, not a transaction:
   - "I'd like to discuss how we might work together to honor the church's legacy while creating something that benefits the community"
4. Offer options:
   - **Full purchase** — fair market value + relocation assistance
   - **Joint venture** — church retains equity in the development
   - **Ground lease** — church retains land ownership, you develop
   - **Lease-back** — purchase the property, lease space back to church for worship
5. Address proceeds usage — many denominations require sale proceeds go to new facility or community mission, not operating expenses

### Communication Templates

**Letter of Introduction (After 2nd Visit):**
```
Dear Pastor [Name],

Thank you for the warm welcome at [Church Name] these past
Sundays. Your congregation's spirit is something special, and
I can see the deep roots this church has in the community.

I'm a real estate professional here in Atlanta, and I work
primarily with community-based development on the Westside.
I'm not writing to make any business proposal — I simply want
to express my respect for what you've built and my interest in
learning more about the church's history and future.

If you're ever open to a cup of coffee, I'd welcome the
conversation.

Respectfully,

[Name]
[Phone]
```

**Meeting Request (After Relationship is Established):**
```
Pastor [Name],

Over the past few weeks, I've gotten a sense of both the
church's heart and some of the challenges you're navigating
with the building and the neighborhood changes.

I have some ideas about how we might work together in a way
that honors [Church Name]'s legacy and creates opportunity
for the church AND the community. Nothing is set in stone —
I'd just like to share some thoughts and get your honest
feedback.

Would you be open to a conversation, maybe with a couple
of your trustees present? I want to make sure the right
people are in the room.

Happy to work around your schedule.

[Name]
[Phone]
```

### What NOT to Do
- Do NOT send unsolicited offers to churches via mail/text like you would a probate lead
- Do NOT lead with price or "we buy properties" language
- Do NOT approach the congregation before the pastor
- Do NOT promise things you can't deliver
- Do NOT ignore the denominational hierarchy — if the church answers to a bishop or convention, you need their blessing too
- Do NOT frame it as "the church is dying" — frame it as "the church is evolving"

---

## 9. Development Options for Church Properties

### Option A: Townhomes (Most Common on Westside)

| Spec | Detail |
|------|--------|
| Density | 8-16 units per acre (depending on zoning) |
| Unit size | 1,400-2,200 sq ft |
| Price point | $350,000-$800,000 (varies by finish level and location) |
| Construction cost | $175-$250/sq ft |
| Timeline | 12-18 months (construction) |
| Best for | 0.25-2.0 acre sites |
| Westside comps | Bankhead luxury townhomes ($700K-$800K), Brock Built Park at Monroe |

### Option B: Multifamily (Apartments)

| Spec | Detail |
|------|--------|
| Density | 20-60+ units per acre |
| Unit mix | Studio, 1BR, 2BR, 3BR |
| Rent range | $1,200-$2,500/mo (Westside market) |
| Construction cost | $150-$225/sq ft |
| Timeline | 18-24 months (construction) |
| Best for | 0.5+ acre sites, MR zoning |
| Westside comps | WFF's 839 Joseph E. Boone Blvd (33 units + retail), English Avenue mixed-use |

### Option C: Mixed-Use (Ground Floor Retail + Residential Above)

| Spec | Detail |
|------|--------|
| Density | 15-40 units per acre |
| Retail | 1,000-5,000 sq ft ground floor |
| Best retail tenants | Coffee shop, bodega/market, co-working, barbershop |
| Construction cost | $175-$275/sq ft |
| Timeline | 18-24 months |
| Best for | Corner lots, along Hollowell Pkwy or Joseph E. Boone Blvd |
| Westside comps | 688 Donald Lee Hollowell (former St. Mark Baptist — restaurant/brewery/retail redo) |

### Option D: Adaptive Reuse (Keep the Church Structure)

| Spec | Detail |
|------|--------|
| Concept | Convert church sanctuary into lofts, event space, co-working, restaurant |
| Historic tax credits | Possible if church qualifies for National Register of Historic Places — 20% federal credit |
| Construction cost | $100-$200/sq ft (renovation, not ground-up) |
| Best for | Architecturally significant churches with sound structure |
| Precedent | 688 Donald Lee Hollowell Pkwy — Westside church floated for restaurant/brewery/retail conversion |

---

## 10. Structuring an OZ Investment for Maximum Tax Benefit

### Step-by-Step QOF Structure

| Step | Action | Detail |
|------|--------|--------|
| 1 | **Realize capital gains** | Sell stocks, crypto, business, property — any capital gain or qualified 1231 gain |
| 2 | **Form a QOF** | Create an LLC or LP. File Form 8996 with its tax return to self-certify as a Qualified Opportunity Fund |
| 3 | **Invest gains into QOF within 180 days** | Clock starts on date of sale that generated the gain |
| 4 | **QOF invests in OZ property** | Must deploy 90% of assets into Qualified Opportunity Zone Property (tested semi-annually) |
| 5 | **Substantially improve the property** | Spend at least as much as your purchase price (excluding land) on improvements within 30 months |
| 6 | **Hold for 5+ years** | Get 10% basis step-up on deferred gain (OZ 2.0 rules for post-2026 investments) |
| 7 | **Hold for 10+ years** | Elect to step up QOF investment basis to fair market value on sale date — **zero capital gains on appreciation** |
| 8 | **File annually** | Form 8996 every year. New reporting under IRC 6039K/6039L for OZ 2.0 |

### Entity Structure (Recommended)

```
[Investor / Jamaal]
    |
    v
[QOF LLC] <-- Self-certifies as Qualified Opportunity Fund
    |         Files Form 8996 annually
    |         Must hold 90% of assets in OZ property
    v
[Property LLC] <-- Holds the church property / development
    |               Located in designated OZ census tract
    v
[Church Property] <-- Purchase, rezone, develop
    |                  Must substantially improve within 30 months
    v
[Townhomes / Multifamily / Mixed-Use]
    |
    v
[HOLD 10 YEARS] --> Sell --> Elect FMV basis step-up --> $0 capital gains tax
```

### Substantial Improvement Rule
- You must spend MORE than your purchase price of the building (not counting land) on improvements within 30 months
- Example: Buy church for $275K. Land value = $150K. Building value = $125K. You must spend at least $125,001 on improvements within 30 months.
- New construction on vacant land automatically qualifies
- Demolish church + build new = qualifies (the new construction IS the improvement)

### Key Tax Numbers (Example Deal)

| Item | Amount |
|------|--------|
| Capital gain invested into QOF | $500,000 |
| Church purchase + development cost | $2,130,000 (from example above) |
| Sale value after 10 years (6 townhomes appreciated) | $4,500,000 |
| Appreciation on QOF investment | $2,370,000 |
| Capital gains tax at 20% (without OZ) | $474,000 |
| **Capital gains tax with OZ (10-year hold)** | **$0** |
| **Tax savings** | **$474,000** |

### Critical Deadlines

| Deadline | Detail |
|----------|--------|
| **180 days** | Must invest capital gains into QOF within 180 days of realizing the gain |
| **30 months** | Must substantially improve property within 30 months of acquisition |
| **Semi-annual** | 90% asset test — tested June 30 and December 31 each year |
| **12/31/2026** | Last date for OZ 1.0 deferral recognition — deferred gains become taxable |
| **7/1/2026** | OZ 2.0 new designation nomination period begins |
| **1/1/2027** | New OZ 2.0 designations take effect |
| **10 years** | Minimum hold for full capital gains exclusion on QOF appreciation |

---

## Quick Reference: Campaign Comparison

| Metric | Probate Leads | Church Acquisitions |
|--------|--------------|-------------------|
| **Deal flow** | High volume (100+ leads/mo) | Low volume (1-3 opportunities/quarter) |
| **Time to deal** | 3-6 months | 6-18 months |
| **Capital required** | Low ($0-$5K earnest money) | High ($100K-$500K+) |
| **Skill required** | Sales, follow-up, negotiation | Relationship building, entitlement, development |
| **Revenue per deal** | $10K-$25K (wholesale) | $200K-$1M+ (development) |
| **Best for** | Cash flow NOW | Wealth building + tax strategy |
| **Competition** | Moderate | Very low |
| **Scalability** | Highly scalable with systems | Deal-by-deal, each unique |
| **Risk** | Low (wholesale = no ownership) | Higher (zoning, construction, market) |

### Run Both Simultaneously
- Probate = weekly cash machine. Funds operations + builds cash reserves.
- Church acquisitions = quarterly wealth plays. Stacks OZ tax benefits on top of development profits.
- Use wholesale fees from probate deals to fund church acquisition earnest money and rezoning costs.

---

## Action Items

### Probate Campaign — Launch Checklist
- [ ] Set up PropStream account, configure probate filters for Fulton/DeKalb/Cobb/Gwinnett
- [ ] Bookmark court portals for all 4 counties
- [ ] Create GHL pipeline: New Lead > Skip Traced > Mail Sent > Text Sent > Called > Appointment > Under Contract > Closed
- [ ] Write and print 200 handwritten mailer cards (Template #1)
- [ ] Set weekly Monday morning pull schedule (15 min per county)
- [ ] Load first batch of leads into GHL by end of Week 1
- [ ] First outreach wave by end of Week 1

### Church Campaign — Launch Checklist
- [ ] Pull Fulton County tax-exempt property list for target zip codes (30314, 30318, 30310, 30311)
- [ ] Cross-reference against OZ tract boundaries using GIS
- [ ] Build target list of 15-20 churches in OZ tracts
- [ ] Drive each property, photograph, assess condition + lot size
- [ ] Research each church: denomination, congregation size, pastor name, financial health indicators
- [ ] Prioritize top 5 targets based on: lot size, location within OZ, apparent distress, no recent capital improvements
- [ ] Begin attending services at Target #1
- [ ] Consult with OZ-specialized CPA on QOF structure (recommend reaching out within 30 days)
- [ ] Engage zoning attorney familiar with Westside Atlanta (pre-position for when a deal materializes)

---

*Research compiled 2/25/2026. Sources include Georgia DCA, Fulton/DeKalb/Cobb/Gwinnett County court records, IRS OZ guidance, City of Atlanta DCP, PropStream, BatchLeads, OpportunityZones.com, and Atlanta market data. Verify all compliance items with a Georgia-licensed attorney before executing campaigns.*
