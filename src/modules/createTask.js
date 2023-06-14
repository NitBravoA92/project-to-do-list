import {
  retrieveLocalStorage, saveLocalStorage, taskObj, isEmpty,
} from './Utils.js';
import {
  insertTaskInDom,
  loadTasksEventHandlers,
} from './renderTask.js';

export const createTask = (inputDesc) => {
  const inputTaskDescription = inputDesc.value;
  const tasksList = retrieveLocalStorage('tasks-list');
  if (!isEmpty(inputTaskDescription)) {
    const id = tasksList.length + 1;
    const newTask = taskObj(inputTaskDescription, false, id);
    tasksList.push(newTask);
    inputDesc.value = '';
    inputDesc.focus();
    saveLocalStorage('tasks-list', JSON.stringify(tasksList));
    insertTaskInDom(newTask);
    loadTasksEventHandlers();
  }
};

export const createTaskEventHandler = () => {
  const taskForm = document.querySelector('#new-task-entry');
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createTask(taskForm.inputTaskDescription);
  });
};