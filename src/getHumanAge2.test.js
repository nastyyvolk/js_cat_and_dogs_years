'use strict';

const testData = {
  'should return zeros for zeros input': {
    input: [0, 0],
    expectedResult: [0, 0],
  },
  'should return zeros for age under 15': {
    input: [14, 14],
    expectedResult: [0, 0],
  },
  'should count one year correctly': {
    input: [15, 15],
    expectedResult: [1, 1],
  },
  'should count two years correctly': {
    input: [24, 24],
    expectedResult: [2, 2],
  },
  'should count difference between cat and dog': {
    input: [28, 28],
    expectedResult: [3, 2],
  },
  'should count big numbers correctly': {
    input: [100, 100],
    expectedResult: [21, 17],
  },
};

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  for (const testName in testData) {
    test(testName, () => {
      const result = getHumanAge(...testData[testName].input);
      expect(result).toEqual(testData[testName].expectedResult);
    });
  }
});
