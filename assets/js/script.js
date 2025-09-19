// ==============================================
// 1) Hero H1: cambio de color por click (JS)
// ==============================================
(function () {
  const heading = document.querySelector('.hero h1');
  if (!heading) return;
  let toggled = false;
  heading.addEventListener('click', () => {
    toggled = !toggled;
    heading.style.color = toggled ? '#6d06a4' : '';
  });
})();


// ==============================================
// 2) Hero: Text Scramble (revela/mezcla "HOLA MUNDO")
// ==============================================
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

// ==============================================
// 3) Tecnologías: efecto magnético y ping en hover/click
// ==============================================
(function () {
  const techSection = document.querySelector('.section-technologies');
  const techItems = Array.from(document.querySelectorAll('.tech-list .tech-item'));
  if (!techSection || techItems.length === 0) return;

  let raf = null;
  let mouseX = 0;
  let mouseY = 0;

  function animateMagnet() {
    techItems.forEach((li) => {
      const rect = li.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = mouseX - cx;
      const dy = mouseY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const strength = Math.max(0, 1 - Math.min(dist / 240, 1));
      const tx = (dx / dist) * strength * 8; // translate máx ~8px
      const ty = (dy / dist) * strength * 8;
      li.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    });
    raf = null;
  }

  techSection.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!raf) raf = requestAnimationFrame(animateMagnet);
  });

  techSection.addEventListener('mouseleave', () => {
    techItems.forEach((li) => {
      li.style.transform = 'translate3d(0,0,0)';
    });
  });

  // Resaltado al hover/click
  function ping(li) {
    li.classList.add('is-active');
    setTimeout(() => li.classList.remove('is-active'), 550);
  }

  techItems.forEach((li) => {
    li.addEventListener('mouseenter', () => ping(li));
    li.addEventListener('click', () => ping(li));
  });
})();


// ==============================================
// 4) Miembros: label simple SELECT PLAYER / PLAYER READY
// ==============================================
(function () {
  const cards = Array.from(document.querySelectorAll('.section-cards .card-member'));
  if (cards.length === 0) return;

  cards.forEach((card) => {
    const span = card.querySelector('span');
    if (!span) return;
    span.dataset.original = span.textContent;
    span.textContent = 'SELECT PLAYER';
    card.addEventListener('mouseenter', () => { span.textContent = 'PLAYER READY'; });
    card.addEventListener('mouseleave', () => { span.textContent = 'SELECT PLAYER'; });
  });
})();