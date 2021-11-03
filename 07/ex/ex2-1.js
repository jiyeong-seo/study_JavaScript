/**## 문제2.
다음의 JSON은 어느 학급의 중간고사 성적을 나타낸다.

### 2-1.
위 데이터에서 학생별 총점과 평균을 구하시오.
  */
const exam = {
  철수: [89, 82, 79, 91],
  민영: [91, 95, 94, 89],
  남철: [65, 57, 71, 64],
  혜진: [82, 76, 81, 83],
};

for (let people in exam) {
  let sum = 0;
  for (let p of exam[people]) {
    sum += p;
  }
  let personAvg = parseInt(sum / exam[people].length);
  console.log(
    people + "의 총점은 " + sum + "이고 평균은 " + personAvg + "점 입니다."
  );
}
