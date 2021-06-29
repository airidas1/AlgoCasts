// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

maxChar('abcccccccd');

function maxChar(str) {
  let max = 0;
  let maxChar = '';
  const arr = str.split('');
  const chars = {};
  for (let char of arr) {
    chars[char] = chars[char] + 1 || 1;
  }
  //1 variantas
  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }
  // antras variantas
  return Object.keys(chars).reduce((a, b) => (chars[a] > chars[b] ? a : b));
}

module.exports = maxChar;
