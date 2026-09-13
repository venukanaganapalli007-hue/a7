document.addEventListener('DOMContentLoaded', () => {
  initMobileDrawer();
  initHeaderScroll();
  initCollectionFilter();
  initFaqAccordions();
  initContactForm();
});
function initMobileDrawer() {
  const toggleBtn = document.getElementById('drawer-toggle');
  const closeBtn = document.getElementById('drawer-close');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');
  if (!drawer) return;
  function openDrawer() { drawer.classList.add('open'); drawer.setAttribute('aria-hidden', 'false'); if (overlay) overlay.classList.add('active'); document.body.style.overflow = 'hidden'; }
  function closeDrawer() { drawer.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true'); if (overlay) overlay.classList.remove('active'); document.body.style.overflow = ''; }
  if (toggleBtn) toggleBtn.addEventListener('click', (e) => { e.preventDefault(); openDrawer(); });
  if (closeBtn) closeBtn.addEventListener('click', (e) => { e.preventDefault(); closeDrawer(); });
  if (overlay) overlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer(); });
}
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => { if (window.scrollY > 20) header.classList.add('scrolled'); else header.classList.remove('scrolled'); });
}
function initCollectionFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-item');
  if (!filterBtns.length || !productCards.length) return;
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const val = btn.getAttribute('data-filter');
      productCards.forEach(card => {
        if (val === 'all' || card.getAttribute('data-category').includes(val)) { card.style.display = ''; setTimeout(() => { card.style.opacity = '1'; }, 10); }
        else { card.style.opacity = '0'; card.style.display = 'none'; }
      });
    });
  });
}
function initFaqAccordions() {
  const btns = document.querySelectorAll('.faq-question');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const active = item.classList.contains('active');
      item.parentElement.querySelectorAll('.faq-item').forEach(o => { if (o !== item) o.classList.remove('active'); });
      if (active) item.classList.remove('active'); else item.classList.add('active');
    });
  });
}
function initContactForm() {
  const form = document.getElementById('concierge-form');
  const fb = document.getElementById('form-feedback');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('client-name');
    if (fb && name) {
      fb.style.display = 'block';
      fb.innerHTML = `<strong>Thank you, ${name.value.trim()}.</strong> Your bespoke consultation inquiry has been transmitted to our Manhattan Atelier at 181 Mercer Street. An artisan concierge will respond within 4 business hours.`;
    }
    form.reset();
  });
}
