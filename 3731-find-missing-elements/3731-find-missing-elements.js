/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    const set = new Set(nums);
    const result = [];

    for (let i = min; i <= max; i++) {
        if (!set.has(i)) {
            result.push(i);
        }
    }

    return result;
};