import { listTasks, refreshListEventHandler } from './modules/listTask.js';
import './style.css';

const ToDoList = () => {
  listTasks();
  refreshListEventHandler();
};

ToDoList();
