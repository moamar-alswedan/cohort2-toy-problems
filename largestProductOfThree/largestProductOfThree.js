/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

 var largestProductOfThree = function(array) {
	// sort the array
	array.sort(function(a, b){return a-b});
 	// find the largestProductOfThree for negative number
 	var small = array[0]*array[1]*array[array.length-1];
 	// find the largestProductOfThree for positive number
 	var large = array[array.length-1]*array[array.length-2]*array[array.length-3];
 	if(small< large) {
 		return large
 	} else {
 		return small
 	}

 };

// time complixity = O(n)
console.log(largestProductOfThree([-5, 2, 1, 3, 7,-2]))



