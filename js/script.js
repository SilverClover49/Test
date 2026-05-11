const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  nav.querySelector('.nav-links').classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.querySelector('.nav-links').classList.remove('active');
  });
});

const form = document.querySelector('.contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  form.innerHTML = '<p style="color: var(--color-primary); font-size: 1.1rem;">Thanks for reaching out! I\'ll get back to you soon.</p>';
});
