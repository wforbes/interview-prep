//first: 12/20/25 - couldnt find O(n) time, O(1) space solution in 1 hour, had to read up to understand
export function productExceptSelf(nums: number[]): number[] {
    // init a result array, to match the length of nums, populated by 1s
    const result: number[] = new Array(nums.length).fill(1);
    
    // Compute the prefix products of each nums array position, set into the result array
    // - iterate forward through the nums array starting at index 1 because index 0 has no prefix
    for (let i = 1; i < nums.length; i++) {
        // -- compute the prefix product value for each nums item
        //  by multiplying the previous index results value by the previous index nums value
        result[i] = result[i - 1] * nums[i - 1];
    }

    // init a suffix variable as 1 (because the last item has no suffix)
    let suffix = 1;
    // iterate backward from the end of the array
    for (let i = nums.length - 1; i >= 0; i--) {
        //  find the product of the postfix and the result array at index i, set into result array at index i
        result[i] *= suffix;
        //  find the product of the nums at i value and the postfix, set into postfix to use in the next backward iteration
        suffix *= nums[i];
    }
    return result;
};