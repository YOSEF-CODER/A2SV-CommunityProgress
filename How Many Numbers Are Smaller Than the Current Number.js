/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let count=[]
    for(let i=0;i<nums.length;i++){
     count[i]=0;
        for(let j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
                count[i]=count[i]+1;
            }
        }
}
    return count;
};
