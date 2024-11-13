'use strict';

// Загружаем список задач из localStorage или создаем пустой массив
const todoList = JSON.parse(localStorage.getItem('todoList')) || []; 

// Функция для отображения задач
function renderTodoList() {
  let todoListHTML = ""; 

  todoList.forEach(function(todoObject, index) {
    const { name, newDate } = todoObject;
    const html = `<div>${name}</div> 
                  <div>${newDate}</div>
                  <button class="delete-button js-delete-button">Удалить</button>`;
    todoListHTML += html;
  });
 
  // Обновление списка задач на странице
  document.querySelector('.js-todo-list').innerHTML = todoListHTML; 
  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        saveToLocalStorage();
        renderTodoList();
      });
    });
}

// Функция для сохранения в localStorage
function saveToLocalStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList)); // Сохраняем список задач в localStorage
}

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    addTodo();
  });

// Функция добавления задачи
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value.trim();

  const dateInputElement = document.querySelector('.js-newDate-input');
  const newDate = dateInputElement.value;

  // Проверяем, что оба поля заполнены
  if (name && newDate) {
    todoList.push({ name, newDate }); // Добавляем новую задачу в массив
    saveToLocalStorage(); // Сохраняем в localStorage
    renderTodoList(); // Обновляем отображение задач
    inputElement.value = ''; // Очищаем поле ввода
    dateInputElement.value = ''; // Очищаем поле даты
  } else {
    alert("Пожалуйста, заполните оба поля!"); // Сообщение, если не все поля заполнены
  }
}

// Инициализация отображения задач при загрузке страницы
renderTodoList();
