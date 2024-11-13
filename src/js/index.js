import { transformText, saveInLocalStorage } from "./utils.js"

const $form = document.querySelector(".form");
const $input = document.querySelector(".form-input");
const $tasksContainer = document.querySelector(".tasklist");
let tasks = JSON.parse(localStorage.getItem("taskslist")) || [];

const createCardTask = (task) => {
  const { id, description } = task;
  return `
          <li class="tasklist-item">
          <span>${description}</span> <span data-id=${id}>Eliminar</span>
        </li>
  `
}
const renderCards = () => {
  return $tasksContainer.innerHTML = tasks.map(createCardTask).join("");
}
const validateInput = (value) => {
  return value.trim() != "";
}
const addTask = (e) => {
  e.preventDefault();

  if (!validateInput($input.value)) {
    alert("¡Debe Ingresar Texto!");
    return;
  };

  let taskName = transformText($input.value);

  tasks = [...tasks, { id: tasks.length + 1, description: taskName }];

  saveInLocalStorage('taskslist', tasks)
  renderCards();

  $form.reset();
}
const removeTask = (value) => {

  let id = value.target.dataset.id;
  id = parseInt(id);
  if (!id) return;

  tasks = tasks.filter(task => task.id != id);
  renderCards();
  saveInLocalStorage('taskslist', tasks);
}
const init = () => {
  renderCards();


  $form.addEventListener('submit', addTask);
  $tasksContainer.addEventListener('click', removeTask)
}
init();