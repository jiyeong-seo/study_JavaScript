"use strict"; //엄격모드 적용

console.group("group1");
console.log("안녕하세요. JavaScript1");
console.log("안녕하세요. JavaScript2");
console.log("안녕하세요. JavaScript3");
console.groupEnd();

console.group("group2");
console.log("안녕하세요. Javascript4");
console.group("group2-1");
console.log("안녕하세요. Javascript5");
console.log("안녕하세요. Javascript6");
console.groupEnd();
console.groupEnd();