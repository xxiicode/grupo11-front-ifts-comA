const sonidos = {
  box: 'assets/sounds/click3.mp3',
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