var productExceptSelf = function(nums) {
    let arr = [];
    for (i = 0; i < nums.length; i++) {
        let sum = 1;
        for (j = 0; j < nums.length; j++) {
            if (nums[j] === nums[i]) { continue }
            sum = sum * nums[j]
        }
        arr.push(sum)
    }
    return arr;
};

console.log(productExceptSelf([1, 2, 3, 4]))
