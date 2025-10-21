/**
 * @file script.js
 * @description Implementa la interactividad de la página IA: Verdades y Mitos.
 * Incluye funciones para filtrar tarjetas por categoría (Mito/Verdad) y
 * para alternar la visibilidad de las respuestas.
 */

// Se ejecuta cuando el documento HTML ha sido completamente cargado.
document.addEventListener('DOMContentLoaded', init);

/**
 * Inicializa la funcionalidad de la página:
 * 1. Configura los listeners para los botones de filtro.
 * 2. Configura los listeners para los botones de 'Revelar Respuesta'.
 * @function
 */
function init() {
    setupFilterListeners();
    setupToggleListeners();
}

/**
 * Configura los event listeners para los botones de filtro (Todos, Verdades, Mitos).
 * @function
 */
function setupFilterListeners() {
    const filterButtons = document.querySelectorAll('#filtros button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Elimina la clase 'activo' de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('activo'));
            // Agrega la clase 'activo' al botón clickeado
            this.classList.add('activo');

            const filterType = this.getAttribute('data-filter');
            filterItems(filterType);
        });
    });
}

/**
 * Muestra u oculta las tarjetas de contenido basándose en el tipo de filtro seleccionado.
 * @function
 * @param {string} filterType - El tipo de tarjeta a mostrar ('all', 'mito', 'verdad').
 */
function filterItems(filterType) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        // Muestra todas las tarjetas si el filtro es 'all'
        if (filterType === 'all') {
            card.style.display = 'block';
        } else {
            // Si la tarjeta NO coincide con el filtro, la oculta
            if (card.getAttribute('data-category') === filterType) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

/**
 * Configura los event listeners para los botones 'Revelar Respuesta' en cada tarjeta.
 * @function
 */
function setupToggleListeners() {
    const toggleButtons = document.querySelectorAll('.respuesta-toggle');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // El contenido de la respuesta es el siguiente elemento hermano del botón
            const respuesta = this.nextElementSibling;

            // Alterna la clase 'hidden' para mostrar u ocultar la respuesta
            respuesta.classList.toggle('hidden');

            // Cambia el texto del botón para reflejar su estado
            if (respuesta.classList.contains('hidden')) {
                this.textContent = 'Revelar Respuesta';
            } else {
                this.textContent = 'Ocultar Respuesta';
            }
        });
    });
}