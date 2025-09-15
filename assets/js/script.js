// Efectos para el hero: text scramble y parallax ligero

(function () {
  const hero = document.querySelector('.hero');
  const heading = document.querySelector('.hero h1');
  if (!hero || !heading) return;

  // -------- Text Scramble --------
  const CHARS = '!<>-_/[]{}—=+*^?#________';
  const originalText = heading.textContent.trim();

  function scrambleTo(text) {
    const from = heading.textContent;
    const length = Math.max(from.length, text.length);
    const queue = [];
    for (let i = 0; i < length; i++) {
      const fromChar = from[i] || '';
      const toChar = text[i] || '';
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      queue.push({ fromChar, toChar, start, end });
    }

    let frame = 0;
    function update() {
      let output = '';
      let complete = 0;
      for (let i = 0; i < queue.length; i++) {
        const { fromChar, toChar, start, end } = queue[i];
        if (frame >= end) {
          complete++;
          output += toChar;
        } else if (frame >= start) {
          output += CHARS[Math.floor(Math.random() * CHARS.length)];
        } else {
          output += fromChar;
        }
      }
      heading.textContent = output;
      if (complete === queue.length) return;
      frame++;
      requestAnimationFrame(update);
    }
    update();
  }

  // Revelar al cargar y cada ciertos segundos alternar un par de frases
  const phrases = ['HOLA MUNDO', 'HELLO WORLD', 'こんにちは世界'];
  let idx = 0;
  function cycle() {
    idx = (idx + 1) % phrases.length;
    scrambleTo(phrases[idx]);
  }

  // Inicio
  scrambleTo(originalText);
  const cycleInterval = setInterval(cycle, 5000);

  // Hover: re-scramble rápido
  heading.addEventListener('mouseenter', () => scrambleTo(phrases[idx]));


})();


