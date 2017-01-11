/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

  var deepEquals = function(obj1, obj2){
    // convert the objects to string
    obj1 = JSON.stringify(obj1)
    // split the string to array
    obj1 = obj1.split('"')
    obj2 = JSON.stringify(obj2)
    obj2 = obj2.split('"')
    // compare the length of arrays
    if (obj1.length !== obj2.length) {
      return false
    }
    flag=true
    // compare the tow array 
    for (var i = 0; i < obj1.length; i++) {
      if(obj1[i]===obj2[i]){
        flag=flag && true 
      } else {
      flag=flag && false
      }
      }
      return flag
  }
   // complexity time : O(n)