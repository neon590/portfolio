/* =============================================
   Yuki Writes Portfolio - script.js
   ============================================= */

// ---- Header scroll effect ----
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { passive: true });

// ---- Hamburger menu ----
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-mobile');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navMobile.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  navMobile.setAttribute('aria-hidden', !isOpen);
});

// Close mobile nav on link click
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMobile.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    navMobile.setAttribute('aria-hidden', true);
  });
});

// ---- Scroll animation ----
const fadeEls = document.querySelectorAll('.service-card, .work-card, .strength-item, .pricing-card, .flow-step, .testimonial-card, .profile-inner, .contact-inner');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in', 'visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${(i % 3) * 0.08}s`;
  observer.observe(el);
});

// ---- Smooth scroll (href="#...") ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const headerH = header.offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - headerH - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
