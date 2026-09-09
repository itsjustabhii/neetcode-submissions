class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase() //to convert the string to lowercase

        let filteredString = "" //to collect filtered string after removing alphanumeric values

        for(let i=0; i<s.length;i++){
            if(s[i].match(/[a-z0-9]/i)){ // removes alphanumeric characters if any
                filteredString += s[i]
            }
        }

        let reverse = filteredString.split("").reverse().join("") // obtain a reverse of the filtered string

        return reverse === filteredString
    }
}
