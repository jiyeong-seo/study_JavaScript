/** 익명함수 */
const say = function(msg){
    console.log("sayHello("+msg+")");
    //익명함수는 전체적인 정의가 대입문이므로 블록을 구성하는 중괄호 뒤에 ;이 위치해야 한다.
};
// 함수가 대입된 변수는 그 자체가 함수의 역할을 한다.
say("Hello JavaScrpt");