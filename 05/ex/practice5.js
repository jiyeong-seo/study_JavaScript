"use strict";
/**## 문제 5.

for문을 중첩하여 실행하여 아래와 같은 출력 결과를 만드시오. */

for (let i = 0; i < 4; i++) {
  let x = "";
  for (let j = 0; j < 4; j++) {
    x += j + i;
  }
  console.log(x);
}
