const listaclientes = () => fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json());

/*  
const listaclientes = () =>{
    return fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json());
}
*/

const crearCliente = (nombre, email) => {
    return fetch("http://localhost:3000/perfil",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({nombre, email, id: uuid.v4()})
    });
};

const eliminarCliente = (id) => {

    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE"
    });
}

// referencia a un listado de todos los clientes del json
const clientes = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json());
}

const actualizarCliente = (nombre, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({nombre, email})
    }).then(respuesta => console.log(respuesta)).catch((error) => console.log(error)); 
  };

export const clientService = {
    listaclientes,
    crearCliente,
    eliminarCliente,
    clientes,
    actualizarCliente
}

/*
{
  "perfil": [
    {
      "nombre": "fulanito",
      "email": "fulanito@gmail.com",
      "id": 1
    }
  ]
}json-server --watch Async-promesas-js/db.json --port 3000
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// METODO ANTIGUO (se puede hacer en menos lineas codigo)

/*
const crear_nueva_linea = (nombre, email) => { // recepciono datos
    const fila = document.createElement('tr'); // Creo una nueva fila en la tabla
    // Guardo el html en una variable y tambien llamo a mis variables de entrada
    const contenido = `
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_cliente.html"
                        class="simple-button simple-button--edit"
                    >    
                        Editar  
                                        
                    </a>
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button"
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


const tabla = document.querySelector('[data-table]');

const lista_clientes = () => { 
    // resolve = las acciones que deberian ejecutarse
    // reject = las acciones que indican que esta mal
    const promesa = new Promise((resolve, reject)=>{
        const http = new XMLHttpRequest(); // variable con request http yy xml
        http.open("GET", "http://localhost:3000/perfil");
        http.send();
        http.onload = () =>{
            const respuesta = JSON.parse(http.response); // convierto mi respuesta http sea json
            // validacion de la respuesta
            // los numeros mayores a 400 son codigos de error por lo que no vamos ha hacer nada
            if(http.response >= 400){
                reject(respuesta);
            } 
            // si no hay problemas ejecutamos la respuesta
            else {
                resolve(respuesta);
            }
        };
    });
    return promesa;
};

lista_clientes()
    .then((data)=>{
        data.forEach((perfil)=>{
            const nuevaFila = crear_nueva_linea(perfil.nombre, perfil.email);
            tabla.appendChild(nuevaFila);
        })
    })
    .catch((error) => alert("No existe conexión")); */