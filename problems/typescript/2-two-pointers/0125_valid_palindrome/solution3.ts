export function isPalindrome(s: string): boolean {
	let _s = s.replaceAll(/[^A-Za-z0-9]/g, "").toLowerCase();
	let i = 0;
	let j = _s.length - 1;
	while (i < j) {
		if (_s[i] !== _s[j]) {
			return false;
		}
		i++;
		j--;
	}
	return true;
}
