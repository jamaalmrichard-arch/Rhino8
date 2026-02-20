# Vaulted Capital — Deployment & Editing Guide

## 🏗️ Going Live: Step by Step

### Step 1: Buy the Domain on GoDaddy
1. Go to [godaddy.com](https://www.godaddy.com/domains)
2. Search: **vaultedcapital.com**
3. Also grab **vaultedcap.com** as a redirect (optional backup)
4. Purchase with **Domain Privacy + Protection** (hides your personal info from WHOIS)
5. Cost: ~$12-20/year for .com

### Step 2: Set Up Hosting
**Recommended: GoDaddy Website Hosting (simplest since you're already there)**
1. Purchase a basic hosting plan (Economy or Deluxe, ~$6-12/month)
2. In your GoDaddy dashboard → **My Products** → **Web Hosting** → **Set Up**
3. Point your domain to your hosting (GoDaddy does this automatically if bought together)

**Alternative (Better Performance): Cloudflare Pages (Free)**
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Create account → New Project → Direct Upload
3. Upload `index.html` and your `/assets` folder
4. Connect your GoDaddy domain by changing nameservers to Cloudflare's

### Step 3: Upload the Website
**On GoDaddy Hosting:**
1. Go to cPanel → File Manager
2. Navigate to `public_html`
3. Upload `index.html`
4. Create an `/assets` folder and upload your images there

**File structure should look like:**
```
public_html/
├── index.html
├── og-image.jpg          (social sharing image, 1200x630px)
└── assets/
    ├── jamaal-richard-headshot.jpg
    ├── vault-reel.mp4     (optional video)
    └── investors/
        ├── investor-1.jpg
        ├── investor-2.jpg
        └── investor-3.jpg
```

### Step 4: Set Up Professional Email
1. GoDaddy dashboard → **Email** → **Get Started**
2. Choose Microsoft 365 or Professional Email
3. Create: `jamaal@vaultedcapital.com` (primary)
4. Also create: `invest@vaultedcapital.com`, `info@vaultedcapital.com`
5. Cost: ~$6-12/month per mailbox

### Step 5: Enable HTTPS/SSL
- **GoDaddy hosting**: SSL is usually included. Verify in dashboard → Security → SSL
- **Cloudflare**: Automatic and free
- This is **required** — browsers will show "Not Secure" without it

---

## 📸 Adding Your Photos

### Your Professional Headshot
1. Choose your best professional photo from Instagram/LinkedIn
2. Save it as `jamaal-richard-headshot.jpg` (at least 640x800px)
3. Upload to `/assets/` on your hosting
4. In `index.html`, find this comment:
```html
<!-- DEPLOYMENT: Replace this div with your professional headshot:
<img src="/assets/jamaal-richard-headshot.jpg" ...>
-->
```
5. **Uncomment** the `<img>` tag (remove `<!--` and `-->`)
6. **Delete** the placeholder `<div>` below it (the gray box with vault rings)

### Investor Testimonial Photos
For each testimonial, find the initials div like:
```html
<div style="width:48px;height:48px;border-radius:50%;...">J.M.</div>
```
Replace with:
```html
<img src="/assets/investors/investor-1.jpg" alt=""
     style="width:48px;height:48px;border-radius:50%;object-fit:cover;
            border:2px solid rgba(201,162,77,0.2);">
```

### Hero Video Background (Optional)
1. Find or create a 15-30 second video loop (vault doors, architectural metal, luxury interiors)
2. Compress to under 5MB (use [handbrake.fr](https://handbrake.fr))
3. Save as `vault-reel.mp4`, upload to `/assets/`
4. Find this in the HTML:
```html
<!-- DEPLOYMENT: Uncomment and replace src to add video background
<video class="hero__video" autoplay muted loop playsinline>
  <source src="/assets/vault-reel.mp4" type="video/mp4">
</video>
-->
```
5. Remove the comment markers (`<!--` and `-->`)

**Free stock video sources for vault/luxury footage:**
- [pexels.com/videos](https://www.pexels.com/videos/) (search: "vault door", "luxury architecture", "gold texture")
- [pixabay.com/videos](https://pixabay.com/videos/) (search: "safe deposit", "bank vault")
- [coverr.co](https://coverr.co) (search: "architecture", "luxury")

---

## ✏️ How to Edit the Website

### Method 1: Direct File Editing (Simplest)
1. Open `index.html` in any text editor:
   - **Mac**: TextEdit (switch to Plain Text mode), or [VS Code](https://code.visualstudio.com) (recommended)
   - **Windows**: Notepad, or [VS Code](https://code.visualstudio.com) (recommended)
   - **Online**: GoDaddy cPanel → File Manager → Right-click `index.html` → Edit
2. Make your changes
3. Save the file
4. Re-upload to your hosting (or it's already live if editing via cPanel)

### Method 2: VS Code (Recommended for Regular Editing)
1. Download [VS Code](https://code.visualstudio.com) (free)
2. Open `index.html`
3. Install "Live Server" extension to preview changes locally
4. Use **Ctrl+F** (or **Cmd+F** on Mac) to search for text you want to change
5. Edit, save, re-upload

### Common Edits:

**Change company name:**
Search for `VAULTED` and replace all instances

**Change hero headline:**
Find: `Real Assets.<br>Quiet <span class="gold">Discipline</span>.`
Replace text between the tags

**Change any section text:**
Use Ctrl+F to search for the exact text, then edit it

**Update testimonials:**
Search for `testimonial__attr` to find each testimonial attribution
Edit the quote text in the `<p>` tag above it

**Update contact/Calendly:**
Search for `DEPLOYMENT: Uncomment` to find the Calendly placeholder
Replace with your actual Calendly embed code

**Change colors:**
At the top of the file, find `:root {` — all colors are defined there:
```css
--gold-core: #C9A24D;    /* Main gold accent */
--gold-soft: #E3C77A;    /* Hover gold */
--black-void: #0B0B0D;   /* Darkest background */
--carbon: #141417;        /* Card backgrounds */
```

**Add Google Analytics:**
Add this before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');</script>
```

---

## 🔗 Connecting Your CRM

The website has a built-in webhook system. Search for `sendToWebhook` in the JavaScript.

### To connect to a CRM (GoHighLevel, HubSpot, etc.):
1. Find the `sendToWebhook` function in the JavaScript
2. Uncomment the `fetch()` call
3. Replace the URL with your CRM's webhook endpoint
4. All form data + lead score is sent automatically

### Lead scoring is built in:
- 70-100 = HOT (ready now + accredited + high capital)
- 40-69 = WARM (medium timeline, moderate capital)
- 0-39 = COOL (still learning, lower capital)

---

## ⚖️ CRITICAL: Before Going Live

### Securities Counsel Review
**DO NOT go live without having a securities attorney review:**
- All disclaimer language
- Testimonial disclosures (SEC Marketing Rule compliance)
- The application form and qualification process
- Any references to track record or investment performance
- 401(k)/IRA educational content accuracy

### Testimonial Requirements (SEC Marketing Rule)
For each real testimonial you add:
- Must be from an actual investor (not fabricated)
- Disclosure that investor was not compensated (or disclose if they were)
- Statement that experience may not be representative
- Risk disclosure (loss of principal, no guarantee)
- If you show their photo, get written consent

### Replace Placeholder Content
Search the HTML for `DEPLOYMENT:` — these are all items that need your real content:
1. Professional headshot
2. Investor photos (with consent)
3. Video background (optional)
4. Calendly URL
5. CRM webhook URL
6. Google Analytics ID
7. Social media links (if adding)

---

## 📁 File Quick Reference

| What | Where to Find It |
|------|------------------|
| All CSS styles | Top of `index.html` in `<style>` tags |
| Navigation links | Search for `nav__links` |
| Hero section | Search for `class="hero"` |
| Trust bar numbers | Search for `trust-bar__num` |
| Why Vaulted cards | Search for `Why "Vaulted"` |
| Three pathways | Search for `Three Investment Pathways` |
| Track record | Search for `Track Record` |
| Testimonials | Search for `Investor Perspectives` |
| Application form | Search for `page-contact` |
| 401(k) content | Search for `page-invest-sdira` |
| FAQ section | Search for `faq-item` |
| Footer | Search for `<footer` |
| All disclaimers | Search for `disclosure` or `disclaimer` |
| Lead scoring | Search for `calculateLeadScore` |
| Colors | Search for `:root` |

---

## 🚀 Launch Checklist

- [ ] Domain purchased (vaultedcapital.com)
- [ ] Hosting set up
- [ ] SSL/HTTPS enabled
- [ ] Professional email created
- [ ] index.html uploaded
- [ ] Professional headshot added
- [ ] Investor photos added (with consent)
- [ ] Securities attorney has reviewed all content
- [ ] Testimonials verified as real with proper disclosures
- [ ] Calendly URL connected
- [ ] CRM webhook connected
- [ ] Google Analytics added
- [ ] Test all forms (submit test entries)
- [ ] Test all navigation links
- [ ] Test on mobile phone
- [ ] og-image.jpg uploaded for social sharing
- [ ] Replace "Vaulted Capital" if using different name
