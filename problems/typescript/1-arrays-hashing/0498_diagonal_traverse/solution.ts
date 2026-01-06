// first attempt... (12/1/25)

// init a 'result' array, set to []
// init a 'm' var to track column position, set to 0
// init a 'n' var to track row position, set to 0
// init a number 'vector' to track direction - +1 is upright, -1 is downleft
// init a 'running' var for loop exit condition
// loop while 'running' is true
// - get current m/n position value, push it to 'result' array
// - if m+vector > matrix.length - 1 && n+vector > matrix[m].length
//      OR counter is greater than 20000
//      set running false to break while loop for return
//      if 'm' + vector is less than 0 && vector is > 0 (top flip)
//      OR
//      'm' + vector is greater than matrix.length && vector is < 0 (bottom flip)
//          increment n
//          set vector as the product of vector and -1
//  else if 'n' + vector is greater than matrix[m].length && vector is > 0 (right flip)
//      OR
//      'n' + vector is less than 0 && vector is > 0 (left flip)
//          increment m
//          set vector as the product of vector and -1
//  - else:
//      set 'm' to m + vector
//      set 'n' to n + vector
//  increment counter
// return result

// altered plan to get passing tests
export function findDiagonalOrder(mat: number[][]): number[] {
	const result = [];
	let m = 0;
	let n = 0;
	let vector = 1;
	let running = true;
	while (running) {
		result.push(mat[m][n]);
		if (
			(vector > 0 &&
				m + vector > mat.length - 1 &&
				n + vector > mat[m].length - 1) ||
			(vector < 0 &&
				m + vector * -1 > mat.length - 1 &&
				n + vector * -1 > mat[m].length - 1)
		) {
			running = false;
		}

		//      if 'm' + vector is less than 0 && vector is > 0 (top flip)
		//      OR
		//      'm' + vector is greater than matrix.length && vector is < 0 (bottom flip)
		if (
			(vector > 0 && m + vector * -1 < 0) ||
			(vector < 0 && m + vector * -1 > mat.length - 1)
		) {
			// added check to see if we're also at the end of the row to solve top-right-corner case
			// if this is also the end of the row, then we're at the top right corner
			if (vector > 0 && n + vector > mat[m].length - 1) {
				// increment m
				m++;
				// otherwise this is a top or bottom flip
			} else {
				// increment n
				n++;
			}
			vector *= -1;
		} else if (
			(vector > 0 && n + vector > mat[m].length - 1) ||
			(vector < 0 && n + vector < 0)
		) {
			m++;
			vector *= -1;
		} else {
			m += vector * -1;
			n += vector;
		}
	}
	return result;
}
