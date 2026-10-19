class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regex = /^[a-zA-Z0-9]+$/;
        let str =''
        for(let i=0;i<s.length;i++){
             if(regex.test(s[i])){
                str +=s[i]
             }
        }
        return str.toLowerCase()=== str.split('').reverse().join('').toLowerCase()
    }
}
