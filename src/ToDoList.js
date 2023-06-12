import {
  isEmpty, markUpTask, saveLocalStorage, retrieveLocalStorage, cloneCollection, taskObj,
} from './Utils.js';

class ToDoList {
  constructor() {
    this.tasksList = [];
  }

  setTasksIds = () => {
    const allTasksLi = document.querySelectorAll('.task');
    let newIndex = 0;
    this.tasksList.forEach((task, i) => {
      newIndex = i + 1;
      task.index = newIndex;
      allTasksLi[i].dataset.index = newIndex;
    });
  };

  insertTaskInDom = (newTask) => {
    const newItem = markUpTask(newTask);
    document.querySelector('#to-do-list').innerHTML += newItem;
  };

  renderAllTasks = () => {
    if (!isEmpty(this.tasksList)) {
      const listItems = this.tasksList.forEach((task) => this.insertTaskInDom(task));
      this.loadTasksEventHandlers();
    }
  };

  createTask = (inputDesc) => {
    const inputTaskDescription = inputDesc.value;
    if (!isEmpty(inputTaskDescription)) {
      const id = this.tasksList.length + 1;
      const newTask = taskObj(inputTaskDescription, false, id);
      this.tasksList.push(newTask);
      inputDesc.value = '';
      inputDesc.focus();
      saveLocalStorage('tasks-list', JSON.stringify(this.tasksList));
      this.insertTaskInDom(newTask);
      this.loadTasksEventHandlers();
    }
  };

  updateTask = (event) => {
    const taskItem = event.target;
    const taskId = taskItem.parentElement.parentElement.dataset.index;
    const index = Number(taskId) - 1;
    const taskDescription = taskItem.innerText;
    this.tasksList[index].description = taskDescription;
  };

  UpdateTaskStatus = (event) => {
    const taskCompleted = event.target.checked;
    const taskItem = event.target.parentElement.parentElement.parentElement;
    const taskId = taskItem.dataset.index;
    const index = Number(taskId) - 1;
    this.tasksList[index].completed = taskCompleted;
    saveLocalStorage('tasks-list', JSON.stringify(this.tasksList));
    taskItem.classList.toggle('completed');
  };

  deleteTask = (event) => {
    const taskBtnRemove = event.target;
    const taskItem = taskBtnRemove.parentElement;
    const taskId = Number(taskItem.dataset.index);
    const newTaskList = this.tasksList.filter(
      (task) => task.index !== taskId,
    );
    taskItem.remove();
    this.tasksList = cloneCollection(newTaskList);
    this.setTasksIds();
    saveLocalStorage('tasks-list', JSON.stringify(this.tasksList));
  };

  deleteAllCompletedTasks = () => {
    if(!isEmpty(this.tasksList)) {
      let newElements = [];
      let task = null;
      const allTasksLi = document.querySelectorAll('.task');
      for (let i = 0; i < this.tasksList.length; i+=1) {
        task = this.tasksList[i];
        if(task.completed) {
          allTasksLi[i].remove();
          continue;
        }
        newElements.push(task);
      }
      this.tasksList = cloneCollection(newElements);
      this.setTasksIds();
      saveLocalStorage('tasks-list', JSON.stringify(this.tasksList));
    }
  };

  onTaskFocus = (event) => {
    const taskItem = event.target.parentElement.parentElement;
    const btnRemove = taskItem.querySelector('.remove-task');
    taskItem.classList.add('focus');
    btnRemove.style.display = 'block';
    btnRemove.style.opacity = '1';
    btnRemove.removeAttribute('disabled');
  };

  onTaskFocusOut = (event) => {
    const taskItem = event.target.parentElement.parentElement;
    const btnRemove = taskItem.querySelector('.remove-task');
    taskItem.classList.remove('focus');
    btnRemove.style.opacity = '0';
    setTimeout(() => {
      btnRemove.setAttribute('disabled', 'true');
      btnRemove.style.display = 'none';
    }, 500);
    saveLocalStorage('tasks-list', JSON.stringify(this.tasksList));
  };

  createTaskEventHandler = () => {
    const inputDescription = document.querySelector('#inputTaskDescription');
    const btnAddTask = document.querySelector('#btnAddTask');
    inputDescription.addEventListener('keydown', (event) => {
      if (event.code === 'Enter') {
        this.createTask(inputDescription);
      }
    });
    btnAddTask.addEventListener('click', () => {
      this.createTask(inputDescription);
    });
  };

  loadTasksEventHandlers() {
    const allTaskDescription = document.querySelectorAll('.task-description');
    const allTaskBtnRemove = document.querySelectorAll('.remove-task');
    const allTaskCheckbox = document.querySelectorAll('.task-check-status');
    allTaskDescription.forEach((inputDesc) => {
      inputDesc.addEventListener('keyup', this.updateTask);
      inputDesc.addEventListener('focusin', this.onTaskFocus);
      inputDesc.addEventListener('focusout', this.onTaskFocusOut);
    });
    allTaskBtnRemove.forEach((btnRemove) => {
      btnRemove.addEventListener('click', this.deleteTask);
    });
    allTaskCheckbox.forEach((checkboxStatus) => {
      checkboxStatus.addEventListener('change', this.UpdateTaskStatus);
    });
  }

  clearAllEventHandler = () => {
    document
      .querySelector('#btn-clear-list')
      .addEventListener('click', this.deleteAllCompletedTasks);
  };

  listTasks = () => {
    const getAllData = retrieveLocalStorage('tasks-list');
    this.tasksList = !isEmpty(getAllData)
      ? cloneCollection(JSON.parse(getAllData))
      : [];
    this.renderAllTasks();
    this.createTaskEventHandler();
    this.clearAllEventHandler();
  };

  refreshListEventHandler = () => {
    document.querySelector('#refresh').addEventListener('click', (event) => {
      const rotateButton = [
        { transform: 'rotate(-90deg)' },
        { transform: 'rotate(90deg)' },
      ];
      event.target.animate(rotateButton, { duration: 300, iterations: 1 });
      this.listTasks();
    });
  };

  init = () => {
    this.listTasks();
    this.refreshListEventHandler();
  };
}

export default ToDoList;
