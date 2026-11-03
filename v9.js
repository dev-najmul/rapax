/* V9: homepage selector visual sync. Brand page and header account links use static navigation.
   Cart badge updates through the already-existing V8 local review-cart state. */
(() => {
  'use strict';
  const rail = document.querySelector('.focus-switcher-v9');
  if (!rail) return;
  const number = document.getElementById('v9ActiveNumber');
  const progress = document.getElementById('v9SelectionProgress');
  const detail = document.getElementById('v9FocusDetailLink');
  const modelLinks = {
    sport: {index: 1, name: 'SPORT', file: 'sport.html'},
    tactical: {index: 2, name: 'TACTICAL', file: 'tactical.html'},
    compact: {index: 3, name: 'COMPACT', file: 'compact.html'},
    polymer: {index: 4, name: 'POLYMER', file: 'polymer.html'}
  };
  function sync(key) {
    const model = modelLinks[key];
    if (!model) return;
    rail.dataset.active = key;
    if (number) number.textContent = String(model.index).padStart(2, '0');
    if (progress) progress.style.width = `${model.index * 25}%`;
    if (detail) {
      detail.textContent = '';
      detail.append(document.createTextNode(`VIEW ${model.name} DETAILS `));
      const arrow = document.createElement('span');
      arrow.setAttribute('aria-hidden', 'true');
      arrow.textContent = '↗';
      detail.appendChild(arrow);
      detail.href = model.file;
    }
  }
  document.querySelectorAll('[data-model]').forEach(button => {
    button.addEventListener('click', () => sync(button.dataset.model));
  });
  sync('sport');
})();
