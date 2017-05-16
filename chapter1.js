function printNums(arr) {
  for (var i = arr[0]; i <= arr[1]; i++) {
    console.log(i);
  }
}

printNums([-52, 1066]);


function beCheerful() {
  for (var i = 1; i <= 98; i++) {
    console.log('Good morning!', i);
  }
}

beCheerful();

function multiples3() {
  for (var i = -300; i < 0; i++) {
    if (i === -3 || i === -6) {
      continue;
    } else {
      if (i % 3 === 0) {
        console.log(i);
      }
    }
  }
}

multiples3();

function whileInt() {
  var num = 2000;
  while (num <= 5280) {
    console.log(num);
    num++;
  }
}

whileInt();


function myBirthday(date, notherDate){
  if (date === 7 && notherDate === 4 || date === 4 && notherDate === 7) {
    console.log("Hey! That's my birthday! How did you know?");
  } else {
    console.log("Just another day.");
  }
}

myBirthday(7,9);


function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    console.log(year + ' is a leap year');
  } else {
    console.log(year + ' is not a leap year');
  }
}

leapYear(1972);

function printCount() {
  var total = 0;
  for (var i = 512; i <= 4096; i++) {
    if (i % 5 === 0) {
      console.log(i);
      total++;
    }
  }
  return total;
}

printCount();

function multiples6() {
  var num = 0;
  while (num <= 40000) {
    if (num % 6 === 0) {
      console.log(num);
    }
    num++;
  }
}

multiples6();

function codingDojoWay() {
  for (var i = 1; i <= 100; i++) {
    if (i % 10 === 0 && i % 5 === 0) {
      console.log('Coding Dojo!');
    } else if ( i % 5 === 0) {
      console.log('Coding!');
    } else {
      console.log(i);
    }
  }
}

codingDojoWay();

function whatDoYouKnow(incoming) {
  console.log(incoming);
}

whatDoYouKnow('whoop whoop!');

function whoaHuge() {
  var total = 0;
  for (var i = 0; i <= 10000; i++) {
    if (i % 2 !== 0) {
      total += i;
    }
  }
  return total;
}

whoaHuge();
// did not use the -300,000 to 300,000 range because that's nuts

function countdown() {
  var num = 2016;
  while (num > 0) {
    if (num % 4 === 0) {
      console.log(num);
    }
    num--;
  }
}

countdown();

function flexiCountdown(lowNum, highNum, mult) {
  for (var i = highNum; i >= lowNum; i--) {
    if (i % mult === 0) {
      console.log(i);
    }
  }
}

flexiCountdown(2, 9, 3);

function finalCountdown(param1, param2, param3, param4) {
  var num = param2;
  while(num <= param3) {
    if (num % param1 === 0 && num !== param4) {
      console.log(num);
    }
    num++;
  }
}

finalCountdown(3, 5, 17, 9);
