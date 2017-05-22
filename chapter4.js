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
