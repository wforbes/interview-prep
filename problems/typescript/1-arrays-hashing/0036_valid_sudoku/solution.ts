// first: 12/21/25

export function isValidSudoku(board: string[][]): boolean {
    // init a history map
    const history = new Map();
    const rowCount = 9;
    const colCount = 9;
    // loop on each row
    for (let row = 0; row < rowCount; row++) {
    //  init new 'seen' array to check for row duplicates
        let seen = [];
    //  loop on each index in each row
        for (let col = 0; col < colCount; col++) {
    //      if its NaN, continue
            if(isNaN(parseInt(board[row][col]))) continue;

    //      if this number is in the seen array
    //          return false, we found a row duplicate
            let val = board[row][col]
            let idx = seen.findIndex((v) => v === val);
            if (idx !== -1) return false;
    //      add this value to the row's seen array
            seen.push(val); 
    //      store this number to the history map
    //          key is {row-col}
    //          value is the number value
            history.set(`${row}-${col}`, board[row][col]);
        }
    }

    // init an array of all the map keys
    const mapKeys: string[] = [...history.keys()];
    // loop on each column (from 0 - 9)
    for (let col = 0; col < colCount; col++) {
    //  get all of this column's keys from the key array
        let colKeys: string[] = mapKeys.filter((key) => {
            return key.endsWith(`${col}`); //key[key.length - 1] === `${col}`;
        });
    //  init an array to keep this column's seen number values
        let seen = [];
    //  loop on all of this columns keys
        for (let i = 0; i < colKeys.length; i++) {
            //      access the map with the key
            const val = history.get(colKeys[i]);
            const idx = seen.findIndex((v) => v === val);
            //      if this number value is already in the seen array
            //          return false, we found a column duplicate
            if (idx !== -1) return false;
            //      push the number value in the column to the reusable array
            seen.push(val);
        }
    }

    // declare a const 'offset' variable to 3
    const offset = 3;
    // loop on each sub-box row (from 0 - 2)
    for (let subRow = 0; subRow < offset; subRow++) {
    //  loop on each sub-box column (from 0 - 2)
        for (let subCol = 0; subCol < offset; subCol++) {
    //      init an array to keep this sub-box's seen number values
            let seen = [];
    //      (get all of this sub-box's keys from the key array)
    //      use the sub-box row and sub-box col iter vars to apply the offset
    //          to set the inner sub-box rows/cols boundaries
            const inRow = subRow * offset;
            const inCol = subCol * offset;
    //      filter the key array into an array based the boundaries to find this
    //          sub-boxes keys in the history map
            const subKeys = mapKeys.filter((mk) => {
                const [row, col] = mk.split("-");
                return (parseInt(row) >= inRow && parseInt(row) <= inRow+2)
                    && (parseInt(col) >= inCol && parseInt(col) <= inCol+2)
            });
    //      loop on the sub-box keys found
            for (let i = 0; i < subKeys.length; i++) {
                const val = history.get(subKeys[i]);
                const idx = seen.findIndex((v) => v === val)
    //          if this sub-box key's value in the history map is in the sub-box's seen array
    //              return false, duplicate found in sub-box
                if (idx !== -1) return false;
    //          add this sub-box keys' value to this sub-box's seen array
                seen.push(val);
            }
        }
    }
    //
    // return true
    return true;
};