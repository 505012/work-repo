// D_Exam2.js
// rfce

// todo : 아래 생명주기 함수 2개를 만들어서 출력하세요
// 화면이 뜰때 아래의 결과가 콘솔에 출력됨
// 결과 : mount call

// todo : tmpState2라는 변수의 값이 변경되면 콘솔에 출력됨
// 결과 : : false
import React, { useEffect, useState } from "react";

function D_Exam2() {
  let [element, setElement] = useState("true");
  //   todo 1) 생명 주기 함수(생성) : 출력 : mount call
  //   todo 화면이 뜰때 자동 실행
  //     useEffect(() => {실행문}, []);
  useEffect(() => {
    console.log("mount call");
  }, []);
  //   todo 2)생명 주기 함수(수정) : element :  true -> false( 콘솔에 출력)
  //     useEffect(() => {실행문}, [감시할 변수명]);
  useEffect(() => {
    console.log(element);
  }, [element]);

  //   todo 클릭 이벤트 함수 정의
  const handleClick = () => {
    // 수정함수 : setter 함수 호출 : 값 변경 : true -> false
    setElement("false");
  };
  return (
    <div>
      <h2>[ THIS IS shouldComponentUpdate FUCNTION ]</h2>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}

export default D_Exam2;
