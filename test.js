const { expect } = require('chai');
const { calculateMean, calculateMedian, calculateMode } = require('./statistics');

describe('calculateMean', () => {
  it('should calculate the mean of an array of numbers', () => {
    const nums = [1, 2, 3, 4, 5];
    const mean = calculateMean(nums);
    expect(mean).to.equal(3);
  });
});

describe('calculateMedian', () => {
  it('should calculate the median of an array of numbers', () => {
    const nums = [1, 2, 3, 4, 5];
    const median = calculateMedian(nums);
    expect(median).to.equal(3);
  });
});

describe('calculateMode', () => {
  it('should calculate the mode of an array of numbers', () => {
    const nums = [1, 2, 2, 3, 4, 4, 5];
    const mode = calculateMode(nums);
    expect(mode).to.deep.equal([2, 4]);
  });
});
 