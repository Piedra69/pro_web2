const deleteData=()=>{
    fetch(`${API_URL}/1`,{
        method:"DELETE",
    })
    .then(response =>{
        if(!response.ok){
            throw new Error(`ERROR EN LA RESPUESTA ESTADO:${response.status}`)
        }
       showResult({
            message:"el post con el id 1 fue eliminado",
            status:response.status
       });
    
}).catch(error => showResult(error.message,true));
};