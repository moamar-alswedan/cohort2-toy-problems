/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(num){
    var sum = 0 
    var power = Math.pow(2,num) 
    while (power > 0 ) {
	    sum = sum + (power % 10)
	    power = parseInt(power / 10)
    }
  return sum;
}

// time compixity  O(n)