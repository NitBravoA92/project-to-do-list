import { listTasks, refreshListEventHandler } from './modules/listTask.js';
import { insertImgMarkup } from './modules/Utils.js';
import enterIcon from './img/enterIcon.svg';
import refreshIcon from './img/refreshIcon.svg';
import './style.css';

const ToDoList = () => {
  const addBtn = document.querySelector('#btnAddTask');
  const refreshBtn = document.querySelector('#refresh');
  insertImgMarkup(addBtn, enterIcon, 'left arrow icon');
  insertImgMarkup(refreshBtn, refreshIcon, 'refresh icon');
  listTasks();
  refreshListEventHandler();
};

ToDoList();
