class Solution {
    public int longestMountain(int[] arr) {
       int res=0;
        int i=0;
        boolean peek=false;
        boolean valley=false;
        if(arr.length<3) return 0;
        
        while(i<arr.length-1){
            if(arr[i]<arr[i+1])
            {
                int start=i;
                while(i<arr.length-1 && arr[i]<arr[i+1]){
                    peek=true;
                    i++;
                }
                 while(i<arr.length-1 && arr[i]>arr[i+1]){
                    valley=true;
                    i++;
                }
                
                if(peek==true && valley==true){
                    res=Math.max(res,i-start+1);
                     peek=false;
                    valley=false;
                }
               
            }
            else i++;
            
            
        }
              
        
        return res;
    }
}
