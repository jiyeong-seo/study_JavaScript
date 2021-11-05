covid19 = [
    {'0125': 426}, {'0126': 343}, {'0127': 547}, {'0128': 490}, 
    {'0129': 460}, {'0130': 443}, {'0131': 338}, {'0201': 299}
];

let sum = 0;

for (const j of covid19) {
    for (const k in j) {
        console.log(j[k]);
        sum += j[k];
    }
}

console.log("누적 확진자 수: %d", 3346);
console.log("평균 확진자 수: %d", sum / covid19.length);