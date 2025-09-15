// Cambiar color de fondo al hacer clic
const botonColor = document.getElementById('boton-color');
botonColor.addEventListener('click', () => {
    const colores = ['#f0f8ff', '#ffe4e1', '#f5f5dc', '#e6e6fa', '#fffacd', '#d3ffce'];
    const colorActual = document.body.style.backgroundColor;
    let nuevoColor;
    do {
        nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    } while (nuevoColor === colorActual);
    document.body.style.backgroundColor = nuevoColor;
});

// Animación de aparición de la tarjeta
document.addEventListener('DOMContentLoaded', () => {
    const tarjeta = document.querySelector('.tarjeta');
    tarjeta.style.opacity = 0;
    tarjeta.style.transform = 'translateY(30px)';
    setTimeout(() => {
        tarjeta.style.transition = 'all 0.6s ease-out';
        tarjeta.style.opacity = 1;
        tarjeta.style.transform = 'translateY(0)';
    }, 100);
});

// Efecto de resaltado de habilidades al pasar el mouse
const habilidades = document.querySelectorAll('.tarjeta ul li');
habilidades.forEach(habilidad => {
    habilidad.addEventListener('mouseenter', () => {
        habilidad.style.color = '#ff4500';
        habilidad.style.fontWeight = 'bold';
    });
    habilidad.addEventListener('mouseleave', () => {
        habilidad.style.color = '';
        habilidad.style.fontWeight = '';
    });
});
