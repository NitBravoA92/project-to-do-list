import {describe, expect} from '@jest/globals';

describe('Create new tasks module', () => {
  it('insert a task, to have 2 items in the container', () => {
    document.body.innerHTML =
      '<div>' +
      '  <ul id="list"><li></li><li></li></ul>' +
      '</div>';
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(2);
  })
})
