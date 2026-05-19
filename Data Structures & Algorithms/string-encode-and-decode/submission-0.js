class Solution {
    
    encode(strs) {
        let encoded = ""

        for(let str of strs){
            encoded += str.length + "#" + str
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    let result = [];
    let i = 0;

    while (i < str.length) {

        let j = i;

        while (str[j] !== "#") {
            j++;
        }

        let length = parseInt(str.substring(i, j));

        let word = str.substring(j + 1, j + 1 + length);

        result.push(word);

        i = j + 1 + length;
    }

    return result;
    }

}
