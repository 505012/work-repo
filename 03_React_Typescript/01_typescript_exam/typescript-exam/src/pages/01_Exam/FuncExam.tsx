// FuncExam.rsx : 자식( 연습)
import React from "react";
import { useState } from "react";

function FuncExam() {
  // 변수 정의
  let [password, setPassord] = useState<string>("");
  let [message, setMessage] = useState<string>("");
  // 함수 정의"
  const onChangPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassord(event.target.value);
  };
  const getInput = (str: string, num: number, bool: boolean): void => {
    setMessage(`${str} 오늘 날짜는 ${num}일이 맞나요? 답은 ${bool}입니다.`);
  };

  return (
    <div className="container">
      <input
        className="form-control mt-3 mb-3 w-25"
        type="password"
        name="password"
        value={password}
        onChange={onChangPassword}
      />
      입력값 : {password}
      <br />
      <button
        className="btn btn-primary mt-3 mb-3"
        onClick={() => getInput("안녕하세요", 4, true)}
      >
        입력값
      </button>
      <br />
      {message}
    </div>
  );
}

export default FuncExam;
