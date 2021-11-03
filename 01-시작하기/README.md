# 01-시작하기

## #01. 웹 사이트 관련 직군 / 언어 분류

![img1](필기1.PNG)

## #03. Hello Javascript

첫 번째 Javascript program

### JS가 HTML안에 존재하는 경우.

원래 JS는 HTML에 기생하는 존재.

- [simple.html](simple.html)

.

### JS코드와 HTML을 분리

하나의 파일에 HTML + CSS + JS가 혼합되면서 코드가 복잡해지고 길어진다.

CSS와 JS를 별도의 파일로 분리하는 것이 바람직.

#### 확장자가 `*.js`인 파일이 순수 JS코드만 작성
- [HelloWorld.js](HelloWorld.js)

#### JS파일을 참조하는 HTML
- [HelloWorld.html](HelloWorld.html)


### JS 파일 직접 실행

#### 명령프롬프트(win)를 통한 실행

- `WinKey+R` -> cmd `(엔터)` 로 명령프롬프트 실행
- 소스파일이 존재하는 폴더로 이동 `cd 폴더경로`
    - 폴더 위치가 C드라이브가 아닌 경우 `/d` 옵션 적용 -> `cd [/d] 폴더경로`
- `node 파일이름` 명령으로 코드 실행

![img2](res/002.PNG)

#### VSCode를 통한 실행

- `Code Runner` 확장 익스텐션 설치

![img2](res/003.PNG)

- 코드 창에서 `Ctrl + Alt + N` 으로 실행
- 원하는 부분만 드래그 후 부분 실행 가능함.

##### 실행시 이전 출력 내용 삭제 설정

![img2](res/004.PNG)