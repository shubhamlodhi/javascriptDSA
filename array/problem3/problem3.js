/** Shift all zeros to end of array
 * loop each element of array
 * check if element is not zero kept in a array
 * check if element is zero keep counting
 * add all zero to end of array
 * @param {*} arr
 */
function moveZeros(arr) {
  let i = 0,
    count = 0;
  let n = arr.length;

  /*
   ? check if element is not zero kept in a array
   ! check if element is zero keep counting
   */
  arr.forEach((element) => {
    if (element !== 0) {
      arr[i] = element;
      i++;
    } else count++;
  });

  // Add all zero to end of array
  while (count--) {
    arr[n - count - 1] = 0;
  }
  console.log(arr);
}
moveZeros([0, 0, 1]);
