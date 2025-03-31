const deleteData=()=>{
    fetch(`${API_URL}/1`,{
        method:"DELETE"
    })
    .then(respose=>{
        if(!response.ok){
            throw new Error(`error en la respuesta estado es: ${response.status}`)
        }
        showResult({
            message:"el post con id 1 fue eliminado",
            status:response.status
        });
    }).catch(error => showResult(error.message,true)
    )
    }
;