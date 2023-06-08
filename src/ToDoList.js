class ToDoList {
  constructor() {
    this.tasksList = [];
  }

  getTasksListFromStore = () => {
    const tasks = localStorage.getItem('tasks-list');
    if (tasks) {
      this.tasksList = [...JSON.parse(tasks)];
    }
  };

  setTasksListToStore = () => {
    localStorage.setItem('tasks-list', JSON.stringify(this.tasksList));
  };

  setTasksIds = () => {
    const tasks = this.tasksList.map((task, i) => ({
      description: task.description,
      completed: task.completed,
      index: i + 1,
    }));
    this.tasksList = [...tasks];
  };

  markUpTask = (task) => `
    <li class="task ${task.completed ? 'completed' : ''}" data-index="${task.index}">
      <div class="task-content">
        <div class="mark-task">
          <input type="checkbox" id="task-${task.index}-status" class="task-check-status" ${task.completed ? 'checked' : ''}>
          <label for="task-${task.index}-status"></label>
        </div>
        <h3 class="task-description" contenteditable="true">${
          task.description
        }</h3>
      </div>
      <div class="task-options">
        <div class="drag-icon">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
      <button type="button" class="remove-task" disabled>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#bebebe" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
      </button>
    </li>
  `;

  renderTasksList = () => {
    const listItems = this.tasksList.map((task) => this.markUpTask(task));
    document.querySelector('#to-do-list').innerHTML = listItems.join('');
    if(this.tasksList.length > 0) {
      this.generalEventHandlers();
    }
  };

  createTask = (inputDesc) => {
    const inputDescription = inputDesc.value;
    if (inputDescription.length > 0) {
      const id = this.tasksList.length + 1;
      const newTask = {
        description: inputDescription,
        completed: false,
        index: id,
      };
      this.tasksList.push(newTask);
      inputDesc.value = '';
      inputDesc.focus();
      this.setTasksListToStore();
      this.renderTasksList();
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
    this.setTasksListToStore();
    taskItem.classList.toggle('completed');
  };

  deleteTask = (event) => {
    const taskBtnRemove = event.target;
    const taskItem = taskBtnRemove.parentElement;
    const taskId = Number(taskItem.dataset.index);
    if (this.tasksList.length > 0) {
      const newTaskList = this.tasksList.filter((task) => task.index !== taskId);
      this.tasksList = [...newTaskList];
      this.setTasksIds();
      this.setTasksListToStore();
      this.renderTasksList();
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
    this.setTasksListToStore();
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

  generalEventHandlers() {
    const allTaskDescription = document.querySelectorAll('.task-description');
    const allTaskBtnRemove = document.querySelectorAll('.remove-task');
    const allTaskCheckbox = document.querySelectorAll('.task-check-status');
    allTaskDescription.forEach((task) => {
      task.addEventListener('keyup', this.updateTask);
      task.addEventListener('focusin', this.onTaskFocus);
      task.addEventListener('focusout', this.onTaskFocusOut);
    });
    allTaskBtnRemove.forEach((btnRemove) => {
      btnRemove.addEventListener('click', this.deleteTask);
    });
    allTaskCheckbox.forEach((inputStatus) => {
      inputStatus.addEventListener('change', this.UpdateTaskStatus);
    });
  }

  listTasks = () => {
    this.getTasksListFromStore();
    this.renderTasksList();
    this.createTaskEventHandler();
  }

  init = () => {
    this.listTasks();
  }
}

export default ToDoList;