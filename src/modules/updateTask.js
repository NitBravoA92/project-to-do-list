import { 
  retrieveLocalStorage, saveLocalStorage 
} from './Utils.js';

const updateTask = (taskItem) => {
  const taskId = taskItem.parentElement.parentElement.dataset.index;
  const index = Number(taskId) - 1;
  const taskDescription = taskItem.innerText;
  const tasksList = retrieveLocalStorage('tasks-list');
  tasksList[index].description = taskDescription;
  saveLocalStorage('tasks-list', JSON.stringify(tasksList));
};

const updateTaskStatus = (checkboxElement) => {
  const taskCompleted = checkboxElement.checked;
  const taskItem = checkboxElement.parentElement.parentElement.parentElement;
  const taskId = taskItem.dataset.index;
  const index = Number(taskId) - 1;
  const tasksList = retrieveLocalStorage('tasks-list');
  tasksList[index].completed = taskCompleted;
  saveLocalStorage('tasks-list', JSON.stringify(tasksList));
  taskItem.classList.toggle('completed');
};

const onTaskFocus = (event) => {
  const taskItem = event.target.parentElement.parentElement;
  const btnRemove = taskItem.querySelector('.remove-task');
  taskItem.classList.add('focus');
  btnRemove.style.display = 'block';
  btnRemove.style.opacity = '1';
  btnRemove.removeAttribute('disabled');
};

const onTaskFocusOut = (event) => {
  const taskItem = event.target.parentElement.parentElement;
  const btnRemove = taskItem.querySelector('.remove-task');
  taskItem.classList.remove('focus');
  btnRemove.style.opacity = '0';
  setTimeout(() => {
    btnRemove.setAttribute('disabled', 'true');
    btnRemove.style.display = 'none';
  }, 500);
};

export const updateFocusEventHandlers = () => { 
  const allTaskDescription = document.querySelectorAll('.task-description');
  const allTaskCheckbox = document.querySelectorAll('.task-check-status');
  allTaskDescription.forEach((inputDesc) => {
    inputDesc.addEventListener('keyup', (event) => {
      const taskItem = event.target;
      updateTask(taskItem);
    });
    inputDesc.addEventListener('focusin', onTaskFocus);
    inputDesc.addEventListener('focusout', onTaskFocusOut);
  });
  allTaskCheckbox.forEach((checkboxStatus) => {
    checkboxStatus.addEventListener('change', (event) => {
      const checkbox = event.target;
      updateTaskStatus(checkbox);
    });
  });
}