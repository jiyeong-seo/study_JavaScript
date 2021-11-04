/**
 * setInterval(func, int)
 *
 * interval은 간격을 의미한다
 *
 * 첫번째 인자로 전달된 콜백함수를 두번째 인자로 전달된 시간마다 한 번씩 호출한다.(타이머기능)
 *
 * 타이머를 종료시킬 수 있는 timerid를 반환한다.
 *
 * 이 값을 clearInterval() 함수에 전달하면 타이머가 종료된다.
 *
 * int는 밀리세컨드(1/1000)초를 의미하는 정수
 */

let count1 = 0;

let timerId1 = setInterval(() => {
  count1++;
  console.log("[타이머1] " + count1 + "번째 자동실행");

  if (count1 == 5) {
    console.log("타이머1 종료");
    clearInterval(timerId1);
  }
}, 3000);

console.log("타이머1시작");

let count2 = 0;

let timerId2 = setInterval(() => {
  count2++;
  console.log("[타이머2] " + count2 + "번째 자동실행");

  if (count2 == 10) {
    console.log("타이머2 종료");
    clearInterval(timerId2);
  }
}, 1000);

console.log("타이머2 시작");
