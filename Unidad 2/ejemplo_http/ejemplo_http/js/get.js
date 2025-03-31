const API_URL='htpp://localhost:3000/posts'

const getData=()=>{
    fetch(API_URL)
    .then(response=>{
        if(!response.ok){
            throw new Error(`error en la peticion get del estado es: ${response.status}`)
        }
        return response.json()
    })
    .then(data=>showResult(data))
    .catch(error=>showResult(error.message,true));
}