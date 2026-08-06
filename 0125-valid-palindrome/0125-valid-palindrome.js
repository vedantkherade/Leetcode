/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleaned = "";

    for(let ch of s){
        if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9')){
            cleaned += ch.toLowerCase();
        }
        
    }

    let left = 0;
    let right = cleaned.length - 1;

    while(left < right){
        if(cleaned[left] !== cleaned[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};