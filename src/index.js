module.exports = function check(str, bracketsConfig) {
  let rightSequens = '';
  let brackets = {};

  bracketsConfig.forEach(elem => {
    brackets[elem[0]] = elem[1];
  });
  str.split('').forEach(elem => {
    if (brackets.hasOwnProperty(elem)) {
      if(rightSequens.slice(-1) === elem && brackets.hasOwnProperty(brackets[elem])) {
        rightSequens = rightSequens.slice(0, -1);
      } else {
        rightSequens += elem;
      }
    } else {
      if (brackets[rightSequens.slice(-1)] !== elem || rightSequens.length === 0) {
        rightSequens += 'asdsdsa';
      }
      rightSequens = rightSequens.slice(0, -1);
    }
  });
  return !Boolean(rightSequens);
};
