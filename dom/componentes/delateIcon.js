// delateIcon.js
import { tareasArray } from "../script.js"; // Asegúrate de que la ruta sea correcta

const delateIcon = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', eliminarTarea);
    return i;
}

const eliminarTarea = (evento) => {
    const parent = evento.target.parentElement; // Obtener el elemento padre (la tarea)
    const texto = parent.querySelector('.task').innerText; // Obtener el texto de la tarea

    // Eliminar la tarea del array
    const index = tareasArray.findIndex(tarea => tarea.texto === texto);
    if (index !== -1) {
        tareasArray.splice(index, 1); // Eliminar la tarea del array
    }

    // Eliminar la tarea del DOM
    parent.remove();
}

export default delateIcon;