import { averageOddPositiveIntegers } from './util';

// Test suite here...

describe("averageOddPositiveIntegers()", () => {
    test("Good input", () => {
        const input: number[] = [1,2,3,4,5,6,7,8,9,10,33];
        expect(averageOddPositiveIntegers(input)).toBe(58/6);
    });

    test("Empty input", () => {
        const input: number[] = [];
        expect(averageOddPositiveIntegers(input)).toBe(0);
    });

    test("Input with only negative integers", () => {
        const input: number[] = [-1, -2, -3, -4];
        expect(averageOddPositiveIntegers(input)).toBe(0);
    });

    test("Input with only zeros", () => {
        const input: number[] = [0, 0, 0, 0];
        expect(averageOddPositiveIntegers(input)).toBe(0);
    });

    test("Input with mix of positive and non-positive inputs", () => {
        const input: number[] = [-3, -2, 0, 1, 7, 3, 2, 1, 5, 6, -10];
        expect(averageOddPositiveIntegers(input)).toBe(17/5);
    });

    test("Input with mix of positive and non-positive inputs, but no odd numbers", () => {
        const input: number[] = [-4, -2, 0, 2, 8, 4, 2, 12, 6, 6, -10];
        expect(averageOddPositiveIntegers(input)).toBe(0);
    });

    


})
