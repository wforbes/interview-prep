//first: 12/10/25
//review: 12/20/25
export function canConstruct(ransomNote: string, magazine: string): boolean {
    // if ransomNote is longer than magazine, return false
    if (ransomNote.length > magazine.length) return false

    //init a map to track the number of letter occurences in magazine
    const map = new Map();

    // iterate through the chars in magazine
    for (let i = 0; i < magazine.length; i++) {
        //  add or increment this chars key in the tracking map
        map.set(magazine[i], (map.get(magazine[i]) || 0) + 1);
    }

    // iterate through ransomNote
    for (let i = 0; i < ransomNote.length; i++) {
        //  if this char is not in tracking map, return false
        if (!map.has(ransomNote[i])) return false;

        //  decrement this char in the tracking map
        map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
        //  if the value for this char key in tracking map is less than 0, return false
        if (map.get(ransomNote[i]) < 0) return false;
    }

    // return true - ransomNote was reviewed and mapped to available occurrences in magazine
    return true;
};