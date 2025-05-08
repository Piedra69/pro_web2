const API_URL = 'http://localhost:3000/posts'; //este enlace lo saque de la conexion a mi archivo json

const getData = () => {
    fetch(API_URL)
        .then(response => response.json()) 
        .then(data => showResult(data))
        .catch(error => showResult(error.message, true)); 
};