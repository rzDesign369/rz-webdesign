// ── Nav scroll effect ──
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Scroll reveal ──
const reveals  = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// ── Contact form ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Gesendet ✓';
  btn.style.background = '#22C55E';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Nachricht senden ↗';
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 3500);
}
