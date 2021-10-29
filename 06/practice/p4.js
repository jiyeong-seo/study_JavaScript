"use strict";

var price = [38000, 20000, 17900, 17900];
var qty = [6, 4, 3, 5];
var money = 0;

for (let i = 0; i < price.length; i++) {
  money += price[i] * qty[i];
}

console.log("전체 결제 금액 :" + money + "원");

//배열 두개를 병합하기 위해서는 배열 두개의 원소수가 같아야 한다.
