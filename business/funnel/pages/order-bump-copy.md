# Order Bump Copy -- Audio Trilogy Kit ($9)

## Placement
Checkbox section on the $7 trilogy checkout page. Appears below the order summary, above the payment button.

---

## ORDER BUMP BOX

### Checkbox Label
**Add the Audio Trilogy -- $9**

### Headline (inside the bump box)
**Listen to All 3 Books on the Go**

### Body Copy
The entire Money Decoded trilogy, narrated and ready for your earbuds. Same content. Different format. Built for the people who absorb better by listening.

### Bullet Points
- **Commute-ready:** Turn dead time into learning time. Listen during your drive, at the gym, or while cooking dinner.
- **Full narration:** All three books narrated start to finish. Not summaries. Not highlights. The complete trilogy in audio.
- **Retention boost:** Studies show people retain 20-30% more when they both read and listen. Pair the audio with the written trilogy and the material sticks.

### Price Line
**Just $9** -- added to your order instantly. No separate login. No extra steps.

### Fine Print (below checkbox)
One-time add-on. Delivered with your trilogy. MP3 format, download immediately.

---

## DESIGN SPECS FOR GHL / CHECKOUT PAGE

### Visual Container
- Background: `#111111`
- Border: `1px solid rgba(200, 168, 78, 0.2)`
- Border-left: `3px solid #c8a84e` (gold accent, matches module cards on sales pages)
- Border-radius: `6px`
- Padding: `20px 24px`
- Margin: `20px 0`

### Checkbox
- Custom styled, gold border (`#c8a84e`), gold fill when checked
- Size: `20px x 20px`
- Label: bold, white, `1rem`

### Headline
- Font-size: `1.05rem`
- Font-weight: `700`
- Color: `#ffffff`
- Margin-bottom: `8px`

### Body Copy
- Font-size: `0.9rem`
- Color: `rgba(255, 255, 255, 0.6)`
- Line-height: `1.6`

### Bullets
- Font-size: `0.88rem`
- Color: `rgba(255, 255, 255, 0.7)`
- Gold checkmark or bullet accent (`#c8a84e`)
- Padding-left: `20px`

### Price
- Font-size: `0.95rem`
- Font-weight: `700`
- Color: `#c8a84e`

### Fine Print
- Font-size: `0.72rem`
- Color: `rgba(255, 255, 255, 0.3)`

---

## SAMPLE HTML SNIPPET

```html
<!-- Order Bump: Audio Trilogy Kit -->
<div style="background: #111; border: 1px solid rgba(200,168,78,0.2); border-left: 3px solid #c8a84e; border-radius: 6px; padding: 20px 24px; margin: 20px 0; font-family: 'Segoe UI', system-ui, sans-serif;">

  <label style="display: flex; align-items: center; gap: 12px; cursor: pointer; margin-bottom: 14px;">
    <input type="checkbox" name="order_bump_audio" value="1" style="width: 20px; height: 20px; accent-color: #c8a84e; cursor: pointer;">
    <span style="font-size: 1rem; font-weight: 700; color: #fff;">Add the Audio Trilogy &mdash; $9</span>
  </label>

  <div style="font-size: 1.05rem; font-weight: 700; color: #fff; margin-bottom: 8px;">Listen to All 3 Books on the Go</div>

  <p style="font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; margin: 0 0 14px;">The entire Money Decoded trilogy, narrated and ready for your earbuds. Same content. Different format. Built for the people who absorb better by listening.</p>

  <ul style="list-style: none; padding: 0; margin: 0 0 14px;">
    <li style="font-size: 0.88rem; color: rgba(255,255,255,0.7); padding: 6px 0 6px 20px; position: relative;">
      <span style="position: absolute; left: 0; color: #c8a84e; font-weight: 700;">&#10003;</span>
      <strong>Commute-ready:</strong> Turn dead time into learning time.
    </li>
    <li style="font-size: 0.88rem; color: rgba(255,255,255,0.7); padding: 6px 0 6px 20px; position: relative;">
      <span style="position: absolute; left: 0; color: #c8a84e; font-weight: 700;">&#10003;</span>
      <strong>Full narration:</strong> All three books, start to finish. Not summaries.
    </li>
    <li style="font-size: 0.88rem; color: rgba(255,255,255,0.7); padding: 6px 0 6px 20px; position: relative;">
      <span style="position: absolute; left: 0; color: #c8a84e; font-weight: 700;">&#10003;</span>
      <strong>Retention boost:</strong> Read + listen = 20-30% better retention.
    </li>
  </ul>

  <div style="font-size: 0.95rem; font-weight: 700; color: #c8a84e; margin-bottom: 6px;">Just $9 &mdash; added to your order instantly.</div>

  <p style="font-size: 0.72rem; color: rgba(255,255,255,0.3); margin: 0;">One-time add-on. Delivered with your trilogy. MP3 format, download immediately.</p>

</div>
```
