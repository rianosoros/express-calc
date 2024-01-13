function calculateMean(nums) {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    return sum / nums.length;
  }
  
  function calculateMedian(nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedNums.length / 2);
  
    if (sortedNums.length % 2 === 0) {
      return (sortedNums[middleIndex - 1] + sortedNums[middleIndex]) / 2;
    } else {
      return sortedNums[middleIndex];
    }
  }
  
  function calculateMode(nums) {
    const numCounts = new Map();
  
    nums.forEach(num => {
      numCounts.set(num, (numCounts.get(num) || 0) + 1);
    });
  
    let maxCount = 0;
    let mode = [];
  
    numCounts.forEach((count, num) => {
      if (count > maxCount) {
        maxCount = count;
        mode = [num];
      } else if (count === maxCount) {
        mode.push(num);
      }
    });
  
    return mode;
  }
  
  module.exports = {
    calculateMean,
    calculateMedian,
    calculateMode
  };
  