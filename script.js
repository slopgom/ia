// =========================
// 1. Lógica de Mostrar/Ocultar Respuestas (Botones 'Revelar')
// =========================
const botonesRevelar = document.querySelectorAll('.revelar');

botonesRevelar.forEach(boton => {
  boton.addEventListener('click', () => {
    const respuesta = boton.nextElementSibling;

    // Alternar la visibilidad de la respuesta
    if (respuesta.style.display === 'block') {
      respuesta.style.display = 'none';
      boton.textContent = 'Revelar respuesta';
    } else {
      respuesta.style.display = 'block';
      boton.textContent = 'Ocultar respuesta';
    }
  });
});

// =========================
// 2. Lógica de Filtrado de Contenidos
// =========================
const botonesFiltro = document.querySelectorAll('.filtros .btn');
const tarjetas = document.querySelectorAll('.tarjeta');

botonesFiltro.forEach(boton => {
  boton.addEventListener('click', () => {
    
    // 1. Remover 'activo' de todos los botones y añadir al clickeado
    botonesFiltro.forEach(b => b.classList.remove('activo'));
    boton.classList.add('activo');
    
    const tipoFiltro = boton.dataset.filter;

    // 2. Iterar sobre las tarjetas y aplicar el filtro
    tarjetas.forEach(tarjeta => {
      // Si el filtro es 'todos' o la tarjeta contiene la clase del filtro ('verdad' o 'mito')
      if (tipoFiltro === 'todos' || tarjeta.classList.contains(tipoFiltro)) {
        tarjeta.style.display = 'inline-block'; // Usar 'inline-block' como lo tienes en CSS
      } else {
        tarjeta.style.display = 'none';
      }
    });
  });
});

// NOTA: La gestión de la clase 'active' en la navegación (nav-link)
// se ha eliminado de este script. Se recomienda gestionarla de forma
// estática en el HTML de cada página para simplificar y asegurar
// que el enlace correcto esté activo.