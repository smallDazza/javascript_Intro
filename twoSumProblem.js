

function twoSum(nums, target) {
    // Create a map to store numbers and their indices
    const numToIndex = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement needed to reach the target
        const complement = target - nums[i];

        // Check if the complement exists in the map
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }

        // Add the current number and its index to the map
        numToIndex.set(nums[i], i);
    }

    // If no solution exists, return an empty array
    return [];
}

const nums = [2, 7, 11, 15];
const target = 26;
console.log(twoSum(nums, target)); // Output = array index location of the two numbers that add together to equal target number.
