# Sleep Naturally Now landing page, v2 (redesign for GoHighLevel)

A redesign of the landing page, built from the same content. It uses a night-sky theme, Cormorant Garamond headings with Poppins body text, and the brand's plum and gold colors. Headlines are live text and the artwork is SVG, so they stay sharp on any screen.

Open `preview.html` in a browser to see the whole page.

## Two ways to paste it

**Quick:** copy everything in `full-page.html` into one **Custom HTML/Javascript** element.

**Editable (recommended):** add one full-width GHL section per file, each with a Custom HTML element, in this order:

| File | Section |
|---|---|
| `00-styles.html` | Fonts and styles. Must come first. |
| `01-nav.html` | Top bar: logo + "Free Guide" button (optional) |
| `02-hero.html` | Night-sky hero: headline, two buttons, guide image |
| `03-guide.html` | The Sleep Reset Ritual + 3 cards |
| `04-calm-band.html` | "Your nights can feel calm again" band |
| `05-stories.html` | Testimonials: 2×2 on desktop, swipe carousel on phones |
| `06-meet-michele.html` | About Michele |
| `07-final-cta.html` | Closing call to action |
| `08-newsletter.html` | Newsletter card. Replace the placeholder with your GHL form embed. |
| `09-footer.html` | Footer |

## Before going live

1. In each GHL section, set the width to **Full Width** and the padding to **0**.
2. **Buttons** point to `shopsleepnaturallynow.com/pages/resources`. Change them to your GHL opt-in page.
3. **Newsletter:** replace the dashed placeholder with your GHL form embed code (Sites → Forms → Integrate).
4. **Meet Michele:** the circle shows the logo for now. Swap in a square photo of Michele (at least 1000×1000px).
5. **Images** still load from Shopify at full resolution. If you move them into GHL Media Storage, upload the original full-size files.
