import { loadFeature, defineFeature } from 'jest-cucumber';
import { tally } from '../src/tally';

const feature = loadFeature('features/tally.feature');

defineFeature(feature, test => {
  test('Adding two numbers', ({ given, when, then }) => {
    let firstNumber: number;
    let secondNumber: number;
    let result: number;

    given(
      /^I have the numbers (.*) and (.*)$/,
      (first: string, second: string) => {
        firstNumber = parseFloat(first);
        secondNumber = parseFloat(second);
      }
    );

    when('I add them together', () => {
      result = tally(firstNumber, secondNumber);
    });

    then(/^the result should be (.*)$/, (expected: string) => {
      const expectedResult = parseFloat(expected);
      if (expectedResult % 1 === 0) {
        // Integer comparison
        expect(result).toBe(expectedResult);
      } else {
        // Decimal comparison with precision
        expect(result).toBeCloseTo(expectedResult);
      }
    });
  });

  test('Adding three numbers', ({ given, when, then }) => {
    let firstNumber: number;
    let secondNumber: number;
    let thirdNumber: number;
    let result: number;

    given(
      /^I have the numbers (.*), (.*), and (.*)$/,
      (first: string, second: string, third: string) => {
        firstNumber = parseFloat(first);
        secondNumber = parseFloat(second);
        thirdNumber = parseFloat(third);
      }
    );

    when('I add them together', () => {
      result = tally(firstNumber, secondNumber, thirdNumber);
    });

    then(/^the result should be (.*)$/, (expected: string) => {
      const expectedResult = parseFloat(expected);
      if (expectedResult % 1 === 0) {
        // Integer comparison
        expect(result).toBe(expectedResult);
      } else {
        // Decimal comparison with precision
        expect(result).toBeCloseTo(expectedResult);
      }
    });
  });
});
