// Interacción para cambiar el fondo
const fondos = [
  "url('assets/img/fondo-tech.png')",  
  "url('assets/img/fondo-celeste.png')",       
  "url('assets/img/fondo-verde.png')",
  "url('assets/img/fondo-rojo.png')",
  "url('assets/img/fondo-codigo.png')",
  "url('assets/img/fondo-violeta.png')",  
];

let indice = 0;

const botonFondo = document.getElementById("cambiar-fondo");
const headerHero = document.querySelector(".header-hero");


botonFondo.addEventListener("click", (e) => {
  e.preventDefault(); 
  indice++;           
  if(indice >= fondos.length) indice = 0; 
  headerHero.style.backgroundImage = fondos[indice]; 
});
//Interacción para las cards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
