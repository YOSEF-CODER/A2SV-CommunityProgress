class MyQueue {
    data = [];
    constructor() {
        this.data = [];
    }
/** 
 * @param {number} x
 * @return {void}
 */
    push(x) {
        this.data.push(x);
    }

/**
 * @return {number}
 */
    pop() {
     
        const temp=this.data.shift()
 
       return temp
    }

/**
 * @return {number}
 */
    peek() {
        return this.data[0];
    }


/**
 * @return {boolean}
 */
    empty() {
        return this.data.length === 0
    }
}
/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
