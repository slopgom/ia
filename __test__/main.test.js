/**
 * @jest-environment jsdom
 */
const { alternarVisibilidad } = require('../js/main.js');

describe('alternarVisibilidad', () => {
  beforeEach(() => {
    // Creamos un DOM simulado
    document.body.innerHTML = `
      <button id="btn">Ocultar Sección</button>
      <div id="contenedor"><p>Texto</p></div>
    `;
  });

  test('oculta el contenido y cambia el texto a "Mostrar Sección"', () => {
    const boton = document.getElementById('btn');
    const contenedor = document.getElementById('contenedor');

    alternarVisibilidad('contenedor', boton);

    expect(contenedor.classList.contains('hidden')).toBe(true);
    expect(boton.textContent).toBe('Mostrar Sección');
  });

  test('vuelve a mostrar el contenido y cambia texto a "Ocultar Sección"', () => {
    const boton = document.getElementById('btn');
    const contenedor = document.getElementById('contenedor');

    // Ocultar primero
    alternarVisibilidad('contenedor', boton);
    // Volver a mostrar
    alternarVisibilidad('contenedor', boton);

    expect(contenedor.classList.contains('hidden')).toBe(false);
    expect(boton.textContent).toBe('Ocultar Sección');
  });
});
