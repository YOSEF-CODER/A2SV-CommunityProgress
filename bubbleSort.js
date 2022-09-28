'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countSwaps' function below.
 *
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function countSwaps(a) {
    let swapped;
    let swapCount=0;
    do{
      swapped=false
      for(let i=0;i<a.length;i++){
          if(a[i]>a[i+1]){
              let temp=a[i]
              a[i]=a[i+1];
              a[i+1]=temp;
              swapped=true
              swapCount++
          }
      }  
    }while(swapped)
    
    return swapCount;

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

 const arr=[3,2,1]
    
    var c=countSwaps(arr);
    console.log('Array is sorted in '+c+' swaps.' )
    console.log('First Element: '+arr[0] )
    console.log('Last Element: '+arr[arr.length-1] )
}
