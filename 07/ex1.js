["A", "A", "A", "O", "B", "B", "O", "AB", "AB", "O"];

const result = { A: 0, B: 0, AB: 0, O: 0 };

for (let key in result) {

  if (key == "A" || "O") {
    result[key] = 3;
    console.log(result[key]);
  } else if (key == "B" || "AB") {
    result[key] = 2;
    console.log(result[key]);
  }
}


["A", "A", "A", "O", "B", "B", "O", "AB", "AB", "O"];

const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};


 
  for (let key in result) {
   let add = result[key]
   Object.values(result)[0]
     Object.keys(result)[0] 
    console.log(Object.values(result)[0])
    console.log(Object.keys(result)[0])
    
}


console.log(result);
