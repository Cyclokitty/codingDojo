// I know this is wrong but really, no built in methods? What are we? Cave dwellers?

function pushFront(arr, item) {
  return arr = [item, ...arr];

}

pushFront(['cat', 'dog', 'hamster'], 'duck');
