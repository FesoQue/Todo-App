//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


//event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', clickCheck);
filterOption.addEventListener('click', filterTodo);

//functions
function addTodo(e){
    e.preventDefault();
    //create div with a class of todo
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create a single list item
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerText = todoInput.value;
    todoDiv.appendChild(todoItem);
    //mark button
    completedButton = document.createElement('button');
    completedButton.classList.add('completed-btn');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completedButton);
    //completed button
    trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashButton);
    //append todoDiv to its parent todolist
    todoList.appendChild(todoDiv);
    //remove
    todoInput.value = "";
}

function clickCheck(e){
    const item = e.target;
    //delete
    if(item.classList[0] === "trash-btn"){
        var deleteTodo = item.parentElement;
        deleteTodo.remove();
    }
    
    //check completed
    if(item.classList[0] === "completed-btn"){
        const checkTodo = item.parentElement;
        checkTodo.classList.toggle('completed');
    }
}

function filterTodo(e){
const todos = todoList.childNodes;
    todos.forEach(function(todo){
      switch(e.target.value){
        case "All":
          todo.style.display = 'flex';
        break;
          
        case "Completed":
          if(todo.classList.contains('completed')){
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
          }
        break;
            
        case "Uncompleted":
        if(!todo.classList.contains('completed')){
            todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';  
        }
          
    }
  });
}





