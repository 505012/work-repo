// D_SpreadOperator.js : ...연산자 다시 연습
// rfce
import React, { useEffect } from "react";

function D_SpreadOperator() {
  // 화면이 뜰때 자동 실행되는 이벤트 함수 : 생명주기(생성)
  useEffect(() => {
    // ...연산자 연습
    let num = {
      name: "홍길동",
      email: "hong@daum.net",
    };

    console.log({ name: "장길산ss" });
    console.log(num.name + "gg");
    // todo : num객체의 name값 수정
    console.log({ ...num, name: "장길산" });
    console.log(num.name + "gg");

    // todo 연습문제
    // todo 원본 객체의 속성은 모두 유지한채 name : "임꺽정 으로 바꾸세요"
    // 결과 : name:"임꺽정" email:""
    let num2 = { name: " ", email: " " };
    console.log({ ...num2, name: "임꺽정" });
    console.log(num2.name + "gg");

    // 예제2) 변수를 이용해서 객체의 속성값을 수정하세요
    let num3 = { name: "홍길동", email: "hong@daum.net" };
    let attrValue = "hong@naver.com";
    // 하드코딩 지양하고 소프트코딩해야됨(변수 다루기)
    console.log({ ...num3, email: attrValue });
    console.log(num3.email);

    // 예제3) 변수를 속성명/속성값 2개에 사용해서 수정하기
    let num4 = {
      name: "홍길동",
      email: "hong@daum.net",
    };
    let attrValue2 = "hong@naver.ccom"
    let attrName2 = "email"
    // 속성명에 변수를 사용할 때는 [변수명]
    // 속성값에 변수를 사용할때는 변수명
    console.log({...num4,[attrName2]:attrValue2})

    // todo 연습문제2
    // attrName3 에는 속성명 "phone"을 넣고, attrValue3에는 속성값 "010-5678-5678" 들어있습니다.
    let num5 = {
        age:15,
        phone:"010-1234-5678"
    }
    let attrName3 = "phone";
    let attrValue3 = "010-5678-5678";
    console.log({...num5,[attrName3]:attrValue3})


  }, []);


  return <div>D_SpreadOperator</div>;
}

export default D_SpreadOperator;
