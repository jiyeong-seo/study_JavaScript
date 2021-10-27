"use strict";

for (let i= 0; i<7; i++){
    let str = "";
    
    for(let j=0; j<i+1; j++){
      str += "*";
    }
    
    console.log(str);
  }
      
/**
 * j=0;
 * i가 0일때 1회를 수행하기 위해서 j<1
 * i가 1일때 2회를 수행하기 위해서 j<2
 * i가 n회일때 i+1회를 수행하기 위해서 j<1+1
 * 
 * j = n
 * 
 */