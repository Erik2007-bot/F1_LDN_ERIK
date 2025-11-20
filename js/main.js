// Sirve para que se pueda interactuar con la hamburguesa cuando se ponga el formato de un móvil
const MENU_TOGGLE = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');




// Para abrir o cerrar la hamburguesa
MENU_TOGGLE.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});



// esto es para el boton de "ver más" bajé de una manera más suave y no baje directamente
document.getElementById('learn-more-btn').addEventListener('click', () => {
  document.getElementById('teams').scrollIntoView({ behavior: 'smooth' });
});



const listContainer = document.getElementById("opinions-list");


const sendBtn = document.getElementById("send-btn");
const responseMsg = document.getElementById("response-msg");



function loadOpinions() {
  const data = JSON.parse(localStorage.getItem("opinions")) || [];
  listContainer.innerHTML = ""; 

  data.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>Piloto:</strong> ${item.piloto}<br>
      <strong>Escudería:</strong> ${item.escuderia}<br>
      <strong>Edad:</strong> ${item.edad}<br>
      <strong>Opinión:</strong> ${item.opinion}
    `;
    listContainer.appendChild(li);
  });
}

//  es la función para guardar la nueva función
function saveOpinion(piloto, escuderia, edad, opinion) {
  const data = JSON.parse(localStorage.getItem("opinions")) || [];

  const newOpinion = {
    piloto: piloto,
    escuderia: escuderia,
    edad: edad,
    opinion: opinion
  };

  data.push(newOpinion); // añadir a array
  localStorage.setItem("opinions", JSON.stringify(data)); // guardar JSON real
}

// EVENTO DEL BOTÓN — AÑADE Y MUESTRA
sendBtn.addEventListener("click", () => {
  const name = document.getElementById("name-input").value.trim();
  const team = document.getElementById("team-input").value.trim();
  const age = document.getElementById("age-input").value.trim();
  const opinion = document.getElementById("opinion-input").value.trim();

  // Validación
  if (name === "") {
    responseMsg.textContent = "Debes escribir un piloto.";
    responseMsg.style.color = "red";
    return;
  }
  if (team === "") {
    responseMsg.textContent = "Debes escribir una escudería.";
    responseMsg.style.color = "red";
    return;
  }
  if (age === "" || isNaN(age) || age <= 0) {
    responseMsg.textContent = "La edad debe ser un número válido.";
    responseMsg.style.color = "red";
    return;
  }
  if (opinion.length < 10) {
    responseMsg.textContent = "Mínimo 10 caracteres).";
    responseMsg.style.color = "red";
    return;
  }

  // esta guarda la opinion
  saveOpinion(name, team, age, opinion);

  // con esto hacemos la recarga
  loadOpinions();

  responseMsg.textContent = "Opinión añadida correctamente.";
  responseMsg.style.color = "green";

  // Limpiamos el form
  document.getElementById("name-input").value = "";
  document.getElementById("team-input").value = "";
  document.getElementById("age-input").value = "";
  document.getElementById("opinion-input").value = "";
});

// Mostrar datos al cargar la web
loadOpinions();



