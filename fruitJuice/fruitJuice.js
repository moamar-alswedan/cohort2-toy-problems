/*
In this toy problem we mix some tasty fruit juice. 
We can add some components with certain amounts. 
Sometimes we pour out a bit of our juice. 
Then we want to find out, which concentrations our fruit juice has.

Example:

You take an empty jar for your juice
Whenever the jar is empty, the concentrations are always 0
Now you add 200 units of apple juice
And then you add 200 units of banana juice
Now the concentration of apple juice is 0.5 (50%)
Then you pour out 200 units 100 100
The concentration of apple juice is still 50%
Then you add 200 units of apple juice again
Now the concentration of apple juice is 0.75, while the concentration
of banana juice is only 0.25 (300 units apple juice + 100 units banana juice)

Complete the functions in order to provide this functionality.
*/

function Jar() {
  // object to store juice and units
  this._storage = {};
}

Jar.prototype.add = function(units, juice) {
	// add juice and unit to the storage.
  this._storage[juice] = units
};

Jar.prototype.remove = function(units, juice) { 
  var temp = this._storage[juice] ;
  temp=this._storage[juice] - units
  return temp
};

Jar.prototype.getTotalAmount = function() {
	// we sum all the units
  var total = 0;
  for (var key in this._storage) {
    total+= this._storage[key]
  }
  return total
}


Jar.prototype.getConcentration = function(juice) {
	// count the precentage of juice from total
  if(Object.keys(this._storage).length === 0) {
    return 0
  } else {
    return this._storage[juice] / this.getTotalAmount() * 100  + "%"
  }
}

// time complexity = O(n)

/*
These are some tests:
var jar = new Jar();
jar.getConcentration('apple');//should be 0
jar.add(200, 'apple');
jar.getTotalAmount(); //should be 200
jar.getConcentration('apple'); //should be 1 or 100%
jar.add(200, 'banana');
jar.getTotalAmount();// should be 400
jar.getConcentration('apple'); //should be 0.5 or 50%
jar.getConcentration('banana'); //should be 0.5 or 50%
*/