/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
     let swapped;
 
    do{
      swapped=false
      for(let i=0;i<nums.length;i++){
          if(nums[i]===((nums[i+1]+nums[i-1])/2)){
              let temp=nums[i]
              nums[i]=nums[i+1];
              nums[i+1]=temp;
              swapped=true
             
          }
      }  
    }while(swapped)
        
        
        return nums
};
