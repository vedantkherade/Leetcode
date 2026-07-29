class Solution {
    public boolean isPalindrome(int x) {
        if(x<0) return false;
        int target = x;
        int reversedX = 0;

        while(x > 0){
            reversedX = reversedX*10 + (x%10);
            x = x/10;
        }
        return reversedX == target;
    }
}