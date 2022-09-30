/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function(security, time) {
    let arr=[]
    time=time-1
    
    for(let i=0;i<security.length;i++){
        if(i>=time && (security.length-i)>=time){
            // console.log('hello')
let x=0
let y=0
        for(let j=0;j<i;j++){
            if(arr[j] < arr[j+1] ){
                break
            }
            x++
    
        }
            for(let k=(i+1);k<security.length;k++){
            if( arr[k] > arr[k+1]){
                break
            }
      y++
        }
               if(x>=(time+1) && y>(time))
            {console.log('hello')
            arr.push(i)
            }
    }
    
       
   
} return arr};
