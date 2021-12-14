// 브라우저에 데이터 출력 함수
// 선언 후 호출!
function upbitShow(data) {
  const upbitMarket = document.querySelector("#upbitMarket");
  // forEach에 직관적인 매개변수명을 설정한다
  // const {market , korean_name , english_name} = forEach로 현재 순환하는 원소인 객체를 비구조할당 한 것 코드 31과 동일하다
  // 객체는 순서가 없으니까 순서는 상관 없이 할당할 수 있다
  data.forEach(({ market, korean_name, english_name }) => {
    // 업비트에서 제공중인 시장 정보
    const marketLi = document.createElement("li");
    marketLi.innerHTML = market;
    upbitMarket.appendChild(marketLi);
    // 거래 대상 암호화폐 한글명

    const koreanNameLi = document.createElement("li");
    koreanNameLi.innerHTML = korean_name;
    upbitKoreanName.appendChild(koreanNameLi);
    
    // 거래 대상 암호화폐 영문명
    const englishNameLi = document.createElement("li");
    englishNameLi.innerHTML = english_name;
    upbitEnglishName.appendChild(englishNameLi);
  });
}

// 업비트 API로 데이터를 요청,응답
function upbitApi() {
  const xhr = new XMLHttpRequest();
  const method = "GET";
  const url = "https://api.upbit.com/v1/market/all?isDetails=false";

  xhr.onreadystatechange = (e) => {
    const { target } = e;

    if (target.readyState === XMLHttpRequest.DONE) {
      if (target.status === 200) {
        const res = JSON.parse(target.response);
        // 응답받아 parse로 파싱해서 JSON형태로 리턴시킨 값 대입 -> data
        // 응답받은 데이터를 전역변수에 저장
      } else {
        const status = parseInt(target.status / 100);
        let error = null;
        if (status === 4) {
          error = `[${target.status}] ${target.statusText}요청주소가 잘못되었습니다.`;
        } else if (status === 5) {
          error = `[${target.status}] ${target.statusText}서버의 응답이 없습니다.`;
        } else {
          error = `[${target.status}] ${target.statusText}요청에 실패했습니다. `;
        }
        alert(error);
      }
    }
  };
  xhr.open(method, url);
  xhr.send();
}
upbitShow(res);
upbitApi();
