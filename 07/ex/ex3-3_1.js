covid19 = [
  { "0125": 426 },
  { "0126": 343 },
  { "0127": 547 },
  { "0128": 490 },
  { "0129": 460 },
  { "0130": 443 },
  { "0131": 338 },
  { "0201": 299 },
];
for (let i = 0; i < covid19.length - 1; i++) {
  let key_i = null;
  for (const k in covid19[i]) {
    key_i = k;
    break;
  }
  for (let j = i + 1; j < covid19.length; j++) {
    key_j = null;
    for (const l in covid19[j]) {
      key_j = l;
      break;
    }
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
