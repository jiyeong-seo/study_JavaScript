"use strict";

let price = [38000, 20000, 17900, 17900];
let qty = [6, 4, 3, 5];
let max = new Array(4);
let high = 0; //확인하기

for (let i = 0; i < price.length; i++) {
  max[i]= price[i] * qty[i];
  
  if(high < max[i]){
    high = max[i];
  }

}

console.log("가장 높은 상품금액 : " + high + "원");
