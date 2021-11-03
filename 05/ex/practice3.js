"use strict";
console.group("3번 문제");
let j = 0;

for (let i = 1; i < 20; i++) {
  if (i % 2 == 0 || i % 3 == 0) {
    j += i;
  }
}

console.log("총합 ::: %d ", j);
console.groupEnd();

