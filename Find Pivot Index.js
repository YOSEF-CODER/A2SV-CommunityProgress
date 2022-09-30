/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for(let i=0;i<nums.length;i++){
        let left=0
        let right=0
           for(let j=0;j<i;j++){
               left+=nums[j]
               
           }
         for(let k=(i+1);k<nums.length;k++){
             right+=nums[k]
             
         }
        if(left===right){
            return i
        }
    }
    return -1
};
