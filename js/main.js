'use strict';

const todoList = [];

// функция вывода значения 
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++ ) {
    const todoObject = todoList[i];
    const {name, newDate} = todoObject;
    const html = `<div>${name}</div> 
                  <div>${newDate}</div>
                  <button class="delete-button" onclick="
                  todoList.splice(${i},1);
                  renderTodoList();
                  ">Удалить</button>`;
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