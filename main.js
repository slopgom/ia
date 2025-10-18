// =========================
// SCROLL SUAVE ENLACES-MENÚ Y BOTÓN
// =========================
const enlaces = document.querySelectorAll('a[href^="#"]');
const btnExplorar = document.getElementById('explorarBtn');

enlaces.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

if (btnExplorar) {
  btnExplorar.addEventListener('click', () => {
    const historia = document.getElementById('historia');
    if (historia) {
      historia.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// =========================
// RESALTAR SECCIÓN ACTIVA DEL MENÚ
// =========================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});
