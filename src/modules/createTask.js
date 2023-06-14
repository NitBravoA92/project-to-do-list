import {
  retrieveLocalStorage, saveLocalStorage, taskObj, isEmpty, markUpTask
} from './Utils.js';
import {
  loadTasksEventHandlers,
} from './renderTask.js';

export const createTask = (inputTaskDescription) => {
  const tasksList = retrieveLocalStorage('tasks-list');
    const id = tasksList.length + 1;
    const newTask = taskObj(inputTaskDescription, false, id);
    tasksList.push(newTask);
    saveLocalStorage('tasks-list', JSON.stringify(tasksList));
    const newItem = markUpTask(newTask);
    return newItem;
};

export const createTaskEventHandler = () => {
  const taskForm = document.querySelector('#new-task-entry');
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputDesc = taskForm.inputTaskDescription; 
    if (!isEmpty(inputDesc.value)) {
      const newItem = createTask(inputDesc.value);
      document.querySelector('#to-do-list').innerHTML += newItem;
      inputDesc.value = '';
      inputDesc.focus();
      loadTasksEventHandlers();
    }
  });
};