class Solution {
    public int bagOfTokensScore(int[] tokens, int power) {
        Arrays.sort(tokens);
        int max=0;
        int point=0;
        int i=0;
        int j=tokens.length-1;
        
        while(i<=j){
            if(power>=tokens[i]){
                point++;
                power-=tokens[i++];
                max=Math.max(max,point);
            }
            else if(point>0){
                point--;
                power+=tokens[j--];
            }
            else {
                return max;
            }
        }
        
        return max;
    }
}
