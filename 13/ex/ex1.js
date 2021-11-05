/**## 문제1.

자신의 이메일 주소를 `email` 이라는 변수에 저장하고 `@`를 기준으로 아이디와 도메인 부분을 분리하여 출력하시오. */

/** 이메일 주소 분리할 때 제일 먼저 해야할 것은 @ 를 찾는 것이다.
 * 
 */

let email ="jen.jyseo@gmail.com";
const id = email.substring(0,9);
const domain = email.substring(10);
console.log(id);
console.log(domain);

/**## 문제2.

임의의 주민번호를 다음과 같이 `*`을 포함하여 변수에 저장하시오.

ssn = '020517-1******`

이 값을 사용하여 생년월일, 나이, 성별을 출력하시오. */

/** */

let 주민번호 = "961220-2******";

const birtyear = 주민번호.substring(0,2);
const birthmonth = 주민번호.substring(2,4);
const birthday = 주민번호.substring(4,6);
const age = 26;
let gender = "";
if(주민번호.charAt(7)==2){
    gender = "여자";
}
console.log("19"+birtyear+"년 "+birthmonth+"월 "+birthday+"일에 태어난 "+age+"세 "+gender+" 입니다.");

/**## 문제3.

아래의 문장에서 "수업시간"이라는 단어가 총 몇 번 등장하는지 카운트 하는 프로그램을 구현하시오.

str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다."
 */

