import { 
  retrieveLocalStorage, saveLocalStorage, cloneCollection, isEmpty 
} from './Utils.js';
import { setTasksIds } from './renderTask.js';

export const deleteTask = (taskBtnRemove) => {
  const taskItem = taskBtnRemove.parentElement;
  const taskId = Number(taskItem.dataset.index);
  let tasksList = retrieveLocalStorage('tasks-list');
  const newTaskList = tasksList.filter(
    (task) => task.index !== taskId,
  );
  taskItem.remove();
  tasksList = cloneCollection(newTaskList);
  setTasksIds(tasksList);
  saveLocalStorage('tasks-list', JSON.stringify(tasksList));
};

export const deleteAllCompletedTasks = () => {
  let tasksList = retrieveLocalStorage('tasks-list');
  if(!isEmpty(tasksList)) {
    let newElements = [];
    let task = null;
    const allTasksLi = document.querySelectorAll('.task');
    for (let i = 0; i < tasksList.length; i+=1) {
      task = tasksList[i];
      if(task.completed) {
        allTasksLi[i].remove();
        continue;
      }
      newElements.push(task);
    }
    tasksList = cloneCollection(newElements);
    setTasksIds(tasksList);
    saveLocalStorage('tasks-list', JSON.stringify(tasksList));
  }
};

export const deleteEventHandler = () => { 
  const allTaskBtnRemove = document.querySelectorAll('.remove-task');
    allTaskBtnRemove.forEach((btnRemove) => {
      btnRemove.addEventListener('click', (event) => {
        const btnRemove = event.target;
        deleteTask(btnRemove);
      });
    });
}

export const clearAllEventHandler = () => {
  document
    .querySelector('#btn-clear-list')
    .addEventListener('click', deleteAllCompletedTasks);
};