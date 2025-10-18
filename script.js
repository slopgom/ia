// Mostrar respuestas

//Seleccionar todos los botones clase revelar
let botones = document.querySelectorAll('.revelar');

//Recorerlos y si se hace click en ellos mostrar el contenido (.nextElementSibling) y mostarlo o ocultarlo con none o block. Además de cambiar el texto del botón a Revelar o ocultar respuesta.
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

//seleccionar todos los botones de clase filtro
let botonesFiltro = document.querySelectorAll('.filtros .btn');

//Seleccionar todas las tarjetas de clase tarjeta
let tarjetas = document.querySelectorAll('.tarjeta');

//Recorer los botones filtros y cuando se cliqueen en ellos desactivar todos los demás y activar el que se ha cliqueado. 
for (let i = 0; i < botonesFiltro.length; i++) {
  botonesFiltro[i].onclick = () => {
    for (let j = 0; j < botonesFiltro.length; j++) {
      botonesFiltro[j].classList.remove('activo');
    }

    botonesFiltro[i].classList.add('activo');
    //con el data filter del html guardar la variable tipo: verdad, mito o todos.
    let tipo = botonesFiltro[i].dataset.filter;


    //Recorer las tarjetas y mostrar todas las tarjetas que tengan o el tipo todo el tipo seleccionado. Si no ocultarlas.
    for (let k = 0; k < tarjetas.length; k++) {
      if (tipo == 'todos' || tarjetas[k].classList.contains(tipo)) {
        tarjetas[k].style.display = 'inline-block';
      } else {
        tarjetas[k].style.display = 'none';
      }
    }
  };
}
