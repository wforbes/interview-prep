/**
 * Encode and Decode Strings
 * Design a string encoding/decoding scheme
 *
 * Encoding format: "length1,length2,...~string1string2..."
 * Time: O(n), Space: O(n)
 *
 * first solved 9/22/25
 */
export function encode(strs: string[]): string {
	if (strs.length === 0) return "";

	const sizes: number[] = [];
	let result = "";

	// Collect lengths
	for (let i = 0; i < strs.length; i++) {
		sizes.push(strs[i].length);
	}

	// Encode lengths
	for (let i = 0; i < sizes.length; i++) {
		result += sizes[i] + ",";
	}

	result += "~";

	// Append strings
	for (let i = 0; i < strs.length; i++) {
		result += strs[i];
	}

	return result;
}

export function decode(str: string): string[] {
	if (str.length === 0) return [];

	let i = 0;
	const result: string[] = [];
	const sizes: number[] = [];

	// Parse lengths
	while (str[i] !== "~") {
		let curr = "";
		while (str[i] !== ",") {
			curr += str[i];
			i++;
		}
		sizes.push(parseInt(curr));
		i++;
	}
	i++;

	// Extract strings based on lengths
	for (let j = 0; j < sizes.length; j++) {
		result.push(str.substr(i, sizes[j]));
		i += sizes[j];
	}

	return result;
}
