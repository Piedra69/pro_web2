import cards from "./cards";

const tabla =(()=>{
    const cuerpoTabla = document.getElementById('taskTable').getElementsByTagName('tbody')[0] 
    const addTask = (task) =>{
        const nuevaFila = cuerpoTabla.insertRow(); //creamos nueva fila
        //asignamos datos a las celdas
        nuevaFila.insertCell(0).textContent = task.task;
        nuevaFila.insertCell(1).textContent = task.description;
        nuevaFila.insertCell(2).textContent = task.date;
        nuevaFila.insertCell(3).textContent = task.priority;
        // acciones
        const accionCell = nuevaFila.insertCell(4);
        const accions = document.createElement('div')
        accions.className = 'actions'
        
        //creamos boton
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completar';
        completeButton.className = 'view';
        completeButton.addEventListener('click', ()=>{
            nuevaFila.classList.toggle('complete');
            /////
            cards.update();
            /////
        });
        accions.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'eliminar';
        deleteButton.className = 'delete'
        deleteButton.addEventListener('click',()=>{
            cuerpoTabla.deleteRow(nuevaFila.rowIndex -1 );
            /////
            cards.update();
            /////
        });
        accions.appendChild(deleteButton);
        accionCell.appendChild(accions)
    };

    //recupero yo 'Caro' los elementos/contenidos de las tablas a travez del getTask
    const getTask=()=>{
        return Array.from(cuerpoTabla.rows).map(row=>({
            task : row.cell[0].textContent,
            description : row.cells [1].textContent,
            date:row.cells[2].textContent,
            priority : row.cells[3].textContent,
            completed : row.classList.contains('completed')
        }));        
    };
    return{
        addTask,
        getTask
    };
})();
export default tabla;