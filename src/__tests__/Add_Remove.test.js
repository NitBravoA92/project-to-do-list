import { createTask } from '../modules/createTask.js';
import { saveLocalStorage, retrieveLocalStorage } from '../modules/Utils.js';
import { deleteTask } from '../modules/deleteTask.js';

describe('Create new tasks module', () => {
  it('insert a task, to have 1 li in the container', () => {
    const descriptionTest = 'First task description';
    const liElement = createTask(descriptionTest);

    document.body.innerHTML = `
      <ul id="to-do-list">${liElement}</ul>
    `;

    const listTasks = document.querySelectorAll('#to-do-list li');
    expect(listTasks).toHaveLength(1);
  });

  it('insert 3 tasks, to have 4 li items in the container', () => {
    const descriptionTest = ['First task description', 'Second task description', 'Third task description'];
    const liElements = descriptionTest.map((desc) => createTask(desc)).join('');

    document.body.innerHTML = `
      <ul id="to-do-list"><li></li>${liElements}</ul>
    `;

    const listTasks = document.querySelectorAll('#to-do-list li');
    expect(listTasks).toHaveLength(4);
  });
});

describe('Insert in localStorage', () => {
  it('save one task object', () => {
    const mockObj = [{ index: 1, description: 'First Task content', completed: false }];
    const mockKey = 'task-list';

    saveLocalStorage(mockKey, JSON.stringify(mockObj));

    expect(retrieveLocalStorage(mockKey)).toEqual(mockObj);
  });
});

describe('Remove task module', () => {
  it('Delete second task from group of 3', () => {
    document.body.innerHTML = `
      <ul id="to-do-list-remove">
        <li class="task" data-index="1">Hello</li>
        <li class="task" data-index="2">Hello 2</li>
        <li class="task" data-index="3">Hello 3</li>
      </ul>
    `;
    const liElements = document.querySelectorAll('.task');

    deleteTask(liElements[1]);

    const newLiElements = document.querySelectorAll('#to-do-list-remove .task');

    expect(newLiElements).toHaveLength(2);
  });
});
