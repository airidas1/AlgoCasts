// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz
fizzBuzz(150);

function fizzBuzz(n) {
  let arr = [];
  for (let i = 1; i <= +n; i++) {
    arr.push(i);
  }
  arr.forEach((element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      console.log('fizzbuzz');
    } else if (element % 3 === 0) {
      console.log('fizz');
    } else if (element % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(element);
    }
  });
}

module.exports = fizzBuzz;
