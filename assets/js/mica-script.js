const sonidos = {
  bienvenida: 'assets/sounds/open-door.mp3',
  volver: 'assets/sounds/close-door.mp3',
  habilidades: 'assets/sounds/click1.mp3',
  peliculas: 'assets/sounds/click2.mp3',
  musica: 'assets/sounds/click3.mp3',
  enlace: 'assets/sounds/bubble.mp3',
  avatar: 'assets/sounds/reward.mp3'
};

function tocarSonido(archivo) {
  try {
    const audio = new Audio(archivo);
    audio.volume = 0.6;
    audio.play().catch(() => {});
  } catch (error) {}
}

document.addEventListener('DOMContentLoaded', function() {

  // Sonido de bienvenida
  setTimeout(() => tocarSonido(sonidos.bienvenida), 500);

  // Efecto glow en el nombre al cargar la página
  const nombre = document.querySelector('.contenido h1');
  if (nombre) {
    nombre.classList.add('glow');
    setTimeout(() => {
      nombre.classList.remove('glow'); // se quita después de 1.5s
    }, 2000);
  }

  // Avatar con efecto 
  const avatar = document.querySelector('.avatar-container');
  if (avatar) {
    avatar.addEventListener('mouseenter', () => tocarSonido(sonidos.avatar));
  }

  // Botones de secciones con toggle
  const botones = document.querySelectorAll('.btn');
  const secciones = document.querySelectorAll('.seccion');
  
  botones.forEach(boton => {
    boton.addEventListener('click', function() {
      const seccionId = this.getAttribute('data-section');
      const seccion = document.getElementById(seccionId);
      
      // Elegir sonido
      let sonido = sonidos.habilidades;
      if (seccionId === 'peliculas') sonido = sonidos.peliculas;
      if (seccionId === 'musica') sonido = sonidos.musica;
      
      tocarSonido(sonido);
      
      // Toggle: si ya está activa, cerrarla
      if (seccion.classList.contains('activa')) {
        seccion.classList.remove('activa');
        this.classList.remove('activo');
      } else {
        // Cerrar todas las otras secciones
        secciones.forEach(s => s.classList.remove('activa'));
        botones.forEach(b => b.classList.remove('activo'));
        
        // Abrir la actual
        seccion.classList.add('activa');
        this.classList.add('activo');
      }
    });
  });

  // Enlaces externos
  const enlaces = document.querySelectorAll('.seccion a');
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(e) {
      e.preventDefault();
      tocarSonido(sonidos.enlace);
      
      setTimeout(() => {
        window.open(this.href, '_blank');
      }, 300);
    });
  });

  // Botón volver
  const botonVolver = document.querySelector('.navbar a');
  if (botonVolver) {
    botonVolver.addEventListener('click', function(e) {
      e.preventDefault();
      tocarSonido(sonidos.volver);
      
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 600);
    });
  }

});
