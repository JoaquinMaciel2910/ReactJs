import { expect, test, describe } from 'vitest';
import { add, multiply, subtract } from './math.helpers';

describe('add', () => {

    test('should add two positives numbers', () => {

        //! 1. Arrange
        const a = 1;
        const b = 2;

        //! 2. Act
        const result = add(a, b)

        //!3. Assert
        expect(result).toBe(3);
    })
})

describe('subtract', () => {
    test('should subtract two numbers', () => {
        const a = 1;
        const b = 2;

        const result = subtract(a, b);

        expect(result).toBe(a - b)


    })
})

describe('multiply', () => {
    test('should multiply three numbers', () => {
        const a: number = 1;
        const b: number = 2;

        const result: number = multiply(a, b);

        expect(result).toBe(a * b)

    })
})


