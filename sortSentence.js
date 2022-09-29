/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  let res= s.split(' ')
  res.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
    for(let i=0;i<res.length;i++){
    let index=''
     res[i]=res[i].slice(0,res[i].length-1)
    }
  return res.join(' ')
};
