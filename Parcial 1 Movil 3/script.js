document.addEventListener('DOMContentLoaded', () => {
    const newItemInput = document.querySelector('[data-newItem]');
    const addBtn = document.querySelector('[data-addBtn]');
    const taskList = document.querySelector('[data-taskList]');
    const toggleBtn = document.querySelector('[data-toggleBtn]');
    const countBtn = document.querySelector('[data-countBtn]');
    const output = document.querySelector('[data-output]');

    addBtn.addEventListener('click', () => {
        const inputValue = newItemInput.value.trim();
        
        if (inputValue === '') {
            alert('Por favor, ingresa una tarea');
            return;
        }
        const newItem = document.createElement('li');
        newItem.textContent = inputValue;
        newItem.classList.add('item');
        taskList.appendChild(newItem);
        
        newItemInput.value = '';
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('relleno');
        }
    });

    toggleBtn.addEventListener('click', () => {
        const items = taskList.querySelectorAll('li');
        if (items.length > 0) {
            const lastItem = items[items.length - 1];
            lastItem.classList.toggle('tachado');
        }
    });

    countBtn.addEventListener('click', () => {
        const itemCount = taskList.querySelectorAll('li').length;
        output.textContent = `Total de tareas: ${itemCount}`;
    });
    
    taskList.addEventListener('dblclick', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.remove();
        }
    });
    
    taskList.querySelectorAll('li').forEach((item, index) => {
        item.dataset.id = index + 1;
    });
});
 