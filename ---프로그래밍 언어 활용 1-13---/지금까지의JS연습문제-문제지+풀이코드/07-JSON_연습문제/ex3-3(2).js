covid19 = [{ '0125': 426 }, { '0126': 343 }, { '0127': 547 }, { '0128': 490 }, { '0129': 460 }, { '0130': 443 }, { '0131': 338 }, { '0201': 299 }];

for (let i = 0; i < covid19.length - 1; i++) {
    const tmp_key_list = Object.getOwnPropertyNames(covid19[i]);
    let key_i = tmp_key_list[0];

    for (let j = i + 1; j < covid19.length; j++) {
        const tmp_key_list_sub = Object.getOwnPropertyNames(covid19[j]);
        let key_j = tmp_key_list_sub[0];

        if (covid19[i][key_i] < covid19[j][key_j]) {
            const tmp = {};
            Object.assign(tmp, covid19[i]);

            covid19[i] = {};
            Object.assign(covid19[i], covid19[j]);

            covid19[j] = {};
            Object.assign(covid19[j], tmp);
        }
    }
}

console.log(covid19);