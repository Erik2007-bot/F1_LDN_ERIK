// --- Menú hamburguesa ---
const MENU_TOGGLE = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

MENU_TOGGLE.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

document.addEventListener('click', (event) => {
  const isClickInside = navLinks.contains(event.target) || MENU_TOGGLE.contains(event.target);
  if (!isClickInside && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
  }
});

// --- Scroll suave "Ver más" ---
document.getElementById('learn-more-btn').addEventListener('click', () => {
  document.getElementById('teams').scrollIntoView({ behavior: 'smooth' });
});

// --- Opiniones ---
const listContainer = document.getElementById("opinions-list");
const SEND_BTN = document.getElementById("send-btn");
const responseMsg = document.getElementById("response-msg");

const nameInput = document.getElementById("name-input");
const teamInput = document.getElementById("team-input");
const ageInput = document.getElementById("age-input");
const opinionInput = document.getElementById("opinion-input");

const nameError = document.getElementById("name-error");
const teamError = document.getElementById("team-error");
const ageError = document.getElementById("age-error");
const opinionError = document.getElementById("opinion-error");

let editIndex = -1; // -1 significa que no estamos editando

// --- Cargar opiniones ---
function loadOpinions() {
  const data = JSON.parse(localStorage.getItem("opinions")) || [];
  listContainer.innerHTML = "";

  data.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>Piloto:</strong> ${item.driver}<br>
      <strong>Escudería:</strong> ${item.team}<br>
      <strong>Edad:</strong> ${item.age}<br>
      <strong>Opinión:</strong> ${item.opinion}<br>
      <button onclick="deleteOpinion(${index})" style="background-color: #ff4d4d; color: white; border: none; padding: 5px 10px; margin-top: 5px; cursor: pointer;">Eliminar</button>
      <button onclick="editOpinion(${index})" style="background-color: #4CAF50; color: white; border: none; padding: 5px 10px; margin-top: 5px; cursor: pointer;">Editar</button>
    `;
    listContainer.appendChild(li);
  });
}

// --- Eliminar opinión ---
window.deleteOpinion = function (index) {
  const data = JSON.parse(localStorage.getItem("opinions")) || [];
  data.splice(index, 1);
  localStorage.setItem("opinions", JSON.stringify(data));
  loadOpinions();
};

// --- Editar opinión ---
window.editOpinion = function (index) {
  const data = JSON.parse(localStorage.getItem("opinions")) || [];
  const item = data[index];

  nameInput.value = item.driver;
  teamInput.value = item.team;
  ageInput.value = item.age;
  opinionInput.value = item.opinion;

  editIndex = index;
  SEND_BTN.textContent = "Actualizar";
};

// --- Guardar opinión ---
function saveOpinion(driver, team, age, opinion) {
  const data = JSON.parse(localStorage.getItem("opinions")) || [];

  if (editIndex === -1) {
    // Crear nueva opinión
    data.push({ driver, team, age, opinion });
  } else {
    // Actualizar existente
    data[editIndex] = { driver, team, age, opinion };
    editIndex = -1;
    SEND_BTN.textContent = "Enviar";
  }

  localStorage.setItem("opinions", JSON.stringify(data));
}

// --- Evento botón enviar ---
SEND_BTN.addEventListener("click", () => {
  // Reset errores
  nameError.textContent = "";
  teamError.textContent = "";
  ageError.textContent = "";
  opinionError.textContent = "";

  const name = nameInput.value.trim();
  const team = teamInput.value.trim();
  const age = ageInput.value.trim();
  const opinion = opinionInput.value.trim();

  let valid = true;

  if (name === "") {
    nameError.textContent = "Debes escribir un piloto.";
    valid = false;
  }
  if (team === "") {
    teamError.textContent = "Debes escribir una escudería.";
    valid = false;
  }
  if (age === "" || isNaN(age) || age <= 0) {
    ageError.textContent = "La edad debe ser un número válido.";
    valid = false;
  }
  if (opinion.length < 10) {
    opinionError.textContent = "Mínimo 10 caracteres.";
    valid = false;
  }

  if (!valid) return;

  saveOpinion(name, team, age, opinion);
  loadOpinions();

  // Limpiar formulario
  nameInput.value = "";
  teamInput.value = "";
  ageInput.value = "";
  opinionInput.value = "";
  SEND_BTN.textContent = "Enviar";
});

// --- Cargar opiniones al iniciar ---
loadOpinions();




