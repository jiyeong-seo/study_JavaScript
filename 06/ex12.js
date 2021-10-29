"use strict";

// let ssn = [9,6,1,2,2,0,2,0,5,0,1,1,2];

// let b =[2,3,4,5,6,7,8,9,2,3,4,5];

// let add = 0;
//  let n = 0;
// let a =0;
// for(let i=0; i<ssn.length-1;i++){
//   let str ="";
//   for(let j=0;j<b.length;j++){
//     add += ssn[i]*b[j]
    
//   }
//  str = (11-(add%11))%10
//   console.log(str);
// }


const ssn = [9,6,1,2,2,0,2,0,5,0,1,1,2];

//가중치*각자리수의 총합
let total =0;

//가중치 --> 주민등록번호의 순서에 따라 234567892345
let k =2;

//마지막 숫자는 제외하고, 기본코드의 각 12자리와 가중치를 모두 곱하여 합 구하기
for(let i=0; i<ssn.length-1; i++){
  total += ssn[i]*k
 
  //가중치 규칙 적용
  k = k== 9? 2 : k+1;
  
}
//합한 값을 11로 나눈 나머지 값을 구한다.
let s = total%11;
 console.log(s)
//11에서 그 나머지 값을 뺀 후, 이를 10으로 나눈 나머지를 구한다.
let t = (11-s)%10;
console.log(t);

//나머지의 값과 주민등록번호 마지막 자리 값이 맞아야 유효한 주민등록번호이다.
if(t ==ssn[ssn.length-1]){
  console.log("유효합니다.");
} else {
  console.log("유효하지 않습니다.")
}
