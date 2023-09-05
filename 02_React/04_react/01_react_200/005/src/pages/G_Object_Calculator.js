// G_Object_Calculator.js 자식 컴포넌트(연습)
// rfce : 템플릿 단축키
import React, { useState } from "react";

function G_Object_Calculator() {
  let initialTemp = {
    cTemp: 0,
    fTemp: 0,
  };

  let [temp, setTemp] = useState(initialTemp);

  const handleChange = (event) => {
    let setValue = event.target.value;
    let setName = event.target.name;
    setTemp({ ...temp, [setName]: setValue });
  };
  return (
    <div>
      <div>
        <fieldset>
          {/* (섭씨온도 * 1.8) + 32 = 화씨온도 */}
          <legend>섭씨온도를 입력해주세요:</legend>
          <input value={temp.cTemp} name="cTemp" onChange={handleChange} />
          <p>화씨온도 : {temp.cTemp * 1.8 + 32} </p>
        </fieldset>

        <fieldset>
          {/* (화씨온도 - 32) / 1.8 = 섭씨온도 */}
          <legend>화씨온도를 입력해주세요:</legend>
          <input value={temp.fTemp} name="fTemp" onChange={handleChange} />
          <p>섭씨온도 : {(temp.fTemp - 32) / 1.8} </p>
        </fieldset>
      </div>
    </div>
  );
}

export default G_Object_Calculator;
