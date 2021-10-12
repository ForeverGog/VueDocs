public class Solution{
    public boolean isPalindrome(int x){
        if (x < 0) return false;

        int rev = 0;
        int pre = x;

        while (x != 0) {
            int p = x % 10;
            rev = rev * 10 + p;
            x = x / 10;
        }
        if (rev == pre) return true;
        else return false;
    }
}
