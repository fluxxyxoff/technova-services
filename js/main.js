// JavaScript progressif : le contenu des pages reste visible sans JS.
const toggle = document.querySelector('[data-menu-toggle]');
const navigation = document.querySelector('[data-navigation]');
if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) {
      toggle.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    }
  });
}

// Filtrage instantané des six services, sans serveur ni bibliothèque externe.
const search = document.querySelector('[data-service-search]');
const cards = [...document.querySelectorAll('[data-service-category]')];
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const count = document.querySelector('[data-service-count]');
const empty = document.querySelector('[data-service-empty]');
if (search && cards.length) {
  let category = 'tous';
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  function updateServices() {
    const query = normalize(search.value);
    let visible = 0;
    cards.forEach(card => {
      const categoryMatches = category === 'tous' || card.dataset.serviceCategory === category;
      const textMatches = normalize(card.textContent).includes(query);
      const show = categoryMatches && textMatches;
      card.hidden = !show;
      if (show) visible++;
    });
    if (count) count.textContent = `${visible} service${visible > 1 ? 's' : ''} affiché${visible > 1 ? 's' : ''}`;
    if (empty) empty.hidden = visible !== 0;
  }
  search.addEventListener('input', updateServices);
  filterButtons.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.filter;
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    updateServices();
  }));
  updateServices();
}

// Formulaire pédagogique : validation côté navigateur, zéro transmission.
const demoForm = document.querySelector('[data-demo-form]');
if (demoForm) {
  const textarea = demoForm.querySelector('textarea[name="message"]');
  const counter = demoForm.querySelector('[data-message-counter]');
  const output = demoForm.querySelector('[data-form-status]');
  function updateCounter() {
    if (textarea && counter) counter.textContent = `${textarea.value.length} / 1000 caractères`;
  }
  textarea?.addEventListener('input', updateCounter);
  updateCounter();
  demoForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!demoForm.reportValidity()) return;
    if (output) {
      output.textContent = 'Simulation réussie ! Aucun message n’a été envoyé et aucune donnée n’a été sauvegardée.';
      output.setAttribute('role', 'status');
    }
    demoForm.reset();
    updateCounter();
  });
}
