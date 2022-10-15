class Solution {
    public int maxScore(int[] cardPoints, int k) {
        int sum=0;
        for (int i:cardPoints) {
            sum+=i;
        }
        int max=0,window=0,n=cardPoints.length;
       
        if(n==k) return sum;
        
        for(int i=0;i<n-k-1;i++)
          {  window+=cardPoints[i];}
        
        for(int i=n-k-1;i<n;i++){
             window+=cardPoints[i];
            max=Math.max(max,sum-window);
            window-=cardPoints[i-(n-k-1)];
        }
            
            return max;
        
    }
}
