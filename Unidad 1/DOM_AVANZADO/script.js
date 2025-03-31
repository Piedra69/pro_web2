import Form from "./components/formulario.js"
import Table from "./components/tabla.js"
import cards from "./components/cards.js"
(()=>{
    Form.setDatos((task)=>{
        Table.addTask(task)
        cards.update();
    });
})();