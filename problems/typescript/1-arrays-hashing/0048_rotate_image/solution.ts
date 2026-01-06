// 48. Rotate Image
// https://leetcode.com/problems/rotate-image/description/
// first attempt 1/4/26

//1. initialize 4 number variables to be used for pointers: `a` `b` `c` `d`
//2. We can loop  `matrix.length / 2`  times, rounded down to the nearest integer, this expresses the number of meaningful perimeter rings that can be formed in the matrix. Use `p` as the iterator. In each perimeter loop:
//2a. We set the pointers to their perimeter corner positions each iteration's `p` value brings these corners closer to the center of the matrix
// the top left corner, top right corner, bottom right corner, bottom left corner
//2b. We loop `matrix.length - 1 - (2 * p)` times..
//  because each successive perimeter loop shrinks the length of each perimeter size by 2.
//2b-1. We move `a` into `b`, `b` into `c`, `c` into `d`, and `d` into `a`, using temporary swap variables to hold values during the swaps
//2b-2. Then we reposition pointers clockwise: increment `a[1]`, increment `b[0]`, decrement `c[1]`, decrement `d[0]`

export function rotate(matrix: number[][]): void {
	let a, b, c, d;
	for (let p = 0; p < matrix.length / 2; p++) {
		a = [p, p];
		b = [p, matrix[0].length - 1 - p];
		c = [matrix.length - 1 - p, matrix.length - 1 - p];
		d = [matrix[0].length - 1 - p, p];
		let swap1, swap2;
		for (let i = 0; i < matrix.length - 1 - 2 * p; i++) {
			swap1 = matrix[b[0]][b[1]];
			matrix[b[0]][b[1]] = matrix[a[0]][a[1]];
			swap2 = matrix[c[0]][c[1]];
			matrix[c[0]][c[1]] = swap1;
			swap1 = matrix[d[0]][d[1]];
			matrix[d[0]][d[1]] = swap2;
			matrix[a[0]][a[1]] = swap1;
			a[1]++;
			b[0]++;
			c[1]--;
			d[0]--;
		}
	}
}
