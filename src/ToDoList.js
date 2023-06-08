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
}