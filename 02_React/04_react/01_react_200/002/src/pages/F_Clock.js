// F_Clock.js : 자식
// rfce
import React from 'react'

function F_Clock() {
  return (
    // 화면에 보이는 부분
    <div>
        <h1>안녕, 리액트</h1>
        <h2>현재 시간 : 
            {/* .toLocaleTimeString(): 국가별 현재시간 출력 */}
            {new Date().toLocaleTimeString()}
        </h2>
        
    </div>
  )
}

export default F_Clock