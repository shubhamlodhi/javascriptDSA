/** By simple for loop
 * Time Complexity : O(n)
 * @param {*} arr
 */
function removeEven(arr) {
  var odds = [];
  for (let number of arr) {
    if (number % 2 != 0) odds.push(number);
  }
  return odds;
}
console.log(removeEven([3, 2, 41, 3, 34]));

//----------------------------------------------

/**By filter and lambda function
 * Purpose : Less Code or simpler and short code
 * Time Complexity : O(n)
 * @param {*} arr
 */
function removeEven2(arr) {
  return arr.filter((v) => v % 2 != 0);
}
console.log(removeEven2([3, 2, 41, 3, 34]));
