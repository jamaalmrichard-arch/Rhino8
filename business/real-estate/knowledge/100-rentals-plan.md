# 🏠 100 Rentals This Year: Your Claude-Powered Real Estate Action Plan

---

## PART 1: SETTING UP CLAUDE AS YOUR REAL ESTATE AI ASSISTANT

### Step 1: Get Claude Max ($100/mo or $200/mo)
The Max plan is your best move. Here's why:

- **Max 5x ($100/mo):** ~88,000 tokens per 5-hour window. Good for most investors.
- **Max 20x ($200/mo):** ~220,000 tokens per 5-hour window. If you're going hard daily, this pays for itself vs. API pricing (API equivalent would cost $3,000+/mo).
- **Includes Claude Code** — runs in your terminal and can read your local files, spreadsheets, contracts, etc.

### Step 2: Install Claude Code (Your Local AI)
Claude Code runs on your computer and can access your local files directly.

**Install (one command, no Node.js required):**
```bash
# macOS
curl -fsSL https://claude.ai/install.sh | sh

# Windows (PowerShell as Admin)
irm https://claude.ai/install.ps1 | iex

# Linux
curl -fsSL https://claude.ai/install.sh | sh
```

Then navigate to your real estate folder and run:
```bash
cd ~/RealEstate
claude
```

### Step 3: Create a CLAUDE.md File (This Is the Secret Weapon)
Create a file called `CLAUDE.md` in your project folder. This tells Claude everything about you and your business so you don't waste tokens repeating yourself.

```markdown
# My Real Estate Business Context

## About Me
- Name: [Your Name]
- Location: Atlanta, GA metro area
- Business Entity: [Your LLC name]
- Goal: 100 rental units in 2026, scaling to 1,000 units

## Investment Strategies (Priority Order)
1. Wholesaling — for quick cash to fund deals
2. BRRRR (Buy, Rehab, Rent, Refinance, Repeat)
3. Fix & Flip — for larger cash injections
4. Multi-family apartments (5+ units)

## Buy Box
- SFR: Under $150K ARV, 70% rule on wholesales
- Multi-family: 5-50 units, value-add opportunities
- Target markets: [List your target counties/cities]
- Cap rate minimum: 7%+
- Cash-on-cash return minimum: 12%+

## Current Portfolio
- Properties owned: [X]
- Monthly cash flow: $[X]
- Available capital: $[X]
- Credit score: [X]

## Key Contacts
- Hard money lender: [Name, terms]
- Private lenders: [Names]
- Contractor: [Name, rates]
- Property manager: [Name]
- Title company: [Name]
- Real estate attorney: [Name]
- Wholesaling team/VA: [Names]

## Preferred Analysis Format
When analyzing deals, always include:
- Purchase price, rehab estimate, ARV
- 70% rule calculation
- Monthly rent estimate, expenses, NOI
- Cap rate, cash-on-cash return
- BRRRR refinance numbers
- Exit strategies
```

**This single file saves you THOUSANDS of tokens** because Claude reads it automatically instead of you explaining your situation every conversation.

### Step 4: Set Up MCP Servers (Connect Claude to Everything)
MCP (Model Context Protocol) lets Claude access your tools directly:

| MCP Server | What It Does For You |
|---|---|
| **File System** | Read your contracts, spreadsheets, deal analyses locally |
| **Google Drive** | Access your deal folders, shared docs with partners |
| **Notion** | Your deal pipeline/CRM if you use Notion |
| **Database (PostgreSQL)** | Query your property database directly |
| **Zapier MCP** | Connect to PropStream, Podio, your CRM, email, etc. |
| **Knowledge Base MCP** | Build a searchable real estate knowledge base |

### Step 5: Token Efficiency Rules (Save Money)

**DO:**
- ✅ Use the CLAUDE.md file so context is loaded automatically
- ✅ Ask specific questions ("Analyze this deal at 123 Main St: $80K purchase, $25K rehab, $155K ARV, $1,200/mo rent")
- ✅ Batch your questions — one long prompt beats 10 short ones
- ✅ Use Sonnet (cheaper model) for routine tasks, Opus for complex analysis
- ✅ Copy/paste deal data directly instead of asking Claude to search for it
- ✅ Save Claude's outputs as templates you can reuse

**DON'T:**
- ❌ Have Claude re-explain concepts you already know
- ❌ Make small talk or use filler words
- ❌ Ask the same question multiple ways hoping for a better answer
- ❌ Start new conversations for follow-up questions (continue the thread)
- ❌ Paste entire PDFs when you only need one section analyzed

---

## PART 2: YOUR REAL ESTATE KNOWLEDGE BASE

### A. WHOLESALING (Cash Generation Engine)

**The Process:**
1. Find motivated sellers (driving for dollars, lists, direct mail, cold calling)
2. Get property under contract at a discount
3. Assign contract to cash buyer for an assignment fee ($5K-$25K+)
4. You never own the property

**Key Numbers:**
- MAO (Maximum Allowable Offer) = ARV × 70% − Repairs − Your Fee
- Assignment fee: Typically $5K-$15K on SFR, $20K-$100K+ on multifamily
- Marketing budget: $1,500-$5,000/mo for consistent deal flow

**Contracts Needed:**
- Purchase and Sale Agreement (with assignment clause)
- Assignment of Contract
- Proof of Funds letter (from your hard money lender)

**Scaling Strategy:**
- Hire VAs for cold calling ($4-8/hr offshore)
- Use skip tracing services (BatchLeads, PropStream)
- Build a cash buyer list of 50+ active investors

### B. BRRRR (Portfolio Builder)

**The Process:**
1. **Buy** — distressed property below market value
2. **Rehab** — renovate to force appreciation
3. **Rent** — place quality tenant, stabilize income
4. **Refinance** — cash-out refi at new appraised value (recover your capital)
5. **Repeat** — use recovered capital for next deal

**Key Numbers:**
- Buy at 65-75% of ARV minus repairs
- Rehab: Budget 10-15% contingency on top of contractor bids
- Refinance: Most lenders require 6-month seasoning, 75% LTV on cash-out
- Goal: Recover 100% of invested capital on refinance

**The Math Example:**
```
Purchase:         $80,000
Rehab:            $30,000
Total Invested:   $110,000
ARV:              $160,000
Cash-out Refi:    $120,000 (75% LTV)
Capital Recovered: $120,000 − closing costs ≈ $108,000
Money Left In:    ~$2,000
Monthly Rent:     $1,400
Monthly Expenses: $900 (PITI, PM, vacancy, maintenance, CapEx)
Monthly Cash Flow: $500
```

### C. FIX & FLIP (Cash Injection)

**Key Numbers:**
- 70% Rule: MAO = ARV × 0.70 − Repair Costs
- Target profit: 15-20% of ARV minimum
- Timeline: 3-6 months from purchase to sale
- Holding costs: $2,000-4,000/mo (loan payments, insurance, utilities, taxes)

### D. MULTIFAMILY (Scale Play for 1,000 Units)

**Unit Count Categories:**
- 2-4 units: Residential financing (conventional, FHA)
- 5-49 units: Small commercial (local banks, credit unions)
- 50+ units: Commercial/agency debt (Fannie, Freddie, CMBS)

**Analysis Metrics:**
- NOI = Gross Income − Operating Expenses (NOT including debt service)
- Cap Rate = NOI ÷ Purchase Price
- DSCR = NOI ÷ Annual Debt Service (lenders want 1.20+)
- Cash-on-Cash = Annual Cash Flow ÷ Total Cash Invested
- GRM = Purchase Price ÷ Annual Gross Rent
- Price Per Unit and Price Per Square Foot

**Value-Add Strategies:**
- RUBS (Ratio Utility Billing System) — bill tenants for utilities
- Interior upgrades to increase rent $100-300/unit
- Add washer/dryer, pet fees, storage, parking fees
- Reduce expenses: renegotiate contracts, improve management
- Bring occupancy from 85% to 95%+

### E. LOAN TYPES & FINANCING

| Loan Type | Best For | Terms | Notes |
|---|---|---|---|
| **Conventional** | 1-4 units, buy & hold | 30yr fixed, 6-7%, 20-25% down | Limit of 10 per person |
| **FHA** | Owner-occupied 1-4 units | 30yr, low rate, 3.5% down | Must live in 1 unit for 1 year |
| **Hard Money** | Flips, BRRRR purchase+rehab | 12-18mo, 10-14%, 2-4 points | Fast close, asset-based |
| **DSCR Loan** | Rentals (no income verification) | 30yr, 7-9%, 20-25% down | Based on property cash flow, no limit on # of loans |
| **Private Money** | Any deal | Negotiable | Relationship-based, often cheaper than HML |
| **Commercial** | 5+ units | 5-10yr terms, 25yr amort | Recourse vs non-recourse |
| **Seller Financing** | Creative deals | Negotiable | No banks involved |
| **Portfolio Lender** | Bundling multiple properties | Varies | Local banks, keeps loans in-house |
| **Bridge Loan** | Short-term acquisition | 6-24mo, 8-12% | Transition to permanent financing |
| **Home Equity / HELOC** | Leveraging existing equity | Variable rate | Use primary residence equity for down payments |

**DSCR Loans — Your Secret Weapon for Scaling:**
- No W-2 or tax returns needed
- Qualification based on property's rental income vs. mortgage payment
- DSCR ratio: Monthly Rent ÷ PITIA (Principal, Interest, Taxes, Insurance, Association)
- Most lenders want DSCR of 1.0-1.25+
- No limit on number of DSCR loans
- Available for 1-8+ unit properties

### F. SCALING TO 100 UNITS — THE MATH

**Option 1: All Single Family (SFR)**
- 100 individual properties
- At 2 deals/week = 50 weeks ≈ 100 deals
- Capital needed per deal (BRRRR): $30-50K temporarily, most recovered on refi
- Working capital needed: $150-250K revolving

**Option 2: Multifamily Acceleration**
- 5 × 20-unit complexes = 100 units
- Or: 50 SFR + 2 × 25-unit apartments = 100 units
- Multifamily is faster path to unit count

**Monthly Targets:**
| Month | Wholesales | BRRRR Acquisitions | Units Added | Cumulative Units |
|---|---|---|---|---|
| 1-2 | 4-6 | 2-4 | 2-4 | 2-4 |
| 3-4 | 4-6 | 4-6 | 4-6 | 6-10 |
| 5-6 | 4-6 | 6-8 | 6-8 | 12-18 |
| 7-8 | 4-6 | 8-10 | 8-10 | 20-28 |
| 9-12 | 4-6 | 10-15+ (include multifamily) | 72+ | 100 |

### G. HOW CLAUDE HELPS YOU DAILY

Ask Claude to:
1. **Analyze deals:** "Run the numbers on [address], purchase $X, rehab $X, ARV $X, rent $X"
2. **Write offers:** "Draft a purchase agreement for [address] at $X with [terms]"
3. **Comp analysis:** Feed Claude the property details and comps data
4. **Negotiate:** "Help me counter-offer; seller wants $120K, my MAO is $95K"
5. **Build systems:** "Create a deal tracking spreadsheet template"
6. **Draft communications:** Letters to sellers, tenant screening criteria, PM agreements
7. **Legal templates:** LOIs, JV agreements, partnership structures
8. **Financial modeling:** Cash flow projections, portfolio growth scenarios
9. **Market research:** Analyze rental comps, vacancy rates, market trends
10. **Due diligence checklists:** Property inspection, title review, environmental

---

## QUICK-START CHECKLIST

- [ ] Subscribe to Claude Max ($100 or $200/mo)
- [ ] Install Claude Code on your computer
- [ ] Create your CLAUDE.md file with all your business context
- [ ] Set up a deal analysis spreadsheet template (ask Claude to build it)
- [ ] Set up your wholesaling machine (lists, cold calling, direct mail)
- [ ] Build cash buyer list (50+ buyers)
- [ ] Establish hard money lender relationship
- [ ] Get pre-approved with 2-3 DSCR lenders
- [ ] Set up property management (self-manage first 10, then hire PM)
- [ ] Analyze 5-10 deals per day using Claude
- [ ] Make 2-5 offers per day
- [ ] Close first deal within 30 days

---

*This document was built to be your reference guide. Keep it in your Claude project folder and update it as your business grows. Claude will read it automatically and give you better, more targeted help without burning tokens on repeated context.*
