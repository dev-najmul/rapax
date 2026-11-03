'use strict';
// Static design prototype: no checkout, no payment, no live ordering.
document.querySelectorAll('[data-main-image]').forEach(button => {
  button.addEventListener('click', () => {
    const image = document.querySelector('#productMain');
    if (!image) return;
    image.src = button.dataset.mainImage;
    image.alt = button.dataset.imageAlt || image.alt;
    document.querySelectorAll('[data-main-image]').forEach(b => b.classList.toggle('active', b === button));
  });
});
const filterButtons = document.querySelectorAll('[data-collection-filter]');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const value = button.dataset.collectionFilter;
  filterButtons.forEach(b => b.classList.toggle('is-on', b === button));
  document.querySelectorAll('.v6-shop-grid').forEach(el => { el.hidden = value === 'accessories'; });
  document.querySelectorAll('[data-filter-section="accessories"]').forEach(el => { el.hidden = value === 'pistols'; });
}));
const contactForm = document.querySelector('#demoContact');
if (contactForm) contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const status = document.querySelector('#demoFormStatus');
  if (status) status.textContent = 'Design preview only. No message was sent. The live form will be connected during the WordPress phase.';
});
