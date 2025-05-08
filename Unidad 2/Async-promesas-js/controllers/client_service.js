/*const crear_nueva_fila = (nombre, email, id) => {
  const fila = document.createElement("tr");

  const contenido = ` 
    <td class="td" data-td>
      ${nombre}
    </td>
    <td>
      ${email}
    </td>
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
            type="button"
            data-id="${id}"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>          
  `;
  fila.innerHTML = contenido;
  return fila;
};

const table = document.querySelector("[data-table]");

const listaclientes = () =>
  fetch("http://localhost:3000/perfil")
    .then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ nombre, email }),
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

// Mostrar todos los clientes en la tabla
listaclientes()
  .then((data) => {
    data.forEach((perfil) => {
      const nuevaFila = crear_nueva_fila(perfil.nombre, perfil.email, perfil.id);
      table.appendChild(nuevaFila);
    });
  })
  .catch((error) => alert("No existe conexión"));

// Manejo del botón eliminar
table.addEventListener("click", (evento) => {
  if (evento.target.classList.contains("simple-button--delete")) {
    const id = evento.target.dataset.id;
    eliminarCliente(id)
      .then(() => {
        evento.target.closest("tr").remove(); // Elimina la fila de la tabla
      })
      .catch(() => alert("No se pudo eliminar el cliente"));
  }
});

// Exportar el servicio
export const clientService = {
  listaclientes,
  crearCliente,
  eliminarCliente,
};
*/
const API_BASE_URL = "http://localhost/conexion.php";

// GET - Obtener lista de clientes
const listaclientes = () => {
  return fetch(API_BASE_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
      }
      return response.json();
    });
};

// POST - Crear un cliente
const crearCliente = (nombre, email) => {
  return fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Error al crear el cliente");
      }
      return response.json();
    });
};

// PUT - Actualizar un cliente
const actualizarCliente = (id, nombre, email) => {
  return fetch(`${API_BASE_URL}?id=${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Error al actualizar el cliente");
      }
      return response.json();
    });
};

// DELETE - Eliminar un cliente
const eliminarCliente = (id) => {
  return fetch(`${API_BASE_URL}?id=${id}`, {
    method: "DELETE",
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Error al eliminar el cliente");
      }
      return response.json();
    });
};
export const clientService = {
  listaclientes,
  crearCliente,
  eliminarCliente,
  actualizarCliente,
};
