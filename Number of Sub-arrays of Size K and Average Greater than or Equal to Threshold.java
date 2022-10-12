class Solution {
    public int numOfSubarrays(int[] arr, int k, int threshold) {
        int res=0;
        int target=threshold * k;
        int sum=0;
        
        for(int i=0;i<arr.length;i++){
            
            sum+=arr[i];
            
            if(i<k-1)
                continue;
   
            if(i>k-1) 
                sum-=arr[i-k];
            
            if(sum>=target) 
                res++;
        }
        
        return res;
    }
}
