"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  if (target > array[array.length - 1] || target < array[0]) {
    return false;
  }
  if (array.length === 1) {
    return array[0] === target;
  }
  let midpoint = Math.floor(array.length / 2);
  let left = array.slice(0, midpoint);
  let right = array.slice(midpoint);

  if (right[0] > target) {
    return binarySearch(left, target);
  } else {
    return binarySearch(right, target);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
