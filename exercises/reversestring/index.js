// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

module.exports = reverse;

/*
function reverse(str) {
  return str.split("").reduce((reversed, char) => char + reversed, "");
}
*/
/*
function reverse(str) {
  let revStr = str.split("").reverse().join("");
 return revStr;
}
*/
/*
function reverse(str) {
  let l = str.length;
  let strArr = [];
  for (let i = l - 1; i >= 0; i--) {
    strArr.push(str[i]);
  }
  let revStr = strArr.join("");
  return revStr;
}
*/