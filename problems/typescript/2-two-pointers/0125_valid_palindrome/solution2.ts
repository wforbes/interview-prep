export function isPalindrome(s: string): boolean {
	const isAlphaNum = (ch: string): boolean => {
		return (
			(ch.charCodeAt(0) >= 48 && ch.charCodeAt(0) <= 57) ||
			(ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) ||
			(ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122)
		);
	};

	let i = 0;
	let j = s.length - 1;
	while (i < j) {
		while (i < j && !isAlphaNum(s[i])) i++;
		while (i < j && !isAlphaNum(s[j])) j--;

		if (s[i].toLowerCase() !== s[j].toLowerCase()) {
			return false;
		}
		i++;
		j--;
	}
	return true;
}
