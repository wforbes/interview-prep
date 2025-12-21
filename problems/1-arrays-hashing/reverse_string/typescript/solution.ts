/**
 * Reverse String
 * Time: ?, Space: ?
 */
export function reverseString(s: string[]): void {
	// init two variables, one to track a 'first' position, another track a 'second' position
		// first pos is 0, second pos is the last index of the array
	let i = 0;
	let j = s.length - 1;
	// iterate through the s array while the 'first' var is less than the 'second' variable
	while (i < j) {
		// set a temp var to the value of the 'second' position
		let temp = s[j];
		// set the value of the 'second' position to the value of the 'first' position
		s[j] = s[i];
		// set the 'first' position value to the value of temp
		s[i] = temp;

		i++; // increment 'first' position
		j--; // decrement 'second' position
	}  
};