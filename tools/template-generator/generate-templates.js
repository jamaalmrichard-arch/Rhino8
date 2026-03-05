// Money Decoded — Template/Worksheet Generator
// Creates professional Excel files for all 3 tracks
// Uses exceljs with J. Marque branding (gold/black theme)

const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

// Brand colors
const GOLD = 'FFB8860B';
const DARK_GOLD = 'FF8B6914';
const BLACK = 'FF1A1A1A';
const WHITE = 'FFFFFFFF';
const LIGHT_BG = 'FFFAF8F2';
const GRAY = 'FF666666';
const LIGHT_GRAY = 'FFE0E0E0';

// Common style helpers
function headerStyle(ws, row, cols) {
  for (let c = 1; c <= cols; c++) {
    const cell = ws.getRow(row).getCell(c);
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GOLD } };
    cell.font = { bold: true, color: { argb: WHITE }, size: 11 };
    cell.alignment = { horizontal: 'center', vertical: 'middle' };
    cell.border = {
      bottom: { style: 'thin', color: { argb: DARK_GOLD } },
    };
  }
  ws.getRow(row).height = 25;
}

function titleRow(ws, row, text, cols) {
  ws.mergeCells(row, 1, row, cols);
  const cell = ws.getRow(row).getCell(1);
  cell.value = text;
  cell.font = { bold: true, size: 14, color: { argb: BLACK } };
  cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: LIGHT_BG } };
  cell.alignment = { horizontal: 'center', vertical: 'middle' };
  ws.getRow(row).height = 30;
}

function subtitleRow(ws, row, text, cols) {
  ws.mergeCells(row, 1, row, cols);
  const cell = ws.getRow(row).getCell(1);
  cell.value = text;
  cell.font = { italic: true, size: 10, color: { argb: GRAY } };
  cell.alignment = { horizontal: 'center' };
}

function sectionHeader(ws, row, text, cols) {
  ws.mergeCells(row, 1, row, cols);
  const cell = ws.getRow(row).getCell(1);
  cell.value = text;
  cell.font = { bold: true, size: 12, color: { argb: GOLD } };
  cell.border = { bottom: { style: 'medium', color: { argb: GOLD } } };
  ws.getRow(row).height = 25;
}

function altRowFill(ws, row) {
  if (row % 2 === 0) {
    ws.getRow(row).eachCell(cell => {
      if (!cell.fill || cell.fill.fgColor?.argb !== GOLD) {
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: LIGHT_BG } };
      }
    });
  }
}

function brandFooter(ws, row, cols) {
  ws.mergeCells(row, 1, row, cols);
  const cell = ws.getRow(row).getCell(1);
  cell.value = 'Money Decoded by J. Marque | moneydecodedbooks.com';
  cell.font = { italic: true, size: 8, color: { argb: GRAY } };
  cell.alignment = { horizontal: 'center' };
}

async function saveWorkbook(wb, filepath) {
  const dir = path.dirname(filepath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  await wb.xlsx.writeFile(filepath);
  const stats = fs.statSync(filepath);
  console.log(`  ✅ ${path.basename(filepath)} (${(stats.size / 1024).toFixed(0)} KB)`);
}

// ============================================================
// DEAL MACHINE TEMPLATES (12)
// ============================================================

async function createWholesaleDealAnalyzer(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Deal Analyzer');
  ws.columns = [
    { width: 30 }, { width: 18 }, { width: 18 }, { width: 18 }, { width: 18 },
  ];
  titleRow(ws, 1, 'WHOLESALE DEAL ANALYZER', 5);
  subtitleRow(ws, 2, 'The Deal Machine by J. Marque — Module 2', 5);

  sectionHeader(ws, 4, 'PROPERTY INFORMATION', 5);
  ws.getRow(5).values = ['Field', 'Value', '', '', ''];
  headerStyle(ws, 5, 2);
  const fields = [
    'Property Address', 'City, State, ZIP', 'Bedrooms / Bathrooms',
    'Square Footage', 'Year Built', 'Property Type', 'Seller Name', 'Seller Phone',
  ];
  fields.forEach((f, i) => { ws.getRow(6 + i).values = [f, '']; altRowFill(ws, 6 + i); });

  sectionHeader(ws, 15, 'DEAL NUMBERS', 5);
  ws.getRow(16).values = ['Metric', 'Amount', 'Formula', '', ''];
  headerStyle(ws, 16, 3);
  const nums = [
    ['After Repair Value (ARV)', '', 'Market comps analysis'],
    ['Repair Estimate', '', 'Contractor bids / $per sqft'],
    ['MAO (70% Rule)', { formula: 'B17*0.7-B18' }, '= ARV × 70% - Repairs'],
    ['Your Offer Price', '', 'At or below MAO'],
    ['Assignment Fee', '', 'Typically $5K-$15K'],
    ['Buyer Purchase Price', { formula: 'B20+B21' }, '= Offer + Assignment Fee'],
    ['Buyer Profit After Rehab', { formula: 'B17-B22-B18' }, '= ARV - Buyer Price - Repairs'],
    ['Your ROI', { formula: 'IF(B20>0,B21/B20*100,0)' }, '= Fee / Investment × 100'],
  ];
  nums.forEach((n, i) => { ws.getRow(17 + i).values = [n[0], n[1], n[2]]; altRowFill(ws, 17 + i); });

  sectionHeader(ws, 26, 'DEAL DECISION', 5);
  ws.getRow(27).values = ['Is MAO >= Offer Price?', { formula: 'IF(B19>=B20,"YES - PROCEED","NO - RENEGOTIATE")' }];
  ws.getRow(27).getCell(2).font = { bold: true, size: 12 };

  brandFooter(ws, 30, 5);
  await saveWorkbook(wb, path.join(outDir, '01-wholesale-deal-analyzer.xlsx'));
}

async function createBRRRRCalculator(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('BRRRR Calculator');
  ws.columns = [{ width: 32 }, { width: 18 }, { width: 22 }, { width: 18 }];
  titleRow(ws, 1, 'BRRRR CALCULATOR', 4);
  subtitleRow(ws, 2, 'Buy-Rehab-Rent-Refinance-Repeat — Module 3', 4);

  sectionHeader(ws, 4, 'ACQUISITION', 4);
  ws.getRow(5).values = ['Item', 'Amount', 'Notes', ''];
  headerStyle(ws, 5, 3);
  const acq = [
    ['Purchase Price', '', ''], ['Closing Costs', '', '~2-3% of purchase'],
    ['Rehab Budget', '', 'Contractor SOW total'], ['Total Investment', { formula: 'B6+B7+B8' }, 'All cash in'],
  ];
  acq.forEach((r, i) => { ws.getRow(6 + i).values = r; altRowFill(ws, 6 + i); });

  sectionHeader(ws, 11, 'RENT', 4);
  ws.getRow(12).values = ['Item', 'Monthly', 'Annual', ''];
  headerStyle(ws, 12, 3);
  const rent = [
    ['Gross Rent', '', { formula: 'B13*12' }],
    ['Vacancy (8%)', { formula: 'B13*0.08' }, { formula: 'B14*12' }],
    ['Property Management (10%)', { formula: 'B13*0.1' }, { formula: 'B15*12' }],
    ['Maintenance (5%)', { formula: 'B13*0.05' }, { formula: 'B16*12' }],
    ['Insurance', '', { formula: 'B17*12' }],
    ['Property Taxes', '', { formula: 'B18*12' }],
    ['Net Operating Income', { formula: 'B13-B14-B15-B16-B17-B18' }, { formula: 'B19*12' }],
  ];
  rent.forEach((r, i) => { ws.getRow(13 + i).values = r; altRowFill(ws, 13 + i); });

  sectionHeader(ws, 21, 'REFINANCE', 4);
  ws.getRow(22).values = ['Item', 'Amount', 'Notes', ''];
  headerStyle(ws, 22, 3);
  const refi = [
    ['After Repair Value (ARV)', '', 'Appraised value post-rehab'],
    ['Loan Amount (75% LTV)', { formula: 'B23*0.75' }, '75% cash-out refi'],
    ['Cash Returned to You', { formula: 'B24-B9' }, 'Refi loan - Total investment'],
    ['Cash Left in Deal', { formula: 'IF(B25>0,0,ABS(B25))' }, 'Goal: $0 or less'],
    ['Monthly Mortgage Payment', '', 'P&I on refi loan'],
  ];
  refi.forEach((r, i) => { ws.getRow(23 + i).values = r; altRowFill(ws, 23 + i); });

  sectionHeader(ws, 29, 'RETURNS', 4);
  ws.getRow(30).values = ['Metric', 'Value', 'Target', ''];
  headerStyle(ws, 30, 3);
  const returns = [
    ['Monthly Cash Flow', { formula: 'B19-B27' }, '$200+ per unit'],
    ['Annual Cash Flow', { formula: 'B31*12' }, '$2,400+ per unit'],
    ['Cash-on-Cash Return', { formula: 'IF(B26>0,B32/B26*100,"INFINITE")' }, '12%+ target'],
    ['Equity Created', { formula: 'B23-B24' }, 'Forced appreciation'],
  ];
  returns.forEach((r, i) => { ws.getRow(31 + i).values = r; altRowFill(ws, 31 + i); });

  brandFooter(ws, 37, 4);
  await saveWorkbook(wb, path.join(outDir, '02-brrrr-calculator.xlsx'));
}

async function createFlipCalculator(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Flip Calculator');
  ws.columns = [{ width: 32 }, { width: 18 }, { width: 22 }];
  titleRow(ws, 1, 'FIX & FLIP PROFIT CALCULATOR', 3);
  subtitleRow(ws, 2, 'The Deal Machine by J. Marque — Module 4', 3);

  sectionHeader(ws, 4, 'ACQUISITION COSTS', 3);
  ws.getRow(5).values = ['Item', 'Amount', 'Notes'];
  headerStyle(ws, 5, 3);
  const acq = [
    ['Purchase Price', '', ''], ['Closing Costs (Buy)', '', '~2-3%'],
    ['Total Acquisition', { formula: 'B6+B7' }, ''],
  ];
  acq.forEach((r, i) => { ws.getRow(6 + i).values = r; altRowFill(ws, 6 + i); });

  sectionHeader(ws, 10, 'REHAB COSTS', 3);
  ws.getRow(11).values = ['Item', 'Amount', 'Notes'];
  headerStyle(ws, 11, 3);
  const rehab = [
    ['Materials', '', ''], ['Labor', '', ''], ['Permits', '', ''],
    ['Contingency (10%)', { formula: '(B12+B13+B14)*0.1' }, ''],
    ['Total Rehab', { formula: 'B12+B13+B14+B15' }, ''],
  ];
  rehab.forEach((r, i) => { ws.getRow(12 + i).values = r; altRowFill(ws, 12 + i); });

  sectionHeader(ws, 18, 'HOLDING COSTS', 3);
  ws.getRow(19).values = ['Item', 'Monthly', 'Total (×months)'];
  headerStyle(ws, 19, 3);
  ws.getRow(20).values = ['Holding Period (months)', '', ''];
  const hold = [
    ['Loan Interest', '', { formula: 'B21*B20' }], ['Property Taxes', '', { formula: 'B22*B20' }],
    ['Insurance', '', { formula: 'B23*B20' }], ['Utilities', '', { formula: 'B24*B20' }],
    ['Total Holding', '', { formula: 'C21+C22+C23+C24' }],
  ];
  hold.forEach((r, i) => { ws.getRow(21 + i).values = r; altRowFill(ws, 21 + i); });

  sectionHeader(ws, 27, 'SELLING COSTS', 3);
  ws.getRow(28).values = ['Item', 'Amount', 'Notes'];
  headerStyle(ws, 28, 3);
  const sell = [
    ['After Repair Value (ARV)', '', 'Comparable sales'],
    ['Agent Commission (6%)', { formula: 'B29*0.06' }, ''],
    ['Closing Costs (Sell)', { formula: 'B29*0.02' }, '~2%'],
    ['Total Selling Costs', { formula: 'B30+B31' }, ''],
  ];
  sell.forEach((r, i) => { ws.getRow(29 + i).values = r; altRowFill(ws, 29 + i); });

  sectionHeader(ws, 34, 'PROFIT ANALYSIS', 3);
  ws.getRow(35).values = ['Metric', 'Value', 'Target'];
  headerStyle(ws, 35, 3);
  const profit = [
    ['Net Profit', { formula: 'B29-B8-B16-C25-B32' }, '$20K+ minimum'],
    ['ROI', { formula: 'IF(B8>0,B36/(B8+B16)*100,0)' }, '20%+ target'],
    ['Hold Period (months)', { formula: 'B20' }, '3-6 months'],
    ['Annualized ROI', { formula: 'IF(B20>0,B37*(12/B20),0)' }, '40%+ target'],
  ];
  profit.forEach((r, i) => { ws.getRow(36 + i).values = r; altRowFill(ws, 36 + i); });

  brandFooter(ws, 42, 3);
  await saveWorkbook(wb, path.join(outDir, '03-flip-calculator.xlsx'));
}

async function create13TouchScripts(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('13-Touch Scripts');
  ws.columns = [{ width: 8 }, { width: 15 }, { width: 10 }, { width: 60 }];
  titleRow(ws, 1, '13-TOUCH SELLER FOLLOW-UP SCRIPT PACK', 4);
  subtitleRow(ws, 2, 'The Deal Machine by J. Marque — Module 2', 4);
  subtitleRow(ws, 3, 'Customize: Replace [Your Name] and [Company] with your info', 4);

  ws.getRow(5).values = ['Touch #', 'Channel', 'Day', 'Script'];
  headerStyle(ws, 5, 4);

  const scripts = [
    [1, 'Cold Call', 1, 'Hi, is this [Seller Name]? My name is [Your Name] with [Company]. I noticed your property at [Address] and wanted to reach out. We buy houses in the area and I was wondering if you\'d ever consider an offer? ... No pressure at all. Just wanted to introduce myself in case the timing is ever right.'],
    [2, 'Text', 2, 'Hi [Seller Name], this is [Your Name] with [Company]. I left a voicemail yesterday about your property at [Address]. Would you be open to a quick conversation about a cash offer? No obligation.'],
    [3, 'Voicemail', 4, 'Hi [Seller Name], it\'s [Your Name] again with [Company]. Just following up on the property at [Address]. We work with homeowners who want to sell without the hassle of listing — no showings, no repairs, no commissions. If that sounds interesting, give me a call at [Phone]. Talk soon.'],
    [4, 'Email', 5, 'Subject: Quick question about [Address]\n\nHi [Seller Name],\n\nI\'ve been trying to reach you about your property at [Address]. We buy homes in [City] and can close in as little as 14 days, cash. No repairs needed. No agent fees.\n\nWould you be open to hearing what we could offer?\n\nBest,\n[Your Name]'],
    [5, 'Direct Mail', 7, '[Handwritten-style letter] Dear [Seller Name], I\'m interested in purchasing your property at [Address]. I buy homes in the area and can offer a fair price with a fast, hassle-free closing. If you\'re interested, please call me at [Phone] or text me anytime. — [Your Name]'],
    [6, 'Text', 10, 'Hey [Seller Name] — just checking in. Still interested in your property at [Address] if the timing is right for you. Let me know if anything has changed. — [Your Name]'],
    [7, 'Cold Call', 14, '[Follow-up call] Hi [Seller Name], it\'s [Your Name] again. I reached out a couple weeks ago about [Address]. I wanted to check in — has anything changed with the property? ... Even if you\'re not ready now, I\'d love to stay in touch.'],
    [8, 'Email', 18, 'Subject: Still thinking about [Address]\n\nHi [Seller Name],\n\nJust a quick note — I\'m still interested in your property. If your situation has changed or if you\'re considering selling, I\'d love to chat.\n\nNo pressure. Just want you to know the offer stands.\n\n[Your Name]'],
    [9, 'Text', 24, '[Seller Name] — it\'s [Your Name]. Quick question: on a scale of 1-10, how interested are you in selling [Address]? Just trying to get a pulse so I know if I should keep following up or give you space.'],
    [10, 'Direct Mail', 30, '[Postcard] We Buy Houses in [City]! Fair price. Fast closing. No repairs. No commissions. Call [Your Name] at [Phone] or visit [Website]. RE: [Address]'],
    [11, 'Text', 37, 'Hi [Seller Name], touching base one more time. Properties in your area are selling and I\'d love to make you a fair offer on [Address]. Is now a better time to talk?'],
    [12, 'Cold Call', 45, '[Final attempt call] Hi [Seller Name], it\'s [Your Name]. I\'ve reached out a few times about [Address]. I respect your time so this will be my last call unless you\'d like to chat. Just know — the offer is open whenever you\'re ready. You have my number.'],
    [13, 'Email', 55, 'Subject: My last email about [Address]\n\n[Seller Name],\n\nI\'ve reached out a few times and I want to respect your time. This will be my last email.\n\nIf you ever want to discuss selling [Address], my offer stands. Cash. Fast close. No hassle.\n\nWishing you the best either way.\n\n[Your Name]\n[Phone]'],
  ];

  scripts.forEach((s, i) => {
    const row = 6 + i;
    ws.getRow(row).values = s;
    ws.getRow(row).getCell(4).alignment = { wrapText: true };
    ws.getRow(row).height = 80;
    altRowFill(ws, row);
  });

  brandFooter(ws, 20, 4);
  await saveWorkbook(wb, path.join(outDir, '04-13-touch-scripts.xlsx'));
}

async function createSellerQuestionnaire(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Seller Questionnaire');
  ws.columns = [{ width: 8 }, { width: 35 }, { width: 40 }, { width: 25 }];
  titleRow(ws, 1, 'MOTIVATED SELLER QUESTIONNAIRE', 4);
  subtitleRow(ws, 2, 'The 4 Pillars: Condition | Timeline | Motivation | Price', 4);

  const sections = [
    { name: 'PILLAR 1: CONDITION', questions: [
      ['How would you describe the current condition of the property?', '', 'Rate 1-10'],
      ['What repairs or updates does it need?', '', ''],
      ['Is the property currently occupied?', '', 'Owner / Tenant / Vacant'],
      ['Are there any code violations or liens?', '', ''],
    ]},
    { name: 'PILLAR 2: TIMELINE', questions: [
      ['When do you need to sell by?', '', 'ASAP / 30 days / 60 days / Flexible'],
      ['What happens if you don\'t sell by then?', '', 'Key motivation indicator'],
      ['Have you listed with an agent before?', '', ''],
      ['How long has the property been on/off market?', '', ''],
    ]},
    { name: 'PILLAR 3: MOTIVATION', questions: [
      ['Why are you considering selling?', '', 'Listen for distress signals'],
      ['What would you do with the proceeds?', '', ''],
      ['Is there a mortgage? How much is owed?', '', ''],
      ['Are you behind on payments?', '', 'Pre-foreclosure indicator'],
    ]},
    { name: 'PILLAR 4: PRICE', questions: [
      ['What price do you have in mind?', '', 'Let them go first'],
      ['How did you arrive at that number?', '', ''],
      ['Would you consider a lower offer if we closed fast?', '', ''],
      ['What\'s the minimum you\'d accept?', '', 'Their real number'],
    ]},
  ];

  let row = 4;
  sections.forEach(section => {
    sectionHeader(ws, row, section.name, 4);
    row++;
    ws.getRow(row).values = ['#', 'Question', 'Answer', 'Notes'];
    headerStyle(ws, row, 4);
    row++;
    section.questions.forEach((q, i) => {
      ws.getRow(row).values = [i + 1, q[0], q[1], q[2]];
      ws.getRow(row).height = 25;
      altRowFill(ws, row);
      row++;
    });
    row++;
  });

  brandFooter(ws, row + 1, 4);
  await saveWorkbook(wb, path.join(outDir, '05-seller-questionnaire.xlsx'));
}

async function createPurchaseAgreement(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Purchase Agreement');
  ws.columns = [{ width: 25 }, { width: 35 }, { width: 25 }, { width: 20 }];
  titleRow(ws, 1, 'PURCHASE AGREEMENT TEMPLATE (ASSIGNABLE)', 4);
  subtitleRow(ws, 2, 'IMPORTANT: Have a real estate attorney review before use', 4);

  sectionHeader(ws, 4, 'PARTIES', 4);
  const parties = [
    ['Buyer:', '[Your Name/Company] AND/OR ASSIGNS'], ['Seller:', ''],
    ['Property Address:', ''], ['Legal Description:', ''],
  ];
  parties.forEach((p, i) => { ws.getRow(5 + i).values = p; });

  sectionHeader(ws, 10, 'TERMS', 4);
  const terms = [
    ['Purchase Price:', '$', '', ''],
    ['Earnest Money Deposit:', '$', 'Due within', '3 business days'],
    ['Inspection Period:', '', 'Days from execution', ''],
    ['Closing Date:', '', '', ''],
    ['Closing Agent:', '', '', ''],
    ['Assignment Clause:', '"Buyer and/or assigns" — THIS MAKES IT ASSIGNABLE', '', ''],
  ];
  terms.forEach((t, i) => { ws.getRow(11 + i).values = t; });

  sectionHeader(ws, 18, 'KEY CLAUSES TO INCLUDE', 4);
  const clauses = [
    '1. "And/Or Assigns" after buyer name — allows assignment',
    '2. Inspection contingency — gives you an exit if deal doesn\'t work',
    '3. Financing contingency (if applicable)',
    '4. Clear title contingency',
    '5. Access for inspections clause',
    '6. Earnest money refund conditions',
    '7. "Time is of the essence" clause',
  ];
  clauses.forEach((c, i) => {
    ws.mergeCells(19 + i, 1, 19 + i, 4);
    ws.getRow(19 + i).getCell(1).value = c;
  });

  brandFooter(ws, 28, 4);
  await saveWorkbook(wb, path.join(outDir, '06-purchase-agreement.xlsx'));
}

async function createAssignmentContract(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Assignment Contract');
  ws.columns = [{ width: 25 }, { width: 35 }, { width: 25 }];
  titleRow(ws, 1, 'ASSIGNMENT OF CONTRACT TEMPLATE', 3);
  subtitleRow(ws, 2, 'Have a real estate attorney review before use', 3);

  sectionHeader(ws, 4, 'ASSIGNMENT DETAILS', 3);
  const details = [
    ['Assignor (You):', ''], ['Assignee (Buyer):', ''],
    ['Original Seller:', ''], ['Property Address:', ''],
    ['Original Contract Date:', ''], ['Assignment Fee:', '$'],
    ['Non-Refundable Deposit:', '$ (typically $2,000-$5,000)'],
    ['Closing Date:', ''],
  ];
  details.forEach((d, i) => { ws.getRow(5 + i).values = d; });

  sectionHeader(ws, 14, 'KEY PROVISIONS', 3);
  const provisions = [
    'Assignee assumes all obligations of original purchase agreement',
    'Assignment fee is due at closing via closing agent',
    'Non-refundable deposit due within 24 hours of assignment execution',
    'Assignee to provide proof of funds within 48 hours',
    'All terms of original PSA remain in effect',
    'Assignor makes no representations about property condition',
  ];
  provisions.forEach((p, i) => {
    ws.mergeCells(15 + i, 1, 15 + i, 3);
    ws.getRow(15 + i).getCell(1).value = `${i + 1}. ${p}`;
  });

  brandFooter(ws, 23, 3);
  await saveWorkbook(wb, path.join(outDir, '07-assignment-contract.xlsx'));
}

async function createSOWTemplate(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Scope of Work');
  ws.columns = [
    { width: 20 }, { width: 30 }, { width: 18 }, { width: 15 }, { width: 15 }, { width: 12 },
  ];
  titleRow(ws, 1, 'SCOPE OF WORK (SOW) TEMPLATE', 6);
  subtitleRow(ws, 2, 'Room-by-Room Rehab Planning — Module 4', 6);

  ws.getRow(4).values = ['Property:', '', 'Contractor:', ''];
  ws.getRow(5).values = ['Start Date:', '', 'End Date:', ''];

  ws.getRow(7).values = ['Room/Area', 'Work Description', 'Materials', 'Labor $', 'Material $', 'Timeline'];
  headerStyle(ws, 7, 6);

  const rooms = [
    'Kitchen', 'Primary Bathroom', 'Hall Bathroom', 'Living Room',
    'Primary Bedroom', 'Bedroom 2', 'Bedroom 3', 'Exterior/Siding',
    'Roof', 'HVAC', 'Plumbing', 'Electrical', 'Flooring (whole house)',
    'Paint (whole house)', 'Landscaping', 'Driveway/Walkway',
  ];
  rooms.forEach((r, i) => {
    ws.getRow(8 + i).values = [r, '', '', '', '', ''];
    altRowFill(ws, 8 + i);
  });

  const totalRow = 8 + rooms.length;
  ws.getRow(totalRow).values = ['TOTAL', '', '', { formula: `SUM(D8:D${totalRow - 1})` }, { formula: `SUM(E8:E${totalRow - 1})` }, ''];
  ws.getRow(totalRow).font = { bold: true };
  ws.getRow(totalRow + 1).values = ['GRAND TOTAL', '', '', { formula: `D${totalRow}+E${totalRow}` }, '', ''];
  ws.getRow(totalRow + 1).font = { bold: true, size: 12 };

  brandFooter(ws, totalRow + 3, 6);
  await saveWorkbook(wb, path.join(outDir, '08-scope-of-work.xlsx'));
}

async function createContractorChecklist(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Contractor Checklist');
  ws.columns = [{ width: 8 }, { width: 40 }, { width: 15 }, { width: 35 }];
  titleRow(ws, 1, 'CONTRACTOR VETTING CHECKLIST', 4);
  subtitleRow(ws, 2, 'The Deal Machine by J. Marque — Module 4', 4);

  ws.getRow(4).values = ['#', 'Criteria', 'Pass/Fail', 'Notes'];
  headerStyle(ws, 4, 4);

  const items = [
    'Licensed and insured (verify certificate)', 'General liability insurance ($1M+ coverage)',
    'Workers compensation insurance', 'At least 3 verifiable references',
    'Portfolio of completed projects (before/after photos)',
    'Written estimate with line-item breakdown',
    'Clear payment terms (never 100% upfront)',
    'Realistic timeline with milestones',
    'Communication responsiveness (replied within 24h?)',
    'Currently managing fewer than 5 active projects',
    'Willing to sign a Scope of Work with penalties',
    'No outstanding complaints on BBB or state board',
    'Subcontractor management plan',
    'Clean-up and debris removal included',
    'Warranty on workmanship (minimum 1 year)',
  ];

  items.forEach((item, i) => {
    ws.getRow(5 + i).values = [i + 1, item, '', ''];
    altRowFill(ws, 5 + i);
  });

  brandFooter(ws, 22, 4);
  await saveWorkbook(wb, path.join(outDir, '09-contractor-checklist.xlsx'));
}

async function create90DayTracker(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('90-Day Tracker');
  ws.columns = [
    { width: 8 }, { width: 12 }, { width: 30 }, { width: 10 }, { width: 15 }, { width: 20 },
  ];
  titleRow(ws, 1, '90-DAY EXECUTION TRACKER', 6);
  subtitleRow(ws, 2, 'The Deal Machine by J. Marque — Module 6', 6);

  // Month headers
  const months = [
    { name: 'MONTH 1: FOUNDATION (Days 1-30)', weeks: [
      { week: 'Week 1', tasks: ['Set up CRM/tracking system', 'Build buyer list (10 cash buyers)', 'Pull first lead list (100 properties)', 'Make first 20 calls'] },
      { week: 'Week 2', tasks: ['50 calls made', 'Send first direct mail batch', 'Analyze 5 deals with calculator', 'Schedule 2 property visits'] },
      { week: 'Week 3', tasks: ['100 total calls made', 'Submit first 3 offers', 'Follow up with all leads', 'Lock in title company'] },
      { week: 'Week 4', tasks: ['150 total calls made', '5+ offers submitted', 'First contract signed (goal)', 'Review month 1 KPIs'] },
    ]},
    { name: 'MONTH 2: ACCELERATION (Days 31-60)', weeks: [
      { week: 'Week 5', tasks: ['Scale to 200 calls', 'Add second lead source', '10+ total offers submitted', 'First assignment fee (goal)'] },
      { week: 'Week 6', tasks: ['250 total calls', 'Build contractor team', 'Analyze BRRRR candidates', 'Refine scripts based on results'] },
      { week: 'Week 7', tasks: ['300 total calls', '20+ total offers', '2nd deal under contract (goal)', 'First direct mail ROI analysis'] },
      { week: 'Week 8', tasks: ['350 total calls', 'First flip rehab started OR first BRRRR acquired', 'Pipeline has 5+ active leads', 'Review month 2 KPIs'] },
    ]},
    { name: 'MONTH 3: MOMENTUM (Days 61-90)', weeks: [
      { week: 'Week 9', tasks: ['400+ total calls', '30+ total offers', 'Multiple deals in pipeline', 'Systemize follow-up process'] },
      { week: 'Week 10', tasks: ['Hire VA for cold calling (optional)', 'Scale marketing budget', '3rd deal closed (goal)', 'Build repeat buyer relationships'] },
      { week: 'Week 11', tasks: ['500+ total calls', 'Evaluate: best strategy (wholesale/BRRRR/flip)', 'Begin creative finance conversations', 'Attend 2 local RE meetups'] },
      { week: 'Week 12', tasks: ['Review full 90-day results', 'Calculate total revenue generated', 'Set 6-month scaling goals', 'DECIDE: coaching application?'] },
    ]},
  ];

  let row = 4;
  months.forEach(month => {
    sectionHeader(ws, row, month.name, 6);
    row++;
    ws.getRow(row).values = ['Day', 'Week', 'Task', 'Done?', 'Metric', 'Notes'];
    headerStyle(ws, row, 6);
    row++;
    let dayNum = 0;
    month.weeks.forEach(week => {
      week.tasks.forEach((task, ti) => {
        dayNum++;
        ws.getRow(row).values = [dayNum, ti === 0 ? week.week : '', task, '☐', '', ''];
        altRowFill(ws, row);
        row++;
      });
    });
    row++;
  });

  brandFooter(ws, row + 1, 6);
  await saveWorkbook(wb, path.join(outDir, '10-90-day-tracker.xlsx'));
}

async function createPipelineTracker(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Pipeline Tracker');
  ws.columns = [
    { width: 25 }, { width: 15 }, { width: 12 }, { width: 12 }, { width: 12 },
    { width: 12 }, { width: 18 }, { width: 15 },
  ];
  titleRow(ws, 1, 'DEAL PIPELINE TRACKER', 8);
  subtitleRow(ws, 2, 'The Deal Machine by J. Marque — Module 6', 8);

  ws.getRow(4).values = ['Property Address', 'Status', 'Days', 'Offer $', 'ARV', 'Fee/Profit', 'Seller Contact', 'Next Action'];
  headerStyle(ws, 4, 8);

  // Pre-populate 20 empty rows with dropdown validation note
  for (let i = 0; i < 20; i++) {
    const r = 5 + i;
    ws.getRow(r).values = ['', '', '', '', '', '', '', ''];
    altRowFill(ws, r);
  }

  ws.getRow(26).values = ['', '', '', '', '', '', '', ''];
  sectionHeader(ws, 28, 'STATUS KEY', 8);
  const statuses = [
    ['Lead', 'New lead — not yet contacted'],
    ['Contacted', 'Initial contact made — qualifying'],
    ['Offer Sent', 'Offer submitted — awaiting response'],
    ['Under Contract', 'Signed PSA — due diligence period'],
    ['Assigned/Closing', 'Deal assigned to buyer OR heading to close'],
    ['Closed', 'Deal done — profit collected'],
    ['Dead', 'Lead killed — not viable'],
  ];
  statuses.forEach((s, i) => {
    ws.getRow(29 + i).values = [s[0], s[1]];
    ws.getRow(29 + i).getCell(1).font = { bold: true };
  });

  brandFooter(ws, 38, 8);
  await saveWorkbook(wb, path.join(outDir, '11-pipeline-tracker.xlsx'));
}

async function createLeadScoring(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Lead Scoring');
  ws.columns = [{ width: 30 }, { width: 12 }, { width: 40 }];
  titleRow(ws, 1, 'SELLER LEAD SCORING SHEET', 3);
  subtitleRow(ws, 2, 'Score each lead 1-10 per category. 30+ = hot lead', 3);

  ws.getRow(4).values = ['Category', 'Score (1-10)', 'Scoring Guide'];
  headerStyle(ws, 4, 3);

  const categories = [
    ['Motivation Level', '', '10 = desperate (foreclosure, divorce) | 1 = just curious'],
    ['Equity Position', '', '10 = free & clear | 5 = some equity | 1 = underwater'],
    ['Timeline Urgency', '', '10 = needs to sell this week | 1 = no rush'],
    ['Property Condition', '', '10 = major repairs (= more discount) | 1 = perfect'],
    ['Responsiveness', '', '10 = answers every call | 1 = ghosting'],
  ];

  categories.forEach((c, i) => {
    ws.getRow(5 + i).values = c;
    altRowFill(ws, 5 + i);
    ws.getRow(5 + i).height = 25;
  });

  ws.getRow(11).values = ['TOTAL SCORE', { formula: 'SUM(B5:B9)' }, ''];
  ws.getRow(11).getCell(1).font = { bold: true, size: 12 };
  ws.getRow(11).getCell(2).font = { bold: true, size: 14 };

  ws.getRow(13).values = ['PRIORITY', { formula: 'IF(B11>=40,"HOT — CALL NOW",IF(B11>=30,"WARM — FOLLOW UP",IF(B11>=20,"COOL — NURTURE","COLD — LOW PRIORITY")))' }, ''];
  ws.getRow(13).getCell(2).font = { bold: true, size: 12, color: { argb: GOLD } };

  brandFooter(ws, 16, 3);
  await saveWorkbook(wb, path.join(outDir, '12-lead-scoring.xlsx'));
}

// ============================================================
// WEALTH SHIFT TEMPLATES (6)
// ============================================================

async function createPortfolioAnalysis(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Portfolio Analysis');
  ws.columns = [
    { width: 22 }, { width: 15 }, { width: 15 }, { width: 15 }, { width: 15 }, { width: 15 }, { width: 15 },
  ];
  titleRow(ws, 1, 'CURRENT PORTFOLIO ANALYSIS', 7);
  subtitleRow(ws, 2, 'The Wealth Shift by J. Marque — Module 5, Calculator 1', 7);

  ws.getRow(4).values = ['Account', 'Balance', 'Annual Fees %', 'Gross Return %', 'Net Return %', 'Annual Fees $', 'Net Real Return %'];
  headerStyle(ws, 4, 7);

  const accounts = ['401(k) — Current Employer', '401(k) — Former Employer', 'Traditional IRA', 'Roth IRA', 'Brokerage Account', 'TSP / 403(b)', 'HSA', 'Other'];
  accounts.forEach((a, i) => {
    const r = 5 + i;
    ws.getRow(r).values = [
      a, '', '', '', { formula: `D${r}-C${r}` },
      { formula: `B${r}*C${r}/100` }, { formula: `E${r}-3` }, // subtract 3% inflation
    ];
    altRowFill(ws, r);
  });

  const totalR = 5 + accounts.length;
  ws.getRow(totalR).values = [
    'TOTAL', { formula: `SUM(B5:B${totalR - 1})` }, '',
    '', '', { formula: `SUM(F5:F${totalR - 1})` }, '',
  ];
  ws.getRow(totalR).font = { bold: true };

  sectionHeader(ws, totalR + 2, 'INSIGHT', 7);
  ws.mergeCells(totalR + 3, 1, totalR + 3, 7);
  ws.getRow(totalR + 3).getCell(1).value = { formula: `"You are paying $" & TEXT(F${totalR},"#,##0") & " per year in fees. Over 20 years at current balance, that is $" & TEXT(F${totalR}*20,"#,##0") & " in extracted wealth."` };

  brandFooter(ws, totalR + 5, 7);
  await saveWorkbook(wb, path.join(outDir, '01-portfolio-analysis.xlsx'));
}

async function createFeeDragCalculator(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Fee Drag Calculator');
  ws.columns = [{ width: 20 }, { width: 18 }, { width: 18 }, { width: 18 }, { width: 18 }];
  titleRow(ws, 1, 'FEE DRAG CALCULATOR', 5);
  subtitleRow(ws, 2, 'The Wealth Shift by J. Marque — Module 5, Calculator 2', 5);

  sectionHeader(ws, 4, 'INPUTS', 5);
  ws.getRow(5).values = ['Current Portfolio Value:', '', '', '', ''];
  ws.getRow(6).values = ['Annual Gross Return:', '', '(e.g., 8%)', '', ''];
  ws.getRow(7).values = ['Total Annual Fees:', '', '(e.g., 1.5%)', '', ''];

  sectionHeader(ws, 9, 'PROJECTION: FEES vs NO FEES', 5);
  ws.getRow(10).values = ['Year', 'Without Fees', 'With Fees', 'Fee Cost', 'Cumulative Fees'];
  headerStyle(ws, 10, 5);

  for (let y = 1; y <= 20; y++) {
    const r = 10 + y;
    if (y === 1) {
      ws.getRow(r).values = [
        y,
        { formula: 'B5*(1+B6/100)' },
        { formula: 'B5*(1+(B6-B7)/100)' },
        { formula: `B${r}-C${r}` },
        { formula: `D${r}` },
      ];
    } else {
      ws.getRow(r).values = [
        y,
        { formula: `B${r - 1}*(1+B6/100)` },
        { formula: `C${r - 1}*(1+(B6-B7)/100)` },
        { formula: `B${r}-C${r}` },
        { formula: `E${r - 1}+D${r}` },
      ];
    }
    altRowFill(ws, r);
  }

  sectionHeader(ws, 32, 'SUMMARY', 5);
  ws.getRow(33).values = ['Total Fees Paid Over 20 Years:', { formula: 'E30' }, '', '', ''];
  ws.getRow(33).getCell(2).font = { bold: true, size: 14, color: { argb: 'FFCC0000' } };

  brandFooter(ws, 36, 5);
  await saveWorkbook(wb, path.join(outDir, '02-fee-drag-calculator.xlsx'));
}

async function createOpportunityCostCalc(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Opportunity Cost');
  ws.columns = [{ width: 30 }, { width: 18 }, { width: 18 }, { width: 18 }];
  titleRow(ws, 1, 'OPPORTUNITY COST CALCULATOR', 4);
  subtitleRow(ws, 2, 'Wall Street vs Main Street — Module 5, Calculator 3', 4);

  sectionHeader(ws, 4, 'CURRENT POSITION (WALL STREET)', 4);
  ws.getRow(5).values = ['Portfolio Value:', '', '', ''];
  ws.getRow(6).values = ['Net Annual Return (after fees):', '', '(e.g., 5%)', ''];
  ws.getRow(7).values = ['Annual Cash Income Generated:', '', '', ''];

  sectionHeader(ws, 9, 'REPOSITIONED (MAIN STREET RE)', 4);
  ws.getRow(10).values = ['Same Capital Deployed:', { formula: 'B5' }, '', ''];
  ws.getRow(11).values = ['Expected Total Return:', '', '(e.g., 13%)', ''];
  ws.getRow(12).values = ['Cash-on-Cash Return:', '', '(e.g., 7%)', ''];
  ws.getRow(13).values = ['Appreciation:', '', '(e.g., 3%)', ''];
  ws.getRow(14).values = ['Mortgage Paydown:', '', '(e.g., 2%)', ''];
  ws.getRow(15).values = ['Tax Benefits:', '', '(e.g., 1%)', ''];

  sectionHeader(ws, 17, 'OPPORTUNITY COST', 4);
  ws.getRow(18).values = ['Annual Return Gap:', { formula: 'B11-B6' }, '% per year', ''];
  ws.getRow(19).values = ['Annual Dollar Gap:', { formula: 'B5*(B11-B6)/100' }, 'per year', ''];
  ws.getRow(20).values = ['10-Year Opportunity Cost:', { formula: 'B19*10' }, 'over 10 years', ''];
  ws.getRow(21).values = ['Annual Cash Flow from RE:', { formula: 'B5*B12/100' }, 'per year', ''];
  ws.getRow(22).values = ['Monthly Cash Flow from RE:', { formula: 'B21/12' }, 'per month', ''];
  ws.getRow(20).getCell(2).font = { bold: true, size: 14, color: { argb: 'FFCC0000' } };

  brandFooter(ws, 25, 4);
  await saveWorkbook(wb, path.join(outDir, '03-opportunity-cost-calculator.xlsx'));
}

async function createSDIRATimeline(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('SDIRA Timeline');
  ws.columns = [{ width: 8 }, { width: 30 }, { width: 15 }, { width: 35 }];
  titleRow(ws, 1, 'SDIRA CONVERSION TIMELINE PLANNER', 4);
  subtitleRow(ws, 2, 'The Wealth Shift by J. Marque — Module 5, Calculator 4', 4);

  ws.getRow(4).values = ['Week', 'Milestone', 'Status', 'Notes'];
  headerStyle(ws, 4, 4);

  const milestones = [
    ['1-2', 'Research SDIRA custodians (compare 3+)', '', 'See Module 2 custodian comparison'],
    ['2-3', 'Open SDIRA account', '', 'Application + ID verification'],
    ['3-4', 'Initiate rollover from current 401(k)/IRA', '', 'Direct trustee-to-trustee transfer'],
    ['4-6', 'Rollover processing (custodian timeline)', '', 'Typically 2-4 weeks'],
    ['5-7', 'Funds available in SDIRA', '', 'Confirm with custodian'],
    ['6-8', 'Identify target property', '', 'Apply buy box criteria'],
    ['8-10', 'Property due diligence', '', 'Inspection, appraisal, title'],
    ['10-12', 'Submit offer through SDIRA custodian', '', 'Custodian signs on behalf of IRA'],
    ['12-16', 'Custodian approval + title review', '', 'May take 1-2 weeks'],
    ['16-20', 'Close on property', '', 'SDIRA is the buyer, not you'],
    ['20-24', 'Property placed with manager + first rent', '', 'Cash flow begins'],
  ];

  milestones.forEach((m, i) => {
    ws.getRow(5 + i).values = ['Wk ' + m[0], m[1], m[2], m[3]];
    altRowFill(ws, 5 + i);
  });

  sectionHeader(ws, 17, 'TOTAL TIMELINE: 4-6 MONTHS from decision to first cash flow', 4);

  brandFooter(ws, 20, 4);
  await saveWorkbook(wb, path.join(outDir, '04-sdira-timeline.xlsx'));
}

async function createReplacementIncomeCalc(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Replacement Income');
  ws.columns = [{ width: 30 }, { width: 18 }, { width: 18 }, { width: 18 }];
  titleRow(ws, 1, 'REPLACEMENT INCOME FORMULA', 4);
  subtitleRow(ws, 2, 'The Wealth Shift by J. Marque — Module 5, Calculator 5', 4);

  sectionHeader(ws, 4, 'YOUR TARGET', 4);
  ws.getRow(5).values = ['Current W-2 Annual Income:', '', '', ''];
  ws.getRow(6).values = ['Target Monthly Income (75%):', { formula: 'B5*0.75/12' }, '(RE tax benefits = 75% replacement)', ''];
  ws.getRow(7).values = ['Target Monthly Income (100%):', { formula: 'B5/12' }, '(full replacement)', ''];

  sectionHeader(ws, 9, 'SENSITIVITY ANALYSIS — Units Needed', 4);
  ws.getRow(10).values = ['Cash Flow / Unit', 'Units for 75%', 'Units for 100%', 'Total Equity Needed'];
  headerStyle(ws, 10, 4);

  const cashFlows = [400, 500, 750, 1000, 1500];
  cashFlows.forEach((cf, i) => {
    const r = 11 + i;
    ws.getRow(r).values = [
      `$${cf}/month per unit`,
      { formula: `ROUNDUP(B6/${cf},0)` },
      { formula: `ROUNDUP(B7/${cf},0)` },
      { formula: `B${r}*30000` }, // ~$30K equity per unit average
    ];
    altRowFill(ws, r);
  });

  sectionHeader(ws, 17, 'YOUR PLAN', 4);
  ws.getRow(18).values = ['Target cash flow per unit:', '', '', ''];
  ws.getRow(19).values = ['Units needed:', { formula: 'ROUNDUP(B6/B18,0)' }, '', ''];
  ws.getRow(20).values = ['Acquisition timeline (years):', '', '', ''];
  ws.getRow(21).values = ['Units per year:', { formula: 'ROUNDUP(B19/B20,0)' }, '', ''];
  ws.getRow(22).values = ['Units per month:', { formula: 'ROUNDUP(B21/12,0)' }, '', ''];

  brandFooter(ws, 25, 4);
  await saveWorkbook(wb, path.join(outDir, '05-replacement-income.xlsx'));
}

async function createRiskAssessment(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Risk Assessment');
  ws.columns = [{ width: 25 }, { width: 22 }, { width: 22 }, { width: 22 }];
  titleRow(ws, 1, 'RISK TOLERANCE ASSESSMENT MATRIX', 4);
  subtitleRow(ws, 2, 'The Wealth Shift by J. Marque — Module 5, Calculator 6', 4);

  ws.getRow(4).values = ['Factor', 'Conservative', 'Moderate', 'Aggressive'];
  headerStyle(ws, 4, 4);

  const matrix = [
    ['Target Cash-on-Cash', '5-7%', '8-10%', '10%+'],
    ['Strategy', 'Turnkey rentals', 'BRRRR / Value-add', 'Flips + Creative finance'],
    ['Capital Allocation', '100% SDIRA', '70% SDIRA / 30% personal', '50/50 split'],
    ['Market Selection', 'A/B neighborhoods', 'B/C neighborhoods', 'C/D neighborhoods'],
    ['Leverage', '50-65% LTV', '70-75% LTV', '80%+ LTV'],
    ['Management', 'Full property management', 'PM with oversight', 'Self-manage some'],
    ['Expected Annual Return', '8-10%', '12-15%', '18-25%'],
    ['Risk Level', 'LOW', 'MEDIUM', 'HIGH'],
    ['Best For', 'Preservation + income', 'Growth + income', 'Aggressive growth'],
  ];

  matrix.forEach((m, i) => {
    ws.getRow(5 + i).values = m;
    altRowFill(ws, 5 + i);
  });

  sectionHeader(ws, 15, 'MY PROFILE', 4);
  ws.getRow(16).values = ['My risk tolerance:', '', '', ''];
  ws.getRow(17).values = ['My target CCR:', '', '', ''];
  ws.getRow(18).values = ['My preferred strategy:', '', '', ''];

  brandFooter(ws, 21, 4);
  await saveWorkbook(wb, path.join(outDir, '06-risk-assessment.xlsx'));
}

// ============================================================
// FOUNDATION TEMPLATES (9 core worksheets)
// ============================================================

async function createMonthlyBudget(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Monthly Budget P&L');
  ws.columns = [{ width: 30 }, { width: 15 }, { width: 15 }, { width: 20 }];
  titleRow(ws, 1, 'MONTHLY BUDGET — HOUSEHOLD P&L', 4);
  subtitleRow(ws, 2, 'The Foundation by J. Marque — Module 1', 4);

  sectionHeader(ws, 4, 'INCOME (use NET — what hits your bank)', 4);
  ws.getRow(5).values = ['Source', 'Frequency', 'Monthly Amount', 'Notes'];
  headerStyle(ws, 5, 4);
  const income = ['W-2 Wages (primary)', 'W-2 Wages (secondary/spouse)', '1099 / Freelance', 'VA Disability / Benefits', 'Child Support / Alimony Received', 'Side Income / Gig Work', 'Rental Income', 'Other Income'];
  income.forEach((s, i) => { ws.getRow(6 + i).values = [s, '', '', '']; altRowFill(ws, 6 + i); });
  const incTotal = 6 + income.length;
  ws.getRow(incTotal).values = ['TOTAL INCOME', '', { formula: `SUM(C6:C${incTotal - 1})` }, ''];
  ws.getRow(incTotal).font = { bold: true };

  let r = incTotal + 1;
  sectionHeader(ws, r, 'FIXED EXPENSES', 4); r++;
  ws.getRow(r).values = ['Expense', '', 'Monthly Amount', 'Notes']; headerStyle(ws, r, 4); r++;
  const fixed = ['Rent / Mortgage', 'Car Payment 1', 'Car Payment 2', 'Car Insurance', 'Health Insurance', 'Life Insurance', 'Phone', 'Internet', 'Streaming (list all)', 'Gym Membership', 'Student Loans', 'Personal Loans', 'Child Care', 'Storage Unit'];
  const fixedStart = r;
  fixed.forEach((f, i) => { ws.getRow(r).values = [f, '', '', '']; altRowFill(ws, r); r++; });
  ws.getRow(r).values = ['TOTAL FIXED', '', { formula: `SUM(C${fixedStart}:C${r - 1})` }, ''];
  ws.getRow(r).font = { bold: true }; r++;

  sectionHeader(ws, r, 'VARIABLE EXPENSES', 4); r++;
  ws.getRow(r).values = ['Expense', '', 'Monthly Amount', 'Notes']; headerStyle(ws, r, 4); r++;
  const variable = ['Groceries', 'Gas / Transportation', 'Dining Out', 'Entertainment', 'Clothing', 'Personal Care', 'Gifts', 'Household Supplies', 'Cash Withdrawals', 'Pet Expenses', 'Electric', 'Water', 'Gas (utility)', 'Medical Co-Pays'];
  const varStart = r;
  variable.forEach((v, i) => { ws.getRow(r).values = [v, '', '', '']; altRowFill(ws, r); r++; });
  ws.getRow(r).values = ['TOTAL VARIABLE', '', { formula: `SUM(C${varStart}:C${r - 1})` }, ''];
  ws.getRow(r).font = { bold: true }; r++;

  r++;
  sectionHeader(ws, r, 'BOTTOM LINE', 4); r++;
  ws.getRow(r).values = ['Total Income', '', { formula: `C${incTotal}` }, '']; r++;
  ws.getRow(r).values = ['Total Expenses', '', { formula: `C${fixedStart + fixed.length}+C${varStart + variable.length}` }, '']; r++;
  ws.getRow(r).values = ['MONTHLY CASH FLOW', '', { formula: `C${r - 2}-C${r - 1}` }, ''];
  ws.getRow(r).getCell(1).font = { bold: true, size: 14 };
  ws.getRow(r).getCell(3).font = { bold: true, size: 14 };

  brandFooter(ws, r + 2, 4);
  await saveWorkbook(wb, path.join(outDir, '01-monthly-budget.xlsx'));
}

async function createWasteFinder(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Waste Finder');
  ws.columns = [{ width: 25 }, { width: 15 }, { width: 15 }, { width: 15 }];
  titleRow(ws, 1, 'THE WASTE FINDER', 4);
  subtitleRow(ws, 2, 'The Foundation by J. Marque — Module 1', 4);

  sectionHeader(ws, 4, 'SECTION 1: FORGOTTEN SUBSCRIPTIONS', 4);
  ws.getRow(5).values = ['Subscription', 'Monthly Cost', 'Last Used', 'Keep / Cancel'];
  headerStyle(ws, 5, 4);
  for (let i = 0; i < 10; i++) { ws.getRow(6 + i).values = ['', '', '', '']; altRowFill(ws, 6 + i); }
  ws.getRow(16).values = ['Subtotal:', { formula: 'SUM(B6:B15)' }, '', ''];
  ws.getRow(16).font = { bold: true };

  sectionHeader(ws, 18, 'SECTION 2: LIFESTYLE CREEP', 4);
  ws.getRow(19).values = ['Category', '6 Months Ago', 'Current', 'Monthly Increase'];
  headerStyle(ws, 19, 4);
  const creep = ['Dining Out', 'Entertainment', 'Clothing', 'Groceries', 'Subscriptions'];
  creep.forEach((c, i) => {
    const r = 20 + i;
    ws.getRow(r).values = [c, '', '', { formula: `C${r}-B${r}` }];
    altRowFill(ws, r);
  });
  ws.getRow(25).values = ['Subtotal:', '', '', { formula: 'SUM(D20:D24)' }];
  ws.getRow(25).font = { bold: true };

  sectionHeader(ws, 27, 'SECTION 3: PENALTIES & FEES', 4);
  ws.getRow(28).values = ['Fee Type', 'Monthly Avg', 'Fix Strategy', ''];
  headerStyle(ws, 28, 3);
  const fees = ['Overdraft Fees', 'Late Payment Fees', 'ATM Fees', 'Interest Charges', 'Minimum Balance Fees'];
  fees.forEach((f, i) => { ws.getRow(29 + i).values = [f, '', '', '']; altRowFill(ws, 29 + i); });
  ws.getRow(34).values = ['Subtotal:', { formula: 'SUM(B29:B33)' }, '', ''];
  ws.getRow(34).font = { bold: true };

  sectionHeader(ws, 36, 'TOTAL MONTHLY WASTE', 4);
  ws.getRow(37).values = ['Total:', { formula: 'B16+D25+B34' }, { formula: 'B37*12' }, 'per year'];
  ws.getRow(37).getCell(2).font = { bold: true, size: 14, color: { argb: 'FFCC0000' } };

  brandFooter(ws, 40, 4);
  await saveWorkbook(wb, path.join(outDir, '02-waste-finder.xlsx'));
}

async function createNetWorthStatement(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Net Worth Statement');
  ws.columns = [{ width: 30 }, { width: 18 }, { width: 18 }, { width: 18 }];
  titleRow(ws, 1, 'PERSONAL BALANCE SHEET / NET WORTH', 4);
  subtitleRow(ws, 2, 'The Foundation by J. Marque — Module 3', 4);

  sectionHeader(ws, 4, 'ASSETS — What You Own', 4);
  ws.getRow(5).values = ['Asset', 'Value', 'Liquid?', 'Investable?'];
  headerStyle(ws, 5, 4);

  let r = 6;
  ws.getRow(r).values = ['PAPER ASSETS', '', '', '']; ws.getRow(r).font = { bold: true, color: { argb: GOLD } }; r++;
  const paper = ['Checking Accounts', 'Savings Accounts', '401(k)', 'Traditional IRA', 'Roth IRA', 'TSP / 403(b)', 'Pension', 'Brokerage Account', 'HSA', 'Crypto'];
  const paperStart = r;
  paper.forEach(a => { ws.getRow(r).values = [a, '', '', '']; altRowFill(ws, r); r++; });

  ws.getRow(r).values = ['REAL ESTATE', '', '', '']; ws.getRow(r).font = { bold: true, color: { argb: GOLD } }; r++;
  const re = ['Primary Home (market value)', 'Primary Home (mortgage balance)', 'Investment Property 1', 'Investment Property 2', 'Land'];
  const reStart = r;
  re.forEach(a => { ws.getRow(r).values = [a, '', '', '']; altRowFill(ws, r); r++; });

  ws.getRow(r).values = ['HARD ASSETS', '', '', '']; ws.getRow(r).font = { bold: true, color: { argb: GOLD } }; r++;
  const hard = ['Vehicle 1', 'Vehicle 2', 'Gold / Silver', 'Jewelry', 'Business Equity'];
  const hardStart = r;
  hard.forEach(a => { ws.getRow(r).values = [a, '', '', '']; altRowFill(ws, r); r++; });

  ws.getRow(r).values = ['TOTAL ASSETS', { formula: `SUM(B${paperStart}:B${r - 1})` }, '', ''];
  ws.getRow(r).font = { bold: true, size: 12 };
  const assetTotal = r; r += 2;

  sectionHeader(ws, r, 'LIABILITIES — What You Owe', 4); r++;
  ws.getRow(r).values = ['Liability', 'Balance', 'Monthly Payment', 'Interest Rate'];
  headerStyle(ws, r, 4); r++;
  const liab = ['Mortgage(s)', 'Car Loans', 'Student Loans', 'Credit Cards', 'Personal Loans', 'Medical Debt', 'Tax Debt (IRS/State)', 'Other'];
  const liabStart = r;
  liab.forEach(l => { ws.getRow(r).values = [l, '', '', '']; altRowFill(ws, r); r++; });
  ws.getRow(r).values = ['TOTAL LIABILITIES', { formula: `SUM(B${liabStart}:B${r - 1})` }, { formula: `SUM(C${liabStart}:C${r - 1})` }, ''];
  ws.getRow(r).font = { bold: true, size: 12 };
  const liabTotal = r; r += 2;

  sectionHeader(ws, r, 'NET WORTH', 4); r++;
  ws.getRow(r).values = ['NET WORTH', { formula: `B${assetTotal}-B${liabTotal}` }, '', ''];
  ws.getRow(r).getCell(1).font = { bold: true, size: 16 };
  ws.getRow(r).getCell(2).font = { bold: true, size: 16 };

  brandFooter(ws, r + 3, 4);
  await saveWorkbook(wb, path.join(outDir, '03-net-worth-statement.xlsx'));
}

async function createInsuranceAudit(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Insurance Audit');
  ws.columns = [{ width: 25 }, { width: 20 }, { width: 18 }, { width: 18 }, { width: 18 }];
  titleRow(ws, 1, 'COMPLETE INSURANCE AUDIT', 5);
  subtitleRow(ws, 2, 'The Foundation by J. Marque — Module 2', 5);

  ws.getRow(4).values = ['Policy Type', 'Provider', 'Coverage Amount', 'Monthly Cost', 'Gap / Notes'];
  headerStyle(ws, 4, 5);

  const policies = [
    'Health Insurance', 'Dental Insurance', 'Vision Insurance',
    'Auto Insurance — Vehicle 1', 'Auto Insurance — Vehicle 2',
    'Homeowners / Renters Insurance', 'Life Insurance (Term)',
    'Life Insurance (Whole/Universal)', 'Disability Insurance',
    'Umbrella Liability', 'Pet Insurance', 'Other',
  ];

  policies.forEach((p, i) => {
    ws.getRow(5 + i).values = [p, '', '', '', ''];
    altRowFill(ws, 5 + i);
  });

  const totalR = 5 + policies.length;
  ws.getRow(totalR).values = ['TOTAL MONTHLY COST', '', '', { formula: `SUM(D5:D${totalR - 1})` }, ''];
  ws.getRow(totalR).font = { bold: true };
  ws.getRow(totalR + 1).values = ['TOTAL ANNUAL COST', '', '', { formula: `D${totalR}*12` }, ''];

  sectionHeader(ws, totalR + 3, 'GAPS IDENTIFIED', 5);
  for (let i = 0; i < 5; i++) {
    ws.mergeCells(totalR + 4 + i, 1, totalR + 4 + i, 5);
    ws.getRow(totalR + 4 + i).getCell(1).value = `${i + 1}. `;
  }

  brandFooter(ws, totalR + 10, 5);
  await saveWorkbook(wb, path.join(outDir, '04-insurance-audit.xlsx'));
}

async function createCreditWorksheet(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Credit Report');
  ws.columns = [{ width: 25 }, { width: 15 }, { width: 15 }, { width: 15 }, { width: 20 }];
  titleRow(ws, 1, 'CREDIT REPORT WORKSHEET', 5);
  subtitleRow(ws, 2, 'The Foundation by J. Marque — Module 1', 5);

  sectionHeader(ws, 4, 'CREDIT SCORES', 5);
  ws.getRow(5).values = ['Bureau', 'Score', 'Date Pulled', 'Source', ''];
  headerStyle(ws, 5, 4);
  ws.getRow(6).values = ['Experian', '', '', '', ''];
  ws.getRow(7).values = ['Equifax', '', '', '', ''];
  ws.getRow(8).values = ['TransUnion', '', '', '', ''];
  ws.getRow(9).values = ['Average:', { formula: 'AVERAGE(B6:B8)' }, '', '', ''];
  ws.getRow(9).font = { bold: true };

  sectionHeader(ws, 11, 'CREDIT ACCOUNTS', 5);
  ws.getRow(12).values = ['Account', 'Balance', 'Limit', 'Utilization', 'Status'];
  headerStyle(ws, 12, 5);
  for (let i = 0; i < 10; i++) {
    const r = 13 + i;
    ws.getRow(r).values = ['', '', '', { formula: `IF(C${r}>0,B${r}/C${r}*100,0)` }, ''];
    altRowFill(ws, r);
  }

  sectionHeader(ws, 24, 'NEGATIVE ITEMS TO DISPUTE', 5);
  ws.getRow(25).values = ['Item', 'Bureau', 'Amount', 'Status', 'Dispute Strategy'];
  headerStyle(ws, 25, 5);
  for (let i = 0; i < 5; i++) {
    ws.getRow(26 + i).values = ['', '', '', '', ''];
    altRowFill(ws, 26 + i);
  }

  brandFooter(ws, 33, 5);
  await saveWorkbook(wb, path.join(outDir, '05-credit-worksheet.xlsx'));
}

async function createRetirementCalc(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Retirement Calculator');
  ws.columns = [{ width: 32 }, { width: 18 }, { width: 18 }, { width: 18 }];
  titleRow(ws, 1, 'YOUR RETIREMENT NUMBER CALCULATOR', 4);
  subtitleRow(ws, 2, 'The Foundation by J. Marque — Module 4', 4);

  sectionHeader(ws, 4, 'STEP 1: Total Monthly Income Needed', 4);
  ws.getRow(5).values = ['Category', 'Monthly Amount', '', ''];
  headerStyle(ws, 5, 2);
  const expenses = ['Housing', 'Utilities', 'Food', 'Transportation', 'Health Insurance', 'Life Insurance', 'Entertainment / Travel', 'Miscellaneous Buffer (10%)'];
  expenses.forEach((e, i) => { ws.getRow(6 + i).values = [e, '', '', '']; altRowFill(ws, 6 + i); });
  const tmiRow = 6 + expenses.length;
  ws.getRow(tmiRow).values = ['TARGET MONTHLY INCOME (TMI)', { formula: `SUM(B6:B${tmiRow - 1})` }, '', ''];
  ws.getRow(tmiRow).font = { bold: true, size: 12 };

  sectionHeader(ws, tmiRow + 2, 'STEP 2: Sensitivity Analysis', 4);
  ws.getRow(tmiRow + 3).values = ['Cash Flow / Unit', 'Units Needed', 'Capital Needed', 'Time to Acquire'];
  headerStyle(ws, tmiRow + 3, 4);
  [500, 750, 1000, 1500].forEach((cf, i) => {
    const r = tmiRow + 4 + i;
    ws.getRow(r).values = [
      `$${cf}/month/unit`,
      { formula: `ROUNDUP(B${tmiRow}/${cf},0)` },
      { formula: `B${r}*30000` },
      '',
    ];
    altRowFill(ws, r);
  });

  sectionHeader(ws, tmiRow + 9, 'STEP 3: Your Plan', 4);
  ws.getRow(tmiRow + 10).values = ['Your target CF/unit:', '', '', ''];
  ws.getRow(tmiRow + 11).values = ['Units needed (UNR):', { formula: `ROUNDUP(B${tmiRow}/B${tmiRow + 10},0)` }, '', ''];
  ws.getRow(tmiRow + 12).values = ['Target timeline (years):', '', '', ''];
  ws.getRow(tmiRow + 13).values = ['Units per year:', { formula: `ROUNDUP(B${tmiRow + 11}/B${tmiRow + 12},0)` }, '', ''];

  brandFooter(ws, tmiRow + 16, 4);
  await saveWorkbook(wb, path.join(outDir, '06-retirement-calculator.xlsx'));
}

async function createTeamRoster(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Team Roster');
  ws.columns = [{ width: 25 }, { width: 22 }, { width: 18 }, { width: 15 }, { width: 25 }];
  titleRow(ws, 1, 'YOUR INVESTMENT TEAM ROSTER', 5);
  subtitleRow(ws, 2, 'The Foundation by J. Marque — Module 5', 5);

  ws.getRow(4).values = ['Role', 'Name', 'Contact', 'Status', 'Notes'];
  headerStyle(ws, 4, 5);

  const roles = [
    ['Real Estate Agent', '', '', '', 'Must be investor-friendly, not retail'],
    ['Mortgage Broker / Lender', '', '', '', 'DSCR + conventional + FHA'],
    ['General Contractor', '', '', '', 'Licensed, insured, references checked'],
    ['Property Manager', '', '', '', '8-10% of rent, tenant placement fee'],
    ['Real Estate Attorney', '', '', '', 'Closing + entity structure'],
    ['CPA / Tax Strategist', '', '', '', 'Must understand RE depreciation'],
    ['Insurance Agent', '', '', '', 'Landlord policies + umbrella'],
    ['Mentor / Accountability', '', '', '', 'Someone ahead of you in RE'],
  ];

  roles.forEach((r, i) => {
    ws.getRow(5 + i).values = r;
    altRowFill(ws, 5 + i);
    ws.getRow(5 + i).height = 28;
  });

  sectionHeader(ws, 14, 'INTERVIEW TRACKER', 5);
  ws.getRow(15).values = ['Role', 'Person', 'Date', 'Pass?', 'Red Flags'];
  headerStyle(ws, 15, 5);
  for (let i = 0; i < 8; i++) {
    ws.getRow(16 + i).values = ['', '', '', '', ''];
    altRowFill(ws, 16 + i);
  }

  brandFooter(ws, 26, 5);
  await saveWorkbook(wb, path.join(outDir, '07-team-roster.xlsx'));
}

async function createBuyBox(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Buy Box Builder');
  ws.columns = [{ width: 30 }, { width: 15 }, { width: 15 }, { width: 20 }];
  titleRow(ws, 1, 'MY BUY BOX BUILDER', 4);
  subtitleRow(ws, 2, 'The Foundation by J. Marque — Module 6', 4);

  sectionHeader(ws, 4, 'MARKET CRITERIA', 4);
  ws.getRow(5).values = ['Factor', 'My Target', '', ''];
  headerStyle(ws, 5, 2);
  const market = [
    'Primary Market (City/Metro)', 'Target Neighborhoods / ZIPs',
    'Population Trend', 'Key Industries / Employers',
    'Avg Rent-to-Price Ratio', 'Landlord-Friendly State?',
    'Property Tax Rate',
  ];
  market.forEach((m, i) => { ws.getRow(6 + i).values = [m, '', '', '']; altRowFill(ws, 6 + i); });

  sectionHeader(ws, 14, 'PROPERTY CRITERIA', 4);
  ws.getRow(15).values = ['Criteria', 'Minimum', 'Maximum', 'Ideal'];
  headerStyle(ws, 15, 4);
  const props = [
    'Purchase Price', 'Bedrooms', 'Bathrooms', 'Square Footage',
    'Year Built', 'Lot Size', 'Property Type', 'Condition Level',
    'Target Monthly Rent', 'Target Cash Flow / Unit',
    'Target Cash-on-Cash Return %',
  ];
  props.forEach((p, i) => { ws.getRow(16 + i).values = [p, '', '', '']; altRowFill(ws, 16 + i); });

  sectionHeader(ws, 28, 'MY DEAL KILLERS (walk away if...)', 4);
  const killers = [
    'Foundation issues (cracks, settling, water intrusion)',
    'Flood zone (requires flood insurance)',
    'Environmental contamination',
    'HOA restrictions on rentals',
    'Zoning violations / non-conforming use',
    'Title issues / liens that can\'t be cleared',
    'ARV below 70% all-in cost',
  ];
  killers.forEach((k, i) => {
    ws.getRow(29 + i).values = [`☐ ${k}`, '', '', ''];
  });

  brandFooter(ws, 37, 4);
  await saveWorkbook(wb, path.join(outDir, '08-buy-box-builder.xlsx'));
}

async function create90DayLaunchPlan(outDir) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('90-Day Launch Plan');
  ws.columns = [{ width: 12 }, { width: 35 }, { width: 10 }, { width: 25 }];
  titleRow(ws, 1, '90-DAY LAUNCH PLAN', 4);
  subtitleRow(ws, 2, 'The Foundation by J. Marque — Module 7', 4);

  const months = [
    { name: 'MONTH 1: KNOW YOUR NUMBERS (Modules 1-2)', tasks: [
      ['Week 1', 'Complete Monthly Budget P&L worksheet', '☐', ''],
      ['Week 1', 'Complete Waste Finder worksheet', '☐', ''],
      ['Week 1', 'Pull all 3 credit reports', '☐', ''],
      ['Week 2', 'Complete Insurance Audit worksheet', '☐', ''],
      ['Week 2', 'Call insurance agent — review gaps', '☐', ''],
      ['Week 3', 'Complete Net Worth Statement', '☐', ''],
      ['Week 3', 'Complete Asset Inventory', '☐', ''],
      ['Week 4', 'Compile Lender-Ready Document File', '☐', ''],
    ]},
    { name: 'MONTH 2: GET READY (Modules 3-5)', tasks: [
      ['Week 5', 'Complete Retirement Calculator', '☐', ''],
      ['Week 5', 'Inventory all retirement accounts', '☐', ''],
      ['Week 6', 'Research SDIRA custodians (3+)', '☐', ''],
      ['Week 6', 'Find real estate agent (investor-friendly)', '☐', ''],
      ['Week 7', 'Find CPA with RE experience', '☐', ''],
      ['Week 7', 'Find mortgage broker (DSCR + conventional)', '☐', ''],
      ['Week 8', 'Complete Team Roster (all 8 roles)', '☐', ''],
      ['Week 8', 'Interview 2+ people per role', '☐', ''],
    ]},
    { name: 'MONTH 3: TAKE ACTION (Modules 6-7)', tasks: [
      ['Week 9', 'Complete Buy Box Builder', '☐', ''],
      ['Week 9', 'Set up property search alerts (Zillow, Redfin)', '☐', ''],
      ['Week 10', 'Analyze 5 properties with Deal Analysis Sheet', '☐', ''],
      ['Week 10', 'Drive 3 target neighborhoods', '☐', ''],
      ['Week 11', 'Submit first offer', '☐', ''],
      ['Week 11', 'Schedule pre-approval meeting with lender', '☐', ''],
      ['Week 12', 'Review 90-day progress', '☐', ''],
      ['Week 12', 'DECISION: Apply for coaching? Next 90-day plan?', '☐', ''],
    ]},
  ];

  let row = 4;
  months.forEach(month => {
    sectionHeader(ws, row, month.name, 4); row++;
    ws.getRow(row).values = ['Timeline', 'Task', 'Done', 'Notes'];
    headerStyle(ws, row, 4); row++;
    month.tasks.forEach(task => {
      ws.getRow(row).values = task;
      altRowFill(ws, row);
      row++;
    });
    row++;
  });

  brandFooter(ws, row + 1, 4);
  await saveWorkbook(wb, path.join(outDir, '09-90-day-launch-plan.xlsx'));
}

// ============================================================
// MAIN
// ============================================================

async function main() {
  console.log('=== Money Decoded — Template Generator ===\n');
  const baseDir = path.resolve(__dirname, '../../business/funnel/products');

  // Deal Machine (12 templates)
  console.log('📊 DEAL MACHINE TEMPLATES (12):');
  const dmDir = path.join(baseDir, 'deal-machine', 'deliverables', 'templates');
  fs.mkdirSync(dmDir, { recursive: true });
  await createWholesaleDealAnalyzer(dmDir);
  await createBRRRRCalculator(dmDir);
  await createFlipCalculator(dmDir);
  await create13TouchScripts(dmDir);
  await createSellerQuestionnaire(dmDir);
  await createPurchaseAgreement(dmDir);
  await createAssignmentContract(dmDir);
  await createSOWTemplate(dmDir);
  await createContractorChecklist(dmDir);
  await create90DayTracker(dmDir);
  await createPipelineTracker(dmDir);
  await createLeadScoring(dmDir);

  // Wealth Shift (6 templates)
  console.log('\n📊 WEALTH SHIFT TEMPLATES (6):');
  const wsDir = path.join(baseDir, 'wealth-shift', 'deliverables', 'templates');
  fs.mkdirSync(wsDir, { recursive: true });
  await createPortfolioAnalysis(wsDir);
  await createFeeDragCalculator(wsDir);
  await createOpportunityCostCalc(wsDir);
  await createSDIRATimeline(wsDir);
  await createReplacementIncomeCalc(wsDir);
  await createRiskAssessment(wsDir);

  // Foundation (9 templates)
  console.log('\n📊 FOUNDATION TEMPLATES (9):');
  const fdDir = path.join(baseDir, 'foundation', 'deliverables', 'templates');
  fs.mkdirSync(fdDir, { recursive: true });
  await createMonthlyBudget(fdDir);
  await createWasteFinder(fdDir);
  await createNetWorthStatement(fdDir);
  await createInsuranceAudit(fdDir);
  await createCreditWorksheet(fdDir);
  await createRetirementCalc(fdDir);
  await createTeamRoster(fdDir);
  await createBuyBox(fdDir);
  await create90DayLaunchPlan(fdDir);

  console.log('\n=== All 27 templates generated ===');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
