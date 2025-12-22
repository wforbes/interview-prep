// first: 9/17/25
// review: 12/9/25
// review: 12/20/25
export function isAnagram(s: string, t: string): boolean {
    // return false if the strings are not the same length
    if (s.length !== t.length) return false;

    // create a map for each string that tracks the number of occurences of each letter
    const sMap = new Map();
    const tMap = new Map();

    // for each character in both strings
    for (let i = 0; i < s.length; i++) {
        //  if the char in both strings doesn't exist in that strings map
        //      add the character to that strings map
        //  else increment that char's key in that strings map
        sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
        tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
    }

    // iterate through the keys of one map
    for (let sKey of [...sMap.keys()]) {
        //  check if the other map doesnt have that key or its number of occurences is not the same
        if (!tMap.has(sKey) || tMap.get(sKey) !== sMap.get(sKey)) {
            //      return false
            return false;
        }
    }

    // return true - both maps/occurrences are the same
    return true;
};