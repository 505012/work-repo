// Dept.js 자식 컴포넌트
// rfce
import React from "react";
import { useState } from "react";

function Dept() {
  // 객체배열 === JSON 데이터(문서)
  const initialDepts = [
    {
      no: "1",
      dname: "Sales",
    },
    {
      no: "2",
      dname: "Marketing",
    },
    {
      no: "3",
      dname: "Research",
    },
  ];
  // 바인딩 변수
  // 사용법 : let [변수명,set변수명] = useState(초기값);
  let [dept, setDept] = useState(initialDepts);
  return (
    <div className="container mt-5">
      {/* dept.map() 함수 실행 : 목록 태그(ul-li(반복문) : 부트스크랩) */}
      <h4>Dept List</h4>

      <ul class="list-group mt-3">
        {/* dept.map(()=>(태그)) */}
        {dept.map((value, index) => (
          <li class="list-group-item" key={index}>
            {value.dname}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dept;
