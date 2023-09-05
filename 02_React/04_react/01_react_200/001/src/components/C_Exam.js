// C_Exam.js :  자식 컴포넌트
// todo : 연습문제
// todo : 클릭시 아래 결과대로 코딩하세요
// todo : 최초화면 : "안녕하세요"
// todo : 결과 : " 안녕"

import React, { useState } from "react";

function C_Exam() {
  // todo : 바인딩 변수
  let [element, setElement] = useState("안녕하세요");
  // todo : myClick()
  //   nfn
  //   수정 함수 : 안녕
  let myClick = () => {
    setElement("안녕");
  };
  return (
    <div>
      {element}
      <br />
      <button onClick={myClick}>문자열 변경</button>
    </div>
  );
}

export default C_Exam;
