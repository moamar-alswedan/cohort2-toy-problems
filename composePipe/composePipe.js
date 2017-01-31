/*
 * Write Compose and Pipe functions.
 * 
 * Step 1: Implement the function Compose: 
 *
 * Compose should return a function that is the composition of a list of
 * functions.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view Compose as moving RIGTH to LEFT through its arguments.
 *
 * Compose Example:
   var greet = function(name){ return 'hello ' + name;}
   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
   var welcome = compose(exclaim, greet);
   welcome('phillip'); // 'hello PHILLIP!'

 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 * 
 * Each function is called on the return value of the preceding function.
 *
 * You can view Pipe as moving LEFT to RIGHT through its arguments.
 * 
 * Pipe Example:
  var add2 = function(number){ return number + 2; }
  var multiplyBy3 = function(number){ return number * 3; }
  var addAndMultiply = pipe(add2, multiplyBy3);
  addAndMultiply(5);//should be 21
  var addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);
  addAndMultiplyTwice(5); //should be 63
  */

  'use strict';
  var add2 = function(number){ return number + 2; }
  var multiplyBy3 = function(number){ return number * 3; }

  var pipe = function(func1,func2){
    var result=0
    return function (num) {
    for (var i = 0; i < arguments.length; i++) {
    //  we start apply the first function from the left of arguments on the parameter
    // then apply the rest of function on on the result

    }
    return result
  }
};
  // complixity time O(n)

  var add2 = function(number){ return number + 2; }
  var multiplyBy3 = function(number){ return number * 3; }
  var addAndMultiply = pipe(add2, multiplyBy3);
 // console.log(addAndMultiply(5));//should be 21

//==============================================================================

var greet = function(name){ return 'hello ' + name;}
var exclaim = function(statement) { return statement.toUpperCase() + '!';}

var compose = function () {
  // variable for teh result
 // var result="";
// make afunction with the result parameter
  var arg= Array.from(arguments)
return function (result) {

  // iteration over the arguments
  for (var i =0 ; i < arg.length - 1; i++) {
    // moving right to left through  arguments 
    // we start from last function
    result = arg[i].call(this, result);
  }
  return result;
};
};
 // complixity time O(n)

 var greet = function(name){ return 'hello ' + name;}
 var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 var welcome = compose(exclaim, greet);
 console.log(welcome('phillip'));
