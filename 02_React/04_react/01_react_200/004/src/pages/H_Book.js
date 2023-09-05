// H_Book.js 연습
// rfce
import React from "react";
import { useState } from "react";
// todo : 연습문제 반복문 완성하기 (ul - li(반복), 부트스트랩)
// todo : 사용법 배열변수.map((value, index)=>{return (태그)})
function H_Book() {
  // TODO : 변수 정의
  const students = [
    {
      id: 1,
      name: "Inje",
    },
    {
      id: 2,
      name: "Steve",
    },
    {
      id: 3,
      name: "Bill",
    },
    {
      id: 4,
      name: "Jeff",
    },
  ];
  return (
    <div>
      <ul class="list-group ">
        {/* 반복문 : 여기서 돌리면 됨 */}
        {students.map((student, index) => {
          return (<li  class="list-group-item list-group-item-action list-group-item-primary" key={index}>{student.name}</li>);
        })}
      </ul>
    </div>
  );
}

export default H_Book;
