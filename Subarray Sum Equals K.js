/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count=0
    for(let i=0;i<nums.length;i++){
            if(nums[i]===k){
                count++;
                continue;
            }
        let sum=nums[i]
        
         for(let j=(i+1);j<nums.length;j++){
             sum+=nums[j]
             if(sum===k){
                count++;
                 break;
             }
         }
    }
    return count
};
