// All 18 GHL Workflow Definitions for Money Decoded 3-Track Funnel
// Each workflow is defined as structured data that the builder converts to UI clicks

const WORKFLOWS = [
  // ===== WORKFLOW 1: Sequence A — Book 1 to Trilogy =====
  {
    id: 1,
    name: 'MD — Sequence A: Book 1 to Trilogy',
    status: 'BUILT',
    trigger: { type: 'form_submitted', form: 'Money Decoded Opt-In' },
    goal: { type: 'product_purchased', product: 'Money Decoded Trilogy — All 3 Books', action: 'end_workflow' },
    steps: [
      // Setup tags + pipeline + membership
      { type: 'add_tag', tag: 'lead' },
      { type: 'add_tag', tag: 'in-sequence-a' },
      { type: 'add_tag', tag: 'book1-downloaded' },
      { type: 'update_pipeline', pipeline: 'Money Decoded Funnel', stage: 'Book1 Lead' },
      { type: 'grant_membership', membership: 'Money Decoded', level: 'Free Tier' },
      // Email 1 — Day 0 (immediate)
      { type: 'send_email', name: 'Seq A — Email 1', subject: 'You just took the red pill on money', preview: 'Welcome to the other side.' },
      // Email 2 — Day 1
      { type: 'wait', duration: 1, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'buyer', yes_action: 'end' },
      { type: 'send_email', name: 'Seq A — Email 2', subject: 'What happened on August 15, 1971', preview: 'One Sunday night changed everything.' },
      // Email 3 — Day 2
      { type: 'wait', duration: 1, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'buyer', yes_action: 'end' },
      { type: 'send_email', name: 'Seq A — Email 3', subject: 'The $847/year lie your bank is telling you', preview: 'Your savings account is costing you money.' },
      // Email 4 — Day 4 (first pitch)
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'buyer', yes_action: 'end' },
      { type: 'send_email', name: 'Seq A — Email 4', subject: 'BlackRock just bet $4.7 billion on this', preview: 'When the biggest fund on earth moves, pay attention.' },
      // Email 5 — Day 5 (social proof)
      { type: 'wait', duration: 1, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'buyer', yes_action: 'end' },
      { type: 'send_email', name: 'Seq A — Email 5', subject: '"I read all 3 in one weekend" — Marcus, Atlanta', preview: 'His exact words after finishing Book 3.' },
      // Email 6 — Day 7 (urgency close)
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'buyer', yes_action: 'end' },
      { type: 'send_email', name: 'Seq A — Email 6', subject: 'Last chance at $7 — price going up', preview: 'This is my last email about this.' },
      // Sequence complete — cleanup
      { type: 'remove_tag', tag: 'in-sequence-a' },
      { type: 'add_tag', tag: 'completed-sequence-a' },
    ]
  },

  // ===== WORKFLOW 2: Trilogy Purchase Handler =====
  {
    id: 2,
    name: 'MD — Trilogy Purchase Handler',
    status: 'BUILT',
    trigger: { type: 'order_submitted', product: 'Money Decoded Trilogy — All 3 Books' },
    steps: [
      { type: 'add_tag', tag: 'buyer' },
      { type: 'add_tag', tag: 'trilogy-purchased' },
      { type: 'remove_tag', tag: 'in-sequence-a' },
      { type: 'remove_from_workflow', workflow: 'MD — Sequence A: Book 1 to Trilogy' },
      { type: 'update_pipeline', pipeline: 'Money Decoded Funnel', stage: 'Trilogy Buyer' },
      { type: 'grant_membership', membership: 'Money Decoded', level: 'Trilogy' },
      { type: 'send_email', name: 'Trilogy Purchase Confirmation', subject: 'Smart move — your trilogy is ready', preview: 'Download links for all 3 books inside.' },
    ]
  },

  // ===== WORKFLOW 3: Questionnaire Router =====
  {
    id: 3,
    name: 'MD — Questionnaire Router',
    status: 'BUILT',
    trigger: { type: 'form_submitted', form: 'Track Selection Questionnaire' },
    steps: [
      { type: 'update_pipeline', pipeline: 'Money Decoded Funnel', stage: 'Track Selected' },
      // Branch 1: Active Investor
      { type: 'if_else', condition: 'custom_field', field: 'investor_track', value: 'active', yes_steps: [
        { type: 'add_tag', tag: 'track-active' },
        { type: 'wait', duration: 1, unit: 'hours' },
        { type: 'if_else', condition: 'has_tag', tag: 'deal-machine-buyer', yes_action: 'end', no_steps: [
          { type: 'enroll_in_workflow', workflow: 'MD — Sequence B1: Push Deal Machine' },
        ]},
      ]},
      // Branch 2: Passive Investor
      { type: 'if_else', condition: 'custom_field', field: 'investor_track', value: 'passive', yes_steps: [
        { type: 'add_tag', tag: 'track-passive' },
        { type: 'wait', duration: 1, unit: 'hours' },
        { type: 'if_else', condition: 'has_tag', tag: 'wealth-shift-buyer', yes_action: 'end', no_steps: [
          { type: 'enroll_in_workflow', workflow: 'MD — Sequence B2: Push Wealth Shift' },
        ]},
      ]},
      // Branch 3: Foundation (also default/fallback)
      { type: 'if_else', condition: 'custom_field', field: 'investor_track', value: 'foundation', yes_steps: [
        { type: 'add_tag', tag: 'track-foundation' },
        { type: 'wait', duration: 1, unit: 'hours' },
        { type: 'if_else', condition: 'has_tag', tag: 'foundation-buyer', yes_action: 'end', no_steps: [
          { type: 'enroll_in_workflow', workflow: 'MD — Sequence B3: Push Foundation' },
        ]},
      ], no_steps: [
        // Fallback: default to foundation track
        { type: 'add_tag', tag: 'track-foundation' },
        { type: 'wait', duration: 1, unit: 'hours' },
        { type: 'if_else', condition: 'has_tag', tag: 'foundation-buyer', yes_action: 'end', no_steps: [
          { type: 'enroll_in_workflow', workflow: 'MD — Sequence B3: Push Foundation' },
        ]},
      ]},
    ]
  },

  // ===== WORKFLOW 4: Deal Machine Purchase Handler =====
  {
    id: 4,
    name: 'MD — Deal Machine Purchase Handler',
    status: 'TODO',
    trigger: { type: 'order_submitted', product: 'The Deal Machine — Active Investor\'s Playbook' },
    steps: [
      { type: 'add_tag', tag: 'deal-machine-buyer' },
      { type: 'remove_tag', tag: 'in-sequence-b1' },
      { type: 'remove_from_workflow', workflow: 'MD — Sequence B1: Push Deal Machine' },
      { type: 'update_pipeline', pipeline: 'Money Decoded Funnel', stage: 'Track Product Buyer' },
      { type: 'grant_membership', membership: 'Money Decoded', level: 'Track 1: Deal Machine' },
      { type: 'send_email', name: 'DM Purchase Confirmation', subject: 'Your Deal Machine is ready — let\'s find your first deal' },
      { type: 'enroll_in_workflow', workflow: 'MD — Sequence C1: Deal Machine to Coaching' },
    ]
  },

  // ===== WORKFLOW 5: Wealth Shift Purchase Handler =====
  {
    id: 5,
    name: 'MD — Wealth Shift Purchase Handler',
    status: 'TODO',
    trigger: { type: 'order_submitted', product: 'The Wealth Shift — Reposition Your Money' },
    steps: [
      { type: 'add_tag', tag: 'wealth-shift-buyer' },
      { type: 'remove_tag', tag: 'in-sequence-b2' },
      { type: 'remove_from_workflow', workflow: 'MD — Sequence B2: Push Wealth Shift' },
      { type: 'update_pipeline', pipeline: 'Money Decoded Funnel', stage: 'Track Product Buyer' },
      { type: 'grant_membership', membership: 'Money Decoded', level: 'Track 2: Wealth Shift' },
      { type: 'send_email', name: 'WS Purchase Confirmation', subject: 'Your Wealth Shift guide is ready — let\'s reposition your money' },
      { type: 'enroll_in_workflow', workflow: 'MD — Sequence C2: Wealth Shift to Coaching' },
    ]
  },

  // ===== WORKFLOW 6: Foundation Purchase Handler =====
  {
    id: 6,
    name: 'MD — Foundation Purchase Handler',
    status: 'TODO',
    trigger: { type: 'order_submitted', product: 'The Foundation — Financial Blueprint' },
    steps: [
      { type: 'add_tag', tag: 'foundation-buyer' },
      { type: 'remove_tag', tag: 'in-sequence-b3' },
      { type: 'remove_from_workflow', workflow: 'MD — Sequence B3: Push Foundation' },
      { type: 'update_pipeline', pipeline: 'Money Decoded Funnel', stage: 'Track Product Buyer' },
      { type: 'grant_membership', membership: 'Money Decoded', level: 'Track 3: Foundation' },
      { type: 'send_email', name: 'FD Purchase Confirmation', subject: 'Your Foundation blueprint is ready — let\'s build' },
      { type: 'enroll_in_workflow', workflow: 'MD — Sequence C3: Foundation to Coaching' },
    ]
  },

  // ===== WORKFLOW 7: Sequence B1 — Push Deal Machine =====
  {
    id: 7,
    name: 'MD — Sequence B1: Push Deal Machine',
    status: 'TODO',
    trigger: { type: 'contact_tag', tag: 'track-active', action: 'added' },
    steps: [
      { type: 'add_tag', tag: 'in-sequence-b1' },
      { type: 'send_email', name: 'B1-E1 Active Track', subject: 'You picked the active track — here\'s what that means' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'deal-machine-buyer', yes_action: 'end' },
      { type: 'send_email', name: 'B1-E2 Gap', subject: 'The gap between knowing and doing' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'deal-machine-buyer', yes_action: 'end' },
      { type: 'send_email', name: 'B1-E3 Deal Machine', subject: 'Inside The Deal Machine — what you get' },
      { type: 'wait', duration: 3, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'deal-machine-buyer', yes_action: 'end' },
      { type: 'send_email', name: 'B1-E4 Soft Close', subject: 'One more thing before I stop talking about this' },
      { type: 'remove_tag', tag: 'in-sequence-b1' },
    ]
  },

  // ===== WORKFLOW 8: Sequence B2 — Push Wealth Shift =====
  {
    id: 8,
    name: 'MD — Sequence B2: Push Wealth Shift',
    status: 'TODO',
    trigger: { type: 'contact_tag', tag: 'track-passive', action: 'added' },
    steps: [
      { type: 'add_tag', tag: 'in-sequence-b2' },
      { type: 'send_email', name: 'B2-E1 Passive Track', subject: 'You chose the passive path — smart' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'wealth-shift-buyer', yes_action: 'end' },
      { type: 'send_email', name: 'B2-E2 Fee Problem', subject: 'The fee problem nobody talks about' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'wealth-shift-buyer', yes_action: 'end' },
      { type: 'send_email', name: 'B2-E3 Wealth Shift', subject: 'What The Wealth Shift actually teaches' },
      { type: 'wait', duration: 3, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'wealth-shift-buyer', yes_action: 'end' },
      { type: 'send_email', name: 'B2-E4 Cost of Waiting', subject: 'The cost of waiting one more year' },
      { type: 'remove_tag', tag: 'in-sequence-b2' },
    ]
  },

  // ===== WORKFLOW 9: Sequence B3 — Push Foundation =====
  {
    id: 9,
    name: 'MD — Sequence B3: Push Foundation',
    status: 'TODO',
    trigger: { type: 'contact_tag', tag: 'track-foundation', action: 'added' },
    steps: [
      { type: 'add_tag', tag: 'in-sequence-b3' },
      { type: 'send_email', name: 'B3-E1 Foundation Track', subject: 'You chose The Foundation — respect' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'foundation-buyer', yes_action: 'end' },
      { type: 'send_email', name: 'B3-E2 Eyes Open', subject: 'What happens when your eyes open' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'foundation-buyer', yes_action: 'end' },
      { type: 'send_email', name: 'B3-E3 Foundation', subject: 'Inside The Foundation — what you get' },
      { type: 'wait', duration: 3, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'foundation-buyer', yes_action: 'end' },
      { type: 'send_email', name: 'B3-E4 No Shame', subject: 'No shame in starting over' },
      { type: 'remove_tag', tag: 'in-sequence-b3' },
    ]
  },

  // ===== WORKFLOW 10: Sequence C1 — Deal Machine to Coaching =====
  {
    id: 10,
    name: 'MD — Sequence C1: Deal Machine to Coaching',
    status: 'TODO',
    trigger: { type: 'contact_tag', tag: 'deal-machine-buyer', action: 'added' },
    steps: [
      { type: 'add_tag', tag: 'in-sequence-c1' },
      { type: 'send_email', name: 'C1-E1 Deal Track Welcome', subject: 'Welcome to the deal-making track' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C1-E2 Down Markets', subject: 'Why down markets are where fortunes are made' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C1-E3 Origin Story', subject: 'My first deal almost destroyed me' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C1-E4 David', subject: 'Meet David — $6,800/mo from 4 properties' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C1-E5 Keisha', subject: 'Keisha made $8,500 on her first wholesale deal' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C1-E6 Mistakes', subject: '3 mistakes that kill most new investors' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C1-E7 Coaching Pitch', subject: 'Applications are open — 15 spots' },
      { type: 'wait', duration: 3, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C1-E8 FAQ', subject: '8 spots left — your questions answered' },
      { type: 'wait', duration: 3, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C1-E9 Close', subject: 'Closing Friday — this is my last email about this' },
      { type: 'remove_tag', tag: 'in-sequence-c1' },
    ]
  },

  // ===== WORKFLOW 11: Sequence C2 — Wealth Shift to Coaching =====
  {
    id: 11,
    name: 'MD — Sequence C2: Wealth Shift to Coaching',
    status: 'TODO',
    trigger: { type: 'contact_tag', tag: 'wealth-shift-buyer', action: 'added' },
    steps: [
      { type: 'add_tag', tag: 'in-sequence-c2' },
      { type: 'send_email', name: 'C2-E1 Wealth Shift Welcome', subject: 'Welcome — let\'s reposition your wealth' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C2-E2 Advisor Secret', subject: 'What your advisor won\'t tell you' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C2-E3 250M Lesson', subject: 'The $250M lesson' },
      { type: 'wait', duration: 3, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C2-E4 David Story', subject: 'David repositioned $80K — here\'s what happened' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C2-E5 Fear', subject: 'The $500K fear that keeps people stuck' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C2-E6 Wealth Mistakes', subject: '3 wealth-building mistakes' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C2-E7 Coaching Pitch', subject: 'Applications are open — 15 spots' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C2-E8 FAQ', subject: 'Spots remaining — your questions answered' },
      { type: 'wait', duration: 3, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C2-E9 Close', subject: 'Final note on coaching' },
      { type: 'remove_tag', tag: 'in-sequence-c2' },
    ]
  },

  // ===== WORKFLOW 12: Sequence C3 — Foundation to Coaching =====
  {
    id: 12,
    name: 'MD — Sequence C3: Foundation to Coaching',
    status: 'TODO',
    trigger: { type: 'contact_tag', tag: 'foundation-buyer', action: 'added' },
    steps: [
      { type: 'add_tag', tag: 'in-sequence-c3' },
      { type: 'send_email', name: 'C3-E1 Foundation Welcome', subject: 'Welcome to The Foundation' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C3-E2 Started With Less', subject: 'I started with less than you think' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C3-E3 Keisha 680', subject: 'The $680/month Keisha didn\'t know she was wasting' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C3-E4 Keisha Properties', subject: 'Keisha now owns 3 properties' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C3-E5 Not Late', subject: 'You\'re not starting late — you\'re starting right' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C3-E6 Four Mistakes', subject: '4 mistakes beginners make' },
      { type: 'wait', duration: 2, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C3-E7 Coaching Pitch', subject: 'Applications are open — 15 spots' },
      { type: 'wait', duration: 3, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C3-E8 Spots Left', subject: '8 spots left — your questions answered' },
      { type: 'wait', duration: 3, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'applicant', yes_action: 'end' },
      { type: 'send_email', name: 'C3-E9 Last Email', subject: 'Last email about this' },
      { type: 'remove_tag', tag: 'in-sequence-c3' },
    ]
  },

  // ===== WORKFLOW 13: Application Handler =====
  {
    id: 13,
    name: 'MD — Application Handler',
    status: 'TODO',
    trigger: { type: 'form_submitted', form: 'Coaching Application' },
    steps: [
      { type: 'add_tag', tag: 'applicant' },
      { type: 'remove_tag', tag: 'in-sequence-c1' },
      { type: 'remove_tag', tag: 'in-sequence-c2' },
      { type: 'remove_tag', tag: 'in-sequence-c3' },
      { type: 'remove_from_workflow', workflow: 'MD — Sequence C1: Deal Machine to Coaching' },
      { type: 'remove_from_workflow', workflow: 'MD — Sequence C2: Wealth Shift to Coaching' },
      { type: 'remove_from_workflow', workflow: 'MD — Sequence C3: Foundation to Coaching' },
      { type: 'update_pipeline', pipeline: 'Money Decoded Funnel', stage: 'Coaching Applicant' },
      { type: 'internal_notification', subject: 'NEW COACHING APPLICATION: {{contact.first_name}} {{contact.last_name}}' },
      { type: 'enroll_in_workflow', workflow: 'MD — Sequence D: Application to Strategy Call' },
    ]
  },

  // ===== WORKFLOW 14: Sequence D — Application to Strategy Call =====
  {
    id: 14,
    name: 'MD — Sequence D: Application to Strategy Call',
    status: 'TODO',
    trigger: { type: 'contact_tag', tag: 'applicant', action: 'added' },
    steps: [
      { type: 'add_tag', tag: 'in-sequence-d' },
      { type: 'send_email', name: 'D-E1 Application Received', subject: 'Application received — here\'s what happens next' },
      { type: 'wait', duration: 1, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'booked-call', yes_action: 'end' },
      { type: 'send_email', name: 'D-E2 What to Expect', subject: 'What to expect on your strategy call' },
      { type: 'wait', duration: 1, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'booked-call', yes_action: 'end' },
      { type: 'send_email', name: 'D-E3 Why 15', subject: 'Why only 15 spots' },
      { type: 'wait', duration: 1, unit: 'days' },
      { type: 'if_else', condition: 'has_tag', tag: 'booked-call', yes_action: 'end' },
      { type: 'send_email', name: 'D-E4 Book Call', subject: 'Quick question' },
      { type: 'remove_tag', tag: 'in-sequence-d' },
    ]
  },

  // ===== WORKFLOW 15: Strategy Call Booked =====
  {
    id: 15,
    name: 'MD — Strategy Call Booked',
    status: 'TODO',
    trigger: { type: 'appointment_scheduled', calendar: 'Strategy Call' },
    steps: [
      { type: 'add_tag', tag: 'booked-call' },
      { type: 'remove_tag', tag: 'in-sequence-d' },
      { type: 'remove_from_workflow', workflow: 'MD — Sequence D: Application to Strategy Call' },
      { type: 'update_pipeline', pipeline: 'Money Decoded Funnel', stage: 'Strategy Call' },
      { type: 'send_email', name: 'Call Confirmation', subject: 'Strategy call confirmed — prep checklist inside' },
      { type: 'internal_notification', subject: 'STRATEGY CALL BOOKED: {{contact.first_name}} {{contact.last_name}}' },
    ]
  },

  // ===== WORKFLOW 16: Coaching Enrollment =====
  {
    id: 16,
    name: 'MD — Coaching Enrollment',
    status: 'TODO',
    trigger: { type: 'contact_tag', tag: 'enrolled-group', action: 'added' },
    steps: [
      { type: 'add_tag', tag: 'active-student' },
      { type: 'update_pipeline', pipeline: 'Money Decoded Funnel', stage: 'Enrolled' },
      { type: 'grant_membership', membership: 'Money Decoded', level: 'Coaching' },
      { type: 'grant_community_access', community: 'FIRE Coaching Community' },
      { type: 'send_email', name: 'Coaching Welcome', subject: 'Welcome to coaching — here\'s everything you need' },
      { type: 'internal_notification', subject: 'NEW ENROLLMENT: {{contact.first_name}} — Group Coaching ($5,997)' },
    ]
  },

  // ===== WORKFLOW 17: Engagement Tracker (build later) =====
  {
    id: 17,
    name: 'MD — Engagement Tracker',
    status: 'DEFER',
    trigger: { type: 'scheduled', interval: 'daily' },
    steps: []
  },

  // ===== WORKFLOW 18: UTM Source Tagger (build later) =====
  {
    id: 18,
    name: 'MD — UTM Source Tagger',
    status: 'DEFER',
    trigger: { type: 'form_submitted', form: 'any' },
    steps: []
  },
];

module.exports = { WORKFLOWS };
