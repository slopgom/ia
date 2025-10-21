/**
 * Función llamada directamente desde el atributo onclick del HTML.
 * Su objetivo es mostrar/ocultar el contenido y actualizar el texto del botón.
 * @param {string} idContenedor - El ID del div que contiene el contenido ('verdades-list' o 'mentiras-list').
 */
function alternarVisibilidad(idContenedor) {
    const contenido = document.getElementById(idContenedor);

    let botonId; 
    
    if (idContenedor === 'verdades-list') {
        botonId = 'verdades-btn';
    } else if (idContenedor === 'mentiras-list') {
        botonId = 'mentiras-btn';
    } else {
        console.error('Error: ID de contenedor no reconocido');
        return; 
    }
    
    const boton = document.getElementById(botonId);

    // Añadir o quitar la clase 'hidden' 
    contenido.classList.toggle('hidden');

    // Actualizar el texto del botón (Feedback)
    if (contenido.classList.contains('hidden')) {
        // Está oculto
        boton.textContent = 'Mostrar Sección';
    } else {
        // Está visible
        boton.textContent = 'Ocultar Sección';
    }
}