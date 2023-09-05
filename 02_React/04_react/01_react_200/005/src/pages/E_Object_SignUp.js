// E_Object_SignUp_Exam.js : 자식(연습)
// rfce
import React, { useState } from "react";

// todo : 연습문제 ) 객체르 사용하는 형태로 코딩하세요
// todo : useStat() 1번만 사용하고 객체 변수 만들고, handleChange함수만 코딩하기
function E_Object_SignUp() {
  // 객체 정의
  let initialCustomer = {
    name: "",
    password: "",
    email: "",
    phone: "",
    address: "",
  };

  let [customer, setCustomer] = useState(initialCustomer);

  let handleChange = (event) => {
    let attrValue = event.target.value;
    let attrName = event.target.name;
    setCustomer({...customer,[attrName]:attrValue})
  };

  let handleSubmit = ()=>{
    alert(`
    name ${customer.name}
    password ${customer.password}
    email ${customer.email}
    phone ${customer.phone}
    address ${customer.address}`)

    
  }
  return (
    <div className="container">
      <form>
        {/* 이름 시작 */}
        <label>
          이름:
          <input
            className="form-control"
            type="text"
            value={customer.name}
            name="name"
            onChange={handleChange}
          />
        </label>
        {/* 이름 끝 */}
        <br />
        {/* 패스워드 시작 */}
        <label>
          패스워드:
          <input
            className="form-control"
            type="password"
            value={customer.password}
            name="password"
            onChange={handleChange}
          />
        </label>
        {/* 패스워드 끝 */}
        <br />
        {/* 이메일 시작 */}
        <label>
          email:
          <input
            className="form-control"
            type="email"
            value={customer.email}
            name="email"
            onChange={handleChange}
          />
        </label>
        {/* 이메일 끝 */}
        <br />
        {/* 전화번호 시작 */}
        <label>
          phone:
          <input
            className="form-control"
            type="text"
            value={customer.phone}
            name="phone"
            onChange={handleChange}
          />
        </label>
        {/* 전화번호 끝 */}
        <br />
        {/* 주소 시작 */}
        <label>
          주소:
          <input
            className="form-control"
            type="text"
            value={customer.address}
            name="address"
            onChange={handleChange}
          />
        </label>
        {/* 주소 끝 */}
        {/* 제출 버튼 시작 */}
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          제출
        </button>
        {/* 제출 버튼 끝 */}
      </form>
    </div>
  );
}

export default E_Object_SignUp;
