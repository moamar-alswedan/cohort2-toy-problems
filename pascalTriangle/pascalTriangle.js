/*
Pascal triangle is a triangle made with rows of numbers.
The first row is [1]. 
The second row is [1,1].
In all following rows, each number is the sum of the two directly above it.

For example, the pascal triangle with 4 rows is:

        1
      1   1
    1   2   1
  1   3   3   1

or in array form: [[1],[1,1],[1,2,1],[1,3,3,1]];

Read more about Pascal Triangle here:
http://en.wikipedia.org/wiki/Pascal's_triangle

Also, see the animated GIF file in this folder (open it in Chrome)

The task for this exercise is to write a function that given the number of rows, 
builds an array of arrays that represents the pascal triangle.

For example:
buildTriangle(3);// should output [[1],[1,1],[1,2,1]];
*/
var sum =function(array){
	// array to sum the number of array
	var arr =[];
	for (var i = 0; i < array.length-1; i++) {
		arr.push(array[i]+array[i+1])
	}
	return arr
}

var buildTriangle = function(numOfRows){
	var arr = [];
	arr[0]=[1]
	arr[1]=[1,1]	
	for (var i = 0; i < numOfRows; i++) {
		arr.push(sum(i))
		arr.push([1])

	}
	return arr
}
// complixity time = O(n2)

console.log(buildTriangle(3))		
console.log(sum([1,1]))