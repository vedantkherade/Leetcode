/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    nums.sort((a, b) => a - b);

    let result = [];

    for (let i = 0; i < nums.length - 1; i++) {
        let current = nums[i];
        let next = nums[i + 1];

        for (let num = current + 1; num < next; num++) {
            result.push(num);
        }
    }

    return result;
};