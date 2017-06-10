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

// prints all odd integers from 1 to 255
function printOdds1to255() {
  var num =1;
  while (num <= 255) {
    console.log(num + 2);
  }
}

// hello! infinite loop time! gotta advance the num each looping
function printOdds1to255() {
  var num =1;
  while (num <= 255) {
    console.log(num);
    num+= 2;
  }
}

// or use a for loop and and an if statement:
function printOdds1to255() {
  var num =1;
  for (var i = 0; i <= 255; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

printOdds1to255();

// print all values in a given array
function printArrayVals(arr) {
  for var idx = 0; i < arr.length; arr++ {
    console.log('array[',idx,']=',arr[idx] );
  }
}

// corrected:
function printArrayVals(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    console.log('array[',idx,']=',arr[idx] );
  }
}


printArrayVals([10, 20, 30, 40, 50, 60]);

// analyze an array's values and print the average

arr = [1, 4, 7, 2, 5, 8];
if (arr.length === 0) {
  console.log('[], no avg val.');
  return;
}

var sum = arr[0];
for (var idx = 1; idx < arr.length; idx++) {
  sum += arr[idx];
}
console.log('Avg val:', sum / arr.length);

// corrections: needs to be a function, set sum to 0 and not the first item in the array

function printAverageOfArray(array) {
  if (arr.length === 0) {
  console.log('[], no avg val.');
  return;
}

  var sum = 0;
  for (var idx = 1; idx < arr.length; idx++) {
    sum += arr[idx];
  }
  console.log('Avg val:', sum / arr.length);
}

printAverageOfArray(arr);

// create an return array with odd integers rom 1 to 255

function returnOddsArray1to255() {
  var oddArray = [];
  for (var num = 1; num <= 255; num += 2) {
    oddArray.push(num);
  }
}

// correction: need to return oddArray after the for loop

function returnOddsArray1to255() {
  var oddArray = [];
  for (var num = 1; num <= 255; num += 2) {
    oddArray.push(num);
  }
  return oddArray;
}

returnOddsArray1to255();

// given an array, return count greater than y

function countGreaterThanY(arr, y) {
  var numGreater = 0;
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] > y) {
      numGreater++;
    }
  }
  return arr[y]l
}

// correction: return numGreater because it holds the number of times an item in arr is greater than y

function countGreaterThanY(arr, y) {
  var numGreater = 0;
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] > y) {
      numGreater++;
    }
  }
  return numGreater;
}

countGreaterThanY([10, 20, 30, 40, 50], 25);

// print the max, min, and average array values:
function printMaxMinAverage(arr) {
  if (arr.length === 0) {
    return;
  }
  var min = arr[0];
  var max = arr[0];
  var sum = arr[0];
  for (var idx = 1; idx <= arr.length; idx++) {
    if (arr[idx] < min) {
      min = arr[idx];
    }
    if (arr[idx] > max) {
      max = arr[idx];
    }
    sum += arr[idx];
  }
  return min;
  return max;
  return avg;
}

// corrections: set idx to 0 and not 1, idx < arr.length, avg was not calculated, can't return after return min so changed it to an objects
function printMaxMinAverage(arr) {
  if (arr.length === 0) {
    return;
  }
  var min = arr[0];
  var max = arr[0];
  var sum = 0;
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] < min) {
      min = arr[idx];
    }
    if (arr[idx] > max) {
      max = arr[idx];
    }
    sum += arr[idx];
  }
  return {
    min,
    max,
    avg: sum / arr.length
  };
}

printMaxMinAverage([10, 20, 30, 40, 50]);

// given an array, square each value in the array
function squareArrVals(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    arr[idx] = arr[idx] + arr[idx];
  }
}

// corrections: changed the operator to * because we want the square and not the sum, and returned the array after the for loop

function squareArrVals(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    arr[idx] = arr[idx] * arr[idx];
  }
  return arr;
}

squareArrVals([2,3,4]);

// given an array, set negative values to zero
zeroOutArrayNegativeVals(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] < 0) {
      arr[idx] = 0;
    }
  }
}

// corrections: need function keyword, and need to return arr after the for loop

function zeroOutArrayNegativeVals(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] < 0) {
      arr[idx] = 0;
    }
  }
  return arr;
}

zeroOutArrayNegativeVals([-2, -1, 0, 1, 2]);

// shift array values forward, leaving 0 at the end
function shiftArrayValsLeft(arr) {
  for (var ix = 1; ix < arr.length; ix++) {
    arr[ix -1] = arr[ix];
  }
  arr.length--;
  return arr;
}

// correction: arr.length-- didn't add a 0 to the end of the arr

function shiftArrayValsLeft(arr) {
  for (var ix = 1; ix < arr.length; ix++) {
    arr[ix -1] = arr[ix];
  }
  arr[arr.length - 1] = 0;
  return arr;
}

shiftArrayValsLeft([10, 20, 30, 40, 50]);

// replace negative array values with 'Dojo'

function swapStringForArrNegs(arr) {
  for (var idx = 0; idx < arr.length; i++) {
    if (arr[idx] < 0) {
      arr[idx] = 'Dojo!';
    }
  }
  return arr;
}

// this is fine!
