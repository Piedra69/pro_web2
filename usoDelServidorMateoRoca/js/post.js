// Funcion para darle un nuevo id a cada post
const generarNuevoId = () => {
  let siguienteId = localStorage.getItem('lastPostId');
  if (!siguienteId || isNaN(siguienteId)) {
      siguienteId = 1;
  } else {
      siguienteId = parseInt(siguienteId) + 1;
  }
  localStorage.setItem('lastPostId', siguienteId.toString());
  return siguienteId.toString();
};


const postData = () => {
  // AÑADI
  const taskInput = document.querySelector('[data-input-task]');
  const descInput = document.querySelector('[data-input-descripcion]');
  const dateInput = document.querySelector('[data-input-fecha]');
  const priorInput = document.querySelector('[data-input-prioridad]');
  const enteroInput = document.querySelector('[data-input-entero]');

  // AÑADI validamos campos
  if (!taskInput.value || !descInput.value || !dateInput.value) {
      showResult("Faltan campos obligatorios", true);
      return;
  }

  const newPost = {
      // Id generado consecutivamente
      id: generarNuevoId(), 
      titulo: taskInput.value,
      descripcion: descInput.value,
      fecha: dateInput.value || new Date().toISOString(), 
      // AÑADI
      nombre: priorInput.value || "Sin prioridad",
      valorEntero: parseInt(enteroInput.value) || 0 
  };

  fetch(API_URL, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(newPost)
  })
  .then(response => {
      if (!response.ok) {
          throw new Error(`ERROR EN LA RESPUESTA estado:${response.status}`);
      }
      return response.json();
  })
  .then(data => {
      showResult(data);
  })
  .catch(error => showResult(error.message, true));
};

// CODIGO ANGI
/*
const postData =()=>{
    const newPost={
        titulo: "Nuevo Post",
        descripcion: "Nueva descripcion",
        fecha: new Date().toISOString()
    };
    // fetch solo abre en ese momento, despues de esa opcion se cierra
    fetch(API_URL,{
        // Todos los method en MAYUSCULA
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        // Cuerpo es Igual a un json
        body: JSON.stringify(newPost)
    })
    .then(response =>{
        if(!response.ok){
            throw new Error(`ERROR EN LA RESPUESTA estado:${response.status}`)
        }
        return response.json();
    }).then(data => showResult(data))
    .catch(error => showResult(error.message, true));
};
*/

/*
{
  "posts": [
    {
      "id": "1",
      "titulo": "Nuevo Post Creado",
      "descripcion": "CONTENIDO",
      "fecha": "2025-03-27",
      "nombre": "Presi",
      "valorEntero": 21
    },
    {
      "id": "2",
      "titulo": "Nuevo Post Creado",
      "descripcion": "CONTENIDO",
      "fecha": "2025-03-27",
      "nombre": "Angi",
      "valorEntero": 21
    }
  ]
}
*/

