// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

anagrams('rail safety', 'fairy tales');

function anagrams(stringA, stringB) {
  /* 
 reminder
 let chars = {};
  let str = 'hello world';
  for (let char of str.replace(/[^\w]/g, '')) {
    chars[char] = chars[char] + 1 || 1;
  } */

  return cleanUpWord(stringA) === cleanUpWord(stringB);
}

function cleanUpWord(word) {
  return word.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
