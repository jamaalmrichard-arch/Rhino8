// Money Decoded — Manuscript to Styled PDF Generator
// Uses marked for markdown parsing + Playwright for HTML→PDF rendering
// Output: Professional PDFs with J. Marque branding

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const { chromium } = require('playwright');

// J. Marque brand colors and styling
const CSS_STYLES = `
@page {
  size: Letter;
  margin: 1in 0.85in;
  @bottom-center {
    content: counter(page);
    font-family: 'Georgia', serif;
    font-size: 10pt;
    color: #666;
  }
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 11.5pt;
  line-height: 1.7;
  color: #1a1a1a;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

/* Cover page */
.cover-page {
  page-break-after: always;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  text-align: center;
  padding: 2in 0.5in;
}

.cover-page .brand-line {
  width: 60px;
  height: 3px;
  background: #B8860B;
  margin: 20px auto;
}

.cover-page h1 {
  font-size: 32pt;
  font-weight: bold;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.cover-page .subtitle {
  font-size: 14pt;
  color: #555;
  font-style: italic;
  margin-top: 15px;
  line-height: 1.5;
}

.cover-page .author {
  font-size: 16pt;
  color: #B8860B;
  margin-top: 40px;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.cover-page .credentials {
  font-size: 9pt;
  color: #888;
  margin-top: 15px;
  max-width: 400px;
  line-height: 1.5;
}

/* Table of Contents */
.toc-page {
  page-break-after: always;
  padding-top: 30px;
}

.toc-page h2 {
  font-size: 18pt;
  color: #B8860B;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 2px solid #B8860B;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.toc-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 8px 0;
  border-bottom: 1px dotted #ccc;
  font-size: 11pt;
}

.toc-item .toc-title {
  color: #1a1a1a;
  font-weight: normal;
}

.toc-item .toc-module {
  font-weight: bold;
  color: #B8860B;
}

/* Content Headings */
h1 {
  font-size: 22pt;
  color: #1a1a1a;
  margin-top: 50px;
  margin-bottom: 20px;
  page-break-before: always;
  border-bottom: 3px solid #B8860B;
  padding-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

h1:first-of-type {
  page-break-before: avoid;
}

h2 {
  font-size: 16pt;
  color: #B8860B;
  margin-top: 35px;
  margin-bottom: 15px;
  font-weight: bold;
}

h3 {
  font-size: 13pt;
  color: #333;
  margin-top: 25px;
  margin-bottom: 10px;
  font-weight: bold;
}

h4 {
  font-size: 11.5pt;
  color: #555;
  margin-top: 20px;
  margin-bottom: 8px;
  font-weight: bold;
  font-style: italic;
}

/* Paragraphs */
p {
  margin-bottom: 12px;
  text-align: justify;
  hyphens: auto;
}

/* Strong/emphasis */
strong {
  color: #1a1a1a;
  font-weight: bold;
}

em {
  font-style: italic;
}

/* Block quotes — used for key insights */
blockquote {
  border-left: 4px solid #B8860B;
  margin: 25px 0;
  padding: 15px 20px;
  background: #faf8f2;
  font-style: italic;
  color: #444;
}

blockquote p {
  margin: 0;
  text-align: left;
}

/* Lists */
ul, ol {
  margin: 15px 0;
  padding-left: 25px;
}

li {
  margin-bottom: 6px;
  line-height: 1.6;
}

/* Tables */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 10pt;
}

th {
  background: #B8860B;
  color: white;
  padding: 10px 12px;
  text-align: left;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 9pt;
}

td {
  padding: 8px 12px;
  border-bottom: 1px solid #e0e0e0;
}

tr:nth-child(even) {
  background: #faf8f2;
}

/* Code/formulas */
code {
  font-family: 'Courier New', monospace;
  background: #f5f5f5;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 10pt;
  color: #B8860B;
}

pre {
  background: #1a1a1a;
  color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  overflow-x: auto;
  margin: 20px 0;
  font-size: 10pt;
  line-height: 1.5;
}

pre code {
  background: none;
  color: inherit;
  padding: 0;
}

/* Horizontal rules — section dividers */
hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 40px 0;
}

/* Action steps boxes */
.action-steps {
  background: #f9f5eb;
  border: 2px solid #B8860B;
  border-radius: 5px;
  padding: 20px;
  margin: 25px 0;
}

/* Audio reference callout */
.audio-callout {
  background: #eef;
  border-left: 4px solid #4444aa;
  padding: 12px 18px;
  margin: 20px 0;
  font-size: 10pt;
}

/* Copyright page */
.copyright-page {
  page-break-after: always;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 80vh;
  font-size: 9pt;
  color: #888;
  line-height: 1.8;
}

/* Print optimizations */
@media print {
  h1, h2, h3 {
    page-break-after: avoid;
  }
  table, blockquote, pre {
    page-break-inside: avoid;
  }
}
`;

const PRODUCTS = [
  {
    slug: 'deal-machine',
    title: 'THE DEAL MACHINE',
    subtitle: "The Active Investor's Playbook for Making Money in Any Market",
    color: '#B8860B',
  },
  {
    slug: 'wealth-shift',
    title: 'THE WEALTH SHIFT',
    subtitle: 'How to Reposition Your Money from Wall Street to Main Street',
    color: '#B8860B',
  },
  {
    slug: 'foundation',
    title: 'THE FOUNDATION',
    subtitle: 'The Complete Financial Blueprint for Future Investors',
    color: '#B8860B',
  },
];

function buildCoverPage(product) {
  return `
    <div class="cover-page">
      <div class="brand-line"></div>
      <h1 style="border: none; page-break-before: avoid; margin-top: 0;">${product.title}</h1>
      <div class="subtitle">${product.subtitle}</div>
      <div class="brand-line"></div>
      <div class="author">J. Marque</div>
      <div class="credentials">
        $250M+ in Real Estate Transactions<br>
        USMC Combat Veteran<br>
        Wholesaler &bull; Flipper &bull; Landlord &bull; Title Company Owner &bull; Consultant
      </div>
    </div>
  `;
}

function buildCopyrightPage() {
  const year = new Date().getFullYear();
  return `
    <div class="copyright-page">
      <p>&copy; ${year} J. Marque. All rights reserved.</p>
      <p>No part of this publication may be reproduced, distributed, or transmitted in any form
      without prior written permission of the author, except for brief quotations in reviews.</p>
      <p>This book is for educational purposes only and does not constitute financial, investment,
      or legal advice. The strategies and case studies are based on real-world scenarios but
      individual results vary. Always consult qualified professionals before making investment decisions.</p>
      <p>Published by J. Marque</p>
    </div>
  `;
}

function extractTOC(markdown) {
  const modules = [];
  const lines = markdown.split('\n');
  for (const line of lines) {
    // Match # MODULE lines or ## MODULE lines
    const moduleMatch = line.match(/^#{1,2}\s+(MODULE\s+\d+[:\s].+)/i);
    if (moduleMatch) {
      modules.push(moduleMatch[1].trim());
      continue;
    }
    // Match top-level sections that are significant
    const sectionMatch = line.match(/^#\s+((?:A NOTE|HOW TO USE|INTRODUCTION|CONCLUSION|ABOUT|TABLE OF CONTENTS|CONTENTS).+)/i);
    if (sectionMatch) {
      modules.push(sectionMatch[1].trim());
    }
  }
  return modules;
}

function buildTOCPage(tocItems) {
  const items = tocItems.map(item => {
    const isModule = /^MODULE/i.test(item);
    return `<div class="toc-item">
      <span class="${isModule ? 'toc-module' : 'toc-title'}">${item}</span>
    </div>`;
  }).join('\n');

  return `
    <div class="toc-page">
      <h2 style="page-break-before: avoid;">Contents</h2>
      ${items}
    </div>
  `;
}

function processMarkdown(markdown) {
  // Remove the first title block (we render our own cover)
  // Find the first --- after the initial metadata section
  let content = markdown;

  // Configure marked
  marked.setOptions({
    gfm: true,
    breaks: false,
  });

  return marked.parse(content);
}

async function generatePDF(product, manuscriptPath, outputPath) {
  console.log(`\n📄 Generating PDF: ${product.title}`);
  console.log(`   Source: ${manuscriptPath}`);

  const markdown = fs.readFileSync(manuscriptPath, 'utf8');
  const tocItems = extractTOC(markdown);
  const htmlContent = processMarkdown(markdown);

  const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>${CSS_STYLES}</style>
</head>
<body>
  ${buildCoverPage(product)}
  ${buildCopyrightPage()}
  ${tocItems.length > 0 ? buildTOCPage(tocItems) : ''}
  <div class="content">
    ${htmlContent}
  </div>
</body>
</html>`;

  // Write HTML for debugging
  const htmlPath = outputPath.replace('.pdf', '.html');
  fs.writeFileSync(htmlPath, fullHTML);
  console.log(`   HTML saved: ${htmlPath}`);

  // Launch browser and generate PDF
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(fullHTML, { waitUntil: 'networkidle' });

  await page.pdf({
    path: outputPath,
    format: 'Letter',
    margin: { top: '0.85in', bottom: '0.85in', left: '0.85in', right: '0.85in' },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: `
      <div style="width: 100%; text-align: center; font-size: 9pt; color: #999; font-family: Georgia, serif;">
        <span class="pageNumber"></span>
      </div>
    `,
  });

  await browser.close();

  const stats = fs.statSync(outputPath);
  console.log(`   ✅ PDF saved: ${outputPath} (${(stats.size / 1024).toFixed(0)} KB)`);
}

async function main() {
  console.log('=== Money Decoded — PDF Generator ===\n');

  const baseDir = path.resolve(__dirname, '../../business/funnel/products');

  for (const product of PRODUCTS) {
    const manuscriptPath = path.join(baseDir, product.slug, 'manuscript.md');
    const outputDir = path.join(baseDir, product.slug, 'deliverables');
    const outputPath = path.join(outputDir, `${product.slug}.pdf`);

    if (!fs.existsSync(manuscriptPath)) {
      console.error(`❌ Manuscript not found: ${manuscriptPath}`);
      continue;
    }

    await generatePDF(product, manuscriptPath, outputPath);
  }

  console.log('\n=== All PDFs generated ===');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
