"use strict";

//단가-수량을 한 세트로 하는 정보들을 배열로 구성(2차 배열)
const item = [
    [500,291],
    [320,586],
    [100,460],
    [120,558],
    [92,18],
    [30,72]
  ];
  
  let sum = 0;
  
  for(let i=0;i<item.length;i++){
    let itemSum = (item[i][0]*0.9)*item[i][1];
   sum += itemSum;
  }
  
  console.log("아이템 총 판매가격:"+sum+"G");
