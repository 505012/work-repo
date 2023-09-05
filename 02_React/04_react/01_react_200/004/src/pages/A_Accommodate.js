// A_Accommodate.js
// rfce

// todo : 이랙트의 조건문 : 1) 논리연산자(&&) 2)3항연산자
import React from "react";
import "../assets/styles.css";
import { useState } from "react";
function A_Accommodate() {
  // todo 변수/함수 정의
  // 사용법 :  let[변수명,set변수명] = useState(초기값)
  let [isFull, setIsFull] = useState(false);
  // 카운트 변수
  let [count, setCount] = useState(0);

  // todo : 함수 정의 nfn
  const increaseCount = () => {
    // count변수 1씩 증가시키기
    let tmpVal = count + 1;
    // cout setter 함수 넣기
    if (tmpVal >= 24) {
        tmpVal = 24;
      full();
    }
    setCount(tmpVal);
  };

  const decreaseCount = () => {
    if (count > 0) {
      let tmpVal = count - 1;
      setCount(tmpVal);
      if (tmpVal < 24) {
        noFull();
      }
    }
  };

  const full = () => {
    setIsFull(true);
  };
  const noFull = () => {
    setIsFull(false);
  };
  return (
    <div>
      {/* 카운터 변수 화면 출력 */}
      <p>{`총 ${count}명을 추용했습니다.`}</p>
      {/* 증가버튼 */}
      <button className="btn btn-primary" onClick={increaseCount}>
        입장
      </button>

      {/* todo : 감소버튼 */}
      <br />
      <button className="btn btn-warning" onClick={decreaseCount}>
        퇴장
      </button>
      {
        // isFull 참이면 && 실행문(태그) : 실행문이 화면에 보임
        // true && true => true 이면 판단(실행) , false 이면 판단(실행)하지 않음
        isFull && (
          // 사용법 : let [변수명, set변수명] = setState(초기값)
          <p style={{ color: "red" }}>정원이 가득찼습니다.</p>
        )
      }
    </div>
  );
}

export default A_Accommodate;
