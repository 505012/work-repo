// C_Exam.js : 자식 컴포넌트(연습문제)
// rfce
import React, { useEffect } from "react";

// todo : 데이터 전달받아 아래와 같이 콘솔에 출력되었습니다.
// 결과 : "Form App"
//      "useEffect"
function C_Exam(props) {
  // todo : 생명 주기 함수 (생성)
  // todo : 화면이 뜰때 자동 실행됨
  useEffect(() => {
    console.log(props.prop_value);
    console.log("useEffect");
  }, []);
  return <div></div>;
}
export default C_Exam;
