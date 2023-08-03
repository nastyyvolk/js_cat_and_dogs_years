'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should return zeros for zeros input', () => {
    const result = getHumanAge(0, 0);

    expect(result)
      .toEqual([0, 0]);
  });

  test('should return zeros for age under 15', () => {
    const result = getHumanAge(14, 14);

    expect(result)
      .toEqual([0, 0]);
  });

  test('should count one year correctly', () => {
    const result = getHumanAge(15, 15);

    expect(result)
      .toEqual([1, 1]);
  });

  test('should count two years correctly', () => {
    const result = getHumanAge(24, 24);

    expect(result)
      .toEqual([2, 2]);
  });

  test('should count difference between cat and dog', () => {
    const result = getHumanAge(28, 28);

    expect(result)
      .toEqual([3, 2]);
  });

  test('should count big numbers correctly', () => {
    const result = getHumanAge(100, 100);

    expect(result)
      .toEqual([21, 17]);
  });
});
