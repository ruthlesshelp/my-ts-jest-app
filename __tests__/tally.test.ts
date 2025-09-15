import { tally } from '../src/tally';

test('adds 1 + 2 to equal 3', () => {
  expect(tally(1, 2)).toBe(3);
});
