class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //Create a map to store each number and how many times it appears
        const freqMap = new Map()

        //Count the freq of every number in the input array
        for(const num of nums){
            freqMap.set(num, (freqMap.get(num) || 0) +1)
        }

        //Convert the map entries into an array like [[num, freq], ...]
        //Then sort by freq in descending order so the most frequent items come first
        // Keep only the first k items, since they are the k most frequent numbers.
        // Extract only the numbers from the sorted pairs.
        return [...freqMap.entries()].sort((a,b) => b[1] - a[1]).slice(0,k).map(([num]) => num)

}
}
