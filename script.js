// Mostrar respuestas
let botones = document.querySelectorAll('.revelar');

for (let i = 0; i < botones.length; i++) {
  botones[i].onclick = () => {
    let respuesta = botones[i].nextElementSibling;

    if (respuesta.style.display == 'block') {
      respuesta.style.display = 'none';
      botones[i].textContent = 'Revelar respuesta';
    } else {
      respuesta.style.display = 'block';
      botones[i].textContent = 'Ocultar respuesta';
    }
  };
}

// Filtros
let botonesFiltro = document.querySelectorAll('.filtros .btn');
let tarjetas = document.querySelectorAll('.tarjeta');

for (let i = 0; i < botonesFiltro.length; i++) {
  botonesFiltro[i].onclick = () => {
    for (let j = 0; j < botonesFiltro.length; j++) {
      botonesFiltro[j].classList.remove('activo');
    }

    botonesFiltro[i].classList.add('activo');
    let tipo = botonesFiltro[i].dataset.filter;

    for (let k = 0; k < tarjetas.length; k++) {
      if (tipo == 'todos' || tarjetas[k].classList.contains(tipo)) {
        tarjetas[k].style.display = 'inline-block';
      } else {
        tarjetas[k].style.display = 'none';
      }
    }
  };
}

// Navegación simple
let navLinks = document.querySelectorAll('.nav-link');

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = () => {
    for (let j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove('active');
    }
    navLinks[i].classList.add('active');
  };
}
