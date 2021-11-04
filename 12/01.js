/**
 * isNaN(value)
 * 파라미터로 전달된 값이 NaN일 경우 true, 그렇지 않을 경우 flase를 반환한다
 * => 숫자가 아니면 true,숫자가 맞다면 flase
 * => 숫자로 변환 가능한 형식일 경우 true
 *
 * JavaScript의 다른 모든 값과 달리, NaN은 같음 연산(==,===)을 사용해 판단할 수 없다.
 * NaN == NaN 이기 때문
 * 그래서 NaN을 판별하는 함수가 필요하다
 */

// 숫자로 변환할 수 없다고 판단하는 경우
console.log(isNaN(NaN)); //참
console.log(isNaN(undefined)); //참
console.log(isNaN({})); //참
console.log(isNaN("blabla")); //참
console.log(isNaN("123ABC")); //참

//숫자로 변환할 수 있다고 판단하는 경우
console.log(isNaN(true)); //참
console.log(isNaN(null)); //참
console.log(isNaN(37)); //참
console.log(isNaN("37")); //참
console.log(isNaN("37.37")); //참
console.log(isNaN("")); //참
console.log(isNaN(" ")); //참
