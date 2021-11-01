"use strict";

/** 학생이름 배열 */
let student = ["둘리", "도우너", "또치", "희동"];

/** 성적표 배열 */
let grade = [
  [78, 89, 96],
  [62, 77, 67],
  [54, 90, 98],
  [100, 99, 98],
];

// 총점과 평균점수를 저장할 변수
let sum = 0,
  avg = 0;

"use strict";

  /** 총점과 평균 구하기 */
// 행 개수만큼 반복
for (let i = 0; i < grade.length; i++) {
  // student.length가 되어도 된다(행 개수와 열개수가 동일하기때문)

  // sum =0; -> for문 밖에서 총점은 전체이고 안에서 하면 개별인데
  // 밖에서 0으로 선언을 해놨는데 한번 더 재선언 한 것이 아니라 기존 변수에 다른 값을 재할당한 것이다. -> 반복문이 반복될 떄 마다 기존 변수에 새 값이 할당된다.
  sum = 0;
  // 열 안의 원소 수 만큼 반복
  for (let j = 0; j < grade[i].length; j++) {
    sum += grade[i][j];
  }
  avg = sum / grade[i].length;

  console.log(student[i] + " 총점: " + sum+ "점");
  console.log(student[i] + " 평균: " + avg.toFixed(2)+"점");
}
