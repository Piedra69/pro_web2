
const btn = document.querySelector('[data-form-btn]');
 
console.log(btn);
const createTask=(evento)=>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
    const value = input.value;
    const list=document.querySelector('[data-list]')
    const task=document.createElement('li')
    task.classList.add('card')
    input.value="";
    const contenido = '<div><i class="far fa-check-square icon"></i><span class"task">${value}</span><</div> <i class="fas fa-trash-alt trashIcon icon"></i>'
    const conTask=document.createElement('div');
    conTask.appendChild
    const tittletask=document.createElement('span')
 
    tittletask.classList.add('task');
    tittletask.innerText=value;
    conTask.appendChild(tittletask)
    const content='<i class"fas fa-trash-alt trashIcon icon"></i>'
    
    task.appendChild(conTask);
    task.appendChild(deleteIcon())
    task.appendChild(task)
    console.log(contenido);
}
 
btn.addEventListener('click',createTask);
 
 
const checkComplete=()=>{
    const i=document.createElement('i')
    i.classList.add("far fa-check square icon","icon")
    i.addEventListener('click',color)
    return i;
}
 
 
 
const color=(evento)=>{
    const element=evento.target
    element.classList.add('fas');
    element.classlist.add('completeIcon');
    element.classlist.remove('far');
};
export default checkComplete