/** 동기 방식으로 실행되는 예외처리 */
const data = [1, 2, 3];

//try~catch는 동기 방식으로 동작하므로 비동기 방식으로 동작하는 timer처리와 ajax에는 대응하지 못한다.
//콜백함수 안에서 별도로 try,catch를 지정해야 한다.
try {
  setTimeout(function () {
    //------ 이 부분만 별도의 구역에서 실행되므로 에러가 발생하더라도 try의 영향을 받지 않는다.
    console.log("배열탐색시작");
    for (let i = 0; i < 10; i++) {
      console.log(data[i]).toFixed(2);
    }
    //에러가 발생하여 프로그램이 중단되므로 이 메세지는 표시되지 않는다.
    console.log("배열탐색종료");
  }, 1000);
} catch (err) {
  //setTimeout()과 같은 비동기 함수는 처리하지 못하기 때문에 이 블록은 실행되지 않는다.
  console.log("에러발생(2)");
  console.error(err);
}
