const deleteData = (id) => { 
    fetch(`${API_URL}/${id}`, { 
        method: "DELETE",
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`ERROR EN LA RESPUESTA ESTADO: ${response.status}`);
        }
        showResult({
            message: `El post con el id ${id} fue eliminado`, 
            status: response.status
        });
    })
    .catch(error => showResult(error.message, true));
};