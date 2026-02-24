# AI AGENT ARCHITECTURE -- AI Marketing Agent System
## AI Marketing Agent Brain File | Created: 2026-02-23

---

## OVERVIEW

This document defines the technical architecture for an AI-powered marketing agent that:
1. **Operates the J. Marque / Money Decoded brand** -- generating, scheduling, and optimizing content across all platforms
2. **Scales into a sellable service** -- the same system, configured per client, sold as a managed AI marketing service to other businesses

---

## SYSTEM ARCHITECTURE

### High-Level Flow

```
[INPUT LAYER]                    [PROCESSING LAYER]              [OUTPUT LAYER]

Brand Voice Guide ----+                                           +---> TikTok scripts
Content Pillars ------+          +-------------------+            +---> IG carousels
SEO Keywords ---------+--------->| AI CONTENT ENGINE |----------->+---> X/Twitter threads
Trending Topics ------+          | (Claude API)      |            +---> LinkedIn posts
Content Calendar -----+          +-------------------+            +---> YouTube scripts
Performance Data -----+                |                          +---> Blog articles
Client Brief ---------+                |                          +---> Email newsletters
                                       v                          +---> Facebook posts
                              +-------------------+               +---> Ad copy
                              | REVIEW QUEUE       |              +---> Landing page copy
                              | (Human approval)   |
                              +-------------------+
                                       |
                                       v
                              +-------------------+
                              | SCHEDULING LAYER   |
                              | (Buffer/Publer/    |
                              |  Metricool)        |
                              +-------------------+
                                       |
                                       v
                              +-------------------+
                              | ANALYTICS LAYER    |
                              | (Performance data  |
                              |  feeds back to     |
                              |  input layer)      |
                              +-------------------+
```

---

## CORE COMPONENTS

### 1. Brain Files (Input Layer)

These files define the agent's knowledge base for each client. For J. Marque, they already exist in this directory.

| Brain File | Purpose | Update Frequency |
|-----------|---------|-----------------|
| `BRAND_VOICE_GUIDE.md` | Tone, style, character, banned words, platform rules | Quarterly |
| `CONTENT_ENGINE.md` | Templates, repurposing system, calendar framework | Quarterly |
| `SEO_STRATEGY.md` | Keywords, blog strategy, technical SEO | Monthly |
| `30_DAY_CONTENT_CALENDAR.md` | Specific daily content plan | Monthly (regenerate) |
| `AI_AGENT_ARCHITECTURE.md` | This file -- system design | As needed |
| Client knowledge base (books, products, funnel) | Source material for content | As products change |

**For new clients:** Duplicate the brain file structure. Replace brand-specific content. The templates and architecture remain the same.

### 2. AI Content Engine (Processing Layer)

**Technology:** Claude API (Anthropic) -- primary engine
**Model:** Claude Opus or Sonnet depending on content complexity
**Interface:** Claude Code CLI for direct operation OR API integration for automated pipelines

#### How Content Generation Works

**Step 1: Daily Content Brief**
The agent reads the content calendar, checks trending topics, and reviews performance data from prior posts. It generates a daily brief:

```
DAILY CONTENT BRIEF -- [DATE]
================================
CALENDAR ITEMS:
- [Platform]: [Scheduled content type + topic]
- [Platform]: [Scheduled content type + topic]
- ...

TRENDING OPPORTUNITIES:
- [Trend #1]: [How it connects to content pillars]
- [Trend #2]: [How it connects to content pillars]

PERFORMANCE INSIGHTS:
- Top post last 7 days: [Post] -- [Metric]
- Underperformer: [Post] -- [Why it likely failed]
- Recommended adjustment: [Specific change]

CONTENT TO GENERATE TODAY:
1. [Platform] -- [Type] -- [Topic] -- [Template to use]
2. [Platform] -- [Type] -- [Topic] -- [Template to use]
...
```

**Step 2: Content Generation**
For each content piece, the agent:
1. Loads the relevant template from `CONTENT_ENGINE.md`
2. Loads brand voice rules from `BRAND_VOICE_GUIDE.md`
3. Pulls source material from the knowledge base (book manuscripts, sales copy, etc.)
4. Generates the content with platform-specific formatting
5. Runs the 5-question voice check (from Brand Voice Guide)
6. Outputs platform-ready content

**Step 3: Human Review Queue**
All generated content enters a review queue. The human (Jamaal, or client in service model) reviews and either:
- Approves as-is
- Requests revision (with notes)
- Rejects (with reason -- feeds back into learning)

**Step 4: Scheduling**
Approved content is formatted and loaded into the scheduling tool for automated posting.

#### Prompt Structure

The agent uses a structured prompt chain:

```
SYSTEM PROMPT:
You are J. Marque's marketing agent. You generate platform-ready content
following the brand voice guide and content templates provided.

Rules:
- Follow the BRAND_VOICE_GUIDE.md exactly
- Use the template structure from CONTENT_ENGINE.md
- Include specific numbers, facts, and historical references
- Every piece must connect back to the funnel (free book opt-in)
- Platform-specific formatting is mandatory
- Run the 5-question voice check before finalizing

CONTEXT:
[Brand Voice Guide -- loaded]
[Relevant template -- loaded]
[Source material -- loaded]
[Performance data from last 7 days -- loaded]
[Trending topics -- loaded]

TASK:
Generate [content type] for [platform] on the topic of [topic].
Follow template: [template name].
Content pillar: [pillar #].
CTA: [specific CTA for this piece].
```

### 3. Review & Approval System

#### For J. Marque (Self-Managed)
- Agent generates content in batch (daily or weekly)
- Content saved to `output/[date]/` folder with platform labels
- Jamaal reviews on phone (via GitHub or shared folder)
- Approval = move to `approved/` folder
- Revision = annotate and regenerate

#### For Service Clients
- Content generated and pushed to a shared review board (Notion, Trello, or GHL)
- Client has 24-hour review window
- Auto-approve after 24 hours if no feedback (configurable)
- Revision requests handled within 4 hours

### 4. Scheduling & Posting Layer

| Tool | Purpose | Cost | Platforms |
|------|---------|------|-----------|
| **Buffer** | Social scheduling | $6-120/mo | TikTok, IG, X, LinkedIn, FB, Pinterest |
| **Publer** | Social scheduling (alternative) | $12-84/mo | All major platforms |
| **Metricool** | Scheduling + analytics | $18-99/mo | All major + analytics |
| **GHL** | Email marketing + automations | $97/mo (already have) | Email, SMS |
| **YouTube Studio** | YouTube scheduling | Free | YouTube |
| **WordPress / Ghost** | Blog publishing | $0-25/mo | Blog/SEO |

**Recommended Stack for J. Marque:**
- Buffer Pro ($36/mo) -- covers all social platforms
- GHL ($97/mo) -- email + CRM (already in use)
- WordPress or Ghost ($0-25/mo) -- blog

**Total scheduling cost: ~$133-158/mo**

### 5. Analytics & Feedback Loop

#### Metrics Collected (Per Platform)

| Platform | Metrics | Tool |
|----------|---------|------|
| TikTok | Views, likes, shares, comments, profile visits, follower growth | TikTok Analytics |
| Instagram | Reach, impressions, saves, shares, profile visits, follower growth | IG Insights |
| X/Twitter | Impressions, engagements, retweets, replies, profile clicks | X Analytics |
| LinkedIn | Impressions, reactions, comments, clicks, follower growth | LinkedIn Analytics |
| YouTube | Views, watch time %, subscribers, CTR, retention | YouTube Studio |
| Facebook | Reach, engagement, clicks, shares | FB Insights |
| Email | Open rate, click rate, unsubscribe rate, conversion rate | GHL |
| Blog | Sessions, time on page, bounce rate, conversions | Google Analytics |

#### Feedback Loop Process

```
Week N Performance Data
        |
        v
[ANALYZE] -- What worked? What didn't? Why?
        |
        v
[ADJUST] -- Update content calendar, shift pillar weights, test new hooks
        |
        v
[GENERATE] -- Week N+1 content informed by Week N data
        |
        v
[MEASURE] -- Repeat
```

#### Weekly Performance Report (Auto-Generated)

```
WEEKLY PERFORMANCE REPORT -- [DATE RANGE]
==========================================

TOP PERFORMERS:
1. [Platform] -- [Post] -- [Key metric: value] -- WHY: [hypothesis]
2. [Platform] -- [Post] -- [Key metric: value] -- WHY: [hypothesis]
3. [Platform] -- [Post] -- [Key metric: value] -- WHY: [hypothesis]

UNDERPERFORMERS:
1. [Platform] -- [Post] -- [Key metric: value] -- WHY: [hypothesis]

FUNNEL METRICS:
- New opt-ins (free book): [count]
- $7 purchases: [count]
- $97 purchases: [count]
- Applications: [count]

RECOMMENDATIONS FOR NEXT WEEK:
- Double down on: [topic/format that worked]
- Test: [new angle or format]
- Reduce: [topic/format that underperformed]
- Trending opportunity: [current trend + how to leverage]

CONTENT PILLAR PERFORMANCE:
| Pillar | Posts | Avg Engagement | Trend |
|--------|-------|---------------|-------|
| 1. Money History | X | X | Up/Down/Flat |
| 2. Inflation Tax | X | X | Up/Down/Flat |
| ... | ... | ... | ... |
```

---

## AUTOMATION TIERS

### What Can Be FULLY Automated (No Human Review)

| Task | Tool | Notes |
|------|------|-------|
| Content calendar generation | Claude API | Monthly batch, based on pillars + SEO keywords |
| Blog article first drafts | Claude API | SEO-optimized, follows template |
| Email newsletter first drafts | Claude API | Follows template + brand voice |
| Social media caption writing | Claude API | Per-platform formatting |
| Hashtag selection | Claude API | Per-platform strategy from Brand Voice Guide |
| Performance report generation | Script + API | Pull analytics, format report |
| Trending topic monitoring | API + RSS | Financial news, TikTok trends |
| SEO keyword tracking | SEMrush/Ahrefs API | Automated rank monitoring |
| Cross-posting | Buffer/Publer | TikTok --> IG Reels --> Shorts |
| Email sequence triggers | GHL | Already automated in funnel |

### What Needs HUMAN REVIEW (Before Publishing)

| Task | Why | Review Time |
|------|-----|-------------|
| TikTok/Reel scripts | Brand voice nuance, current trends | 2 min per script |
| LinkedIn posts | Professional reputation, factual accuracy | 3 min per post |
| YouTube scripts | 8-12 min of content, needs flow check | 10 min per script |
| Blog articles | SEO accuracy, factual claims, links | 10 min per article |
| Promotional content | Any content pushing paid products | 2 min per piece |
| Reactive/trending content | Real-time judgment calls | 5 min per piece |
| Client-facing content (service model) | Client brand consistency | 5 min per piece |

### What REQUIRES Human Execution

| Task | Why |
|------|-----|
| Video recording/production | AI avatar via HeyGen, but needs setup |
| Graphic design (beyond templates) | Canva/design tool interaction |
| Community management (DM responses) | Personal touch required |
| Strategy calls (coaching funnel) | High-ticket sales = human |
| Paid ad management | Budget decisions + optimization |
| Partnership/collab outreach | Relationship-dependent |

---

## SCALING TO A SERVICE MODEL

### The AI Marketing Agency Blueprint

**Service Name:** (TBD -- could operate under Vaulted Capital or separate brand)

**Value Proposition:** "We deploy an AI marketing system customized to your brand that generates, schedules, and optimizes content across every platform -- for a fraction of the cost of a marketing team."

### Service Tiers

| Tier | Name | What's Included | Price/Month | Gross Margin |
|------|------|----------------|------------|-------------|
| 1 | **Starter** | Brand voice setup + 30 social posts/mo (2 platforms) + monthly report | $997/mo | ~75% |
| 2 | **Growth** | Everything in Starter + 60 posts/mo (4 platforms) + blog (4 articles) + email (8 newsletters) + weekly report | $2,497/mo | ~70% |
| 3 | **Scale** | Everything in Growth + all platforms + YouTube scripts + SEO strategy + ad copy + daily reporting + dedicated strategist review | $4,997/mo | ~65% |
| 4 | **Enterprise** | Custom. Multiple brands, high volume, API integration with client tools. | $7,500+/mo | ~60% |

### Cost Per Client (Internal)

| Cost Component | Starter | Growth | Scale |
|---------------|---------|--------|-------|
| Claude API (content generation) | $15-30/mo | $40-80/mo | $80-150/mo |
| Scheduling tool (client account) | $12-36/mo | $36-60/mo | $60-100/mo |
| Analytics/SEO tools (shared) | $10/mo | $20/mo | $40/mo |
| Human review time (your time) | 2 hrs/mo | 5 hrs/mo | 10 hrs/mo |
| Human review cost (@$50/hr) | $100/mo | $250/mo | $500/mo |
| **Total cost per client** | **$137-176/mo** | **$346-410/mo** | **$680-790/mo** |
| **Gross profit per client** | **$821-860/mo** | **$2,087-2,151/mo** | **$4,207-4,317/mo** |

### Client Onboarding Process

**Week 1: Discovery & Setup**
1. Client intake questionnaire (brand, products, audience, competitors, goals)
2. Build client brain files (Brand Voice Guide, Content Pillars, SEO Keywords)
3. Set up scheduling tool accounts
4. Set up analytics tracking
5. Generate first month's content calendar

**Week 2: Content Production**
1. Generate first batch of content (Week 1-2 of calendar)
2. Client review and feedback
3. Revisions based on feedback
4. Load approved content into scheduler

**Week 3-4: Launch & Optimize**
1. Content goes live
2. Monitor performance daily
3. Weekly report to client
4. Adjust based on early performance data

**Ongoing (Monthly Cycle):**
1. Generate next month's content calendar (based on performance data)
2. Batch content production
3. Client review window (48 hours)
4. Schedule all approved content
5. Weekly performance reports
6. Monthly strategy call (Growth + Scale tiers)

### Revenue Projections (Service Model)

| Clients | Mix | Monthly Revenue | Annual Revenue | Monthly Profit |
|---------|-----|----------------|---------------|---------------|
| 5 | 3 Starter + 2 Growth | $7,985 | $95,820 | $5,300+ |
| 10 | 4 Starter + 4 Growth + 2 Scale | $23,982 | $287,784 | $16,000+ |
| 20 | 6 Starter + 8 Growth + 4 Scale + 2 Enterprise | $55,972 | $671,664 | $37,000+ |
| 50 | Mixed | $120,000+ | $1.44M+ | $80,000+ |

### Hiring Triggers

| Milestone | Hire | Role | Cost |
|-----------|------|------|------|
| 5 clients | VA (part-time) | Content loading, scheduling, basic QA | $500-1,000/mo |
| 10 clients | Content reviewer (full-time) | Review all AI output, maintain quality | $3,000-4,000/mo |
| 15 clients | Account manager | Client communication, reporting, strategy calls | $4,000-5,000/mo |
| 25 clients | Second content reviewer | Scale review capacity | $3,000-4,000/mo |
| 50 clients | Operations manager | Process, hiring, systems | $5,000-7,000/mo |

---

## INTEGRATION POINTS

### Current Stack (J. Marque)

| Tool | Integration | Purpose |
|------|------------|---------|
| **GHL (GoHighLevel)** | API | Email sequences, CRM, landing pages, automations |
| **Gumroad** | Webhook | Purchase notifications, delivery triggers |
| **GitHub** | CLI | Version control for brain files, task tracking |
| **Claude Code** | CLI | Content generation engine |
| **HeyGen** | API (future) | AI avatar video generation |

### Service Stack (Per Client)

| Tool | Integration | Purpose |
|------|------------|---------|
| **Claude API** | Direct | Content generation |
| **Buffer/Publer API** | REST API | Automated scheduling |
| **Google Analytics** | API | Traffic + conversion tracking |
| **Social platform APIs** | REST/OAuth | Analytics pull |
| **Notion/Trello API** | REST API | Client review board |
| **Stripe** | API | Client billing |
| **Zapier/Make** | Webhook | Glue layer between tools |

### Future Integrations

| Tool | When | Purpose |
|------|------|---------|
| **SEMrush/Ahrefs API** | Month 3 | Automated keyword tracking + competitor monitoring |
| **Canva API** | Month 3 | Automated graphic generation (carousels, quote cards) |
| **HeyGen API** | Month 4 | Automated video generation from scripts |
| **ElevenLabs API** | Month 4 | AI voiceover for video content |
| **Midjourney/DALL-E API** | Month 2 | Custom imagery for posts |
| **Perplexity/Tavily API** | Month 1 | Real-time trending topic research |
| **Make.com** | Month 1 | Workflow automation (generate --> review --> schedule) |

---

## IMPLEMENTATION ROADMAP

### Phase 1: Manual + AI (Weeks 1-4)
**Goal:** Validate the system works for J. Marque before automating.

| Task | Tool | Status |
|------|------|--------|
| Brain files created | Claude Code | DONE (this build) |
| Generate Week 1-2 content manually using brain files | Claude Code | TODO |
| Review and approve content | Manual | TODO |
| Post content manually or via Buffer | Manual/Buffer | TODO |
| Track performance in spreadsheet | Google Sheets | TODO |
| Iterate brain files based on what works | Claude Code | TODO |

### Phase 2: Semi-Automated (Weeks 5-8)
**Goal:** Automate content generation and scheduling. Human review remains.

| Task | Tool |
|------|------|
| Set up Claude API for batch content generation | Claude API |
| Build generation scripts (input: calendar + brain files, output: platform-ready content) | Python/Node |
| Set up Buffer API for automated scheduling | Buffer API |
| Build review interface (simple web page or Notion board) | Notion/Custom |
| Automate weekly performance reports | Script + Analytics APIs |

### Phase 3: Full Pipeline (Weeks 9-12)
**Goal:** End-to-end pipeline. Human only reviews before publishing.

| Task | Tool |
|------|------|
| Trending topic monitoring (auto-detect relevant trends) | Perplexity API + RSS |
| Auto-generate reactive content when trend detected | Claude API |
| Performance-based content optimization (auto-adjust pillar weights) | Custom logic |
| A/B test hook variations automatically | Claude API + scheduling |
| Client dashboard for service model | Custom web app |

### Phase 4: Service Launch (Months 4-6)
**Goal:** Onboard first 3-5 paying clients.

| Task | Tool |
|------|------|
| Productize the onboarding process | Templates + SOP |
| Build client intake questionnaire | Typeform/GHL |
| Create client brain file templates (blank versions of all 5 files) | Templates |
| Set up billing (Stripe) | Stripe |
| Build client portal (review + approve + analytics) | Custom/Notion |
| Onboard 3 beta clients at discounted rate | Outreach |
| Prove results, collect testimonials | 90-day pilot |
| Launch at full pricing | Marketing |

---

## COST SUMMARY (J. Marque -- Self Operation)

| Item | Monthly Cost | Notes |
|------|-------------|-------|
| Claude API (Sonnet for most content, Opus for complex) | $20-50 | ~500-1,000 API calls/month |
| Buffer Pro | $36 | Social scheduling |
| GHL | $97 | Already paying -- email + CRM |
| Domain/hosting (blog) | $10-25 | WordPress or Ghost |
| HeyGen (AI avatar) | $29 | Video content |
| Canva Pro (graphics) | $13 | Carousels, quote cards |
| **Total** | **$205-250/mo** | |

**Compared to:** Hiring a social media manager ($2,000-4,000/mo) or a marketing agency ($3,000-10,000/mo).

---

## SECURITY & BRAND PROTECTION

### Content Safety Rules
- All content must be factually verifiable. No speculation presented as fact.
- Federal Reserve and monetary policy criticism must be sourced and factual, not conspiratorial.
- No financial advice (legal risk). Always frame as "education" and "information."
- No guarantees of income or returns. Use disclaimers where required by platform.
- No disparagement of specific companies, individuals, or competitors by name.
- All book content is original -- no plagiarism risk (already AI-audited, passed clean).

### Brand Anonymity Protection
- J. Marque is a pen name. NEVER connect to Jamaal Marque Richard in any published content.
- AI avatar only. No personal photos, no personal social accounts linked.
- LLC structures for all business operations (Legacy Luxe Collective or future entity).
- Domain WHOIS privacy enabled on all domains.
- No personal address, phone, or identifying information in any public content.

### Client Data (Service Model)
- Each client's brain files stored in isolated directories.
- No cross-client data sharing or contamination.
- Client content review boards are private per client.
- API keys and credentials stored in environment variables, never in brain files.
- Client offboarding: deliver all brain files + content archive, then purge from system.

---

## QUICK START -- HOW TO USE THIS SYSTEM TODAY

Even before any automation is built, this system works manually:

1. **Open Claude Code.**
2. **Load the brain files** into context:
   - `BRAND_VOICE_GUIDE.md`
   - `CONTENT_ENGINE.md`
   - `30_DAY_CONTENT_CALENDAR.md`
3. **Pick today's content from the calendar.**
4. **Prompt Claude:** "Generate the Day [X] content for [Platform]. Use the [Template Name] template. Content pillar: [X]. Topic: [topic from calendar]. CTA: free book opt-in."
5. **Review the output** against the 5-question voice check.
6. **Post it.**
7. **Track performance.**
8. **Repeat tomorrow.**

That's it. The brain files ARE the agent. Claude is the engine. You're the quality filter.
