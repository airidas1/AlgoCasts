// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

chunk([1, 2, 3, 4], 2);

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index = index + size;
  }
  return chunked;

  /*
  1variant
  const chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  console.log(chunked);
  return chunked; */

  /*
  2variant
  let arr = [];
  for (let i = 0; i <= array.length; i = i + size) {
    let tempArr = [];
    for (let j = 0 + i; j <= size - 1 + i; j++) {
      if (!array[j]) break;
      tempArr.push(array[j]);
    }
    if (tempArr.length > 0) arr.push(tempArr);
  }
  return arr; */
}

module.exports = chunk;
