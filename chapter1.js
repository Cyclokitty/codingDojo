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

function biggieSize(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = 'big';
    }
  }
  return arr;
}

biggieSize([-1, 3, 5, -5]);

function printLowReturnHigh(arr) {
  console.log(Math.min.apply(null,arr));
  return Math.max.apply(null, arr);
}

printLowReturnHigh([2, 1, 9]);

function printOnReturnAnother(arr) {
  console.log(arr[arr.length - 2]);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return arr[i];
    }
  }
}

printOnReturnAnother([10, 3, 7, 8, 9]);

function doubleVision(arr) {
  const double = [];
  for (var i = 0; i < arr.length; i++) {
    double.push(arr[i] * 2);
  }
  return double;
}

doubleVision([2, 3, 4, 5]);

function countPositives(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  arr[arr.length - 1] = total;
  return arr;
}

countPositives([-1, 1, 1, 1]);

function evenOdds(arr) {
  var oddCounter = 0;
  var evenCounter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && evenCounter !== 3) {
     evenCounter++;
    } else if (evenCounter === 3) {
      console.log("Even more so!");
    } else if (arr[i] % 2 !== 0 && oddCounter !== 3) {
      oddCounter++;
    } else if (oddCounter === 3) {
      console.log('That\'s Odd!');
    }
  }
}

evenOdds([2, 3, 5, 9, 7]);

function incrementSeconds(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      arr[i]++;
      console.log(arr[i]);
    } else {
      console.log(arr[i]);
    }
  }
  return arr;
}

incrementSeconds([5, 10, 15, 20, 25, 30, 35, 40]);

function previousLength(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      arr[i] = i;
    } else {
      arr[i] = i - 1;
    }
  }
  return arr;
}

previousLength(['cat', 'dog', 'hamster', 'pony', 'gopher']);

function addSeven(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      continue;
    } else {
      newArr.push(arr[i] + 7);
    }
  }
  return newArr;
}

addSeven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function reverse(arr) {
  return arr.reverse();
}

reverse([1, 2, 3, 4, 5]);

function negative(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = -Math.abs(arr[i]);
    }
  }
  return arr;
}

negative([1, -3, 5]);
