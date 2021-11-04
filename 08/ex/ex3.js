/**## 문제3

369게임은 숫자를 순서대로 말하면서 3,6,9가 포함된 횟수만큼 박수를 치는 게임이다.

1부터 파라미터로 전달된 숫자까지 반복하면서 박수를 칠 조건이 충족되면 3,6,9 게임 규칙에 따라 박수를 의미하는 "짝"을 출력하고 그렇지 않은 경우에는 숫자를 출력하고, 박수를 총 몇번 쳤는지를 리턴하는 함수 `myGame(n)`을 작성하시오.*/

function myGame(n) {
  let sum = 0;
  for (let i = 1; i <=n; i++) {
    if (i % 3 == 0) {
      console.log("짝(" + i + ")");
      sum += 1;
    } else {
      console.log(i);
    }
  }
  console.log("박수를 총 " + sum + "번 쳤습니다.");
}

myGame(30);