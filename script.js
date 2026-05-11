/* ========================================================= */
/* TESTIMONIAL CAROUSEL */
/* ========================================================= */

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let current = 0;

function goTo(n) {

  slides[current].classList.remove('active');
  dots[current].classList.remove('active');

  current = (n + slides.length) % slides.length;

  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

document.getElementById('prev').addEventListener('click', () => {
  goTo(current - 1);
});

document.getElementById('next').addEventListener('click', () => {
  goTo(current + 1);
});

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    goTo(+dot.dataset.i);
  });
});

setInterval(() => {
  goTo(current + 1);
}, 6000);

/* ========================================================= */
/* MOBILE MENU */
/* ========================================================= */

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
