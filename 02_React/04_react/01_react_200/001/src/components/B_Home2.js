// B_Home2.js : 자식
// rfce

// todo : 화면 바인딩
import React, { useState } from "react";

function B_Home2() {
  // todo : 변수를 정의하는 곳 : 여기
  // 최초 1번만 정상적으로 화면에 표시
  // 수정 -> 화면에 수정된 값이 보이지 않음
  let hello = "안녕하세요"; //일반변수

  // 리액트에서 화면에 수정이 일어났을때 정상적으로 보이게 만들어 주는 변수
  // 바인딩 변수 :  let [변수명, 수정함수] = useState("초기값")
  let [element, setElement] = useState("안녕");

  // todo : 함수정의 : 여기
  // nfn
  // 화면에 바인딩 없음 : 수정해서 화면에 나타나지 않음
  const myClick = () => {
    hello = "안녕하세요2";
  };
  // nfn
  // todo : 화면 바인딩 있음 : 수정하면 화면에 나타남
  const myClick2 = () => {
    // 리액트의 수정함수
    setElement("안녕하세요2");
  };
  return (
    // todo : 웹브라우저 화면에 나오는 곳 : 여기
    <div>
      {hello}
      <button onClick={myClick}>클릭해보세요</button>
      <br />
      {element}
      <button onClick={myClick2}>클릭해보세요2</button>
      <br />
    </div>
  );
}

export default B_Home2;
