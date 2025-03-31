const postData=()=>{
    const newPost={
        titulo:"Nuevo Post",
        descripcion:"Nueva Descripcion",
        fecha:new Date().toISOString()
    };
    fetch(API_URL,{
        method:"POST",
        HEADERS:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify(newPost)
    })
    .then(respose=>{
        if(!response.ok){
            throw new Error(`error en la respuesta estado es: ${response.status}`)
        }
        return response.json()

    })
    .then(data=>showResult(data))
    .catch(error=>showResult(error.message,true));
}