const deleteData = (id) => {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`ERROR EN LA RESPUESTA estado:${response.status}`);
        }
        // añadi este extra
        const fila = document.querySelector(`tr[data-id="${id}"]`);
        if (fila) fila.remove();
        
        // volvemos el mensaje dinamico personalizado
        showResult({
            message: `El post con id ${id} fue eliminado`,
            status: response.status
        });
    })
    .catch(error => showResult(error.message, true));
};

// CODIGO ANGI
/* 
const deleteData = ()=>{
    fetch(`${API_URL}/2`, {
        method:"DELETE",
    })
    .then(response =>{
        if(!response.ok){
            throw new Error(`ERROR EN LA RESPUESTA estado:${response.status}`)
        }
        showResult({
            message:"el post con id 2 fue eliminado",
            status:response.status
        });
    })
    .catch(error => showResult(error.message, true));
};
*/