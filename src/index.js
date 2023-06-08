import './style.css';

const toDoTasks = [];

const markUpTask = (task) => `
    <li class="task ${task.completed ? 'completed' : ''}" data-index="${task.id}">
      <div class="task-content">
        <div class="mark-task">
          <input type="checkbox" id="task-${task.id}-status" ${task.completed ? 'checked' : ''}>
          <label for="task-${task.id}-status"></label>
        </div>
        <h3 class="task-description" contenteditable="true">${task.description}</h3>
      </div>
      <div class="task-options">
        <div class="drag-icon">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <button type="button" class="remove-task">X</button>
      </div>
    </li>
  `;

const toDoList = () => {
  const listItems = toDoTasks.map((task) => markUpTask(task));
  document.querySelector('#to-do-list').innerHTML = listItems.join('');
};

document.addEventListener('DOMContentLoaded', toDoList);
