const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const zoomBtns = document.querySelectorAll('.zoom-btn');
const lightboxClose = document.querySelector('.lightbox-close');

zoomBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var img = btn.closest('.inner-card-img-wrapper').querySelector('.inner-card-img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
  });
});

lightboxClose.addEventListener('click', function() {
  lightbox.classList.remove('active');
});

lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});

const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', function() {
  var expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('nav-open');
});

document.querySelectorAll('.nav-link').forEach(function(link) {
  link.addEventListener('click', function() {
    menuToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('nav-open');
  });
});

const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  formFeedback.innerHTML = 'Hasta la finalización de la corrección de este trabajo de Diseño de Sistemas Web (FrontEnd) no se podrá utilizar este formulario de contacto. ¡Pero te invito a conectar conmigo en <a href="#network">mis redes</a>!';
  formFeedback.classList.remove('hidden');
  contactForm.classList.add('hidden');
});
