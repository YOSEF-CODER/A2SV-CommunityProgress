/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let arr=[]
    for(let i=0;i<nums1.length;i++){
           for(let j=0;j<nums2.length;j++){
                if(nums1[i]===nums2[j]){
                    if(nums2[j]<nums2[j+1]){
                        arr.push(nums2[j+1]);
                    }else {
                        arr.push(-1)
                    }
                }
    }
    }
    return arr
};
