class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack=new Stack<>();
        int val1=0;
        int val2=0;
        
        for(int i=0;i<tokens.length;i++){
            
            switch(tokens[i]){
                case "+":
                    stack.push(stack.pop()+stack.pop());
                    break;
                    
                case "-":
                    val2=stack.pop();
                    val1=stack.pop();
                    stack.push(val1-val2);
                    break;
                    
                case "*":
                    stack.push(stack.pop()*stack.pop());
                    break;
                    
                case "/":
                   val2=stack.pop();
                    val1=stack.pop();
                    stack.push(val1/val2);
                    break;
                    
                default:
                    stack.push(Integer.parseInt(tokens[i]));
                    
                    
            }
        }
        
        return stack.pop();
    }
}
