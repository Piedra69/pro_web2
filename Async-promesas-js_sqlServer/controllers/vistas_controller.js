import { vistasService } from "../service/vistas-service.js";

const buscadorInput = document.querySelector("[data-buscador]");
const comboBox = document.querySelector("[data-comboBox]");
const table = document.querySelector("[data-table]");

const crearFilaCliente = (nombre, email, cantidadMascotas, id) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td class="table-vistas__column--m">${nombre}</td>
        <td class="table-vistas__column--m">${email}</td>
        <td class="table-vistas__column--s">${cantidadMascotas}</td>
        <td class="table-vistas__column--m">
            <a href="lista_pet.html?dueno=${id}" class="simple-button simple-button--edit">
                Ver Mascotas
            </a>
        </td>
    `;
    return fila;
};

const cargarClientes = (clientes) => {
    table.innerHTML = '';
    
    if (clientes.length === 0) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td colspan="4" class="table-vistas__empty">No se encontraron clientes</td>
        `;
        table.appendChild(fila);
        return;
    }
    
    clientes.forEach(({nombre, email, cantidadMascotas, id}) => {
        const nuevaFila = crearFilaCliente(nombre, email, cantidadMascotas, id);
        table.appendChild(nuevaFila);
    });
};

const manejarBusqueda = async () => {
    const campo = comboBox.value;
    const valor = campo === 'asc' || campo === 'desc' ? '' : buscadorInput.value.trim();
    
    try {
        let clientes;
        
        if (campo === 'asc' || campo === 'desc') {
            clientes = await vistasService.buscarClientesConMascotas(campo, '');
        } else {
            clientes = await vistasService.buscarClientesConMascotas(campo, valor);
        }
        
        cargarClientes(clientes);
    } catch (error) {
        console.error("Error al buscar:", error);
        alert("Ocurrió un error al buscar clientes");
    }
};

// Event Listeners
buscadorInput.addEventListener('input', manejarBusqueda);
comboBox.addEventListener('change', () => {
    const campo = comboBox.value;
    if (campo === 'asc' || campo === 'desc') {
        buscadorInput.placeholder = 'Ordenando por cantidad de mascotas...';
        buscadorInput.value = '';
    } else {
        buscadorInput.placeholder = `Buscar por ${comboBox.options[comboBox.selectedIndex].text.toLowerCase()}...`;
    }
    manejarBusqueda();
});

// Inicialización
const inicializar = async () => {
    try {
        const clientes = await vistasService.obtenerClientesConMascotas();
        cargarClientes(clientes);
        
        buscadorInput.placeholder = `Buscar por ${comboBox.options[comboBox.selectedIndex].text.toLowerCase()}...`;
    } catch (error) {
        console.error("Error al cargar datos iniciales:", error);
        alert("Ocurrió un error al cargar los datos");
    }
};

inicializar();