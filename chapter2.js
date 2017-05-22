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

function twelveBarBlues() {
  for (var i = 1; i <= 12; i++ ) {
    console.log(`${i} chick boom chick`);
  }
}

twelveBarBlues();

function fibonacci(num) {
  var fibo = [0, 1];
  var i = 0;
  while (i <= num) {
    fibo.push(fibo[i] + fibo[i + 1]);
    i++;
  }
  return fibo;
}

fibonacci(15);

function sumToOneDigit(num) {
  num = Math.floor(num);
  var sum = 0;
  while ( num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
    console.log(sum + " " + num)
  }
  if (sum > 9) {
    return sumToOneDigit(sum);
  } else {
    return sum;
  }
}


sumToOneDigit(928);

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

isPrime(9);

function sweatshirtPricing(num) {
  var price = 20;
  var discount2 = 0.09;
  var discount3 = 0.19;
  var discount4OrMore = 0.35;
  if (num === 1) {
    return price;
  } else if (num === 2) {
    return Math.ceil((price * 2) - (price * 2) * discount2);
  } else if (num === 3) {
    return Math.ceil((price * 3) - (price * 3) * discount3);
  } else if (num >= 4) {
    return Math.ceil((price * 4) - (price * 4) * discount4OrMore);
  }
}

sweatshirtPricing(4);
