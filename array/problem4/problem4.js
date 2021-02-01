/**
 *
 * @param {[]} arr
 * @result {boolean} result
 */
function containDuplicate(arr) {
  let result = false;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        result = true;
        break;
      }
    }
  }

  console.log(result);
}

containDuplicate([1, 2, 3, 4]);
