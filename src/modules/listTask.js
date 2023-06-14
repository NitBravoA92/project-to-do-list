import { renderAllTasks } from './renderTask.js';
import { createTaskEventHandler } from './createTask.js';
import { clearAllEventHandler } from './deleteTask.js';
import {
  isEmpty, retrieveLocalStorage, cloneCollection,
} from './Utils.js';

export const listTasks = () => {
  document.querySelector('#to-do-list').innerHTML = '';
  const getAllData = retrieveLocalStorage('tasks-list');
  const tasksList = !isEmpty(getAllData)
    ? cloneCollection(getAllData)
    : [];
  renderAllTasks(tasksList);
  createTaskEventHandler();
  clearAllEventHandler();
};

export const refreshListEventHandler = () => {
  document.querySelector('#refresh').addEventListener('click', (event) => {
    const rotateButton = [
      { transform: 'rotate(-90deg)' },
      { transform: 'rotate(90deg)' },
    ];
    event.target.animate(rotateButton, { duration: 300, iterations: 1 });
    listTasks();
  });
};