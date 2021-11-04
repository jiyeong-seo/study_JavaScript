/**## 문제2.

가로(`width`), 세로(`height`)정보를 getter, setter로 관리하는 Rectangle 클래스를 정의하시오.

이 클래스는 생성자의 파라미터가 없으며 둘레의 길이를 구해 리턴하는 getAround() 메서드와 넓이를 구해 리턴하는 gerArea() 메서드를 제공합니다.

클래스는 JSON 형식으로 작성되어야 합니다. */

function Rectangle() {
  this._width = null;
  this._height = null;
}

Rectangle.prototype = {
  get width() {
    return this._width;
  },
  set width(param) {
    this._width = param;
  },
  get height() {
    return this._height;
  },
  set height(param) {
    this._height = param;
  },
  getAround() {
    return this.width * 2 + this.height * 2;
  },
  getArea() {
    return this.width * this.height;
  },
};

const rect = new Rectangle();
rect.width = 10;
rect.height = 10;
console.log("둘레의 길이는 %d이고 넓이는 %d입니다.",rect.getAround(),rect.getArea());
