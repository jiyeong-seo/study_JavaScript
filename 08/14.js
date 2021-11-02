/** 파라미터가 하나만 존재할 경우 소괄호 생략 */
//파라미터가 없거나, 두 개 이상이면 괄호 생략 불가.
const foo = (x) => {
  for (let i = 0; i < x; i++) {
    console.log("Hello World");
  }
};

foo(3);
