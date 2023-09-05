// F_ConfirmButton_Exam2.js 자식(연습)
// rfce
import React from "react";
import { useState } from "react";

function F_ConfirmButton_Exam2() {
  // todo 변수
  let [count, setCount] = useState(9);
  // todo 함수
  const handleConfirm = () => {
    let tmpVal = count + 1; 
        setCount(tmpVal)

  };
  return (
    <div>
      현재 정원 : {count}
      <br />
      <button onClick={handleConfirm} disabled={(count>10)?true:false}>
       { (count>10)?<p style={{ color: "red" }}>정원이 가득찼습니다.</p>:<p style={{ color: "blue" }}>입장할 수 있습니다.</p>}
      </button>
    </div>
  );
}

export default F_ConfirmButton_Exam2;
