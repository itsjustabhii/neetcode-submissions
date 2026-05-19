class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase()

        let filteredString = ""

        for(let i=0;i<s.length;i++){
            if(s[i].match(/[a-z0-9]/i)){
                filteredString += s[i]
            }
        }
        let reverse = filteredString.split("").reverse().join("")

        return reverse === filteredString
    }
}


