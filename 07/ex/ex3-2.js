/**
### 3-2

1월 25일부터 2월 1일까지 중에서 확진자가 가장 많이 나타난 날짜는 언제인가? */
/**
### 3-2

1월 25일부터 2월 1일까지 중에서 확진자가 가장 많이 나타난 날짜는 언제인가? */
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

//비교를 위해 배열의 첫번째 원소인 객체의 값을 대입
let people = covid19[0]["0125"];
let maxDate = "0125";

for (let covid of covid19) {
  for (let date in covid) {
    if (covid[date] > people) {
      people = covid[date];
      maxDate = date;
      console.log("확진자가 가장 많이 나타난 날: " + maxDate);
    }
  }
}
