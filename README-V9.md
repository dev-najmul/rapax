# RAPAX / Hyperion Munitions — V9 Design Prototype

## Start here
Unzip the archive. Open `RAPAX-Hyperion-V9/site/index.html` in a modern desktop or mobile browser. The **All Pages** link in the footer offers a directory of the prototype pages. Click the profile icon in the header to open `account.html`; click the bag icon to open the local cart prototype.

## What changed from V8
- **Header:** Added minimal circular **Account** and **Cart** icons on every page. The cart count uses the existing local review-cart state. The account icon opens an account experience preview, not a real login.
- **Homepage model spotlight:** Rebuilt the bottom selector as an understated four-model editorial rail, active red underline, subtle pointer states, model index, progress rule and direct detail-page link. Clicking a model continues to update the image, heading, specification highlights and links.
- **About page:** Reorganized the original client-backed material with a new editorial hero, manufacturer/distributor branding pairing, RAPAX origin story, full Hyperion Mission and Vision statements, six brand values and a refined collection call-to-action.
- **Account page:** Added `account.html`, a non-authenticating design preview. Real sign-in, registration, customer data and order history require WordPress/WooCommerce implementation.

## Brand and content fidelity
- Hyperion is the primary brand logo. DECIMA/XDB is identified as the Italian manufacturer.
- Palette continues to use Hyperion Red `#D73C31`, Black `#0F1010`, Gray `#5E6364` and White `#F1F2F2` from the uploaded guide.
- The guide calls for Ethnocentric as the title typeface and Encode Sans for body text. Licensed Ethnocentric webfont assets were not provided, so CSS uses a fallback font in this prototype.
- Product photography is sourced from the client-supplied RAPAX 2024 manufacturer catalog in the earlier design package.
- About page's mission and vision content comes from the client brand guidelines; manufacturer origin details come from the RAPAX catalog; distribution role comes from the client conversation.
- Polymer model imagery/pricing and live store variation data remain pending confirmation; the prototype does not fabricate them.

## What's *not* live
No real account authorization, checkout, payment, FFL transfer, product stock or firearm transaction. V8's local review cart continues to work as a design/demo interaction only. The full eCommerce functionality belongs to the WordPress implementation phase.

## Files
- `index.html` — homepage (V8 base, targeted V9 selector + header changes)
- `about.html` — redesigned About page
- `account.html` — account preview
- `cart.html` — local review cart from V8
- All other previously approved V8 pages preserved
- `v9.css` and `v9.js` — isolated visual refinement and selector interaction
- `V9-DESIGN-QA.md` — validation details
