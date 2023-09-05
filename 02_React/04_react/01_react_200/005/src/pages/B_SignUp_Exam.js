// B_SignUp_Exam.js : 자식(연습)
// rfce
import React, { useState } from "react";

function B_SignUp_Exam() {
  // todo 변수
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [address, setAddress] = useState("");

  // todo 함수
  let handleChangeName = (event) => {
    setName(event.target.value);
  };
  let handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  let handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  let handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  let handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  let handleSubmit = () => {
    alert(`name : ${name} 
    password :  ${password} 
    email : ${email} 
    phone : ${phone} 
    address : ${address}`);
  };
  return (
    // TODO: 여기
    <div>
      <form>
        <label>
          이름:
          <input
            className="form-control"
            type="text"
            value={name}
            name="name"
            onChange={handleChangeName}
          />
        </label>

        <br />
        <label>
          패스워드:
          <input
            className="form-control"
            type="password"
            value={password}
            name="password"
            onChange={handleChangePassword}
          />
        </label>

        <br />
        <label>
          email:
          <input
            className="form-control"
            type="email"
            value={email}
            name="email"
            onChange={handleChangeEmail}
          />
        </label>

        <br />
        <label>
          phone:
          <input
            className="form-control"
            type="text"
            value={phone}
            name="phone"
            onChange={handleChangePhone}
          />
        </label>

        <br />
        <label>
          주소:
          <input
            className="form-control"
            type="text"
            value={address}
            name="address"
            onChange={handleChangeAddress}
          />
        </label>

        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          제출
        </button>
      </form>
    </div>
  );
}

export default B_SignUp_Exam;
