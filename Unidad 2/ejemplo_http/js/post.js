const postData = () => { //aqui creo un archivo para enviar insertar o crear en la base de datos
    const newPost = {
        titulo: "Nuevo Post",
        descripcion: "nueva descripcion",
        fecha: new Date().toISOString(),
        nombre: "nuevo nombre",
        numero: 123 // Valor predeterminado para el campo 'numero'
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
            throw new Error(`ERROR EN LA RESPUESTA ESTADO: ${response.status}`);
        }
        return response.json();
    })
    .then(data => showResult(data))
    .catch(error => showResult(error.message, true));
};