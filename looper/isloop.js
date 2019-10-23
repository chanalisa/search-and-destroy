"use strict";

//Complete this algo
const isLoop = linkedlist => {
  let turtle = linkedlist.head;
  let rabbit = linkedlist.head;
  while (turtle && rabbit.next) {
    turtle = turtle.next;
    rabbit = rabbit.next.next;
    if (turtle === rabbit) {
      return true;
    }
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
