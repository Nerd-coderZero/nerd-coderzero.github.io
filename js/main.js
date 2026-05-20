/* Portfolio — main.js */

(function () {
  'use strict';

  /* --- Dark mode toggle --- */
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  if (stored) root.setAttribute('data-theme', stored);

  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  /* --- Nav scroll state --- */
  const nav = document.getElementById('nav');
  function handleNavScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* --- Mobile menu toggle --- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  let menuOpen = false;

  function openMenu() {
    menuOpen = true;
    mobileMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
  }

  function closeMenu() {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }

  hamburger.addEventListener('click', function () {
    menuOpen ? closeMenu() : openMenu();
  });
  mobileLinks.forEach(function (link) { link.addEventListener('click', closeMenu); });

  /* --- Animated stat counters --- */
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1400;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-num[data-count]').forEach(function (el) {
    counterObserver.observe(el);
  });

  /* --- Skill tier bar animation --- */
  const skillBarObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-tier-fill').forEach(function (fill) {
          fill.classList.add('animate');
        });
        skillBarObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.skill-group').forEach(function (el) {
    skillBarObserver.observe(el);
  });

  /* --- Scroll reveal ---
     Uses a generous rootMargin so elements trigger before they reach
     the viewport edge, preventing invisible-content gaps. No stagger
     on the metrics strip — it reveals immediately as a unit. */
  const revealTargets = [
    '.section-header', '.about-portrait', '.about-text',
    '.timeline-item', '.project-card', '.post-item',
    '.contact-text', '.contact-details',
  ];
  revealTargets.forEach(function (selector) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.classList.add('reveal');
    });
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });

  /* --- Staggered project card reveal (capped to avoid long waits) --- */
  document.querySelectorAll('.project-card').forEach(function (card, i) {
    card.style.transitionDelay = Math.min(i * 0.07, 0.35) + 's';
  });

  /* --- Active nav link highlight on scroll --- */
  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav-links a');

  function updateActiveNav() {
    let currentId = '';
    sections.forEach(function (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom > 100) currentId = section.getAttribute('id');
    });
    navLinkEls.forEach(function (link) {
      link.style.color = '';
      if (link.getAttribute('href') === '#' + currentId) link.style.color = 'var(--accent)';
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });

})();
