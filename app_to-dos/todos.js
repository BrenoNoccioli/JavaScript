var listElement = document.querySelector('#list ul');
var inputElement = document.querySelector('#insert input');
var buttonElement = document.querySelector('#insert button');
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

inputElement.focus();

function renderTodos() {
  listElement.innerHTML = '';

  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    todoElement.classList.add('todoElement');

    var buttonDeleteElement = document.createElement('button');
    buttonDeleteElement.classList.add('deleteButton');
    buttonDeleteElement.innerHTML = 'X';

    var pos = todos.indexOf(todo);
    buttonDeleteElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    todoElement.appendChild(todoText);
    todoElement.appendChild(buttonDeleteElement);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  if (inputElement.value !== '') {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
  } else {
    alert('Por favor, digite um item para ser adicionado à lista.');
    renderTodos();
  }
  inputElement.focus();
  saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}
