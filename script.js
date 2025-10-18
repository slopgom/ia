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


