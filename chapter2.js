function sigma(num) {
  var total = 0;
  for (var i = 0; i <= num; i++) {
    total += i;
  }
  return total;
}

sigma(5);

function factorial(num) {
  var total = 1;
  for (var i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

factorial(5);

function drawLeftStars(num) {
  console.log('*'.repeat(num));
}

drawLeftStars(20);

function drawRightStars(num) {
  var standard = 75;
  console.log(" ".repeat(standard - num) + "*".repeat(num));
}

drawRightStars(36);

function drawCenteredStars(num) {
  var standard = 75;
  var leftHand = 75 / 2;
  var rightHand = 75 / 2;
  console.log(' '.repeat(leftHand - (num / 2)) + '*'.repeat(num) + ' '.repeat(rightHand - (num / 2)));
}

drawCenteredStars(15)

function drawLeftChar(num, char) {
  console.log(char.repeat(num));
}

drawLeftChar(37, '&');

function drawRightChar(num, char) {
  var standard = 75;
  console.log(' '.repeat(standard - num) + char.repeat(num));
}

drawRightChar(37, '^');

function drawCenteredChar(num, char) {
  var standard = 75;
  var leftHand = 75 / 2;
  var rightHand = 75 / 2;
  console.log(' '.repeat(leftHand - (num / 2)) + char.repeat(num) + ' '.repeat(rightHand - (num / 2)));
}

drawCenteredChar(15, '@')

function threesFives() {
  var total = 0;
  for (var i = 0; i <= 5000; i++) {
    if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && 5 % 0 === 0)) {
      total += i;
      console.log(i)
    }
  }
  return total;
}

threesFives();

function betterThreesFives(start, end) {
  var total = 0;
  for (var i = start; i <= end; i++) {
    if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && 5 % 0 === 0)) {
      total += i;
      console.log(i)
    }
  }
  return total;
}

betterThreesFives(100, 900);

function generateCoinChange(cents) {
  var loonies = 0;
  var halfDollars = 0;
  var quarters = 0;
  var nickels = 0;
  var dimes = 0;
  var pennies = 0;
  while (cents > 0) {
    if (cents >= 100) {
      loonies++;
      cents -= 100;
    } else if (cents >= 50) {
      halfDollars++;
      cents -= 50;
    } else if (cents >= 25) {
      quarters++;
      cents -= 25;
    } else if (cents >= 10) {
      dimes++;
      cents -= 10;
    } else if (cents >= 5) {
      nickels++;
      cents -= 5;
    } else if (cents >= 1) {
      pennies++;
      cents -= 1;
    }
  }
  return `loonies: ${loonies}, halfDollars: ${halfDollars}, quarters: ${quarters}, dimes: ${dimes}, nickels: ${nickels}, pennies: ${pennies}`;
}

generateCoinChange(553);

function messyMath(num) {
  var sum = 0;
  for (var i = 0; i <= num; i++) {
    if (i % 3 === 0) {
      continue;
    } else if (i % 7 === 0) {
      sum += (i + i);
    } else if (num / 3 === i) {
      sum = -1;
      break;

    } else {
      sum += i;
    }
  }
  return sum;
}

messyMath(15);
