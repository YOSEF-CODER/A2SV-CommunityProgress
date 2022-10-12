class Solution {
    public int minSetSize(int[] arr) {
          
       // O(nlogn )- time complexity
       //  O(n) - space complexity   
        
        HashMap<Integer,Integer> map=new HashMap<>();
                             
        for(int x:arr) {
            map.put(x,map.getOrDefault(x,0)+1);
        }
        
        int[] freq=new int[map.values().size()];
        
        int i=0;
        
        for(int f:map.values())
            freq[i++]=f;
       
        Arrays.sort(freq);
       
        int setSize=0;
        
        int half=arr.length/2;
        
        int removedSum=0;
        
          int j=freq.length-1;
        
       
         while(removedSum<half){
            removedSum+=freq[j];
             System.out.println(freq[j]);
             j--;
            setSize++;
      
        }
   
        return setSize;
    }
}
