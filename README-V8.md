# RAPAX / Hyperion — Prototype V8

## Run locally
Unzip and open `site/index.html`. The pages are linked and require no build step. For consistent browser-local storage, you can optionally run a local server from the `site` folder: `python -m http.server 8000` and open `http://localhost:8000/`. No server endpoint or checkout is implemented.

## V8 changes
- `sport.html`, `tactical.html`, `compact.html`, `polymer.html`: left gallery sticky on desktop and more compact, thumbnail image index, working technical-specification anchor and navigation, live local review-cart counter and add interaction.
- `cart.html`: fully redesigned hero, interactive cart-review line items with quantity +/- and remove, responsive summary.
- `v8.css` and `v8.js`: targeted visual changes and UI behavior without changing homepage visual layout.
- All pages include `v8.js` solely so the local review cart persists across navigation, including file:// browsers where storage may be isolated (via a small `review=` URL query state with model IDs and quantities only).

## Boundaries
This is a browser-local design demonstration, not a working firearm store. No orders, payments, checkout, dealer collection, stock/pricing calculations, inventory updates, or data submissions are implemented. The final variations and prices must be supplied and approved by the client.
