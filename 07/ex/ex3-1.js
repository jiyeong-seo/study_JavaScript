/**## 문제3.
### 3-1.

1월 25일부터 2월 1일까지의 누적 확진자 수와 일 평균 확진자 수를 구하시오.
 */

let covid19 = [
  { "0125": 426 },
  { "0126": 343 },
  { "0127": 547 },
  { "0128": 490 },
  { "0129": 460 },
  { "0130": 443 },
  { "0131": 338 },
  { "0201": 299 },
];

let sum = 0;
let avg = 0;

for (let covid of covid19) {
  for (let people in covid) {
    sum += covid[people];
    avg = sum / covid19.length;
  }
}

console.log("누적 확진자 수: " + sum);
console.log("평균 확진자 수: " + avg);
