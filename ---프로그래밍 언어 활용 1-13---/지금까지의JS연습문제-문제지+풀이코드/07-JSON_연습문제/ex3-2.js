covid19 = [
    {'0125': 426}, {'0126': 343}, {'0127': 547}, {'0128': 490}, 
    {'0129': 460}, {'0130': 443}, {'0131': 338}, {'0201': 299}
];

let max_active = covid19[0]['0125'];
let max_day = '0125';

for (const j of covid19) {
    for (const k in j) {
        if (max_active < j[k]) {
            max_active = j[k];
            max_day = k;
        }
    }
}

console.log("확진자가 가장 많이 나타난 날: %s", max_day);