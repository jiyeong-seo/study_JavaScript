function printRevStar(max, current=1) {
    // 종료조건은 행에 대한 명시이므로 역순 출력도 이전 예제와 같은 조건을 갖는다.
    if (current > max) {
        return;
    } else {
        let star = "";

        // current = 1 --> 0<5 이므로 i는 0,1,2,3,4 ==> 5회
        // current = 2 --> 0<4 이므로 i는 0,1,2,3 ==> 4회
        // current = 3 --> 0<3 이므로 i는 0,1,2 ==> 3회
        for (let i=0; i<max-current+1; i++) {
            star += "*";
        }

        console.log(star);
        printRevStar(max, current+1);
    }
}

printRevStar(5);