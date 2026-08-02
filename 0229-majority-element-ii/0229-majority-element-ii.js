/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let freq = {};
    let result = [];
    let k = Math.floor(nums.length / 3);

    for(let num of nums){
        freq[num] = (freq[num] || 0) + 1;
     }

     for(let key in freq){
        if (freq[key] > k) {
            result.push(Number(key));
        }
     }
    return result;
};
