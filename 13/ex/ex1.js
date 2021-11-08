/**## 문제1.

자신의 이메일 주소를 `email` 이라는 변수에 저장하고 `@`를 기준으로 아이디와 도메인 부분을 분리하여 출력하시오. */

/** 이메일 주소 분리할 때 제일 먼저 해야할 것은 @ 를 찾는 것이다.
 *
 */

let email = "jen.jyseo@gmail.com";
const index = email.indexOf("@");
const id = email.substring(0, index);
const domain = email.substring(index + 1);
console.log(id);
console.log(domain);
