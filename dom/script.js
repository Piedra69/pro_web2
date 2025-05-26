// Importar los scripts que lo estamos modularizando
import checkComplete from "./componentes/checkComplete.js";
import delateIcon from "./componentes/delateIcon.js";
import buscarTarea from "./componentes/searchBotonsito.js";

// Array para almacenar las tareas (ahora es exportable)
export const tareasArray = [];

(()=>{
// DOM funciona a traves de los data sets
// encapsular el codigo (todo se vuelve funcion flecha modular) llamas como funcion y no como script

const btn = document.querySelector('[data-form-btn]');
// Variables Funcion Buscar
const botonBusqueda = document.querySelector('[data-form-search]');

// Funcion para recuperar un texto de mi input
const createTask = (evento) =>{
    // la nueva tarea la borra
    evento.preventDefault();
    // selecciona 
    const input = document.querySelector('[data-form-input]');
    //console.log(input.value);

    // recuperar el querySelector de la Lista
    const value = input.value;
    // seleccionamos las data-list para que adentro añadamos algo
    const list = document.querySelector('[data-list]');
    // Vamos a añadir etiqeutas li
    const task = document.createElement('li');
    // dentro una card
    task.classList.add('card');
    input.value = '';
    /* const contenido = 
    `
    <div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>
    `; */
    // Otra manera
    // creando una variable para que creemos el elemento div
    const contenidoTask = document.createElement('div');
    // aca habia un cheack complete
    const tituloTask = document.createElement('span');
    // aumentamos en la lista este task == div
    tituloTask.classList.add('task');
    // aumentamos en el texto el valor
    tituloTask.innerText = value;
    // lo pasamos aca por buena practica :b
    contenidoTask.appendChild(checkComplete());

    contenidoTask.appendChild(tituloTask);
    const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;

    // task.innerHTML = contenido;
    task.appendChild(contenidoTask);
    // llamar a la funcion de eliminar el campo
    task.appendChild(delateIcon());
    list.appendChild(task);
    //console.log(contenido);

    // ALMACENAR EN EL ARRAY
    tareasArray.push({ texto: value, elemento: task });
};

// Cuando yo haga click va a llamar a la funcion que yo he generado
btn.addEventListener('click', createTask);
botonBusqueda.addEventListener('click', buscarTarea);

/*
const checkComplete = () =>{
    const i = document.createElement('i'); // creacion de un icono
    i.classList.add("far", "fa-check-square", "icon"); // estoy dando estilos al icono
    i.addEventListener("click", color);
    return i;
};

// funcion para crear el check
// <i class="fa-solid fa-square-check"></i>
const color = (evento) => {
    const element = evento.target
    element.classList.add('fas');
    element.classList.add('completeIcon');
    element.classList.remove('far');
};
*/

// export default checkComplete; para llamarlo

// Eliminar al pulsar el icono

/*
const delateIcon = () =>{
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', eliminarTarea);
    return i;
}

const eliminarTarea = (evento) => {
    const parent = evento.target.parentElement;
    parent.remove();
}*/

})();