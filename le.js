var twoSum = function(nums, target) {
  var mem = {}; 
  for (let i = 0; i < nums.length; i++) {
    for (let j in mem) {
      if (nums[i] == mem[j]) {
        return [Number(j), i];
      }
    }
    mem[i] = target - nums[i];
  }
};
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
