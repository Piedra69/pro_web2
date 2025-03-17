//import sonido from"./componentes/sonido.js"
//import mensaje from"./componentes/mensaje.js"
const btn = document.querySelector('[data-form-btn]');
console.log(btn);
 
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = "";
 
    const taskContent = document.createElement('div');
    
    const checkIcon = checkComplete();
    taskContent.appendChild(checkIcon);
    
    const taskText = document.createElement('span');
    taskText.classList.add('task');
    taskText.innerText = value;
    taskContent.appendChild(taskText);
 
    const deleteIconElement = deleteIcon();
    taskContent.appendChild(deleteIconElement);
    
    task.appendChild(taskContent);
    
    list.appendChild(task);
    
    console.log("Tarea creada:", value);
};
 
btn.addEventListener('click', createTask);
 
const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener('click', toggleComplete);
    return i;
};
 
const toggleComplete = (evento) => {
    const element = evento.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
};
 
const deleteIcon = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', eliminarTarea);
    return i;
};
 
const eliminarTarea = (evento) => {
    const parent = evento.target.parentElement.parentElement;
    parent.remove();
};
document.querySelector('.btnCreate').addEventListener('click', () => {
   alert('Elemento agregado');
 });
 const sound = new Audio('click.mp3');
const playButton = document.querySelector('.btnCreate');
 
playButton.addEventListener('click', () => {
sound.play();
});

