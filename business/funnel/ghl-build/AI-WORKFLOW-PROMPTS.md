# GHL AI Workflow Assistant — Copy-Paste Prompts
## Money Decoded 3-Track Funnel | J. Marque Brand

---

## HOW TO USE THIS FILE

1. **Go to:** Automation > Workflows > + Create Workflow
2. **Select:** "Use AI Assistant" (or look for the AI/magic wand icon)
3. **Copy ONE prompt at a time** from below and paste it into the AI assistant
4. **Review** what the AI builds — verify tag names, email subjects, and wait times match
5. **Save** the workflow, then move to the next one
6. **Repeat** for all 18 workflows

> **IMPORTANT:** Create your tags FIRST (Section A below), then create workflows. The AI assistant needs to find existing tags to wire them correctly.

---

## SECTION A: CREATE TAGS MANUALLY FIRST (5 minutes)

Go to **Settings > Tags > + Add Tag** and create all 36 tags below. Just type each name and hit enter/save.

**Lifecycle tags:**
```
lead
book1-downloaded
buyer
trilogy-purchased
deal-machine-buyer
wealth-shift-buyer
foundation-buyer
applicant
booked-call
call-completed
enrolled-group
enrolled-1on1
active-student
graduated
no-show
```

**Track tags:**
```
track-active
track-passive
track-foundation
```

**Sequence tags:**
```
in-sequence-a
in-sequence-b1
in-sequence-b2
in-sequence-b3
in-sequence-c1
in-sequence-c2
in-sequence-c3
in-sequence-d
completed-sequence-a
```

**Engagement tags:**
```
engaged-7d
engaged-30d
cold-30
cold-90
```

**Traffic source tags:**
```
source-tiktok
source-instagram
source-organic
source-gumroad
```

**System tags:**
```
unsubscribed
```

---

## SECTION B: CREATE 2 CUSTOM FIELDS (1 minute)

Go to **Settings > Custom Fields > + Add Field**

1. **Name:** `investor_track` | **Type:** Radio / Single Option | **Options:** active, passive, foundation
2. **Name:** `funnel_source` | **Type:** Single Line Text

---

## SECTION C: WORKFLOW PROMPTS (copy-paste one at a time)

---

### WORKFLOW 1 of 18: Sequence A — Book 1 to Trilogy

```
Create a workflow called "MD — Sequence A: Book 1 to Trilogy".

Trigger: Form Submitted (the Money Decoded opt-in form).

Steps in exact order:
1. Add tag "lead"
2. Add tag "in-sequence-a"
3. Add tag "book1-downloaded"
4. Add contact to pipeline "Money Decoded Funnel" at stage "Book1 Lead"
5. Send email with subject "You just took the red pill on money" from "J. Marque"
6. Wait 1 day
7. If/else: If contact has tag "buyer" then go to step 22 (end). If no, continue.
8. Send email with subject "What happened on August 15, 1971" from "J. Marque"
9. Wait 1 day
10. If/else: If contact has tag "buyer" then end. If no, continue.
11. Send email with subject "The $847/year lie your bank is telling you" from "J. Marque"
12. Wait 2 days
13. If/else: If contact has tag "buyer" then end. If no, continue.
14. Send email with subject "BlackRock just bet $4.7 billion on this" from "J. Marque"
15. Wait 1 day
16. If/else: If contact has tag "buyer" then end. If no, continue.
17. Send email with subject "I read all 3 in one weekend" from "J. Marque"
18. Wait 2 days
19. If/else: If contact has tag "buyer" then end. If no, continue.
20. Send email with subject "Last chance at $7 — price going up" from "J. Marque"
21. Remove tag "in-sequence-a"
22. Add tag "completed-sequence-a"

The pattern is: send email, wait, check if they bought (tag "buyer"), if yes stop the sequence, if no send the next email. This is a 6-email soap opera sequence over 7 days designed to sell a $7 trilogy.
```

---

### WORKFLOW 2 of 18: Trilogy Purchase Handler

```
Create a workflow called "MD — Trilogy Purchase Handler".

Trigger: Order Form Submitted OR Payment Received for product "Money Decoded Trilogy — All 3 Books".

Steps in exact order:
1. Add tag "buyer"
2. Add tag "trilogy-purchased"
3. Remove tag "in-sequence-a"
4. Remove contact from workflow "MD — Sequence A: Book 1 to Trilogy"
5. Move contact in pipeline "Money Decoded Funnel" to stage "Trilogy Buyer"
6. Send email with subject "Smart move — your trilogy is ready" from "J. Marque" — this is a delivery email with download links for all 3 books and member portal login link

This workflow fires when someone buys the $7 trilogy. It stops the Sequence A nurture emails and delivers the product.
```

---

### WORKFLOW 3 of 18: Questionnaire Router

```
Create a workflow called "MD — Questionnaire Router".

Trigger: Form Submitted (the Track Selection Questionnaire form, or form on page /your-path).

Steps in exact order:
1. Move contact in pipeline "Money Decoded Funnel" to stage "Track Selected"
2. If/else: Check if custom field "investor_track" equals "active"
   - YES branch:
     a. Add tag "track-active"
     b. Wait 1 hour
     c. If/else: Does contact have tag "deal-machine-buyer"?
        - YES: End workflow
        - NO: Add contact to workflow "MD — Sequence B1: Push Deal Machine"
3. If/else: Check if custom field "investor_track" equals "passive"
   - YES branch:
     a. Add tag "track-passive"
     b. Wait 1 hour
     c. If/else: Does contact have tag "wealth-shift-buyer"?
        - YES: End workflow
        - NO: Add contact to workflow "MD — Sequence B2: Push Wealth Shift"
4. If/else: Check if custom field "investor_track" equals "foundation"
   - YES branch:
     a. Add tag "track-foundation"
     b. Wait 1 hour
     c. If/else: Does contact have tag "foundation-buyer"?
        - YES: End workflow
        - NO: Add contact to workflow "MD — Sequence B3: Push Foundation"
5. Fallback (if no match): Add tag "track-foundation" and add contact to workflow "MD — Sequence B3: Push Foundation"

The 1-hour wait after track selection gives buyers time to purchase on the offer page before the email nurture sequence starts.
```

---

### WORKFLOW 4 of 18: Deal Machine Purchase Handler

```
Create a workflow called "MD — Deal Machine Purchase Handler".

Trigger: Order Form Submitted OR Payment Received for product "The Deal Machine — Active Investor's Playbook".

Steps in exact order:
1. Add tag "deal-machine-buyer"
2. Remove tag "in-sequence-b1"
3. Remove contact from workflow "MD — Sequence B1: Push Deal Machine"
4. Move contact in pipeline "Money Decoded Funnel" to stage "Track Product Buyer"
5. Send email with subject "Your Deal Machine is ready — let's find your first deal" from "J. Marque" — delivery email with product access link and member portal
6. Add contact to workflow "MD — Sequence C1: Deal Machine to Coaching"

This fires when someone buys the $147 Deal Machine product. It stops the B1 sales sequence and starts the C1 coaching nurture.
```

---

### WORKFLOW 5 of 18: Wealth Shift Purchase Handler

```
Create a workflow called "MD — Wealth Shift Purchase Handler".

Trigger: Order Form Submitted OR Payment Received for product "The Wealth Shift — Reposition Your Money".

Steps in exact order:
1. Add tag "wealth-shift-buyer"
2. Remove tag "in-sequence-b2"
3. Remove contact from workflow "MD — Sequence B2: Push Wealth Shift"
4. Move contact in pipeline "Money Decoded Funnel" to stage "Track Product Buyer"
5. Send email with subject "Your Wealth Shift guide is ready — let's reposition your money" from "J. Marque" — delivery email with product access and member portal
6. Add contact to workflow "MD — Sequence C2: Wealth Shift to Coaching"

This fires when someone buys the $197 Wealth Shift product. Stops B2, starts C2.
```

---

### WORKFLOW 6 of 18: Foundation Purchase Handler

```
Create a workflow called "MD — Foundation Purchase Handler".

Trigger: Order Form Submitted OR Payment Received for product "The Foundation — Financial Blueprint".

Steps in exact order:
1. Add tag "foundation-buyer"
2. Remove tag "in-sequence-b3"
3. Remove contact from workflow "MD — Sequence B3: Push Foundation"
4. Move contact in pipeline "Money Decoded Funnel" to stage "Track Product Buyer"
5. Send email with subject "Your Foundation blueprint is ready — let's build" from "J. Marque" — delivery email with product access and member portal
6. Add contact to workflow "MD — Sequence C3: Foundation to Coaching"

This fires when someone buys the $97 Foundation product. Stops B3, starts C3.
```

---

### WORKFLOW 7 of 18: Sequence B1 — Push Deal Machine

```
Create a workflow called "MD — Sequence B1: Push Deal Machine".

Trigger: Contact added to this workflow (enrolled by the Questionnaire Router workflow).

Steps in exact order:
1. Add tag "in-sequence-b1"
2. Send email with subject "You picked the active track — your books are ready" from "J. Marque"
3. Wait 2 days
4. If/else: If contact has tag "deal-machine-buyer" then remove tag "in-sequence-b1" and end. If no, continue.
5. Send email with subject "The gap nobody talks about" from "J. Marque"
6. Wait 2 days
7. If/else: If contact has tag "deal-machine-buyer" then remove tag "in-sequence-b1" and end. If no, continue.
8. Send email with subject "6 modules, 12 templates, your first deal" from "J. Marque"
9. Wait 3 days
10. If/else: If contact has tag "deal-machine-buyer" then remove tag "in-sequence-b1" and end. If no, continue.
11. Send email with subject "{{contact.first_name}}, one more thing" from "J. Marque"
12. Remove tag "in-sequence-b1"

This is a 4-email sequence over 7 days pushing the $147 Deal Machine product. Each email checks if they already bought before sending the next one.
```

---

### WORKFLOW 8 of 18: Sequence B2 — Push Wealth Shift

```
Create a workflow called "MD — Sequence B2: Push Wealth Shift".

Trigger: Contact added to this workflow (enrolled by the Questionnaire Router workflow).

Steps in exact order:
1. Add tag "in-sequence-b2"
2. Send email with subject "Smart choice — your trilogy is ready" from "J. Marque"
3. Wait 2 days
4. If/else: If contact has tag "wealth-shift-buyer" then remove tag "in-sequence-b2" and end. If no, continue.
5. Send email with subject "You see the problem now — here's the question" from "J. Marque"
6. Wait 2 days
7. If/else: If contact has tag "wealth-shift-buyer" then remove tag "in-sequence-b2" and end. If no, continue.
8. Send email with subject "What's inside The Wealth Shift" from "J. Marque"
9. Wait 3 days
10. If/else: If contact has tag "wealth-shift-buyer" then remove tag "in-sequence-b2" and end. If no, continue.
11. Send email with subject "The real cost of waiting" from "J. Marque"
12. Remove tag "in-sequence-b2"

This is a 4-email sequence over 7 days pushing the $197 Wealth Shift product. Same pattern as B1 — check for purchase tag before each email.
```

---

### WORKFLOW 9 of 18: Sequence B3 — Push Foundation

```
Create a workflow called "MD — Sequence B3: Push Foundation".

Trigger: Contact added to this workflow (enrolled by the Questionnaire Router workflow).

Steps in exact order:
1. Add tag "in-sequence-b3"
2. Send email with subject "Respect — your books are ready" from "J. Marque"
3. Wait 2 days
4. If/else: If contact has tag "foundation-buyer" then remove tag "in-sequence-b3" and end. If no, continue.
5. Send email with subject "Eyes open is just the beginning" from "J. Marque"
6. Wait 2 days
7. If/else: If contact has tag "foundation-buyer" then remove tag "in-sequence-b3" and end. If no, continue.
8. Send email with subject "7 modules. 9 worksheets. One hour to start." from "J. Marque"
9. Wait 3 days
10. If/else: If contact has tag "foundation-buyer" then remove tag "in-sequence-b3" and end. If no, continue.
11. Send email with subject "{{contact.first_name}}, no shame in starting here" from "J. Marque"
12. Remove tag "in-sequence-b3"

This is a 4-email sequence over 7 days pushing the $97 Foundation product. Same pattern as B1 and B2.
```

---

### WORKFLOW 10 of 18: Sequence C1 — Deal Machine to Coaching

```
Create a workflow called "MD — Sequence C1: Deal Machine to Coaching".

Trigger: Contact added to this workflow (enrolled by Deal Machine Purchase Handler).

Steps in exact order:
1. Add tag "in-sequence-c1"
2. Send email with subject "You're in the deal-making track now" from "J. Marque"
3. Wait 2 days
4. If/else: If contact has tag "applicant" then remove tag "in-sequence-c1" and end. If no, continue.
5. Send email with subject "Why I love down markets" from "J. Marque"
6. Wait 2 days
7. If/else: If contact has tag "applicant" then end. If no, continue.
8. Send email with subject "My first deal lost me money" from "J. Marque"
9. Wait 2 days
10. If/else: If contact has tag "applicant" then end. If no, continue.
11. Send email with subject "{{contact.first_name}}, meet David" from "J. Marque"
12. Wait 2 days
13. If/else: If contact has tag "applicant" then end. If no, continue.
14. Send email with subject "Keisha's first wholesale check was $8,500" from "J. Marque"
15. Wait 2 days
16. If/else: If contact has tag "applicant" then end. If no, continue.
17. Send email with subject "3 mistakes that keep new investors broke" from "J. Marque"
18. Wait 2 days
19. If/else: If contact has tag "applicant" then end. If no, continue.
20. Send email with subject "Applications are open — 15 spots" from "J. Marque" — include link to /apply coaching application page
21. Wait 3 days
22. If/else: If contact has tag "applicant" then end. If no, continue.
23. Send email with subject "7 spots left — your questions answered" from "J. Marque" — include link to /apply
24. Wait 3 days
25. If/else: If contact has tag "applicant" then end. If no, continue.
26. Send email with subject "closing applications friday" from "J. Marque" — include link to /apply
27. Remove tag "in-sequence-c1"

This is a 9-email sequence over 18 days. Emails 1-6 build value and trust. Emails 7-9 pitch the $5,997 coaching program with a link to the application page. Each email checks if they already applied before sending the next.
```

---

### WORKFLOW 11 of 18: Sequence C2 — Wealth Shift to Coaching

```
Create a workflow called "MD — Sequence C2: Wealth Shift to Coaching".

Trigger: Contact added to this workflow (enrolled by Wealth Shift Purchase Handler).

Steps in exact order:
1. Add tag "in-sequence-c2"
2. Send email with subject "Your Wealth Shift materials are ready" from "J. Marque"
3. Wait 2 days
4. If/else: If contact has tag "applicant" then remove tag "in-sequence-c2" and end. If no, continue.
5. Send email with subject "What your financial advisor won't tell you" from "J. Marque"
6. Wait 2 days
7. If/else: If contact has tag "applicant" then end. If no, continue.
8. Send email with subject "The $250M lesson most professionals miss" from "J. Marque"
9. Wait 3 days
10. If/else: If contact has tag "applicant" then end. If no, continue.
11. Send email with subject "{{contact.first_name}}, this is David's story" from "J. Marque"
12. Wait 2 days
13. If/else: If contact has tag "applicant" then end. If no, continue.
14. Send email with subject "The fear that keeps $500K locked in a 401(k)" from "J. Marque"
15. Wait 2 days
16. If/else: If contact has tag "applicant" then end. If no, continue.
17. Send email with subject "3 wealth mistakes smart professionals make" from "J. Marque"
18. Wait 2 days
19. If/else: If contact has tag "applicant" then end. If no, continue.
20. Send email with subject "Applications open — your personal wealth strategist" from "J. Marque" — include link to /apply
21. Wait 2 days
22. If/else: If contact has tag "applicant" then end. If no, continue.
23. Send email with subject "8 spots remaining — your questions answered" from "J. Marque" — include link to /apply
24. Wait 3 days
25. If/else: If contact has tag "applicant" then end. If no, continue.
26. Send email with subject "final note on the program" from "J. Marque" — include link to /apply
27. Remove tag "in-sequence-c2"

Same 9-email structure as C1 but tailored for passive investors. Emails 7-9 pitch coaching with application link.
```

---

### WORKFLOW 12 of 18: Sequence C3 — Foundation to Coaching

```
Create a workflow called "MD — Sequence C3: Foundation to Coaching".

Trigger: Contact added to this workflow (enrolled by Foundation Purchase Handler).

Steps in exact order:
1. Add tag "in-sequence-c3"
2. Send email with subject "Welcome to The Foundation — here's your plan" from "J. Marque"
3. Wait 2 days
4. If/else: If contact has tag "applicant" then remove tag "in-sequence-c3" and end. If no, continue.
5. Send email with subject "I started with less than you think" from "J. Marque"
6. Wait 2 days
7. If/else: If contact has tag "applicant" then end. If no, continue.
8. Send email with subject "The $680/month Keisha didn't know she was wasting" from "J. Marque"
9. Wait 2 days
10. If/else: If contact has tag "applicant" then end. If no, continue.
11. Send email with subject "{{contact.first_name}}, Keisha now owns 3 properties" from "J. Marque"
12. Wait 2 days
13. If/else: If contact has tag "applicant" then end. If no, continue.
14. Send email with subject "You're not starting late — you're starting right" from "J. Marque"
15. Wait 2 days
16. If/else: If contact has tag "applicant" then end. If no, continue.
17. Send email with subject "4 mistakes beginners make (and how to avoid every one)" from "J. Marque"
18. Wait 2 days
19. If/else: If contact has tag "applicant" then end. If no, continue.
20. Send email with subject "Applications are open — 15 spots" from "J. Marque" — include link to /apply
21. Wait 2 days
22. If/else: If contact has tag "applicant" then end. If no, continue.
23. Send email with subject "8 spots left — your questions answered" from "J. Marque" — include link to /apply
24. Wait 3 days
25. If/else: If contact has tag "applicant" then end. If no, continue.
26. Send email with subject "last email about this" from "J. Marque" — include link to /apply
27. Remove tag "in-sequence-c3"

Same 9-email structure as C1/C2 but for Foundation track buyers. Emails 7-9 pitch coaching.
```

---

### WORKFLOW 13 of 18: Application Handler

```
Create a workflow called "MD — Application Handler".

Trigger: Survey Submitted — the "Coaching Application" survey.

Steps in exact order:
1. Add tag "applicant"
2. Remove tag "in-sequence-c1"
3. Remove tag "in-sequence-c2"
4. Remove tag "in-sequence-c3"
5. Remove contact from workflow "MD — Sequence C1: Deal Machine to Coaching"
6. Remove contact from workflow "MD — Sequence C2: Wealth Shift to Coaching"
7. Remove contact from workflow "MD — Sequence C3: Foundation to Coaching"
8. Move contact in pipeline "Money Decoded Funnel" to stage "Coaching Applicant"
9. Send internal notification (email to me) with subject "NEW COACHING APPLICATION: {{contact.first_name}} {{contact.last_name}}" — include all contact details, tags, and application answers
10. Add contact to workflow "MD — Sequence D: Application to Strategy Call"

This fires when someone submits the coaching application. It stops ALL C sequences (they might be in any one of the three tracks) and starts the application-to-call nurture sequence.
```

---

### WORKFLOW 14 of 18: Sequence D — Application to Strategy Call

```
Create a workflow called "MD — Sequence D: Application to Strategy Call".

Trigger: Contact added to this workflow (enrolled by Application Handler).

Steps in exact order:
1. Add tag "in-sequence-d"
2. Send email with subject "Application received — here's what happens next" from "J. Marque"
3. Wait 1 day
4. If/else: If contact has tag "booked-call" then remove tag "in-sequence-d" and end. If no, continue.
5. Send email with subject "What to expect on your strategy call" from "J. Marque" — include calendar booking link
6. Wait 1 day
7. If/else: If contact has tag "booked-call" then remove tag "in-sequence-d" and end. If no, continue.
8. Send email with subject "Why I only take 15 people per cohort" from "J. Marque"
9. Wait 1 day
10. If/else: If contact has tag "booked-call" then remove tag "in-sequence-d" and end. If no, continue.
11. Send email with subject "Quick question about your application" from "J. Marque" — include calendar booking link
12. Remove tag "in-sequence-d"

This is a 4-email sequence over 3 days. Goal is to get coaching applicants to book a strategy call. Each email checks if they already booked before sending the next.
```

---

### WORKFLOW 15 of 18: Strategy Call Booked

```
Create a workflow called "MD — Strategy Call Booked".

Trigger: Appointment Scheduled on calendar "Strategy Call — J. Marque".

Steps in exact order:
1. Add tag "booked-call"
2. Remove tag "in-sequence-d"
3. Remove contact from workflow "MD — Sequence D: Application to Strategy Call"
4. Move contact in pipeline "Money Decoded Funnel" to stage "Strategy Call"
5. Send email with subject "Your strategy call is confirmed" from "J. Marque" — include date, time, meeting link, and prep checklist
6. Send internal notification to me with subject "STRATEGY CALL BOOKED: {{contact.first_name}} {{contact.last_name}}" — include contact details, track tag, and application answers
7. Wait until 24 hours before the appointment
8. Send email with subject "Reminder: Strategy call tomorrow" from "J. Marque" — include meeting link
9. Wait until 1 hour before the appointment
10. Send SMS: "Hey {{contact.first_name}} — our strategy call is in 1 hour. Looking forward to it. — J. Marque" with meeting link
11. Wait until 15 minutes after the appointment ends
12. If/else: Was the appointment completed (attended)?
    - YES branch: Add tag "call-completed", move pipeline to stage "Strategy Call Complete", end
    - NO branch: Add tag "no-show", continue
13. Wait 30 minutes
14. Send email with subject "Missed you on the call — let's reschedule" from "J. Marque" — include reschedule/calendar link
15. Wait 2 days
16. If/else: Does contact still not have tag "call-completed"?
    - YES: Send SMS "Hey {{contact.first_name}}, we missed each other. Still want to chat? Grab a time here:" with calendar link
    - NO: End

This handles the full lifecycle from booking to completion, including no-show follow-up.
```

---

### WORKFLOW 16 of 18: Coaching Enrollment

```
Create a workflow called "MD — Coaching Enrollment".

Trigger: Payment Received for product "FIRE + Real Estate Coaching — 6 Month Program" OR tag "enrolled-group" is added to contact.

Steps in exact order:
1. Add tag "enrolled-group"
2. Add tag "active-student"
3. Move contact in pipeline "Money Decoded Funnel" to stage "Enrolled"
4. Send email with subject "Welcome to the program — here's everything you need" from "J. Marque" — include member portal link, community link, call schedule (Tuesday and Thursday 7PM Eastern), and first week assignment
5. Send internal notification with subject "NEW ENROLLMENT: {{contact.first_name}} — Group Coaching ($5,997)"
6. Create task: "Onboard {{contact.first_name}} — verify portal access and community invite" due in 1 day
7. Wait 180 days (6 months)
8. Remove tag "active-student"
9. Add tag "graduated"
10. Move contact in pipeline "Money Decoded Funnel" to stage "Graduate"
11. Send email with subject "6 months — look how far you've come" from "J. Marque" — graduation email with testimonial request and hint about 1-on-1 premium coaching upgrade

This handles the full coaching lifecycle from enrollment to graduation after 6 months.
```

---

### WORKFLOW 17 of 18: Engagement Tracker (OPTIONAL — build after launch)

```
Create a workflow called "MD — Engagement Tracker".

Trigger: Run on a recurring schedule — daily.

This workflow checks email engagement and applies tags:

Rules:
- If contact opened or clicked any email in the last 7 days: Add tag "engaged-7d"
- If contact has NOT opened or clicked any email in 7+ days: Remove tag "engaged-7d"
- If contact opened or clicked any email in the last 30 days: Add tag "engaged-30d"
- If contact has NOT opened or clicked any email in 30+ days: Remove tag "engaged-30d" and add tag "cold-30"
- If contact has NOT opened or clicked any email in 90+ days: Add tag "cold-90"

This is for monitoring list health. Build this after the funnel is live and generating data.
```

---

### WORKFLOW 18 of 18: UTM Source Tagger (OPTIONAL — build after launch)

```
Create a workflow called "MD — UTM Source Tagger".

Trigger: Form Submitted (any form on the Money Decoded funnel).

Steps:
1. If/else: Does the UTM source parameter contain "tiktok"?
   - YES: Add tag "source-tiktok" and end
2. If/else: Does the UTM source parameter contain "instagram"?
   - YES: Add tag "source-instagram" and end
3. If/else: Does the UTM source parameter contain "gumroad"?
   - YES: Add tag "source-gumroad" and end
4. Fallback: Add tag "source-organic"

This tags contacts by traffic source for attribution reporting. Build after launch.
```

---

## BUILD ORDER

Do them in this order — each one depends on the ones before it:

**Round 1 — Core funnel (do these first):**
1. Workflow 1: Sequence A (Book 1 to Trilogy)
2. Workflow 2: Trilogy Purchase Handler
3. Workflow 3: Questionnaire Router

**Round 2 — Track purchase handlers:**
4. Workflow 4: Deal Machine Purchase Handler
5. Workflow 5: Wealth Shift Purchase Handler
6. Workflow 6: Foundation Purchase Handler

**Round 3 — B sequences (sales nurture):**
7. Workflow 7: Sequence B1 (Push Deal Machine)
8. Workflow 8: Sequence B2 (Push Wealth Shift)
9. Workflow 9: Sequence B3 (Push Foundation)

**Round 4 — C sequences (coaching nurture):**
10. Workflow 10: Sequence C1 (Deal Machine to Coaching)
11. Workflow 11: Sequence C2 (Wealth Shift to Coaching)
12. Workflow 12: Sequence C3 (Foundation to Coaching)

**Round 5 — Application + Call:**
13. Workflow 13: Application Handler
14. Workflow 14: Sequence D (Application to Strategy Call)
15. Workflow 15: Strategy Call Booked
16. Workflow 16: Coaching Enrollment

**Round 6 — Optional (after launch):**
17. Workflow 17: Engagement Tracker
18. Workflow 18: UTM Source Tagger

---

## AFTER ALL WORKFLOWS ARE BUILT

For each workflow that sends an email:
1. Click on the Send Email action
2. Switch to **HTML mode** in the email editor
3. Open the matching HTML file from `ghl-emails/` folder
4. Copy-paste the full HTML content
5. Switch back to visual mode to verify
6. Save

The HTML email files are in the `ghl-emails/` folder organized by sequence (sequence-a, sequence-b1, etc.).
