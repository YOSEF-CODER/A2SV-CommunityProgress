/**
 * @param {string} street
 * @return {number}
 */
var minimumBuckets = function(street) {
    let count=0;
    
    for(let i=0;i<street.length;i++){
        if(street[i]==='H'){
            if(street[i+1]!=='.' && street[i-1]!=='.' ){
                return -1
            }
            else { if(street[i+1]==='.' && street[i-1]==='.'){
                
                if(street[i+2]==='H' && street[i-2]!=='H'){
                      count++
                         i=i+2      
                }
                           else if(street[i-2]==='H' && street[i+2]!=='H'){
                 count++
                              
                           }
                
            }
            else if(street[i+1]==='.' && street[i-1]==='H' || street[i-1]==='.' ){
                 count++
            }
             else if(street[i-1]==='.' && street[i+1]==='H' || street[i+1]==='.'){
                 count++
            }
                 }
        }
       
    }
     return count
};
