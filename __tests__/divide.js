import { divide } from '../src/service/math'; 

describe('Divide Function', () => {
  test('divide 4 / 2 to equal 2', () => {
    expect(divide(4, 2)).toBe(2);
  });
});
