/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
    */

var spiralTraversal = function(matrix){
	var arr = [];
	var i = 0
	var j = 0
// we need to print first the border of the matrix 
// then delete it and recursion 
//  var print = function(matrix){
	for (i , j  ; j < matrix.length ; j++) {
		arr.push(matrix[i].pop())
	}
	for (var i , j=matrix[i].length-1; i < matrix.length; i++) {
		arr.push(matrix[i].pop())
	}
	for (var i = matrix.length-1, j = matrix.length-2 ; j >=0; j--) {
		arr.push(matrix[i].pop())
	}
	for (var i = matrix.length-2, j = 0 ; i>=1; i--) {
		arr.push(matrix[i].pop())
	}
//}

return arr
};
// Time complixity O(n*m)