export function tally(...numbers: number[]): number {
  if (numbers.length < 2) {
    throw new Error('At least two numbers are required');
  }
  return numbers.reduce((total, num) => total + num, 0);
}
