"use strict";

let arr = [5, 3, 2, 8, 9];
console.log("before --> " + arr);
//반복 횟수
for (var i = 0; i < parseInt(arr.length / 2); i++) {
  let tmp = arr[i];
  arr[i] = arr[arr.length - i - 1];
  arr[arr.length - i - 1] = tmp;
}

console.log("after --> " + arr);
