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
  
  setTasksListToStore = () => {
    localStorage.setItem("tasks-list", JSON.stringify(this.tasksList));
  };

  setTasksIds = () => {
    const tasks = this.tasksList.map((task, index) => {
      return {
        description: task.description,
        completed: task.completed,
        id: index + 1,
      };
    });
    this.tasksList = [...tasks];
  };

  markUpTask = (task) => `
    <li class="task ${task.completed ? "completed" : ""}" data-index="${task.id}">
      <div class="task-content">
        <div class="mark-task">
          <input type="checkbox" id="task-${task.id}-status" ${task.completed ? "checked" : ""}>
          <label for="task-${task.id}-status"></label>
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

  listTasks = () => {
    getTasksListFromStore();
  }
}