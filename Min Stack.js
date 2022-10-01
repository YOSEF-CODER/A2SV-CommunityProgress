
class MinStack {
    data = [];
    constructor() {
        this.data = [];
    }
/** 
 * @param {number} val
 * @return {void}
 */
push = function(val) {
    this.data.push(val)
};

/**
 * @return {void}
 */
pop = function() {
    this.data.pop()
};

/**
 * @return {number}
 */
top = function() {
    return this.data[this.data.length-1]
};

/**
 * @return {number}
 */
getMin = function() {
   var min = Math.min(...this.data)
   return min
};
};
/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
