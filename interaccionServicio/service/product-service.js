//--------- Servicio optimizado para productos ---------
const listaProductos = () => fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

const crearProducto = (nombre, precio, descripcion) => {
  return fetch("http://localhost:3000/productos", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      nombre,
      precio: parseFloat(precio),
      descripcion,
      id: uuid.v4() // Mismo formato de ID que en clientes
    })
  });
};

const eliminarProducto = (id) => {
  console.log("Eliminando producto ID:", id);
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "DELETE"
  });
};

// referencia a un producto del json a travez de id
const producto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json());
};

const actualizarProducto = (nombre, precio, descripcion, id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nombre,
      precio: parseFloat(precio), 
      descripcion
    })
  }).then(respuesta => respuesta).catch((err) => console.log(err));
};

// json-server --watch interaccionServicioAdrianLayme/db.json --port 3000

export const productService = {
  listaProductos,
  crearProducto,
  eliminarProducto,
  producto,
  actualizarProducto
};