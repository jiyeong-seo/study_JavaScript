/** 멤버변수와 메서드를 갖는 클래스 */
class HelloWorld {
    /** 생성자 함수 */
    constructor(){
        //생성자의 역할은 멤버변수를 정의
        // -> 선언만 하고 추후 할당을 하기 위해 null로 초기화 한다.
        this.message =null;
    }
    sayHello(){
        console.log(this.message);
    }
    sayEng(){
        this.message = "Hello JavaScript";

    }
    setKor(){
        this.message ="안녕하세요. 자바스크립트."
    }
}
const hello = new HelloWorld();

hello.sayEng();
hello.sayHello();
hello.setKor();
hello.sayHello();