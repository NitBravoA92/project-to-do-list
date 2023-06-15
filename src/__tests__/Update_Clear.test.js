import { saveLocalStorage, retrieveLocalStorage } from '../modules/Utils.js';
import { deleteAllCompletedTasks } from '../modules/deleteTask.js';

describe('Clear all completed task', () => {
  let mockObj = [
    { index: 1, description: 'First Task content', completed: false },
    { index: 2, description: 'Second Task content', completed: true },
    { index: 3, description: 'Third Task content', completed: false },
    { index: 4, description: 'Fourth Task content', completed: true }
  ];
  const mockKey = 'task-list';
  saveLocalStorage(mockKey, JSON.stringify(mockObj));
  it('Delete two completed tasks from group of 4', () => {
    document.body.innerHTML = `
      <ul id="to-do-list-remove">
        <li class="task" data-index="1">First Task content</li>
        <li class="task" data-index="2">Second Task content</li>
        <li class="task" data-index="3">Third Task content</li>
        <li class="task" data-index="4">Fourth Task content</li>
      </ul>
    `;
    const liElements = document.querySelectorAll('.task');

    mockObj = deleteAllCompletedTasks(mockObj, liElements);
    
    const newLiElements = document.querySelectorAll('#to-do-list-remove .task');
    
    expect(newLiElements).toHaveLength(2);
  });

  it('Remove two tasks from LocalStorage from group of 4', () => {
    const expectedCollection = [
      { index: 1, description: 'First Task content', completed: false },
      { index: 2, description: 'Third Task content', completed: false },
    ];
    expect(mockObj).toEqual(expectedCollection);
  });
});

