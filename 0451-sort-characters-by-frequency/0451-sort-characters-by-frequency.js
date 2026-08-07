/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let  freq = {};

    for(let ch of s){
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let arr = Object.entries(freq);

    arr.sort((a, b) => b[1] - a[1]);

    let result = "";

    for(let [ch, count] of arr){
        result += ch.repeat(count);
    }
    return result;
};