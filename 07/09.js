const d1 = [1, 2, 3];
const d2 = d1;
console.log(d1);
console.log(d2);

d1[0] += 10;
d1[1] += 10;
d1[2] += 10;

console.log(d1);
console.log(d2);

/**배열끼리의 값복사 방법(=깊은 복사)*/
const a1 = [1, 2, 3];

//원본과 동일한 길이를 갖는 배열을 생성
const a2 = new Array(a1.length);

//배열을 온전히 값복사 하기 위해서는 원소끼리 개별복사 해야 한다
for (let i = 0; i < a1.length; i++) {
  a2[i] = a1[i];
}
//배열객체가 갖는 메서드를 활용한 깊은 복사 방법
const a3 = a1.slice();
console.log(a1);
console.log(a2);
console.log(a3);

a1[0] += 100;

//참조가 아닌 복제되어 값이 동일하게 변경되지 않는다
console.log(a1);
console.log(a2);
console.log(a3);

/** JSON의 깊은 복사 */
const addr = {
  city: "서울",
  gu: "서초",
};
//깊은 복사를 수행할 빈 JSON객체를 생성
const copy = {};
for (let key in addr) {
  //copy.city와 copy.gu와 동일한 처리
  copy[key] = addr[key];
}

console.log(addr);
console.log(copy);

addr.gu = "강남";

console.log(addr);
console.log(copy);

//JS가 제공하는 기능 활용하기
const copy2 = {};

//addr을 copy2에 깊은 복사 수행하는 js내장메소드
Object.assign(copy2, addr);
console.log(copy2);
