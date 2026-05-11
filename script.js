/* ════════════════════════════════════════════════════════════════ */
/* WESBURY COLLEGE OF SCIENCE - JAVASCRIPT                          */
/* ════════════════════════════════════════════════════════════════ */

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let current = 0;

/**
 * Navigate to a specific slide
 * @param {number} n - The slide index to navigate to
 */
function goTo(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

// Event listeners for carousel controls
document.getElementById('prev').addEventListener('click', () => goTo(current - 1));
document.getElementById('next').addEventListener('click', () => goTo(current + 1));

// Add click listeners to all dots
dots.forEach(d => d.addEventListener('click', () => goTo(+d.dataset.i)));

// Auto-advance carousel every 6 seconds
setInterval(() => goTo(current + 1), 6000);

  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
