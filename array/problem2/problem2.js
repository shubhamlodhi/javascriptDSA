/** Sliding Window Code with sum of each array to find maximum sum of window
 * @param {[1,2,3,4]} arr
 * @returns n
 */
function frame(arr) {
  let windowSize = 1;

  while (windowSize < arr.length) {
    console.log(`\n When Window Size is : ${windowSize}`);

    //Start From index {startIndex}
    let startIndex = 0;

    //Sliding Windows
    for (let i = startIndex; i < arr.length - windowSize; i++) {
      let window = arr.slice(i, i + windowSize); //Method
      let sum = (a, b) => a + b;
      console.log(`${window.reduce(sum)}`);
    }

    windowSize++;
  }
}

frame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Short Trick

/**
 * sum on the go
 * if sum goes negative make it zero
 * check with maxSum
 * @param {*} arr
 */
function maxSubArray(arr) {
  let maxSum = arr[0];
  let sum = 0;
  for (let n of arr) {
    if (sum < 0) sum = 0;
    sum += n;
    console.log(sum);
    maxSum = Math.max(maxSum, sum);
  }
  console.log(maxSum);
}

maxSubArray([1, 2, 3, -4, -5, 6, 7, 8, -9]);
