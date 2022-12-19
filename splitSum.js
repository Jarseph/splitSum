/**
 * Write a function named splitSum1 that implements algorithm 1 here
 */
function splitSum1(tours) {
  const total = tours.reduce((a, b) => a + b);
  let preSum = 0;
  let postSum = total;
  let smallest = Number.MAX_VALUE;
  for (let i = 0; i < tours.length - 1; i++) {
    preSum += tours[i];
    postSum -= tours[i];
    let absoluteDifference = Math.abs(preSum - postSum);
    if (absoluteDifference < smallest) {
      smallest = absoluteDifference
    }
  }
  return smallest;
}

/**
 * Write a function named splitSum2 that implements algorithm 2 here
 */
function splitSum2(tours) {
  let smallest = Number.MAX_VALUE;
  for (let i = 0; i < tours.length - 1; i++) {
    let preSum = tours.slice(0, i + 1)
      .reduce((a, b) => {return a + b}, 0);
    let postSum = tours.slice(i + 1, tours.length)
    .reduce((a, b) => {return a + b}, 0);
    let absoluteDifference = Math.abs(preSum - postSum);
    if (absoluteDifference < smallest) {
      smallest = absoluteDifference;
    }
  }
  return smallest;
}

