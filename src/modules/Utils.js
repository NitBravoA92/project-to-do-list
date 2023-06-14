import trashIcon from '../img/trashIcon.svg';

export const retrieveLocalStorage = (key) => {
  const data = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : [];
  return data;
};
export const saveLocalStorage = (key, value) => localStorage.setItem(key, value);
export const isEmpty = (collection) => collection.length === 0;
export const markUpTask = (task) => `
<li class="task ${task.completed ? 'completed' : ''}" data-index="${
  task.index
}">
  <div class="task-content">
    <div class="mark-task">
      <input type="checkbox" id="task-${
  task.index
}-status" class="task-check-status" ${
  task.completed ? 'checked' : ''
}>
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
    <img src="${trashIcon}" alt="gray trash icon" />
  </button>
</li>
`;
export const insertImgMarkup = (container, icon, alt) => {
  container.innerHTML = `<img src="${icon}" alt="${alt}">`;
};
export const cloneCollection = (collection) => [...collection];
export const taskObj = (description, completed, index) => ({ description, completed, index });