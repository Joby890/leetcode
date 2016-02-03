var twoSum = function(nums, target) {
    var stored = {};
    for(var i = 0; i < nums.length; i++) {
        //number we are looking for
        var result = target - nums[i];
        //check if we have number
        if(stored[result] !== undefined) {
            return [stored[result] + 1, i + 1];
        } else {
            stored[nums[i]] = i;
        }
    }

};


console.log(twoSum([0,4,3,0], 0));
