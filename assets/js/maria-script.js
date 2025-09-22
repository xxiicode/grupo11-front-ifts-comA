const sonidos = {
  bienvenida: 'assets/sounds/open-door.mp3',
  volver: 'assets/sounds/close-door.mp3',
  habilidades: 'assets/sounds/click1.mp3',
  peliculas: 'assets/sounds/click2.mp3',
  box: 'assets/sounds/click3.mp3',
  enlace: 'assets/sounds/bubble.mp3',
  avatar: 'assets/sounds/click1.mp3'
};

function tocarSonido(archivo) {
  try {
    const audio = new Audio(archivo);
    audio.volume = 0.6;
    audio.play().catch(() => {});
  } catch (error) {}
}

  // Avatar con efecto 
  const avatar = document.querySelector('.avatar-container');
  if (avatar) {
    avatar.addEventListener('mouseenter', () => tocarSonido(sonidos.avatar));
  }

    // Box con efecto 
  const box = document.querySelector('.card card-member');
  if (box) {
    avcontenido.addEventListener('mouseenter', () => tocarSonido(sonidos.box));
  }