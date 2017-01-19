/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true'; // list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';

var LinkedList = function(){  
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.Node = function(value){  
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

LinkedList.prototype.addToTail = function(value){  
  if (this.head === null) {
    this.tail.next = null;
    this.tail = this.Node(value);
  } else {
     this.head = this.Node(value);
     this.tail = this.Node(value)
  }
};

LinkedList.prototype.removeHead = function(){  
  var temp = this.head.value;
  if (this.head.value === this.tail.value) {
      this.head = null;
      this.tail = null ;
  } else {
      this.head = this.head.next;
  }
  return temp;
};

LinkedList.prototype.contains = function(value){  
  
};
