import {clientService} from "../service/client-service.js";

const crear_nueva_linea = (nombre, email, id) => { // recepciono datos
    const fila = document.createElement('tr'); // Creo una nueva fila en la tabla
    // Guardo el html en una variable y tambien llamo a mis variables de entrada
    const contenido = `
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_cliente.html?id=${id}"
                        class="simple-button simple-button--edit"
                    >    
                        Editar  
                                        
                    </a>
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button" id="${id}"
                  >
                    Eliminar
                  </button>
                </li>
            </ul>
        </td>
    `;

    fila.innerHTML = contenido;

    const btn = fila.querySelector("button");
    btn.addEventListener('click', () => {
        const id = btn.id;
        clientService.eliminarCliente(id).then(respuesta => {
            alert("eliminado");
        }).catch(error => alert("error"));
    });

    return fila;
};

const table = document.querySelector('[data-table]');

clientService.listaclientes().then((data) => {
    data.forEach(perfil => {
        const nuevaFila = crear_nueva_linea(perfil.nombre, perfil.email, perfil.id);
        table.appendChild(nuevaFila);
    });
}).catch((error) => alert("No existe conexión"));