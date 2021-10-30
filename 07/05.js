"use strict";

const bbs = {
  title: "공지사항",
  count: 4,
  item: [
    { id: 1, subject: "첫번째 게시물 제목" },
    { id: 2, subject: "두번째 게시물 제목" },
    { id: 3, subject: "세번째 게시물 제목" },
    { id: 4, subject: "네번째 게시물 제목" },
  ],
};

console.log("게시판이름:" + bbs.title);
console.log("전체 게시물 수:" + bbs.count);

for (let i = 0; i < bbs.item.length; i++) {
  console.log("[" + bbs.item[i].id + "]" + bbs.item[i].subject);
}
