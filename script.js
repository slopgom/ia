// =========================
// GESTIÓN DE RESPUESTAS (REVELAR/OCULTAR)
// =========================

// Seleccionar todos los botones de la clase 'revelar'
const botonesRevelar = document.querySelectorAll('.revelar');

botonesRevelar.forEach((boton, index) => {
  // Enlazar el ID de respuesta para el atributo aria-controls
  const idRespuesta = `respuesta-${index + 1}`;
  const respuesta = boton.nextElementSibling;
  
  // Establecer el ID de la respuesta si no está ya en el HTML (Mejorado en el HTML)
  // respuesta.id = idRespuesta; 

  // Añadir un listener al botón
  boton.addEventListener('click', () => {
    // Alternar la visibilidad de la respuesta
    const esVisible = respuesta.style.display === 'block';

    if (esVisible) {
      respuesta.style.display = 'none';
      boton.textContent = 'Revelar respuesta';
      boton.setAttribute('aria-expanded', 'false'); // ARIA para indicar que el contenido está oculto
      respuesta.setAttribute('aria-hidden', 'true'); // ARIA para ocultar la respuesta
    } else {
      respuesta.style.display = 'block';
      boton.textContent = 'Ocultar respuesta';
      boton.setAttribute('aria-expanded', 'true'); // ARIA para indicar que el contenido está visible
      respuesta.setAttribute('aria-hidden', 'false'); // ARIA para mostrar la respuesta
    }
  });
});


// =========================
// GESTIÓN DE FILTROS
// =========================

// Seleccionar todos los botones de la clase 'btn' dentro de 'filtros'
const botonesFiltro = document.querySelectorAll('.filtros .btn');
// Seleccionar todas las tarjetas de la clase 'tarjeta'
const tarjetas = document.querySelectorAll('.tarjeta');

botonesFiltro.forEach(boton => {
  // Añadir un listener a cada botón de filtro
  boton.addEventListener('click', () => {
    const tipoFiltro = boton.dataset.filter;

    // Desactivar todos los botones de filtro y poner aria-pressed=false
    botonesFiltro.forEach(b => {
      b.classList.remove('activo');
      b.setAttribute('aria-pressed', 'false');
    });

    // Activar el botón clicado y poner aria-pressed=true
    boton.classList.add('activo');
    boton.setAttribute('aria-pressed', 'true');

    // Recorrer las tarjetas y aplicar el filtro
    tarjetas.forEach(tarjeta => {
      // Mostrar la tarjeta si el filtro es 'todos' o si su clase coincide con el tipo de filtro
      if (tipoFiltro === 'todos' || tarjeta.classList.contains(tipoFiltro)) {
        tarjeta.style.display = 'inline-block';
      } else {
        tarjeta.style.display = 'none';
      }
    });
  });
});