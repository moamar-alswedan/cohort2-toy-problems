/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */
 var array = [1,5,8,8,24,25];
 var target = 8;

 var binarySearch = function (array, target) {
    
 	var mid = Math.floor(array.length/2);
    if (array[mid] === target) {
    	return mid
    } else if (array[mid] < target & array.length>1) {
    
    	binarySearch (array.splice(mid,array.log),target)
    } else if (array[mid] > target & array.length>1) {
  
    	binarySearch (rray.splice(0,mid),target)
    }
 };

