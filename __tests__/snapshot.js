import { add } from '../src/service/math'; 

describe('Addition Function', () => {
  test('adds 2 + 1 to equal 3', () => {
    expect(add(2, 1)).toBe(3);
  });
});
