function myGame(n) {

    let count = 0;
    for (let i=1; i<=n; i++) {

        // 현재 숫자를 문자열로 변환함
        // --> 문자열은 그 자체가 배열이므로 각 자리의 숫자를 의미하는 글자를 원소로 갖는 배열이 된다고 볼 수 있다.
        const str = i + ""; // --> 36 + "" --> "36" --> ["3", "6"]

        // 각 글자마다 3, 6, 9가 몇 번 등장하는지 체크하여 빈 문자열에 "짝"을 덧붙임
        let say = "";
        let clap = 0;
        
        // ["3", "6"] --> t는 "3", "6"이 순차적으로 대입됨.
        for (let t of str) {
            if (t == "3" || t == "6" || t == "9") {
                say += "짝";
                clap++;
            }
        }

        // 덧붙여진 글자가 없다면?
        if (clap == 0) {
            say = i;
        } else {
            say += "(" + i + ") --> " + clap + "번";
            count += clap;
        }

        console.log(say);
    }

    console.log();
    console.log("박수를 총 %d번 쳤습니다.", count);

}

myGame(100);