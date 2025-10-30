// Sirve para que se pueda interactuar con la hamburguesa cuando se ponga el formato de un móvil
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Para abrir o cerrar la hamburguesa
menuToggle.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// esto es para el boton de "ver más bajé de una manera más suave y no baje directamente"
document.getElementById('learn-more-btn').addEventListener('click', () => {
  document.getElementById('teams').scrollIntoView({ behavior: 'smooth' });
});
