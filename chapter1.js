function countdown(num) {
  var arr = [num];
  for (var i = 1; i <= num; i++) {
    arr.push(num - i);
  }
  return arr;
}

countdown(10);

function printReturn(arr) {
  console.log(arr[0]);
  return arr[1];
}

printReturn([10, 29]);

function firstPlusLength(arr) {
  return arr[0] + arr.length;
}

firstPlusLength([true, 20, 30, 40, 50]);

// if the first value is a string, the arr[0] just concatenates with arr.length
// if the first value is true, then the total is 6 (true === 1)
// if the first value is false, then the total is 5 (false === 0)

function valuesGreaterThanSecond(arr) {
  var bigger = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[1]) {
      bigger.push(arr[i]);
    }
  }
  return bigger;
}

valuesGreaterThanSecond([1, 3, 5, 7, 9]);

function thisLengthThatValue(num1, num2) {
  var arr = [];
  for (var i = 0; i < num1; i++) {
    if (num2 === arr.length) {
      arr.push('Jinx!');
    } else {
      arr.push(num2);
    }
  }
  return arr;
}

thisLengthThatValue(10, 4);

function fitTheFirstValue(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      console.log('just right!');
    } else if (arr[0] > arr.length) {
      console.log('Too big!');
    } else if (arr[0] < arr.length) {
      console.log('Too small!');
    }
  }
}

fitTheFirstValue([12, 4, 9]);

function celToFah(temp) {
  return temp * 9 / 5 + 32;
}

celToFah(19);

function fahToCel(temp) {
  return (temp - 32) * 9 / 5;
}

fahToCel(32);
