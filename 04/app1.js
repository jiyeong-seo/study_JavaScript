"use strict";

// ===============================================
console.group("7번 문제");

let x = 1;

for (let i = 1; i < 8; i++) {
  x *= i;
  console.log("i=%d,x=%d", i, x);
}

console.log("7의 팩토리얼 : " + x);

console.groupEnd();
// ===============================================
console.group("8번 문제");

let y = 0;

for (let a = 1; a < 10; a++) {
  let x = a * 6;
  y += x;

  console.log("구구단 6단 : 6 x %d = %d", a, x);
  console.log("더한 값  : %d", y);
}
console.log("총 합 : %d", y);

console.groupEnd();
// ===============================================
console.group("9번 문제");

let b = 0;

for (let z = 1; z < 10; z++) {
  const c = z * 8;
  b += c;

  console.log("구구단 8단 : 6 x %d = %d", z, c);
  console.log("더한 값  : %d", b);

  console.log("총 합 : %d", b);
}

if (b % 2 == 0) {
  console.log("%d 는 짝수입니다.", b);
} else {
  console.log("%d 는 홀수입니다.", b);
}

console.groupEnd();
