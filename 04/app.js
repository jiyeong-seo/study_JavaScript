"use strict";

console.group("1번 문제");
const 과학 = 72;

if (과학 > 70) {
  console.log("이 과목을 pass 했습니다.");
} else {
  console.log("이 과목을 Pass하지 못했습니다.");
}
console.groupEnd();
// ===============================================
console.group("2번 문제");
const 국어 = "B";

if (국어 === "A") {
  console.log("A학점 입니다.");
} else if (국어 === "B") {
  console.log("B학점 입니다.");
} else {
  console.log("C학점 미만 입니다.");
}
console.groupEnd();
// ===============================================
console.group("3번 문제");
const 수학 = "B";

if (수학 === "A") {
  console.log("이 과목을 Pass 했습니다.");
} else if (수학 == "A" || 수학 == "B" || 수학 == "C") {
  console.log("이 과목을 pass 했습니다.");
} else {
  console.log("이 과목을 pass하지 못했습니다.");
}

console.groupEnd();

// ===============================================
console.group("4번 문제");

let x = 1;
let i = 1;

while (i < 8) {
  x *= i;
  console.log("i=%d,x=%d", i, x);
  i++;
}
console.log("7의 팩토리얼 : " + x);
console.groupEnd();
// ===============================================
console.group("5번 문제");
let a = 1;
let y = 0;

while (a < 10) {
  const x = a * 6;
  y += x;
  console.log("구구단 6단 : 6 x %d = %d", a, x);
  console.log("더한 값  : %d", y);
  a++;
}
console.log("총 합 : %d", y);
console.groupEnd();
// ===============================================
console.group("6번 문제");
let z = 1;
let b = 0;

while (z < 10) {
  const c = z * 8;
  b += c;
  console.log("구구단 8단 : 6 x %d = %d", z, c);
  console.log("더한 값  : %d", b);
  z++;
}

console.log("총 합 : %d", b);
console.groupEnd();

if (b % 2 == 0) {
  console.log("%d 는 짝수입니다.", b);
} else {
  console.log("%d 는 홀수입니다.", b);
}

console.groupEnd();

