class MinStack {

    public MinStack() {
        
    }
    Stack<Integer> s=new Stack<Integer>();
    
    public void push(int val) {
        s.push(val);
    }
    
    public void pop() {
        s.pop();
    }
    
    public int top() {
        return s.peek();
    }
    
    public int getMin() {
        int temp=s.peek();
        for(int x:s){
            if(x<temp){
                temp=x;
            }
        }
        return temp;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */
