import { 
  retrieveLocalStorage, saveLocalStorage, taskObj, isEmpty 
} from './Utils.js';
import { 
  insertTaskInDom, 
  loadTasksEventHandlers 
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
  const inputDescription = document.querySelector('#inputTaskDescription');
  const btnAddTask = document.querySelector('#btnAddTask');
  inputDescription.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
      createTask(inputDescription);
    }
  });
  btnAddTask.addEventListener('click', () => {
    createTask(inputDescription);
  });
};