	/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *	"())"
 */

// Step 1:

var balancedParens = function (input) {
  var res1=true;
  var res2=true;
  input=input.split("");
  if(input.length%2!==0) {
    return false
  };
  if(input[0]===")" || input[input.length-1]==="(") {
    return false
  };
    for (var i = 0; i < input.length/2; i++) {
      if(input[i]==="(") {
        res1=res1 && true;
      }
    };
    for (var i = input.length/2; i < input.length; i++) {
      if(input[i]===")") {
        res2=res2 && true;
      }
    };
    return res1 && res2 ;
 };


// step3
var balancedParens = function (input) {
  var res1=true;
  var res2=true;
  input=input.split("");
  var newArr=[] 
  for (var i = 0; i < input.length; i++) {
  	if(input[i]==="(" || input[i]==="(" || input[i]==="[" || input[i]==="]" || input[i]==="{" || input[i]==="}" ){
  		newArr.push(input[i])
  	}
  }
  if(newArr.length%2!==0) {
    return false
  };
  if(newArr[0]===")" || newArr[newArr.length-1]==="(") {
    return false
  };
    for (var i = 0; i < newArr.length/2; i++) {
      if(newArr[i]==="(") {
        res1=res1 && true;
      }
    };
    for (var i = newArr.length/2; i < newArr.length; i++) {
      if(newArr[i]===")") {
        res2=res2 && true;
      }
    };
    return res1 && res2 ;
 };

// Step 2:
var balancedParens1 = function (input) {
	input=input.split("") ;
	input=input.split("");
	  if(input.length%2!==0) {
	    return false
	  };
	  if(input[0]===")" || input[input.length-1]==="(" input[0]==="}" 
	  || input[input.length-1]==="{" input[0]==="]" || input[input.length-1]==="[") {
	    return false
	  };
	  for (var i = 0; i < input.length; i+2) {
	  	if( input[i] = 
	  }
}