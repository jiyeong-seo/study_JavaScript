/**## 문제1.

아래의 형태로 출력하는 재귀함수를 구현하시오.

/// max는 출력해야 할 최대 행의 수 , current는 현재 행의 수를 의미한다.
// 현재 행의 수가 최대 행보다 크다면 처리 중단을 위해 return한다.
printStar(5) */

function printStar(최대행의수, 현재행의수 = 1) {
  if (현재행의수 > 최대행의수) {
    return;
  } else {
    let star = "";
    for (i = 0; i < 현재행의수; i++) {
      star += "*";
    }
    console.log(star);
    printStar(최대행의수, 현재행의수 + 1);
  }
}

printStar(5);
