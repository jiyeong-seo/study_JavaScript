"use strict";
/**## 문제 6.

아래와 같은 출력 결과가 나타나도록 중첩 반복문을 for 문 형식으로 구현하시오.
1
12
123
1234
12345
123456
1234567 */

for (let i = 0; i < 7; i++) {
  let count = "";
  for (let j = 0; j < i + 1; j++) {
    count += j + 1;
  }
  console.log(count);
}
