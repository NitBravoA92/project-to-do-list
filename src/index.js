import './style.css';

const toDoTasks = [
  {
    description: 'Build the contact section on Renting car website',
    completed: false,
    id: 1,
  },
  {
    description: 'Clean the house',
    completed: false,
    id: 2,
  },
  {
    description: 'Complete the Mongodb course',
    completed: false,
    id: 3,
  },
  {
    description: 'Attend the AI ​​conference',
    completed: false,
    id: 4,
  },
  {
    description: 'Take the car to the workshop',
    completed: false,
    id: 5,
  },
  {
    description: 'Do the grocery shopping',
    completed: false,
    id: 6,
  },
];

const markUpTask = (task) => {
  return `
    <li class="task ${task.completed ? 'completed' : ''}" data-index="${task.id}">
      <div class="mark-task">
        <input type="checkbox" id="task-${task.id}-status" ${task.completed ? 'checked' : ''}>
        <label for="task-${task.id}-status"></label>
      </div>
      <h3 class="task-description" contenteditable="true">${task.description}</h3>
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
}

