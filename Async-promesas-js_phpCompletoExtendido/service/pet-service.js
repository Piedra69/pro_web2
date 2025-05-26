// const API_BASE_URL = 'http://localhost/api1/Conexion_pets.php'; ANTES DEL BUSCADOR
const API_BASE_URL = 'http://localhost/api1/conexion_pets_buscador.php';
const API_CLIENTES_URL = 'http://localhost/api1/Conexion_clientes.php';

const listaPets = () => {
  return fetch(API_BASE_URL)
  .then(response => {
    if (!response.ok) throw new Error('Error al obtener mascotas');
    return response.json();
  })
}

const obtenerClientes = () => {
  return fetch(API_CLIENTES_URL)
  .then(response => {
    if (!response.ok) throw new Error('Error al obtener clientes');
    return response.json();
  })
}

const crearPet = (nombre, especie, edad, fecha_nacimiento, sexo, id_dueno) => {
  if (!id_dueno) {
    return Promise.reject(new Error('Debe seleccionar un dueño'));
  }
  
  return fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({nombre, especie, edad, fecha_nacimiento, sexo, id_dueno, id: uuid.v4()})
  }).then(response => {
    if (!response.ok) throw new Error('Error al crear mascota');
    return response.json();
  })
};

const eliminarPet = (id) => {
  return fetch(`${API_BASE_URL}?id=${id}`, {
    method: "DELETE"
  })
  .then(response => {
    if (response.ok) {
      location.reload();
    } else {
      console.error("Error al eliminar la mascota");
    }
  })
  .catch(error => {
    console.error("Error de conexión:", error);
  });
};

const detallePet = (id) => {
  return fetch(`${API_BASE_URL}?id=${id}`).then((respuesta) => respuesta.json())
};

const actualizarPet = (nombre, especie, edad, fecha_nacimiento, sexo, id_dueno, id) => {
  if (!id_dueno) {
    return Promise.reject(new Error('Debe seleccionar un dueño'));
  }
  
  return fetch(API_BASE_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre, especie, edad, fecha_nacimiento, sexo, id_dueno, id})
  }).then(respuesta => console.log(respuesta)).catch((err) => console.log(err))
};

const buscarPets = (campo, valor) => {
    if (!valor || valor.trim() === '') {
        return listaPets();
    }
    
    return fetch(`${API_BASE_URL}?campo=${campo}&valor=${encodeURIComponent(valor)}`)
    .then(response => {
        if (!response.ok) throw new Error('Error al buscar mascotas');
        return response.json();
    });
};

export const petService = {
    listaPets,
    obtenerClientes,
    crearPet,
    eliminarPet,
    detallePet,
    actualizarPet,
    buscarPets
};