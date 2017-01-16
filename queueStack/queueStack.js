/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
  this.stack=[];
  this.size=0;

   // add an item to the top of the stack
   this.push = function(value){
    this.stack.push(value);
   };

   // remove an item from the top of the stack
   this.pop = function(){
    this.stack.pop();
   };

   // return the number of items in the stack
   this.size = function(){
    return this.stack.length;
   };
 };

 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();
   this.queue=this.stack;
   this.head = null;
   this.tail = null;
   Stack.call(this);
   // called to add an item to the `queue`
   this.enqueue = function(value){
     this.head = this.inbox.push(value);
     this.tail = this.inbox.push(value);
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
   };

   // should return the number of items in the queue
   this.size = function(){
   };
 };

 Queue.prototype = Object.create(Stack.prototype);
 Queue.prototype.constructor =Queue
