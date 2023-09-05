// A_Accommodate_Exam.js 자식(연습)
// rfce
import React from "react";
import { useState } from "react";

function A_Accommodate_Exam() {
  // todo 변수정의
  let [flag, setFlag] = useState(false);
  // todo 함수 정의
  const yellowClick = () => {
    if (flag == false) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };
  return (
    <div>
      <button onClick={yellowClick} className="btn btn-warning">
        노란 버튼
      </button>
      <br />
      {flag && <button className="btn btn-primary">파란 버튼</button>}
    </div>
  );
}

export default A_Accommodate_Exam;
