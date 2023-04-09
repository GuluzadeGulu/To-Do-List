document.getElementById('button-add').addEventListener('click', addToDo);

function addToDo () {
    const inputText = document.getElementById('add-todo');
    if (!inputText.value){
        alert('Enter your plan.')
    }
    else{
        const todoList = document.querySelector('.todo-list');
        const newEl = document.createElement('li');
        newEl.innerHTML = `<div class="box">
                                <input type="checkbox">
                                <span>${inputText.value}</span>
                            </div>
                            <button class="delete-todo"><img src="images/icons8-cancel.svg" alt="Cancel"></button>`;
        todoList.appendChild(newEl);
        inputText.value = '';

        document.querySelectorAll('.delete-todo').forEach((el) => {
            el.addEventListener('click', () => {
                el.parentNode.remove()
            })
        });
    }
}