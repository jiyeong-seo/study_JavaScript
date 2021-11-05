function printStar(max, current=1) {
    // max는 최대 행의 수, current는 현재 행의 수를 의미하므로,
    // 현재 행의 수가 최대 행보다 크다면 처리 중단을 위해 return 함
    if (current > max) {
        return;
    } else {
        /** 한 줄을 출력하기 위한 코드 구성 */
        let star = "";

        // current = 1 --> 0<1 이므로 i는 0 ==> 1회
        // current = 2 --> 0<2 이므로 i는 0, 1 ==> 2회
        // current = 3 --> 0<3 이므로 i는 0, 1, 2 ==> 3회
        // current = n --> 0<n 이므로 i는 0, 1, 2 ... n-1 ==> n-1회
        for (let i=0; i<current; i++) {
            star += "*";
        }

        console.log(star);
        printStar(max, current+1);
    }
}

printStar(5);