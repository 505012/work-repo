import React, { useState } from "react";
import "../assets/chapter15.css"

function Add_Dept() {
  // todo : 변수정의 (바인딩변수 useState())
  // 임시 객체
  const ubititalDept = {
    dname: "", //부서명
    loc: "", //부서위치
  };

  // 바인딩 변수
  // 사용법 : let[ 변수명, set변수명] = usestate(초기값);
  let [dept, setDept] = useState(ubititalDept); //input 부서명/부서위치
  // todo : 함수 정의
  // 역바인딩 함수 : onChang의 함수와 바인딩(개발자가 직 접 고딩)
  // nfn : 화살표 함수 단축키
  const handleChange = (event) => {
    // 현재 화면 입력값 :
    let attrValue = event.target.value;
    // 현재 화면 태그 이름 :
    let attrName = event.target.name; //태그의 이름 === 객체의 속성명
    //스프레드 연산자로 객체 속성 수정
    setDept({ ...dept, [attrName]: attrValue });
  };

  //  클릭 이벤트 함수
  // nfn : 화살표 단축키
  const saveDept = () => {
    alert("저장되었습니다.");
  };
  return (
    <div className="submit-form">
      <div>
        <div className="form-group mb-3">
          <label htmlFor="dname">Dname</label>
          <input
            type="text"
            className="form-control"
            id="dname"
            required
            value={dept.dname}
            onChange={handleChange}
            name="dname"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="loc">Loc</label>
          <input
            type="text"
            className="form-control"
            id="loc"
            required
            value={dept.loc}
            onChange={handleChange}
            name="loc"
          />
        </div>

        <button onClick={saveDept} className="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Add_Dept;
