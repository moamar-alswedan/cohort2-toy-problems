
/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var arr=["rock","paper","scissors"]

function rockPaperScissors(arr) {
	
    var arrRes=[]
  for (var i = 1; i <3; i++) {
  	arrRes.push(arr[0]);
  	if(arr.length===0) {
  		arrRes.push(arr.shift())
  	}
  	
  }
  return arrRock
}


