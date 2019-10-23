"use strict";

// Complete this algo
const minJumps = (arr = [2, 4, 1, 1, 2, 3, 7, 1, 1, 3]) => {
  let jumpCount = 0;
  let jumpLength = arr[0];
  let i = 0;
  let subArray = arr.slice(i + 1, i + arr[i] + 1);
  let nextJump = Math.max(...subArray);
  console.log(arr);
  while (jumpLength < arr.length) {
    jumpLength += nextJump;
    jumpCount++;
  }
  return jumpCount;
};

module.exports = minJumps;
