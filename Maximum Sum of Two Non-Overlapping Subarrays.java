class Solution {
    public int maxSumTwoNoOverlap(int[] nums, int firstLen, int secondLen) {
       int n = nums.length;
  //1
  int[] prefixSum = new int[n + 1];   
        
        //2
  for (int i = 1; i <= n; i++) {                                   //3
    prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
  }
        
        
  int xmax = prefixSum[firstLen];
  int ymax = prefixSum[secondLen];
  int ans = prefixSum[firstLen + secondLen];
        
        
  for (int i = firstLen + secondLen; i <= n; i++) {
    xmax = Math.max(xmax, prefixSum[i - secondLen] - prefixSum[i - (firstLen + secondLen)]);
    ymax = Math.max(ymax, prefixSum[i - firstLen] - prefixSum[i - (firstLen + secondLen)]);
    ans = Math.max(ans, Math.max(xmax + prefixSum[i] - prefixSum[i - secondLen], ymax + prefixSum[i] - prefixSum[i - firstLen]));
  }
        
        
  return ans;
    }
}
