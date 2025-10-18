# IA
Todo sobre las verdades y mentiras de la IA

# 🌐 Diseño de una Página Web (Frontend)

## 🎯 Objetivo

Vamos a diseñar una **página web completa enfocada en el frontend**, donde se combine la **parte visual y estética de Ana** con la **lógica y funcionalidad de Sergio**, utilizando **HTML, CSS y JavaScript** con sentido funcional y coherente.

---

## 🖥️ Requisitos

### 🎨 Diseño visual (Ana)
- Crear una **interfaz atractiva, moderna y bien estructurada**.  
- Utilizar **HTML y CSS** para lograr una **presentación limpia y adaptable (responsive)**.  
- Cuidar la **paleta de colores**, tipografía y jerarquía visual.  

### ⚙️ Lógica y funcionalidad (Sergio)
- Añadir **interactividad** mediante **JavaScript** (filtros, formularios, modales, etc.).  
- Asegurar que el código tenga **coherencia y propósito funcional**.  
- Implementar buenas prácticas en la estructura y nombres de funciones.

### 🧾 Documentación del código
- Todo el código debe estar **claramente documentado** con comentarios explicativos.  
- Incluir este archivo **`README.md`** describiendo:
  - El propósito del proyecto.  
  - La estructura de archivos.  
  - Cómo ejecutar o visualizar el proyecto.

---

## 🔧 Instrucciones de trabajo

1. **Forkea** este repositorio desde GitHub.  
2. Crea tu **propia rama** para trabajar en el proyecto.
3. Y todo tuyo. No os olvidéis de la metodología.







---

# 🤖 IA: Verdades y Mentiras

## 📌 Propósito del Proyecto

El objetivo principal de este proyecto es **practicar el uso de forks en GitHub** y aprender a trabajar en ramas propias.  
Además, se crea una **página web sobre Inteligencia Artificial**, mostrando sus **verdades y mitos**, combinando diseño visual con funcionalidad básica en JavaScript.

---

## 🚀 Cómo Ejecutar o Visualizar el Proyecto

1. **Clona o descarga** el repositorio en tu máquina:

```bash
git clone https://github.com/Cristina2M/ia
````

2. Abre el archivo `index.html` en tu navegador web (doble clic o abrir con Chrome/Firefox/Edge).

3. Navega por las secciones usando:

   * La **barra de navegación** en la parte superior.
   * El **botón “Explorar”** para ir directamente a la sección de Historia.

> 💡 Este proyecto es **frontend puro**, no requiere servidor ni instalación adicional.



## 📂 Estructura del Proyecto

```

project/
│
├─ index.html            # Archivo principal HTML
├─ main.js               # Funcionalidad JavaScript
├─ README.md             # Documentación del proyecto
└─ style.css             # Estilos CSS del proyecto

```

---

## 🖥️ Tecnologías Utilizadas

- **HTML5**: estructura semántica de la página.  
- **CSS3**: diseño moderno, gradientes, sombras, responsive.  
- **JavaScript**: interactividad para scroll suave y menú activo.  

---

## ✨ Diseño Visual

- **Paleta de colores**:  
  - Morado eléctrico `#8e44ad` (color principal)  
  - Rosa fuerte `#e84393` (color secundario y hover de botón)  
  - Blanco roto `#f8f8f8` (fondo)  
  - Gris oscuro `#2d3436` (texto)  
  - Turquesa `#00cec9` (detalles/acento)  

- **Tipografía**:  
  - Títulos: `'Poppins', sans-serif`  
  - Texto general: `'Open Sans', sans-serif`  

- **Efectos**:  
  - Botones con hover y efecto “rebote”.  
  - Cards con sombra y efecto hover.  
  - Menú sticky y responsive.  

---

## 🏗️ Estructura HTML

Secciones principales:

1. **Header**:  
   - Logo con icono 🤖  
   - Barra de navegación con enlaces internos (`Inicio`, `Historia`, `Verdades`, `Mentiras`, `Recursos`).  

2. **Main**:  
   - **Inicio**: mensaje de bienvenida y botón “Explorar”.  
   - **Historia**: timeline con hitos importantes de la IA.  
   - **Verdades**: cards con hechos reales sobre IA.  
   - **Mentiras**: cards con mitos sobre IA.  
   - **Recursos**: enlaces externos para profundizar en IA.  

3. **Footer**:  
   - Créditos del proyecto y diseño.

---

## 🎨 CSS

- Gradiente de fondo para sección de inicio (morado → rosa).  
- Botón “Explorar” con hover rosa y texto blanco.  
- Cards con sombras y hover.  
- Menú responsive y sticky.  
- Paleta de colores uniforme para coherencia visual.  

Archivo principal: `style.css`

---

## 🧩 JavaScript

Archivo: `main.js`

Funcionalidades implementadas:

1. **Scroll suave**  
   - Enlaces del menú y botón “Explorar” hacen scroll hacia la sección correspondiente suavemente.  

2. **Resaltar sección activa en el menú**  
   - Mientras se hace scroll, el enlace correspondiente a la sección visible se resalta.  

```javascript
// Scroll suave y menú activo
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
```


## 📱 Responsive Design

* Menú vertical en móviles con enlaces centrados.
* Tamaño de título y padding adaptado para pantallas pequeñas.
* Cards y timeline se ajustan automáticamente al ancho de la pantalla.

---

## 🧾 Futuras mejoras

* Agregar **botón “Volver arriba”**.
* Animaciones de entrada para las cards y timeline.
* Formulario funcional.

---

**Cristina © 2025** – Proyecto sobre Inteligencia Artificial.


