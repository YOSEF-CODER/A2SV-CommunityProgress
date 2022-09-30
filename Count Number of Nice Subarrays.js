/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let c=0
    for(let i=0;i<nums.length;i++){
        let count=0;
        let arr=[]
         for(let j=i; j<nums.length;j++){
             if(nums[j]%2!==0){
                count++
             }
             arr.push(nums[j])
             if(count===k){
                 c++
             }
         }
    }
    return c
};
