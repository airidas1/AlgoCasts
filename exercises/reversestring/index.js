// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

reverse('apple');
reverse1('apple');
reverse2('apple');
reverse3('apple');

function reverse(str) {
  let word = '';
  for (let i = str.length - 1; i >= 0; i--) {
    word = word + str[i];
  }
  console.log(word);
  return word;
}

function reverse1(str) {
  return str.split('').reverse().join('');
}

function reverse2(str) {
  let reversed = '';

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

function reverse3(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;
