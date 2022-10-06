class MyStack {

    public MyStack() {
        
    }
    Queue<Integer> queue=new LinkedList<>();
    Queue<Integer> queue2=new LinkedList<>();
  
  
    public void dequeue(){
          for(int i=0;i<queue.size()-1;i++) 
            queue2.offer(queue.poll());
    }
    
  
    public void enqueue(){
        for(int i=0;i<=queue2.size();i++)
              queue.offer(queue2.poll());   
    }
    
    
    public void push(int x) {
        queue.offer(x);
    }
    
  
    public int pop() {
      
       dequeue();
       int pop=queue.poll();
        queue2.offer(queue.poll());
       enqueue();
       return pop;
     
    }
    
    public int top() {
        dequeue();
       
        int peek=queue.peek();
         
        queue2.offer(queue.poll());
       
          enqueue();
        
       
        return peek;
    }
    
    public boolean empty() {
        return queue.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */
