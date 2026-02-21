# 13-TOUCH COPY TEMPLATES — Paste-Ready for GHL
# PARKED — NOT LIVE
# Instructions: Copy each block directly into GHL templates.
# Replace [bracketed items] with merge fields or actual values.

---

## TOUCH 1 — COLD CALL SCRIPT (Day 1)
**Channel:** Phone (GHL Power Dialer)
**GHL Action:** Task → Call

```
"Hi, is this {{contact.first_name}}?

Great — hey {{contact.first_name}}, my name is [YOUR NAME],
I'm a local real estate investor here in [CITY]. I noticed
your property at {{contact.property_address}} and wanted to
reach out — would you or the family be open to entertaining
an offer on the property?

[IF YES/MAYBE:]
Appreciate that. Can you tell me a little about the current
condition of the property? ... And is there a particular
timeline you're working with? ... Have you had a chance to
think about what you'd like to see for it?

[IF NO:]
Totally understand. If anything ever changes, I'm always
looking in the area. Can I leave you my number? It's [NUMBER].
Have a great day."

[NO ANSWER → Disposition "No Answer" → sequence continues]

QUALIFY WITH 4 PILLARS:
1. CONDITION: "How would you describe the current condition?"
2. TIMELINE: "Is there a timeline you or the family are working with?"
3. MOTIVATION: "What's prompting the decision to consider this?"
4. PRICE: "Have you had a chance to think about what you'd like to see?"
```

---

## TOUCH 2 — SMS #1 (Day 1, after call attempt)
**Channel:** SMS (GHL auto-send)
**Trigger:** 2 hours after Touch 1 task created
**Character count:** 158

```
Hi {{contact.first_name}}, I just tried calling about your property at {{contact.property_address}}. I'm a local investor and may be interested in making an offer. Is this a good number? — [NAME]

Reply STOP to opt out
```

---

## TOUCH 3 — RINGLESS VOICEMAIL #1 (Day 3)
**Channel:** Voicemail Drop (GHL)
**Trigger:** Wait 2 days after Touch 2
**Length:** ~25 seconds

```
"Hey {{contact.first_name}}, this is [NAME], a local real
estate investor here in [CITY]. Calling about your property
over on {{contact.property_address}}. I buy houses in the
area — cash, as-is, quick close. No pressure at all, just
curious if you've ever considered parting with the property.
Give me a ring back at [NUMBER] whenever it's convenient.
Talk soon."
```

---

## TOUCH 4 — EMAIL #1 (Day 5)
**Channel:** Email (GHL auto-send)
**Trigger:** Wait 2 days after Touch 3

```
Subject: Quick question about {{contact.property_address}}

Hi {{contact.first_name}},

My name is [NAME] and I'm a local real estate investor
in [CITY]. I came across your property at
{{contact.property_address}} and wanted to reach out.

I work with homeowners who are looking for a straightforward
way to part with a property — no agents, no repairs, no
hassle. I handle everything.

If you've ever thought about it, even a little, I'd love
to have a quick conversation. No obligation.

You can reach me at [PHONE] or just reply to this email.

Best,
[NAME]
[COMPANY]
[PHONE]

[UNSUBSCRIBE LINK]
[PHYSICAL ADDRESS]
```

---

## TOUCH 5 — COLD CALL #2 (Day 7)
**Channel:** Phone (GHL Power Dialer)
**GHL Action:** Task → Call

```
"Hey {{contact.first_name}}, this is [NAME] — the local
investor. I reached out last week about your property on
{{contact.property_address}}. Just following up to see if
you had any questions or if now's a better time to chat.

I'm still interested and I'm flexible on everything —
timing, terms, whatever works for you and the family.

Give me a call at [NUMBER] if you get a chance."

[IF LIVE — deeper qualifying. Use 4 Pillars.]
[IF VM — leave this as live voicemail, different from RVM.]
```

---

## TOUCH 6 — SMS #2 (Day 10)
**Channel:** SMS (GHL auto-send)
**Trigger:** Wait 3 days after Touch 5
**Character count:** 155

```
Hey {{contact.first_name}}, still interested in your property at {{contact.property_address}}. I have cash buyers looking in your area right now. Open to a no-obligation offer? — [NAME]

Reply STOP to opt out
```

---

## TOUCH 7 — DIRECT MAIL #1 / POSTCARD (Day 14)
**Channel:** Physical Mail (Ballpoint Marketing)
**GHL Action:** Task → "Upload to Ballpoint batch"

```
FRONT:
"I'd Like to Make You an Offer on {{contact.property_address}}"

BACK:
Dear {{contact.first_name}},

I'm a local investor interested in your property at
{{contact.property_address}}. I work directly with
homeowners — no agents, no fees, no repairs needed.

✓ Cash offer within 24 hours
✓ Close in as little as 14 days
✓ You choose the timeline

If you've thought about parting with the property,
I'd love to have a conversation.

Call or text: [PHONE]
[NAME] | [COMPANY]
```

---

## TOUCH 8 — RINGLESS VOICEMAIL #2 (Day 17)
**Channel:** Voicemail Drop (GHL)
**Trigger:** Wait 3 days after Touch 7 task
**Length:** ~25 seconds

```
"Hey {{contact.first_name}}, [NAME] again. Quick update —
I just closed on a property not far from yours. Still
actively looking in the area. If parting with the property
has crossed your mind at all, even just to know what it
might be worth, give me a shout. [NUMBER]. No pressure,
no obligation. Talk soon."
```

---

## TOUCH 9 — EMAIL #2 (Day 21)
**Channel:** Email (GHL auto-send)
**Trigger:** Wait 4 days after Touch 8

```
Subject: Just closed nearby — still looking

Hi {{contact.first_name}},

Quick update — I recently helped a homeowner in your area
sell their property in 12 days. No repairs, no agents,
no stress.

I'm still interested in your property at
{{contact.property_address}}. If you'd like to know what
I could offer, it's a 5-minute conversation.

No obligation. No pressure. Just a straightforward offer
if the timing is right.

Reach me anytime: [PHONE]

Best,
[NAME]
[COMPANY]
[PHONE]

[UNSUBSCRIBE LINK]
[PHYSICAL ADDRESS]
```

---

## TOUCH 10 — COLD CALL #3 (Day 25)
**Channel:** Phone (GHL Power Dialer)
**GHL Action:** Task → Call

```
"Hey {{contact.first_name}}, [NAME] one more time. I know
I've reached out a few times and I don't want to be a
bother — but I am genuinely interested in your property
at {{contact.property_address}}.

If there's ever a time you'd want to have a conversation,
even just to explore the idea, I'm here. Totally on your
terms.

My number is [NUMBER]. Hope you and the family are well."

[IF LIVE — go direct. Offer to come see the property.
Ask: "Would it help if I came by and gave you a number
in person? No obligation, just so you have it."]
```

---

## TOUCH 11 — SMS #3 / BREAKUP TEXT (Day 30)
**Channel:** SMS (GHL auto-send)
**Trigger:** Wait 5 days after Touch 10
**Character count:** 160

```
Hey {{contact.first_name}}, I've been trying to connect about {{contact.property_address}}. Don't want to keep bothering you. If you ever want a no-hassle cash offer, I'm a text away. — [NAME]

Reply STOP to opt out
```

---

## TOUCH 12 — DIRECT MAIL #2 / YELLOW LETTER (Day 40)
**Channel:** Physical Mail — Handwritten style (Ballpoint Marketing)
**GHL Action:** Task → "Upload to Ballpoint batch — yellow letter"

```
[Handwritten font on yellow lined paper]

Dear {{contact.first_name}},

I hope this finds you well. I've been trying to reach
you about your property at {{contact.property_address}}.

I'm not a big corporation — I'm a local investor who
works directly with homeowners. No agents, no fees,
no repairs needed.

If life has thrown you a curveball — whether it's a
move, a family situation, finances, or you're just
ready for a fresh start — I'd love to help.

Call or text me anytime: [PHONE]

Sincerely,
[NAME]
[handwritten signature]
```

---

## TOUCH 13 — EMAIL #3 / FINAL (Day 55)
**Channel:** Email (GHL auto-send)
**Trigger:** Wait 15 days after Touch 12 task

```
Subject: Last note from me (for now)

Hi {{contact.first_name}},

I'll stop reaching out for now — I know life gets busy
and the timing may not be right.

But I want you to know my interest in your property at
{{contact.property_address}} still stands. Whenever
you're ready — whether that's next week or next year —
I'm here.

No judgment. No pressure. Just a straightforward cash
offer when the timing works for you and the family.

Save my number: [PHONE]

All the best,
[NAME]
[COMPANY]
[PHONE]

[UNSUBSCRIBE LINK]
[PHYSICAL ADDRESS]
```

---

## POST-SEQUENCE: MONTHLY NURTURE (Day 56+)

### Nurture SMS (Month 1, 3, 5...)
```
Hey {{contact.first_name}}, just checking in on {{contact.property_address}}. Still interested if you ever want to chat. No pressure. — [NAME]

Reply STOP to opt out
```

### Nurture RVM (Month 2, 6, 10...)
```
"Hey {{contact.first_name}}, [NAME] here. Just a quick
check-in — still buying in your area. If anything has
changed with your property on {{contact.property_address}},
I'd love to chat. [NUMBER]. Take care."
```

### Nurture Email (Month 4, 8, 12...)
```
Subject: Still buying in your area

Hi {{contact.first_name}},

Hope you're doing well. Just a quick note — I'm still
actively buying properties in your area.

If anything has changed with {{contact.property_address}}
and you'd like to explore your options, I'm a phone
call away.

[PHONE]

Best,
[NAME]

[UNSUBSCRIBE LINK]
[PHYSICAL ADDRESS]
```

### Nurture Postcard (Month 3, 9...)
```
"Still Buying in Your Area!"

{{contact.first_name}}, if you've thought about parting
with {{contact.property_address}}, I'm still interested.

Cash | As-Is | Your Timeline

[PHONE] | [NAME] | [COMPANY]
```

---

## STUDENT ONBOARDING EMAILS (Post-Purchase Sequence)

### Welcome Email (Immediate)
```
Subject: You're in. Here's your access.

Welcome to Pipeline Mastery.

Your course is ready: [LOGIN LINK]
Your GHL Snapshot: [SNAPSHOT IMPORT LINK]

Start here:
1. Log in to your course portal
2. Watch Module 1 (15 min overview)
3. Import your GHL Snapshot (5 min — one click)
4. You're operational

Questions? support@pipelinemastery.com

— Pipeline Mastery
```

### Day 1 Email
```
Subject: Day 1 — Import your system

Your first move: import the GHL Snapshot.

Click this link: [SNAPSHOT LINK]
It imports your entire CRM, pipeline, automations,
scripts, and templates in under 5 minutes.

Then watch Module 4 (GHL Tour) for a full walkthrough
of what just loaded into your account.

— Pipeline Mastery
```

### Day 3 Email
```
Subject: Day 3 — Your data engine

Time to set up PropStream — this is where your leads
come from.

Watch Module 2, then sign up here: [PROPSTREAM AFFILIATE LINK]

By the end of today, you'll have your first list of
motivated sellers pulled and ready to skip trace.

— Pipeline Mastery
```

### Day 6 Email
```
Subject: Day 6 — Your 13-touch system is live

If you imported the Snapshot, your 13-touch follow-up
system is already built. Watch Module 5 for the full
breakdown of how each automation fires.

Import your first batch of leads into GHL and the
system takes over.

— Pipeline Mastery
```

### Day 10 Email
```
Subject: The words that close deals

Module 6 is the one that changes everything.

Seller psychology isn't about tricks — it's about
making people feel safe enough to make a decision.

Watch Module 6 now. Then download the Seller Psychology
PDF from your course portal.

— Pipeline Mastery
```

### Day 15 Email
```
Subject: Time to make your first offer

You've got leads. You've got scripts. You've got the
system running.

Watch Module 7 — Making Offers & Closing. Use the
templates. Follow the scripts. Make the call.

Your first deal is closer than you think.

— Pipeline Mastery
```

### Day 20 Email
```
Subject: Are you tracking your numbers?

Module 8 — Scaling & KPIs.

If you're not measuring, you're guessing. Open your
KPI dashboard (it's in your Snapshot) and start
tracking: dials, contacts, qualified, offers, contracts.

The numbers tell you exactly what to fix.

— Pipeline Mastery
```

### Day 25 Email
```
Subject: When to hire your first VA

You're 25 days in. If you're making 50+ dials/day
yourself, it's time to think about leverage.

Module 8 covers VA hiring — where to find them,
what to pay, how to train them on your system.

Your GHL Snapshot means they can start producing
on day one.

— Pipeline Mastery
```

### Day 30 Email
```
Subject: 30 days in — how's it going?

You've had the system for a full month.

Quick survey (2 min): [SURVEY LINK]

Your feedback makes the system better for everyone.

If you need help, reply to this email or check
Module 9 (Troubleshooting) in your course portal.

— Pipeline Mastery
```

---

# MERGE FIELD REFERENCE (GHL)
| Placeholder | GHL Merge Field |
|------------|----------------|
| First name | {{contact.first_name}} |
| Last name | {{contact.last_name}} |
| Property address | {{contact.property_address}} (custom field) |
| Phone | {{contact.phone}} |
| Email | {{contact.email}} |

# STATUS: PARKED — NOT LIVE
# All copy is DRAFT. Not loaded into any system.
