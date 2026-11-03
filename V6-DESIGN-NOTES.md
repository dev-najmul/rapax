# RAPAX / Hyperion Munitions — V6 Design Notes

## Approved visual base

- **Homepage:** kept from linked V5/V4 exactly as requested. Only the four THE LINEUP model headings receive a white text contrast override from `v6.css`.
- The existing homepage header, footer, hero and all other sections are not redesigned in V6.
- The overall visual language follows the Hyperion brand guide: Hyperion black `#0F1010`, red `#D73C31`, gray `#5E6364`, white `#F1F2F2`, with secondary charcoal/light gray/dark red.
- Hyperion Munitions uses the client-provided horizontal logo as primary. DECIMA is represented as Italian manufacturer.
- Display headings request **Ethnocentric** and body text requests **Encode Sans**. Ethnocentric font file was not supplied and is NOT bundled; system fallback renders until an appropriately licensed file is added by the client/developer.

## Source grounding

- Client conversation from `project-discussion.md (11).docx` (Oct 21–22, 2026).
- Client `Hyperion-Branding-Guidelines 8.pdf` (brand visual guidance, colors, font names, company details, tone).
- Client `Decima_Catalog RAPAX 2024-LowRes _Web.pdf` (RAPAX pictures and descriptions; catalog pages exported only from the user-supplied file).
- Client `RAPAX logo-Decima logo-Tech Specs.pdf` (Sport/Tactical/RAPAX II Compact family reference specifications).
- Client V4 visual direction and V5 navigation source.
- Reference website `https://www.decimadb.com/rapax/` as an inspiration only; not copied as a site template.

## Final V6 page inventory

### Main site & browsing

1. `index.html` — homepage (preserved V4/V5 layout; model headings fixed)
2. `shop.html` — redesigned collection / shop overview and category filters
3. `categories.html` — product category overview
4. `accessories.html` — barrels and extra magazines category presentations
5. `cart.html` — non-transactional visual cart preview; **no checkout**
6. `about.html` — Hyperion + DECIMA story and the brand's six client-supplied values
7. `compare.html` — full catalog-sourced comparison, Polymer pending

### Product detail pages

8. `sport.html`
9. `tactical.html`
10. `compact.html`
11. `polymer.html` — only client-confirmed scope; final client imagery & specs pending

### Support & editorial

12. `faq.html` — grouped, functioning native accordion
13. `contact.html` — actual input controls, visual/demo-only submission (no message sent)
14. `blog.html` — journal listing
15. `story-italian-engineering.html`
16. `story-models.html`
17. `story-design.html`

### Policy draft pages

18. `shipping-policy.html`
19. `return-policy.html`
20. `privacy-policy.html`
21. `terms.html`

### Review utility

22. `all-pages.html` — prototype-only navigation directory

## Interactive design behavior

- Shop collection filter can select all, pistols, or accessories.
- Product detail photography gallery uses clickable thumbnails.
- FAQ has native details/summary expand/collapse behavior.
- Contact form inputs have validation and submit a **prototype notice**, not a real message.
- Existing linked homepage interactions and responsive menu continue from V5.
- All navigation is linked; all pages are reachable from the review directory and footer.

## Critical missing client information — do not fabricate

- Final per-model list of available colors, grip variants and sights.
- Model-specific optional-price rules, actual prices and final stock availability.
- All final photos/specifications for Compact Polymer, and model-specific U.S. product approvals.
- Final accessory SKU list, compatibility and prices.
- The precise online shipping and refund conditions and legally approved policy language.
- Final website form integration, hosting, Authorize.net credentials, and WooCommerce live setup.
- Final product photo/text permission from DECIMA (asked in discussion, not confirmed in shared text).

## Scope control / what V6 is NOT

- **Design prototype only.** It does not accept real orders, process payment, add items into a live WooCommerce cart or submit checkout data.
- No checkout page was created because the user explicitly excluded it from the design phase.
- Policy pages are visibly marked as draft and require client legal review.
- State restriction configuration, FFL data collection, WooCommerce shipping and Authorize.net processing are for the later implementation stage, not working features in this HTML package.
- No invented product price, stock, sale badge, fabricated review, or unsupported configuration has been introduced.

## V7 / implementation handoff notes

When design is approved, the next phase is to translate the templates into WordPress + WooCommerce, create product attributes/variations from the client's actual spreadsheet and photography, configure form notifications, FFL checkout fields, payment provider, shipping restrictions, policies, SEO, speed, mobile QA and launch procedures. Those actions are not performed by this design package.
