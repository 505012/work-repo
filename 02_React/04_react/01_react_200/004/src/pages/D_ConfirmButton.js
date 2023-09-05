// D_comfirmButton.js : 자식 컴포넌트
// rfce
// todo : 리액트의 조건문 : 2) 3항 연산자를 사용
import React from "react";
import { useState } from "react";

function D_ConfirmButton() {

  // TODO: 변수 정의
  let [isConfirmed, setIsConfirmed] = useState(false);


    // TODO: 함수 정의
    // nfn
    const handleConfirm = () => { 
        // 클릭하면 isConfirmed ( false -> true )
        setIsConfirmed(true);
     }


  return (
    <div>
      {/* d예제 앙래 버튼 클릭하면 문구 ->확안하기 */}
      {/* disavle = false(활성화)  true비활성화*/}
      <button onClick={handleConfirm} disabled={isConfirmed}>
        {/* 3항연산자 사용 */}
        {/* 사용법 : 조건식?true:false */}
        {isConfirmed == true ? "확인됨" : "확인하기"}
      </button>
    </div>
  );
}

export default D_ConfirmButton;
