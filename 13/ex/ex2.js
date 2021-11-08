/**## 문제2.

임의의 주민번호를 다음과 같이 `*`을 포함하여 변수에 저장하시오.

ssn = '020517-1******`

이 값을 사용하여 생년월일, 나이, 성별을 출력하시오. */

/** */

let 주민번호 = "961220-2******";

let birthyear = 주민번호.substring(0, 2);
const birthmonth = 주민번호.substring(2, 4);
const birthday = 주민번호.substring(4, 6);
const gender = 주민번호.substring(7, 8);

if (gender < 3) {
  birthyear = 19 + birthyear;
} else {
  birthyear = 20 + birthyear;
}
let age = 2021 - birthyear + 1;
let sex = gender % 2 == 0 ? "여자" : "남자";

console.log(
  birthyear +
    "년 " +
    birthmonth +
    "월 " +
    birthday +
    "일에 태어난 " +
    age +
    "세 " +
    sex +
    " 입니다."
);

//문제2번 선생님 풀이
ssn = "020517-3******";
now_year = 2021;

let yy = parseInt(ssn.substring(0, 2));
const mm = parseInt(ssn.substring(2, 4));
const dd = parseInt(ssn.substring(4, 6));
const gen = parseInt(ssn.substring(7, 8));

yy = gen > 2 ? yy + 2000 : yy + 1900;
let age2 = now_year - yy + 1;
let sex2 = gen % 2  ? "남자" : "여자"; //gen%2 가 0이라면 false이고 1부터는 true이다

console.log("%d년 %d월 %d일에 태어난 %d세 %s입니다.", yy, mm, dd, age2, sex2);
