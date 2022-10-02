/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let data=[]
    
    for(let i=0;i<temperatures.length;i++){
        let count=0
        for(let j=i+1;j<temperatures.length;j++){
            if(temperatures[i]<temperatures[j]){
                count++;
                break;
            }
            else {
                count++
                if(count===temperatures.length-i-1){
                    count=0
                }
            }
        }
        data.push(count)
    }
    
    return data
};
