"use strict";

let price = [38000, 20000, 17900, 17900];
let qty = [6, 4, 3, 5];
let max = new Array(4);
let free = 0; //확인하기

for (let i = 0; i < price.length; i++) {
  max[i] = price[i] * qty[i];
  if (max[i] >= 80000) {
    free += 1;
  }
}


console.log("무료배송 항목: " + free + "건");
