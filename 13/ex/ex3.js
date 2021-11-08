/**## 문제3.

아래의 문장에서 "수업시간"이라는 단어가 총 몇 번 등장하는지 카운트 하는 프로그램을 구현하시오.

str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다."
 */

let str =
  "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다.";

const word = "수업시간";
let wordLength = word.length;
let find = true; //무한반복
let count = 0;

while (find) {
  console.log(str);
  p = str.indexOf(word);
  find = p > -1; //word가 없을 경우 리턴되는 -1보다 p가 클경우 -> true가 이 자리에 치환되고 -1일 경우 flase가 치환되어 반복문의 실행이 종료된다.
  if (find) {
    count++;
    str = str.substring(p + wordLength);
  }
}

console.log(count);
