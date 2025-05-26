// searchBotonsito.js
import { tareasArray } from "../script.js"; // Asegúrate de que la ruta sea correcta

const buscarTarea = () => {
    const inputBusqueda = document.querySelector('[data-form-input]');
    const valorBusqueda = inputBusqueda.value.toLowerCase();

    // Arrays para almacenar las tareas coincidentes y no coincidentes
    const tareasCoincidentes = [];
    const tareasNoCoincidentes = [];

    // Iterar sobre el array de tareas
    tareasArray.forEach(tarea => {
        const textoTarea = tarea.texto.toLowerCase();

        // Si el texto de la tarea coincide con la búsqueda, la agregamos al array de coincidentes
        if (textoTarea.includes(valorBusqueda)) {
            tareasCoincidentes.push(tarea);
        } else {
            // Si no coincide, la agregamos al array de no coincidentes
            tareasNoCoincidentes.push(tarea);
        }
    });

    // Limpiar la lista actual
    const list = document.querySelector('[data-list]');
    list.innerHTML = '';

    // Mostrar primero las tareas coincidentes
    tareasCoincidentes.forEach(tarea => {
        list.appendChild(tarea.elemento);
    });

    // Luego mostrar las tareas no coincidentes
    tareasNoCoincidentes.forEach(tarea => {
        list.appendChild(tarea.elemento);
    });

    // Si no hay texto en el campo de búsqueda, mostrar todas las tareas
    if (valorBusqueda === '') {
        tareasArray.forEach(tarea => {
            list.appendChild(tarea.elemento);
        });
    }
};

export default buscarTarea;