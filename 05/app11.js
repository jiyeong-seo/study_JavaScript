"use strict";


for (let i= 0; i<7; i++){
    let str = "";
    
    for(let j=0; j<7-i; j++){
      str += "*";
    }
    
    console.log(str);
  }
      


/** 별찍기 */
/** 
 * i가 0일때 7회를 수행하기 위해서 j<7
 * i가 1일때 6회를 수행하기 위해서 j<6
 * i가 2일때 5회를 수행하기 위해서 j<5
 * i가 3일때 4회를 수행하기 위해서 j<4
 * i가 n일 때 7-i회를 수행하기 위해서 j<7-i
*/