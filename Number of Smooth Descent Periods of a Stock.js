/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
     let count=0;
   const res = [];
   for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length + 1; j++) {
          
         res.push(prices.slice(i, j));
      };
   };
     for (let i = 0; i < res.length; i++) {
         if(res[i].length==1)
             {
                 count++
             }
         
         
         else if(res[i].length>1){
             
             let temp=[]
            for (let j = 0; j < res[i].length; j++){
                
                temp.push(res[i][j])
            } 
              
             let x=0
            for(let k=0;k<temp.length;k++){
                if(temp[k+1]===(temp[k]-1)){
                    x++;
                
                }
            }
             if((x+1)===temp.length){
                    count++
                }
             
         }
        
        
         
         
     }

    return count
};
