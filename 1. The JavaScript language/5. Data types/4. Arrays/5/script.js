'use strict';

function getMaxSubSum(arr) {
	let sum = 0;
	let maxSum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		maxSum = Math.max(maxSum, sum);
		if (sum < 0) {
			sum = 0;
		}
	}
	return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
