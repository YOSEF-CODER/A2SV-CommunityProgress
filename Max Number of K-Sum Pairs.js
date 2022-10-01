/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let count=0;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===k){
                count++;
                nums.splice(i, 1);
                 i--; j--;
              nums.splice(j, 1);
  
            }
    }
    }
    
    return count
};
