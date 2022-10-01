/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
      let strArr = s.split('');
      let parentesis=[]
      for(let i=0;i<strArr.length;i++){
          if(strArr[i]==='('){
              parentesis.push("curve")
          }
          else if(strArr[i]==='['){
              parentesis.push("square")
          }
            else if(strArr[i]==='{'){
              parentesis.push("brace")
          }
          if (strArr[i]==='}'){
                if(parentesis[parentesis.length-1]==="brace"){
                    parentesis.pop()
                }else{
                    return false
                }
          }
          else if (strArr[i]===')'){
                if(parentesis[parentesis.length-1]==="curve"){
                    parentesis.pop()
                }else{
                    return false
                }
          }
          
          if (strArr[i]===']'){
                if(parentesis[parentesis.length-1]==="square"){
                    parentesis.pop()
                }else{
                    return false
                }
          }
          
          
          
      }

   if(parentesis.length !== 0){
        return false
    }
    return true;
};
