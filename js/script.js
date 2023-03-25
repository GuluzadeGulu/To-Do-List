document.getElementById('button-add').addEventListener('click', addToDo);

function addToDo () {
    const inputText = document.getElementById('add-todo');
    if (!inputText){
        alert('Enter your plan.')
    }
    else{
        const todoList = document.querySelector('.todo-list');
        const newEl = document.createElement('li');
        newEl.innerHTML = `<li class="todo">
                                <div class="box">
                                    <input type="checkbox">
                                    <span>${inputText.value}</span>
                                </div>
                                <button class="delete-todo"><img src="images/icons8-cancel.svg" alt="Cancel"></button>
                            </li>`;
        todoList.appendChild(newEl);
        inputText.value = '';
    }
}
