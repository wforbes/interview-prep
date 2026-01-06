// https://leetcode.com/problems/spiral-matrix/description/

export function spiralOrder(matrix: number[][]): number[] {
	if (matrix.length === 0 || matrix[0].length === 0) {
		return [];
	}
	// init a map of visited positions
	//  where the key is a coordinate combination as a string delimited with a dash
	const visited = new Map<string, boolean>();
	// init a 'results' number array to serve as the return value
	const results: number[] = [];
	// store the 'total' number of elements in the matrix in a number
	const total: number = matrix?.length * matrix[0]?.length;
	// init an x and y variable to track the current position, begins with 0/0
	//  y corresponds to the up/down (or m dimension)
	//  x corresponds to the left/right (or n dimension)
	let x: number = 0,
		y: number = 0;

	// begin a loop that contains 4 inner loops, one for each direction
	while (total > results.length) {
		//  in order: Up, Right, Down, Left
		// iterate in the up position if the map isn't empty (we dont want to begin with Up)
		if (visited.size !== 0) {
			//  up movement - iterate from y to the first indexs of the current x position's 1st dimension array (m reverse order)
			for (let i = y; i >= 0; i--) {
				if (visited.has(`${i}-${x}`)) {
					break; // if we've visited this coord, go to next movement loop
				}
				results.push(matrix[i][x]);
				visited.set(`${i}-${x}`, true);
				y = i;
				if (results.length === total) {
					return results; // if we've gotten all the results, return!
				}
			}
			x++; // move right one column to avoid re-visiting the corner element
		}

		//  right movement - iterate from x to the last index of the current y position's 2nd dimension array (n)
		for (let i = x; i < matrix[y].length; i++) {
			if (visited.has(`${y}-${i}`)) {
				break; // if we've visited this coord, go to next movement loop
			}
			results.push(matrix[y][i]);
			visited.set(`${y}-${i}`, true);
			x = i;
			if (results.length === total) {
				return results; // if we've gotten all the results, return!
			}
		}
		y++; // move down one row to avoid re-visiting the corner element
		//  down movement - iterate from y to the last index of the curreny x position's 1st dimension array (m)
		for (let i = y; i < matrix.length; i++) {
			if (visited.has(`${i}-${x}`)) {
				break; // if we've visited this coord, go to next movement loop
			}
			results.push(matrix[i][x]);
			visited.set(`${i}-${x}`, true);
			y = i;
			if (results.length === total) {
				return results; // if we've gotten all the results, return!
			}
		}
		x--; // move left one column to avoid re-visiting the corner element
		//  left movement - iterate from x to the first index of the current y position's 2nd dimension array (n reverse order)
		for (let i = x; i >= 0; i--) {
			if (visited.has(`${y}-${i}`)) {
				break; // if we've visited this coord, go to next movement loop
			}
			results.push(matrix[y][i]);
			visited.set(`${y}-${i}`, true);
			x = i;
			if (results.length === total) {
				return results; // if we've gotten all the results, return!
			}
		}
		y--; // move up one row to avoid re-visiting the corner element
		// in each iteration of the movement loops
		//  if the length of the 'results' array is equal to 'total', we're done
		//      - return the 'results' array
		//  add the current y/x position to the visited map
		//  if the next position is out of bounds or has already been seen
		//      break from that movement loop
		// at the end of each outer loop, if the length of the 'results' value ... so use a while for the outer
	}
	return results;
}
