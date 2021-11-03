"use strict";

let number = 2;

if (number == 1) {
  for (let i = 3; i < 10; i = i + 2) {
    for (let j = 1; j < 10; j++) {
      console.log("%d x %d = %d", i, j, i * j);
    }
  }
} else if (number == 2) {
  for (let i = 2; i < 10; i = i + 2) {
    for (let j = 1; j < 10; j++) {
      console.log("%d x %d = %d", i, j, i * j);
    }
  }
}
