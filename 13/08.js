/** 1)배열 탐색하기 */
let arr1 = [1, 0, false];

//arr.indexOf(item,form)은 인덱스 from부터 시작해 item요소를 찾난다.
//요소를 발견하면 해당 요소의 인덱스를 반환한다.
//arr.lastIndexOf(item,form)는 위 메서드와 동일한 기능을 하는데, 검색을 끝에서부터 시작한다.
console.log(arr1.indexOf(0)); //1
console.log(arr1.indexOf(false)); //2
//발견하지 못했으면 -1을 반환한다.
console.log(arr1.indexOf(null)); //-1

//arr.includes(item,form)는 인덱스 from부터 시작해 item이 있는지를 검색하는데, 해당 요소를 발견하면 true를 반환한다.
console.log(arr1.includes(1)); //true
console.log(arr1.includes(100)); //false

//위 메서드들은 요소를 찾을 때 완전 항등 연산자 ===을 사용한다는 점에 유의해야 한다.
//false를 검색하면 정확히 false만을 검색하지, 0을 검색하지 않는다
//요소의 위치를 정확히 알고싶은게 아니고 요소가 배열 내 존재하는지 여부만 확인하고(t/f) 싶다면 arr.includes를 사용하는게 좋다.(indexOf()와 조건문으로 만약 -1이라면 요소가 없는 것, -1이 아니라면 있는것 으로도 확인 가능하다.)
//includes는 NaN도 제대로 처리한다는 점에서 indesOf/lastIndexOf와 약간의 차이가 있다.
const arr2 = [NaN];
console.log(arr2.indexOf(NaN)); //-1 (완전 항등 비교 === 는 NaN엔 동작하지 않으므로 0이 출력되지 않는다.)
console.log(arr2.includes(NaN)); // true(NaN의 여부를 확인한다.)

/**배열 검색 */
const arr3 = [5, 12, 8, 131, 44];
//주어진 판별함수를 만족하는 첫번째 값을 반환한다.못찾으면 undefined를 반환한다.
//찾고자 하는 항목이 아닌 검색 규칙을 구현한 콜백함수를 전달해야 한다.
const found = arr3.find(function (v) {
  //파라미터로 전달되는 v는 배열의 모든 원소가 순차적으로 전달된다.
  //console.log(v);

  //v를 우리가 원하는 조건에 충족하는지 검사하여 true/false를 리턴
  if (v % 2 == 0) {
    //true가 리턴되는 경우 v는 found에 저장된다
    return true;
  } else {
    //false가 리턴되는 경우 v는 버려진다.
    return false;
  }
});

console.log(found);

/** 배열 전체 검색 */
/**
 * ### filter(콜백)
- find(콜백(원소,인덱스,배열))과 차이는 값 뿐만 아니라 인덱스와 배열까지 출력되어 판단할 수 있다는 점이 더 많아진다는 점이다
 */
const arr4 = [5, 12, 8, 131, 44];
const results = arr4.filter(function (v, i, arr) {
  //배열의 각 원소
  //console.log(v);
  //파라미터로 전달된 v에 대한 배열의 인덱스
  //console.log(i);
  //배열 원본
  //console.log(arr);

  if (v % 2 == 0) {
    //true가 리턴되는 경우 v는 results 배열의 원소로 저장된다.
    return true;
  } else {
    //false 가 리턴되는 경우 v는 버려진다
    return false;
  }
});

console.log(results);

/** 배열 정렬 */
const arr5 = [2, 1, 15];
//퀵정렬 알고리즘을 사용하여 배열 자체를 정렬한다.
//-->배열의 모든 원소를 문자열로 취급하기 때문에 글자 정렬기준이 적용된다.
arr5.sort();
console.log(arr5);

//sort 함수도 정렬 조건을 콜백함수로 처리한다.
arr5.sort(function (a, b) {
  //정렬을 위해 비교되는 원소값들이 파라미터로 전달된다.
  //console.log(a);
  //console.log(b);

  //리턴값이 양수인 경우 : a가 b보다 크다
  //리턴값이 음수인 경우 : b가 a보다 크다
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});

console.log(arr5);

/** 역순배치 */
let arr6 = [1, 2, 3, 4, 5];
arr6.reverse();
console.log(arr6);
