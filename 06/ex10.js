"use strict";

/** 학생이름 배열 */
let student = ["둘리", "도우너", "또치", "희동"];

/** 성적표 배열 */
let grade = [
  [78, 89, 96],
  [62, 77, 67],
  [54, 90, 80],
  [100, 99, 98],
];

// 총점, 평균점수, 반평균점수를 저장할 변수
let sum = 0,
    avg = 0,
    avgSumAll = 0,
    avgAll = 0;

/** 반평균 구하기 */
// 행 개수만큼 반복
for (let i = 0; i < grade.length; i++) {
  sum = 0;
  // 열 안의 원소 수 만큼 반복
  for (let j = 0; j < grade[i].length; j++) {
    sum += grade[i][j]; //학생별 총합점수
  }
  //학생별 평균점수
  avg = sum / grade[i].length;

  //toFixed() 전에 구하는 총합
  avgSumAll += avg;

  console.log(student[i] + " 총점: " + sum + "점");
  console.log(student[i] + " 평균: " + avg.toFixed(2) + "점");
}
avgAll = avgSumAll / student.length;
avgAll.toFixed(2);

console.log("반평균 = " + avgAll + "점");
