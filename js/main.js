/**
 * Alterna visibilidad de un elemento y cambia el texto del botón
 */
function alternarVisibilidad(idContenedor, boton) {
  const contenido = document.getElementById(idContenedor);
  contenido.classList.toggle('hidden');

  if (contenido.classList.contains('hidden')) {
    boton.textContent = 'Mostrar Sección';
  } else {
    boton.textContent = 'Ocultar Sección';
  }
}

/**
 * Inicializa los listeners
 */
function inicializarBotones() {
  const botonVerdades = document.getElementById('verdades-btn');
  const botonMentiras = document.getElementById('mentiras-btn');

  botonVerdades.addEventListener('click', () => {
    alternarVisibilidad('verdades-list', botonVerdades);
  });

  botonMentiras.addEventListener('click', () => {
    alternarVisibilidad('mentiras-list', botonMentiras);
  });
}

document.addEventListener('DOMContentLoaded', inicializarBotones);

// Exportar funciones para Jest
if (typeof module !== 'undefined') {
  module.exports = { alternarVisibilidad, inicializarBotones };
}
