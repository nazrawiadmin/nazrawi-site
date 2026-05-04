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

  /* --- Image Carousel --- */
  var track = document.getElementById('carousel-track');
  var slides = track.querySelectorAll('.carousel-slide');
  var prevBtn = document.getElementById('carousel-prev');
  var nextBtn = document.getElementById('carousel-next');
  var dotsContainer = document.getElementById('carousel-dots');
  var currentIndex = 0;
  var slideCount = slides.length;
  var autoplayInterval = null;

  // Build dots
  for (var i = 0; i < slideCount; i++) {
    var dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
  }

  var dots = dotsContainer.querySelectorAll('.carousel-dot');

  function goToSlide(index) {
    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;
    currentIndex = index;
    track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    dots.forEach(function (d, idx) {
      d.classList.toggle('active', idx === currentIndex);
    });
  }

  prevBtn.addEventListener('click', function () {
    goToSlide(currentIndex - 1);
    resetAutoplay();
  });

  nextBtn.addEventListener('click', function () {
    goToSlide(currentIndex + 1);
    resetAutoplay();
  });

  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('carousel-dot')) {
      goToSlide(parseInt(e.target.dataset.index, 10));
      resetAutoplay();
    }
  });

  // Touch / swipe support
  var touchStartX = 0;
  var touchEndX = 0;

  track.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', function (e) {
    touchEndX = e.changedTouches[0].screenX;
    var diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(currentIndex - 1);
      }
      resetAutoplay();
    }
  }, { passive: true });

  // Autoplay
  function startAutoplay() {
    autoplayInterval = setInterval(function () {
      goToSlide(currentIndex + 1);
    }, 5000);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  startAutoplay();

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
