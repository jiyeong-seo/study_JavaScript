const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
};

let sum = 0;
for(let i =0;i<4;i++){

console.log(Object.keys(exam)[i])
  console.log(sum)
  for(let j=0;j<4;j++){ 
      sum += exam[Object.keys(exam)[i]][i]
   
}
 console.log(exam[Object.keys(exam)[i]][i])
};
