//Seleccion de elementos

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const hamburguer = document.querySelector('.hamburguer');


navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('show-links');
    hamburguer.classList.toggle('btn-clicked')
})