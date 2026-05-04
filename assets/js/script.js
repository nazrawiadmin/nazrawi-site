/* ============================================
   Nazrawi Ethiopian Restaurant - JavaScript
   ============================================ */

(function () {
  'use strict';

  /* --- Sticky Header --- */
  const header = document.getElementById('site-header');

  function handleScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* --- Mobile Nav Toggle --- */
  const navToggle = document.getElementById('nav-toggle');
  const headerNav = document.getElementById('header-nav');

  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('active');
    headerNav.classList.toggle('open');
  });

  // Close nav when a link is clicked
  headerNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('active');
      headerNav.classList.remove('open');
    });
  });

  /* --- Gallery band is CSS-animated, no JS needed --- */

  /* --- Smooth Scroll for Anchor Links --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerHeight = header.offsetHeight;
        var targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

})();
