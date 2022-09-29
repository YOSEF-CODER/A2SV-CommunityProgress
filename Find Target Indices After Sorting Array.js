/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort();
    let indices=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            indices.push(i)
        }
    }
    
    return indices
};
