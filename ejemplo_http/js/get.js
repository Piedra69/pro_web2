const API_URL='http://localhost:3000/posts'; // se recupera despues de ejecutar este comando en la terminal
/*
    LEVANTAR EL SERVIDOR

    Estudiante@CC308-03 MINGW64 /d/PrograWeb2/webII (unidad2)
    $ json-server --watch ejemplo_http/api/db.json --port 3000
    
    --watch/-w can be omitted, JSON Server 1+ watches for file changes by default
    JSON Server started on PORT :3000
    Press CTRL-C to stop
    Watching ejemplo_http/api/db.json...

    ( ˶ˆ ᗜ ˆ˵ )

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
    Estudiante@CC308-03 MINGW64 /d/PrograWeb2/webII (unidad2)
    $ json-server --watch ejemplo_http/api/db.json --port 3000
    bash: json-server: command not found


    Estudiante@CC308-03 MINGW64 /d/PrograWeb2/webII (unidad2)
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

// Esta funcion me sirve para realizar conexion con el servidor
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