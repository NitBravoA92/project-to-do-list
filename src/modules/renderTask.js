import { isEmpty, markUpTask } from './Utils.js';
import { updateFocusEventHandlers } from './updateTask.js';
import { deleteEventHandler } from './deleteTask.js';

export const loadTasksEventHandlers = () => {
  updateFocusEventHandlers();
  deleteEventHandler();
};

export const insertTaskInDom = (newTask) => {
  const newItem = markUpTask(newTask);
  document.querySelector('#to-do-list').innerHTML += newItem;
};

export const renderAllTasks = (tasksList) => {
  if (!isEmpty(tasksList)) {
    tasksList.forEach((task) => insertTaskInDom(task));
    loadTasksEventHandlers();
  }
};