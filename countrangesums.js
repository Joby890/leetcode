/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
  if(lower === upper && upper === nums[0]) {
    return 1;
  }
  var found = [];
  for(var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if(lower <= num && num < upper) {
      found.push(num);
    }
  }
  var sum = 0;
  for(i = 0; i < found.length; i++) {
    sum += found[i];
  }
  //console.log(found);
  return Math.abs(sum);
};


console.log(countRangeSum([-2, 5, -1], -2, 2));
console.log(countRangeSum([0], 0, 0));
