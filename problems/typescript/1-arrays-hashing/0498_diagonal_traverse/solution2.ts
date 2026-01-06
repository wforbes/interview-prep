//set 'result' array to a determined size (m * n)
//set m and n vars as 0 to begin

//use a for loop with this m*n max iterations
// push the value of matrix at m x n into the result array
// if the sum of `m` and `n` is even, we’re moving up-right, otherwise its down-left
// If we’re moving up-right then

// - Right-flip - if we’re at the end of a row, we need to increment `m` to move to the next row
// - Top-flip - if we’re at the first row, we need to increment `n` to move to the next column
// - Normal move - if neither Top-flip or Right-flip conditions are true, we need to decrement `m` and increment `n` to do the normal Up-Right movement

// Otherwise, we’re moving down-left (so we do inverse checks)

// - Left-flip - if we're at the first column, we need to increment `m` to move to the next row
// - Bottom-flip - if we're at the last row, we need to increment `n` to move to the next column
// - Normal move - if we arent flipping, this is a normal move so increment `m` and decrement `n`

// when for loop is done, return the result array
export function findDiagonalOrder(mat: number[][]): number[] {
	const result: Array<number> = new Array(mat.length * mat[0].length);
	let m = 0;
	let n = 0;
	for (let i = 0; i < mat.length * mat[0].length; i++) {
		result[i] = mat[m][n];
		if ((m + n) % 2 === 0) {
			// if the coordinate sum is even, we're moving up-right
			if (n === mat[0].length - 1) {
				// - Right-flip - if we’re at the end of a row
				m++; // increment `m` to move to the next row
			} else if (m === 0) {
				// - Top-flip - if we’re at the first row
				n++; //increment `n` to move to the next column
			} else {
				// - Normal move - if neither Top-flip or Right-flip conditions are true
				m--; //decrement `m` and
				n++; //increment `n` to do the normal Up-Right movement
			}
		} else {
			// otherwise, we're moving down-left
			if (m === mat.length - 1) {
				// - Bottom-flip - if we're at the last row
				n++; // increment `n` to move to the next column
			} else if (n === 0) {
				// - Left-flip - if we're at the first column
				m++; //increment `m` to move to the next row
			} else {
				// - Normal move - if we arent flipping
				//  this is a normal move so increment `m` and decrement `n`
				m++;
				n--;
			}
		}
	}
	return result;
}
