/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function mergeSort(nums){
        if(nums.length <= 1){
            return nums;
        }

        let mid =  Math.floor(nums.length / 2);
        let left =  nums.slice(0, mid);
        let right = nums.slice(mid);

        return merge(mergeSort(left), mergeSort(right));
    }

    function merge(left, right){
        let i = 0;
        let j = 0;
        let result = [];

        while(i < left.length && j < right.length){
            if(left[i] < right[j]){
                result.push(left[i]);
                i++;
            }else{
               result.push(right[j]);
                j++; 
            }
        }

        while(i < left.length){
            result.push(left[i]);
                i++;
        }

        while(j < right.length){
            result.push(right[j]);
                j++; 
        }
        return result;
    }
    return mergeSort(nums);
};