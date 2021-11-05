covid19 = [{ '0125': 426 }, { '0126': 343 }, { '0127': 547 }, { '0128': 490 }, { '0129': 460 }, { '0130': 443 }, { '0131': 338 }, { '0201': 299 }];

// 방법(1)
for (let i = 0; i < covid19.length - 1; i++) {
    // i번째 json의 key를 저장하기 위한 변수
    let key_i = null;
    //console.log(covid19[i]);

    // i번째 json의 key를 대상으로 반복 처리
    for (const k in covid19[i]) {
        // 첫 번째 key를 key_i에 복사.
        key_i = k;
        // 반복중단. -> 예시 데이터는 각 json이 하나의 원소만을 갖기 때문에,
        // 이 구문은 의미 없지만, 만약 json이 두 개 이상의 원소를 갖는다면
        // 이 구문으로 인해 key_i에는 첫 번째 key가 저장된다.
        break;
    }

    //console.group(key_i);

    for (let j = i + 1; j < covid19.length; j++) {
        // 같은 방법으로 j번째 json의 key 추출
        let key_j = null;

        for (const l in covid19[j]) {
            key_j = l;
            break;
        }

        // console.log(key_j);

        if (covid19[i][key_i] < covid19[j][key_j]) {
            const tmp = {};
            Object.assign(tmp, covid19[i]);

            covid19[i] = {};
            Object.assign(covid19[i], covid19[j]);

            covid19[j] = {};
            Object.assign(covid19[j], tmp);
        }
    }

    //console.groupEnd();
}

console.log(covid19);