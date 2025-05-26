import { petService } from "../service/pet-service.js";

let buscadorInput = document.querySelector("[data-buscador]");
const comboBox = document.querySelector("[data-comboBox]");
const table = document.querySelector("[data-table]");

const limpiarTabla = () => {
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
};

const crear_nueva_fila = (nombre, especie, edad, fecha_nacimiento, sexo, nombre_dueno, id) => {
    const fila = document.createElement('tr');
    const contenido = `
        <td class="td" data-td>${nombre}</td>
        <td>${especie}</td>
        <td>${edad}</td>
        <td>${fecha_nacimiento}</td>
        <td>${sexo}</td>
        <td>${nombre_dueno || 'Sin dueño'}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a href="../screens/editar_pet.html?id=${id}"
                       class="simple-button simple-button--edit">Editar</a>
                </li>
                <li>
                    <button class="simple-button simple-button--delete"
                            type="button" id="${id}">Eliminar</button>
                </li>
            </ul>
        </td>
    `;
    fila.innerHTML = contenido;
    
    const btn = fila.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        if (confirm("¿Estás seguro de que deseas eliminar esta mascota?")) {
            petService.eliminarPet(id)
                .then(() => alert("Mascota eliminada"))
                .catch(error => alert("Error al eliminar"));
        }
    });

    return fila;
};

const cargarPets = (pets) => {
    limpiarTabla();
    
    if (pets.length === 0) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td colspan="7" class="no-results">No se encontraron mascotas</td>
        `;
        table.appendChild(fila);
        return;
    }
    
    pets.forEach(({nombre, especie, edad, fecha_nacimiento, sexo, nombre_dueno, id}) => {
        const nuevaLinea = crear_nueva_fila(nombre, especie, edad, fecha_nacimiento, sexo, nombre_dueno, id);
        table.appendChild(nuevaLinea);
    });
};

const manejarBusqueda = () => {
    const campo = comboBox.value;
    let valor = buscadorInput.value;
    
    // Para select (sexo) obtenemos el valor seleccionado
    if (buscadorInput.tagName === 'SELECT') {
        valor = buscadorInput.value;
    } else {
        valor = valor.trim();
    }
    
    // No validamos si el valor está vacío (para permitir búsquedas vacías que muestren todos)
    petService.buscarPets(campo, valor)
        .then(cargarPets)
        .catch(error => {
            console.error("Error al buscar mascotas:", error);
            alert("Ocurrió un error al buscar mascotas");
        });
};

comboBox.addEventListener('change', () => {
    const searchContainer = document.querySelector('.search-box-pets');
    const oldInput = buscadorInput;
    
    // Creamos un nuevo input (o select) según el caso
    let newInput;
    
    switch(comboBox.value) {
        case 'fecha_nacimiento':
            newInput = document.createElement('input');
            newInput.type = 'date';
            newInput.className = 'pets-container__buscador';
            newInput.dataset.buscador = '';
            break;
            
        case 'edad':
            newInput = document.createElement('input');
            newInput.type = 'number';
            newInput.min = '0';
            newInput.max = '30';
            newInput.className = 'pets-container__buscador';
            newInput.dataset.buscador = '';
            break;
            
        case 'sexo':
            newInput = document.createElement('select');
            newInput.className = 'pets-container__buscador';
            newInput.dataset.buscador = '';
            
            const opciones = [
                {value: '', text: 'Seleccione sexo...'},
                {value: 'macho', text: 'Macho'},
                {value: 'hembra', text: 'Hembra'}
            ];
            
            opciones.forEach(opcion => {
                const optionElement = document.createElement('option');
                optionElement.value = opcion.value;
                optionElement.textContent = opcion.text;
                newInput.appendChild(optionElement);
            });
            break;
            
        default:
            newInput = document.createElement('input');
            newInput.type = 'text';
            newInput.className = 'pets-container__buscador';
            newInput.dataset.buscador = '';
    }
    
    // Configurar placeholder para inputs (no selects)
    if (newInput.tagName === 'INPUT') {
        const placeholderMap = {
            'nombre': 'Buscar por nombre...',
            'especie': 'Buscar por especie...',
            'edad': 'Buscar por edad...',
            'fecha_nacimiento': 'Buscar por fecha...',
            'id_dueno': 'Buscar por ID de dueño...'
        };
        newInput.placeholder = placeholderMap[comboBox.value] || 'Buscar...';
    }
    
    // Reemplazar el input antiguo con el nuevo
    oldInput.replaceWith(newInput);
    buscadorInput = newInput;
    
    // Agregar evento de input
    if (comboBox.value === 'sexo') {
        buscadorInput.addEventListener('change', manejarBusqueda);
    } else {
        buscadorInput.addEventListener('input', manejarBusqueda);
    }
    
    // Realizar búsqueda inicial
    manejarBusqueda();
});

// Configuración inicial
buscadorInput.addEventListener('input', manejarBusqueda);

// Carga inicial
petService.listaPets()
    .then(cargarPets)
    .catch(error => {
        console.error("Error al cargar mascotas:", error);
        alert("Ocurrió un error al cargar las mascotas");
    });