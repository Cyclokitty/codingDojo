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
