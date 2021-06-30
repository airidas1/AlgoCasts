// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

capitalize('a short sentence');

function capitalize(str) {
  let arr = str.split(' ');
  let newArr = arr.map((el) => {
    return el[0].toUpperCase() + el.slice(1);
  });
  return newArr.join(' ');
}

module.exports = capitalize;
