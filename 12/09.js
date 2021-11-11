/** 선생님은 09라고 적으심(실수로 그러신듯?)
 *
 * setTimeout(func,int)
 *
 * 첫번째 인자로 입력된 콜백함수를 두번째 인자로 입력된 시간 후에 실행하도록 예약한다.(딜레이 기능)
 *
 * 두번째 인자로 입력된 int는 밀리세컨드(1/1000)초를 의미하는 정수
 */

function foo() {
  for (let i = 1; i < 10; i++) {
    console.log("2 x " + i + " = " + i * 2);
  }
}

setTimeout(foo, 3000);
console.log("구구단을 외자!");

//일반적으로 콜백함수를 별도로 정의하지 않고 즉시 전달한다.
//setTimeout(function(){},int);

setTimeout(() => {
  for (let i = 1; i < 10; i++) {
    console.log("3 x " + i + " = " + i * 3);
  }
}, 1500);
console.log("프로그램 종료~!!!");
