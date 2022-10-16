class Solution {
    public int longestSubarray(int[] nums) {
      
        int maxLength=0;
        int left=0,right=0;
        int oneCount=0;
        int zeroCount=0;
        int lastZeroIndex=-1;
        
        while(left<nums.length && right<nums.length){
            if(nums[right]==1) {
                oneCount++;
                
                maxLength=Math.max(maxLength,oneCount);
                right++;
            } else if(nums[right]==0){
                zeroCount++;
                if(zeroCount<2){
                    lastZeroIndex=right;
                    right++;
                } else {
                    left=lastZeroIndex+1;
                    right=left;
                    oneCount=0;
                    zeroCount=0;
                }
                
            }
        }
        
        return maxLength == nums.length ? maxLength - 1:maxLength;
    }
}
