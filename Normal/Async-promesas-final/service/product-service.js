const API_BASE_URL = 'http://localhost/api1/Conexion_productos.php';

const listaProductos = () => {
  return fetch(API_BASE_URL)
  .then(response => {
    if (!response.ok) throw new Error('Error al obtener productos');
    return response.json();
  })
}

const crearProducto = (nombre, precio, descripcion) => {
  return fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({nombre, precio, descripcion, id: uuid.v4()})
  }).then(response => {
    if (!response.ok) throw new Error('Error al crear producto');
    return response.json();
  })
};

const eliminarProducto = (id) => {
  return fetch(`${API_BASE_URL}?id=${id}`, {
    method: "DELETE"
  })
  .then(response => {
    if (response.ok) {
      location.reload();
    } else {
      console.error("Error al eliminar el producto");
    }
  })
  .catch(error => {
    console.error("Error de conexión:", error);
  });
};

const detalleProducto = (id) => {
  return fetch(`${API_BASE_URL}?id=${id}`).then((respuesta) => respuesta.json())
};

const actualizarProducto = (nombre, precio, descripcion, id) => {
  return fetch(API_BASE_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre, precio, descripcion, id})
  }).then(respuesta => console.log(respuesta)).catch((err) => console.log(err))
};

export const productService = {
  listaProductos,
  crearProducto,
  eliminarProducto,
  detalleProducto,
  actualizarProducto
};