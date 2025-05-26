const URL_AUTITOS = "http://localhost:3000/autitos";

// Listar todos los autitos
const listaAutitos = () => fetch(URL_AUTITOS).then((respuesta) => respuesta.json());

// Crear nuevo autito
const crearAutito = (nombre, precio, caja, gestion, color) => {
  return fetch(URL_AUTITOS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ 
      nombre, 
      precio: parseFloat(precio), 
      caja, 
      gestion: parseInt(gestion), 
      color,
      id: uuid.v4()
    })
  });
};

// Eliminar autito
const eliminarAutito = (id) => {
  return fetch(`${URL_AUTITOS}/${id}`, {
    method: "DELETE"
  });
};

// Obtener detalles de un autito
const detalleAutito = (id) => {
  return fetch(`${URL_AUTITOS}/${id}`).then((respuesta) => respuesta.json());
};

// Actualizar autito
const actualizarAutito = (nombre, precio, caja, gestion, color, id) => {
  return fetch(`${URL_AUTITOS}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ 
      nombre, 
      precio: parseFloat(precio), 
      caja, 
      gestion: parseInt(gestion), 
      color 
    })
  });
};

export const autitoService = {
  listaAutitos,
  crearAutito,
  eliminarAutito,
  detalleAutito,
  actualizarAutito
};