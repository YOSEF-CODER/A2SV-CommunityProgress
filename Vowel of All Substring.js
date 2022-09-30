/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function("ltcd") {
   
   let i, j;
   const res = [];
   for (i = 0; i < word.length; i++) {
      for (j = i + 1; j < word.length + 1; j++) {
         res.push(word.slice(i, j));
      };
   };
   let str=res.toString();
    
    let vowel=0;
    for(let i=0;i<str.length;i++){
       if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u' ){
                    vowel++
                 }
    }

return vowel
};
