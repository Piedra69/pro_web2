const API_URL='http://localhost:3000/posts' //este enlace lo saque de la conexion a mi archivo json

const getData =()=>{
    fetch(API_URL)
        .then(response=>{
            if(!response.ok){
                throw new Error(`error en la peticion get el estado es: ${response.status}`)
            }
            return response.json()
        })
        .then(data => showResult(data))
        .catch(error => showResult(error.message,true));
}