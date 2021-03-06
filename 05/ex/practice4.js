"use strict";
/**## 문제 4.

두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하고 경우의 수는 총 몇가지 인지를 아래와 같이 출력하는 코드를 작성하시오.
 */
console.group("4번문제");
let a = 0;

for (let i = 1; i < 7; i++) {
  for (let j = 1; j < 7; j++) {
    if (i + j == 6) {
      console.log("[%d,%d]", i, j);
      a++;
    }
  }
}

console.log("경우의 수는 %d개 입니다.", a);
console.groupEnd();

// 두개의 주사위를 던졌을 떄 나올 수 있는 모든 경우의 수는
// 주사위는 1-6까지의 반복문을 이중으로 겹쳐서 i와 j의 겹침을 찾아라

// 총합을 구할떄는 밖에 변수를 정의하고 그 변수에 총합을 떄려박았음

// 몇가지인지를 구할떄는 밖에 0짜리를 정의해놓고
// 손가락으로 갯수를 셀 시점에 밖에 정의한 변수에 ++를 준다
