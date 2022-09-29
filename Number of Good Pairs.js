/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    if(changed.length%2===0){
        let count=0;
        let half=changed.length/2;
        let arr=[]
        for(let i=0;i<half;i++){
            for(let j=half;j<changed.length;j++){
            if(changed[i]===(changed[j]/2)){
                arr.push(changed[i])
                count++;
            }
        }
        }
        if(count===half){
return arr}
    }
    return []
};
