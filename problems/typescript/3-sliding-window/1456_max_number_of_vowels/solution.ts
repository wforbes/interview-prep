export function maxVowels(s: string, k: number): number {
	const vowels = new Set(["a", "e", "i", "o", "u"]);
	let left = 0;
	let count = 0;
	let result = 0;
	// window grows, counting vowels
	//  then slides once width k is reached
	//  updating the count as it moves
	for (let right = 0; right < s.length; right++) {
		count += vowels.has(s[right]) ? 1 : 0;
		if (right - left + 1 > k) {
			count -= vowels.has(s[left++]) ? 1 : 0;
		}
		result = Math.max(result, count);
	}
	return result;
}
