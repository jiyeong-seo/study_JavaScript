/** ### 3-3.

위의 데이터를 확진자 수에 대한 오름차순으로 정렬하시오
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

for (let i = 0; i < covid19.length - 1; i++) {
  let keyListMain = Object.getOwnPropertyNames(covid19[i]);
  let keyFirst = keyListMain[0];
  for (let j = i + 1; j < covid19.length; j++) {
    let keyListSub = Object.getOwnPropertyNames(covid19[j]);
    let key = keyListSub[0];

    if (covid19[i][keyFirst] < covid19[j][key]) {
      let tmp = {};
      Object.assign(tmp, covid19[i]);

      covid19[i] = {};
      Object.assign(covid19[i], covid19[j]);

      covid19[j] = {};
      Object.assign(covid19[j], tmp);
    }
  }
}
console.log(covid19);
 

/** 
 * covid19 = [
    {'0125': 426}, {'0126': 343}, {'0127': 547}, {'0128': 490},
    {'0129': 460}, {'0130': 443}, {'0131': 338}, {'0201': 299}
]
for (let i = 0; i < covid19.length-1; i++) {
    let key_i = null;
    for (const k in covid19[i]) {
        key_i = k;
        break;
    }
    for (let j = i + 1; j <covid19.length; j++) {
        key_j = null;
        for (const l in covid19[j]) {
            key_j = l;
            break;
        }
        if (covid19[i][key_i] < covid19[j][key_j]) {
            const tmp = {};
            Object.assign(tmp, covid19[i]);
            covid19[i] = {};
            Object.assign(covid19[i], covid19[j]);
            covid19[j] = {};
            Object.assign(covid19[j], tmp);
        }
    }
}
console.log(covid19);
*/