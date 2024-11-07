'use strict';

const todoList = [{
  name:'Приготовить ужин',
  newDate: '2024-11-07'
}, { name:'Помыть посуду',
     newDate: '2024-11-07'
}];

// функция вывода значения 
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++ ) {
    const todoObject = todoList[i];
    const {name, newDate} = todoObject;
    const html = `<p>${name} ${newDate}
                  <button onclick="
                  todoList.splice(${i},1);
                  renderTodoList();
                  ">Удалить</button></p>`;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

// функция получения значения из поля ввода и добавления в массив
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-newDate-input');
  const newDate = dateInputElement.value;
  todoList.push({
    name,
    newDate
  });
  inputElement.value = '';
  renderTodoList();
}