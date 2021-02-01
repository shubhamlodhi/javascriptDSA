/** Rotate Array
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let i = 1;
  while (k--) {
    nums.unshift(nums.pop());
    console.log(`${i++}--->${nums}`);
  }
};

rotate([1, 2, 3, 4, 5, 6, 7, 8], 4);
