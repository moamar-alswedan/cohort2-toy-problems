/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */
<<<<<<< HEAD

 var primeTester = function(n) {
	// first I should remove the 1 from the test 
	// because the 1 not prime
	if(n < 2){
		return false;
	}
// divide n on all previous number
flag = true
for (var i = 2; i < n; i++) {
	if(n % i === 0){
		flag = false;
	}
}
return flag
};
// timo compixity = O(n)
console.log(primeTester(11));

/* Extra credit: Write a function that generates a list of all prime numbers
=======
var primeTester = function(n) {

}

 /* Extra credit: Write a function that generates a list of all prime numbers
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */

<<<<<<< HEAD
  var primeNumber = function(start, end) {
  // Return  prime numbers between start and ene 
  var arr = [];
  for(var i =start; i < end; i++){
  	if(primeTester(i) === true) {
  		arr.push(i)
  	};
  }
  return arr;
};
// timo compixity = O(n)
console.log(primeNumber(9,77))
=======
  
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
