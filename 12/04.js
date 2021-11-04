/**
 * encodeURI(string)
 *
 * 주어진 문자열을 URL에 포함시키기에 적절한 형태로 변환(=인코딩) 처리 해주는 내장함수
 * encodeURI() 로 인코딩 하지 않는 문자
 * A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #
 */

let set1 = ";,/?:@&=+$#"; //예약문자
let set2 = "-_.!~*'()"; //비예약문자
let set3 = "ABC abc 123"; //알파벳 및 숫자,공백
let set4 = "자바스크립트";

console.log(encodeURI(set1));
console.log(encodeURI(set2));
console.log(encodeURI(set3));
console.log(encodeURI(set4));
