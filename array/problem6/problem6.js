/** Merge Sorted Array
 *
 */
function mergeSortedArray(arrA, arrB) {
  let mergedArr = [];
  let i = 0,
    n1 = arrA.length;
  let j = 0,
    n2 = arrB.length;

  while (i < n1 && j < n2) {
    if (arrA[i] < arrB[j]) {
      mergedArr.push(arrA[i]);
      i++;
    } else {
      mergedArr.push(arrB[j]);
      j++;
    }
  }

  while (i < n1) {
    mergedArr.push(arrA[i]);
    i++;
  }

  while (j < n2) {
    mergedArr.push(arrB[j]);
    j++;
  }

  console.log(mergedArr);
}

mergeSortedArray([1, 2, 3, 4, 9, 10, 11, 12], [5, 6, 7, 8, 13, 14, 15, 16, 17]);
