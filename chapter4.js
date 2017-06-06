function removeBlanks(str) {
  return str.replace(/\s/g,'');
}

removeBlanks('Pl  ayTha  tF  u  nkyM  usi c');

function findNums(str) {
  var nums = [];
  str = str.split('');
  for (var i = 0; i < str.length; i++) {
    if (Number(str[i])) {
      nums.push(str[i]);
    }
  }
  return parseInt(nums.join(''), 10);
}

findNums('ask123klm987');

function acronyms(str) {
  var initials = [];
  str = str.split(' ');
  for (var i = 0; i < str.length; i++) {
    initials.push(str[i][0].toUpperCase());
  }
  return initials.join('');
}

acronyms("stay sexy don't get murdered");

function countNonSpaces(str) {
  return str.replace(/\s/g,'').length;
}

countNonSpaces("honey pie, you are driving me crazy");

function removeShortStrings(str, val) {
  str = str.split(' ');
  var shortStr = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > val) {
      shortStr.push(str[i]);
    }
  }
  return shortStr;
}

removeShortStrings('get a job, stay out of the forest, buy your own shit', 3);

function reverse(str) {
  var backwords = [];
  str = str.split('');
  for (var i = str.length - 1; i >= 0; i--) {
    backwords.push(str[i]);
  }
  return backwords.join('');
}

reverse('creature');

function oddStrings(str) {
  var odds = [];
  str = str.split(' ');
  for (var i = 0; i < str.length; i++) {
    if (str[i].length % 2 !== 0) {
      odds.push(str[i]);
    }
  }
  return odds.join(' ');
}

oddStrings("Nope! Its Kris string with K! Instead of Chris with C.");

function getJiggy(name) {
  name = name.split('');
  var first = name.splice(0, 1);
  var end = name.splice(0, name.length);
  end[0] = end[0].toUpperCase();
  return end.join('') + " to the " + first + "!";
}

getJiggy('Dylan');

function arrayToObject(arr1, arr2) {
  var obj = {};
  for (var i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
  }
  return obj;
}

arrayToObject(['abc', 'goat', 'yo'], [42, 'wassup', true]);
