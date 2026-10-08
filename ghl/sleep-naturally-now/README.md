# Sleep Naturally Now landing page, rebuilt for GoHighLevel

Rebuilt from https://shopsleepnaturallynow.com/pages/landingpage (the Shopify "Sense" theme), with no Shopify scripts.

## Two ways to paste it

**Quick:** copy everything in `full-page.html` into a single **Custom HTML/Javascript** element.

**Editable (recommended):** add one full-width GHL section per file, each with a Custom HTML element, in this order:

| File | Section |
|---|---|
| `00-styles.html` | Fonts and styles. Must come first. |
| `01-header.html` | Announcement bar and logo (optional) |
| `02-hero.html` | Hero image + "Download My Free Sleep Ritual" button |
| `03-sleep-reset-ritual.html` | Guide image + text + "Get the Free Guide" button |
| `04-banner.html` | Full-width banner image |
| `05-testimonials.html` | "Real Stories from Real People", 4 images |
| `06-closing-banner.html` | Closing full-width image |
| `07-newsletter.html` | Newsletter heading. Paste your GHL form embed inside. |

## Before going live

1. In each GHL section, set the width to **Full Width** and the padding to **0**. The code adds its own spacing.
2. **Images:** they still load from the Shopify store. Upload them to GHL **Media Storage** and swap each `src` URL. Otherwise they break if the Shopify store closes.
3. **Buttons** link to `shopsleepnaturallynow.com/pages/resources`. Change them to your GHL opt-in page.
4. **Newsletter:** the Shopify form can't work in GHL. Paste the embed code from a GHL form (Sites → Forms → Integrate) where the comment says.
5. Left out on purpose: the Shopify menu, search, account and cart icons.
