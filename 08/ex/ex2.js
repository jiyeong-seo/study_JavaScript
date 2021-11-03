//## 문제2.

//1번 문제를 응용하여 같은 파라미터를 받았을 때 별을 역으로 출력하는 ////`printRevStar(max, current=1)` 을 구현하시오.

function printStar(최대행의수, 현재행의수 = 1) {
  if (현재행의수 > 최대행의수) {
    return;
  } else {
    let star = "";
    for (i = 0; i < 최대행의수 - 현재행의수 + 1; i++) {
      star += "*";
    }
    console.log(star);
    printStar(최대행의수, 현재행의수 + 1);
  }
}

printStar(5);

//커런트는 행에대한 명시이므로 역순출력도 이전 예제와 같은 조건을 가진다
//단지 한 줄(열)을 출력할때의 조건이 바뀌는 것이다.
//max에서 current를 빼면 4가 되기때문에 조건을 맞추기 위해 +1을 해준다
