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

// The Buggy 13:

function print1To255() {
  var num = 1;
  while (num < 255) {
    console.log(num);
    num++;
  }
}

// correction: print all integers to 255:
function print1To255() {
  var num = 1;
  while (num <= 255) {
    console.log(num);
    num++;
  }
}

print1To255();

// prints integers from 0 to 255 and the sum so far:
function printIntsAndSum0to255() {
  var sum = 0;
  for (var num = 0; num <= 255; num++) {
    {sum += num;}
    return sum;
  }
}

//correction:
function printIntsAndSum0to255() {
  var sum = 0;
  for (var num = 0; num <= 255; num++) {
    sum += num;
    console.log(num + " " + sum);
  }
  return sum;
}

printIntsAndSum0to255();

// print the largest element in a given arrayToObject
function printMaxOfArray(arr) {
  if (arr.length === 0) {
    console.log('[], no max value');
    return;
  }
  var max = 0;
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] > max) {
      max = arr[idx];
    }
  }
  console.log('Max val is: ', max);
}

// this is fine but this is less typy:
function printMaxOfArray(arr) {
  if (arr.length === 0) {
    console.log('[], no max value');
    return;
  }
  return Math.max.apply(null, arr);
}
