"use strict";

/** 학생이름 배열 */
let student =['둘리','도우너','또치','희동'];

/** 성적표 배열 */
let grade = [
  [78,89,96],
  [62,77,67],
  [54,90,98],
  [100,99,98]
];

// 총점과 평균점수를 저장할 변수
let sum =0 , avg =0;

/** 총점과 평균 구하기 */
// 행 안의 열 반복
for(let i=0; i<grade.length; i++){ // student.length가 되어도 된다
  
  //학생 한명을 의미하는 부모 반복문 안에서 변수를 초기화 하면 학생 개인별 총점
// sum =0; -> for문 밖에서 총점은 전체이고 안에서 하면 개별인데
// 밖에서 0으로 선언을 해놨는데 한번 더 한건 재선언 한 것이 아니라 기존 변수에 다른 값을 재입력(대입?)한 것이다.
    // 열 안의 원소 반복
 for(let j=0; j<grade[i].length;j++){
   sum += grade[i][j];
 } 
  
  avg = sum/(grade[i].length);
  
   console.log(student[i]+" 평균: "+avg.toFixed(2));

  console.log(student[i]+" 총점: "+sum);
}
