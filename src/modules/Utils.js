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
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#bebebe" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
  </button>
</li>
`;
export const cloneCollection = (collection) => [...collection];
export const taskObj = (description, completed, index) => ({ description, completed, index });