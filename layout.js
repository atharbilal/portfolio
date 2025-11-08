// --- Portfolio JS: Clean and Minimal ---
document.addEventListener('DOMContentLoaded', function() {
  // --- NAV ACCESSIBILITY ---
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        this.click();
      }
    });
  });

  // --- ENTRY ANIMATIONS ---
  const sections = document.querySelectorAll('section');
  sections.forEach((sec, idx) => {
    if (idx % 2 === 0) {
      sec.classList.add('section-animate-fade');
    } else {
      sec.classList.add('section-animate-left');
    }
  });
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, idx) => {
    card.classList.add(idx % 2 === 0 ? 'section-animate-left' : 'section-animate-right');
  });

  // --- DARK MODE ICON LOGIC (Always dark) ---
  const toggle = document.getElementById('darkmode-toggle');
  if (toggle) {
    toggle.textContent = '🌙';
    toggle.title = 'Dark mode enabled.';
    toggle.setAttribute('aria-pressed','true');
    toggle.addEventListener('click', function() {
      alert('The site uses only dark theme for a premium Apple-like look!');
    });
  }

  // --- CONTACT FORM HANDLER ---
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Message sent! (Portfolio demo: add real email backend for production.)');
      form.reset();
    });
  }

  // --- PARALLAX EFFECT FOR BACKGROUND ---
  document.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.body.style.backgroundPosition = `${50 + (x-0.5)*10}% ${50 + (y-0.5)*8}%`;
  });
  window.addEventListener('mouseleave', function() {
    document.body.style.backgroundPosition = 'center center';
  });
});
