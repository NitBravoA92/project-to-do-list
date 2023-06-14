import {expect, test} from '@jest/globals';
import { cloneCollection } from '../modules/Utils.js';

test('test array', () => {
  const arr1 = [1,2,3];
  const newArr = cloneCollection(arr1);
  expect(newArr).toStrictEqual([1,2,3])
})