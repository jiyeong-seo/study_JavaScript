/** class 연습문제
 * 문제1.
 * 
 * 국어, 영어, 수학 점수를 생성자 파라미터로 입력받아서 합계와 평균을 구하는 클래스 Student를 작성하시오.

이 때 Stuent 클래스는 합계를 리턴하는 메서드인 `sum()`과 평균을 리턴하는 `avg()`를 제공합니다.

작성된 클래스를 활용하여 아래 표에 대한 학생별 합계 점수와 평균점수를 출력하시오.

| 이름 | 국어 | 영어 | 수학 |
|---|---|---|---|
| 철수 | 92 | 81 | 77 |
| 영희 | 72 | 95 | 98 |
| 민혁 | 80 | 86 | 84 |
 */

class Student {
  constructor(kor, eng, math) {
    this._kor = kor;
    this._eng = eng;
    this._math = math;
  }

  sum() {
    return this._kor + this._eng + this._math;
  }
  avg() {
    return this.sum() / 3;
  }
}

console.group("반복문 안에서 객체 활용");
const grade = [
  ["철수", 92, 81, 76],
  ["영희", 72, 95, 84],
  ["민혁", 80, 86, 98],
];

for (let i of grade) {
  const sumGrade = new Student(i[1], i[2], i[3]);
  console.log(
    "%s의 총점은 %d점 이고 평균은 %d점 입니다.",
    i[0],
    sumGrade.sum(),
    sumGrade.avg()
  );
}
console.groupEnd();
