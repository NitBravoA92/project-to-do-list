import {
  retrieveLocalStorage, saveLocalStorage, cloneCollection, isEmpty,
} from './Utils.js';
import { setTasksIds } from './updateTask.js';

export const deleteTask = (taskItem) => {
  const taskId = Number(taskItem.dataset.index);
  let tasksList = retrieveLocalStorage('tasks-list');
  const newTaskList = tasksList.filter(
    (task) => task.index !== taskId,
  );
  taskItem.remove();
  tasksList = cloneCollection(newTaskList);
  return tasksList;
};

export const deleteAllCompletedTasks = (tasksList, allTasksLi) => {
  if (!isEmpty(tasksList)) {
    const newElements = [];
    let task = null;
    for (let i = 0; i < tasksList.length; i += 1) {
      task = tasksList[i];
      if (task.completed) {
        allTasksLi[i].remove();
      } else {
        newElements.push(task);
      }
    }
    tasksList = cloneCollection(newElements);
    setTasksIds(tasksList);
    saveLocalStorage('tasks-list', JSON.stringify(tasksList));
    return retrieveLocalStorage('tasks-list');
  }
};

export const deleteEventHandler = () => {
  const allTaskBtnRemove = document.querySelectorAll('.remove-task');
  allTaskBtnRemove.forEach((btnRemove) => {
    btnRemove.addEventListener('click', (event) => {
      const btnRemove = event.target;
      const taskListUpdated = deleteTask(btnRemove.parentElement);
      setTasksIds(taskListUpdated);
      saveLocalStorage('tasks-list', JSON.stringify(taskListUpdated));
    });
  });
};

export const clearAllEventHandler = () => {
  document
    .querySelector('#btn-clear-list')
    .addEventListener('click', (event) => {
      let tasksList = retrieveLocalStorage('tasks-list');
      const allTasksLi = document.querySelectorAll('.task');
      deleteAllCompletedTasks(tasksList, allTasksLi);
    });
};