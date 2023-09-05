// E_ConfirmButton_Exam.js : 자식(연습)
// rfce

import React from "react";
import { useState } from 'react';

function E_ConfirmButton_Exam() {
    let [isFull,setIsFull] = useState(false)

    const handConfirm = () => { 
        setIsFull(true)
     }
  return (
    <div>
      <button onClick={handConfirm} className="btn btn-warning">
        {isFull?<p style={{ color: "red" }}>정원이 가득찼습니다.</p>:<p style={{ color: "blue" }}>입장할 수 있습니다.</p>}
      </button>
    </div>
  );
}

export default E_ConfirmButton_Exam;
