//first: 12/20/25
export function longestCommonPrefix(strs: string[]): string {
    if(strs.length == 1) return strs[0];

    // init a str var to use for building the common prefix
    let common = "";
    for (let i = 0; i < strs[0].length; i++) {
        // for each character in the first string
        //  init a boolean that starts as true
        let allMatch = true;
        //  check the other strings to see if they contain this char in this position
        for (let j = 1; j < strs.length; j++) {
            if (strs[j].length <= i || strs[j][i] !== strs[0][i]) {
                allMatch = false;
                break;
            }
        }
        //  if boolean is still true then add this character to the common prefix
        if (allMatch) {
            common += strs[0][i];
        } else {
            //  else break from first string char loop
            break;
        }
    }

    // return common prefix str
    return common;
};