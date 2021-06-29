// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

palindrome('abba');
/* palindrome1('abba');
palindrome2('abba'); */

function palindrome(str) {
  let word = str.split('').reverse().join('');
  console.log(word);
  return word === str;
}

/* function palindrome1(str) {
  let word = '';
  for (let i = str.length - 1; (i) => 0; i--) {
    word = word + str[i];
  }
  console.log(word);
  return word === str;
}

function palindrome2(str) {
  let word = str.split('');

  return word.every((letter, index) => {
    return letter === str[str.length - 1 - index];
  });
} */

module.exports = palindrome;
