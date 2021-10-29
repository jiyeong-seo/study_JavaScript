"use strict";

const price = [209000, 109000, 119000, 109000, 94000];
console.log("상품가격 -->" + price);

//바깥 조건문 -> 첫번째 비교값
for (let i = 0; i < price.length - 1; i++) {
  //안쪽 조건문 -> 두번째 비교값
  for (let j = i + 1; j < price.length; j++) {
    if (price[i] > price[j]) {
      let tmp = price[i];
      price[i] = price[j];
      price[j] = tmp;
    }
  }
}
console.log("낮은가격순 -->" + price);
