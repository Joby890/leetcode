var singleNumber = function(nums) {
    var found = {};
    for(var i = 0; i < nums.length; i++) {
        if(!found[nums[i]]) {
            found[nums[i]] = 0;
        }
        found[nums[i]] = found[nums[i]] + 1;
    }
    for(var key in found) {
        if(found[key] === 1) {
            return parseInt(key);
        }
    }
};


// run(singleNumber, Tests);
