import { isEmpty, markUpTask, saveLocalStorage } from './Utils.js';

class ToDoList {
  constructor() {
    this.tasksList = [];
  }

  getTasksListFromStore = () => {
    const tasks = localStorage.getItem("tasks-list");
    if (tasks) {
      this.tasksList = [...JSON.parse(tasks)];
    }
  };

  setTasksIds = () => {
    const tasks = this.tasksList.map((task, i) => ({
      description: task.description,
      completed: task.completed,
      index: i + 1,
    }));
    this.tasksList = [...tasks];
  };

  renderTasksList = () => {
    const listItems = this.tasksList.map((task) => markUpTask(task));
    document.querySelector("#to-do-list").innerHTML = listItems.join("");
    if (!isEmpty(this.tasksList)) {
      this.generalEventHandlers();
    }
  };

  createTask = (inputDesc) => {
    const inputDescription = inputDesc.value;
    if (!isEmpty(inputDescription)) {
      const id = this.tasksList.length + 1;
      const newTask = {
        description: inputDescription,
        completed: false,
        index: id,
      };
      this.tasksList.push(newTask);
      inputDesc.value = "";
      inputDesc.focus();
      saveLocalStorage("tasks-list", JSON.stringify(this.tasksList));
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
    saveLocalStorage("tasks-list", JSON.stringify(this.tasksList));
    taskItem.classList.toggle("completed");
  };

  deleteTask = (event) => {
    const taskBtnRemove = event.target;
    const taskItem = taskBtnRemove.parentElement;
    const taskId = Number(taskItem.dataset.index);
    if (!isEmpty(this.tasksList)) {
      const newTaskList = this.tasksList.filter(
        (task) => task.index !== taskId
      );
      this.tasksList = [...newTaskList];
      this.setTasksIds();
      saveLocalStorage("tasks-list", JSON.stringify(this.tasksList));
      this.renderTasksList();
    }
  };

  deleteAllCompletedTasks = () => {
    if (!isEmpty(this.tasksList)) {
      const newTasksList = this.tasksList.filter((task) => !task.completed);
      this.tasksList = [...newTasksList];
      this.setTasksIds();
      saveLocalStorage("tasks-list", JSON.stringify(this.tasksList));
      this.renderTasksList();
    }
  };

  onTaskFocus = (event) => {
    const taskItem = event.target.parentElement.parentElement;
    const btnRemove = taskItem.querySelector(".remove-task");
    taskItem.classList.add("focus");
    btnRemove.style.display = "block";
    btnRemove.style.opacity = "1";
    btnRemove.removeAttribute("disabled");
  };

  onTaskFocusOut = (event) => {
    const taskItem = event.target.parentElement.parentElement;
    const btnRemove = taskItem.querySelector(".remove-task");
    taskItem.classList.remove("focus");
    btnRemove.style.opacity = "0";
    setTimeout(() => {
      btnRemove.setAttribute("disabled", "true");
      btnRemove.style.display = "none";
    }, 500);
    saveLocalStorage("tasks-list", JSON.stringify(this.tasksList));
  };

  createTaskEventHandler = () => {
    const inputDescription = document.querySelector("#inputTaskDescription");
    const btnAddTask = document.querySelector("#btnAddTask");
    inputDescription.addEventListener("keydown", (event) => {
      if (event.code === "Enter") {
        this.createTask(inputDescription);
      }
    });
    btnAddTask.addEventListener("click", () => {
      this.createTask(inputDescription);
    });
  };

  generalEventHandlers() {
    const allTaskDescription = document.querySelectorAll(".task-description");
    const allTaskBtnRemove = document.querySelectorAll(".remove-task");
    const allTaskCheckbox = document.querySelectorAll(".task-check-status");
    allTaskDescription.forEach((task) => {
      task.addEventListener("keyup", this.updateTask);
      task.addEventListener("focusin", this.onTaskFocus);
      task.addEventListener("focusout", this.onTaskFocusOut);
    });
    allTaskBtnRemove.forEach((btnRemove) => {
      btnRemove.addEventListener("click", this.deleteTask);
    });
    allTaskCheckbox.forEach((inputStatus) => {
      inputStatus.addEventListener("change", this.UpdateTaskStatus);
    });
  }

  clearAllEventHandler = () => {
    document
      .querySelector("#btn-clear-list")
      .addEventListener("click", this.deleteAllCompletedTasks);
  };

  listTasks = () => {
    this.getTasksListFromStore();
    this.renderTasksList();
    this.createTaskEventHandler();
    this.clearAllEventHandler();
  };

  refreshListEventHandler = () => {
    document.querySelector("#refresh").addEventListener("click", (event) => {
      const rotateButton = [
        { transform: "rotate(-90deg)" },
        { transform: "rotate(90deg)" },
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
