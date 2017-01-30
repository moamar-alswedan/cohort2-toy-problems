/*
You are lost in Amman and need directions. You talk to a few strangers
and get these directions: go "NORTH", then "SOUTH", then "WEST", then "EAST", then "EAST".

Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
Going to one direction and coming back the opposite direction is a needless effort.

Your task is to look at the directions and eliminate all unnecessary moves.
In this case, you will just go EAST.

Another example:

plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, 
better stay where you are. So the task is to find a simplified version of the plan. 

A better plan in this case is simply: 
plan = ["WEST"]

You have to write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed.

More examples:

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => [] //don't need to move at all
*/

var dirReduc = function(directions){
<<<<<<< HEAD
	// I should remove from array all the opposite way
	var newArr =[];
	for (var i = 0; i < directions.length; i++) {
		if(directions[i] === directions[i+1]) {
			directions.splice(i+1,1);
		}
	}
	for (var i = 0; i < directions.length; i++) {
		 if(directions[i] === 'NORTH' & directions[i+1] ==='SOUTH') {
			directions.splice(i+1,1);
		} else if(directions[i] === 'SOUTH' & directions[i+1] ==='NORTH'){
			directions.splice(i+1,1);
		} else if(directions[i] === 'EAST' & directions[i+1] ==='WEST'){
			directions.splice(i+1,1);
		} else if(directions[i] === 'WEST' & directions[i+1] ==='EAST'){
			directions.splice(i+1,1);
		}
	}
	if(directions[0] === directions[directions.length-1]) {
		return [];
	}
	return directions[directions.length-1];
};

// complixity time = O(n)
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]))
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
=======
	
	return directions;
};

>>>>>>> d2130e14cb0ab2ec81404accbb5aee359f2349a4
