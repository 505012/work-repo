// D_ImportComp.js : 자식 컴포넌트
// todo : 리액트 컴포넌트 디자인 적용하기 : css 파일 적용
// todo : 1) css파일 준비해서 import하면 적용됨
// todo : 프로젝트가 커질수록 디자인 클래스 선택자 들이 중첩될 수 있다.
// todo : 에) A 사람 css : class : .alpha, B 사람 css : .alpha
// todo :     p : 노란색                   p : 파란색
// todo : 2) 공통 디자인 적용할 사람 : 테그선택자 등을 자유롭게 코딩
// todo : 3)클래스/id 선택자로 디자인 함 : 프로젝트명(dms01-클래스명~05-클래스명)
// rfce

import React from 'react'
// css 파일 import
// 사용법 : import "css파일 경로"
import "../assets/D_ImportComp.css"

function D_ImportComp() {
  return (  
    // todo 화면에 보이는 부분
    <div>
        {/* class=" " => className=" "  리액트는 class 대신 사용함*/}
        <h2 className="dms01-h2">ImportComp</h2>
    </div>
  )
}

export default D_ImportComp