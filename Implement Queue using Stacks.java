class MyQueue {

    public MyQueue() {
        
    }
    
    Stack<Integer> s=new Stack<>();
      
    public void push(int x) {
           s.push(x);
    }
    
    public int pop() {
           int rem_ele = s.remove(0);
           return rem_ele;
    }
    
    public int peek() {
           return s.firstElement();
    }
    
    public boolean empty() {
           return s.empty();
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */
