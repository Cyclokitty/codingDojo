// stacks and heaps are not the same
// easy to allocate space for booleans and numbers
  // occupy a 64-bit chunk of memory
// objects are harder because the size is unknown
  // these use a chunk of memory set aside in the heap
// for comparison, imagine a stack as an apartment tower and a heap like Montana

function Node(value) {
  this.val = value;
  this.next = null;
}

function List() {
  this.length = 0;
  this.head = null;
}

List.prototype.add = function(value) {
 var node = new Node(value);
 var currentNode = this.head;

 if (!currentNode) {
   this.head = node;
   this.length++;
   return node;
 }

 while (currentNode.next) {
   currentNode = currentNode.next;
 }

 currentNode.next = node;
 this.length++;
};

var cats = new List();
console.log(cats.add('Munro'));

cats.add('Sylvia');
console.log(cats);
