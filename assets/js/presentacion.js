// === Animación de aparición solo si existe .tarjeta ===
document.addEventListener('DOMContentLoaded', () => {
    const tarjeta = document.querySelector('.tarjeta');
    if (tarjeta) {
        tarjeta.style.opacity = 0;
        tarjeta.style.transform = 'translateY(30px)';
        setTimeout(() => {
            tarjeta.style.transition = 'all 0.6s ease-out';
            tarjeta.style.opacity = 1;
            tarjeta.style.transform = 'translateY(0)';
        }, 100);
    }
});

// === Efecto de resaltado de habilidades solo si existen ===
const habilidades = document.querySelectorAll('.tarjeta ul li');
if (habilidades.length > 0) {
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
}

// === Carrusel solo para martin.html ===
const carrusel = document.getElementById('carrusel-img');
if (carrusel) {
    const imagenes = [
        "assets/img/mrtBTTF.webp",
        "assets/img/mrtTMNT.webp"
    ];
    let indice = 0;

    setInterval(() => {
        // Efecto de desvanecimiento
        carrusel.style.opacity = 0;
        setTimeout(() => {
            indice = (indice + 1) % imagenes.length;
            carrusel.src = imagenes[indice];
            carrusel.style.opacity = 1;
        }, 500); // medio segundo para el fade
    }, 3000); // cambia cada 3 segundos
}
