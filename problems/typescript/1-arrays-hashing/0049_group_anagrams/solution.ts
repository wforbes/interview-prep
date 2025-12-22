//first: 12/20/25 - couldnt find O(n) solution in 1 hour, had to read up to understand
export function groupAnagrams(strs: string[]): string[][] {
    const result = new Map();
    for (let i = 0; i < strs.length; i++) {
        const key = strs[i].split("").sort().join("");
        if (!result.has(key)) {
            result.set(key, [ strs[i] ])
        } else {
            result.get(key)!.push(strs[i]);
        }
    }
    return Array.from(result.values())
}