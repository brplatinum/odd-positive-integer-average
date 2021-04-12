/**
 * Function which calculates the average of only odd positive numbers.
 */
export function averageOddPositiveIntegers(input: number[]): number {

  let oddPositiveIntegers = input.filter((value: number) => {return value > 0 && value % 2 === 1});
  return oddPositiveIntegers.reduce((acc: number, curr: number) => acc + curr) / oddPositiveIntegers.length;
}
