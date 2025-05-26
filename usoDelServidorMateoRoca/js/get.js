const API_URL = 'http://localhost:3000/posts';

const getData = () => {
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la petición GET. Estado: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // AÑADI 
            const tbody = document.querySelector('#taskTable tbody');
            tbody.innerHTML = '';

            data.forEach(post => {
                const fila = tbody.insertRow();
                // darle un data set con el valor de su id
                fila.setAttribute('data-id', post.id);

                // Llenar celdas con datos
                fila.insertCell(0).textContent = post.id;
                fila.insertCell(1).textContent = post.titulo;
                fila.insertCell(2).textContent = post.descripcion;
                fila.insertCell(3).textContent = post.fecha;
                fila.insertCell(4).textContent = post.nombre;
                fila.insertCell(5).textContent = post.valorEntero;

                // Botones de acciones (PUT/DELETE)
                const cellAcciones = fila.insertCell(6);
                const divAcciones = document.createElement('div');
                divAcciones.className = 'actions';

                // Botón PUT
                const btnPut = document.createElement('button');
                btnPut.textContent = 'PUT';
                btnPut.className = 'view';
                btnPut.addEventListener('click', () => putData(post.id));
                divAcciones.appendChild(btnPut);

                // Botón DELETE
                const btnDelete = document.createElement('button');
                btnDelete.textContent = 'DELETE';
                btnDelete.className = 'delete';
                btnDelete.addEventListener('click', () => deleteData(post.id));
                divAcciones.appendChild(btnDelete);

                cellAcciones.appendChild(divAcciones);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

document.addEventListener('DOMContentLoaded', getData);

// CODIGO ANGI
/*
const getData =()=>{
    fetch(API_URL)
        .then(response =>{
            // Si hay un error va a informar
            if(!response.ok){
                throw new Error(`error en la peticion get del estado es: ${response.status}`);
            }
            return response.json()
        })
        .then(data => showResult(data))
        .catch(error => showResult(error.message, true));
};
*/

/*
    LEVANTAR EL SERVIDOR

    added 45 packages in 3s

    14 packages are looking for funding
    run `npm fund` for details

    Presi@LAPTOP-NAM911L1 MINGW64 ~/Desktop/UNIVALLE/GIT HUB OFICIAL/webII (unidad2)
    $ json-server --watch practica7Abril/api/db.json --port 3000
    --watch/-w can be omitted, JSON Server 1+ watches for file changes by default
    JSON Server started on PORT :3000
    Press CTRL-C to stop
    Watching practica7Abril/api/db.json...

    ♡( ◡‿◡ )

    Index:
    http://localhost:3000/

    Static files:
    Serving ./public directory if it exists

    Endpoints:
    http://localhost:3000/posts
*/

/*
    INSTALAR EL SERVIDOR

    Si es que te sale este error:    
        Presi@LAPTOP-NAM911L1 MINGW64 ~/Desktop/UNIVALLE/GIT HUB OFICIAL/webII (unidad2)
    $ json-server --watch practica7Abril/api/db.json --port 3000
    bash: json-server: command not found

    Presi@LAPTOP-NAM911L1 MINGW64 ~/Desktop/UNIVALLE/GIT HUB OFICIAL/webII (unidad2)
    $ npm install -g json-server

    added 45 packages in 5s

    14 packages are looking for funding
    run `npm fund` for details
    npm notice
    npm notice New major version of npm available! 10.9.2 -> 11.2.0
    npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.2.0
    npm notice To update run: npm install -g npm@11.2.0
    npm notice
*/

